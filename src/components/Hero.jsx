import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918220136305?text=Hello, I want to inquire about your event services', '_blank');
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Crafting Unforgettable Celebrations
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          From Dream Weddings to Grand Corporate Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-buttons"
        >
          <a href="#services" className="btn btn-primary">Explore Services</a>
          <button onClick={handleWhatsApp} className="btn btn-outline">Get Quote on WhatsApp</button>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
