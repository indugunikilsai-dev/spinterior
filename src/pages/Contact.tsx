import { ContactForm, ContactList, PageHero } from '../components/Sections'

export default function Contact() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about your space"
        text="Book a free consultation. A designer will call you back within one working day."
        image="/images/villa-1.webp"
      />

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__info reveal">
            <p className="eyebrow">Visit or call</p>
            <h2>We'd love to hear from you</h2>
            <p>
              Visit us to see material samples in person, or send us a few details and we'll come to you.
            </p>
            <ContactList />
          </div>
          <div className="contact__form-wrap reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
