import React from 'react';
import googlePlayIcon from '../assets/footer-icon/google-play.svg'; // Replace with actual path
import appStoreIcon from '../assets/footer-icon/app-store.svg'; // Replace with actual path
import logoIcon from '../assets/footer-icon/logo.svg'; // Replace with actual path

function Footer() {
  return (
    <footer className="bg-[#1D0532] text-white pt-[40px]">
      <div className="container mx-auto px-[16px] lg:px-[198px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[32px] mb-[32px]">
          {/* Logo and Description */}
          <div>
            <img src={logoIcon} alt="Logo" className="w-[120px] mb-[16px]" />
            <p className="text-[14px] leading-[21px] text-[#DADADA] mb-[16px]">
              E-nest: Empowering students with expert guidance and strategic
              resources to excel in their college entrance exams and achieve
              their academic dreams.
            </p>
            <div className="flex gap-[12px]">
              <img src={googlePlayIcon} alt="Google Play" className="w-[140px] h-[42px]" />
              <img src={appStoreIcon} alt="App Store" className="w-[140px] h-[42px]" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[16px] font-bold mb-[12px]">QUICK LINKS</h3>
            <ul className="space-y-[8px]">
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Program</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Test series</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Skill Connect</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Expert Connect</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Study Abroad</li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-[16px] font-bold mb-[12px]">SECURITY</h3>
            <ul className="space-y-[8px]">
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Report</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Trademark Notice</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Advertise with us</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Help & Support</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Refund Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[16px] font-bold mb-[12px]">CONTACT US</h3>
            <ul className="space-y-[8px]">
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Email</li>
              <li className="text-[14px] text-[#DADADA] cursor-pointer hover:underline">Talk to Counsellor</li>
            </ul>
            <div className="flex gap-[12px] mt-[16px]">
              <span className="w-[24px] h-[24px] bg-[#DADADA] rounded-full"></span>
              <span className="w-[24px] h-[24px] bg-[#DADADA] rounded-full"></span>
              <span className="w-[24px] h-[24px] bg-[#DADADA] rounded-full"></span>
              <span className="w-[24px] h-[24px] bg-[#DADADA] rounded-full"></span>
            </div>
          </div>
        </div>
      
      </div>
        {/* Bottom Section */}
        <div className="text-center w-full flex justify-center items-center p-[10px] bg-white text-[14px] leading-[21px] font-bold
       text-[#000000] mt-[40px]">
          Copyrights © E-NEST Pvt. Ltd. 2024
        </div>
    </footer>
  );
}

export default Footer;
