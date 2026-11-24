import { useState } from 'react'
import Reveal from './Reveal'
import { BOOKING_BULLETS, RAZORPAY_KEY_ID } from '../data/content'

export default function BookingPage({ onBack, onSuccess }) {
  const [errorMsg, setErrorMsg] = useState('')

  const handlePay = () => {
    setErrorMsg('')
    if (typeof window === 'undefined') return

    if (!RAZORPAY_KEY_ID) {
      setErrorMsg('Payment gateway is not configured. Please contact support.')
      return
    }

    const openCheckout = () => {
      try {
        const options = {
          key: RAZORPAY_KEY_ID,
          amount: 29900, // ₹299 in paise
          currency: 'INR',
          name: 'The Innate Bliss',
          description: '1:1 Strategy Call with Payal Gulati',
          image: '/images/logo.png',
          handler: function (response) {
            if (onSuccess) {
              onSuccess(response)
            }
          },
          prefill: {
            name: '',
            email: '',
            contact: '',
          },
          notes: {
            session: '1:1 Strategy Call',
            coach: 'Payal Gulati',
          },
          theme: {
            color: '#d4af37',
          },
        }

        const rzp = new window.Razorpay(options)
        rzp.on('payment.failed', function (response) {
          setErrorMsg(response?.error?.description || 'Payment was cancelled or failed. Please try again.')
        })
        rzp.open()
      } catch (err) {
        console.error('Razorpay error:', err)
        setErrorMsg('Could not open payment window. Please try again.')
      }
    }

    if (window.Razorpay) {
      openCheckout()
    } else {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = openCheckout
      script.onerror = () => {
        setErrorMsg('Payment gateway failed to load. Please check your internet connection.')
      }
      document.body.appendChild(script)
    }
  }

  return (
    <div className="page-in">
      <header className="topbar">
        <div className="brand" style={{ fontSize: 28 }}>PAYAL GULATI</div>
        <div className="brand-sub">The Innate Bliss • 1:1 Strategy Call</div>
      </header>
      <div className="wrap">
        <button type="button" className="backlink" onClick={onBack}>← Back to details</button>

        <Reveal>
          <div className="booking-card">
            <h1 className="booking-title">
              Book Your 1:1 Strategy Call With <em>Payal Gulati</em>
            </h1>

            <p className="booking-sub">
              For business owners, entrepreneurs or startup founders ready to break income blocks and reach their next level.
            </p>

            <div className="booking-section-label">
              In this 1:1 private session, we will:
            </div>

            <ul className="booking-bullets">
              {BOOKING_BULLETS.map((b) => (
                <li key={b}>
                  <span className="bullet-dot">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="booking-note">
              Once you pay <strong>₹299</strong>, you'll complete your <strong>application form</strong>. We'll review it and contact you to schedule your call.
            </div>

            {errorMsg && (
              <p className="booking-error">
                {errorMsg}
              </p>
            )}

            <div className="booking-cta-wrap">
              <button type="button" className="cta" onClick={handlePay}>
                Book your 1:1 Strategy call @ ₹299
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
