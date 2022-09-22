import React from "react";

const Item = ({ data: { title, text } }) => {
    return (
        <div className="s-about__howto-process-step">
            {title && <h3 className="h5">{title}</h3>}
            {text && (
                <p
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></p>
            )}
        </div>
    );
};

export default Item;
