import { useContext } from "react";
import { MonthContext } from "../contexts/MonthContext";

export function useMonth() {
  const value = useContext(MonthContext);
  return value;
}
