import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import header from "./Header.module.css"
import Invoice from '../Invoice/Invoice'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useFormik } from 'formik'
import { SignupSchema } from '../schema'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Header() {
    const [open, setOpen] = useState(false)
    const toggleButton = () => {
        setOpen(!open)
    }

    const { values, errors, handleSubmit, handleBlur, handleChange, touched } = useFormik({
        initialValues: {
            address: "",
            city: "",
            zip: "",
            country: "",
            name: '',
            email: "",
            street: "",
            client_city: "",
            code: "",
            client_country: "",
            terms: "",
            project: ""
        },
        validationSchema: SignupSchema,
        onSubmit: (values, action) => {
            console.log(values, "testing value");
            action.resetForm()
        }
    })  
     return (
        <React.Fragment>
            <section className={header.header_invoice}>
                <div className={`${header.invoice} container mx-auto`}>
                    <div className="invoice_top  flex justify-around items-center">
                        <div className="invoice_title m-5">
                            <h1 className='mb-1 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-left'>Invoices</h1>
                            <p className='mb-6 text-xs font-normal text-gray-500  lg:text-base dark:text-gray-400'>There a total 6 invoice</p>
                        </div>
                        <div className="invoice_filter_container flex items-center gap-6">
                            <div className="invoice_filter">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex w-full justify-center  rounded-md px-3 py-2 text-sm  text-gray-900  font-bold">
                                            Filter by status
                                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Account settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Support
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}>
                                                            License
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <form method="POST" action="#">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                type="submit"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-left text-sm'
                                                                )}>
                                                                Sign out
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </form>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            <div className={header.invoice_button}>
                                <i className={header.invoice_icon}></i>
                                <button type="button" className='rounded font-bold' onClick={toggleButton} >
                                    {setOpen ? <button>New Invoice</button> : <button>New Invoice</button>}
                                </button>
                                <Transition.Root show={open} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0" >
                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>
                                        <div className="fixed inset-0 overflow-hidden">
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div className="pointer-events-none fixed inset-y-0 left-0  flex ">
                                                    <Transition.Child
                                                        as={Fragment}
                                                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                                                        enterFrom="translate-x-0"
                                                        enterTo="translate-x-0"
                                                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                                                        leaveFrom="translate-x-full"
                                                        leaveTo="translate-x-0"
                                                    >
                                                        <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                                            <Transition.Child
                                                                as={Fragment}
                                                                enter="ease-in-out duration-500"
                                                                enterFrom="opacity-0"
                                                                enterTo="opacity-100"
                                                                leave="ease-in-out duration-500"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0" >
                                                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                                    {/* <button
                                                                        type="button"
                                                                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                                        onClick={() => setOpen(false)}
                                                                    >
                                                                        <span className="sr-only">Close panel</span>
                                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                                    </button> */}
                                                                </div>
                                                            </Transition.Child>
                                                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                                                <div className="px-4 sm:px-6">

                                                                </div>
                                                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                                    {/* Your content */}
                                                                    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                                                        <Dialog.Title className={`text-base font-semibold leading-6 ${header.header_bill}`}>
                                                                            Bill From
                                                                        </Dialog.Title>
                                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                                            <div className="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                    htmlFor="address">
                                                                                    Street Address
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="address" name="address" value={values.address} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text" />
                                                                            </div>
                                                                            {touched.address && errors.address ? <p className='text-red-800'>Address</p> : null}
                                                                        </div>
                                                                        <div className="flex flex-wrap -mx-3 mb-2">
                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                <label
                                                                                    className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                                                                    htmlFor="city">
                                                                                    City
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="city" name="city" value={values.city} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text" />
                                                                                {touched.city && errors.city ? <p className='text-red-800'>City Name</p> : null}

                                                                            </div>

                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                <label
                                                                                    className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                                                    htmlFor="zip">
                                                                                    Post Code
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="zip" onChange={handleChange} onBlur={handleBlur} name='zip' value={values.zip}
                                                                                    type="text" />
                                                                                {touched.zip && errors.zip ? <p className='text-red-800'> Post Code</p> : null}

                                                                            </div>
                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                                                                    htmlFor="country">
                                                                                    Country
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="country" name='country' onChange={handleChange} onBlur={handleBlur} value={values.country}
                                                                                    type="text" />
                                                                                {touched.country && errors.country ? <p className='text-red-800'> country Name </p> : null}
                                                                            </div>
                                                                        </div>

                                                                        {/* second input field */}
                                                                        <Dialog.Title className={`text-base font-semibold leading-6 mt-6 ${header.header_bill}`}>
                                                                            Bill To
                                                                        </Dialog.Title>
                                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                                            <div className="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                    htmlFor="name">
                                                                                    Client's Name
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="name" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text" />
                                                                                {touched.name && errors.name ? <p className='text-red-800'>Name </p> : null}

                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                                            <div className="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                    htmlFor="email">
                                                                                    Client's  Email
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="email" name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text" placeholder='email@gmail.com' />
                                                                                {touched.email && errors.email ? <p className='text-red-800'>Email </p> : null}

                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                                            <div className="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                    htmlFor="street">
                                                                                    Street Address
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="street" name="street" value={values.street} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text" />
                                                                                {touched.street && errors.street ? <p className='text-red-800'> Street</p> : null}
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-wrap -mx-3 mb-2">
                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                <label
                                                                                    className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                                                                    htmlFor="client_city">
                                                                                    city
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="client_city" name="client_city" value={values.client_city} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text" />
                                                                                {touched.client_city && errors.client_city ? <p className='text-red-800'>City Name</p> : null}
                                                                            </div>

                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                <label
                                                                                    className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                                                    htmlFor="code">
                                                                                    Post Code
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="code" onChange={handleChange} onBlur={handleBlur} name='code' value={values.code}
                                                                                    type="text" />
                                                                                {touched.code && errors.code ? <p className='text-red-800'> Post Code</p> : null}
                                                                            </div>
                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                                                                    htmlFor="client_country">
                                                                                    Country
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="client_country" name='client_country' onChange={handleChange} onBlur={handleBlur} value={values.client_country}
                                                                                    type="text" />
                                                                                {touched.client_country && errors.client_country ? <p className='text-red-800'>Country Name</p> : null}
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-wrap -mx-3 mb-2">
                                                                            <div className="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white mt-9  font-bold"
                                                                                    htmlFor="date"
                                                                                >
                                                                                    Invoice Date
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="date" name="date" value={values.date} onChange={handleChange} onBlur={handleBlur}
                                                                                    type="date"
                                                                                />
                                                                                {touched.date && errors.date ? <p className='text-red-800'>Date</p> : null}
                                                                            </div>
                                                                            <div class="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs font-bold mb-2 bg-white"
                                                                                    htmlFor="terms"
                                                                                >
                                                                                    Payment Terms
                                                                                </label>
                                                                                <select class="block appearance-none w-full bg-white  border border-gray-200 rounded py-3 px-4 mb-3 font-bold hover:border-gray-300 leading-tight focus:outline-none focus:shadow-outline" name="terms" id="terms" value={values.terms} onBlur={handleBlur} onChange={handleChange}>
                                                                                    <option>Next 1 day</option>
                                                                                    <option>Next 7 day</option>
                                                                                    <option>Next 12 day</option>
                                                                                </select>
                                                                                {touched.terms && errors.terms ? <p className='text-red-800'> Terms and condition</p> : null}
                                                                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                                                </div>
                                                                            </div>
                                                                            <div className="w-full px-3">
                                                                                <label
                                                                                    className="block  tracking-wide text-gray-400 text-xs  font-bold mb-2 bg-white"
                                                                                    htmlFor="project"
                                                                                >
                                                                                    project Description
                                                                                </label>
                                                                                <input
                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                    id="project" name="project" value={values.project} onBlur={handleBlur} onChange={handleChange}
                                                                                    type="text"
                                                                                    placeholder='e.g graphic Design services '
                                                                                />
                                                                                {touched.project && errors.project ? <p className='text-red-800'> Project Description</p> : null}
                                                                            </div>
                                                                        </div>
                                                                        <button className='bg-indigo-50   mt-3 text-indigo-500 p-3 rounded-full' onClick={() => setOpen(false)}>Discard</button>
                                                                        <button type='submit' className='bg-black hover:bg-black float-right mt-3 text-indigo-500 p-3 rounded-full'>Save as Draft</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </Dialog.Panel>
                                                    </Transition.Child>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>

                            </div>
                        </div>
                    </div>
                </div>
                {/* invoice module */}
                <Invoice />
            </section>

        </React.Fragment>
    )
}

export default Header