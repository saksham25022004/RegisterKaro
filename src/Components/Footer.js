import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#011B5B] text-white py-16">
      <div className="mx-5 sm:mx-20 px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-10 justify-self-center">
          {/* Brand Section */}
          <div className="col-span-1 justify-self-center">
            <p className="text-gray-300 mb-6">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm5 15.59L15.59 19 12 15.41 8.41 19 7 17.59 10.59 14 7 10.41 8.41 9 12 12.59 15.59 9 17 10.41 13.41 14z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Start a Business Section */}
          <div className="col-span-1 justify-self-center">
            <h3 className="text-orange-400 font-semibold mb-4">START A BUSINESS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Enterprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Solutions</a></li>
            </ul>
          </div>

          {/* Government Registration Section */}
          <div className="col-span-1 justify-self-center">
            <h3 className="text-orange-400 font-semibold mb-4">GOVERNMENT REGISTRATION</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Developers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Compliance & Tax Section */}
          <div className="col-span-1 justify-self-center">
            <h3 className="text-orange-400 font-semibold mb-4">COMPLIANCE & TAX</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">Channels</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Scale</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Watch the Demo</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Our Competition</a></li>
            </ul>
          </div>

          {/* BIS & CDSCO Section */}
          <div className="col-span-1 justify-self-center">
            <h3 className="text-orange-400 font-semibold mb-4">BIS & CDSCO</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Leadership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Media Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
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

        {/* Copyright */}
        <div className="text-center mt-8 text-gray-400">
          © 2024 Registerkaro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;