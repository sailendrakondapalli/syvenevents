import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PackageCard from '../components/PackageCard';
import CateringCalculator from '../components/CateringCalculator';
import AddonSection from '../components/AddonSection';
import BookingForm from '../components/BookingForm';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import { services } from '../data/services';
import { packages } from '../data/packages';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      
      <section className="services-section section" id="services">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">Comprehensive event solutions tailored to perfection</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="packages-section section" id="packages">
        <div className="container">
          <h2 className="section-title">Wedding Packages</h2>
          <p className="section-subtitle">Choose the perfect package for your special day</p>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="calculator-section section">
        <div className="container">
          <CateringCalculator />
        </div>
      </section>

      <section className="addons-section section">
        <div className="container">
          <AddonSection />
        </div>
      </section>

      <Stats />

      <Gallery />

      <Testimonials />

      <section className="booking-section section">
        <div className="container">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
