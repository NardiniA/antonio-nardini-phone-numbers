import React from 'react';
import { SectionHeader } from '@/components/Layout';
import Slider from './Slider';
import clsx from 'clsx';

const about_data = {
    header: {
        title: "Getting Started With Booth.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit pretium, proin sed massa maecenas tempus, nibh. Ultrices pellentesque amet tristique feugiat condimentum integer fames.",
    },
    slider: [
        {
            title: "Smart.",
            text: "Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.",
        },
        {
            title: "User-Friendly.",
            text: "Nulla harum facere. In mollitia aperiam id sapiente. Sed sint atque deserunt voluptatem quisquam quis maxime earum. Adipisci et ratione rerum beatae optio excepturi molestiae aut.",
        },
        {
            title: "Powerful.",
            text: "Qui dolores perspiciatis aut sint amet illum. Sint quisquam quod laborum blanditiis. Inventore tenetur mollitia dolorum dolores quia. Et quia sed. Deserunt facere quidem sed.",
        },
        {
            title: "Secure.",
            text: "Exercitationem minima sed similique. Ducimus quis omnis voluptas et nulla. Ad mollitia quibusdam autem quod omnis. Ipsa aspernatur voluptatem illum possimus quasi magni.",
        },
    ],
    lightBackground: false,
};

const About = () => {
  return (
    <section id="about" className={clsx("s-section", about_data.lightBackground && "bg-light")}>
      <div>
          <SectionHeader header={about_data?.header} number={1} />

          <Slider slider={about_data?.slider} />
      </div>
    </section>
  );
}

export default About