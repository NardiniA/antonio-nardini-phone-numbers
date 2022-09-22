import Head from "next/head";
import Link from "next/link";
import React from "react";

const ErrorPage = ({ error }) => {
    return (
        <section id="error" className="s-error">
          <Head>
            <title>{error.pageTitle}</title>
          </Head>
            <div className="error-wrapper">
                <div className="row s-error-row">
                    <div className="column lg-5 md-12">
                        <div className="s-error-section">
                            <h1>{error.code}</h1>
                            <h3>{error.title}</h3>
                            <p>{error.subtitle}</p>
                            {error.btnFunc ? (
                              <button className="btn btn--primary" onClick={error.btnFunc}>{error.btnText}</button>
                            ) : (
                              <Link href={error.btnHref} passHref>
                                <a className="btn btn--primary">
                                  {error.btnText}
                                </a>
                              </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
