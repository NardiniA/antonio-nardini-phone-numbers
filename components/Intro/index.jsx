import React from "react";
import Buttons from "./Buttons";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Intro = ({ section }) => {
    return (
        <section id="intro" className="s-intro target-section">
            {section.bg && <div className="s-intro__bg" style={{ backgroundImage: `url(${section.bg})` }}></div>}

            <div className="row s-intro__content">
                <div className="column lg-12 s-intro__content-inner">
                    <div className="s-intro__content-left">
                        {section.title && (
                            <h1
                                className="s-intro__content-title"
                                dangerouslySetInnerHTML={{
                                    __html: section.title,
                                }}
                            ></h1>
                        )}
                    </div>
                    <div className="s-intro__content-right">
                        {section.description && (
                            <p className="s-intro__content-desc body-text-2">
                                {section.description}
                            </p>
                        )}

                        {section?.buttons && (
                            <Buttons buttons={section?.buttons} />
                        )}
                    </div>
                </div>
            </div>

            {section?.social && <Social social={section?.social} />}

            <ScrollDown />
        </section>
    );
};

export default Intro;
