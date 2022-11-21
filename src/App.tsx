import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDashboard } from "./pages/UserDashboard";
import "./styles/tailwind.css";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
