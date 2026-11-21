import Reveal from './Reveal'
import { STEPS } from '../data/content'

export default function HowToStart() {
  return (
    <section>
      <Reveal>
        <div className="ref-box-card">
          <h2 className="ref-box-title">
            How to get <em>started</em>
          </h2>

          <ul className="ref-bullets-list">
            {STEPS.map((s, i) => (
              <li key={i} className="ref-bullet-item">
                <span className="ref-bullet-dot">•</span>
                <span className="ref-bullet-text">
                  <strong>{s.strong}</strong>
                  {s.email ? (
                    <span className="ref-bullet-break">
                      <a href="mailto:connect@theinnatebliss.com">connect@theinnatebliss.com</a>
                    </span>
                  ) : (
                    s.rest
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
