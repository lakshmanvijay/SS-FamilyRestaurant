import { images } from '../data/images'
import { IconFlame, IconLeaf, IconQuote, IconWheat } from './icons'
import './ChefStory.css'

const PILLARS = [
  { icon: IconWheat, title: 'Local & Seasonal', text: 'Ingredients sourced from nearby farms every week.' },
  { icon: IconFlame, title: 'Wood-Fired Craft', text: 'Traditional cooking methods, three generations strong.' },
  { icon: IconLeaf, title: 'Made From Scratch', text: 'No shortcuts — every sauce, dough, and dessert is house-made.' },
]

export default function ChefStory() {
  return (
    <section id="story" className="section chef">
      <div className="container chef__inner">
        <div className="chef__media">
          <img src={images.chef} alt="Chef Danny Lin plating a dish in the SS Family Restaurant kitchen" loading="lazy" />
          <div className="chef__media-badge">
            <strong>30+</strong>
            <span>Years of Family Recipes</span>
          </div>
        </div>

        <div className="chef__content">
          <span className="section-eyebrow section-eyebrow--inverse">Meet Our Chef</span>
          <h2 className="chef__title">
            Cooking is how our family says <em>welcome</em>.
          </h2>

          <blockquote className="chef__quote">
            <IconQuote width={28} height={28} />
            <p>
              My grandmother taught me that a great meal isn't about technique — it's about
              making people feel at home. Every recipe on this menu started in her kitchen,
              and I cook it the same way she did: slowly, and with love.
            </p>
            <cite>— Chef Danny Lin, Founder &amp; Head Chef</cite>
          </blockquote>

          <div className="chef__pillars">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div className="chef__pillar" key={title}>
                <span className="chef__pillar-icon">
                  <Icon width={22} height={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
