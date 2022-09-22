import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const Buttons = ({ buttons }) => {
  return (
    <div className="row s-download__badges-block">
        <div className="column lg-12 s-download__badges">
            {buttons.map((btn, index) => {
                switch(btn.template) {
                    case "app-store-badge":
                        return (
                            <Link href={btn.href} key={btn.template + index} passHref>
                                <a className="badge-appstore">
                                    <img src="/images/appstore.png" alt="Apple App Store" />
                                </a>
                            </Link>
                        );
                    case "play-store-badge":
                        return (
                            <Link href={btn.href} key={btn.template + index} passHref>
                                <a className="badge-googleplay">
                                    <img
                                        src="/images/google-play.png"
                                        alt="Google Play Store"
                                    />
                                </a>
                            </Link>
                        );
                    case "button":
                        return (
                            <Link
                                href={btn.href}
                                key={btn.template + index}
                                passHref
                            >
                                <a className={clsx("btn", btn.style === "outline" && "btn--stroke")}>
                                    {btn.text}
                                </a>
                            </Link>
                        );
                }
            })}
        </div>
    </div>
  )
}

export default Buttons