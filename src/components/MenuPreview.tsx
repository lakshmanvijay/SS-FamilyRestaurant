import { useState } from 'react'
import { menuCategories, menuItems, type MenuCategory } from '../data/menu'
import { IconArrowRight, IconLeaf } from './icons'
import './MenuPreview.css'

export default function MenuPreview() {
  const [active, setActive] = useState<MenuCategory>('Mains')

  const visibleItems = menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Our Menu</span>
          <h2 className="section-title">A taste of what we're cooking</h2>
          <p className="section-subtitle">
            Every dish is made from scratch daily using recipes passed down through our family —
            here's a preview of guest favorites.
          </p>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              id={`tab-${category}`}
              aria-selected={active === category}
              aria-controls={`panel-${category}`}
              className={`menu__tab ${active === category ? 'menu__tab--active' : ''}`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="menu__grid"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          {visibleItems.map((item) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card__media">
                <img src={item.image} alt={item.name} loading="lazy" width={700} height={500} />
                {item.tags && (
                  <div className="menu-card__tags">
                    {item.tags.map((tag) => (
                      <span className="menu-card__tag" key={tag}>
                        {tag === 'Vegetarian' && <IconLeaf width={14} height={14} />}
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="menu-card__body">
                <div className="menu-card__row">
                  <h3>{item.name}</h3>
                  <span className="menu-card__price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu__cta">
          <a href="#reserve" className="btn btn-outline-dark">
            View Full Menu &amp; Reserve
            <IconArrowRight width={18} height={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
