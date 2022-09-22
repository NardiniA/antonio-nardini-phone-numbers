import React from "react";

const typeParse = (type) => {
    if (type === "solid") {
        return "s";
    } else if (type === "logo") {
        return "l";
    }
    return "";
};

const Icon = ({ name, tag: Tag = "i", type }) => {
    return <Tag className={`bx bx${typeParse(type)}-${name}`}></Tag>;
};

export default Icon;
