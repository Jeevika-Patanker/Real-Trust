import React from 'react';
import Navbar from '../../components/LandingPage/navbar/Navbar';
import HeroSection from '../../components/LandingPage/hero/HeroSection';
import MeetYourBroker from '../../components/LandingPage/meetborker/MeetYourBroker';
import WhyChooseUs from '../../components/LandingPage/whychoose/WhyChooseUs';
import AboutUs from '../../components/LandingPage/about/AboutUs';
import ProjectSection from '../../components/LandingPage/project/ProjectSection';
import ClientSection from '../../components/LandingPage/client/ClientSection';
import MoreSection from '../../components/LandingPage/more/Moresection';
import Footer from '../../components/LandingPage/navbar/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MeetYourBroker />
      <WhyChooseUs />
      <AboutUs />
      <ProjectSection />
      <ClientSection />
      <MoreSection />
      <Footer />
    </div>
  );
}

export default Home;
