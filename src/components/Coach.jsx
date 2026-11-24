import Reveal from './Reveal'

export default function Coach() {
  return (
    <section>
      <Reveal>
        <h2 className="sec-title">
          Meet your coach <em>Payal Gulati</em>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="coach-grid">
          <div className="coach-photo">
            <img src="/images/coach-payal.jpg" alt="Payal Gulati — Founder, The Innate Bliss" />
            <div className="cap">
              <div className="n">Payal Gulati</div>
              <div className="title">Wealth Mindset Coach</div>
              <div className="r">Founder • The Innate Bliss</div>
            </div>
          </div>
          <div className="coach-bio">
            <p>
              <strong>I am Payal Gulati.</strong> I help business owners, entrepreneurs and startup founders
              break money blocks and subconscious patterns that may be holding back their financial growth,
              so they can unlock their potential and achieve the next level of success.
            </p>
            <p>
              Transitioning into mindset coaching taught me a lot, yet my biggest breakthrough came from my
              own journey. Despite working 14-hour days and testing different strategies, pricing models, and
              marketing funnels, my income stayed stuck at the same level.
            </p>
            <p>
              That experience showed me the deeper connection between our subconscious beliefs, emotional
              patterns, and financial results. Rebuilding my own relationship with money became the foundation
              of my <strong>Quantum Wealth Matrix Method</strong>, through which I have helped{' '}
              <strong>200+ business owners</strong> work through their money blocks and build a stronger
              foundation for financial growth.
            </p>

          </div>
        </div>
      </Reveal>
    </section>
  )
}
