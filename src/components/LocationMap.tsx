import { IconClock, IconMail, IconPhone, IconPin } from './icons'
import './LocationMap.css'

const HOURS = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '11:30am – 9:00pm' },
  { day: 'Friday – Saturday', time: '11:30am – 10:00pm' },
  { day: 'Sunday', time: '12:00pm – 8:30pm' },
]

export default function LocationMap() {
  return (
    <section id="location" className="section location">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Find Us</span>
          <h2 className="section-title">Come sit at our table</h2>
          <p className="section-subtitle">
            Tucked in the heart of downtown with cozy indoor seating and a warm patio for
            golden-hour dinners.
          </p>
        </div>

        <div className="location__grid">
          <div className="location__map">
            <iframe
              title="SS Family Restaurant location map"
              src="https://www.google.com/maps?q=128+Maple+Street,+Springfield,+IL+62704&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="location__details">
            <div className="location__block">
              <span className="location__icon">
                <IconPin width={20} height={20} />
              </span>
              <div>
                <h3>Address</h3>
                <p>128 Maple Street, Downtown District, Springfield, IL 62704</p>
              </div>
            </div>

            <div className="location__block">
              <span className="location__icon">
                <IconClock width={20} height={20} />
              </span>
              <div>
                <h3>Hours</h3>
                <ul className="location__hours">
                  {HOURS.map((row) => (
                    <li key={row.day}>
                      <span>{row.day}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="location__block">
              <span className="location__icon">
                <IconPhone width={20} height={20} />
              </span>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+15552148890">(555) 214-8890</a>
                </p>
              </div>
            </div>

            <div className="location__block">
              <span className="location__icon">
                <IconMail width={20} height={20} />
              </span>
              <div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:hello@ssfamilyrestaurant.com">hello@ssfamilyrestaurant.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
