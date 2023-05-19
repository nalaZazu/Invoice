import * as Yup from 'yup';

export const SignupSchema = Yup.object({
    address: Yup.string().required("Address is reuired"),
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
})

