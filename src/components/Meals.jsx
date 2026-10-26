import { meals } from '../data/menu.js'
import { whatsappLink } from '../utils.js'
import { TypeDot } from './Menu.jsx'

export default function Meals() {
  return (
    <section id="meals" className="section meals-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Full Meals</span>
          <h2>Maharashtrian Thali</h2>
          <p>A complete, balanced meal on one plate.</p>
        </div>

        <div className="meals-grid">
          {meals.map((m) => (
            <article key={m.name} className={`meal-card ${m.type}`}>
              <div className="meal-img">
                <img src={m.image} alt={m.name} />
                <span className="meal-price">₹{m.price}</span>
              </div>
              <div className="meal-body">
                <h3><TypeDot type={m.type} /> {m.name}</h3>
                <p className="includes-label">Includes:</p>
                <ul className="includes">
                  {m.includes.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <a
                  className="btn btn-green"
                  href={whatsappLink(`Hi! I would like to order the ${m.name} (₹${m.price}).`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order this meal
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
