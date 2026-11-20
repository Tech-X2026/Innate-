import Reveal from './Reveal'
import { STEPS } from '../data/content'

export default function HowToStart({ onBook }) {
  return (
    <section>
      <Reveal>
        <p className="eyebrow">How to get started?</p>
        <h2 className="sec-title" style={{ marginTop: 10 }}>
          Simple. <em>Private.</em> By application only.
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="card-dark">
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={i}>
                <div className="num">{i + 1}</div>
                <div className="st">
                  <strong>{s.strong}</strong>
                  {s.email ? (
                    <>
                      {s.rest.split('connect@')[0]}
                      <a href="mailto:connect@theinnatebliss.com">connect@theinnatebliss.com</a>
                    </>
                  ) : (
                    s.rest
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="seats">
            <p>
              <b>Limited Seats.</b> Registration closes soon — <b>99 seats per 2 months</b> only, so every
              application is reviewed personally.
            </p>
            <div className="bar"><i /></div>
            <p style={{ marginTop: 8, fontSize: 12, color: '#a8a29a' }}>
              Applications are reviewed in the order they arrive. Early applicants get priority scheduling.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div style={{ marginTop: 18 }}>
          <button className="cta" onClick={onBook}>
            Book your 1:1 Strategy call @ ₹299
            <small>Complete the application after booking</small>
          </button>
        </div>
      </Reveal>
    </section>
  )
}
