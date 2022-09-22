import React from 'react'

const SliderItem = ({ slide: { title, text }}) => {
  return (
    <div className="s-about__info-slide">
        {title && <h4 className="h5">{title}</h4>}

        {text && <p dangerouslySetInnerHTML={{
            __html: text
        }} />}
    </div>
  )
}

export default SliderItem