import { IoCalendarOutline } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import SelectDropdownMonths from "../SelectMenu"

export function DashboardHeader() {
  const { logOff, user } = useAuth()

  const navigate = useNavigate()

  async function handleLogOff() {
    try {
      await logOff()
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <header
      className="
        border-b-solid
        flex
        w-full
        justify-between
        border-b-2
        border-b-red-400
        bg-gray-800
        px-[2rem]
        py-[0.5rem]
        text-center
      "
    >
      <div className="flex w-[55%] justify-between">
        <h1 className="text-center text-[48px] text-rose-500">
          Habbit <span className="text-rose-300">Tracker</span>
        </h1>
        <div className="flex items-center justify-center">
          <IoCalendarOutline className="mr-2 text-4xl text-rose-600" />
          <SelectDropdownMonths />
        </div>
      </div>

      <button
        className="text-rose-300"
        onClick={handleLogOff}
      >
        {user?.email?.toLowerCase()}
      </button>
    </header>
  )
}
