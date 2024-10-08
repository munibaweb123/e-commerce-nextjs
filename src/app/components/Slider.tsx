// components/ImageSlider.tsx
"use client"
import Image from "next/image";
import leftarrow from "../../../public/images/left-arrow.png"
import rightarrow from "../../../public/images/right-arrow.png"
import React, { useState } from 'react';



interface ImageSliderProps {
  images: string[];
}

const Slider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full min-w-0 mx-auto">
      <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full max-h-auto rounded-lg" width={1000} height={600} />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md">
        <Image src={leftarrow} alt="left arrow" height={100} width={100}/>
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md">
        <Image src={rightarrow} alt="right arrow" height={100} width={100}/>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;