import React from "react";
import receipt from "./Receipt.module.css";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
function Invoicelist() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const toggleDelete = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ul className={`${receipt.receipt_list} w-3/6`}>
        <li className={receipt.receipt}>
          <Link to="/receipt" className={receipt.receipt_main}>
            <div className={receipt.receipt_left}>
              <p className={receipt.receipt_info}>
                status
                <div className={`${receipt.status}`}>
                  <button
                    type="button"
                    className={`${receipt.type} rounded-lg`}
                  >
                    Paid
                  </button>
                </div>
              </p>
            </div>
            <div className={receipt.receipt_right}>
              <div>
                <button
                  type="button"
                  className={` p-3 rounded-full  ${receipt.edit}`}
                >
                  Edit{" "}
                </button>
              </div>
              <div className={`${receipt.status} rounded-lg`}>
                <button
                  type="button"
                  onClick={toggleDelete}
                  className={`bg-red-600 text-white p-3 rounded-full`}
                >
                  Delete
                  <Transition.Root show={open} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      initialFocus={cancelButtonRef}
                      onClose={setOpen}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>
                      <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <Dialog.Title
                                      as="h1"
                                      className=" font-semibold leading-6 text-2xl text-gray-900"
                                    >
                                      Confirm Deletion
                                    </Dialog.Title>
                                    <div className="mt-2">
                                      <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your
                                        account? All of your data will be
                                        permanently removed. This action cannot
                                        be undone.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="button"
                                  className="inline-flex w-full justify-center   text-sm font-semibold shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto      bg-red-600 text-white p-3 rounded-full"
                                  onClick={() => setOpen(false)}
                                >
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  className="mt-3 inline-flex w-full  bg-violet-50 justify-center   rounded-full p-3 text-sm font-semibold text-violet-500 shadow-sm hover:bg-violet-200  sm:mt-0 sm:w-auto"
                                  onClick={() => setOpen(false)}
                                  ref={cancelButtonRef}
                                >
                                  Cancel
                                </button>
                              </div>
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
                </button>
              </div>{" "}
              <div className={`${receipt.status} rounded-lg`}>
                <button
                  type="button"
                  className={`${receipt.delete} text-white p-3 rounded-full`}
                >
                  Mark as Paid
                </button>
              </div>
            </div>
          </Link>
        </li>
        {/* <li className={receipt.receipt}>
                    <div className={receipt.receipt_main }>
                        <div className={receipt.receipt_address}>
                            <div className={receipt.receipt_address_left}>
                                <h4 className='font-bold text-left'>RT3080</h4>
                                <h6 className='text-gray-400 '>Re-branding</h6>
                            </div>
                            <div className={receipt.receipt_address_right}>
                                <p className='text-gray-400 text-sm '>106 kendell Street</p>
                                <p className='text-gray-400 text-sm text-left'>Sharrington</p>
                                <p className='text-gray-400 text-sm text-left'>NR24 5WQ,</p>
                                <p className='text-gray-400 text-sm text-left'>United Kingdom

                                </p>
                            </div>
                        </div>
                    
                    </div>
                    <div className={receipt.receipt_main}>
                        <div className={receipt.receipt_middle}>
                            <p>Invoice Date</p>
                            <h4>2021-10-11</h4>
                        </div>
                    </div>
                </li> */}
      </ul>

      <div className=" w-3/6 border-solid  bg-white mx-auto  rounded-md pb-5 ">
        <div className="flex justify-between m-5">
          <div className="left ">
            <h1 className="text-left text-black font-bold">RT3080</h1>
            <p className="text-gray-400">Re-branding</p>
          </div>
          <div className="right ">
            <p className="text-left text-gray-400">106 Kendell Street,</p>
            <p className="text-left  text-gray-400">Sharrington</p>
            <p className="text-left text-gray-400">NR24 5WQ,</p>
            <p className="text-left text-gray-400">United Kingdom</p>
          </div>
        </div>

        {/* second div */}
        <div className="flex justify-between m-5 pt-3">
          <div>
            <p className="text-gray-400 text-base">Invoice Date</p>
            <p className="font-bold text-left">2018-5-12</p>
            <p className="pt-4  text-gray-400 text-base">payment Due</p>
            <p className="font-bold text-left">2018-5-12</p>
          </div>
          <div>
            <p className="text-left text-gray-400 text-base">Bill To</p>
            <p className="font-bold text-left ">Jensen Huang</p>
            <p className="text-left text-gray-400 text-base">
              19 Union Terrace,
            </p>
            <p className="text-left text-gray-400 text-base">London,</p>
            <p className="text-left text-gray-400 text-base">E1 3EZ,</p>
            <p className="text-left text-gray-400 text-base">United Kingdom</p>
          </div>
          <div>
            <p className="text-left text-gray-400">Sent to</p>
            <p className="font-bold text-left">jensenh@mail.com</p>
          </div>
        </div>
        {/* third div */}

        <div className="flex justify-around rounded-md bg-gray-100 mx-5 pt-5 pb-5">
          <div>
            <p className="text-gray-400 font-bold text-sm text-left">
              Item Name
            </p>
            <p className="pt-2 font-bold text-slate-800">Brand Guidelines</p>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-sm text-left">QTY</p>
            <p className="pt-2 font-bold text-slate-800">1</p>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-sm text-left">Price</p>
            <p className="pt-2 font-bold text-slate-800">£ 1800.9</p>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-sm text-left">Total</p>
            <p className="pt-2 font-bold  text-slate-800">£ 1800.9</p>
          </div>
        </div>
        <div className="flex justify-between mx-5 rounded-md  bg-slate-800 p-3">
          <p className="text-white">Amount</p>
          <p className="text-white text-2xl">£ 1800.9</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invoicelist;
