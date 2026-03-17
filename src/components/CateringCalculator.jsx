import { useState } from 'react';
import { Send } from 'lucide-react';
import './CateringCalculator.css';

const MENU_SECTIONS = [
  {
    id: 'rice',
    label: '🍚 Veg Rice Items',
    items: ['Plain Rice', 'Jeera Rice', 'Veg Biryani', 'Lemon Rice', 'Tomato Rice', 'Curd Rice', 'Peas Pulao', 'Coconut Rice'],
  },
  {
    id: 'tiffin',
    label: '🥞 Tiffin Items',
    items: ['Idli', 'Dosa', 'Pongal', 'Upma', 'Vada', 'Poori', 'Chapati', 'Rava Dosa', 'Pesarattu'],
  },
  {
    id: 'roti',
    label: '🫓 Roti / Bread Items',
    items: ['Chapati', 'Parotta', 'Naan', 'Puri', 'Phulka', 'Stuffed Paratha'],
  },
  {
    id: 'curries',
    label: '🥘 Veg Curries & Gravies',
    items: ['Dal Tadka', 'Paneer Butter Masala', 'Chana Masala', 'Aloo Gobi', 'Mixed Veg Curry', 'Sambar', 'Rasam', 'Kootu'],
  },
  {
    id: 'starters',
    label: '🥗 Veg Starters',
    items: ['Gobi 65', 'Paneer Tikka', 'Veg Cutlet', 'Spring Rolls', 'Mushroom Pepper Fry', 'Baby Corn Fry'],
  },
  {
    id: 'nonveg_rice',
    label: '🍗 Non-Veg Rice Items',
    items: ['Chicken Biryani', 'Mutton Biryani', 'Egg Biryani', 'Fish Biryani', 'Prawn Biryani'],
  },
  {
    id: 'nonveg_curries',
    label: '🍖 Non-Veg Curries',
    items: ['Chicken Curry', 'Mutton Curry', 'Egg Curry', 'Fish Curry', 'Prawn Masala', 'Chicken Chettinad'],
  },
  {
    id: 'nonveg_starters',
    label: '🔥 Non-Veg Starters',
    items: ['Chicken 65', 'Chicken Lollipop', 'Mutton Chukka', 'Fish Fry', 'Prawn Fry', 'Egg Pepper Fry'],
  },
  {
    id: 'drinks',
    label: '🥤 Drinks & Beverages',
    items: ['Buttermilk', 'Lemon Juice', 'Tender Coconut', 'Fruit Juice', 'Soft Drinks', 'Lassi', 'Badam Milk', 'Filter Coffee', 'Tea'],
  },
  {
    id: 'desserts',
    label: '🍮 Sweets & Desserts',
    items: ['Gulab Jamun', 'Rasgulla', 'Kheer', 'Halwa', 'Payasam', 'Ice Cream', 'Jalebi', 'Ladoo'],
  },
  {
    id: 'extras',
    label: '🥙 Extras & Sides',
    items: ['Papad', 'Pickle', 'Raita', 'Salad', 'Chutney', 'Appalam', 'Vadagam'],
  },
];

const CateringCalculator = () => {
  const [guests, setGuests] = useState(100);
  const [selected, setSelected] = useState({});
  const [openSections, setOpenSections] = useState({ rice: true });

  const toggle = (sectionId, item) => {
    setSelected(prev => {
      const sec = prev[sectionId] || [];
      return {
        ...prev,
        [sectionId]: sec.includes(item) ? sec.filter(i => i !== item) : [...sec, item],
      };
    });
  };

  const selectAll = (sectionId, items) => {
    setSelected(prev => ({ ...prev, [sectionId]: [...items] }));
  };

  const clearSection = (sectionId) => {
    setSelected(prev => ({ ...prev, [sectionId]: [] }));
  };

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalSelected = Object.values(selected).flat().length;

  const handleSubmit = () => {
    const lines = [`*Catering Enquiry*`, `Guests: ${guests}`];
    MENU_SECTIONS.forEach(sec => {
      const items = selected[sec.id];
      if (items && items.length > 0) {
        lines.push(`\n*${sec.label}*`);
        items.forEach(item => lines.push(`  • ${item}`));
      }
    });
    if (totalSelected === 0) {
      lines.push('\n_(No items selected yet)_');
    }
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/918220136305?text=${msg}`, '_blank');
  };

  return (
    <div className="catering-calculator">
      <h2 className="calculator-title">Catering Menu Selector</h2>
      <p className="calculator-subtitle">Select your preferred items and send us your enquiry via WhatsApp</p>

      {/* Guest count */}
      <div className="control-group">
        <label>Number of Guests: <span className="guest-count-val">{guests}</span></label>
        <input
          type="range"
          min="50"
          max="1000"
          step="10"
          value={guests}
          onChange={e => setGuests(Number(e.target.value))}
          className="guest-slider"
        />
        <div className="slider-labels"><span>50</span><span>500</span><span>1000</span></div>
      </div>

      {/* Menu sections */}
      <div className="menu-sections">
        {MENU_SECTIONS.map(sec => (
          <div key={sec.id} className="menu-section">
            <button
              className={`menu-section-header${openSections[sec.id] ? ' open' : ''}`}
              onClick={() => toggleSection(sec.id)}
            >
              <span>{sec.label}</span>
              <span className="section-meta">
                {selected[sec.id]?.length > 0 && (
                  <span className="section-badge">{selected[sec.id].length}</span>
                )}
                <span className="section-arrow">{openSections[sec.id] ? '▲' : '▼'}</span>
              </span>
            </button>
            {openSections[sec.id] && (
              <div className="menu-section-body">
                <div className="section-actions">
                  <button
                    className="sec-action-btn select-all"
                    onClick={() => selectAll(sec.id, sec.items)}
                  >
                    Select All
                  </button>
                  <button
                    className="sec-action-btn clear-all"
                    onClick={() => clearSection(sec.id)}
                  >
                    Clear
                  </button>
                </div>
                <div className="menu-items-grid">
                  {sec.items.map(item => {
                    const checked = (selected[sec.id] || []).includes(item);
                    return (
                      <label key={item} className={`menu-item${checked ? ' checked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(sec.id, item)}
                        />
                        <span>{item}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="calculator-submit">
        <div className="submit-summary">
          {totalSelected > 0
            ? <span>{totalSelected} item{totalSelected > 1 ? 's' : ''} selected for {guests} guests</span>
            : <span>Select items above to build your menu</span>
          }
        </div>
        <button className="btn btn-primary submit-whatsapp" onClick={handleSubmit}>
          <Send size={18} />
          Send Enquiry on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CateringCalculator;
