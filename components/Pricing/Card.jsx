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
                    <>
                      <p className="item-plan__price">
                          <sup>{data?.price.currency}</sup>{data?.price.price}
                      </p>
                      {data?.price.frequency && <p className="item-plan__per">{data?.price.frequency}</p>}
                    </>
                  )}
              </div>

              <div className="item-plan__bottom-part">
                  {data.features && (
                    <ul className="item-plan__features">
                        {data?.features.map((feat, index) => (
                            <li key={feat.text + "features_key" + index} dangerouslySetInnerHTML={{
                                __html: feat.text
                            }}></li>
                        ))}
                    </ul>
                  )}

                  {data.button && (
                    <Link href={data?.button.href} passHref>
                        <a className="btn btn--primary u-fullwidth">{data?.button.text}</a>
                    </Link>
                  )}
              </div>
          </div>
      </div>
  );
}

export default Card