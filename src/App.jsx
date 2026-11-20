import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RealReason from './components/RealReason'
import HowToStart from './components/HowToStart'
import Testimonials from './components/Testimonials'
import Coach from './components/Coach'
import FloatingCta from './components/FloatingCta'
import BookingPage from './components/BookingPage'
import Reveal from './components/Reveal'

// Two pages in one React app (per PDF):
// Page 1 = landing sequence, Page 2 = booking/payment page (state switch)
export default function App() {
  const [page, setPage] = useState('landing')

  const goBooking = useCallback(() => {
    setPage('booking')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const goLanding = useCallback(() => {
    setPage('landing')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  if (page === 'booking') {
    return <BookingPage onBack={goLanding} />
  }

  return (
    <div className="page-in">
      <Header />
      <div className="wrap">
        <Hero />
        <RealReason onBook={goBooking} />
        <HowToStart onBook={goBooking} />
        <Testimonials />
        <Coach onBook={goBooking} />

        <Reveal delay={80}>
          <div className="disclaimer">
            <p>
              <strong style={{ color: '#c9c2ae' }}>Disclaimer:</strong> Results shown are as stated by
              clients and are not typical. Individual results vary and depend on effort, skills, business
              model and market conditions. No specific income is guaranteed.
            </p>
            <p style={{ marginTop: 8 }}>
              This site is not a part of the Facebook website or Meta Platforms, Inc., and is not endorsed
              by Facebook in any way. FACEBOOK is a trademark of Meta Platforms, Inc.
            </p>
          </div>
        </Reveal>
      </div>
      <FloatingCta onBook={goBooking} />
    </div>
  )
}
