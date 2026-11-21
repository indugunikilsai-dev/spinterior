/* eslint-disable react-refresh/only-export-components -- build-time server entry, not hot-reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'

export { getSeo, headTags, pageImages, ROUTES, SITE_URL } from './seo'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}
