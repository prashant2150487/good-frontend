import { Navigate } from "react-router-dom";


import React from "react";



const ProtectedRoutes=({Children})=>{
    const isAuthenticated=localStorage.getItem("token")
    return isAuthenticated() ? Children : <Navigate to="/auth/login" replace />
}
export default ProtectedRoutes;