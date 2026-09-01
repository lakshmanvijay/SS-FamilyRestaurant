import { IconFacebook, IconInstagram, IconMail, IconPhone, IconPin } from './icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="navbar__brand footer__brand-link">
            <span className="navbar__brand-mark">SS</span>
            <span className="navbar__brand-text">Family Restaurant</span>
          </a>
          <p>Warm, home-style cooking made from cherished family recipes since 1994.</p>
          <div className="footer__social">
            <a href="https://facebook.com" aria-label="SS Family Restaurant on Facebook" target="_blank" rel="noreferrer">
              <IconFacebook width={20} height={20} />
            </a>
            <a href="https://instagram.com" aria-label="SS Family Restaurant on Instagram" target="_blank" rel="noreferrer">
              <IconInstagram width={20} height={20} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h3>Explore</h3>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#reserve">Reserve a Table</a></li>
            <li><a href="#location">Location</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul>
            <li>
              <IconPin width={16} height={16} /> 128 Maple Street, Springfield, IL
            </li>
            <li>
              <IconPhone width={16} height={16} /> (555) 214-8890
            </li>
            <li>
              <IconMail width={16} height={16} /> hello@ssfamilyrestaurant.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} SS Family Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
