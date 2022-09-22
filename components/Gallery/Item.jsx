import React from "react";
import Link from "next/link";

const Item = ({ item }) => {
    return (
        <article className="portfolio-item">
            {item.img && <img src={item.img} alt={item.title} />}
            <div className="portfolio-item__info">
                <div className="portfolio-item__info-inner">
                    {item.title && (
                        <h3 className="h5">
                            <Link href={item.link}>
                                <a className="h5">{item.title}</a>
                            </Link>
                        </h3>
                    )}
                    {item.subtitle && <p>{item.subtitle}</p>}
                </div>
            </div>
        </article>
    );
};

export default Item;
