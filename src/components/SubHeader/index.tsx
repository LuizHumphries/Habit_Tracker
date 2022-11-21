import { IoAdd } from "react-icons/io5";

export function SubHeader() {
  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
  const maxDaysMonth = daysInMonth(
    new Date().getMonth() + 1,
    new Date().getFullYear()
  );

  const daysArray = Array.from(Array(maxDaysMonth), (e, i) => i + 1);

  return (
    <main className="bg-gray-900 py-4 pl-[4rem] justify-between flex">
      <div>
        <button>
          <IoAdd className="text-rose-300 text-[24px] transition duration-150 hover:scale-105 hover:text-rose-600" />
        </button>
      </div>
      <div className="flex ml-auto pr-6 gap-9 text-rose-300">
        {daysArray.map((days) => (
          <div
            key={days}
            className="text-[14px] h-[14px]
          w-[14px] text-center"
          >
            {days}
          </div>
        ))}
      </div>
    </main>
  );
}
