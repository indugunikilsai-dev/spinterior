import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, process, services, slug, testimonials, type Project } from '../data'
import Icon from './Icon'

/* ---------- page banner for inner pages ---------- */

export function PageHero({
  title,
  eyebrow,
  text,
  image,
  crumb,
}: {
  title: string
  eyebrow: string
  text?: string
  image: string
  crumb: string
}) {
  return (
    <section className="page-hero">
      <img className="page-hero__bg" src={image} alt="" />
      <div className="page-hero__shade" />
      <div className="container page-hero__content">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
      </div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
  children,
}: {
  eyebrow: string
  title: string
  sub?: string
  light?: boolean
  children?: ReactNode
}) {
  return (
    <div className={`section__head ${light ? 'section__head--light' : ''} ${children ? 'section__head--split' : ''} reveal`}>
      <div>
        <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</p>
        <h2>{title}</h2>
        {sub && <p className="section__sub">{sub}</p>}
      </div>
      {children}
    </div>
  )
}

/* ---------- project card ---------- */

export function ProjectCard({ project, wide = false, delay = 0 }: { project: Project; wide?: boolean; delay?: number }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className={`project ${wide ? 'project--wide' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={project.images[0]} alt={project.title} loading="lazy" />
      <span className="project__overlay">
        <span className="project__meta">
          {project.category} · {project.year}
        </span>
        <span className="project__title">{project.title}</span>
        <span className="project__loc">
          <Icon name="pin" size={15} /> {project.location}
        </span>
        <span className="project__view">
          View project <Icon name="arrow" size={16} />
        </span>
      </span>
    </Link>
  )
}

/* ---------- service cards ---------- */

export function ServiceCards() {
  return (
    <div className="services__grid">
      {services.map((s, i) => (
        <div key={s.title} className="reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
          <Link to={`/services#${slug(s.title)}`} className="svc-card">
            <div className="svc-card__media">
              <div className="svc-card__img">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <span className="svc-card__num">
                0{i + 1}
                <small>/ 0{services.length}</small>
              </span>
              <span className="svc-card__icon">
                <Icon name={s.icon} size={24} />
              </span>
            </div>
            <div className="svc-card__body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="svc-card__points">
                {s.points.slice(0, 2).map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} /> {p}
                  </li>
                ))}
              </ul>
              <span className="svc-card__link">
                Explore service <Icon name="arrow" size={16} />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

/* ---------- process steps ---------- */

export function ProcessSteps() {
  return (
    <ol className="process__list">
      {process.map((p, i) => (
        <li key={p.step} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
          <span className="process__step">{p.step}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </li>
      ))}
    </ol>
  )
}

/* ---------- testimonials ---------- */

export function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [paused])

  const t = testimonials[i]
  return (
    <section className="section testimonials">
      <div
        className="container testimonials__inner reveal"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="eyebrow">Client stories</p>
        <span className="testimonials__mark">
          <Icon name="quote" size={40} />
        </span>
        <blockquote key={i}>
          <p>{t.quote}</p>
          <footer>
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </footer>
        </blockquote>
        <div className="testimonials__dots">
          {testimonials.map((x, k) => (
            <button
              key={x.name}
              className={k === i ? 'active' : ''}
              aria-label={`Show testimonial ${k + 1}`}
              onClick={() => setI(k)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA banner ---------- */

export function Cta({
  title = "Have a space in mind? Let's design it together.",
  text = 'Book a free consultation and receive a concept moodboard within 7 days.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="cta">
      <img src="/images/exterior.webp" alt="" loading="lazy" />
      <div className="cta__shade" />
      <div className="container cta__inner reveal">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to="/contact" className="btn btn--light">
          Book a free consultation <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  )
}

/* ---------- contact ---------- */

export function ContactList() {
  return (
    <ul className="contact__list">
      <li>
        <Icon name="pin" />
        <span>
          <strong>Address</strong>
          <a href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a>
        </span>
      </li>
      <li>
        <Icon name="phone" />
        <span>
          <strong>Call us</strong>
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        </span>
      </li>
      <li>
        <Icon name="mail" />
        <span>
          <strong>Email</strong>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </span>
      </li>
      <li>
        <Icon name="clock" />
        <span>
          <strong>Working hours</strong>
          {CONTACT.hours}
        </span>
      </li>
    </ul>
  )
}

type FormState = { name: string; phone: string; email: string; type: string; budget: string; message: string }
const EMPTY: FormState = {
  name: '',
  phone: '',
  email: '',
  type: 'Full home interiors',
  budget: '₹1 lakh',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [sent, setSent] = useState(false)
  const [waLink, setWaLink] = useState('')

  const update = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const errs: typeof errors = {}
    if (form.name.trim().length < 2) errs.name = 'Please enter your name'
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errs.email = 'Enter a valid email address'
    setErrors(errs)
    if (Object.keys(errs).length) return
    // Build the enquiry as a formatted WhatsApp text message and send it to the studio number.
    const when = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    const text = [
      '*New enquiry – SP Interior website*',
      '',
      `*Name:* ${form.name.trim()}`,
      `*Phone:* ${form.phone.trim()}`,
      `*Email:* ${form.email.trim()}`,
      `*Interested in:* ${form.type}`,
      `*Budget:* ${form.budget.trim() || '(not provided)'}`,
      '',
      '*Project details:*',
      form.message.trim() || '(not provided)',
      '',
      `_Sent from the website contact form on ${when}_`,
    ].join('\n')
    const url = `${CONTACT.whatsappBase}?text=${encodeURIComponent(text)}`
    setWaLink(url)
    // Open WhatsApp in a new tab; if the browser blocks pop-ups, open it in this tab instead.
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    else window.location.href = url
    setSent(true)
    setForm(EMPTY)
  }

  if (sent) {
    return (
      <div className="form-success">
        <span className="form-success__icon">
          <Icon name="check" size={32} />
        </span>
        <h3>Thank you!</h3>
        <p>
          Your enquiry is ready in WhatsApp. Tap <strong>Send</strong> there and a designer will reach out within one
          working day.
        </p>
        <div className="form-success__actions">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
            WhatsApp didn't open? Tap here
          </a>
          <button className="btn btn--outline" onClick={() => setSent(false)}>
            Send another enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form__row">
        <label className={errors.name ? 'has-error' : ''}>
          <span>Full name *</span>
          <input value={form.name} onChange={update('name')} autoComplete="name" />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label className={errors.phone ? 'has-error' : ''}>
          <span>Phone *</span>
          <input value={form.phone} onChange={update('phone')} type="tel" autoComplete="tel" />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
      </div>
      <label className={errors.email ? 'has-error' : ''}>
        <span>Email *</span>
        <input value={form.email} onChange={update('email')} type="email" autoComplete="email" />
        {errors.email && <small>{errors.email}</small>}
      </label>
      <div className="form__row">
        <label>
          <span>I'm interested in</span>
          <select value={form.type} onChange={update('type')}>
            <option>Full home interiors</option>
            <option>Modular kitchen</option>
            <option>Wardrobes & storage</option>
            <option>Commercial / office</option>
            <option>Renovation</option>
          </select>
        </label>
        <label>
          <span>Budget</span>
          <input
            value={form.budget}
            onChange={update('budget')}
            type="text"
            placeholder="e.g. ₹1 lakh"
          />
        </label>
      </div>
      <label>
        <span>Tell us about your project</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          placeholder="Property type, size, location, timeline…"
        />
      </label>
      <button type="submit" className="btn btn--accent btn--block">
        Send
      </button>
      <p className="form__note">Your details are sent as a WhatsApp message to {CONTACT.phone}.</p>
    </form>
  )
}
