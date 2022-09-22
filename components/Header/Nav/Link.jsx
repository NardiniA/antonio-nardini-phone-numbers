import React from "react";
import { useRouter } from "next/router";

const Link = ({ link, handleClick }) => {
    const router = useRouter();
    const current = link.href === router.pathname ? "current" : "";

    return (
        <li className={current}>
            <a href={link.href} className="smoothscroll" onClick={handleClick}>
                {link.text}
            </a>
        </li>
    );
};

export default Link;
