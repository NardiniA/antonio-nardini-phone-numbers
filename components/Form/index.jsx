import React, { useState } from "react";
import FieldZone from "./FieldZone";
import { useForm } from "react-hook-form";
import Submit from "./Fields/Submit";
import Alert from "@/components/Alert";

const Form = ({ form }) => {
    const [alert, setAlert] = useState({
        message: "",
        type: ""
    });
    const [showAlert, setShowAlert] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const hide = () => setShowAlert(false);

    const onSubmit = (data) => {
        if (errors === {}) setAlert({ message: "Invalid Form. Try again!", type: "error" });
        else setAlert({ message: "Message Sent", type: "success" });
        console.log(data);
        setShowAlert(true);
    };

    return (
        <div className="column lg-12">
            {showAlert && <Alert message={alert.message} type={alert.type} hide={hide} />}
            <form onSubmit={handleSubmit(onSubmit)} className="row">
                <FieldZone fields={form?.fields} register={register} errors={errors} />
                <div className="column lg-12">
                    <Submit />
                </div>
            </form>
        </div>
    );
};

export default Form;
