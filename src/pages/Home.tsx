import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "../components/LoginContainer";
import { useAuth } from "../contexts/AuthContext";

interface HomeProps {
  onOpenSignupModal: () => void;
}

export function Home({ onOpenSignupModal }: HomeProps) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleUserlogin(event: FormEvent) {
    event.preventDefault();
    try {
      await signIn(email, password);
      navigate("/user");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <LoginContainer
      email={email}
      password={password}
      setPassword={setPassword}
      setEmail={setEmail}
      handleUserlogin={handleUserlogin}
      onOpenSignupModal={onOpenSignupModal}
    />
  );
}
