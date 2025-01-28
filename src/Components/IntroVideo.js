import React from 'react';
import { LightbulbIcon, MessageSquareIcon } from 'lucide-react';
import intro from '../Images/youtube.png';

const IntroVideo = () => {
  return (
    <div className="bg-[#1C4670] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">Our Video Introductions</h1>
              <p className="text-blue-200">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
              </p>
            </div>

            <div className="space-y-6">
              {/* First Feature */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-400 rounded-full p-3">
                  <LightbulbIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Explore ideas together
                  </h3>
                  <p className="text-blue-200">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              {/* Second Feature */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-400 rounded-full p-3">
                  <MessageSquareIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Bring those ideas to life
                  </h3>
                  <p className="text-blue-200">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <img 
              src={intro} 
              alt="Video thumbnail" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;