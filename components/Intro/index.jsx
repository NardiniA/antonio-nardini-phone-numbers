import React from "react";
import Buttons from "./Buttons";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const intro_data = {
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
            {intro_data.bg && <div className="s-intro__bg" style={{ backgroundImage: `url(${intro_data.bg})`}}></div>}

            <div className="row s-intro__content">
                <div className="column lg-12 s-intro__content-inner">
                    <div className="s-intro__content-left">
                        {intro_data.title && (
                            <h1
                                className="s-intro__content-title"
                                dangerouslySetInnerHTML={{
                                    __html: intro_data.title,
                                }}
                            ></h1>
                        )}
                    </div>
                    <div className="s-intro__content-right">
                        {intro_data.description && (
                            <p className="s-intro__content-desc body-text-2">
                                {intro_data.description}
                            </p>
                        )}

                        {intro_data?.buttons && (
                            <Buttons buttons={intro_data?.buttons} />
                        )}
                    </div>
                </div>
            </div>

            {intro_data?.social && <Social social={intro_data?.social} />}

            <ScrollDown />
        </section>
    );
};

export default Intro;
