import { useMonth } from "../../hooks/useMonth"
import { StyledCheckbox } from "../StyledCheckbox"

interface HabitProps {
  name: string
}

export function Habit({ name }: HabitProps) {
  const { contextMonth } = useMonth()

  function getMonthFromString(mon: string) {
    return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1
  }

  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate()
  }
  const maxDaysMonth = daysInMonth(
    getMonthFromString(contextMonth),
    new Date().getFullYear()
  )

  const daysArray = Array.from(Array(maxDaysMonth), (e, i) => i + 1)

  return (
    <div className="shadow-2xl flex items-center justify-center rounded-[40px] p-[2rem] text-center shadow-HabitShadow_1 shadow-HabitShadow_2">
      <div className="flex w-[256px] max-w-[256px] items-center justify-center text-center ">
        {name}
      </div>
      <div className="shadow ml-auto flex gap-5 pr-6 2xl:gap-9">
        {daysArray.map(days => (
          <div key={days}>
            <StyledCheckbox />
          </div>
        ))}
      </div>
    </div>
  )
}
