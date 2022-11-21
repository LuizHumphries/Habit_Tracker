import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDashboard } from "./pages/UserDashboard";
import "./styles/tailwind.css";
import { AuthProvider } from "./contexts/AuthContext";
import Modal from "react-modal";
import { useState } from "react";
import { LoginModal } from "./components/LoginModal";

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
    <>
      <LoginModal
        isOpen={isSignUpModalOpen}
        onRequestClose={handleCloseNewSignupModal}
      />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home onOpenSignupModal={handleOpenNewSignupModal} />}
            />

            <Route path="/user" element={<UserDashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
