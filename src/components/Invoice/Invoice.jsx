import React from "react";
import invoice from "./Invoice.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Invoice() {
  let invoicedata = useSelector((store) => store.counter.user);
  const display = invoicedata.map((item, index) => {
    const {id,name, date,list_item } = item;
    return (
      <li className={invoice.invoice}>
        <Link to={`/receipt/${id}`} className={invoice.invoice_main}>
          <div className={invoice.invoice_left}>
            <p className={invoice.invoice_info}>
              #
              <span className="invoice_span font-bold text-black">RGX{index}</span>
            </p>
            <p className={invoice.invoice_info}>{date}</p>
            <p className={invoice.invoice_info}>{name}</p>
          </div>
          <div className={invoice.invoice_right}>
            <div className="money font-bold">£{list_item[0].price * list_item[0].qty}</div>
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
