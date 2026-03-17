import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Priya & Rahul',
    event: 'Wedding',
    location: 'Hyderabad, Telangana',
    text: 'They handled our wedding perfectly. Everything was flawless from decoration to catering. Our guests are still talking about it!',
    rating: 5
  },
  {
    id: 2,
    name: 'Amit Sharma',
    event: 'Corporate Event',
    location: 'Delhi',
    text: 'Professional service and attention to detail. Our annual conference was a huge success thanks to their team.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sneha Patel',
    event: 'Birthday Party',
    location: 'Chennai, Tamil Nadu',
    text: 'Made my daughter\'s birthday magical! The decoration and entertainment were beyond our expectations.',
    rating: 5
  },
  {
    id: 4,
    name: 'Vikram & Anjali',
    event: 'Engagement',
    location: 'Vijayawada, Andhra Pradesh',
    text: 'Luxury Events made our engagement ceremony unforgettable. Highly recommend their services!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">Real experiences from real celebrations</p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Quote className="quote-icon" size={40} />
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.event}</span>
                <span className="testimonial-location">📍 {testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
