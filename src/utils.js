import { business } from './data/menu.js'

export function whatsappLink(message = 'Hi Southern Nutri Kitchen! I would like to place an order.') {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}

export const callLink = `tel:+91${business.phone}`
