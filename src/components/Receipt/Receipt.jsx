import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import receipt from "./Receipt.module.css"
import Invoice from '../Invoice/Invoice'
import { Link } from 'react-router-dom'
import Invoicelist from './ReceiptList'

function Receipt() {

    return (
        <React.Fragment>
            <section className={receipt.receipt_showcase}>
                <div className={`${receipt.receipt_main_showcase} container mx-auto `}>
                    <div className="invoice_top  w-6/12  ">
                        <div className="invoice_title m-5">
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