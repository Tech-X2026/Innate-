import Reveal from './Reveal'

export default function Coach({ onBook }) {
  return (
    <section>
      <Reveal>
        <p className="eyebrow">Meet your coach</p>
        <h2 className="sec-title" style={{ marginTop: 10 }}>
          Meet <em>Payal Gulati</em>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="coach-grid">
          <div className="coach-photo">
            <img src="/images/coach-payal.webp" alt="Payal Gulati — Founder, The Innate Bliss" />
            <div className="cap">
              <div className="n">Payal Gulati</div>
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
            <div className="chips">
              <span className="chip">NLP Master Coach</span>
              <span className="chip">EFT Specialist</span>
              <span className="chip">Ho'oponopono Healer</span>
              <span className="chip">Subconscious Reprogramming</span>
              <span className="chip">Former Media Journalist</span>
            </div>
            <div className="sig">
              <span className="s1">Payal Gulati</span>
              <div className="s2">Founder • The Innate Bliss</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
