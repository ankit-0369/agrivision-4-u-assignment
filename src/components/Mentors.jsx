import React from 'react';
import prithviImage from '../assets/mentors/prithvi-raj-singh.svg';
import siddharthImage from '../assets/mentors/siddharth-k-reddy.svg';
import nehaImage from '../assets/mentors/neha-lakshmi-rao.svg';
import chaitanyaImage from '../assets/mentors/chaitanya-vishwakarma.svg';

const mentors = [
  {
    name: 'Prithvi Raj Singh',
    institute: 'IIM Ahmedabad',
    expertise: 'GD-PI, Communication, Verbal skill',
    experience: '6 Years',
    image: prithviImage,
  },
  {
    name: 'Siddharth K. Reddy',
    institute: 'IIM Ahmedabad',
    expertise: 'Thermodynamics, Math',
    experience: '15 Years',
    image: siddharthImage,
  },
  {
    name: 'Neha Lakshmi Rao',
    institute: 'IIM Ahmedabad',
    expertise: 'General Aptitude, Personality Development',
    experience: '10 Years',
    image: nehaImage,
  },
  {
    name: 'Chaitanya Vishwakarma',
    institute: 'IIM Ahmedabad',
    expertise: 'Food Technology, Microbiology',
    experience: '5 Years',
    image: chaitanyaImage,
  },
];

function Mentors() {
  return (
    <section className="bg-white py-[64px] px-[16px] lg:px-[198px]">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[32px] leading-[48px] font-bold text-[#1D1D1F] mb-[16px]">
          Meet Our Mentors
        </h2>
        <p className="text-[20px] leading-[30px] font-medium text-[#6E6E73] mb-[48px]">
          We onboard the country’s best mentors in their respective fields.
        </p>

        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-[32px]">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white border border-[#D1D1D1] rounded-[32px]
               p-[24px] flex flex-col items-center justify-center text-center relative"
            >
              <div className='p-[16px] w-[282px] h-[426px]'>

                {/* Mentor Image */}
                <div className="w-[281px] h-[258px] rounded-[16px] overflow-hidden border-[4px] border-white">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                {/* Mentor Details */}
                <h3 className="text-[18px] font-bold text-[#1D1D1F] mb-[8px]">
                  {mentor.name}
                </h3>
                <p className="text-[14px] text-[#626262] mb-[8px]">
                  {mentor.institute}
                </p>
                <p className="text-[14px] text-[#626262] mb-[16px]">
                  Expertise: {mentor.expertise}
                </p>

              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-[-20px] bg-white border border-[#DADADA] rounded-full px-[24px] py-[8px] shadow-md z-10">
                <p className="text-[14px] font-medium text-[#3D0072]">
                  Experience: {mentor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mentors;
