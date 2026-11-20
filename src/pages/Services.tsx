import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, SectionHead } from '../components/Sections'
import { services, slug } from '../data'

export default function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Everything your interior needs"
        text="Design, manufacturing and installation, delivered by one accountable team."
        image="/images/kitchen-1.webp"
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our services"
            title="Six ways we can help"
            sub="Pick one service or combine them into a complete turnkey project."
          />
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

    </>
  )
}
