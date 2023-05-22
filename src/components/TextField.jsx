import { useField } from 'formik'
import React from 'react'

function TextField({ label, ...props }) {
    const [field, meta] = useField(props)
    console.log(field);
    return (
        <React.Fragment>
            <label htmlFor={field.name}>{label}</label>
            <input {...props} {...field} className="border border-solid border-stone-900 " />
        </React.Fragment>
    )
}

export default TextField