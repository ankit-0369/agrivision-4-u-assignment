import React from 'react';
import heroImage from '../assets/hero-image.svg'; // Replace with your actual hero image path
// import chartIcon from '../assets/chart-icon.png'; // Replace with icons
// import profileIcon from '../assets/profile-icon.png'; // Replace with profile icon

function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            We guide your path to your{' '}
            <span className="text-[#5A1B89] ">dream college</span>
          </h1>
          <p className="text-[#1D1D1F] mb-6">
            With our expert guidance, get admission to top institutions in Food
            Technology and Agriculture.
          </p>
          <button className="bg-[#F9BB05] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-[60px] transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Images and Highlights */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          {/* Main Hero Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="w-3/4 rounded-lg shadow-lg"
          />

          {/* Additional Elements */}
          {/* <div className="absolute top-5 left-5 bg-white p-3 rounded-lg shadow-lg">
            <img src={profileIcon} alt="Profile Icon" className="w-10 h-10" />
          </div>
          <div className="absolute bottom-5 right-5 bg-white p-3 rounded-lg shadow-lg">
            <img src={chartIcon} alt="Chart Icon" className="w-10 h-10" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
