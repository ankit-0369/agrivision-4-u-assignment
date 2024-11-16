import React from 'react';
import sameerImage from '../assets/feedback/sameer-satvik.svg';
import niveditaImage from '../assets/feedback/nivedita-yadav.svg';

const feedbacks = [
  {
    text: "“This platform was a game-changer for my college entrance prep! The lessons were clear, and the practice tests felt just like the real exam. I couldn’t have cracked it without their support.”",
    name: 'Sameer Sathvik',
    institute: 'ICT Mumbai',
    achievement: 'AIR 10 (GATE 2022)',
    image: sameerImage,
  },
  {
    text: "“Thanks to E-Nest, I secured my dream college! The mentors were always available, the structured approach and daily progress update kept me on track. Highly recommended!”",
    name: 'Nivedita R. Yadav',
    institute: 'ICT Mumbai',
    achievement: 'AIR 100 (GATE 2022)',
    image: niveditaImage,
  },
];

function StudentsFeedback() {
  return (
    <section className="bg-white py-[64px] px-[16px] lg:px-[198px]">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-[32px] leading-[48px] font-bold text-[#1D1D1F] text-center mb-[16px]">
          Words Of Our Students
        </h2>
        <p className="text-[20px] leading-[30px] font-medium text-[#6E6E73] text-center mb-[48px]">
          Read the story of how our platform has helped students achieve their goals.
        </p>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-[#F3E8FF] rounded-[24px]  shadow-md py-[52px] px-[40px] flex flex-col items-center text-left"
            >
              {/* Feedback Text */}
              <p className="text-[16px] leading-[24px] font-medium italic text-[#1D1D1F] mb-[16px]">
                {feedback.text}
              </p>

              {/* Student Info */}
              <div className="flex items-center gap-[16px] w-full">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-[56px] h-[56px] rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[16px] font-bold text-[#1D1D1F]">
                    {feedback.name}
                  </h3>
                  <p className="text-[14px] text-[#626262]">{feedback.institute}</p>
                  <p className="text-[16px] leading-[25.6px] font-bold text-[#1D1D1F]">{feedback.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentsFeedback;
