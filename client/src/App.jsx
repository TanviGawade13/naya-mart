import { useEffect, useState } from 'react'
import { getApiHealth } from './lib/api.js'

function App() {
  const [health, setHealth] = useState({ status: 'checking' })

  async function checkApi() {
    setHealth({ status: 'checking' })

    try {
      const data = await getApiHealth()
      setHealth({ status: 'connected', data })
    } catch (error) {
      setHealth({
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown API error',
      })
    }
  }

  useEffect(() => {
    getApiHealth()
      .then((data) => setHealth({ status: 'connected', data }))
      .catch((error) => {
        setHealth({
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown API error',
        })
      })
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="NayaMart home">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span>Naya<span className="brand-accent">Mart</span></span>
        </a>
        <nav className="topbar-nav" aria-label="Main navigation">
          <a href="#foundation">The foundation</a>
          <a href="#roadmap">Build roadmap</a>
        </nav>
        <span className="phase-tag">LEARNING BUILD <span aria-hidden="true">·</span> 01 / 08</span>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT GREAT FIND STARTS HERE</p>
            <h1 id="hero-title">A marketplace<br />made for <span>everyone.</span></h1>
            <p className="hero-description">
              A home for good finds and independent sellers. We&apos;re building
              the essentials first, one working piece at a time.
            </p>
            <a className="primary-link" href="#foundation">
              Explore what&apos;s built <span aria-hidden="true">↓</span>
            </a>
            <div className="hero-proof">
              <span className="proof-icon" aria-hidden="true">✓</span>
              <span>Customer, seller &amp; admin journeys — coming together</span>
            </div>
          </div>

          <aside className="connection-card" aria-live="polite" aria-label="API connection status">
            <div className="card-topline">
              <span className="card-label">LIVE SYSTEM CHECK</span>
              <span className={`status-indicator status-${health.status}`}>
                <span className="status-dot" />
                {health.status === 'connected' ? 'API online' : health.status === 'checking' ? 'Checking' : 'API offline'}
              </span>
            </div>
            <div className="terminal-window">
              <div className="terminal-heading">
                <span /><span /><span />
                <small>GET /api/health</small>
              </div>
              <div className="terminal-content">
                {health.status === 'connected' ? (
                  <>
                    <p><span className="terminal-key">service</span><span className="terminal-value">&quot;{health.data.service}&quot;</span></p>
                    <p><span className="terminal-key">status</span><span className="terminal-success">&quot;{health.data.status}&quot;</span></p>
                    <p><span className="terminal-key">database</span><span className="terminal-value">&quot;{health.data.database.state}&quot;</span></p>
                  </>
                ) : health.status === 'checking' ? (
                  <p className="terminal-muted">Connecting to the API…</p>
                ) : (
                  <p className="terminal-error">{health.message}</p>
                )}
              </div>
            </div>
            <div className="card-footer">
              <span>{health.status === 'connected' && !health.data.database.configured ? 'Database will be enabled in a later phase' : 'React ↔ Express'}</span>
              <button type="button" onClick={checkApi} disabled={health.status === 'checking'}>
                Check again <span aria-hidden="true">↗</span>
              </button>
            </div>
          </aside>

          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
        </section>

        <section className="foundation-section" id="foundation" aria-labelledby="foundation-title">
          <div className="section-heading">
            <p className="eyebrow">PHASE 01 <span aria-hidden="true">/</span> THE FOUNDATION</p>
            <h2 id="foundation-title">Start with the right building blocks.</h2>
            <p>Before products and checkout, every marketplace needs a reliable place to run.</p>
          </div>
          <div className="foundation-grid">
            <article className="foundation-card">
              <span className="card-number">01</span>
              <h3>React storefront</h3>
              <p>The browser experience. Vite serves the app and forwards API calls during development.</p>
              <span className="tech-label">CLIENT · REACT + VITE</span>
            </article>
            <article className="foundation-card">
              <span className="card-number">02</span>
              <h3>Express API</h3>
              <p>A separate Node.js service handles requests. Its health check is the first working route.</p>
              <span className="tech-label">SERVER · NODE + EXPRESS</span>
            </article>
            <article className="foundation-card">
              <span className="card-number">03</span>
              <h3>MongoDB ready</h3>
              <p>Mongoose is wired in. You can start without a database today and connect one when ready.</p>
              <span className="tech-label">DATA · MONGODB + MONGOOSE</span>
            </article>
          </div>
        </section>

        <section className="roadmap-section" id="roadmap" aria-labelledby="roadmap-title">
          <div className="roadmap-intro">
            <p className="eyebrow">THE LEARNING PATH</p>
            <h2 id="roadmap-title">Small steps.<br /><span>Real progress.</span></h2>
            <p>Each phase adds a working slice and the concepts behind it. No giant rewrite at the end.</p>
          </div>
          <ol className="roadmap-list">
            <li className="roadmap-current"><span>01</span><div><strong>Project foundation</strong><small>Now · React, API &amp; dev workflow</small></div><span className="roadmap-state">IN PROGRESS</span></li>
            <li><span>02</span><div><strong>Identity &amp; access</strong><small>Customer, seller and admin accounts</small></div></li>
            <li><span>03</span><div><strong>Seller catalog</strong><small>Self-service products and inventory</small></div></li>
            <li><span>04</span><div><strong>Customer storefront</strong><small>Product discovery, search and filters</small></div></li>
            <li><span>05</span><div><strong>Cart &amp; checkout</strong><small>Addresses and mock payment</small></div></li>
            <li><span>06</span><div><strong>Multi-seller orders</strong><small>Split orders and seller fulfillment</small></div></li>
            <li><span>07</span><div><strong>Admin operations</strong><small>Marketplace oversight and safeguards</small></div></li>
            <li><span>08</span><div><strong>Quality &amp; delivery</strong><small>Tests, polish and deployment</small></div></li>
          </ol>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span>Naya<span className="brand-accent">Mart</span></span>
        </a>
        <span>A learning build for a marketplace with many sellers.</span>
        <span>MADE TO LEARN, BUILT TO GROW</span>
      </footer>
    </div>
  )
}

export default App
