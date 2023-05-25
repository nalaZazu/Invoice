import React from "react";
import invoice from "./Invoice.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Invoice() {
  let invoicedata = useSelector((store) => store.counter.user);
  const display = invoicedata.map((item, index) => {
    const { id, name, date, list_item } = item;
    return (
      <li className={invoice.invoice}>
        <Link
          to={`/receipt/${id}`}
          className="bg-white flex box-border shadow-xl justify-between items-center p-8 no-underline rounded-lg"
        >
          <div className="flex items-center gap-11">
            <p className="text-gray-500">
              #
              <span className="invoice_span font-bold text-black">
                RGX{index}
              </span>
            </p>
            <p className="text-gray-500">{date}</p>
            <p className="text-gray-500">{name}</p>
          </div>
          <div className="flex justify-center items-center  gap-10">
            <div className="font-bold">
              £{list_item[0].price * list_item[0].qty}
            </div>
            <div className="rounded-lg flex justify-center gap-10 bg-green-100">
              <button type="button" className="text-green-400 w-24 p-2">
                Paid
              </button>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <React.Fragment>
      <ul className="flex justify-center flex-col gap-4  p-0 w-full max-w-3xl mb-5 list-none">{display}</ul>
    </React.Fragment>
  );
}

export default Invoice;
