import { Footer } from "../components/Footer";
import { HabitContent } from "../components/HabitContent";
import { Header } from "../components/Header";
import { SubHeader } from "../components/SubHeader";
import { MonthProvider } from "../contexts/MonthContext";

export function UserDashboard() {
  return (
    <MonthProvider>
      <div className="flex flex-col h-screen justify-between ">
        <Header />
        <SubHeader />
        <main className="mb-auto bg-gray-900 text-white h-full text-center align-center">
          <HabitContent />
        </main>
        <Footer />
      </div>
    </MonthProvider>
  );
}
