import React from "react";
import invoice from "./Invoice.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import data from "../../constants/InvoiceData";
function Invoice() {
  let invoiceData = useSelector((store) => store.counter.invoice);
  let {address} = useSelector((store) => store.counter.invoice);
  console.log(invoiceData, "invoice page data");
  console.log(address, "invoice page data ofy");
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
