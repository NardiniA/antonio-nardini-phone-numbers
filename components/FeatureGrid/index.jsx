import React from 'react';
import { SectionHeader } from '../Layout';
import Item from './Item';
import clsx from 'clsx';

const featureGrid_data = {
    header: {
        title: "The Best Features of The App.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit pretium, proin sed massa maecenas tempus, nibh. Ultrices pellentesque amet tristique feugiat condimentum integer fames.",
    },
    list: [
        {
            icon: "up-arrow-circle",
            title: "Crafted for App Landing",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
        },
        {
            icon: "layer",
            title: "High-quality Design",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
            active: true,
        },
        {
            icon: "layout",
            title: "All Essential Sections",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
        },
        {
            icon: "chevron-up-circle",
            title: "Speed Optimized",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
        },
        {
            icon: "filter",
            title: "Fully Customizable",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
        },
        {
            icon: "loader-circle",
            title: "Regular Updates",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
        },
    ],
    lightBackground: true,
};

const FeatureGrid = () => {
  return (
    <section className={clsx("s-section", featureGrid_data.lightBackground && "bg-light")}>
        <SectionHeader header={featureGrid_data?.header} />

        {featureGrid_data?.list && (
            <div className="row feature-grid_row">
                {featureGrid_data?.list.map((item, index) => (
                    <Item 
                        item={item}
                        key={item.title + "feature_grid_key" + index}
                    />
                ))}
            </div>
        )}
    </section>
  )
}

export default FeatureGrid