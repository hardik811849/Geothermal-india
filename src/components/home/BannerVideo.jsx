import React from 'react'
import video from "../../assets/video/geothermal.mp4";

const BannerVideo = () => {
  return (
    <video
      preload="auto"
      loop
      muted
      autoPlay
      className="banner-video"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default BannerVideo
