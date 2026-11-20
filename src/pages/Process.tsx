import { useState } from 'react'
import Icon from '../components/Icon'
import { PageHero, ProcessSteps, SectionHead } from '../components/Sections'
import { CONTACT, faqs } from '../data'

const promises = [
  { icon: 'cube', title: '3D before you build', text: 'See your space in photo-realistic 3D before production starts.' },
  { icon: 'check', title: 'Fixed, itemised quote', text: 'The price you approve is the price you pay. No hidden extras.' },
  { icon: 'clock', title: 'Weekly progress updates', text: 'Photos and updates from your dedicated project manager.' },
  { icon: 'home', title: '10-year warranty', text: 'On modular kitchens and wardrobes, plus 1 year of free service.' },
]

export default function Process() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHero
        crumb="Process"
        eyebrow="How we work"
        title="A clear path from idea to handover"
        text="Five simple steps, one dedicated team and no surprises along the way."
        image="/images/office-1.webp"
      />

      <section className="section process process--light">
        <div className="container">
          <SectionHead eyebrow="Our process" title="Five steps to your new space" />
          <ProcessSteps />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our promise" title="What you can count on" />
          <div className="promises">
            {promises.map((p, i) => (
              <article key={p.title} className="promise reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="service__icon">
                  <Icon name={p.icon} size={24} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-wrap">
          <aside className="faq-aside reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Questions we're often asked</h2>
            <p className="faq-aside__text">
              Everything you need to know before starting your project. Can't find your answer? Talk to us
              directly.
            </p>
            <div className="faq-help">
              <strong>Still have questions?</strong>
              <span>Our team usually replies within a few minutes.</span>
              <div className="faq-help__actions">
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn--accent">
                  Chat on WhatsApp
                </a>
                <a href={CONTACT.phoneHref} className="btn btn--outline">
                  <Icon name="phone" size={16} /> Call us
                </a>
              </div>
            </div>
          </aside>

          <div className="faq reveal">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                  <button
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="faq__q">{f.q}</span>
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                  <div className="faq__answer" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    <p>{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
