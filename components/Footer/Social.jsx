import Link from "next/link";
import React from "react";
import Icon from "@/components/Icon";

const Social = ({ social }) => {
    return (
        <ul className="s-footer__social">
            {social &&
                social.map((sm, index) => (
                    <li key={sm.text + "social_footer" + index}>
                        <Link href={sm.href} passHref>
                            <a>
                                <Icon name={sm.icon} type="logo" />
                                <span className="u-screen-reader-text">
                                    {sm.text}
                                </span>
                            </a>
                        </Link>
                    </li>
                ))}
        </ul>
    );
};

export default Social;
