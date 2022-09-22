import React from 'react';
import SubscribeInput from './SubscribeInput';

const Subscribe = ({ footer }) => {
  return (
    <div className="row s-footer__top">
        <div className="column lg-12 text-center">
            {footer.title && (
                <h2 className="text-display-1">{footer.title}</h2>
            )}
            {footer.subtitle && (
                <p className="lead">{footer.subtitle}</p>
            )}
        </div>
        <SubscribeInput />
    </div>
  )
}

export default Subscribe