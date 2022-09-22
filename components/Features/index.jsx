import React from "react";
import { SectionHeader } from "@/components/Layout";
import Item from "./Item";
import CardItem from "./CardItem";
import clsx from "clsx";
import dynamic from "next/dynamic";

const Features = ({ section }) => {
    return (
        <section
            className={clsx("s-section", section.lightBackground && "bg-light")}
        >
            <SectionHeader
                header={{
                    title: section.title,
                    description: section.description,
                }}
            />

            {section?.features && (
                <div
                    className={clsx(
                        "row",
                        section.cardBased
                            ? "feature-row-grid"
                            : "s-about__feature-list block-lg-one-third"
                    )}
                >
                    {section?.features.map((feature, index) => {
                        const Comp = dynamic(() =>
                            import(`./${section.cardBased ? "Card" : ""}Item`)
                        );
                        return (
                            <Comp
                                item={feature}
                                key={feature.title + "feature_key" + index}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Features;
