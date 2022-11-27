import { IoCalendarOutline } from "react-icons/io5";
import SelectDropdownMonths from "../SelectMenu";

export function Header() {
  return (
    <div
      className="
        flex
        px-[2rem]
        py-[0.5rem]
        align-center
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

      <button className="text-rose-300">User Name</button>
    </div>
  );
}

//componentizar butoes dos meses
// deixei de maneira estatica apenas para teste visual
