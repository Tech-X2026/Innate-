import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RealReason from './components/RealReason'
import HowToStart from './components/HowToStart'
import Testimonials from './components/Testimonials'
import Coach from './components/Coach'
import FloatingCta from './components/FloatingCta'
import ThankYouPage from './components/ThankYouPage'
import { RAZORPAY_KEY_ID } from './data/content'

export default function App() {
  const [page, setPage] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
      return 'thank-you'
    }
    return 'landing'
  })
  const [paymentData, setPaymentData] = useState(null)

  useEffect(() => {
    const handlePop = () => {
      if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
        setPage('thank-you')
      } else {
        setPage('landing')
      }
    }
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  const goLanding = useCallback(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/thank-you') {
      window.history.pushState({}, '', '/')
    }
    setPage('landing')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const goThankYou = useCallback((data) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/thank-you')
    }
    setPaymentData(data)
    setPage('thank-you')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handlePay = useCallback(() => {
    if (typeof window === 'undefined') return

    if (!RAZORPAY_KEY_ID) {
      alert('Payment gateway key is not configured. Please contact support.')
      return
    }

    const launchRazorpay = () => {
      try {
        const options = {
          key: RAZORPAY_KEY_ID,
          amount: 29900, // ₹299 in paise
          currency: 'INR',
          name: 'The Innate Bliss',
          description: '1:1 Strategy Call with Payal Gulati',
          image: '/images/logo.png',
          handler: function (response) {
            goThankYou(response)
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
          console.warn('Payment failed or closed:', response?.error)
        })
        rzp.open()
      } catch (err) {
        console.error('Razorpay modal error:', err)
        alert('Could not open payment window. Please try again.')
      }
    }

    if (window.Razorpay) {
      launchRazorpay()
    } else {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      script.onload = launchRazorpay
      script.onerror = () => {
        alert('Unable to load payment gateway. Please check your internet connection.')
      }
      document.body.appendChild(script)
    }
  }, [goThankYou])

  if (page === 'thank-you') {
    return <ThankYouPage onHome={goLanding} paymentData={paymentData} />
  }

  return (
    <>
      <div className="page-in">
        <Header />
        <div className="wrap">
          <Hero onBook={handlePay} />
          <RealReason />
          <HowToStart />
          <Testimonials />
          <Coach />

          <div className="disclaimer">
            <p>
              <strong style={{ color: 'var(--gold-light)' }}>Disclaimer:</strong> Results shown are as stated by
              clients and are not typical. Individual results vary and depend on effort, skills, business
              model and market conditions. No specific income is guaranteed.
            </p>
            <p style={{ marginTop: 10 }}>
              This site is not a part of the Facebook website or Meta Platforms, Inc., and is not endorsed
              by Facebook in any way. FACEBOOK is a trademark of Meta Platforms, Inc.
            </p>
          </div>
        </div>
      </div>
      <FloatingCta onBook={handlePay} />
    </>
  )
}
