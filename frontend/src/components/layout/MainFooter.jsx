import React from 'react';

const MainFooter = () => {
  return (
    <footer className="w-full bg-black text-[#959CB6] px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left: Logo & Address */}
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Logo */}
          <div>
            {/* Replace with your actual logo SVG or image */}
            <img src="./assets/pixlologo.png" alt="logo" className='w-[70px]'/>
          </div>
          <div className="text-lg leading-relaxed text-center md:text-left">
            210 Creative Lens Lane,<br />
            Hyderabad, Telangana, India
          </div>
        </div>
        {/* Center: Socials & Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white text-sm font-semibold hover:bg-[#b3995e] transition">Fb</a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white text-sm font-semibold hover:bg-[#b3995e] transition">In</a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white text-sm font-semibold hover:bg-[#b3995e] transition">X</a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181818] text-white text-sm font-semibold hover:bg-[#b3995e] transition">Li</a>
          </div>
          <div className="text-center text-[#959CB6] text-sm">
            ©2025. All Right Reserved
          </div>
        </div>
        {/* Right: Links */}
        <div className="flex flex-col items-center md:items-end gap-2 text-right">
          <a href="#" className="text-white text-lg font-medium hover:underline">Explore Creators</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Join as Creator</a>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;