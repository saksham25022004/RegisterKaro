import React from 'react';
import { Shield, CheckCircle, Smile, User, ChevronRight } from 'lucide-react';
import photo from '../Images/group.png';
import vector from '../Images/Vector.png';
import dots from '../Images/dots.png';

const AboutPage = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-500" />,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
    },
    {
      icon: <Smile className="w-12 h-12 text-blue-500" />,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
    },
    {
      icon: <User className="w-12 h-12 text-red-500" />,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="sm:ml-12 pl-4 py-8 sm:py-16 text-center sm:text-start">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className='xl:-mt-28'>
          <p className="text-orange-400 font-medium mb-6">WELCOME TO REGISTERKARO.IN</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-400">Register Karo</span>
          </h2>
          
          <div className="space-y-6 text-black font-[16px]">
            <p>
              We have been using Intelegencia as our DevOps vendor for our field service 
              applications over the last couple of years and I'm extremely pleased with 
              their performance, ability to execute, and willingness to adapt in our ever changing 
              environment. Perry is an outstanding leader who is fanatical about 
              customer satisfaction. He has built a solid team which has consistently delivered 
              on projects thereby exceeding everyone's expectations.
            </p>
            
            <p>
              I would strongly recommend their services to any organization that is looking for 
              solid, reliable, and predictable outcomes.
            </p>

            <button className="flex items-center ml-[25%] sm:ml-0 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors">
              Learn More
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative flex justify-self-end">
          <div className="rounded-lg overflow-hidden justify-self-center">
            <img
              src={photo}
              alt="RegisterKaro Team"
              className="w-[584px] h-auto rounded-lg"
            />
            
          </div>
          <div className='absolute bottom-16 right-0 -z-10'>
            <img src={dots} alt='vector' />
          </div>
          <div className='ml-5 -mt-12'>
            <img src={vector} alt='vector' />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-6 justify-self-center">
        <div className=''>
            <p className="text-orange-400 font-medium mb-2">WHY REGISTERKARO.IN</p>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose Register Karo</h2>
            <p className="mb-12 max-w-3xl sm:mr-16">
            It is with consistent services and results that build trust with the people and that in 
            turn help us to serve the business better.
            </p>
            <div className={`hidden lg:block bg-orange-50 px-2 py-8 rounded-lg text-center h-[215px] w-[288px] justify-self-end mt-24`}>
              <div className="flex justify-center mb-4">
                <Shield className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Confidential & Safe</h3>
              <p className="text-gray-600">All your private information is safe with us</p>
            </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center sm:justify-start sm:justify-self-end">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} px-2 py-8 rounded-lg text-center sm:h-[215px] sm:w-[288px]`}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;