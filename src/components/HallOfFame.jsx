import React from 'react';
import sameerImage from '../assets/hall-of-fame-icon/sameer-sathvik.svg'; // Replace with actual paths
import atharvaImage from '../assets/hall-of-fame-icon/atharva-narayane.svg';
import sanviImage from '../assets/hall-of-fame-icon/sanvi-chattopadhyay.svg';
import aleenaImage from '../assets/hall-of-fame-icon/aleena-shaji.svg';

const students = [
  {
    rank: 1,
    name: 'Sameer Sathvik',
    year: 'GATE 2022',
    institute: 'Institute of Chemical Technology (Mumbai)',
    image: sameerImage,
  },
  {
    rank: 2,
    name: 'Atharva Narayane',
    year: 'GATE 2022',
    institute: 'Institute of Chemical Technology (Mumbai)',
    image: atharvaImage,
  },
  {
    rank: 3,
    name: 'Sanvi Chattopadhyay',
    year: 'GATE 2022',
    institute: 'Institute of Chemical Technology (Mumbai)',
    image: sanviImage,
  },
  
];

function HallOfFame() {
  return (
    <section className="bg-[#FFFFFF] py-[64px] px-[16px] lg:px-[198px]">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[32px] leading-[48px] font-bold text-[#1D1D1F] mb-[16px]">
          Hall Of Fame
        </h2>
        <p className="text-[16px] leading-[24px] text-[#6E6E73] mb-[48px]">
          Our students have excelled and achieved their academic goals with our proven strategies and support.
        </p>

        {/* Students List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[120px] md:gap-[32px] pt-20">
          {students.map((student) => (
            <div
              key={student.rank}
              className="relative bg-[#F5E7FF] rounded-[20px] shadow-md p-[24px] pt-[64px] pb-[32px] flex flex-col items-center text-center"
            >

              
              {/* Image */}
              <div className="absolute -top-[100px]">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-[172px] h-[172px] rounded-full bg-[#DEDEDE] overflow-hidden object-cover border-[10px] border-[#FFFFFF]"
                />
              </div>


              {/* Rank Badge */}
              <div className="absolute top-[26px] w-[72px] h-[72px] p-[10px]   bg-white border-[2.4px] border-[#7A1DC5]
                 text-[#7A1DC5] rounded-full
              flex flex-col items-center justify-center">
                <span className="text-[12px] leading-[18px] font-semibold">AIR</span>
                <span className="text-[20px] leading-[30px] font-bold">{student.rank}</span>
              </div>


              {/* Details */}
             <div className='mt-[16px] p-3'>
             <h3 className="text-[20px] leading-[30px]  font-bold text-[#1D1D1F] mt-[16px]">{student.name}</h3>
              <p className="text-[16px] leading-[24px] font-bold text-[#333336] mb-[8px]">{student.year}</p>
              <div className="bg-white px-[20px] py-[17px] rounded-[10px] mt-[40px]">
                <p className="text-[16px] leading-[24px] text-center font-bold text-[#333336]">{student.institute}</p>
              </div>
             </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="mt-[24px] flex justify-center gap-[8px]">
          {students.map((_, index) => (
            <div
              key={index}
              className={`w-[12px] h-[12px] rounded-full ${
                index === 0 ? 'bg-[#7A1DC5]' : 'bg-[#DADADA]'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HallOfFame;
