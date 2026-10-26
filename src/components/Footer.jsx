import { business } from '../data/menu.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/images/logo.jpg" alt="Southern Nutri Kitchen" className="footer-logo" />
        <p className="footer-tag">{business.tagline}</p>
        <p>Cloud Kitchen · {business.by} · 📞 {business.phone}</p>
        <p className="copy">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
