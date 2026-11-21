import { useEffect, useState, type CSSProperties } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CONTACT, NAV, services } from '../data'
import Icon from './Icon'

function useReveal(key: string) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} aria-label="SP Interior home">
      <img
        className="logo__mark"
        src={encodeURI('/images/5 · Signature Script@1x.webp')}
        alt="SP"
        width={84}
        height={56}
      />
      <span className="logo__text">
        Interior<small>Design Studio</small>
      </span>
    </Link>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)

  // Close the mobile menu whenever the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    // Close the menu with Escape, or if the screen grows to desktop size.
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 961px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  return (
    <header className={`header ${scrolled || open ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <nav id="main-nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {NAV.map((n, i) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              onClick={() => setOpen(false)}
              style={{ '--i': i } as CSSProperties}
            >
              <span className="nav__num">0{i + 1}</span>
              <span className="nav__label">{n.label}</span>
              <Icon name="arrow" size={18} />
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--accent nav__cta" onClick={() => setOpen(false)}>
            Book a consultation
          </Link>
          <div className="nav__extra">
            <span className="nav__extra-title">Get in touch</span>
            <a href={CONTACT.phoneHref}>
              <Icon name="phone" size={16} /> {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              <Icon name="mail" size={16} /> Chat on WhatsApp
            </a>
            <span className="nav__extra-loc">
              <Icon name="pin" size={16} /> {CONTACT.shortAddress}
            </span>
          </div>
        </nav>
        <button
          className={`menu-btn ${open ? 'menu-btn--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo light />
          <p className="footer__about">
            Residential and commercial interiors, modular kitchens and turnkey execution across Hyderabad.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>{n.label}</Link>
          ))}
        </div>
        <div>
          <h4>Services</h4>
          {services.slice(0, 5).map((s) => (
            <Link key={s.title} to="/services">{s.title}</Link>
          ))}
          <Link to="/services#home-services">Home Services</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer">{CONTACT.shortAddress}</a>
          <span>{CONTACT.hours}</span>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} SP Interior. All rights reserved.</span>
        <span>Designed with care in Hyderabad</span>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.54 1.74 6.52L3 29l6.65-1.74A12.95 12.95 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3Zm0 23.66c-1.97 0-3.9-.53-5.58-1.53l-.4-.24-3.95 1.03 1.05-3.85-.26-.4A10.6 10.6 0 0 1 5.37 16c0-5.88 4.79-10.66 10.67-10.66 5.87 0 10.63 4.78 10.63 10.66 0 5.88-4.76 10.66-10.63 10.66Zm5.85-7.98c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.3.16.2 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span className="whatsapp__label">Chat with us</span>
    </a>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) {
      target.classList.add('is-visible')
      target.scrollIntoView({ behavior: 'instant', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  useReveal(pathname)

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
