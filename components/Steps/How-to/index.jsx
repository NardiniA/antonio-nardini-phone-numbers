import React from "react";
import { SectionHeader } from "@/components/Layout";
import Item from "@/components/HowTo/Item";

const HowTo = ({ step, number }) => {
    return (
        <section className="s-about__howto">
            <SectionHeader
                header={{
                    title: step.title,
                    description: step.description,
                }}
                number={number}
            />

            <div className="row s-about__howto-content">
                {step?.process && (
                    <div className="column s-about__howto-process-block">
                        <div className="s-about__howto-process">
                            {step?.process.map((item, index) => (
                                <Item
                                    data={item}
                                    key={
                                        item.title + "howto_process_key" + index
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}
                {step?.imgs && (
                    <div className="column s-about__howto-screens-block">
                        <div className="s-about__howto-screens">
                            {step?.imgs.map((img, index) => (
                                <img
                                    src={img}
                                    alt={"How To Image" + index}
                                    key={img + "howtoimg" + index}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HowTo;
