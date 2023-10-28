import React, { useEffect } from "react";
import receipt from "./Receipt.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  isModal,
  toggleStatus,
} from "../../state/reducer/counterReducer";
import Edit from "../Edit";
function Invoicelist() {
  let { id } = useParams();
  let move = useNavigate();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  let dispatch = useDispatch();
  const toggleDelete = (id) => {
    dispatch(isModal({ id, isOpen: open }));
    setOpen(!open);
  };
  const handleDelete = (id) => {
    setOpen(false);
    dispatch(deleteUser(id));
    move("/");
  };
  const [product, setProduct] = useState();
  const [change, setChange] = useState(false);
  let invoiceData = useSelector((store) => store.counter.user);
  useEffect(() => {
    let data = invoiceData.find((e) => e.id === id);
    setProduct(data);
  }, [!change]);

  const status = useSelector((state) => state.counter.status);
  console.log(status, "toggle status");

  let [stateData, setStateData] = useState(product);
  console.log(stateData, "statedate geting");
  const handClick = () => {
    const newState = stateData.map((item) => {
      console.log(item, "in map function item");
      if (item.status == "Pending") {
        return [{ ...item, status: "Paid" }];
      }
      return item;
    });
    console.log(newState, "new satte function");
    setStateData(newState);
    console.log(product.status, "product stautus get value");
    dispatch(toggleStatus(id));
  };

  return (
    <React.Fragment>
      <ul className="flex justify-center items-center m-0  mb-5 flex-col p-0 list-none w-3/6">
        <li className="w-full">
          <div className="flex justify-between items-center shadow-xl bg-white p-7 box-border rounded-md">
            <div className="flex items-center gap-11">
              <p className="gap-4 flex  items-center text-gray-600 ">
                status
                {product?.status === "Pending" ? (
                  <button
                    type="button"
                    className="rounded-lg p-2 w-24 bg-green-100 text-green-500"
                  >
                    Paid
                  </button>
                ) : (
                  <button
                    type="button"
                    className="rounded-lg p-2 w-24 bg-orange-100 text-orange-600"
                  >
                    Pending
                  </button>
                )}
              </p>
            </div>
            <div className="flex  gap-3 items-center justify-center">
              <div>
                <Edit product={product} setChange={setChange} />
              </div>
              <div className="rounded-lg flex justify-center gap-10">
                <button
                  type="button"
                  onClick={() => toggleDelete(product.id)}
                  className="bg-red-400  hover:bg-red-600 text-white p-3 rounded-full w-20"
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
                                        Are you sure you want to delete invoice
                                        #{id}? This action cannot be undone.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="button"
                                  className="inline-flex w-full justify-center   text-sm font-semibold shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto   bg-red-600 text-white p-3 rounded-full"
                                  onClick={() => handleDelete(id)}
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
              </div>
              <div className="button">
                <button
                  type="button"
                  className=" bg-indigo-100 text-white p-3 rounded-full"
                  onClick={handClick}
                >
                  Mark as Paid
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className=" w-3/6 border-solid  bg-white mx-auto  rounded-md pb-5">
        <div className="flex justify-between m-5">
          <div className="left ">
            <h1 className="text-left text-black font-bold">RT3080</h1>
            <p className="text-gray-400">{product?.project}</p>
          </div>
          <div className="right ">
            <p className="text-left text-gray-400">{product?.client_city}</p>
            <p className="text-left  text-gray-400">{product?.zip}</p>
            <p className="text-left text-gray-400">{product?.client_country}</p>
          </div>
        </div>
        <div className="flex justify-between m-5 pt-3">
          <div>
            <p className="text-gray-400 text-base">Invoice Date</p>
            <p className="font-bold text-left">{product?.date}</p>
            <p className="pt-4  text-gray-400 text-base">payment Due</p>
            <p className="font-bold text-left">{product?.date}</p>
          </div>
          <div className="w-1/3">
            <p className="text-left text-gray-400 text-base">Bill To</p>
            <p className="font-bold text-left ">{product?.name}</p>
            <p className="text-left text-gray-400 text-base">
              {product?.address},
            </p>
            <p className="text-left text-gray-400 text-base">
              {product?.code},
            </p>
            <p className="text-left text-gray-400 text-base">
              {product?.city},
            </p>
          </div>
          <div>
            <p className="text-left text-gray-400">Sent to</p>
            <p className="font-bold text-left">{product?.email}</p>
          </div>
        </div>
        {product?.list_item &&
          product?.list_item.map((item) => {
            const { list, qty, price } = item;
            return (
              <>
                <div className="flex justify-between rounded-md bg-gray-100 mx-5 pt-5 pb-5 px-2">
                  <div>
                    <p className="text-gray-400 font-bold text-sm text-left">
                      Item Name
                    </p>
                    <p className="pt-2 font-bold text-slate-800">{list}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-sm text-left">
                      QTY
                    </p>
                    <p className="pt-2 font-bold text-slate-800">{qty}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-sm text-left">
                      Price
                    </p>
                    <p className="pt-2 font-bold text-slate-800">£ {price}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-bold text-sm text-left">
                      Total
                    </p>
                    <p className="pt-2 font-bold  text-slate-800">
                      £ {price * qty}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mx-5 rounded-md  bg-slate-800 p-3 text-white">
                  <p>Amount</p>
                  <p className="text-2xl">£ {price * qty}</p>
                </div>
              </>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Invoicelist;
