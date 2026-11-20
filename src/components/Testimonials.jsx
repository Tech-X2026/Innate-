import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/content'

// Infinite auto-scrolling horizontal marquee with seamless loop.
// Each testimonial is a YouTube video card — click opens the video on YouTube.
// Items are duplicated so translateX(-50%) creates a seamless infinite loop.
export default function Testimonials() {
  return (
    <section>
      <Reveal>
        <p className="eyebrow">Client testimonials</p>
        <h2 className="sec-title" style={{ marginTop: 10 }}>
          Real clients. <em>Real shifts.</em>
        </h2>
        <p className="sec-sub">
          Watch video testimonials from business owners who broke their money blocks.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {TESTIMONIALS.map((t) => (
              <a
                href={t.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={t.id}
                className="marquee-item"
              >
                <div className="thumb-wrap">
                  <img
                    className="yt-thumb"
                    src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`}
                    alt={t.name}
                    loading="lazy"
                  />
                  <div className="play-badge">▶ Watch on YouTube</div>
                </div>
                <div className="client-info">
                  <div className="stars">★★★★★</div>
                  <div className="client-name">{t.name}</div>
                  <div className="client-role">{t.role}</div>
                  <div className="client-badge">{t.badge}</div>
                </div>
              </a>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {TESTIMONIALS.map((t) => (
              <a
                href={t.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={t.id + '-dup'}
                className="marquee-item"
              >
                <div className="thumb-wrap">
                  <img
                    className="yt-thumb"
                    src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`}
                    alt={t.name}
                    loading="lazy"
                  />
                  <div className="play-badge">▶ Watch on YouTube</div>
                </div>
                <div className="client-info">
                  <div className="stars">★★★★★</div>
                  <div className="client-name">{t.name}</div>
                  <div className="client-role">{t.role}</div>
                  <div className="client-badge">{t.badge}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

    </section>
  )
}
