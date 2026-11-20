import Reveal from './Reveal'
import AutoplayVideo from './AutoplayVideo'

// Hero order (per client update):
// Gold banner → Headline → Autoplay VSL video (card) → Supporting line
// Removed: guarantee pill, hero CTA button, worked-with strip, old video card section.
export default function Hero() {
  return (
    <>
      <Reveal>
        <div className="gold-banner">
          For business owners, entrepreneurs, or startup founders stuck at the same income for over a year.
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1>
          Break hidden money blocks and unlock your <em>next income level</em> in 9 weeks
        </h1>
      </Reveal>

      <AutoplayVideo />
    </>
  )
}
