import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserProfile,
} from "@clerk/clerk-react";
import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import Home from "../pages/Home";
import { ClerkProvider } from "@clerk/clerk-react";
import DashboardSection from "../pages/Home/Components/DashboardSection";
import DestinationsSection from "../pages/Home/Components/DestinationsSection";
import AchievementsSection from "../pages/Home/Components/AchievementsSection";
import DestinationSection from "../pages/Home/Components/DestinationSection";
import { Box } from "@mui/system";

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

export default function AppRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
      <Routes>
        <Route
          path="/sign-up"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/sign-in"
          element={<SignIn routing="path" path="/sign-in" />}
        />

        <Route path="/dashboard" element={<Home />}>
          <Route path="" element={<DashboardSection />} />
          <Route path="destinations" element={<DestinationsSection />} />
          <Route path="destinations/:name" element={<DestinationSection />} />
          <Route path="achievements" element={<AchievementsSection />} />
          <Route
            path="user"
            element={
              <Box sx={{ width: "100%" }}>
                <UserProfile only="account" />
              </Box>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ClerkProvider>
  );
}
