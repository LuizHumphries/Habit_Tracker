import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDashboard } from "./pages/UserDashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { useState } from "react";
import { SignUpModal } from "./components/LoginModal";
import Modal from "react-modal";

import "./styles/tailwind.css";

Modal.setAppElement("#root");

export default function App() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  function handleOpenNewSignupModal() {
    setIsSignUpModalOpen(true);
  }

  function handleCloseNewSignupModal() {
    setIsSignUpModalOpen(false);
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <SignUpModal
          isOpen={isSignUpModalOpen}
          onRequestClose={handleCloseNewSignupModal}
        />
        <Routes>
          <Route
            path="/"
            element={<Home onOpenSignupModal={handleOpenNewSignupModal} />}
          />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
