import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';

const cta_data = {
    title: "Watch Our Intro Video",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    button: {
        icon: "play",
    },
    lightBackground: false,
};

const VideoCTA = () => {
  return (
    <section id="videoCTA" className={clsx("s-video", cta_data.lightBackground && "bg-light")}>
        <div className="row">
            <div className="column lg-12">
                <div className="call-to-action">
                    <div className="row call-to-action-row">
                        <div className="column lg-6">
                            <div className="call-to-action-info">
                                <h1 className="h2">{cta_data.title}</h1>
                                <p>{cta_data.text}</p>
                                <a href="#" className="call-to-action-btn">
                                    <Icon name="play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default VideoCTA;