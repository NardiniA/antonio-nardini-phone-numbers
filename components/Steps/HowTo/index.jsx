import React from "react";
import { SectionHeader } from "@/components/Layout";
import Item from "@/components/HowTo/Item";

const howto_data = {
    header: {
        title: "How the App Works.",
    },
    process: [
        {
            title: "Sign Up",
            text: "Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere animi explicabo non quis magni recusandae. Numquam debitis non quis pariatur omnis facere unde.",
        },
        {
            title: "Create",
            text: "Commodi vero praesentium ex eum sunt. Deserunt animi velit. Eum explicabo omnis at aut perferendis veniam. Corporis expedita voluptas culpa dicta qui tempora non explicabo omnis at sint tempora.",
        },
        {
            title: "Compose",
            text: "Est quam molestias eius. Voluptatibus eveniet debitis natus porro dignissimos quia. Molestias sint ab velit. Perspiciatis porro hic possimus exercitationem sint ab velit architecto fugiat.",
        },
        {
            title: "Send",
            text: "Qui aspernatur soluta sapiente voluptas ut a. Non repellat dolores dolorum vel et aut et perferendis. Hic voluptatem odit ab qui. Officia blanditiis molestiae voluptatem odit ab.",
        },
    ],
    imgs: ["/images/screens/screen-01.png", "/images/screens/screen-04.png"],
};

const HowTo = () => {
    return (
        <section className="s-about__howto">
            <SectionHeader header={howto_data?.header} number={2} />

            <div className="row s-about__howto-content">
                {howto_data?.process && (
                    <div className="column s-about__howto-process-block">
                        <div className="s-about__howto-process">
                            {howto_data?.process.map((item, index) => (
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
                {howto_data?.imgs && (
                    <div className="column s-about__howto-screens-block">
                        <div className="s-about__howto-screens">
                            {howto_data?.imgs.map((img, index) => (
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
