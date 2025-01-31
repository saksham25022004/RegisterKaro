import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files from your desktop using our software. The software scans your system for recoverable files and allows you to restore them with just a few clicks."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files from your desktop using our software. The software scans your system for recoverable files and allows you to restore them with just a few clicks."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files from your desktop using our software. The software scans your system for recoverable files and allows you to restore them with just a few clicks."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files from your desktop using our software. The software scans your system for recoverable files and allows you to restore them with just a few clicks."
    },
    {
      question: "Can I recover deleted files from desktop with this software?",
      answer: "Yes, you can recover deleted files from your desktop using our software. The software scans your system for recoverable files and allows you to restore them with just a few clicks."
    },
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mx-auto py-12 px-4 bg-[#FAFAFA]">
      <div className="text-center mb-12">
        <span className="text-orange-500 font-medium">FAQ</span>
        <h2 className="text-3xl font-bold text-[#402E32] mt-2">Frequent Ask Questions</h2>
      </div>

      <div className="space-y-4 mx-auto sm:mx-10">
        {visibleFaqs.map((faq, index) => (
          <div className='flex w-full relative'>
            <div className="absolute w-[10px] h-[57px] bg-gradient-to-t from-[#1C4670] to-[#FFA229] rounded-md -left-[4px] opacity-[80%]"></div>
            <div
              key={index}
              className="border rounded-lg rounded-l-none overflow-hidden shadow-sm bg-white w-full z-10"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronRight
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedIndex === index ? 'transform rotate-90' : ''
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {faqs.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            {showAll ? 'Show less' : 'Show more'}
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection;