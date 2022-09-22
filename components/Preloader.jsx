import React, { useEffect } from "react";

const transitionEnded = (e) => {
    document.body.classList.add("ss-show");
    e.target.style.display = "none";
}

const Preloader = () => {
    useEffect(() => {
        document.body.classList.remove("ss-preload");
        document.body.classList.add("ss-loaded");
    });

    return (
        <div id="preloader" onTransitionEnd={transitionEnded}>
            <div id="loader"></div>
        </div>
    );
};

export default Preloader;
