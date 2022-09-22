import React from 'react';
import clsx from 'clsx';
import { SectionHeader } from '@/components/Layout';
import Grid from './Grid';

const gallery_data = {
    header: {
        title: "A selection of recent projects I have worked on.",
    },
    gallery: [
        {
            img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Sample",
            subtitle: "Subtitle",
            link: "/",
            large: true,
        },
        {
            img: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Sample",
            subtitle: "Subtitle",
            link: "/",
            large: false,
        },
        {
            img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Sample",
            subtitle: "Subtitle",
            link: "/",
            large: false,
        },
        {
            img: "https://images.unsplash.com/photo-1616593918824-4fef16054381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Sample",
            subtitle: "Subtitle",
            link: "/",
            large: false,
        },
        {
            img: "https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Sample",
            subtitle: "Subtitle",
            link: "/",
            large: false,
        },
        {
            img: "https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            title: "Sample",
            subtitle: "Subtitle",
            link: "/",
            large: false,
        },
    ],
    lightBackground: false,
};

const Gallery = () => {
  return (
    <section id="gallery" className={clsx("s-section", gallery_data.lightBackground && "bg-light")}>
        <SectionHeader header={gallery_data?.header} />

        <Grid gallery={gallery_data?.gallery} />
    </section>
  )
}

export default Gallery