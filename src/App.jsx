import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RealReason from './components/RealReason'
import HowToStart from './components/HowToStart'
import Testimonials from './components/Testimonials'
import Coach from './components/Coach'
import FloatingCta from './components/FloatingCta'
import BookingPage from './components/BookingPage'
import ThankYouPage from './components/ThankYouPage'

// Three views in one React app:
// 1 = landing sequence, 2 = booking/payment page, 3 = thank you / assignment page
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

  const goBooking = useCallback(() => {
    setPage('booking')
    window.scrollTo({ top: 0, behavior: 'instant' })
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

  if (page === 'thank-you') {
    return <ThankYouPage onHome={goLanding} paymentData={paymentData} />
  }

  if (page === 'booking') {
    return <BookingPage onBack={goLanding} onSuccess={goThankYou} />
  }

  return (
    <>
      <div className="page-in">
        <Header />
        <div className="wrap">
          <Hero onBook={goBooking} />
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
      <FloatingCta onBook={goBooking} />
    </>
  )
}
