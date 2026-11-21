import Reveal from './Reveal'
import { STUCK_PATTERNS } from '../data/content'

export default function RealReason() {
  return (
    <section>
      <Reveal>
        <div className="clean-reason-card">
          <h2 className="sec-title" style={{ fontSize: 'clamp(1.4rem, 4.2vw, 2.1rem)', lineHeight: 1.25, marginBottom: 20 }}>
            The real reason you are stuck is because your <em>subconscious money programme</em> is running old patterns.
          </h2>

          <p style={{ textAlign: 'center', color: '#c9c2ae', fontSize: '1rem', marginTop: 16 }}>
            Over time, your mind has learned to associate money with:
          </p>

          <div className="pills">
            <span className="pill">Pressure</span>
            <span className="pill">Fear</span>
            <span className="pill">Scarcity</span>
          </div>

          <p style={{ textAlign: 'center', color: '#d8d2c2', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: 640, margin: '0 auto' }}>
            Your subconscious is wired to prioritise <strong style={{ color: '#fff' }}>safety — not growth.</strong>{' '}
            When money feels unsafe, your mind shifts into protection mode. Not focused on growth or abundance.
            Focused on avoiding loss.
          </p>

          <div style={{ marginTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24 }}>
            <p style={{ textAlign: 'center', fontWeight: 700, color: '#fff', fontSize: '1.0625rem', marginBottom: 18 }}>
              And that's why these patterns keep showing up:
            </p>

            <ul className="ref-bullets-list">
              {STUCK_PATTERNS.map((p) => (
                <li key={p} className="ref-bullet-item">
                  <span className="ref-bullet-dot">•</span>
                  <span className="ref-bullet-text">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
