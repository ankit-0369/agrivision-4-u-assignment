import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChooseUs from './components/ChooseUs';
import Courses from './components/Courses';
import Mentors from './components/Mentors';
import HallOfFame from './components/HallOfFame';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Fame from './components/Fame';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Fame/>
      <ChooseUs />
      <Courses />
      <Mentors />
      <HallOfFame />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
