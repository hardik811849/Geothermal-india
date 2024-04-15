import React from 'react'
import defaultBanner from '../../assets/img/info.png'

const InnerBanner = ({image = defaultBanner, title } )=> { 
  return (
    <div className='inner-banner ' style={{"backgroundImage":`url(${image})`}}>
      <div data-aos-duration="700" data-aos="fade-up" data-aos-delay="1100" className='w-100'>
        <h2 className="inner-banner-title" dangerouslySetInnerHTML={{ __html: title.replace(/®/g, '<sup>®</sup>') }} />
      </div>
    </div>
  )
}

export default InnerBanner