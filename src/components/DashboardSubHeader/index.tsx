import { IoAdd } from "react-icons/io5";
import { useMonth } from "../../hooks/useMonth";

interface DashboardSubHeaderProps {
  handleOpenHabitModal: () => void;
}

export function DashboardSubHeader({
  handleOpenHabitModal,
}: DashboardSubHeaderProps) {
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
    <main className="bg-gray-900 py-4 px-[2rem] justify-between flex">
      <div>
        <button onClick={handleOpenHabitModal}>
          <IoAdd className="text-rose-300 text-[24px] transition duration-150 hover:scale-105 hover:text-rose-600" />
        </button>
      </div>
      <div className="flex ml-auto pr-6 gap-5 2xl:gap-9 text-rose-300">
        {daysArray.map((days) => (
          <div key={days} className="text-[14px] h-[14px] w-[14px] text-center">
            {days}
          </div>
        ))}
      </div>
    </main>
  );
}
