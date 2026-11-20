import Reveal from './Reveal'

export default function Hero({ onBook }) {
  return (
    <>
      <Reveal>
        <div className="gold-banner">
          For business owners, entrepreneurs, or startup founders stuck at the same income for over a year.
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1>
          Break hidden money blocks and unlock your <em>next income level</em> in 9 weeks
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="lede">
          If you've tried different strategies, pricing models and marketing funnels — yet your income
          stays at the same level — this 1:1 call is where we find what's <strong>actually</strong> keeping you stuck.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <div className="guarantee">
          <div className="gicon">✎</div>
          <div className="gtext">
            <div className="g1">A Written Agreement for Your Results</div>
            <div className="g2">OR 100% OF YOUR MONEY BACK.</div>
            <div className="g3">
              If your application is not accepted after review, your booking amount will be refunded.
              No questions, no hard feelings.
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={280}>
        <div style={{ marginTop: 20 }}>
          <button className="cta" onClick={onBook}>
            Book your 1:1 Strategy call @ ₹299
            <small>100% refundable if your application is not accepted</small>
          </button>
          <p className="cta-note">
            (100% refundable if we can't solve your concerns)
            <span>Up to 1 hour • 1:1 Private • 100% Confidential</span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="strip">
          <div className="slabel">Worked with &nbsp;•&nbsp; Trusted across media &amp; coaching communities</div>
          <div className="srow">
            <div className="sitem"><b>200+</b><small>Business owners guided</small></div>
            <div className="sitem"><b>100M+</b><small>Impressions</small></div>
            <div className="sitem"><b>5 ★</b><small>Rated by clients</small></div>
            <div className="sitem"><b>10k+</b><small>Subscribers</small></div>
          </div>
        </div>
      </Reveal>
    </>
  )
}
