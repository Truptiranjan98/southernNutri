import { useMemo, useState } from 'react'
import { menu } from '../data/menu.js'

export function TypeDot({ type }) {
  const label = type === 'veg' ? 'Veg' : type === 'egg' ? 'Egg' : 'Non-Veg'
  return <span className={`type-dot ${type}`} title={label} aria-label={label}></span>
}

export default function Menu() {
  const [active, setActive] = useState(menu[0].id)
  const [vegOnly, setVegOnly] = useState(false)
  const [search, setSearch] = useState('')

  const section = menu.find((m) => m.id === active)
  const query = search.trim().toLowerCase()

  // When searching, look across every section; otherwise show the active tab.
  const groups = useMemo(() => {
    const source = query ? menu.flatMap((m) => m.groups) : section.groups
    return source
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (i) =>
            (!vegOnly || i.type === 'veg') &&
            (!query || i.name.toLowerCase().includes(query))
        ),
      }))
      .filter((g) => g.items.length > 0)
  }, [query, vegOnly, section])

  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Menu</span>
          <h2>Fresh, Healthy &amp; Homemade</h2>
          <p>Prices in ₹. Everything is cooked fresh in pure ghee.</p>
        </div>

        <div className="menu-controls">
          <div className="tabs" role="tablist">
            {menu.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={active === m.id && !query}
                className={`tab ${active === m.id && !query ? 'active' : ''}`}
                onClick={() => {
                  setActive(m.id)
                  setSearch('')
                }}
              >
                {m.title}
              </button>
            ))}
          </div>

          <div className="filters">
            <input
              type="search"
              placeholder="Search dishes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className="toggle">
              <input type="checkbox" checked={vegOnly} onChange={(e) => setVegOnly(e.target.checked)} />
              <span className="toggle-track"><span className="toggle-thumb"></span></span>
              Veg only
            </label>
          </div>
        </div>

        {!query && section.timing && (
          <div className="timing">🕒 {section.timing}</div>
        )}

        {groups.length === 0 ? (
          <p className="empty">No dishes found. Try a different search.</p>
        ) : (
          <div className="menu-groups">
            {groups.map((g) => (
              <div key={g.title} className="menu-card">
                <div className="menu-card-head">
                  {g.image && <img src={g.image} alt={g.title} />}
                  <h3>{g.title}</h3>
                </div>
                <ul>
                  {g.items.map((item) => (
                    <li key={item.name + item.price}>
                      <TypeDot type={item.type} />
                      <span className="item-name">
                        {item.name}
                        {item.qty && <small> ({item.qty})</small>}
                        {item.popular && <em className="tag tag-popular">Popular</em>}
                        {item.healthy && <em className="tag tag-healthy">Healthy</em>}
                      </span>
                      <span className="dots"></span>
                      <span className="price">₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {!query && section.note && <p className="menu-note">🌿 {section.note}</p>}

        <div className="legend">
          <span><TypeDot type="veg" /> Veg</span>
          <span><TypeDot type="nonveg" /> Non-Veg</span>
          <span><TypeDot type="egg" /> Egg</span>
        </div>
      </div>
    </section>
  )
}
