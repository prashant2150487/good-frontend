import BaseLayout from "@/components/baseLayout";
import Register from "@/pages/register";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Login = lazy(() => import("@/pages/auth/login"));
const Home = lazy(() => import("@/pages/Home"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
        <Route
          path="/auth/login"
          element={
            <BaseLayout>
              <Login />
            </BaseLayout>
          }
        />
        <Route
          path="/auth/register"
          element={
            <BaseLayout>
              <Register />
            </BaseLayout>
          }
        />
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
