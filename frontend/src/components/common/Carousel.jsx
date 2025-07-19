import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [items.length]);


  return (
    <div className="relative w-full h-screen overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-[50%] bg-transparent py-4 px-16 float-end h-screen bg-opacity-50 text-white flex items-center justify-evenly flex-col">
            <p className="text-4xl font-semibold">{item.text}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;