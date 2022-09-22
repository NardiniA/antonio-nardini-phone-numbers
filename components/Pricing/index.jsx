import clsx from "clsx";
import React from "react";
import Card from "./Card";

const pricing_data = {
    title: "Our Easy Pricing Plans for Everyone.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit pretium, proin sed massa maecenas tempus, nibh. Ultrices pellentesque amet tristique feugiat condimentum integer fames.",
    cards: [
        {
            title: "Pro Plan",
            currency: "£",
            price: "15",
            frequency: "Per Month",
            features: [
                "5000GB Storage",
                "Unlimited Bandwidth",
                "100 Email Accounts",
                "Backup & Restore",
            ],
            btnText: "Get Started",
            btnHref: "/",
            popular: true,
        },
        {
            title: "Free",
            currency: "£",
            price: "0",
            frequency: "Forever",
            features: [
                "50GB Storage",
                "50GB Bandwidth",
                "30 Email Accounts",
                "Backup & Restore",
            ],
            btnText: "Get Started",
            btnHref: "/",
        },
    ],
    div: false,
    lightBackground: false,
};

const Pricing = () => {
    return (
        <section id="pricing" className={clsx("s-pricing", pricing_data.div && "div", pricing_data.lightBackground && "bg-light")}>
            <div className="row s-pricing__content">
                {(pricing_data.title || pricing_data.desc) && (
                    <div className="column lg-4 md-12 s-pricing__header">
                        {pricing_data.title && (
                            <h3 className="h2">{pricing_data.title}</h3>
                        )}
                        {pricing_data.desc && <p>{pricing_data.desc}</p>}
                    </div>
                )}

                {pricing_data?.cards && (
                    <div className="column lg-8 md-12 s-pricing__plans">
                        <div className="row plans block-lg-one-half block-tab-whole">
                            {pricing_data?.cards.map((card, index) => (
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
