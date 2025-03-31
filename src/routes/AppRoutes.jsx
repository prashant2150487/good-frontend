import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Login = lazy(() => import("@/pages/auth/login"));
const Home = lazy(() => import("@/pages/Home"));
const AppRoutes = () => {
  return (
<Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
