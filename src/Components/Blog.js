import React from 'react';
import band from '../Images/Image.png';

const BlogCard = ({ author, date, title, description, tags, image }) => (
  <div className="flex flex-col lg:h-[444px] lg:w-[384px] mb-4 sm:mb-0 mx-auto">
    <div className="relative h-48 mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="space-y-4">
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <span>{author}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
      <h3 className="text-xl font-semibold group-hover:text-blue-600 flex items-center">
        {title}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </h3>
      <p className="text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-sm rounded-full ${
              tag.color === 'blue' ? 'text-blue-600 bg-blue-50' :
              tag.color === 'purple' ? 'text-purple-600 bg-purple-50' :
              tag.color === 'red' ? 'text-red-600 bg-red-50' :
              tag.color === 'green' ? 'text-green-600 bg-green-50' :
              'text-gray-600 bg-gray-50'
            }`}
          >
            {tag.text}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BlogLayout = () => {
  const blogs = [
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023 • Today",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: band,
      tags: [
        { text: "Tax & Audit", color: "purple" },
        { text: "Management", color: "blue" }
      ]
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      image: band,
      tags: [
        { text: "Tax", color: "blue" },
        { text: "Research", color: "purple" },
        { text: "Complience", color: "red" }
      ]
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: band,
      tags: [
        { text: "Audit", color: "purple" },
        { text: "Money Back", color: "blue" }
      ]
    },
    {
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      image: band,
      tags: [
        { text: "Money", color: "purple" },
        { text: "Management", color: "blue" }
      ]
    },
    {
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: band,
      tags: [
        { text: "Tax Return", color: "green" },
        { text: "News", color: "purple" },
        { text: "Audit", color: "red" }
      ]
    },
    {
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      image: band,
      tags: [
        { text: "Private Limited Company", color: "purple" },
        { text: "Customer Success", color: "blue" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-orange-500 text-sm font-medium">EXPLORE OUR BLOGS</span>
        <h2 className="text-3xl font-bold mt-2">Accelerate Digital Transformation</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      
      <div className="text-center mt-8 sm:mt-4">
        <button className="px-6 py-3 bg-blue-900 text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-800 transition-colors">
          Show more blogs
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogLayout;