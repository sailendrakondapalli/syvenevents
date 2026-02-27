import { useState } from 'react';
import { motion } from 'framer-motion';
import { cateringPackages } from '../data/packages';
import './CateringCalculator.css';

const CateringCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState(cateringPackages[0]);
  const [guests, setGuests] = useState(100);

  const total = selectedPackage.pricePerPlate * guests;

  return (
    <motion.div
      className="catering-calculator"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="calculator-title">Catering Calculator</h3>
      <p className="calculator-subtitle">Calculate your catering costs instantly</p>

      <div className="calculator-controls">
        <div className="control-group">
          <label>Select Package</label>
          <div className="package-options">
            {cateringPackages.map(pkg => (
              <button
                key={pkg.id}
                className={`package-option ${selectedPackage.id === pkg.id ? 'active' : ''}`}
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg.name}
                <span>₹{pkg.pricePerPlate}/plate</span>
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Number of Guests: {guests}</label>
          <input
            type="range"
            min="50"
            max="500"
            step="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="guest-slider"
          />
          <div className="slider-labels">
            <span>50</span>
            <span>500</span>
          </div>
        </div>
      </div>

      <div className="calculator-result">
        <div className="result-row">
          <span>Package Price per Plate:</span>
          <span>₹{selectedPackage.pricePerPlate}</span>
        </div>
        <div className="result-row">
          <span>Number of Guests:</span>
          <span>{guests}</span>
        </div>
        <div className="result-row total">
          <span>Grand Total:</span>
          <span>₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CateringCalculator;
