import React, { useState } from "react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { FieldArray, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import { userData } from "../../state/reducer/counterReducer";
import { v4 as uuidv4 } from "uuid";
const FormData = () => {
  const [open, setOpen] = useState(false);
  const toggleButton = () => {
    setOpen(!open);
  };
  let uId = uuidv4();
  // store value configuration
  let dispatch = useDispatch();
  //   yup validation
  const SignupSchema = Yup.object().shape({
    address: Yup.string().required("Address is reuqired"),
    city: Yup.string().required("City Name is required"),
    zip: Yup.string().required("zip code is required"),
    country: Yup.string().required("Country Name is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    street: Yup.string().required("Street Number is required"),
    client_city: Yup.string().required("City Name is required"),
    code: Yup.string().required("Code Number is reuquired"),
    client_country: Yup.string().required("Country Name is reuquired"),
    terms: Yup.string().required("Select the terms and condition"),
    project: Yup.string().required("Project description"),
    date: Yup.string().required("select date "),
  });
  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        border: "1px solid rgb(225 29 72)",
      };
    }
  }
  const handleCancel = (resetForm) => {
    resetForm();
    setOpen(false);
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="rounded font-bold"
        onClick={toggleButton}
      >
        {setOpen ? (
          <button className="p-3">New Invoice</button>
        ) : (
          <button className="p-3">New Invoice</button>
        )}
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
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0  left-0  flex  w-full">
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
                    <div
                      className="flex h-full  absolute left-20 flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                      style={{ width: "600px" }}
                    >
                      <Sidebar />
                      <div className="relative mt-6 flex-1 px-8 ">
                        <Formik
                          initialValues={{
                            id: uId,
                            status: "Pending",
                            address: "",
                            city: "",
                            zip: "",
                            country: "",
                            name: "",
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
                                total: "",
                              },
                            ],
                          }}
                          enableReinitialize={true}
                          validationSchema={SignupSchema}
                          validateOnBlur={false}
                          onSubmit={(values) => {
                            dispatch(userData(values));
                            console.log(values, "header value");
                          }}
                        >
                          {
                            ({
                            values,
                            handleSubmit,
                            handleChange,
                            errors,
                            setFieldValue,
                            handleBlur,
                            resetForm,
                          }) => (
                            <Form
                              className="w-full"
                              onSubmit={handleSubmit}
                              style={{ maxWidth: "40rem" }}
                            >
                              <Dialog.Title className="text-base font-semibold leading-6 text-indigo-500 ml-3">
                                Bill From
                              </Dialog.Title>
                              <div className="flex flex-wrap  mb-6">
                                <div className="w-full px-3  mb-6 md:mb-0">
                                  <label
                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                    htmlFor="address"
                                  >
                                    Street Address
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="address"
                                    name="address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    style={getStyles(errors, "address")}
                                  />
                                </div>
                                <div className="flex flex-wrap  mb-2">
                                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                      className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                      htmlFor="city"
                                    >
                                      City
                                    </label>
                                    <input
                                      className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                      id="city"
                                      name="city"
                                      value={values.city}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      type="text"
                                      style={getStyles(errors, "city")}
                                    />
                                  </div>
                                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                      className="block tracking-wide text-gray-400 text-xs  mb-2"
                                      htmlFor="zip"
                                    >
                                      Post Code
                                    </label>
                                    <input
                                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                      id="zip"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      name="zip"
                                      value={values.zip}
                                      type="text"
                                      style={getStyles(errors, "zip")}
                                    />
                                  </div>
                                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label
                                      className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                      htmlFor="country"
                                    >
                                      Country
                                    </label>
                                    <input
                                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                      id="country"
                                      name="country"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.country}
                                      type="text"
                                      style={getStyles(errors, "country")}
                                    />
                                  </div>
                                </div>
                              </div>
                              <Dialog.Title className="text-base font-semibold leading-6 mt-6 ml-3 text-indigo-500">
                                Bill To
                              </Dialog.Title>
                              <div className="flex flex-wrap  mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                    htmlFor="name"
                                  >
                                    Client's Name
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    style={getStyles(errors, "name")}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-wrap  mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                    htmlFor="email"
                                  >
                                    Client's Email
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="email@gmail.com"
                                    style={getStyles(errors, "email")}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-wrap  mb-6">
                                <div className="w-full px-3">
                                  <label
                                    className="block  tracking-wide text-gray-400 text-xs  mb-2 bg-white"
                                    htmlFor="street"
                                  >
                                    Street Address
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="street"
                                    name="street"
                                    value={values.street}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    style={getStyles(errors, "street")}
                                  />
                                </div>
                              </div>
                              <div className="flex flex-wrap  mb-2">
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                  <label
                                    className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                    htmlFor="client_city"
                                  >
                                    city
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="client_city"
                                    name="client_city"
                                    value={values.client_city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    style={getStyles(errors, "client_city")}
                                  />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                  <label
                                    className="block tracking-wide text-gray-400 text-xs  mb-2"
                                    htmlFor="code"
                                  >
                                    Post Code
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="code"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="code"
                                    value={values.code}
                                    type="text"
                                    style={getStyles(errors, "code")}
                                  />
                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                  <label
                                    className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                    htmlFor="client_country"
                                  >
                                    Country
                                  </label>
                                  <input
                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="client_country"
                                    name="client_country"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.client_country}
                                    type="text"
                                    style={getStyles(errors, "client_country")}
                                  />
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
                                    id="date"
                                    name="date"
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="date"
                                    style={getStyles(errors, "date")}
                                  />
                                </div>
                                <div class="w-full px-3">
                                  <label
                                    className="block  tracking-wide text-gray-400 text-xs font-bold mb-2 bg-white"
                                    htmlFor="terms"
                                  >
                                    Payment Terms
                                  </label>
                                  <select
                                    class="block appearance-none w-full bg-white  border border-gray-200 rounded py-3 px-4 mb-3 font-bold hover:border-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                                    name="terms"
                                    id="terms"
                                    value={values.terms}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={getStyles(errors, "terms")}
                                  >
                                    <option>Next 1 day</option>
                                    <option>Next 7 day</option>
                                    <option>Next 12 day</option>
                                  </select>

                                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                      class="fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
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
                                    id="project"
                                    name="project"
                                    value={values.project}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type="text"
                                    placeholder="e.g graphic Design services"
                                    style={getStyles(errors, "project")}
                                  />
                                </div>
                              </div>
                              <Dialog.Title className="text-base font-semibold leading-6 mt-6 text-gray-400 text-md ml-3 ">
                                Item List
                              </Dialog.Title>
                              <FieldArray name="list_item">
                                {({ insert, remove, push }) => (
                                  <div>
                                    {values.list_item.length > 0 &&
                                      values.list_item.map((item, index) => {
                                        return (
                                          <div className="flex flex-wrap  mb-2">
                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                              <label
                                                className="block  tracking-wide  bg-white text-gray-400 text-xs  mb-2"
                                                htmlFor={` list_item.${index}.list`}
                                              >
                                                Item name
                                              </label>

                                              <input
                                                className="appearance-none block w-full bg-white text-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                name={`list_item.${index}.list`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                type="text"
                                              />
                                            </div>
                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                                              <label
                                                className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                htmlFor={`list_item.${index}.qty`}
                                              >
                                                Qty.
                                              </label>
                                              <input
                                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                name={`list_item.${index}.qty`}
                                                type="text"
                                              />
                                            </div>
                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                                              <label
                                                className="block tracking-wide text-gray-400 text-xs  mb-2"
                                                htmlFor={`list_item.${index}.price`}
                                              >
                                                Price
                                              </label>
                                              <input
                                                className="appearance-none block w-full bg-white text-gray-700 border  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name={`list_item.${index}.price`}
                                                type="text"
                                              />
                                            </div>
                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                                              <label
                                                className="block  tracking-wide text-gray-400 text-xs  mb-2"
                                                htmlFor={`list_item.${index}.total`}
                                              >
                                                Total
                                              </label>
                                              <input
                                                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                name={`list_item.${index}.total`}
                                                value={item.price * item.qty}
                                                disabled
                                                onChange={() =>
                                                  setFieldValue(
                                                    `list_item.${index}.total`,
                                                    item.price * item.qty
                                                  )
                                                }
                                                type="text"
                                              />
                                            </div>
                                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0 mt-6  flex justify-center ">
                                              <button
                                                type="button"
                                                className="secondary"
                                                onClick={() => remove(index)}
                                              >
                                                X
                                              </button>
                                            </div>
                                          </div>
                                        );
                                      })}
                                    <button
                                      type="button"
                                      className="bg-indigo-50 w-full  mt-3 text-indigo-500 p-3 rounded-full "
                                      onClick={() =>
                                        push({
                                          list: "",
                                          qty: "",
                                          price: "",
                                          total: "",
                                        })
                                      }
                                    >
                                      +Add Item
                                    </button>
                                  </div>
                                )}
                              </FieldArray>
                              <button
                                onClick={() => handleCancel(resetForm)}
                                className="bg-indigo-50   mt-3 text-indigo-500 p-3 rounded-full"
                              >
                                Discard
                              </button>
                              <button
                                type="submit"
                                className="bg-indigo-50  hover:bg-indigo-500 float-right mt-3 ml-1 text-white font-bold p-3 rounded-full"
                                onClick={() => setOpen(false)}
                              >
                                Save & Send
                              </button>
                              <button
                                type="submit"
                                className="bg-gray-400 hover:bg-black float-right mt-3 text-gray-700 font-bold p-3 rounded-full"
                                onClick={() => setOpen(false)}
                              >
                                Save as Draft
                              </button>
                            </Form>
                          )
                          }
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
    </React.Fragment>
  );
};

export default FormData;
