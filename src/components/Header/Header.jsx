import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import img from "../../assets/Images/download.png";
import Invoice from "../Invoice/Invoice";
import FormData from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../state/reducer/counterReducer";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  let total = useSelector((store) => store.counter.user);

  let dispatch = useDispatch();
  let filter = useSelector((store) => store.counter.selectedValue);
  console.log("header filter" , filter);
  const [filterValue, setFilterValue] = useState("");
  const handleCheckboxChange = (event) => {
    const { name} = event.target;
    setFilterValue(name);
    dispatch(filterData(name));
  };
  return (
    <React.Fragment>
      <section className="flex h-full w-full flex-col items-center pt-20 ">
        <div className="container mx-auto flex-col gap-16 justify-start max-w-5xl">
          <div className="invoice_top  flex justify-around items-center">
            <div className=" m-5">
              <h1 className="mb-1 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-left">
                Invoices
              </h1>
              <p className="mb-6 text-xs font-normal text-gray-500  lg:text-base dark:text-gray-400">
                There a total {total.length} invoice
              </p>
            </div>

            <div className="invoice_filter_container flex items-center gap-6">
              <div className="invoice_filter">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center  rounded-md px-3 py-2 text-sm  text-gray-900  font-bold">
                      Filter by status
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex items-center">
                                <input
                                  id="all"
                                  type="checkbox"
                                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                  name="all"
                                  onChange={handleCheckboxChange}
                                  checked={filterValue === "all"}
                                />
                                <label
                                  htmlFor="all"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  All
                                </label>
                              </div>
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex items-center">
                                <input
                                  id="pending"
                                  type="checkbox"
                                  name="pending"
                                  checked={filterValue === "pending"}
                                  onChange={handleCheckboxChange}
                                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="pending"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Pending
                                </label>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              <div className="flex items-center">
                                <input
                                  id="paid"
                                  type="checkbox"
                                  name="paid"
                                  checked={filterValue === "paid"}
                                  onChange={handleCheckboxChange}
                                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                />
                                <label
                                  htmlFor="paid"
                                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Paid
                                </label>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="bg-indigo-500   rounded-full text-white relative flex items-center">
                <img
                  src={img}
                  alt="plus image"
                  className="object-contain h-8 w-6 bg-cover bg-center ml-2"
                />
                <FormData />
              </div>
            </div>
          </div>
        </div>
        {/* invoice module */}
        <Invoice />
      </section>
    </React.Fragment>
  );
}

export default Header;
