import db from "../../services/firebase";

import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import iconClose from "../../assets/images/iconclose.svg";

interface SignUpModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

const customStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  content: {
    position: "relative",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    width: "100%",
    maxWidth: "720px",
    maxHeight: "720px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "2px solid rgba(244, 63, 94, 1)",
  },
};

export function SignUpModal({ isOpen, onRequestClose }: SignUpModalProps) {
  const [userSignUp, setUserSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [equalPasswordSignUp, setEqualPasswordSignUp] = useState("");

  const { signUp, addUserSignUp, signIn } = useAuth();
  const navigate = useNavigate();

  async function handleUserCreation(event: FormEvent) {
    event.preventDefault();

    try {
      await signUp(emailSignUp, passwordSignUp).catch(function (err) {
        var errorCode = err.code;
        if (errorCode === "auth/email-already-in-use") {
          alert("Email already in use");
          throw err;
        }
      });
      await addUserSignUp(userSignUp, emailSignUp);
      onRequestClose();
      await signIn(emailSignUp, passwordSignUp);
      navigate("/user");
    } catch {}
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="absolute right-[1.5rem] top-[1.5rem] border-0 background-transparent"
      >
        <img src={iconClose} alt="closeModal" className="h-[20px] w-[20px]" />
      </button>
      <form
        className="flex flex-col items-center justify-center m-auto"
        onSubmit={handleUserCreation}
      >
        <h2 className="mb-[5rem] text-3xl">Sign Up</h2>
        <input
          placeholder="name"
          className="h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
          value={userSignUp}
          onChange={(event) => setUserSignUp(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          className="mt-[1rem] h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
          value={emailSignUp}
          onChange={(event) => setEmailSignUp(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="mt-[1rem] h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
          value={passwordSignUp}
          onChange={(event) => setPasswordSignUp(event.target.value)}
        />
        <input
          type="password"
          placeholder="repeat password"
          className="mt-[1rem] h-9 text-center bg-opacity-20 bg-rose-500 rounded-[1rem] w-[25rem]  focus:outline-rose-500"
          value={equalPasswordSignUp}
          onChange={(event) => setEqualPasswordSignUp(event.target.value)}
        />
        <button
          type="submit"
          className="mt-[5rem] border-solid border-1 border-rose bg-pink-600 rounded-[1rem] w-[25rem] h-[2rem] hover:scale-105 "
        >
          Register
        </button>
      </form>
    </Modal>
  );
}
