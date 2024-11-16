import React from 'react';
import gateIcon from '../assets/courses-icon/gate-icon.svg'; // Replace with actual paths
import cftriIcon from '../assets/courses-icon/cftri-icon.svg';
import cuetIcon from '../assets/courses-icon/cuet-icon.svg';
import ugcNetIcon from '../assets/courses-icon/ugc-net-icon.svg';
import ninIcon from '../assets/courses-icon/nin-icon.svg';
import icarIcon from '../assets/courses-icon/icar-icon.svg';
import mbaIcon from '../assets/courses-icon/mba-icon.svg';
import jaeSfaIcon from '../assets/courses-icon/jae-sfa-icon.svg';
import cgpdIcon from '../assets/courses-icon/cgpd-icon.svg';
import cfsoIcon from '../assets/courses-icon/cfso-icon.svg';
import fciIcon from '../assets/courses-icon/fci-icon.svg';

function Courses() {
  const courses = [
    { title: 'GATE', subtitle: 'Graduate Aptitude test in Engineering', icon: gateIcon },
    { title: 'CFTRI', subtitle: 'Central Food Technological Research Institute', icon: cftriIcon },
    { title: 'CUET', subtitle: 'Common University Entrance Test', icon: cuetIcon },
    { title: 'UGC NET', subtitle: 'University Grants Commission National Eligibility Test', icon: ugcNetIcon },
    { title: 'NIN', subtitle: 'National Institute of Nutrition', icon: ninIcon },
    { title: 'ICAR', subtitle: 'Indian Council of Agricultural Research', icon: icarIcon },
    { title: 'MBA', subtitle: 'Master of Business Administration', icon: mbaIcon },
    { title: 'JAE/SFA', subtitle: 'Joint Admission Exercise', icon: jaeSfaIcon },
    { title: 'CGPDTM', subtitle: 'Controller General of Patents, Designs, and Trade Marks', icon: cgpdIcon },
    { title: 'CFSO', subtitle: 'Food Corporation of India', icon: cfsoIcon },
    { title: 'FCI', subtitle: 'Food Corporation of India', icon: fciIcon },
  ];

  return (
    <section className="bg-[#FFFFFF] py-[120px] px-[16px] lg:px-[198px]">
      <div className="container mx-auto text-center flex flex-col items-center">
        {/* Tab Header */}
        <div className="flex justify-center w-[388px] h-[80px] space-x-4 rounded-[40px] bg-[#1D0532] p-2 mb-[60px]">
          <button className="p-[10px] text-[20px] leading-[30px] font-semibold rounded-[60px] w-[180px] h-[64px] bg-[#FFFFFF] text-black">
            Courses
          </button>
          <button className="text-white font-semibold text-[20px] leading-[30px]">
            Test series
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[30px] md:gap-[40px]">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-[#DADADA] rounded-[16px] p-[24px] flex flex-row items-center text-left space-x-4 shadow-sm"
            >
              {/* Icon */}
              <div>
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-[50px] h-[50px] object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[18px] font-bold text-[#1D1D1F]">
                  {course.title}
                </h3>
                <p className="text-[14px] text-[#626262] mt-[4px]">
                  {course.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-[60px] ">
          <button className="bg-[#1D0532] md:w-[650px] md:h-[60px] text-white font-bold p-[10px] rounded-[16px]
 border border-[#6E6E73] text-[20px] leading-[30px]  shadow-md hover:bg-[#280051] transition duration-300">
            Explore all Course →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Courses;



