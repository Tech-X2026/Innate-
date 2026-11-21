import AutoplayVideo from './AutoplayVideo'

// Hero order (per client update):
// Gold banner → Headline → Autoplay VSL video (card)
// Removed: guarantee pill, hero CTA button, worked-with strip, old video card section, lede.
// Reveal wrappers removed from hero so brand + headline + video appear immediately above the fold.
export default function Hero({ onBook }) {
  return (
    <>
      <div className="gold-banner">
        For business owners, entrepreneurs, or startup founders stuck at the same income for over a year.
      </div>

      <h1>
        Break <em>hidden money blocks</em> and unlock your next income level in 9 weeks
      </h1>

      <AutoplayVideo />

      <div style={{ marginTop: 20 }}>
        <button className="cta" onClick={onBook}>
          Book your 1:1 Strategy call @ ₹299
        </button>
      </div>
    </>
  )
}
