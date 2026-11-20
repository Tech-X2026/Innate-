import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RealReason from './components/RealReason'
import HowToStart from './components/HowToStart'
import Testimonials from './components/Testimonials'
import Coach from './components/Coach'
import FinalCta from './components/FinalCta'
import FloatingCta from './components/FloatingCta'
import BookingPage from './components/BookingPage'

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
        <FinalCta onBook={goBooking} />
      </div>
      <FloatingCta onBook={goBooking} />
    </div>
  )
}
