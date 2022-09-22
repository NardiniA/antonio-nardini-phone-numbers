import React, { useRef, useState } from "react";
import Icon from "../Icon";
import clsx from "clsx";

const Answer = ({ data: { question, answer } }) => {
    const content = useRef();
    const [height, setHeight] = useState("250px");
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        if (content.current) setHeight(content.current.scrollHeight + "px");
        setOpen(!open);
    };

    return (
        <div
            className={clsx("question", open && "open")}
            style={{ "--question-height": height }}
        >
            {question && (
                <header className="question__header" onClick={handleClick}>
                    <h6 className="question__header-title">{question}</h6>
                    <Icon name="chevron-down" />
                </header>
            )}

            {answer && (
                <div className="question__content" ref={content}>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: answer,
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Answer;
