import React from 'react';

const info_data = {
    image: {
        src: "https://images.unsplash.com/photo-1663620779258-0d48644b5193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "#",
    },
    text: "<h3>This is a content title.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, sit pretium, proin sed massa maecenas tempus, nibh. Ultrices pellentesque amet tristique feugiat condimentum integer fames.</p>",
};

const Info = () => {
  return (
    <section className="s-section">
        <div className="row block-lg-one-half block-stack-on-1000">
            {info_data.text && (
                <div className="column">
                    <div className="s-info-text" dangerouslySetInnerHTML={{
                        __html: info_data.text
                    }}></div>
                </div>
            )}
            {info_data?.image && (
                <div className="column">
                    <div className="s-info-image content">
                        <img src={info_data?.image.src} alt={info_data?.image.alt} />
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Info;