import React from "react";
import invoice from "./Invoice.module.css";
import data from "./InvoiceData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { img } from "../Image/icon-arrow-right.9e19be64001504a17c14.svg"
function Invoice() {
  let invoiceData = useSelector(store => store.userSection.invoice);
  console.log(invoiceData, "invoice page data");
  const display = data.map((item) => {
    const { id, span, name, money, date } = item;
    return (
      <li className={invoice.invoice}>
        <Link to="/receipt" className={invoice.invoice_main}>
          <div className={invoice.invoice_left}>
            <p className={invoice.invoice_info}>
              #<span className="invoice_span font-bold text-black">{span}</span>
            </p>
            <p className={invoice.invoice_info}>{date}</p>
            <p className={invoice.invoice_info}>{name}</p>
          </div>
          <div className={invoice.invoice_right}>
            <div className="money font-bold">${money}</div>
            <div className={`${invoice.status} rounded-lg`}>
              {/* <div className={invoice.dot}>.</div> */}
              {/* <Link to='/receipt'> */}
              <button type="button" className={`${invoice.type}`}>
                Paid
              </button>
              {/* </Link> */}
            </div>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <React.Fragment>
      <ul className={invoice.invoice_list}>{display}</ul>
    </React.Fragment>
  );
}

export default Invoice;
