import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const Alert = ({
    message,
    type,
    location,
    hide,
    autohide
}) => {
  const [showing, setShowing] = useState(false);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    setShowing(true);
    if (autohide) setTimeout(() => onClose(), [autohide]);
    return () => setShowing(false);
  }, []);

  const onClose = () => {
    setClosing(true);
    setTimeout(() => {
      hide();
      setClosing(false);
    }, [500]);
  }
  
  return (
    <div className={clsx("alert-box floating", type && `alert-box--${type}`, location && location, closing && "hideit", showing && "showit")} style={{ "--autohide-duration": autohide + "ms" }}>
        {message && <p dangerouslySetInnerHTML={{
            __html: message
        }} style={{ marginBottom: "0" }}></p>}
        <span className="alert-box__close" onClick={onClose}></span>
    </div>
  )
}

export default Alert;