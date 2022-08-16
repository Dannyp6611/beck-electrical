import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import ChooseUsSection from './components/ChooseUsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ChooseUsSection />
      <ServicesSection />
      <ContactSection />
      <TestimonialSection />
    </div>
  );
}

export default App;
