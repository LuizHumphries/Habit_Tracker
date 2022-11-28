import { createContext, useEffect, useState, ReactNode } from "react";

interface MonthProviderProps {
  children: ReactNode;
}

type MonthContextType = {
  contextMonth: string;
  publishingOptions: string[];
  handleMonthSelected: (month: string) => void;
};

export const MonthContext = createContext({} as MonthContextType);

export const MonthProvider = ({
  children,
}: MonthProviderProps): JSX.Element => {
  const publishingOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthNow = new Date().toLocaleString("en-US", { month: "long" });
  const [contextMonth, setContextMonth] = useState(
    publishingOptions.find((x) => x === monthNow)
  );

  function handleMonthSelected(month: string) {
    setContextMonth(month);
  }

  return (
    <MonthContext.Provider
      value={{ contextMonth, publishingOptions, handleMonthSelected }}
    >
      {children}
    </MonthContext.Provider>
  );
};
