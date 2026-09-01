import { images } from '../data/images'
import { IconArrowRight, IconChevronDown, IconStar } from './icons'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${images.heroBg})` }} aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-eyebrow section-eyebrow--inverse">Family Recipes Since 1994</span>
          <h1 className="hero__title">
            Warm plates, <em>real</em> flavor, <br /> made like family.
          </h1>
          <p className="hero__subtitle">
            Slow-simmered sauces, wood-fired mains, and desserts baked fresh every morning —
            SS Family Restaurant brings three generations of home cooking to your table.
          </p>

          <div className="hero__actions">
            <a href="#reserve" className="btn btn-primary">
              Reserve a Table
              <IconArrowRight width={18} height={18} />
            </a>
            <a href="#menu" className="btn btn-outline hero__ghost-btn">
              View Menu
            </a>
          </div>

          <div className="hero__rating">
            <div className="hero__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} width={18} height={18} />
              ))}
            </div>
            <p>
              <strong>4.9/5</strong> from 1,200+ happy guests
            </p>
          </div>
        </div>
      </div>

      <a href="#menu" className="hero__scroll-cue" aria-label="Scroll to menu">
        <IconChevronDown width={26} height={26} />
      </a>
    </section>
  )
}
