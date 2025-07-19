import React from "react";
import Navbar from "../components/layout/Navbar";
import {
  Search,
  MoveRight,
  BadgeCheck,
  Camera,
  MessagesSquare,
  SquareUser,
  CalendarDays,
  MapPin,
  SquareArrowUpRight,
} from "lucide-react";
import FeaturedCreator from "../components/layout/FeaturedCreator";
import Carousel from "../components/common/Carousel";
import MainFooter from "../components/layout/MainFooter";

const Home = () => {
  const carouselItems = [
    {
      imageUrl: "./assets/carousel1.jpg",
      text: "Creators You Can Trust — Verified, Top-Rated & Loved by Clients",
      desc: "Every featured creator goes through a quality check and is backed by real reviews and high ratings. You get access to professionals who consistently deliver standout work, so you can book with confidence.",
    },
    {
      imageUrl: "./assets/carousel1.jpg",
      text: "Urban Exploration",
    },
    {
      imageUrl: "./assets/carousel1.jpg",
      text: "City Lights",
    },
  ];

  const serviceItems = [
    {
      iconUrl: <Camera />,
      text: "Photographer & Videographer Booking",
      desc: "Event Coverage",
      bgColor: "ser1",
    },
    {
      iconUrl: <SquareUser />,
      text: "Creator Profile & Portfolio Showcase",
      desc: "Visual Discovery",
      bgColor: "ser1",
    },
    {
      iconUrl: <CalendarDays />,
      text: "Real-Time Availability & Booking Calendar",
      desc: "Smart Scheduling",
      bgColor: "ser1",
    },
    {
      iconUrl: <MapPin />,
      text: "Location-Based Filtering",
      desc: "Nearby Creators",
      bgColor: "ser1",
    },
    {
      iconUrl: <SquareArrowUpRight />,
      text: "Ratings, Reviews & Trust Badges",
      desc: "Verified Quality",
      bgColor: "ser1",
    },
    {
      iconUrl: <MessagesSquare />,
      text: "Custom Shoot Requests & Communication",
      desc: "Client-Creator Chat",
      bgColor: "ser1",
    },
  ];
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <div className="home-container h-screen flex items-center justify-between flex-col py-20">
        <h1 className="text-6xl ">
          Book your perfect shot,
          <br /> right around the corner
        </h1>
        <div className="flex items-center justify-center w-full mt-8">
          <div className="flex items-center bg-[#e5e5e5] rounded-full px-4 py-2 w-[500px]">
            {/* Search Icon */}
            <svg
              className="w-8 h-8 text-yellow-400 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Enter your city to find creators"
              className="bg-transparent outline-none text-gray-500 flex-1 text-lg"
            />
            <button className="ml-3 px-8 py-2 bg-[#b3995e] text-black rounded-full font-medium text-lg hover:bg-[#a08a4d] transition-all">
              search
            </button>
          </div>
        </div>
      </div>

      {/* How it works section */}

      <div className=" h-screen flex items-center justify-evenly flex-col py-20">
        <div className="text-center space-y-4">
          <h1 className="text-6xl uppercase">How It Works</h1>
          <p>
            Finding and booking your perfect local creator has never been easier
          </p>
        </div>

        <div className="flex items-center justify-evenly w-full mt-8 relative  ">
          {[
            { icon: <Search size={"40"} />, text: "Discover" },
            {
              icon: <BadgeCheck size={"40"} />,
              text: "Book",
              extra: " absolute z-50 w-[20rem] h-[20rem] bg-black",
            },
            { icon: <Camera size={"40"} />, text: "Shoot" },
          ].map((item, index) => {
            return (
              <div
                className={
                  "border-1 border-white w-2xs h-[18rem] rounded-[50%] flex items-center justify-center flex-col gap-6" +
                  (item.extra ? ` ${item.extra}` : "")
                }
                key={index}
              >
                {item.icon}
                <p className="text-center text-2xl">{item.text}</p>
                <MoveRight size={"40"} className="mt-4 opacity-70" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Creators */}
      <FeaturedCreator/>

      {/* Carosal Section  which is not featured creators*/}
      <>
        <Carousel items={carouselItems} />
      </>

      {/* Our Services Section  */}

      <div className="h-screen flex items-center justify-start flex-col py-10">
        <div className="flex items-center justify-between w-screen max-w-7xl text-center space-y-4">
          <h2>
            Our Solution & <i>Services</i>
          </h2>
          <button className="ml-3 px-8 py-2 bg-[#b3995e] text-black rounded-full font-medium text-lg hover:bg-[#a08a4d] transition-all">
            Let's Talk
          </button>
        </div>
        <div className="h-full grid grid-cols-3 gap-4 mt-8 w-full max-w-7xl">
          {serviceItems.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex items-start justify-center flex-col gap-4 p-6 rounded-xl ${item.bgColor}`}
              >
                <div className="bg-black p-4 rounded-[50%] mb-8">
                  {item.iconUrl}
                </div>
                <p className="text-black">{item.text}</p>
                <small className="text-black">{item.desc}</small>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-screen bg-[#181818] py-20 px-4 flex flex-col  gap-12 justify-center items-start relative overflow-hidden">
        {/* Left: Heading & Features */}
        <div className="flex w-full flex-row justify-between items-start ">
          <div className="w-3/2">
            <p className="uppercase text-xs tracking-widest text-[#959CB6] mb-2">
            Why Choose Us
          </p>
          <h2 className="text-white font-bold text-5xl leading-tight mb-8">
            Capture
            <br />
            More Than
            <br />
            <span className="inline-block">
              <span className="text-[#ffe25c]">✨</span>Photos
            </span>
          </h2>
          </div>
          
          <div className="flex flex-col gap-4 w-full">
            {[
              {
                num: 1,
                title: "Verified Creators",
                desc: "All creators are hand-picked, portfolio-verified, and rated by real clients.",
              },
              {
                num: 2,
                title: "Instant Booking",
                desc: "Check availability, view pricing, and lock your slot instantly.",
              },
              {
                num: 3,
                title: "Nearby Talent",
                desc: "No matter the event, we connect you with talent that's just around the corner.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-4 bg-[#232323] rounded-xl px-6 py-4 w-full"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b3995e] text-black font-bold text-lg">
                  {item.num}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {item.title}
                  </div>
                  <div className="text-[#959CB6] text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Decorative swirl */}
          <svg
            width="180"
            height="80"
            viewBox="0 0 180 80"
            fill="none"
            className="absolute left-[50%] top-[340px]"
          >
            <path
              d="M10 60 Q30 40 60 60 Q90 80 120 60 Q150 40 170 60"
              stroke="#959CB6"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        {/* Right: Testimonials & Helping Section */}
        <div className="w-6xl flex flex-row justify-between items-start gap-8 max-w-7xl">
          {/* Testimonials */}
          <div className="flex flex-col gap-6 ">
            {[
              {
                name: "AUDREY TURNER",
                text: "“Booked my birthday shoot last minute, and it turned out perfect! So easy, fast, and the photographer was super professional.”",
                rating: "4.7 Excellent",
                stars: "★★★★★☆",
                color: "bg-[#ffe25c]",
                avatar: "/assets/avatar1.jpg",
              },
              {
                name: "JASMINE ANDREWS",
                text: "“Couldn’t believe I found a fashion photographer nearby in just minutes. Smooth booking and amazing output!”",
                rating: "4.8 Excellent",
                stars: "★★★★★",
                color: "bg-[#b6f7f7]",
                avatar: "/assets/avatar2.jpg",
              },
              {
                name: "JESSY KIRK",
                text: "“Super intuitive platform and really good support. Made my wedding day stress-free!”",
                rating: "5.00 Excellent",
                stars: "★★★★★",
                color: "bg-[#f7b6e6]",
                avatar: "/assets/avatar3.jpg",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 flex flex-col gap-2 shadow-md max-w-lg ${t.color}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-xs font-bold tracking-widest text-[#232323]">
                    {t.name}
                  </span>
                </div>
                <div className="italic text-lg text-[#232323]">{t.text}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-xs text-[#232323]">
                    {t.rating}
                  </span>
                  <span className="font-bold text-xs text-[#232323]">
                    {t.stars}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Helping Section */}
          <div className="mt-8 w-1/2 ">
            <h3 className="text-white font-bold text-3xl mb-4 leading-tight">
              We’re helping
              <br />
              <span className="text-[#ffe25c]">✨</span> clients capture
              <br />
              memories
              <br />
              across the map.
            </h3>
            <p className="text-[#959CB6] text-xs mb-4 max-w-xs">
              So whether it’s a wedding, pre-wedding, birthday, or shoot for
              your brand—our creators deliver more than photos: they deliver
              moments.
            </p>
            <button className="bg-[#b3995e] text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-[#a08a4d] transition-all">
              EXPLORE ALL
            </button>
            {/* Decorative swirl */}
            <svg
              width="180"
              height="80"
              viewBox="0 0 180 80"
              fill="none"
              className="absolute right-32 bottom-8"
            >
              <path
                d="M10 60 Q30 40 60 60 Q90 80 120 60 Q150 40 170 60"
                stroke="#959CB6"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Event in mind section */}
      <div className="relative w-full flex items-center justify-center h-screen bg-black overflow-hidden mb-20">
        {/* Ellipse SVG */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width="1200"
          height="700"
          viewBox="0 0 1200 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 0 }}
        >
          <ellipse
            cx="600"
            cy="350"
            rx="570"
            ry="320"
            stroke="#fff"
            strokeWidth="1"
          />
          {/* Decorative swirl (optional, bottom left) */}
          <path
            d="M120 500 Q130 490 140 500 Q150 510 140 520"
            stroke="#fff"
            strokeWidth="1"
            fill="none"
          />
        </svg>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Event in mind?
            </span>
            <br />
            <span className="text-white">
              Let's work together
              <br />
              to execute.
            </span>
          </h1>
          <p className="text-[#e5e5e5] text-lg text-center mb-8 max-w-2xl">
            From personal moments to professional shoots — we’ve got the right
            talent nearby
          </p>
          <button className="bg-[#b3995e] text-black px-10 py-3 rounded-full font-medium text-lg hover:bg-[#a08a4d] transition-all">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full flex justify-center items-center py-16 bg-black">
        <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between gap-12">
          {/* Left: Heading */}
          <div className="flex-1">
            <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
              Stay in the Frame. Get
              <br />
              Creator Updates.
            </h2>
          </div>
          {/* Right: Form */}
          <div className="flex-1 flex justify-end">
            <form className="bg-[#ffe25c] rounded-none px-10 py-8 w-[400px] flex flex-col justify-center">
              <label
                htmlFor="newsletter-email"
                className="text-black text-lg mb-4"
              >
                Enter your email
              </label>
              <div className="flex items-center border-b border-black mb-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder=""
                  className="bg-[#ffe25c] flex-1 py-2 px-0 text-black outline-none border-none placeholder:text-black"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 ml-4 font-semibold tracking-widest"
                >
                  SEND
                </button>
              </div>
              <div className="text-black text-sm mt-2">
                Already subscribed?
                <br />
                <a href="#" className="underline">
                  Unsubscribe
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <MainFooter />
    </>
  );
};

export default Home;
