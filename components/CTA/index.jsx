import React from "react";
import Buttons from "./Buttons";
import clsx from "clsx";

const cta_data = {
    title: "Thousands of People Are Now Using Booth. Join Our Community!",
    text: "Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia assumenda repudiandae non cumque qui. Amet repellat omnis ea. Ultrices pellentesque amet tristique feugiat condimentum integer fames.",
    buttons: [
        {
            template: "badge-appstore",
            href: "/",
        },
        {
            template: "badge-googleplay",
            href: "/",
        },
    ],
    slim: false,
};

const CTA = () => {
    return (
        <section id="cta" className={clsx("s-download", cta_data.slim && "slim")}>
            {(cta_data.title || cta_data.text) && (
                <div className="row s-download__header">
                    <div className="column lg-12">
                        <h2
                            className="text-display-1"
                            dangerouslySetInnerHTML={{
                                __html: cta_data.title,
                            }}
                        ></h2>
                        <p
                            className="lead"
                            dangerouslySetInnerHTML={{
                                __html: cta_data.text,
                            }}
                        ></p>
                    </div>
                </div>
            )}
            <Buttons buttons={cta_data?.buttons} />
        </section>
    );
};

export default CTA;
