// src/components/Banner.jsx
import React from 'react';
import {assets} from '../assets/assets';

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Banner Image */}
        <div className="w-full overflow-hidden p-8">
          <img
            src={assets.spbanner}
            alt="Stay Banner"
            loading="eager"
            className="w-full h-full object-cover"
          />

        </div>
      </div>
    </div>
  );
};

export default Banner;