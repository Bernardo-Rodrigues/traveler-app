import React from "react";
import { Navigate, Route, Routes } from "react-router";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
