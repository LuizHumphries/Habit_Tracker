import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSubHeader } from "../components/DashboardSubHeader";
import { DashboardFooter } from "../components/DashboardFooter";
import { useContext, useEffect, useState } from "react";
import { auth, database } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { DataSnapshot, ref, onValue, get, child } from "firebase/database";
import { Habit } from "../components/Habit";
import { MonthContext } from "../contexts/MonthContext";
import { HabitModal } from "../components/HabitModal";

interface Item {
  name: string;
  yearMonths: { [month: string]: { [day: number]: boolean } };
}

export function UserDashboard() {
  const [habits, setHabits] = useState<Item[]>([]);
  const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);

  const { contextMonth } = useContext(MonthContext);
  const { user } = useAuth();

  async function getHabitsData() {
    const snapshot = await get(
      child(ref(database), "users/" + user?.uid + "/habit/")
    );

    let habitData: Item[] = [];

    if (snapshot.val()) {
      habitData = Object.values<Item>(snapshot.val());
    }

    setHabits(habitData);
  }

  useEffect(() => {
    if (user) {
      getHabitsData();
    }
  }, [user]);

  // MODAL FUNCTIONS
  function handleOpenHabitModal() {
    setIsHabitModalOpen(true);
  }

  function handleCloseHabitModal() {
    setIsHabitModalOpen(false);
  }

  // nova estrutura do habito
  // {
  //   name: 'aispas',
  //   monthsWithHabitsChecked: [
  //     {
  //       month: 'january',
  //       daysChecked: [13]
  //     }
  //   ]
  // }

  // todos os dias do mes
  // const days = [
  //  {
  //    day: 1,
  //    isChecked: true
  //  },
  //  {
  //    day: 2,
  //    isChecked: false
  //  },
  //]

  return (
    <>
      <HabitModal
        isOpen={isHabitModalOpen}
        onCloseHabitModal={handleCloseHabitModal}
        getHabitsData={getHabitsData}
      />

      <div className="flex h-screen flex-col justify-between ">
        <DashboardHeader />
        <DashboardSubHeader handleOpenHabitModal={handleOpenHabitModal} />
        <main className="align-center mb-auto h-full bg-gray-900 text-center text-white">
          {habits.map((item) => (
            <Habit
              key={item.name}
              name={item.name}
              getHabitsData={getHabitsData}
              days={Object.entries(item.yearMonths[contextMonth]).map(
                ([, value]) => value
              )}
            />
          ))}
        </main>
        <DashboardFooter />
      </div>
    </>
  );
}
