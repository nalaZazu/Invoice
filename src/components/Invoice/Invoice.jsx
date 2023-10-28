import React, { useState } from "react";
import invoice from "./Invoice.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Invoice() {
  let invoicedata = useSelector((store) => store.counter.user);
  console.log(invoicedata, "invocice data");
  const display =
    Array.isArray(invoicedata) &&
    invoicedata.length !== 0 &&
    invoicedata.map((item, index) => {
      return (
        <li className={invoice.invoice}>
          <Link
            to={`/receipt/${item?.id}`}
            className="bg-white flex box-border shadow-xl justify-between items-center p-8 no-underline rounded-lg"
          >
            <div className="flex items-center gap-11">
              <p className="text-gray-500">
                #
                <span className="invoice_span font-bold text-black">
                  RGX{index}
                </span>
              </p>
              <p className="text-gray-500">{item?.date}</p>
              <p className="text-gray-500">{item?.name}</p>
            </div>
            <div className="flex justify-center items-center  gap-10">
              <div className="font-bold">
                £{item?.list_item[0].price * item?.list_item[0].qty}
              </div>
              {item?.status === "Pending" ? (
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
              <div className="rounded-lg flex justify-center gap-10 bg-orange-100"></div>
            </div>
          </Link>
        </li>
      );
    });
  return (
    <React.Fragment>
      <ul className="flex justify-center flex-col gap-4  p-0 w-full max-w-3xl mb-5 list-none">
        {display}
      </ul>
    </React.Fragment>
  );
}

export default Invoice;
