import React from "react";

const VideoBanner = () => {
  return <section className="relative h-[760px] ">
    <div>
        <video 
        loop
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
        src="videos/video.mp4" />
    </div>
  </section>;
};

export default VideoBanner;
