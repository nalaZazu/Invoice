import React from 'react'
import receipt from "./Receipt.module.css"
import { Link } from 'react-router-dom'
import Invoicelist from './ReceiptList'
function Receipt() {
    return (
        <React.Fragment>
            <section className={receipt.receipt_showcase}>
                <div className={`${receipt.receipt_main_showcase} container mx-auto `}>
                    <div className="invoice_top">
                        <div className="invoice_title m-5 w-6/12">
                            <Link to='/'>
                                <p className='mb-6 text-xs  text-gray-700  lg:text-base dark:text-gray-700 font-bold'>Go back</p>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* invoice module */}
                <Invoicelist />
            </section>
        </React.Fragment>
    )
}

export default Receipt