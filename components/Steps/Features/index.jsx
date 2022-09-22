import { SectionHeader } from "@/components/Layout";
import React from "react";
import Item from "@/components/Features/Item";

const Features = ({ step, number }) => {
    return (
        <div className="s-about__features">
            <SectionHeader
                header={{
                    title: step.title,
                    description: step.description,
                }}
                number={number}
            />

            {step?.features && (
                <div className={"row s-about__feature-list block-lg-one-third"}>
                    {step?.features.map((feature, index) => (
                        <Item
                            item={feature}
                            key={feature.title + "feature_key" + index}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Features;
