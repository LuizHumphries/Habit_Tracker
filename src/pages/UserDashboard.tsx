import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSubHeader } from "../components/DashboardSubHeader";
import { DashboardFooter } from "../components/DashboardFooter";
import { useContext, useEffect, useState } from "react";
import { auth, database } from "../services/firebase";
import { useAuth } from "../contexts/AuthContext";
import { DataSnapshot, ref, onValue, get, child } from "firebase/database";
import { Habit } from "../components/Habit";
import { MonthContext } from "../contexts/MonthContext";

interface UserDashboardProps {
  handleOpenHabitModal: () => void;
}

interface Item {
  habit: string;
  yearMonths: { [month: string]: { [day: number]: boolean } };
}

export function UserDashboard({ handleOpenHabitModal }: UserDashboardProps) {
  const [habits, setHabits] = useState<Item[]>([]);
  const { contextMonth } = useContext(MonthContext);
  const { user } = useAuth();

  useEffect(() => {
    auth;
    get(child(ref(database), "users/" + user?.uid + "/habit/")).then(
      (snapshot) => {
        const habitdata = Object.values(snapshot.val() as DataSnapshot);
        setHabits(habitdata);
      }
    );
  }, []);

  return (
    <div className="flex h-screen flex-col justify-between ">
      <DashboardHeader />
      <DashboardSubHeader handleOpenHabitModal={handleOpenHabitModal} />
      <main className="align-center mb-auto h-full bg-gray-900 text-center text-white">
        {habits.map((item) => (
          <Habit
            key={item.habit}
            name={item.habit}
            days={Object.entries(item.yearMonths[contextMonth]).map(
              ([, value]) => value
            )}
          />
        ))}
      </main>
      <DashboardFooter />
    </div>
  );
}
