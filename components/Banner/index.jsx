import React from 'react';

const Banner = ({ section }) => {
  return (
    <section id="first-section" className="s-banner">
        {section.bg && <div className="s-banner__bg" style={{ backgroundImage: `url(${section.bg})` }}></div>}
        <div className="row s-banner__content">
            <div className="column lg-12 s-banner__content-inner">
                <div className="s-banner__content-left">
                    {section.title && (
                        <h1
                            className="s-banner__content-title"
                            dangerouslySetInnerHTML={{
                                __html: section.title,
                            }}
                        ></h1>
                    )}
                </div>
                <div className="s-banner__content-right">
                    {section.description && (
                        <p className="s-banner__content-desc body-text-2">
                            {section.description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;