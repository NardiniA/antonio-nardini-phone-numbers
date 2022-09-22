import React from "react";
import Link from "next/link";

const Logo = ({ data }) => {
    return (
        <div className="s-header__logo">
            <Link href="/" passHref>
                <a className="logo">
                    <img src={data.logo} alt={data.logoText} />
                </a>
            </Link>
        </div>
    );
};

export default Logo;
