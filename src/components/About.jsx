export default function About() {
  const points = [
    { icon: '🥗', title: 'Fresh Ingredients', text: 'Vegetables and meat sourced fresh every day.' },
    { icon: '🍲', title: 'Homemade Food', text: 'Recipes cooked the way they are at home.' },
    { icon: '💚', title: 'Nutritious & Tasty', text: 'Ragi, millets, brown rice and quinoa options.' },
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container about-inner">
        <div className="about-image">
          <img src="/images/ghee.jpg" alt="We use pure ghee" />
        </div>
        <div className="about-text">
          <span className="eyebrow">About Us</span>
          <h2>Healthy food, made with love</h2>
          <p>
            Southern Nutri Kitchen is a cloud kitchen by Hotel O. We bring you South Indian
            breakfasts, healthy rice bowls and Maharashtrian meals — cooked in pure ghee with
            no preservatives and no artificial colours.
          </p>
          <div className="about-points">
            {points.map((p) => (
              <div key={p.title} className="about-point">
                <span className="about-icon">{p.icon}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
