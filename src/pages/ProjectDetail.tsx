import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { ProjectCard, SectionHead } from '../components/Sections'
import { projects } from '../data'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { id } = useParams()
  const index = projects.findIndex((p) => p.id === id)
  const [shown, setShown] = useState({ id, img: 0 })

  if (index === -1) return <NotFound />

  const project = projects[index]
  // Reset to the first image when moving to another project.
  const img = shown.id === id ? shown.img : 0
  const setImg = (i: number) => setShown({ id, img: i })

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)
  const more = related.length ? related : projects.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <>
      <section className="detail-hero">
        <img key={project.id} className="detail-hero__bg" src={project.images[0]} alt="" />
        <div className="page-hero__shade" />
        <div className="container page-hero__content">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/projects">Projects</Link>
            <span>/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <p className="eyebrow eyebrow--light">
            {project.category} · {project.year}
          </p>
          <h1>{project.title}</h1>
          <p className="page-hero__text">
            <Icon name="pin" size={16} /> {project.location}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container detail__grid">
          <div className="detail__gallery reveal">
            <div className="detail__main">
              <img key={project.images[img]} src={project.images[img]} alt={`${project.title}, image ${img + 1}`} />
              {project.images.length > 1 && (
                <>
                  <button
                    className="lightbox__nav lightbox__nav--prev"
                    aria-label="Previous image"
                    onClick={() => setImg((img - 1 + project.images.length) % project.images.length)}
                  >
                    <Icon name="left" />
                  </button>
                  <button
                    className="lightbox__nav lightbox__nav--next"
                    aria-label="Next image"
                    onClick={() => setImg((img + 1) % project.images.length)}
                  >
                    <Icon name="right" />
                  </button>
                </>
              )}
            </div>
            {project.images.length > 1 && (
              <div className="detail__thumbs">
                {project.images.map((src, i) => (
                  <button
                    key={src}
                    className={i === img ? 'active' : ''}
                    aria-label={`Show image ${i + 1}`}
                    onClick={() => setImg(i)}
                  >
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="detail__info reveal">
            <p className="eyebrow">The brief</p>
            <h2>{project.style}</h2>
            <p className="detail__summary">{project.summary}</p>
            <dl className="facts">
              <div><dt>Location</dt><dd>{project.location}</dd></div>
              <div><dt>Area</dt><dd>{project.area}</dd></div>
              <div><dt>Category</dt><dd>{project.category}</dd></div>
              <div><dt>Completed</dt><dd>{project.year}</dd></div>
            </dl>
            <p className="facts__label">Scope of work</p>
            <ul className="tags">
              {project.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn--accent">
              Start a similar project
            </Link>
          </aside>
        </div>

        <div className="container detail__pager">
          <Link to={`/projects/${prev.id}`}>
            <Icon name="left" size={20} />
            <span>
              <small>Previous project</small>
              {prev.title}
            </span>
          </Link>
          <Link to="/projects" className="detail__all">All projects</Link>
          <Link to={`/projects/${next.id}`} className="detail__pager-next">
            <span>
              <small>Next project</small>
              {next.title}
            </span>
            <Icon name="right" size={20} />
          </Link>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <SectionHead eyebrow="Keep exploring" title="You may also like" />
          <div className="projects__grid">
            {more.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
