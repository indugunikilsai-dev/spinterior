import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1>This room doesn't exist.</h1>
        <p>The page you're looking for may have moved or never existed.</p>
        <Link to="/" className="btn btn--accent">
          Back to home <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  )
}
