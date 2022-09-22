import { SectionHeader } from "@/components/Layout";
import React from "react";
import Item from "@/components/Features/Item";

const features_data = {
    header: {
        title: "The Best Features of The App.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit pretium, proin sed massa maecenas tempus, nibh. Ultrices pellentesque amet tristique feugiat condimentum integer fames.",
    },
    features: [
        {
            icon: "cloud",
            title: "Cloud Based",
            text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint aliquam rhoncus elit.",
        },
        {
            icon: "video",
            title: "Voice & Video",
            text: "Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Quis risus sed vulputate odio ut. Lectus arcu bibendum at varius vel. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. In nulla posuere sollicitudin aliquam ultrices.",
        },
        {
            icon: "check-shield",
            title: "Always Secure",
            text: "Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Eu scelerisque felis imperdiet proin fermentum leo. Cursus turpis massa tincidunt dui. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Congue mauris rhoncus elit.",
        },
        {
            icon: "joystick",
            title: "Play Games",
            text: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint donec adipiscing.",
        },
        {
            icon: "message-square-dots",
            title: "Group Chat",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Sit amet aliquam.",
        },
        {
            icon: "wallet",
            title: "Payments",
            text: "Nullam eget felis eget nunc. Adipiscing commodo elit at imperdiet dui accumsan. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Orci eu lobortis elementum nibh tellus. Tortor vitae purus faucibus ornare suspendisse.",
        },
    ],
};

const Features = () => {
    return (
        <div className="s-about__features">
            <SectionHeader header={features_data?.header} number={3} />

            {features_data?.features && (
                <div className="row s-about__feature-list block-lg-one-third">
                    {features_data?.features.map((feature, index) => (
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
