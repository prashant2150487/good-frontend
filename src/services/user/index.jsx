import axiosInstance from "@/api/axiosInstance/axios";

export const getCountryStateCity = async () => {
  const response = await axiosInstance.get("/admin/user/getCountryStateCity");
  return response.data;
};
