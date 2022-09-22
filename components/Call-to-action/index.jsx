import React from "react";
import Buttons from "./Buttons";
import clsx from "clsx";

const CTA = ({ section }) => {
    return (
        <section id="cta" className={clsx("s-download", section.slim && "slim")}>
            {(section.title || section.text) && (
                <div className="row s-download__header">
                    <div className="column lg-12">
                        <h2
                            className="text-display-1"
                            dangerouslySetInnerHTML={{
                                __html: section.title,
                            }}
                        ></h2>
                        <p
                            className="lead"
                            dangerouslySetInnerHTML={{
                                __html: section.text,
                            }}
                        ></p>
                    </div>
                </div>
            )}
            {section?.buttons && <Buttons buttons={section?.buttons} />}
        </section>
    );
};

export default CTA;
