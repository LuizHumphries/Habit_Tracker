import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDashboard } from "./pages/UserDashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { useState } from "react";
import { SignUpModal } from "./components/SignUpModal";
import Modal from "react-modal";

import "./styles/tailwind.css";
import { HabitModal } from "./components/HabitModal";

Modal.setAppElement("#root");

export default function App() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);

  function handleOpenNewSignupModal() {
    setIsSignUpModalOpen(true);
  }
  function handleOpenHabitModal() {
    setIsHabitModalOpen(true);
  }

  function handleCloseNewSignupModal() {
    setIsSignUpModalOpen(false);
  }
  function handleCloseHabitModal() {
    setIsHabitModalOpen(false);
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <SignUpModal
          isOpen={isSignUpModalOpen}
          onRequestClose={handleCloseNewSignupModal}
        />
        <HabitModal isOpen={isHabitModalOpen} onRequestClose={handleCloseHabitModal} />
        <Routes>
          <Route
            path="/"
            element={<Home onOpenSignupModal={handleOpenNewSignupModal} />}
          />
          <Route
            path="/user"
            element={<UserDashboard handleOpenHabitModal={handleOpenHabitModal} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
