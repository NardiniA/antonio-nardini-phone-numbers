import React from 'react';
import dynamic from 'next/dynamic';

const Buttons = ({ buttons }) => {
  return (
    <div className="s-intro__content-buttons">
      {buttons && buttons.map((btn, index) => {
        switch (btn.template) {
          case "header-button":
            const HeaderBtn = dynamic(() => import("@/components/Intro/HeaderBtn"));
            return <HeaderBtn btn={btn} key={btn.template + "header_btn" + index} />;
          case "header-button-icon":
            const HeaderBtnIcon = dynamic(() => import("@/components/Intro/HeaderBtnIcon"));
            return <HeaderBtnIcon btn={btn} key={btn.template + "header_btn" + index} />;
        }
      })}
    </div>
  )
}

export default Buttons;