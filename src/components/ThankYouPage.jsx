import Reveal from './Reveal'
import { PRECALL_YOUTUBE_EMBED, ASSIGNMENT_FORM_URL } from '../data/content'

export default function ThankYouPage({ onHome, paymentData }) {
  const paymentId = paymentData?.razorpay_payment_id

  return (
    <div className="page-in">
      <header className="topbar">
        <div className="brand" style={{ fontSize: 28 }}>PAYAL GULATI</div>
        <div className="brand-sub">The Innate Bliss • 1:1 Strategy Call</div>
      </header>

      <div className="wrap">
        <button type="button" className="backlink" onClick={onHome}>
          ← Back to Homepage
        </button>

        <Reveal>
          <div className="thankyou-card">
            <div className="thankyou-check">✓</div>
            <h1 className="thankyou-title">
              Payment <em>Confirmed</em>
            </h1>

            {paymentId && (
              <p className="thankyou-payment-id">
                Payment ID: <strong>{paymentId}</strong>
              </p>
            )}

            <p className="thankyou-lead">
              <strong>Your Next Step:</strong> Watch the Video &amp; Complete the Application Form Below
            </p>

            {/* STEP 1: Pre-call Video */}
            <div className="thankyou-step-box">
              <span className="step-badge">Step 1: Required Watching</span>
              <h2 className="step-box-title">Watch Your <em>Pre-Call Video</em></h2>
              <p className="step-box-desc">
                Please watch this video before filling out your application form so you understand how we will diagnose and break your money blocks.
              </p>
              <div className="thankyou-video-frame">
                <iframe
                  src={PRECALL_YOUTUBE_EMBED}
                  title="Pre-Call Video — Payal Gulati"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* STEP 2: Application Form */}
            <div className="thankyou-step-box" style={{ marginTop: 32 }}>
              <span className="step-badge">Step 2: Action Item</span>
              <h2 className="step-box-title"><em>Application Form</em></h2>
              <p className="step-box-desc">
                Please complete this application form carefully. Payal personally reviews your answers before your call to craft your personalized breakthrough plan.
              </p>

              <div style={{ margin: '20px 0 6px', textAlign: 'center' }}>
                <a
                  href={ASSIGNMENT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta thankyou-form-btn"
                >
                  Application Form ↗
                </a>
              </div>
            </div>

            <div className="thankyou-footer-note">
              <p>
                Have any questions? Write to us at{' '}
                <a href="mailto:connect@theinnatebliss.com">connect@theinnatebliss.com</a>
              </p>
              <button
                type="button"
                className="backlink"
                onClick={onHome}
                style={{ marginTop: 16 }}
              >
                ← Return to Homepage
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
