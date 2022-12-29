import { FormEvent, ChangeEvent, useEffect, useState, useCallback } from "react"
import Modal, { Styles } from "react-modal"
import { useAuth } from "../../contexts/AuthContext"
import { database } from "../../services/firebase"
import iconClose from "../../assets/images/iconclose.svg"
import { ref, set, update } from "firebase/database"

interface HabitModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

interface HabitState {
  habit: string
  yearMonths: { [month: string]: { [day: number]: boolean } }
}

const customStyles: Styles = {
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
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function HabitModal({ isOpen, onRequestClose }: HabitModalProps) {
  const { user } = useAuth()
  const [habitState, setHabitState] = useState<HabitState>({
    habit: "",
    yearMonths: {},
  })

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setHabitState({ ...habitState, habit: event.target.value })
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(habitState)
    update(ref(database, "users/" + user?.uid + "/habit"), {
      [habitState.habit]: habitState,
    }).then(() => {
      onRequestClose()
    })
  }

  const setYearMonths = useCallback(() => {
    let yearMonths: { [month: string]: { [day: number]: boolean } } = {}
    for (let month of months) {
      yearMonths[month] = {}
      let numDays = new Date(2022, months.indexOf(month) + 1, 0).getDate()
      for (let i = 1; i <= numDays; i++) {
        yearMonths[month][i] = false
      }
    }
    setHabitState({ ...habitState, yearMonths: yearMonths })
  }, [setHabitState])

  useEffect(() => {
    setYearMonths()
  }, [])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="background-transparent absolute right-[1.5rem] top-[1.5rem] border-0"
      >
        <img
          src={iconClose}
          alt="closeModal"
          className="h-[20px] w-[20px]"
        />
      </button>
      <form
        onSubmit={e => {
          handleSubmit(e)
        }}
        className="m-auto flex flex-col items-center justify-center gap-5"
      >
        <h2 className="mb-[5rem] text-3xl text-white">Create Your Habit</h2>
        <input
          placeholder="name"
          className="h-9 w-[25rem]  border-b-2 border-gray-300 bg-gray-400 bg-opacity-20 text-center focus:outline-gray-500 "
          onChange={e => handleInputChange(e)}
        />
        <button
          type="submit"
          className="border-1 border-rose mt-[5rem] h-[2rem] w-[25rem] rounded-[1rem] border-solid bg-purple-600 bg-opacity-40 hover:scale-105 "
        >
          Confirm
        </button>
      </form>
    </Modal>
  )
}
