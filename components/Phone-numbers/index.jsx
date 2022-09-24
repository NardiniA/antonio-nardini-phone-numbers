import React, { useState } from "react";
import Alert from "../Alert";
import { SectionHeader } from "../Layout";
import Input from "./Input";
import Table from "./Table";

const GetNumbers = ({ section }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const [numbers, setNumbers] = useState(null);

    return (
        <section className="s-section">
            <SectionHeader
                header={{
                    title: section.title,
                    description: section.description,
                }}
            />

            <Input setNumbers={setNumbers} setAlert={setAlert} setIsLoading={setIsLoading} />

            <Table numbers={numbers} isLoading={isLoading} />

            {alert && (
                <Alert
                    message={alert.message}
                    type={alert.type}
                    hide={() => setAlert(null)}
                    location="bottom-right"
                    autohide={5000}
                />
            )}
        </section>
    );
};

export default GetNumbers;
