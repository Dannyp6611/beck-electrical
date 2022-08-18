import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import ChooseUsSection from './components/ChooseUsSection';
import ContactUsSection from './components/ContactUsSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import { motion } from 'framer-motion';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <>
      <Navbar />
      <motion.div>
        <Hero />
        <AboutSection />
        <ChooseUsSection />
        <GallerySection />
        <ServicesSection />

        <ContactUsSection />
        <TestimonialSection />
        <FooterSection />
      </motion.div>
    </>
  );
}

export default App;
