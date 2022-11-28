import { MonthProvider } from "../contexts/MonthContext";
import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSubHeader } from "../components/DashboardSubHeader";
import { Habit } from "../components/Habit";
import { DashboardFooter } from "../components/DashboardFooter";

interface UserDashboardProps {
  handleOpenHabitModal: () => void;
}

export function UserDashboard({ handleOpenHabitModal }: UserDashboardProps) {
  return (
    <MonthProvider>
      <div className="flex flex-col h-screen justify-between ">
        <DashboardHeader />
        <DashboardSubHeader handleOpenHabitModal={handleOpenHabitModal} />
        <main className="mb-auto bg-gray-900 text-white h-full text-center align-center">
          <Habit />
        </main>
        <DashboardFooter />
      </div>
    </MonthProvider>
  );
}
