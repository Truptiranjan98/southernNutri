import { useEffect, useState } from 'react'

const images = [
  { src: '/images/menu-card.jpg', alt: 'Full menu card', label: 'Full Menu Card' },
  { src: '/images/poster.jpg', alt: 'Southern Nutri Kitchen poster', label: 'Our Poster' },
]

export default function Gallery() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section gallery-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Menu Card</span>
          <h2>See the full menu</h2>
          <p>Tap an image to view it full size.</p>
        </div>
        <div className="gallery-grid">
          {images.map((img) => (
            <button key={img.src} className="gallery-item" onClick={() => setOpen(img)}>
              <img src={img.src} alt={img.alt} />
              <span>{img.label} 🔍</span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lightbox-close" aria-label="Close">✕</button>
          <img src={open.src} alt={open.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
