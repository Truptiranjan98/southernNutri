import { features } from '../data/menu.js'

export default function Features() {
  return (
    <section className="features">
      <div className="container features-grid">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <span className="feature-icon">{f.icon}</span>
            <span>{f.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
