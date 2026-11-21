import { useRef, useState } from 'react'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/content'

// Manual Testimonial Carousel (replaces auto-scrolling marquee)
// Users can click Prev / Next buttons, click indicator dots, or swipe smoothly.
export default function Testimonials() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!trackRef.current) return
    const el = trackRef.current
    const item = el.querySelector('.manual-carousel-item')
    if (!item) return
    const itemWidth = item.offsetWidth
    const gap = 16
    const index = Math.round(el.scrollLeft / (itemWidth + gap))
    setActiveIndex(Math.min(Math.max(0, index), TESTIMONIALS.length - 1))
  }

  const scrollToIndex = (index) => {
    if (!trackRef.current) return
    const el = trackRef.current
    const item = el.querySelector('.manual-carousel-item')
    if (!item) return
    const itemWidth = item.offsetWidth
    const gap = 16
    el.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  const prev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1))
  }

  const next = () => {
    scrollToIndex(Math.min(TESTIMONIALS.length - 1, activeIndex + 1))
  }

  return (
    <section>
      <Reveal>
        <h2 className="sec-title">
          Client <em>testimonials</em>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="manual-carousel-wrap">
          <div
            className="manual-carousel-track"
            ref={trackRef}
            onScroll={handleScroll}
          >
            {TESTIMONIALS.map((t) => (
              <a
                href={t.url || t.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={t.id}
                className="manual-carousel-item"
              >
                <div className="thumb-wrap">
                  <img
                    className="yt-thumb"
                    src={t.thumb || `https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}
                    alt={t.badge || 'Client Testimonial'}
                    loading="lazy"
                  />
                  <div className="play-badge">
                    {t.type === 'instagram' ? '▶ Watch Reel' : '▶ Watch on YouTube'}
                  </div>
                </div>
                {t.badge && (
                  <div className="client-info">
                    <div className="client-badge">{t.badge}</div>
                  </div>
                )}
              </a>
            ))}
          </div>

          {TESTIMONIALS.length > 1 && (
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-btn"
                onClick={prev}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
              >
                ‹
              </button>

              <div className="carousel-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => scrollToIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="carousel-btn"
                onClick={next}
                disabled={activeIndex === TESTIMONIALS.length - 1}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}
