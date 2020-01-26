import React from 'react';
import { useForm } from "react-hook-form";

export const AddContactForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { onContactSubmit } = props;
    const formSubmit = (formValues) => {
        onContactSubmit(formValues);
    };
    return(
        <form className="add-form" onSubmit={handleSubmit(formSubmit)}>
            <input type="text" placeholder="Name" name="pname" ref={register} />
            <input type="text" placeholder="Number" name="pnumber" ref={register} />
            <button type="submit">Add Contact</button>
        </form>
    )
}