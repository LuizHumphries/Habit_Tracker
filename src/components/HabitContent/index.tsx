import { useState } from "react";
import { StyledCheckbox } from "../StyledCheckbox";

interface StyledCheckboxProps {
  days: number;
}

export function HabitContent() {
  const [habit, setHabit] = useState("");
  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
  const maxDaysMonth = daysInMonth(
    new Date().getMonth() + 1,
    new Date().getFullYear()
  );

  const daysArray = Array.from(Array(maxDaysMonth), (e, i) => i + 1);

  return (
    <div className="flex ml-10 mt-4">
      <form>
        <input
          type="text"
          id="habit-name"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          className="text-rose-700 bg-gray-900 outline-0 h-[14px] w-[20rem] border-0 border-b-2 border-b-rose-400 pb-1 text-center"
        ></input>
      </form>
      <div className="flex ml-auto pr-6 gap-9">
        {daysArray.map((days) => (
          <div key={days}>
            <StyledCheckbox />
          </div>
        ))}
      </div>
    </div>
  );
}
