import React from 'react';
import { ArrowRight, FileText, CreditCard, UserCheck, Mail } from 'lucide-react';
import logo from '../Images/Glyphs.png';

const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
`;

const ProcessSteps = () => {
  const steps = [
    {
      icon: FileText,
      title: "Fill up Application Form",
      bgColor: "bg-red-400",
    },
    {
      icon: CreditCard,
      title: "Make Online Payment",
      bgColor: "bg-green-500",
    },
    {
      icon: UserCheck,
      title: "Executive will Process Application",
      bgColor: "bg-orange-300",
    },
    {
      icon: Mail,
      title: "Get Confirm Mail",
      bgColor: "bg-gray-500",
    }
  ];

  return (
    <div className="bg-[#FFA229] py-8">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-self-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <div className={`${step.bgColor} p-3 rounded-full`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <span className=" font-medium text-md">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HappyClients = () => {
  const logos = [
    { x: '10%', y: '20%', delay: '0s' },
    { x: '25%', y: '15%', delay: '0.2s' },
    { x: '40%', y: '25%', delay: '0.4s' },
    { x: '55%', y: '15%', delay: '0.6s' },
    { x: '70%', y: '20%', delay: '0.8s' },
    { x: '85%', y: '25%', delay: '1s' },
    { x: '15%', y: '45%', delay: '1.2s' },
    { x: '30%', y: '50%', delay: '1.4s' },
    { x: '45%', y: '40%', delay: '1.6s' },
    { x: '60%', y: '50%', delay: '1.8s' },
    { x: '75%', y: '45%', delay: '2s' },
    { x: '90%', y: '40%', delay: '2.2s' },
  ];

  return (
    <div className="bg-[#FAFAFA] relative overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-4 pt-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Happy Clients
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. 
          Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>

      <div className="relative h-[300px] sm:my-16 right-8 sm:right-0">
        {logos.map((position, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: position.x,
              top: position.y,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: position.delay,
            }}
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="w-8 h-8 sm:w-16 sm:h-16 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-16">
        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Show more
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>

      <ProcessSteps />

      <style>{floatAnimation}</style>
    </div>
  );
};

export default HappyClients;