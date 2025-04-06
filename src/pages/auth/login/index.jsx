import React from "react";
import logo from "../../../assets/logo.svg";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-gray-100 bg-opacity-50">
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm p-4 dark:bg-gray-700">
          <div className="flex items-center justify-center p-4 md:p-5 border-b border-[#c1c1c1] dark:border-gray-600 rounded-t">
            <img src={logo} className="h-12" alt="logo" />
            <button
              type="button"
              // onClick={onClose}
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute right-5"
            >
              <X />
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-2">
            <h2 className="text-center font-semibold text-xl">Welcome</h2>
            <h4 className="text-center">
              Enter your email address to register or sign in.
            </h4>
          </div>

          <div>
            <Input type="email" placeholder="Email ID" className="py-7" />
            <span className="text-sm color-[#ab1e56] mt-2">
              Please enter your Email ID
            </span>
          </div>

          <div className="flex items-center border-gray-200 dark:border-gray-600 rounded-b">
            <Button
              // onClick={onClose}
              className="w-full py-7 rounded-none bg-[#191919]"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
