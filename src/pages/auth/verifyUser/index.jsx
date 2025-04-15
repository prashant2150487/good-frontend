import React from "react";
import logo from "../../../assets/logo.svg";
import { Link, Navigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
const VerifyUser = () => {
  const [optValue, setOtpValue] = React.useState("");
  console.log("otpValue", optValue);

  const location = useLocation();
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-gray-100 bg-opacity-50">
      <div className="relative w-full max-w-lg  max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm p-4 dark:bg-gray-700">
          <div className="flex items-center justify-center p-4 md:p-5 border-b border-[#c1c1c1] dark:border-gray-600 rounded-t">
            <img src={logo} className="h-12" alt="logo" />
            <button
              type="button"
              onClick={() => Navigate("/")}
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute right-5"
            >
              <X />
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-2">
            <h2 className="text-center font-semibold text-xl">Welcome</h2>
            <h4 className="text-center">
              Please enter the otp sent to {location.state?.email} to login .
            </h4>
          </div>
          <form>
            <div className="flex justify-center">
              <InputOTP
                maxLength={6}
                value={optValue}
                pattern={REGEXP_ONLY_DIGITS}
                onChange={(value) => setOtpValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 mt-4">
              <Button className="w-full p-6 bg-gray-600">
                Verify OTP & Proceed
              </Button>
              <Button className="w-full p-6 bg-gray-600"> GO Back</Button>
              <Link to="/" className="text-sm underline">View Privacy Policy</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
