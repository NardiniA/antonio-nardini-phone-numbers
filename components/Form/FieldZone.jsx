import React from "react";
import dynamic from "next/dynamic";

const FieldZone = ({ fields, register, errors }) => {
    if (fields)
        return fields.map((field, index) => {
            const id = field.name + field.template + index;
            const colSize = field?.config.size === "quarter" ? "3" : field?.config.size === "half" ? "6" : "12";
            console.log(field.template);
            switch (field.template) {
                case "input":
                    const Input = dynamic(() => import("./Fields/Input"));
                    return (
                        <div className={`column lg-${colSize}`} key={id}>
                            <Input field={field} id={id} register={register} error={errors[field.name]} />
                        </div>
                    );
                case "select":
                    const Select = dynamic(() => import("./Fields/Select"));
                    return (
                        <div className={`column lg-${colSize}`} key={id}>
                            <Select
                                field={field}
                                id={id}
                                register={register}
                                error={errors[field.name]}
                            />
                        </div>
                    );
                case "textarea":
                    const Textarea = dynamic(() => import("./Fields/Textarea"));
                    return (
                        <div className={`column lg-${colSize}`} key={id}>
                            <Textarea
                                field={field}
                                id={id}
                                register={register}
                                error={errors[field.name]}
                            />
                        </div>
                    );
            }
        });
};

export default FieldZone;
