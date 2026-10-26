import { business } from '../data/menu.js'
import { whatsappLink, callLink } from '../utils.js'
import { Idli, Dosa, Paratha, Hanger } from './Foods.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="leaf leaf-1">🌿</div>
      <div className="leaf leaf-2">🍃</div>
      <div className="hero-hangers">
        <Hanger Food={Dosa} size={54} left="1.5%" length={70} delay={0.6} swing={3.4} />
        <Hanger Food={Paratha} size={62} left="47%" length={40} delay={0.9} swing={3} />
        <Hanger Food={Idli} size={56} right="1.5%" length={120} delay={0.75} swing={2.8} />
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="pill reveal" style={{ '--d': '0.1s' }}>☁️ Cloud Kitchen · {business.by}</span>
          <h1 className="reveal" style={{ '--d': '0.25s' }}>
            <span className="script green">Southern</span>{' '}
            <span className="script red">Nutri</span>
            <span className="kitchen">Kitchen</span>
          </h1>
          <p className="tagline reveal" style={{ '--d': '0.4s' }}>{business.tagline}</p>
          <p className="hero-desc reveal" style={{ '--d': '0.5s' }}>
            Wholesome South Indian tiffins, healthy brown rice &amp; quinoa bowls, and
            Maharashtrian thalis — all cooked fresh in pure ghee, just like home.
          </p>

          <div className="hero-actions reveal" style={{ '--d': '0.6s' }}>
            <a className="btn btn-green" href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Order on WhatsApp
            </a>
            <a className="btn btn-outline" href="#menu">View Menu</a>
          </div>

          <div className="hero-badges reveal" style={{ '--d': '0.75s' }}>
            <div className="badge-box">
              <strong>🛵 {business.deliveryKm} KM</strong>
              <span>Free Delivery</span>
            </div>
            <div className="badge-box">
              <strong>🧈 Pure Ghee</strong>
              <span>We use ghee</span>
            </div>
            <a className="badge-box" href={callLink}>
              <strong>📞 {business.phone}</strong>
              <span>Call to order</span>
            </a>
          </div>
        </div>

        <div className="hero-image reveal reveal-zoom" style={{ '--d': '0.35s' }}>
          <img src="/images/poster.jpg" alt="Southern Nutri Kitchen poster" />
        </div>
      </div>
    </section>
  )
}

export function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  )
}
