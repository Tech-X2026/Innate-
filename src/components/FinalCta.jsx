import Reveal from './Reveal'
import { DISCLAIMER } from '../data/content'

export default function FinalCta({ onBook }) {
  return (
    <>
      <Reveal>
        <div className="final">
          <p className="eyebrow">One last thing</p>
          <h2 className="sec-title" style={{ marginTop: 10, fontSize: 27 }}>
            Ready to understand what's <em>really</em> happening beneath the surface?
          </h2>
          <p className="sec-sub">
            Book your ₹299 Money Unblock Call. Clarity creates calm. Calm creates choice. That's where real change begins.
          </p>
          <div style={{ marginTop: 18 }}>
            <button className="cta" onClick={onBook}>
              Book your 1:1 Strategy call @ ₹299
              <small>Only 99 members accepted every 2 months</small>
            </button>
          </div>
          <p className="ps">
            <b>P.S.</b> If you're reading this far, you already know something needs to change. The call is where
            we name it — together, privately, in one hour. — <span className="hand" style={{ fontSize: 14 }}>Payal</span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="disclaimer">
          <p><strong style={{ color: '#c9c2ae' }}>{DISCLAIMER.split(':')[0]}:</strong>{DISCLAIMER.split(':').slice(1).join(':')}</p>
        </div>
        <div className="footer">
          © 2026 The Innate Bliss. All Rights Reserved.<br />
          Questions? <a href="mailto:connect@theinnatebliss.com">connect@theinnatebliss.com</a><br />
          <span style={{ fontSize: 11 }}>1:1 Private Session • 60 Minutes • 100% Confidential</span>
        </div>
      </Reveal>
    </>
  )
}
