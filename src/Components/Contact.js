import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Email submitted:', email);
  };

  const features = [
    "Instant results",
    "User-friendly interface",
    "Personalized customization"
  ];

  return (
    <div className="min-h-[400px] px-4 py-16 flex items-center justify-center bg-gradient-to-r from-[#FFA229] to-[#1C4670]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <p className="text-sm font-medium mb-4 tracking-wide">
          1% OF THE INDUSTRY
        </p>
        
        <h1 className="text-4xl md:text-4xl font-bold mb-8">
          Welcome to your new digital reality. Now.
        </h1>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-8">
          <div className="flex flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-500 transition-colors -ml-24 rounded-l-none"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;