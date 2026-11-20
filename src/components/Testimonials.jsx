import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/content'

// Simple carousel: slide transform + auto-play + swipe. No library needed.
export default function Testimonials({ onBook }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const startX = useRef(null)
  const total = TESTIMONIALS.length

  const go = useCallback((n) => setIdx(((n % total) + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 6000)
    return () => clearInterval(t)
  }, [paused, total])

  return (
    <section>
      <Reveal>
        <p className="eyebrow">Client testimonials</p>
        <h2 className="sec-title" style={{ marginTop: 10 }}>
          Real clients. <em>Real shifts.</em>
        </h2>
        <p className="sec-sub">
          Swipe through what business owners say after working on their money patterns. Figures as stated by each client.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div
          className="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="c-viewport"
            onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (startX.current === null) return
              const dx = e.changedTouches[0].clientX - startX.current
              if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1))
              startX.current = null
            }}
          >
            <div className="c-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
              {TESTIMONIALS.map((t) => (
                <div className="c-slide" key={t.id}>
                  <div className="stars">★★★★★</div>
                  <p className="t-quote">“{t.quote}”</p>
                  <div className="t-person">
                    <div className="avatar">{t.initials}</div>
                    <div>
                      <div className="n">{t.name}</div>
                      <div className="r">{t.role}</div>
                    </div>
                  </div>
                  <div className="t-badge-wrap"><span className="t-badge">{t.badge}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="c-nav">
            <button className="c-btn" onClick={() => go(idx - 1)} aria-label="Previous testimonial">‹</button>
            <div style={{ textAlign: 'center' }}>
              <div className="c-dots">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.id}
                    className={i === idx ? 'on' : ''}
                    onClick={() => go(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="c-count" style={{ marginTop: 6 }}>{idx + 1} / {total}</div>
            </div>
            <button className="c-btn" onClick={() => go(idx + 1)} aria-label="Next testimonial">›</button>
          </div>
        </div>
        <p className="micro" style={{ marginTop: 12 }}>
          Results shown are as stated by clients and are not typical. Individual results vary.
        </p>
        <div style={{ marginTop: 16 }}>
          <button className="cta" onClick={onBook}>
            Book your 1:1 Strategy call @ ₹299
            <small>Your turn to be the next story</small>
          </button>
        </div>
      </Reveal>
    </section>
  )
}
