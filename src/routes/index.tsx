import React from "react";
import { Navigate, Route, Routes } from "react-router";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
