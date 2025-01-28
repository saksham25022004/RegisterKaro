import React, { useState, useEffect } from 'react';

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (value - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);
  
  return <span>{count}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      value: 1,
      suffix: "M+",
      label: "CUSTOMERS",
      color: "bg-gradient-to-r from-orange-400 to-blue-900"
    },
    {
      value: 12,
      suffix: "+",
      label: "YEARS OF EXCELLENCE",
      color: "bg-gradient-to-r from-orange-400 to-blue-900"
    },
    {
      value: 41,
      suffix: "+",
      label: "R&D ENGINEERS",
      color: "bg-gradient-to-r from-orange-400 to-blue-900"
    },
    {
      value: 78,
      suffix: "+",
      label: "COUNTRIES",
      color: "bg-gradient-to-r from-orange-400 to-blue-900"
    },
    {
      value: 3287,
      suffix: "+",
      label: "PARTNERS",
      color: "bg-gradient-to-r from-orange-400 to-blue-900"
    },
    {
      value: 41,
      suffix: "+",
      label: "AWARDS RECEIVED",
      color: "bg-gradient-to-r from-orange-400 to-blue-900"
    }
  ];

  return (
    <div className="py-16 px-4 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-orange-500 font-medium">WHY REGISTER KARO</span>
        <h2 className="text-3xl font-bold text-[#402E32] mt-2 mb-16">
          Some Numbers are important
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`text-4xl font-bold mb-2 bg-clip-text text-transparent ${stat.color}`}>
                <AnimatedNumber value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;