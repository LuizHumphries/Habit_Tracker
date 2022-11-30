import { useState } from "react";
import { useMonth } from "../../hooks/useMonth";
import { StyledCheckbox } from "../StyledCheckbox";

interface StyledCheckboxProps {
  days: number;
}

export function Habit() {
  const { contextMonth } = useMonth();

  function getMonthFromString(mon: string) {
    return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1;
  }

  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
  const maxDaysMonth = daysInMonth(
    getMonthFromString(contextMonth),
    new Date().getFullYear()
  );

  const daysArray = Array.from(Array(maxDaysMonth), (e, i) => i + 1);

  return (
    <div className="flex p-[2rem] justify-center items-center text-center">
      <div className="flex justify-center items-center text-center max-w-[256px] w-[256px] border-[1px] border-solid rounded-[1rem]">
        Habit
      </div>
      <div className="flex ml-auto pr-6 gap-5 2xl:gap-9">
        {daysArray.map((days) => (
          <div key={days}>
            <StyledCheckbox />
          </div>
        ))}
      </div>
    </div>
  );
}
