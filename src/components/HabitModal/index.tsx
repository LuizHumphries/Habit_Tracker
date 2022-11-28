import { FirebaseAuthInvalidCredentialsException } from "firebase";
import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import iconClose from "../../assets/images/iconclose.svg";
import { useAuth } from "../../contexts/AuthContext";

interface HabitModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const customStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(17, 24, 39, 0.97)",
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
    backgroundColor: "#ec4b6652",
    border: "2px solid rgba(244, 63, 94, 1)",
  },
};

export function HabitModal({ isOpen, onRequestClose }: HabitModalProps) {
  const [userHabit, setUserHabit] = useState("");

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="absolute right-[1.5rem] top-[1.5rem] border-0 background-transparent"
      >
        <img src={iconClose} alt="closeModal" className="h-[20px] w-[20px]" />
      </button>
      <form className="flex flex-col items-center justify-center m-auto gap-5">
        <h2 className="mb-[5rem] text-3xl text-white">Create Your Habit</h2>
        <input
          placeholder="name"
          className="h-9 text-center  w-[25rem] bg-opacity-20 bg-gray-400 focus:outline-gray-500 border-b-2 border-gray-300 "
          value={userHabit}
          onChange={(event) => setUserHabit(event.target.value)}
        />
        <button
          type="button"
          className="mt-[5rem] border-solid border-1 border-rose bg-purple-600 bg-opacity-40 rounded-[1rem] w-[25rem] h-[2rem] hover:scale-105 "
        >
          Confirm
        </button>
      </form>
    </Modal>
  );
}
