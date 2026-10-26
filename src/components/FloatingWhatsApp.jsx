import { whatsappLink } from '../utils.js'
import { WhatsAppIcon } from './Hero.jsx'

export default function FloatingWhatsApp() {
  return (
    <a
      className="float-wa"
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  )
}
