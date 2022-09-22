import React from "react";
import Icon from "@/components/Icon";

const Item = ({ item }) => {
    return (
        <div className="column s-about__feature-item">
            {item.icon && (
                <div className="s-about__feature-icon-block">
                    <Icon name={item.icon} />
                </div>
            )}

            <div className="s-about__feature-text">
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
    );
};

export default Item;
