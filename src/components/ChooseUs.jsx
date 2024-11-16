import React from 'react';
import provenResultsIcon from '../assets/proven-results.svg';
import mentorsIcon from '../assets/mentors.svg';
import materialsIcon from '../assets/materials.svg';
import progressIcon from '../assets/progress.svg';

function ChooseUs() {
  const cards = [
    {
      title: 'Proven Results',
      subtitle: 'Every year',
      description:
        'With a consistent track record of student success, we deliver real, proven outcomes.',
      icon: provenResultsIcon,
    },
    {
      title: 'Experienced Mentors',
      subtitle: 'Learn with',
      description:
        'Our expert mentors bring decades of industry experience to guide your learning journey.',
      icon: mentorsIcon,
    },
    {
      title: 'Study Materials & Test Series',
      subtitle: 'Up to date',
      description:
        'We provide updated study materials and Test Series prepared by subject matter experts.',
      icon: materialsIcon,
    },
    {
      title: 'Daily Progress Report',
      subtitle: 'Track personalized',
      description:
        'Monitor your growth and stay on top of your learning goals with our daily progress tracking.',
      icon: progressIcon,
    },
  ];

  return (
    <section className="bg-[#F1F1F1] py-[64px] overflow-hidden">
      <div className="container mx-auto px-[16px] lg:px-[64px]">
        {/* Section Heading */}
        <h2 className="text-[28px] sm:text-[32px] leading-[38px] sm:leading-[48px] font-bold text-[#1D1D1F] text-center mb-[48px] sm:mb-[64px]">
          Why Choose Us?
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[40px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] shadow-lg p-[24px] sm:p-[32px] pt-[40px] w-full max-w-[320px] sm:max-w-[648px] mx-auto md:mx-0 flex flex-col justify-between"
            >
              {/* Text Content */}
              <div className="flex flex-col flex-wrap min-w-0">
                <div className="text-[14px] sm:text-[16px] leading-[19px] sm:leading-[19.36px] font-semibold text-[#1D1D1F] mb-[12px] break-words">
                  {card.subtitle}
                </div>
                <div className="text-[20px] sm:text-[24px] leading-[26px] sm:leading-[29.05px] font-semibold text-[#7A1DC5] mb-[16px] break-words">
                  {card.title}
                </div>
                <p className="text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] italic font-medium text-[#6E6E73] break-words">
                  {card.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex justify-end mt-[16px] sm:mt-[32px]">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-[150px] sm:w-[251px] h-[150px] sm:h-[200px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
