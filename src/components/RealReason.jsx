import Reveal from './Reveal'
import { STUCK_PATTERNS, FOR_YOU } from '../data/content'

export default function RealReason({ onBook }) {
  return (
    <section>
      <Reveal>
        <p className="eyebrow">The real reason you are stuck</p>
        <h2 className="sec-title" style={{ marginTop: 10 }}>
          You're not stuck because you lack <em>discipline or drive.</em>
        </h2>
      </Reveal>

      <div className="rr-grid">
      <Reveal delay={100}>
        <div className="card-dark">
          <p className="big-quote">
            You're stuck because your <em>subconscious money programme</em> is running old patterns.
          </p>
          <p style={{ textAlign: 'center', color: '#c9c2ae', fontSize: 14.5, marginTop: 14 }}>
            Over time, your mind has learned to associate money with:
          </p>
          <div className="pills">
            <span className="pill">Pressure</span>
            <span className="pill">Fear</span>
            <span className="pill">Scarcity</span>
          </div>
          <p style={{ textAlign: 'center', color: '#c9c2ae', fontSize: 14.5 }}>
            Your subconscious is wired to prioritise <strong style={{ color: '#fff' }}>safety — not growth.</strong>{' '}
            When money feels unsafe, your mind shifts into protection mode. Not focused on growth or abundance.
            Focused on avoiding loss.
          </p>
          <p style={{ marginTop: 18, fontWeight: 600, color: '#fff' }}>
            And that's why these patterns keep showing up:
          </p>
          <ul className="checklist">
            {STUCK_PATTERNS.map((p) => (
              <li key={p}><span className="x">✕</span><span>{p}</span></li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--gold-light)', marginTop: 16, lineHeight: 1.5 }}>
            Until your subconscious feels safe with money,<br />no strategy, affirmation, or extra effort will create lasting change.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="vs-label">— &nbsp;This is for you if&nbsp; —</p>
        <div className="card-cream">
          <p style={{ fontFamily: 'var(--serif)', fontSize: 20, textAlign: 'center', lineHeight: 1.4 }}>
            This call is for you <em>if</em> you recognise yourself here:
          </p>
          <ul className="checklist">
            {FOR_YOU.map((p) => (
              <li key={p} className="cream-li"><span className="tick">✓</span><span>{p}</span></li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#6b6455', marginTop: 14 }}>
            If you're looking for quick money hacks or instant financial results, this call is <strong>not</strong> for you.
          </p>
        </div>
        <p className="note-hand"><span className="hand">sound familiar? let's talk ↓</span></p>
        <div style={{ marginTop: 14 }}>
          <button className="cta" onClick={onBook}>
            Book your 1:1 Strategy call @ ₹299
            <small>Up to 1 hour • Private • Confidential</small>
          </button>
        </div>
      </Reveal>
      </div>
    </section>
  )
}
