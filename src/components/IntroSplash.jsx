import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroSplash.css';

const IntroSplash = () => {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  // Start counting after line slides in (~0.8s delay)
  useEffect(() => {
    const startDelay = setTimeout(() => {
      const duration = 2500; // ms to count to 1000
      const steps = 60;
      const increment = 1000 / steps;
      let current = 0;
      countRef.current = setInterval(() => {
        current += increment;
        if (current >= 1000) {
          setCount(1000);
          clearInterval(countRef.current);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, 800);

    // Hide after 4.5s
    const hideTimer = setTimeout(() => setVisible(false), 4500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(hideTimer);
      clearInterval(countRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Number + label */}
          <motion.div
            className="intro-line-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="intro-count">{count.toLocaleString()}{count >= 1000 ? '+' : ''}</span>
            <span className="intro-clients-label">Satisfied Clients</span>
          </motion.div>

          {/* Horizontal line below the number */}
          <motion.div
            className="intro-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
