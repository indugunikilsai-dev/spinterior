import { useState } from 'react'
import { PageHero, ProjectCard } from '../components/Sections'
import { projects, type Category } from '../data'

const FILTERS: ('All' | Category)[] = ['All', 'Residential', 'Commercial', 'Kitchen & Bath']

export default function Projects() {
  const [filter, setFilter] = useState<'All' | Category>('All')
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        crumb="Projects"
        eyebrow="Portfolio"
        title="Spaces we've brought to life"
        text="A selection of homes, kitchens and commercial spaces designed and delivered by our studio."
        image="/images/penthouse-1.webp"
      />

      <section className="section">
        <div className="container">
          <div className="projects__toolbar">
            <p>
              Showing <strong>{list.length}</strong> {list.length === 1 ? 'project' : 'projects'}
            </p>
            <div className="filters" role="tablist" aria-label="Filter projects">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  className={filter === f ? 'active' : ''}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="projects__grid" key={filter}>
            {list.map((p, i) => (
              <ProjectCard key={p.id} project={p} wide={i === 0 && filter === 'All'} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
