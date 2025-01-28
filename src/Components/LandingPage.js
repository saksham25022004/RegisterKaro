import React from 'react';
import { Play, Star} from 'lucide-react';
import company from '../Images/company.png';
import gr from '../Images/gr.png';
import bgImage from '../Images/bg.png';
import arrow from '../Images/arrow.png';
import SVG from '../Images/SVG.png';
import SVG2 from '../Images/SVG2.png';
import box2 from '../Images/box2.png';

const LandingPage = () => {
  const stats = [
    {
      value: "4.5+",
      label: "Customer Rating",
      icon: box2
    },
    {
      value: "20,000+",
      label: "Clients",
      icon: SVG
    },
    {
      value: "99.8%",
      label: "Financial Stability",
      icon: SVG2
    }
  ];

  const services = [
    "Annual Compliance",
    "Payroll Services",
    "Company Formation",
    "Annual Compliance"
  ];

  return (
    <div className="relative" style={{ backgroundImage: `radial-gradient(ellipse farthest-corner at top left, rgba(255, 255, 255, 0.1), rgba(255, 240, 220, 0.3), rgba(237, 246, 255, 0.7)), url(${bgImage})` }}>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8 ml-20 mt-12">
            {/* Google Rating */}
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">Google Rating</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl text-medium leading-tight">
                Your trusted partner
                <br />
                for compliance business needs
                <br/>
                <div className='w-[40px] h-[1px] bg-[#F60014] my-4'></div>
              </h1>
              <p className="text-[#4F4F4F] text-xl">
                An online business compliance platform that helps entrepreneurs and other individuals with various,{' '}
                <span className="text-gray-800">registrations, tax filings</span>, and other{' '}
                <span className="text-gray-800">legal matters</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img src={stat.icon} alt='icon'/>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-blue-900 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1C4670] text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">
                Talk An Expert
              </button>
              <button className="flex items-center gap-2 text-blue-900 font-medium hover:text-blue-700 transition-colors">
                <Play className="w-4 h-4 fill-current" />
                See how it works
              </button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="aspect-square relative mt-12">
              {/* Services Pills */}
              <div className="absolute right-0 top-0 space-y-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white py-4 px-4 rounded-md shadow-lg text-sm whitespace-nowrap w-[177px] h-[52px]"
                  >
                    {service}
                  </div>
                ))}
              </div>
              {/* Illustration */}
              <div className='flex'>
                <img
                  src={gr}
                  alt="Business compliance illustration"
                  className="w-[572px] h-[600px] object-contain absolute sm:bottom-[138px] right-[53px]"
                />
                <img
                  src={arrow}
                  alt="Business compliance illustration"
                  className="object-contain absolute right-0 top-[325px] sm:top-[356px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white sm:-mt-52  w-full'>
        <img 
        src={company}
        alt="RegisterKaro Logo" 
        />
      </div>
    </div>
  );
};

export default LandingPage;