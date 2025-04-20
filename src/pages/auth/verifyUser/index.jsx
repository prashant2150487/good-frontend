import React, { useEffect } from "react";
import logo from "../../../assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import axiosInstance from "@/api/axiosInstance/axios";
import { toast } from "sonner";

const VerifyUser = () => {
  const [otpValue, setOtpValue] = React.useState("");
  const [maxAttempt, setMaxAttempt] = React.useState(0);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMaxAttempt(location.state?.attemptCount);
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpValue.length < 6) {
      toast.error("Please enter all 6 digits.");
      return;
    }
    try {
      const response = await axiosInstance.post("/admin/auth/verifyOtp", {
        email: location.state?.email,
        otp: otpValue,
      });
      if (response.data?.success) {
        toast.success("OTP verified successfully.");
        navigate("/");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP", error);
      setMaxAttempt(5-error.response?.data?.remainingAttempts);
      setOtpValue("")
      if(error.response?.data?.maxAttemptsReached){
        setError("Maximum attempts reached. Please try again later.");
      }
      toast.error(error.response?.data?.message || "An error occurred while verifying OTP.");
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-gray-100 bg-opacity-50">
      <div className="relative w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm p-4 dark:bg-gray-700">
          <div className="flex items-center justify-center p-4 md:p-5 border-b border-[#c1c1c1] dark:border-gray-600 rounded-t">
            <img src={logo} className="h-12" alt="logo" />
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute right-5"
            >
              <X/>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-2">
            <h2 className="text-center font-semibold text-xl">Welcome</h2>
            <h4 className="text-center">
              Please enter the OTP sent to {location.state?.email} to login.
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center flex-col items-center space-y-2">
              <InputOTP
                maxLength={6}
                value={otpValue}
                pattern={REGEXP_ONLY_DIGITS}
                onChange={(value) => setOtpValue(value)}
              >
                <InputOTPGroup className="gap-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <InputOTPSlot
                      key={index}
                      index={index}
                      className="p-6 rounded-sm border border-[#E5E5E5] "
                    />
                  ))}
                </InputOTPGroup>
                
              </InputOTP>
              {error && (
                <p className="text-red-500 text-xs text-center mt-0">
                  {error}
                </p>
              )}
            </div>
            <div>
              <span className="flex justify-center gap-2 items-center mt-4 text-xs">
                <p>DIDN’T RECEIVE OTP? </p>
                <Link
                  to="/auth/resend-otp"
                  className="text-[#4C4C4C] underline text-sx"
                >
                  Resend OTP
                </Link>
              </span>
              <p className="text-center">Attempt: {maxAttempt}/5</p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 mt-4">
              <Button
                className="w-full p-6 bg-[#9F9F9F] rounded-none"
                type="submit"
              >
                VERIFY OTP & PROCEED
              </Button>
              <Button
                disabled={otpValue.length < 6}
                className="w-full p-6 rounded-none border border-[#4C4C4C]"
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                GO Back
              </Button>
              <Link to="/" className="text-sm underline">
                View Privacy Policy
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
