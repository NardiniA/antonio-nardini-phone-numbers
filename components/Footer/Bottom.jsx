import React from "react";
import siteConfig from "@/config/site.config.json";
import Link from "next/link";
import Social from "./Social";
import Links from "./Links";

const Bottom = ({ footer }) => {
    return (
        <div className="row s-footer__bottom">
            <div className="column lg-5 md-6 stack-on-900">
                {siteConfig.logo && (
                    <div className="footer__logo">
                        <Link href="/">
                            <a>
                                <img
                                    src={siteConfig.logo}
                                    alt={siteConfig.logoText}
                                />
                            </a>
                        </Link>
                    </div>
                )}

                {footer.description && (
                    <p
                        dangerouslySetInnerHTML={{
                            __html: footer.description,
                        }}
                    />
                )}

                {footer.social && <Social social={footer.social} />}
            </div>

            <div className="column lg-6 stack-on-900 end">
                {footer?.links && <Links links={footer?.links} />}

                {footer.contact && (
                    <p
                        className="s-footer__contact"
                        dangerouslySetInnerHTML={{
                            __html: footer.contact,
                        }}
                    />
                )}

                {footer.copyright && (
                    <div className="ss-copyright">
                        {footer?.copyright.map((copy, index) => (
                            <span
                                key={copy + "footer_copy" + index}
                                dangerouslySetInnerHTML={{ __html: copy }}
                            ></span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bottom;
