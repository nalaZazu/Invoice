import React from "react";
import { Link } from "react-router-dom";
import Invoicelist from "./ReceiptList";
function Receipt() {
  return (
    <React.Fragment>
      <section className="flex flex-col items-center h-full pt-20">
        <div className="flex items-center  p-5 w-1/2 box-border rounded-lg  container mx-auto">
          <div className="invoice_top">
            <div className="invoice_title m-5">
              <Link to="/">
                <p className="mb-6 text-xs  text-gray-700  lg:text-base dark:text-gray-700 font-bold">
                  Go back
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* call the  invoice module */}
        <Invoicelist />
      </section>
    </React.Fragment>
  );
}

export default Receipt;
