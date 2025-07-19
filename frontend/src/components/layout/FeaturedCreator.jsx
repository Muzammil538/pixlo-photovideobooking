import React from 'react';

const featuredCards = [
  {
    name: "Ravi Lenswala",
    desc: "Captures candid wedding moments with a cinematic touch. Clients love his natural storytelling style and warm color grading.",
    img: "./assets/creator1.jpg",
  },
  {
    name: "Meera Clicks",
    desc: "Specializes in vibrant outdoor portraits and creative event coverage.",
    img: "./assets/creator2.jpg",
  },
  {
    name: "Ajay Frames",
    desc: "Known for documentary-style videography and crisp editing.",
    img: "./assets/creator3.jpg",
  },
  {
    name: "Sana Shoots",
    desc: "Known for documentary-style videography and crisp editing.",
    img: "./assets/creator4.jpg",
  },
  {
    name: "Karthik Visuals",
    desc: "Known for documentary-style videography and crisp editing.",
    img: "./assets/creator5.jpg",
  },
];

const FeaturedCreator = () => {
  return (
    <div className="flex w-full min-h-[500px] bg-black px-8 py-12 items-center">
      {/* Left: Title and Description */}
      <div className="flex flex-col pr-10 min-w-[320px] max-w-[420px] justify-start items-start h-full">
        <h3 className="text-4xl font-bold text-white mb-6">Featured Creators</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Discover talented photographers and videographers handpicked for their creativity, quality, and professionalism.
          <br />
          These creators consistently deliver standout work and are highly rated by clients in your area.
        </p>
      </div>
      {/* Right: Horizontally Scrolling Cards */}
      <div className="flex-1">
        <div className="flex gap-x-8 overflow-x-auto scrollbar-hide pb-3">
          {featuredCards.map((creator, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 min-w-[320px] max-w-[340px] bg-[#b3995e] rounded-[40px] p-6 flex flex-col items-center shadow-md"
            >
              <img
                src={creator.img}
                alt={creator.name}
                className="w-full h-[220px] object-cover rounded-[28px] mb-4"
              />
              <h4 className="text-xl font-semibold text-black mb-2 text-center">{creator.name}</h4>
              <p className="text-black text-sm text-center">{creator.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Custom hide scrollbar utility if not using Tailwind plugin */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default FeaturedCreator;
