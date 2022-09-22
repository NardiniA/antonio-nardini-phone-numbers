import React from "react";
import Item from "./Item";

const Stats = ({ step }) => {
    return (
        <div className="row block-lg-one-fourth block-tab-one-half block-stack s-about__stats">
            {step?.stats && step?.stats.map((stat, index) => (
                <Item stat={stat} key={stat.title + index} />
            ))}
        </div>
    );
};

export default Stats;
