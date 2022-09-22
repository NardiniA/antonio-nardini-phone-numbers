import React from "react";
import Buttons from "./Buttons";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const section = {
    bg: "/images/hero-bg-3000.jpg",
    title: "An Amazing App <br> That Does It All.",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis lacus interdum dictum dolor sit amet lectus ornare nunc non.",
    buttons: [
        {
            template: "header-btn",
            text: "Get Started",
            href: "/",
        },
        {
            template: "header-btn-icon",
            href: "/",
            icon: "play",
        },
    ],
    social: [
        {
            href: "/",
            text: "Facebook",
            icon: "facebook-square",
        },
        {
            href: "/",
            text: "Twitter",
            icon: "twitter",
        },
        {
            href: "/",
            text: "Instagram",
            icon: "instagram",
        },
    ],
};

const Intro = () => {
    return (
        <section id="intro" className="s-intro target-section">
            {section.bg && <div className="s-intro__bg" style={{ backgroundImage: `url(${section.bg})`}}></div>}

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
