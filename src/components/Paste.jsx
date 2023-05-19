// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'



// export default function Example() {
//     const [open, setOpen] = useState(true)

//     return (
//         <button >
//         open 
//             <Transition.Root show={open} as={Fragment}>
//                 <Dialog as="div" className="relative z-10" onClose={setOpen}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-in-out duration-500"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in-out duration-500"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//                     </Transition.Child>

//                     <div className="fixed inset-0 overflow-hidden">
//                         <div className="absolute inset-0 overflow-hidden">
//                             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//                                 <Transition.Child
//                                     as={Fragment}
//                                     enter="transform transition ease-in-out duration-500 sm:duration-700"
//                                     enterFrom="translate-x-full"
//                                     enterTo="translate-x-0"
//                                     leave="transform transition ease-in-out duration-500 sm:duration-700"
//                                     leaveFrom="translate-x-0"
//                                     leaveTo="translate-x-full"
//                                 >
//                                     <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
//                                         <Transition.Child
//                                             as={Fragment}
//                                             enter="ease-in-out duration-500"
//                                             enterFrom="opacity-0"
//                                             enterTo="opacity-100"
//                                             leave="ease-in-out duration-500"
//                                             leaveFrom="opacity-100"
//                                             leaveTo="opacity-0"
//                                         >
//                                             <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
//                                                 <button
//                                                     type="button"
//                                                     className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                                                     onClick={() => setOpen(false)}
//                                                 >
//                                                     <span className="sr-only">Close panel</span>
//                                                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                                                 </button>
//                                             </div>
//                                         </Transition.Child>
//                                         <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
//                                             <div className="px-4 sm:px-6">
//                                                 <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
//                                                     Panel title
//                                                 </Dialog.Title>
//                                             </div>
//                                             <div className="relative mt-6 flex-1 px-4 sm:px-6">
//                                                 <h1>Hello</h1>
//                                             </div>
//                                         </div>
//                                     </Dialog.Panel>
//                                 </Transition.Child>
//                             </div>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition.Root>
//         </button>
//     )
// }

// import { useState } from 'react';


// function Example() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <div className="relative">
//             <button
//                 className="fixed top-4 left-4 z-50 bg-gray-900 rounded-full text-white w-12 h-12 flex justify-center items-center focus:outline-none"
//                 onClick={toggleSidebar}
//             >
//                 {isSidebarOpen ? <button>open</button> : <button>open</button>}
//             </button>
//             <div
//                 className={`relative top-0 left-0   h-full bg-white transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                     }`}
//             >
//                 {/* Sidebar content goes here */}
//                 <div className='paste'>
//                     <form className="w-full max-w-lg">
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-first-name"
//                                 >
//                                     First Name
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                                     id="grid-first-name"
//                                     type="text"
//                                     placeholder="Jane"
//                                 />
//                                 <p className="text-red-500 text-xs italic">Please fill out this field.</p>
//                             </div>
//                             <div className="w-full md:w-1/2 px-3">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-last-name"
//                                 >
//                                     Last Name
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-last-name"
//                                     type="text"
//                                     placeholder="Doe"
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                             <div className="w-full px-3">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Password
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-password"
//                                     type="password"
//                                     placeholder="******************"
//                                 />
//                                 <p className="text-gray-600 text-xs italic">
//                                     Make it as long and as crazy as you'd like
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-2">
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-city"
//                                 >
//                                     City
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-city"
//                                     type="text"
//                                     placeholder="Albuquerque"
//                                 />
//                             </div>
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-state"
//                                 >
//                                     State
//                                 </label>
//                                 <div className="relative">
//                                     <select
//                                         className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                         id="grid-state"
//                                     >
//                                         <option>New Mexico</option>
//                                         <option>Missouri</option>
//                                         <option>Texas</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                         <svg
//                                             className="fill-current h-4 w-4"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                         >
//                                             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-zip"
//                                 >
//                                     Zip
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-zip"
//                                     type="text"
//                                     placeholder={90210}
//                                 />
//                             </div>
//                         </div>
//                     </form>
//                     <form className="w-full max-w-lg">
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-first-name"
//                                 >
//                                     First Name
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                                     id="grid-first-name"
//                                     type="text"
//                                     placeholder="Jane"
//                                 />
//                                 <p className="text-red-500 text-xs italic">Please fill out this field.</p>
//                             </div>
//                             <div className="w-full md:w-1/2 px-3">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-last-name"
//                                 >
//                                     Last Name
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-last-name"
//                                     type="text"
//                                     placeholder="Doe"
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                             <div className="w-full px-3">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Password
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-password"
//                                     type="password"
//                                     placeholder="******************"
//                                 />
//                                 <p className="text-gray-600 text-xs italic">
//                                     Make it as long and as crazy as you'd like
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-2">
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-city"
//                                 >
//                                     City
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-city"
//                                     type="text"
//                                     placeholder="Albuquerque"
//                                 />
//                             </div>
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-state"
//                                 >
//                                     State
//                                 </label>
//                                 <div className="relative">
//                                     <select
//                                         className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                         id="grid-state"
//                                     >
//                                         <option>New Mexico</option>
//                                         <option>Missouri</option>
//                                         <option>Texas</option>
//                                     </select>
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                         <svg
//                                             className="fill-current h-4 w-4"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             viewBox="0 0 20 20"
//                                         >
//                                             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label
//                                     className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                                     htmlFor="grid-zip"
//                                 >
//                                     Zip
//                                 </label>
//                                 <input
//                                     className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="grid-zip"
//                                     type="text"
//                                     placeholder={90210}
//                                 />
//                             </div>
//                         </div>
//                     </form>
//                 </div>


//             </div>
//         </div>
//     );
// }

// export default Example;

// import { Fragment, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'

// export default function Example() {
//     const [open, setOpen] = useState(true)
//     const toggleButton = () => {
//         setOpen(!open)
//     }
//     return (
//         <button onClick={toggleButton}>

//         {setOpen ? <button>open</button> : <button>open</button>}
//             <Transition.Root show={open} as={Fragment}>
//                 <Dialog as="div" className="relative z-10" onClose={setOpen}>
//                     <Transition.Child
//                         as={Fragment}
//                         enter="ease-in-out duration-500"
//                         enterFrom="opacity-0"
//                         enterTo="opacity-100"
//                         leave="ease-in-out duration-500"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                     >
//                         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//                     </Transition.Child>

//                     <div className="fixed inset-0 overflow-hidden">
//                         <div className="absolute inset-0 overflow-hidden">
//                             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//                                 <Transition.Child
//                                     as={Fragment}
//                                     enter="transform transition ease-in-out duration-500 sm:duration-700"
//                                     enterFrom="translate-x-full"
//                                     enterTo="translate-x-0"
//                                     leave="transform transition ease-in-out duration-500 sm:duration-700"
//                                     leaveFrom="translate-x-0"
//                                     leaveTo="translate-x-full"
//                                 >
//                                     <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
//                                         <Transition.Child
//                                             as={Fragment}
//                                             enter="ease-in-out duration-500"
//                                             enterFrom="opacity-0"
//                                             enterTo="opacity-100"
//                                             leave="ease-in-out duration-500"
//                                             leaveFrom="opacity-100"
//                                             leaveTo="opacity-0"
//                                         >
//                                             <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
//                                                 <button
//                                                     type="button"
//                                                     className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                                                     onClick={() => setOpen(false)}
//                                                 >
//                                                     <span className="sr-only">Close panel</span>
//                                                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                                                 </button>
//                                             </div>
//                                         </Transition.Child>
//                                         <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
//                                             <div className="px-4 sm:px-6">
//                                                 <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
//                                                     Panel title
//                                                 </Dialog.Title>
//                                             </div>
//                                             <div className="relative mt-6 flex-1 px-4 sm:px-6">{/* Your content */}</div>
//                                         </div>
//                                     </Dialog.Panel>
//                                 </Transition.Child>
//                             </div>
//                         </div>
//                     </div>
//                 </Dialog>
//             </Transition.Root>

//         </button>
//     )
// }
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     lastName: Yup.string()
//         .min(2, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
// });

// const Example = () => (
//     <div>
//         <h1>Signup</h1>
//         <Formik
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {

//                 console.log(values);

//             }}
//         >
//             {({ errors, touched }) => (
//                 <Form>
//                     <label htmlFor="firstName">Name</label>
//                     <input type="text" id="firstName" name="firstName" />
//                     {errors.firstName && touched.firstName ? (
//                         <div>{errors.firstName}</div>
//                     ) : null}
//                     <label htmlFor="lastname">Last Name</label>
//                     <input name="lastName" id="lastname" />
//                     {errors.lastName && touched.lastName ? (
//                         <div>{errors.lastName}</div>
//                     ) : null}
//                     <label htmlFor="email">Email</label>
//                     <input name="email" id="email" type="email" />
//                     {errors.email && touched.email ? <div>{errors.email}</div> : null}
//                     <button type="submit">Submit</button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );

// export default Example

import React from "react";
import { useFormik } from "formik";
import { SignupSchema } from "./schema";
const Example = () => {

    const { values, errors, touched, handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            console.log(values)
        }
    })
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" className="border-solid border-2 border-slate-950" type="name" name="name" value={values.name} onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.name && errors.name ? <p>Enter your name</p> : null}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="border-solid border-2 border-slate-950" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && errors.email ? <p>Enter your email</p> : null}
                <label htmlFor="password">password</label>
                <input id="password" type="password" className="border-solid border-2 border-slate-950" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {touched.password && errors.password ? <p>Enter your password</p> : null}
                <label htmlFor="password">confirm password</label>
                <input id="confirm_password" type="password" className="border-solid border-2 border-slate-950" name="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
                {touched.confirm_password && errors.confirm_password ? <p>Enter your confrim_password</p> : null}
                <button type="submit">Submit</button>
            </form>

        </React.Fragment>
    )
}

export default Example