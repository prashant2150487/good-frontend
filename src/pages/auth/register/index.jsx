import React, { useEffect, useState, useMemo } from "react";
import logo from "@/assets/logo.svg";
import { CalendarIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSelector } from "react-redux";
import axiosInstance from "@/api/axiosInstance/axios";
import { useLocation } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    countryCode: "",
    contactNumber: "",
    term: false,
  });

  const [date, setDate] = useState(new Date());
  const [errors, setErrors] = useState({});
  const countryData = useSelector((state) => state.countryData.countryData);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.email) {
      setFormData((prev) => ({
        ...prev,
        email: location.state.email,
      }));
    }
  }, [location.state]);
  console.log(formData);


  const memoizedCountryOptions = useMemo(() => {
    return countryData.map((country) => {
      const countryName = country?.nameAscii;
      if (!countryName) return null;
      return (
        <SelectItem key={country.id} value={country?.nameAscii}>
          {country?.nameAscii}
        </SelectItem>
      );
    });
  }, [countryData]);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required";
    if (!formData.term)
      newErrors.term = "You must agree to Terms and Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    const payLoad = {
      ...formData,
      dateOfBirth: date.toISOString().split("T")[0],
    };
    try {
      const response = await axiosInstance.post(
        "/admin/auth/register",
        payLoad
      );
      console.log(response.data);

      // Reset form
      setFormData({
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        country: "",
        countryCode: "",
        contactNumber: "",
        term: false,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full max-h-full min-h-screen overflow-x-hidden bg-gray-100 bg-opacity-50">
      <div className="relative w-full max-w-xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm p-4 dark:bg-gray-700 ">
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

          <div className="p-4 md:p-5 space-y-2  ">
            <h2 className="text-center font-semibold text-xl">Welcome</h2>
            <h4 className="text-center">
              Enter your email address to register or sign in.
            </h4>
          </div>
          <form
            className="p-4 md:p-5 overflow-auto h-96"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4">
              <div>
                <Label
                  htmlFor="email"
                  type="email"
                  className="text-xs font-normal"
                >
                  Email ID*
                </Label>
                <Input
                  type="email"
                  placeholder="Email ID"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div>
                <Label htmlFor="firstName" className="text-xs font-normal">
                  First Name*
                </Label>
                <Input
                  type="test"
                  placeholder="First Name*"
                  id="email"
                  name="email"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName" className="text-xs font-normal">
                  Last Name*
                </Label>
                <Input
                  type="test"
                  placeholder="Last Name*"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName}</p>
                )}
              </div>
              <div>
                <Select
                  value={formData.gender}
                  onValueChange={(value) =>
                    setFormData({ ...formData, gender: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-red-500 text-xs">{errors.gender}</p>
                )}

                {/* <Label htmlFor="lastName" className="text-xs font-normal">
                  Last Name*
                </Label>
                <Input
                  type="test"
                  placeholder="Last Name*"
                  id="lastName"
                  name="lastName"
                /> */}
              </div>
              <div>
                <Label htmlFor="dateOfBirth" className="text-xs font-normal">
                  Date of Birth*
                </Label>
                <Popover className="w-full">
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Button className="w-full text-start" variant="outline">
                        DD/MM/YY
                      </Button>
                      <CalendarIcon className="absolute top-1/7 right-4 text-gray-500" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      value={date}
                      onChange={setDate}
                      className="rounded-md w-fit"
                    />
                  </PopoverContent>
                </Popover>

                {/* <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-fit"
                  /> */}
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Country</SelectLabel>
                      {memoizedCountryOptions}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-red-500 text-xs">{errors.country}</p>
                )}
              </div>
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                </Select>
                <div className="w-full">
                  {/* <Label htmlFor="lastName">Contact Number</Label> */}
                  <Input
                    type="text"
                    placeholder="Contact Number*"
                    id="lastName"
                    name="lastName"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subscribe me for Whatsapp updates.
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the Terms and Conditions*
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receiving e-mails, newsletters, calls and text
                  messages for service related information. To know more how we
                  keep your data safe, refer to our Privacy Policy
                </label>
              </div>
              <Button
                type="submit"
                className="w-full py-7 rounded-none bg-[#191919]"
              >
                CREATE MY ACCOUNT & PROCEED
              </Button>
              <Button
                variant="outline"
                className="w-full py-7 rounded-none border-[#191919] text-[#191919]"
              >
                GO BACK
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
