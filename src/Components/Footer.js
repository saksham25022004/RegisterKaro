import React from 'react';
import social from '../Images/Social.png';

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-white py-16">
      <div className="mx-auto sm:mx-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-10 justify-self-center">
          <div className="col-span-2 sm:col-span-1 justify-self-center">
            <p className="text-gray-300 mb-6 text-sm sm:text-base text-center sm:text-start">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start mb-6">
              <img src={social} alt='social'/>
            </div>
          </div>

          <div className="col-span-1 text-center sm:text-start">
            <h3 className="text-orange-400 font-semibold mb-4 text-sm sm:text-base">START A BUSINESS</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><p href="#" className="text-gray-300 hover:text-white">Features</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Solutions</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Integrations</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Enterprise</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Solutions</p></li>
            </ul>
          </div>

          <div className="col-span-1 text-center sm:text-start">
            <h3 className="text-orange-400 font-semibold mb-4 text-sm sm:text-base">GOVERNMENT REGISTRATION</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><p href="#" className="text-gray-300 hover:text-white">Partners</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Community</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Developers</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">App</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Blog</p></li>
            </ul>
          </div>

          <div className="col-span-1 text-center sm:text-start">
            <h3 className="text-orange-400 font-semibold mb-4 text-sm sm:text-base">COMPLIANCE & TAX</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><p href="#" className="text-gray-300 hover:text-white">Channels</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Scale</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Watch the Demo</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Our Competition</p></li>
            </ul>
          </div>

          <div className="col-span-1 text-center sm:text-start">
            <h3 className="text-orange-400 font-semibold mb-4 text-sm sm:text-base">BIS & CDSCO</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><p href="#" className="text-gray-300 hover:text-white">About Us</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">News</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Leadership</p></li>
              <li><p href="#" className="text-gray-300 hover:text-white">Media Kit</p></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-orange-400 rounded-full p-4 hover:bg-orange-500 transition-colors"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
        </div>

        <div className="text-center mt-8 text-gray-400 text-xs sm:text-sm">
          © 2024 Registerkaro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
