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
    <main className="flex justify-between bg-gray-900 py-4 px-[2rem]">
      <div>
        <button
          onClick={handleOpenHabitModal}
          className="transition duration-150 hover:scale-125"
        >
          <IoAdd className="text-[24px] text-rose-300" />
        </button>
      </div>
      <div className="ml-auto flex gap-5 pr-6 text-rose-300 2xl:gap-9">
        {daysArray.map((days) => (
          <div key={days} className="h-[14px] w-[14px] text-center text-[14px]">
            {days}
          </div>
        ))}
      </div>
    </main>
  );
}
