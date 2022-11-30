import { Fragment, useEffect, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useMonth } from "../../hooks/useMonth";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectDropdownMonths() {
  const { contextMonth, publishingOptions, handleMonthSelected } = useMonth();

  useEffect(() => {
    console.log(contextMonth);
  }, [contextMonth]);

  return (
    <Listbox onChange={(e) => handleMonthSelected(e)}>
      {({ open }) => (
        <>
          <div className="relative">
            <div className="inline-flex divide-x divide-rose-600 rounded-md shadow-sm">
              <div className="inline-flex items-center rounded-l-md border border-transparent bg-rose-500 py-2 pl-3 pr-4 text-white shadow-sm">
                <p className="ml-2.5 text-sm font-medium">{contextMonth}</p>
              </div>
              <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-rose-400 p-2 text-sm font-medium text-white transition duration-150 hover:bg-rose-700 focus:outline-none">
                <ChevronDownIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </Listbox.Button>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {publishingOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-rose-500" : "text-gray-700",
                        "cursor-pointer select-none p-3 text-sm transition duration-150"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p
                            className={classNames(
                              contextMonth === option
                                ? "font-semibold"
                                : "font-normal"
                            )}
                          >
                            {option}
                          </p>
                          {contextMonth === option ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-rose-500"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </div>
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
