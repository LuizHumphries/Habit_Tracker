import Select from "react-select";
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
      <div className="flex justify-center align0center">
        <p className="m-auto">MÊS</p>
        <SelectDropdownMonths />
      </div>

      <button className="">User Name</button>
    </div>
  );
}

//componentizar butoes dos meses
// deixei de maneira estatica apenas para teste visual
