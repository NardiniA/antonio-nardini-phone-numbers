import clsx from "clsx";
import React from "react";
import Card from "./Card";

const Pricing = ({ section }) => {
    return (
        <section id="pricing" className={clsx("s-pricing", section.div && "div", section.lightBackground && "bg-light")}>
            <div className="row s-pricing__content">
                {(section.title || section.desc) && (
                    <div className="column lg-4 md-12 s-pricing__header">
                        {section.title && (
                            <h3 className="h2">{section.title}</h3>
                        )}
                        {section.desc && <p>{section.desc}</p>}
                    </div>
                )}

                {section?.cards && (
                    <div className="column lg-8 md-12 s-pricing__plans">
                        <div className="row plans block-lg-one-half block-tab-whole">
                            {section?.cards.map((card, index) => (
                                <Card
                                    data={card}
                                    key={card.title + "card_key" + index}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Pricing;
