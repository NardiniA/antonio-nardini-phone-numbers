import React from "react";
import Preloader from "./Preloader";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ metaTitle, metaDescription, children }) => {
    return (
        <>
            <Preloader />
            <SEO metaTitle={metaTitle} metaDescription={metaDescription} />

            <div id="page" className="s-pagewrap">
                <Header />

                <section id="content" className="s-content">
                    {children}
                </section>

                <Footer />
            </div>
        </>
    );
};

export const SectionHeader = ({ header, number }) => {
    const count = number > 9 ? `${number}` : `0${number}`;
    return (
        <div className="row section-header" data-num={number ? count : ""}>
            {header.title && (
                <div className="column lg-6 stack-on-1000 title-block">
                    <h2 className="title text-display-1">{header.title}</h2>
                </div>
            )}
            {header.description && (
              <div className="column lg-6 stack-on-1000 desc-block">
                <p className="desc lead" dangerouslySetInnerHTML={{
                    __html: header.description
                }}></p>
              </div>
            )}
        </div>
    );
};

export default Layout;
