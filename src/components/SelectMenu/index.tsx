import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const monthNow = new Date().toLocaleString("en-US", { month: "long" });

const publishingOptions = [
  {
    title: "January",
  },

  {
    title: "February",
  },
  {
    title: "March",
  },
  {
    title: "April",
  },
  {
    title: "May",
  },
  {
    title: "June",
  },
  {
    title: "July",
  },
  {
    title: "August",
  },
  {
    title: "September",
  },
  {
    title: "October",
  },
  {
    title: "November",
  },
  {
    title: "December",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectDropdownMonths() {
  const [monthSelected, setMonthSelected] = useState(
    publishingOptions[
      publishingOptions.map((month) => month.title).indexOf(monthNow)
    ]
  );

  return (
    <Listbox value={monthSelected} onChange={setMonthSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">
            {" "}
            Change published status{" "}
          </Listbox.Label>
          <div className="relative">
            <div className="inline-flex divide-x divide-rose-600 rounded-md shadow-sm">
              <div className="inline-flex divide-x divide-rose-600 rounded-md shadow-sm">
                <div className="inline-flex items-center rounded-l-md border border-transparent bg-rose-500 py-2 pl-3 pr-4 text-white shadow-sm">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  <p className="ml-2.5 text-sm font-medium">
                    {monthSelected.title}
                  </p>
                </div>
                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-rose-400 p-2 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="sr-only"></span>
                  <ChevronDownIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-8 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {publishingOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-rose-500" : "text-gray-700",
                        "cursor-default select-none p-2 text-sm"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={
                              monthSelected ? "font-semibold" : "font-normal"
                            }
                          >
                            {option.title}
                          </p>
                          {monthSelected ? (
                            <span
                              className={
                                active ? "text-white" : "text-rose-500"
                              }
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
                        <p
                          className={classNames(
                            active ? "text-indigo-200" : "text-gray-500",
                            "mt-2"
                          )}
                        ></p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
