import React, { useState } from "react";
import logo from "../../../assets/logo.svg";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/api/axiosInstance/axios";
import googleImg from "../../../assets/goggleImg.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleChange = (email) => {
    setEmail(email);
    if (!validateError(email)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };
  const validateError = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!validateError(email)) {
      setError("Please enter a valid email");
    }
    try {
      setLoading(true);
      const response = await axiosInstance.post("/admin/auth/checkUser", {
        email,
      });
      if (response.data?.success) {
        if (response.data.emailExist) {
          console.log("email exist");
        } else {
          navigate("/auth/register");
        }
      }
      console.log(response);
    } catch (e) {
      console.error("Error fetching data", e);
    } finally {
      setLoading(false);
    }
  };
  console.log("email", email);
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-gray-100 bg-opacity-50">
      <div className="relative w-full max-w-lg  max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm p-4 dark:bg-gray-700">
          <div className="flex items-center justify-center p-4 md:p-5 border-b border-[#c1c1c1] dark:border-gray-600 rounded-t">
            <img src={logo} className="h-12" alt="logo" />
            <button
              type="button"
              onClick={() => navigate("/")}
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
            <Input
              type="email"
              placeholder="Email ID"
              className="py-7"
              value={email}
              onFocus={() => setError("")}
              onChange={(e) => handleChange(e.target.value)}
            />
            {error && (
              <span className="text-sm font-normal text-[#ab1e56] mt-2">
                {error}
              </span>
            )}
          </div>

          <div className="flex items-center border-gray-200 dark:border-gray-600 rounded-b mt-4">
            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-7 rounded-none bg-[#191919] text-md"
              disabled={loading}
            >
              CONTINUE
            </Button>
          </div>
          <div className="my-20 flex flex-col gap-5 ">
            <span className="text-center text-gray-400"> -OR LOGIN USING -</span>
            <div className="bg-gray-100 p-3 rounded-full w-fit mx-auto">
              <img
                src={googleImg}
                alt="googleImg"
                width={30}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
