import Reveal from './Reveal'
import { YOUTUBE_AUTOPLAY } from '../data/content'

// VSL video in card style, autoplays (muted) and loops until user pauses/stops.
// Placed directly after the headline: "Break hidden money blocks..."
export default function AutoplayVideo() {
  return (
    <Reveal delay={120}>
      <div className="autoplay-card">
        <div className="vc-top">
          <div className="t1">Watch <em>this video</em></div>
          <div className="t2">Real clients — Real results</div>
        </div>
        <div className="autoplay-frame">
          <iframe
            src={YOUTUBE_AUTOPLAY}
            title="Payal Gulati — The Innate Bliss VSL video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="autoplay-foot">
          <span className="live-dot" aria-hidden="true" />
          <span>Playing now (muted) — tap the speaker icon for sound &nbsp;•&nbsp; Press pause to stop</span>
        </div>
        <p style={{ textAlign: 'center', marginTop: 10 }}>
          <span className="hand">— watch till the end, it matters →</span>
        </p>
      </div>
    </Reveal>
  )
}
