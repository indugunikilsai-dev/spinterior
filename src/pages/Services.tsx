import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, SectionHead } from '../components/Sections'
import { CONTACT, homeServices, services, slug } from '../data'

const HOME_PERKS = [
  { icon: 'shield', title: 'Verified craftsmen', text: 'Background-checked, trained in-house' },
  { icon: 'clock', title: 'Quick visits', text: 'Site visit within 24–48 hours' },
  { icon: 'check', title: 'Fixed quotes', text: 'Price agreed before work starts' },
  { icon: 'sparkle', title: 'Clean handover', text: 'Site cleared, work guaranteed' },
]

const bookLink = (service: string) =>
  `${CONTACT.whatsappBase}?text=${encodeURIComponent(`Hi SP Interior, I need help with ${service.toLowerCase()} at my home.`)}`

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Everything your interior needs"
        text="Design, manufacturing, installation and everyday home services, delivered by one accountable team."
        image="/images/kitchen-1.webp"
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our services"
            title="Six ways we can help"
            sub="Pick one service or combine them into a complete turnkey project."
          >
            <a href="#home-services" className="link-arrow">
              Home services <Icon name="arrow" size={18} />
            </a>
          </SectionHead>
          <div className="service-rows">
            {services.map((s, i) => (
              <article
                key={s.title}
                id={slug(s.title)}
                className={`service-row reveal ${i % 2 ? 'service-row--flip' : ''}`}
              >
                <div className="service-row__media">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <div className="service-row__copy">
                  <span className="service__icon">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <span className="service-row__num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="checklist">
                    {s.points.map((p) => (
                      <li key={p}>
                        <Icon name="check" size={18} /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="link-arrow">
                    Enquire about this <Icon name="arrow" size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- home services ---------- */}
      <section className="hs-hero" id="home-services">
        <img className="hs-hero__bg" src="/images/bath-2.webp" alt="" loading="lazy" />
        <div className="hs-hero__shade" />
        <div className="container hs-hero__inner">
          <div className="hs-hero__copy reveal">
            <p className="eyebrow eyebrow--light">Home Services</p>
            <h2>
              Every repair, every upgrade. <em>One trusted team.</em>
            </h2>
            <p className="hs-hero__lead">
              Carpenters, electricians, plumbers, painters and more, all from SP Interior. Small fix or full
              makeover, our own skilled crew gets it done properly, on time and at a fair price.
            </p>
            <div className="hs-hero__actions">
              <a
                href={bookLink('a home service')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--accent"
              >
                <Icon name="whatsapp" size={18} /> Book on WhatsApp
              </a>
              <a href={CONTACT.phoneHref} className="btn btn--ghost">
                <Icon name="phone" size={18} /> {CONTACT.phone}
              </a>
            </div>
          </div>

          <ul className="hs-hero__perks reveal">
            {HOME_PERKS.map((p) => (
              <li key={p.title}>
                <span className="hs-hero__perk-icon">
                  <Icon name={p.icon} size={20} />
                </span>
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section hs">
        <div className="container">
          <SectionHead
            eyebrow="All trades, one call"
            title="Skilled hands for every job"
            sub="From a loose hinge to a full rewiring, choose the service you need and we'll send the right expert."
          />
          <div className="hs__grid">
            {homeServices.map((s, i) => (
              <article
                key={s.title}
                id={slug(s.title)}
                className="hs-card reveal"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <div className="hs-card__top">
                  <span className="hs-card__icon">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <span className="hs-card__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="hs-card__tasks">
                  {s.tasks.map((t) => (
                    <li key={t}>
                      <Icon name="check" size={15} /> {t}
                    </li>
                  ))}
                </ul>
                <a href={bookLink(s.title)} target="_blank" rel="noopener noreferrer" className="hs-card__book">
                  Book this service <Icon name="arrow" size={16} />
                </a>
              </article>
            ))}
          </div>

          <div className="hs-band reveal">
            <div>
              <h3>Don't see what you need?</h3>
              <p>Tell us about the job. If it's in your home, we can most likely handle it.</p>
            </div>
            <Link to="/contact" className="btn btn--accent">
              Request a visit <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
