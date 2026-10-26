import { business } from '../data/menu.js'
import { whatsappLink, callLink } from '../utils.js'
import { WhatsAppIcon } from './Hero.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <div className="delivery-card">
          <span className="scooter">🛵</span>
          <h2>
            <span>{business.deliveryKm} KM</span> Delivery <em>FREE</em>
          </h2>
          <p>Free home delivery within {business.deliveryKm} km of our kitchen.</p>
        </div>

        <div className="order-card">
          <h2>Order Now</h2>
          <p>Call or WhatsApp us to place your order.</p>
          <a className="phone-big" href={callLink}>📞 {business.phone}</a>
          <div className="order-actions">
            <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
            <a className="btn btn-light" href={callLink}>Call Now</a>
          </div>
          <div className="hours">
            <div><strong>Tiffin</strong><span>7:00 AM – 11:00 AM</span></div>
            <div><strong>Lunch</strong><span>12:00 PM – 3:00 PM</span></div>
            <div><strong>Dinner</strong><span>7:00 PM – 11:00 PM</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
