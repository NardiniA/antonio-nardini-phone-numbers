import React from 'react';
import Link from "next/link";
import clsx from 'clsx';

const Card = ({ data }) => {
  return (
      <div className={clsx(
        "column item-plan",
        data.popular && "item-plan--popular"
      )}>
          <div className="item-plan__block">
              <div className="item-plan__top-part">
                  {data.title && <h3 className="item-plan__title">{data.title}</h3>}
                  {data.price && (
                    <p className="item-plan__price">
                        <sup>{data.currency}</sup>{data.price}
                    </p>
                  )}
                  {data.frequency && <p className="item-plan__per">{data.frequency}</p>}
              </div>

              <div className="item-plan__bottom-part">
                  {data.features && (
                    <ul className="item-plan__features">
                        {data?.features.map((feat, index) => (
                            <li key={feat + "features_key" + index} dangerouslySetInnerHTML={{
                                __html: feat
                            }}></li>
                        ))}
                    </ul>
                  )}

                  {data.btnText && data.btnHref && (
                    <Link href={data.btnHref} passHref>
                        <a className="btn btn--primary u-fullwidth">{data.btnText}</a>
                    </Link>
                  )}
              </div>
          </div>
      </div>
  );
}

export default Card