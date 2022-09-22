import React from 'react';
import Bottom from './Bottom';
import ToTop from './ToTop';
import footer from "@/config/footer.json";
import Subscribe from './Subscribe';
import clsx from 'clsx';

const Footer = () => {
  return (
    <footer className={clsx("s-footer footer", !footer?.subscribe.display && "no-subscribe" )}>
      {footer?.subscribe.display && <Subscribe footer={footer?.subscribe} />}

      {footer?.main && <Bottom footer={footer?.main} />}

      <ToTop />
    </footer>
  )
}

export default Footer