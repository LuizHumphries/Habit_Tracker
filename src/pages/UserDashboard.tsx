import { MonthProvider } from "../contexts/MonthContext"
import { DashboardHeader } from "../components/DashboardHeader"
import { DashboardSubHeader } from "../components/DashboardSubHeader"
import { Habit } from "../components/Habit"
import { DashboardFooter } from "../components/DashboardFooter"

interface UserDashboardProps {
  handleOpenHabitModal: () => void
}

export function UserDashboard({ handleOpenHabitModal }: UserDashboardProps) {
  return (
    <MonthProvider>
      <div className="flex h-screen flex-col justify-between ">
        <DashboardHeader />
        <DashboardSubHeader handleOpenHabitModal={handleOpenHabitModal} />
        <main className="align-center mb-auto h-full bg-gray-900 text-center text-white">
          <Habit name={"teste"} />
        </main>
        <DashboardFooter />
      </div>
    </MonthProvider>
  )
}
