"use client";

import { getPlaneKeyframes } from "@/lib/getPlaneKeyframes";
import { getTrailsKeyframes } from "@/lib/getTrailsKeyframes";
import {
  AtSymbolIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { FormEvent, useEffect, useRef, useState } from "react";
import AirplaneButton from "./AirplaneButton";
import MessagesBox from "./MessagesBox";

function NewsletterForm() {
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumer, setPhoneNumber] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { to, fromTo, set } = gsap;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailAddress;
    const firstN = firstName;
    const lastN = lastName;
    const phoneN = phoneNumer;
    const userL = userLocation;
    const instagramU = instagramUsername;
    const button = buttonRef.current;

    if (!email || !button) return;

    if (!active) {
      setActive(true);

      to(button, {
        keyframes: getPlaneKeyframes(
          set,
          fromTo,
          button,
          setActive,
          setEmailAddress,
          setFirstName,
          setLastName,
          setPhoneNumber,
          setInstagramUsername,
          setUserLocation,
        ),
      });

      to(button, { keyframes: getTrailsKeyframes(button) });
    }

    const res = await fetch("/api/addSubscription", {
      body: JSON.stringify({ email, firstN, lastN, phoneN, instagramU, userL }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();

    if (data.error) {
      setErrorMessage("Hey, you are already subscribed!");
      setSuccessMessage(undefined);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");
    console.log(data);
  };

  const dismissMessages = () => {
    setSuccessMessage(undefined);
    setErrorMessage("");
  };


  return (
    <div className="flex flex-col space-y-8 md:w-[600px]">
      <form
        onSubmit={handleSubmit}
        className="newsletter-form mt-10 animate-fade-in-3 flex justify-start items-center flex-col space-y-2">
        <div className="flex flex-col items-start space-y-2 ">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-2 ">
            <div className="group inputForm">
              <UserCircleIcon className="inputFormIcon" />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="inputFormField"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="group inputForm">
              <UserCircleIcon className="inputFormIcon" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="inputFormField"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between sm:space-y-0 space-y-2 sm:space-x-2 ">
            <div className="group inputForm">
              <PhoneIcon className="inputFormIcon" />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                className="inputFormField"
                value={phoneNumer}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="group inputForm">
              <AtSymbolIcon className="inputFormIcon" />
              <input
                type="text"
                name="lastName"
                placeholder="Instagram Username"
                className="inputFormField"
                value={instagramUsername}
                onChange={(e) => setInstagramUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between sm:space-y-0 space-y-2 sm:space-x-2 ">
            <div className="group inputForm">
              <EnvelopeIcon className="inputFormIcon" />
              <input
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Email Address"
                required
                type="email"
                className="inputFormField"
              />
            </div>
            <div className="group inputForm">
              <MapPinIcon className="inputFormIcon" />
              <input
                type="text"
                name="lastName"
                placeholder="City e.g: San Jose, CA"
                className="inputFormField"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          ref={buttonRef}
          className={`${
            active && "active"
          } disabled:!bg-[#17141F] disabled:grayscale-[65%] 
          disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base w-1/3`}
          disabled={
            !emailAddress ||
            !firstName ||
            !lastName ||
            !phoneNumer ||
            !instagramUsername ||
            !userLocation
          }
          type="submit">
          <AirplaneButton />
        </button>
      </form>

      <MessagesBox
        success={successMessage}
        error={errorMessage}
        dismissMessages={dismissMessages}
      />
    </div>
  );
}

export default NewsletterForm;
