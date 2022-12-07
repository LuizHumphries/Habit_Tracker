import { FirebaseAuthInvalidCredentialsException } from "firebase";
import { FormEvent, useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import iconClose from "../../assets/images/iconclose.svg";
import { useMonth } from "../../hooks/useMonth";

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
  function PopulateMonthDays(monthdays: number, text: string) {
    var arr = [];
    for (var i = 0; i < monthdays; i++) {
      arr.push(text);
    }
    return arr;
  }

  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  const yearMonths = {
    January: PopulateMonthDays(daysInMonth(1, new Date().getFullYear()), ""),
    Febuary: PopulateMonthDays(daysInMonth(2, new Date().getFullYear()), ""),
    March: PopulateMonthDays(daysInMonth(3, new Date().getFullYear()), ""),
    April: PopulateMonthDays(daysInMonth(4, new Date().getFullYear()), ""),
    May: PopulateMonthDays(daysInMonth(5, new Date().getFullYear()), ""),
    June: PopulateMonthDays(daysInMonth(6, new Date().getFullYear()), ""),
    July: PopulateMonthDays(daysInMonth(7, new Date().getFullYear()), ""),
    August: PopulateMonthDays(daysInMonth(8, new Date().getFullYear()), ""),
    September: PopulateMonthDays(daysInMonth(9, new Date().getFullYear()), ""),
    October: PopulateMonthDays(daysInMonth(10, new Date().getFullYear()), ""),
    November: PopulateMonthDays(daysInMonth(11, new Date().getFullYear()), ""),
    December: PopulateMonthDays(daysInMonth(12, new Date().getFullYear()), ""),
  };

  const [userHabit, setUserHabit] = useState([["", yearMonths]]);
  const [userInputHabit, setUserInputHabit] = useState("");

  function handleHabitToLocalStorage(event: FormEvent, data: string) {
    event.preventDefault();
    if (userHabit[0][0] === "") {
      let updatedUserHabit = [...userHabit];
      updatedUserHabit[0][0] = data;
      setUserHabit(updatedUserHabit);
    } else {
      let updatedUserHabit = [...userHabit, ["", yearMonths]];
      console.log(updatedUserHabit);
      updatedUserHabit[updatedUserHabit.length - 1][0] = data;
      setUserHabit(updatedUserHabit);
    }
  }
  useEffect(() => {
    console.log(userHabit);
  }, [userHabit]);

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
        onSubmit={(e) => {
          handleHabitToLocalStorage(e, userInputHabit);
        }}
        className="flex flex-col items-center justify-center m-auto gap-5"
      >
        <h2 className="mb-[5rem] text-3xl text-white">Create Your Habit</h2>
        <input
          placeholder="name"
          className="h-9 text-center  w-[25rem] bg-opacity-20 bg-gray-400 focus:outline-gray-500 border-b-2 border-gray-300 "
          onChange={(e) => setUserInputHabit(e.target.value)}
        />
        <button
          type="submit"
          className="mt-[5rem] border-solid border-1 border-rose bg-purple-600 bg-opacity-40 rounded-[1rem] w-[25rem] h-[2rem] hover:scale-105 "
        >
          Confirm
        </button>
      </form>
    </Modal>
  );
}
