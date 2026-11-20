import AutoplayVideo from './AutoplayVideo'

// Hero order (per client update):
// Gold banner → Headline → Autoplay VSL video (card)
// Removed: guarantee pill, hero CTA button, worked-with strip, old video card section, lede.
// Reveal wrappers removed from hero so brand + headline + video appear immediately above the fold.
export default function Hero() {
  return (
    <>
      <div className="gold-banner">
        For business owners, entrepreneurs, or startup founders stuck at the same income for over a year.
      </div>

      <h1>
        Break hidden money blocks and unlock your <em>next income level</em> in 9 weeks
      </h1>

      <AutoplayVideo />
    </>
  )
}
