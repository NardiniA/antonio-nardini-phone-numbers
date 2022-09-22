import React from "react";
import dynamic from "next/dynamic";

const FieldZone = ({ fields, register, errors }) => {
    if (fields)
        return fields.map((field, index) => {
            const id = field.name + field.template + index;
            switch (field.template) {
                case "input":
                    const Input = dynamic(() => import("./Fields/Input"));
                    return (
                        <div className={`column lg-${field.size ? field.size : "12"}`}>
                            <Input field={field} id={id} register={register} key={id} error={errors[field.name]} />
                        </div>
                    );
                case "select":
                    const Select = dynamic(() => import("./Fields/Select"));
                    return (
                        <div className={`column lg-${field.size ? field.size : "12"}`}>
                            <Select field={field} id={id} register={register} key={id} error={errors[field.name]} />
                        </div>
                    );
                case "textarea":
                    const Textarea = dynamic(() => import("./Fields/Textarea"));
                    return (
                        <div className={`column lg-${field.size ? field.size : "12"}`}>
                            <Textarea
                                field={field}
                                id={id}
                                register={register} 
                                key={id}
                                error={errors[field.name]}
                            />
                        </div>
                    );
            }
        });
};

export default FieldZone;
