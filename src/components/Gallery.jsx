import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', category: 'Wedding' },
  { id: 2, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800', category: 'Wedding' },
  { id: 3, url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', category: 'Corporate' },
  { id: 4, url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', category: 'Birthday' },
  { id: 5, url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800', category: 'Catering' },
  { id: 6, url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800', category: 'Decoration' },
  { id: 7, url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800', category: 'Entertainment' },
  { id: 8, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', category: 'Catering' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="gallery-subtitle">Glimpses of our spectacular events</p>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.category} />
              <div className="gallery-overlay">
                <span>{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <motion.img
              src={selectedImage.url}
              alt={selectedImage.category}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
