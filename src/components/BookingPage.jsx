import Reveal from './Reveal'
import { BOOKING_BULLETS, RAZORPAY_LINK, DISCLAIMER } from '../data/content'

export default function BookingPage({ onBack }) {
  return (
    <div className="page-in">
      <header className="topbar">
        <div className="brand" style={{ fontSize: 28 }}>PAYAL GULATI</div>
        <div className="brand-sub">The Innate Bliss • 1:1 Strategy Call</div>
      </header>
      <div className="wrap">
        <button className="backlink" onClick={onBack}>← Back to details</button>
        <div className="gold-banner" style={{ marginTop: 18 }}>
          Limited Seats. Registration Closes Soon — 99 per 2 months
        </div>
        <h1 style={{ fontSize: 32 }}>
          Book Your 1:1 Strategy Call With <em>Payal Gulati</em>
        </h1>
        <p className="lede">
          This 1:1 call is for business owners, entrepreneurs or startup founders who feel stuck on the same
          income level despite trying different strategies and are ready to move to the next level.
        </p>

        <Reveal>
          <div className="card-dark">
            <p style={{ fontWeight: 600, color: '#fff', fontSize: 16 }}>In this call of up to 1 hour, we'll:</p>
            <ul className="checklist">
              {BOOKING_BULLETS.map((b) => (
                <li key={b}><span className="tick">✓</span><span>{b}</span></li>
              ))}
            </ul>
            <div className="secure">
              <span>🔒 Secure payment via Razorpay</span><span>UPI</span><span>Cards</span><span>NetBanking</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="price-card">
            <div className="p1">1:1 Private Session • Up to 60 Minutes</div>
            <div className="p2">₹299</div>
            <div className="p3">One-time booking • Refunded if your application is not accepted</div>
          </div>
          <p className="pay-note">
            Once you pay <b>₹299</b>, you'll be taken to the next page to complete your <b>application form</b>.
            We'll review it and contact you if you are qualified.
          </p>
          {/* Replace href with your Razorpay Payment Link */}
          <div style={{ marginTop: 18 }}>
            <a href={RAZORPAY_LINK} target="_blank" rel="noopener noreferrer" className="cta">
              Next →
              <small>It will take you to our secure Razorpay payment gateway</small>
            </a>
            <p className="micro">
              By clicking Next, you agree to be redirected to Razorpay to complete your ₹299 payment securely.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div style={{ marginTop: 22 }}>
            <p className="eyebrow">What happens after payment?</p>
            <div className="after">
              <div className="a"><span className="tick">1</span><span><b>Pay ₹299 securely</b> via Razorpay (UPI / Card / NetBanking).</span></div>
              <div className="a"><span className="tick">2</span><span><b>Complete your application form</b> carefully — this helps us understand your current income level and goals.</span></div>
              <div className="a"><span className="tick">3</span><span><b>We review &amp; confirm</b> your call slot. If not accepted, your amount is refunded automatically.</span></div>
            </div>
          </div>
          <p className="micro" style={{ marginTop: 20 }}>
            Any questions? <a href="mailto:connect@theinnatebliss.com">connect@theinnatebliss.com</a>
          </p>
          <div className="disclaimer" style={{ marginBottom: 40 }}>
            <p><strong style={{ color: '#c9c2ae' }}>{DISCLAIMER.split(':')[0]}:</strong>{DISCLAIMER.split(':').slice(1).join(':')}</p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
