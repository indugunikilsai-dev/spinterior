import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { Cta, ProcessSteps, ProjectCard, SectionHead, ServiceCards } from '../components/Sections'
import { projects } from '../data'
import { AREAS } from '../seo'

const HERO_IMAGES = [
  { src: '/images/banjara-1.webp', alt: 'Modern open-plan living room with timber feature wall and kitchen beyond' },
  { src: '/images/kitchen-1.webp', alt: 'Modular kitchen with quartz counter and brass fittings' },
]


// Swaps the large and small hero images every second.
function useHeroSwap(ms = 1000) {
  const [swapped, setSwapped] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setSwapped((v) => !v), ms)
    return () => window.clearInterval(id)
  }, [ms])
  return swapped
}

export default function Home() {
  const featured = projects.slice(0, 5)
  const swapped = useHeroSwap()
  const [main, inset] = swapped ? [HERO_IMAGES[1], HERO_IMAGES[0]] : HERO_IMAGES
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">Interior Designers in Hyderabad</p>
            <h1>
              Spaces that feel <em>personal</em>, crafted to last.
            </h1>
            <p className="hero__lead">
              SP Interior designs and builds homes, kitchens and commercial spaces with considered detail,
              honest pricing and on-time delivery.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--accent">
                Get a free quote <Icon name="arrow" size={18} />
              </Link>
              <Link to="/projects" className="btn btn--ghost">
                View our work
              </Link>
            </div>
          </div>

          <div className="hero__media">
            <figure className="hero__main">
              <img key={main.src} src={main.src} alt={main.alt} fetchPriority="high" />
            </figure>
            <figure className="hero__inset">
              <img key={inset.src} src={inset.src} alt={inset.alt} />
            </figure>
            <div className="hero__tag">
              <span>Residential · Kitchens · Commercial</span>
            </div>
          </div>
        </div>
      </section>


      <section className="intro">
        <div className="container intro__grid">
          <div className="intro__media reveal">
            <img src="/images/about.webp" alt="Bright living room with leather sofa and gallery wall" loading="lazy" />
          </div>
          <div className="intro__copy reveal">
            <p className="eyebrow">About SP Interior</p>
            <h2>Thoughtful design, delivered end to end.</h2>
            <p className="intro__lead">
              A full-service team of designers, project managers and craftsmen. We take your project from the
              first sketch to the final cushion, with one team accountable from start to finish.
            </p>
            <ul className="intro__points">
              <li>
                <span className="intro__icon"><Icon name="cube" size={20} /></span>
                <strong>In-house execution</strong>
                <span>Design, manufacturing and installation under one roof.</span>
              </li>
              <li>
                <span className="intro__icon"><Icon name="check" size={20} /></span>
                <strong>Transparent quotes</strong>
                <span>Itemised pricing with no hidden costs.</span>
              </li>
              <li>
                <span className="intro__icon"><Icon name="clock" size={20} /></span>
                <strong>Weekly updates</strong>
                <span>A dedicated project manager on every job.</span>
              </li>
            </ul>
            <Link to="/projects" className="link-arrow">
              See our work <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <SectionHead
            eyebrow="What we do"
            title="Services built around your space"
            sub="One studio for everything your interior needs, so there's no juggling between contractors."
          >
            <Link to="/services" className="link-arrow">
              All services <Icon name="arrow" size={18} />
            </Link>
          </SectionHead>
          <ServiceCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Selected work" title="Featured projects">
            <Link to="/projects" className="link-arrow">
              View all projects <Icon name="arrow" size={18} />
            </Link>
          </SectionHead>
          <div className="projects__grid">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} wide={i === 0} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <SectionHead
            light
            eyebrow="Our process"
            title="From first meeting to final handover"
            sub="A clear five-step journey, so you always know what happens next."
          >
            <Link to="/process" className="link-arrow link-arrow--light">
              Explore our interior design process <Icon name="arrow" size={18} />
            </Link>
          </SectionHead>
          <ProcessSteps />
        </div>
      </section>

      <section className="section areas">
        <div className="container areas__grid">
          <div className="reveal">
            <p className="eyebrow">Areas we serve</p>
            <h2>Interior designers &amp; home services across Hyderabad</h2>
            <p className="areas__lead">
              From our studio in Kistareddypet, Patancheru, our designers, carpenters, electricians, plumbers and
              painters work in homes and offices all over Hyderabad and Sangareddy. Modular kitchens, wardrobes,
              full home interiors, renovation and everyday repairs, all handled by one team.
            </p>
            <Link to="/services#home-services" className="link-arrow">
              Explore home services <Icon name="arrow" size={18} />
            </Link>
          </div>
          <ul className="areas__list reveal">
            {AREAS.map((a) => (
              <li key={a}>
                <Icon name="pin" size={15} /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="founder">
        <div className="container founder__grid">
          <figure className="founder__media reveal">
            <img src="/images/founder.webp" alt="Shekhar, founder of SP Interior" loading="lazy" />
          </figure>
          <div className="founder__copy reveal">
            <p className="eyebrow">Meet the founder</p>
            <h2>Shekhar</h2>
            <p className="founder__role">Founder, SP Interior</p>
            <blockquote className="founder__quote">
              “Every home we work on is someone's dream. Our job is to build it with honest pricing, careful
              craftsmanship and on-time delivery.”
            </blockquote>
            <p className="founder__text">
              Shekhar leads SP Interior from our studio in Kistareddypet, Patancheru, overseeing every project from
              the first site visit to the final handover.
            </p>
            <Link to="/contact" className="link-arrow">
              Talk to Shekhar <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
