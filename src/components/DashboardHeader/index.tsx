import { useEffect } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import SelectDropdownMonths from "../SelectMenu";

export function DashboardHeader() {
  const { logOff, user } = useAuth();
  const navigate = useNavigate();

  async function handleLogOff() {
    try {
      await logOff();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      className="
        flex
        px-[2rem]
        py-[0.5rem]
        text-center
        justify-between
        border-b-2
        border-b-solid
        border-b-red-400
        bg-gray-800
      "
    >
      <h1 className="text-rose-500 text-[48px] text-center">
        Habbit <span className="text-rose-300">Tracker</span>
      </h1>
      <div className="flex justify-center align-midle items-center">
        <IoCalendarOutline className="text-rose-600 text-4xl mr-2" />
        <SelectDropdownMonths />
      </div>

      <button className="text-rose-300" onClick={handleLogOff}>
        {user?.email}
      </button>
    </div>
  );
}
