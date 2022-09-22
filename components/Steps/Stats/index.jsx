import React from "react";
import Item from "./Item";

const stats = [
    {
        count: "554k",
        title: "Total Downloads",
    },
    {
        count: "22k",
        title: "Daily Visitors",
    },
    {
        count: "99%",
        title: "Positive Rating",
    },
    {
        count: "526k",
        title: "Happy Users",
    },
]

const Stats = () => {
    return (
        <div className="row block-lg-one-fourth block-tab-one-half block-stack s-about__stats">
            {stats && stats.map((stat, index) => (
                <Item stat={stat} key={stat.title + index} />
            ))}
        </div>
    );
};

export default Stats;
