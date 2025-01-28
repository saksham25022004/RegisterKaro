import React from 'react';
import { ChevronRight, Settings, BarChart2, Users, Package, ShoppingCart, FileText } from 'lucide-react';

const ExploreServices = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-orange-400" />,
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-orange-400" />,
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-400" />,
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
    },
    {
      icon: <Package className="w-12 h-12 text-orange-400" />,
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-orange-400" />,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-400" />,
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
    },
  ];

  return (
    <div className="px-4 py-16 bg-[#FAFAFA]">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-orange-400 font-medium mb-2">WELCOME TO REGISTERKARO.IN</p>
        <h2 className="text-4xl font-bold text-gray-900">Explore Our Services</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-12 rounded-lg transition-shadow relative group flex flex-col items-center justify-center ${
                (index + 1) % 3 === 0 ? '' : 'sm:border-r'
              }`}
          >
            {/* Red accent line */}
            <div className={`absolute ${(index + 1) % 3 === 2 ? 'bottom-10' : 'top-10'} -right-0.5 w-1 h-8  ${(index + 1) % 3 === 0 ? '' : 'bg-[#BB162B]'} transition-opacity last:bg-transparent hidden sm:block`} />
            
            {/* Icon */}
            <div className="mb-6">
              {service.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
            <p className="text-gray-600 mb-6 text-center">{service.description}</p>

            {/* Learn More Link */}
            <button className="flex items-center text-blue-900 font-medium hover:text-orange-400 transition-colors">
              Learn more
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>

      {/* See All Services Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-800 transition-colors">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default ExploreServices;