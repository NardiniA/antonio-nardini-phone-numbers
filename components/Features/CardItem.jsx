import React from "react";
import Icon from "@/components/Icon";
import clsx from "clsx";

const Item = ({ item }) => {
    return (
        <div
            className={clsx("column s-feature__item", item.active && "active")}
        >
            <div className="s-feature__item-container">
                <div className="s-feature__item-block">
                    {item.icon && (
                        <div className="s-feature__icon-block">
                            <Icon name={item.icon} />
                        </div>
                    )}

                    <div className="s-feature__text">
                        {item.title && <h3 className="h5">{item.title}</h3>}
                        {item.text && (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: item.text,
                                }}
                            ></p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
