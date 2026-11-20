import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { YOUTUBE_EMBED } from '../data/content'

export default function VideoCard({ onBook }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <Reveal>
      <div className="video-card">
        <div className="vc-top">
          <div className="t1">Later in <em>this video</em></div>
          <div className="t2">Real clients — Real results</div>
        </div>
        <div className="vc-grid">
          <div
            className="vc-thumb"
            role="button"
            tabIndex={0}
            aria-label="Play video"
            onClick={() => setOpen(true)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(true))}
          >
            <img className="bg" src="/images/hero-thumb.jpg" alt="Payal Gulati — The Innate Bliss video" />
            <div className="shade" />
            <div className="vc-avatars">
              <i>AR</i><i>NS</i><i>VM</i><i>RS</i><i>SK</i><i>PG</i><i>+</i><i>★</i>
            </div>
            <div className="play-ring" />
            <div className="play" />
            <div className="cap">▶ &nbsp;Watch — 3 min &nbsp;•&nbsp; Community call highlights</div>
          </div>
          <div className="vc-result">
            <div className="r1">Aarin • Founder, Age 50+</div>
            <div className="r2">Business funding</div>
            <div className="r3">₹25 Lakh</div>
            <div className="r4">in 2 weeks • first round raised<br />Now preparing for ₹5 Cr next round</div>
            <div className="r5">Individual results. Results vary. Figures as stated by each client.</div>
          </div>
        </div>
        <div className="vc-foot">I have crossed <em>₹25 Lakh</em> in 2 weeks</div>
        <p style={{ textAlign: 'center', marginTop: 8 }}>
          <span className="hand">— watch till the end, it matters →</span>
        </p>
      </div>

      <div style={{ marginTop: 18 }}>
        <button className="cta" onClick={onBook}>
          Book your 1:1 Strategy call @ ₹299
          <small>Only 99 members accepted every 2 months</small>
        </button>
      </div>

      {open && (
        <div className="modal open" onClick={(e) => e.target === e.currentTarget && setOpen(false)} role="dialog" aria-modal="true">
          <div className="box modal-in">
            <div className="mhead">
              <span>Payal Gulati — How this method has helped my clients</span>
              <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            <iframe src={YOUTUBE_EMBED} title="The Innate Bliss — Client video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            <div className="mfoot">
              Real clients, real results. Individual results vary. Figures as stated by each client.{' '}
              <button className="link-btn" onClick={() => { setOpen(false); onBook() }}>Book your call →</button>
            </div>
          </div>
        </div>
      )}
    </Reveal>
  )
}
