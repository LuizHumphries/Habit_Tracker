import { ref, update } from "firebase/database";
import { useContext, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { MonthContext } from "../../contexts/MonthContext";
import { database } from "../../services/firebase";

interface StyledCheckboxProps {
  name: string;
  index: number;
}

export function StyledCheckbox({ name, index }: StyledCheckboxProps) {
  const { user } = useAuth();
  const { contextMonth } = useContext(MonthContext);
  const [checked, setChecked] = useState(false);
  console.log(checked);

  function handleClickedCheck() {
    setChecked(!checked);
    update(
      ref(
        database,
        "users/" + user?.uid + "/habit/" + name + "/yearMonths/" + contextMonth
      ),
      {
        [index]: checked,
      }
    );
  }
  return (
    <label
      className="
    relative
    flex
    cursor-pointer
    items-center    
    "
    >
      <input
        type="checkbox"
        className="
              before:content['']
              h-[14px]              
              w-[14px]
              cursor-pointer
              appearance-none
              rounded-sm
              border 
              border-rose-200
              transition-all
              duration-100
              checked:border-rose-300
              checked:bg-rose-600 
              checked:before:bg-rose-200 
              hover:before:opacity-10
              "
        id="checkbox"
        defaultChecked={checked}
        onChange={handleClickedCheck}
      ></input>
    </label>
  );
}
