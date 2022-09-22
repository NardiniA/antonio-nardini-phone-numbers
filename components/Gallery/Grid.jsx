import React from "react";
import Item from "./Item";

const Grid = ({ gallery }) => {
    return (
        <div className="row feature-grid_row">
            {gallery.map((item, index) => (
                <div className="column" key={item.title + "gallery_key" + index}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    );
};

export default Grid;
