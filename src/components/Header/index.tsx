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
        border-b-red-100
      "
    >
      <h1 className="text-rose-800 text-[48px] text-center">
        Habbit <span className="text-rose-400">Tracker</span>
      </h1>
      <div className="flex m-auto justify-center align-center gap-4">
        <p className="m-auto">
          <IoCalendarOutline className="text-rose-600 text-4xl" />
        </p>
        <SelectDropdownMonths />
      </div>

      <button className="">User Name</button>
    </div>
  );
}

//componentizar butoes dos meses
// deixei de maneira estatica apenas para teste visual
