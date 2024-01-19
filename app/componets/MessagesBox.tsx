import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react'
interface Props {
  success: MembersSuccessResponse|undefined;
  error: string
  dismissMessages: () => void
}

function MessagesBox({success, error, dismissMessages}: Props) {
  return (
    <div className="relative">
      {(success || error) && (
        <div className="flex items-start space-x-2 bg-[#0A0E12] shadow-outline-gray text-white rounded-[9px] py-4 px-6 animate-fade-bottom absolute">
          <div className="h-6 w-6 bg-[#1B2926] flex items-center justify-center rounded-full border border-[#273130] flex-shrink-0">
            <CheckIcon className="h-4 w-4 text-[#81A89A]" />
          </div>
          <div className="text-xs sm:text-sm text-[#4B4C52]">
            {success ? (
              <p>
                We&apos;ve added{" "}
                <span className="text-[#ADB0B1]">
                  {success.email_address}
                </span>{" "}
                to our waitlist. We&apos;ll let you know when we launch!
              </p>
            ) : (
              <p>
                You are already added to our waitlist. We&apos;ll let you know
                when we launch!
              </p>
            )}
          </div>
          <XMarkIcon
            className="h-5 w-5 cursor-pointer flex-shrink-0 text-[#4A4B55]"
            onClick={dismissMessages}
          />
        </div>
      )}
    </div>
  );
}

export default MessagesBox