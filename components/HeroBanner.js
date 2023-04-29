import React from 'react';

import {urlFor} from '@/lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
   <section className="hero-banner-container">
      <div className="hero-banner">
           <img src={urlFor(heroBanner.image)} className="bannner-image"alt="" />  
           <h3 className="hero-banner-heading">{heroBanner.midText}</h3> 
       </div>
            <h1>{heroBanner.largeText}</h1>
            <p className="beats-solo">{heroBanner.smallText}</p>
    </section>
  );
}

export default HeroBanner
