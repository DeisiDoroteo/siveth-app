import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

<Helmet>
<meta
  httpEquiv="Content-Security-Policy"
  content={`
    default-src 'self';
    script-src 'self';
    img-src 'self' data: https://wallpapercave.com/wp/wp3386769.jpg https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg
  `}
/>
</Helmet>

const images = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="overflow-hidden relative">
   
      <div
        className="flex transition ease-out duration-600"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full"
          />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={prevSlide}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {images.map((_, index) => (
          <div
            key={index}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
