import React, { useState } from "react";
import FieldZone from "./FieldZone";
import { useForm } from "react-hook-form";
import Submit from "./Fields/Submit";
import Reset from "./Fields/Reset";
import Alert from "@/components/Alert";

const Form = ({ form }) => {
    const [alert, setAlert] = useState({
        message: "Invalid Form. Try again!",
        type: "error",
    });
    const [showAlert, setShowAlert] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const hide = () => setShowAlert(false);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        if (errors !== {}) event.target.submit();
        else showAlert(true);
    };

    return (
        <div className="column lg-12">
            {showAlert && <Alert message={alert.message} type={alert.type} hide={hide} autohide={5000} />}
            <form onSubmit={handleSubmit(onSubmit)} className="row" method={form.method} action={form.action} target="_blank">
                <FieldZone fields={form?.fields} register={register} errors={errors} />
                <div className="column lg-12">
                    <Submit />
                    <Reset />
                </div>
            </form>
        </div>
    );
};

export default Form;
