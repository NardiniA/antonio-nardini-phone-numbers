import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import clsx from "clsx";
import siteConfig from "@/config/site.config.json";
import menu from "@/config/menus.json";

const Header = () => {
    const [triggerHeight, setTriggerHeight] = useState(500);
    const [sticky, setSticky] = useState(false);
    const [offset, setOffset] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        let loc = window.scrollY;

        if (loc > triggerHeight) setSticky(true);
        else setSticky(false);

        if (loc > triggerHeight + 20) {
            setOffset(true);
        } else {
            setOffset(false);
        }

        if (loc > triggerHeight + 150) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const handleResize = () => {
        if (window.matchMedia("(max-width: 800px)").matches) {
            open === true && setOpen(!open);
            document.body.classList.contains("menu-is-open") &&
                document.body.classList.remove("menu-is-open");
        }
    };

    useEffect(() => {
        setTimeout(() => {
            let trigger = window.innerHeight - 170;
            const el = document.querySelector("#first-section");
            if (el) { trigger = el.offsetHeight - 170 };
            setTriggerHeight(trigger);
        }, 300);

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    });

    const toggle = () => {
        document.body.classList.toggle("menu-is-open");
        setOpen(!open);
    };

    const handleClick = () => {
        if (window.matchMedia("(max-width: 800px)").matches) {
            setOpen(!open);
            document.body.classList.toggle("menu-is-open");
        }
    };

    return (
        <header className={clsx(
            "s-header",
            sticky && "sticky",
            offset && "offset",
            scrolling && "scrolling"
        )}>
            <div className="row s-header__inner">
                <div className="s-header__block">
                    <Logo
                        data={{
                            logo: siteConfig.logo,
                            logoText: siteConfig.logoText,
                        }}
                    />

                    <a className={clsx("s-header__menu-toggle", open && "is-clicked")} href="#0" onClick={toggle}>
                        <span>Menu</span>
                    </a>
                </div>

                <Nav handleClick={handleClick} />

                {menu?.cta && (
                    <div className="s-header__cta">
                        <a href={menu?.cta.href} className="btn btn--stroke s-header__cta-btn smoothscroll">{menu?.cta.text}</a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
