import { ref, remove } from "firebase/database";
import { IoTrashOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../services/firebase";
import { StyledCheckbox } from "../StyledCheckbox";

interface HabitProps {
  name: string;
  days: boolean[];
}

export function Habit({ name, days }: HabitProps) {
  const { user } = useAuth();

  function handleDelete() {
    remove(ref(database, "users/" + user?.uid + "/habit/" + name));
  }
  return (
    <div className="shadow-2xl mt-5 flex items-center justify-center rounded-[40px] p-[2rem] text-center shadow-HabitShadow_1 shadow-HabitShadow_2 first:mt-0">
      <div className="flex">
        <button onClick={handleDelete}>
          <IoTrashOutline />
        </button>
        <div className="flex w-[256px] max-w-[256px] items-center justify-center text-center ">
          {name}
        </div>
      </div>
      <div className="ml-auto flex gap-5 pr-6 2xl:gap-9">
        {days.map((day, index) => (
          <div key={index - 1}>
            <StyledCheckbox />
          </div>
        ))}
      </div>
    </div>
  );
}
