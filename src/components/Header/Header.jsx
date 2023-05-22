import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import header from "./Header.module.css"
import Invoice from '../Invoice/Invoice'
import { Dialog } from '@headlessui/react'
import { ErrorMessage, Field, FieldArray, Form, Formik, getIn } from 'formik'
import * as Yup from "yup";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function Header() {
    const [open, setOpen] = useState(false)
    const toggleButton = () => {
        setOpen(!open)
    }
    const SignupSchema = Yup.object().shape({
        address: Yup.string().required("Address is reuqired"),
        city: Yup.string().required("City Name is required"),
        zip: Yup.string().required("zip code is required"),
        country: Yup.string().required("Country Name is required"),
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        street: Yup.string().required("Street Number is required"),
        client_city: Yup.string().required("City Name is required"),
        code: Yup.string().required("Code Number is reuquired"),
        client_country: Yup.string().required("Country Name is reuquired"),
        terms: Yup.string().required("Select the terms and condition"),
        project: Yup.string().required("Project description"),
        date: Yup.string().required("select date ")
    });

    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid rgb(225 29 72)'
            }
        }
    }
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
                            <div className="bg-indigo-500 gap-2  rounded-full text-white relative">
                                <i className={header.invoice_icon}></i>
                                <button type="button" className='rounded font-bold' onClick={toggleButton} >
                                    {setOpen ? <button className="p-2">New Invoice</button> : <button className="p-2">New Invoice</button>}
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
                                                <div className="pointer-events-none fixed inset-y-0 left-0  flex  w-full">
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
                                                                <div className="absolute  top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
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

                                                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                                    {/* <Sidebar/> */}
                                                                    {/* Your content */}
                                                                    <Formik
                                                                        initialValues={{
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
                                                                            project: "",
                                                                            list_item: [
                                                                                {
                                                                                    list: "",
                                                                                    qty: "",
                                                                                    price: "",
                                                                                    total: ""
                                                                                }
                                                                            ]
                                                                        }}
                                                                        validationSchema={SignupSchema}
                                                                        onSubmit={values => {
                                                                            // same shape as initial values
                                                                            console.log(values);
                                                                        }} >
                                                                        {({ values, handleSubmit, handleChange, errors }) => (
                                                                            <Form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                                                                <Dialog.Title className="text-base font-semibold leading-6 text-indigo-500">
                                                                                    Bill From
                                                                                </Dialog.Title>
                                                                                <div className="flex flex-wrap  mb-6">
                                                                                    <div className="w-full px-3  mb-6 md:mb-0">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                            htmlFor="address">
                                                                                            Street Address
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="address" name="address" value={values.address} onChange={handleChange}
                                                                                            type="text" style={getStyles(errors, 'address')} />
                                                                                    </div>
                                                                                    <div className="flex flex-wrap  mb-2">
                                                                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                            <label
                                                                                                className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                                                                                htmlFor="city">
                                                                                                City
                                                                                            </label>
                                                                                            <input
                                                                                                className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                                id="city" name="city" value={values.city} onChange={handleChange}
                                                                                                type="text" style={getStyles(errors, 'city')} />
                                                                                        </div>

                                                                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                            <label
                                                                                                className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                                                                htmlFor="zip">
                                                                                                Post Code
                                                                                            </label>
                                                                                            <input
                                                                                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                                id="zip" onChange={handleChange} name='zip' value={values.zip}
                                                                                                type="text" style={getStyles(errors, 'zip')} />
                                                                                        </div>
                                                                                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                            <label
                                                                                                className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                                                                                htmlFor="country">
                                                                                                Country
                                                                                            </label>
                                                                                            <input
                                                                                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                                id="country" name='country' onChange={handleChange} value={values.country}
                                                                                                type="text" style={getStyles(errors, 'country')} />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                {/* second input  */}
                                                                                <Dialog.Title className={`text-base font-semibold leading-6 mt-6 ${header.header_bill}`}>
                                                                                    Bill To
                                                                                </Dialog.Title>
                                                                                <div className="flex flex-wrap  mb-6">
                                                                                    <div className="w-full px-3">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                            htmlFor="name">
                                                                                            Client's Name
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="name" name="name" value={values.name} onChange={handleChange}
                                                                                            type="text" style={getStyles(errors, 'name')} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex flex-wrap  mb-6">
                                                                                    <div className="w-full px-3">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                            htmlFor="email">
                                                                                            Client's  Email
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="email" name="email" value={values.email} onChange={handleChange}
                                                                                            type="text" placeholder='email@gmail.com' style={getStyles(errors, 'email')} />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex flex-wrap  mb-6">
                                                                                    <div className="w-full px-3">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                                                                            htmlFor="street">
                                                                                            Street Address
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="street" name="street" value={values.street} onChange={handleChange}
                                                                                            type="text" style={getStyles(errors, 'street')} />

                                                                                    </div>
                                                                                </div>

                                                                                <div className="flex flex-wrap  mb-2">
                                                                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                        <label
                                                                                            className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                                                                            htmlFor="client_city">
                                                                                            city
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="client_city" name="client_city" value={values.client_city} onChange={handleChange}
                                                                                            type="text" style={getStyles(errors, 'city')} />

                                                                                    </div>

                                                                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                        <label
                                                                                            className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                                                            htmlFor="code">
                                                                                            Post Code
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="code" onChange={handleChange} name='code' value={values.code}
                                                                                            type="text" style={getStyles(errors, 'code')} />

                                                                                    </div>
                                                                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                                                                            htmlFor="client_country">
                                                                                            Country
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="client_country" name='client_country' onChange={handleChange} value={values.client_country}
                                                                                            type="text" style={getStyles(errors, 'client_country')} />

                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex flex-wrap  mb-2">
                                                                                    <div className="w-full px-3">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white mt-9  font-bold"
                                                                                            htmlFor="date"
                                                                                        >
                                                                                            Invoice Date
                                                                                        </label>
                                                                                        <input
                                                                                            className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                            id="date" name="date" value={values.date} onChange={handleChange}
                                                                                            type="date" style={getStyles(errors, 'date')}
                                                                                        />

                                                                                    </div>
                                                                                    <div class="w-full px-3">
                                                                                        <label
                                                                                            className="block  tracking-wide text-gray-400 text-xs font-bold mb-2 bg-white"
                                                                                            htmlFor="terms"
                                                                                        >
                                                                                            Payment Terms
                                                                                        </label>
                                                                                        <select class="block appearance-none w-full bg-white  border border-gray-200 rounded py-3 px-4 mb-3 font-bold hover:border-gray-300 leading-tight focus:outline-none focus:shadow-outline" name="terms" id="terms" value={values.terms} onChange={handleChange} style={getStyles(errors, 'terms')}>
                                                                                            <option>Next 1 day</option>
                                                                                            <option>Next 7 day</option>
                                                                                            <option>Next 12 day</option>
                                                                                        </select>

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
                                                                                            id="project" name="project" value={values.project} onChange={handleChange}
                                                                                            type="text"
                                                                                            placeholder='e.g graphic Design services' style={getStyles(errors, 'project')}
                                                                                        />

                                                                                    </div>
                                                                                </div>
                                                                                <Dialog.Title className={`text-base font-semibold leading-6 mt-6 text-gray-400 text-md`}>
                                                                                    Item List
                                                                                </Dialog.Title>
                                                                                <FieldArray name="list_item">
                                                                                    {({ insert, remove, push }) => (
                                                                                        <div>
                                                                                            {values.list_item.length > 0 &&
                                                                                                values.list_item.map((friend, index) => {
                                                                                                    {/* <div className="row" key={index}>
                                                                                                        <div className="col">
                                                                                                            <label htmlFor={`list_item.${index}.name`}>Name</label>
                                                                                                            <Field
                                                                                                                name={`list_item.${index}.name`}
                                                                                                                placeholder="Jane Doe"
                                                                                                                type="text"
                                                                                                            />
                                                                                                            <ErrorMessage
                                                                                                                name={`list_item.${index}.name`}
                                                                                                                component="div"
                                                                                                                className="field-error"
                                                                                                            />
                                                                                                        </div>
                                                                                                        <div className="col">
                                                                                                            <label htmlFor={`list_item.${index}.email`}>Email</label>
                                                                                                            <Field
                                                                                                                name={`list_item.${index}.email`}
                                                                                                                placeholder="jane@acme.com"
                                                                                                                type="email"
                                                                                                            />
                                                                                                            <ErrorMessage
                                                                                                                name={`list_item.${index}.name`}
                                                                                                                component="div"
                                                                                                                className="field-error"
                                                                                                            />
                                                                                                        </div>
                                                                                                        <div className="col">
                                                                                                            <button
                                                                                                                type="button"
                                                                                                                className="secondary"
                                                                                                                onClick={() => remove(index)}
                                                                                                            >
                                                                                                                X
                                                                                                            </button>
                                                                                                        </div>
                                                                                                    </div> */}
                                                                                                    return (
                                                                                                        <div className="flex flex-wrap  mb-2">
                                                                                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                                                                                <label
                                                                                                                    className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                                                                                                    htmlFor={` list_item.${index}.list`}>
                                                                                                                    Item name
                                                                                                                </label>
                                                                                                                <input
                                                                                                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                                                    name={` list_item.${index}.list`} onChange={handleChange}
                                                                                                                    type="text" />

                                                                                                            </div>
                                                                                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                                                                                                                <label
                                                                                                                    className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                                                                                    htmlFor={` list_item.${index}.list`}>
                                                                                                                    Qty.
                                                                                                                </label>
                                                                                                                <input
                                                                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                                                    onChange={handleChange} name={` list_item.${index}.qty`}
                                                                                                                    type="text" />

                                                                                                            </div>
                                                                                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                                                                                                                <label
                                                                                                                    className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                                                                                    htmlFor={` list_item.${index}.list`}>
                                                                                                                    Price
                                                                                                                </label>
                                                                                                                <input
                                                                                                                    className="appearance-none block w-full bg-white text-gray-700 border 
                                                                                                                     border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                                                    onChange={handleChange} name={` list_item.${index}.price`}
                                                                                                                    type="text" />

                                                                                                            </div>
                                                                                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                                                                                                                <label
                                                                                                                    className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                                                                                                    htmlFor={` list_item.${index}.list`}>
                                                                                                                    Total
                                                                                                                </label>
                                                                                                                <input
                                                                                                                    className="appearance-none block w-full bg-white text-gray-700 border
                                                                                                                     border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                                                                                                                      focus:border-gray-500"
                                                                                                                    name={` list_item.${index}.total`} onChange={handleChange}
                                                                                                                    type="text" />

                                                                                                            </div>
                                                                                                            <div className='w-full md:w-1/6 px-3 mb-6 md:mb-0 mt-6 text-center'>
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="secondary"
                                                                                                                    onClick={() => remove(index)} >
                                                                                                                    X
                                                                                                                </button>
                                                                                                            </div>


                                                                                                        </div>
                                                                                                    )
                                                                                                })}
                                                                                            <button
                                                                                                type="button"
                                                                                                className="bg-indigo-50 w-full  mt-3 text-indigo-500 p-3 rounded-full "
                                                                                                onClick={() => push({ list: '', qty: '', price: "", total: "" })}
                                                                                            >
                                                                                                Add Item
                                                                                            </button>

                                                                                        </div>
                                                                                    )}
                                                                                </FieldArray>

                                                                                <button className='bg-indigo-50   mt-3 text-indigo-500 p-3 rounded-full' onClick={() => setOpen(false)}>Discard</button>
                                                                                <button type='submit' className='bg-black hover:bg-black float-right mt-3 text-indigo-500 p-3 rounded-full'>Save as Draft</button>









                                                                            </Form>
                                                                        )}
                                                                    </Formik>

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

        </React.Fragment >
    )
}

export default Header