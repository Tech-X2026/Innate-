// All copy from Landing Page Structure_v1.pdf + verified client data
// from theinnatebliss.com / theinnatebliss.in / theinnatebliss.co.in

// VSL video: https://www.youtube.com/watch?v=lfiGHm5Hgm8&t=1s (starts at 1s)
export const YOUTUBE_EMBED =
  'https://www.youtube.com/embed/lfiGHm5Hgm8?start=1&enablejsapi=1&rel=0&playsinline=1&autoplay=1'

// Inline autoplay version: muted (browsers block sound autoplay) + loop,
// keeps playing until the user presses pause/stop on the player controls.
export const YOUTUBE_AUTOPLAY =
  'https://www.youtube.com/embed/lfiGHm5Hgm8?start=1&autoplay=1&mute=1&loop=1&playlist=lfiGHm5Hgm8&controls=1&playsinline=1&rel=0&modestbranding=1'

export const RAZORPAY_KEY_ID = 'rzp_test_U2J2L2L8N9FrA6'
export const RAZORPAY_KEY_SECRET = 'MUGJ7Xc4AexR11WACdKsGDez'
export const RAZORPAY_LINK = 'https://theinnatebliss.com/initiate-checkout/'

// TESTIMONIALS — video testimonials linked to YouTube (from theinnatebliss.in)
// Thumbnail: https://img.youtube.com/vi/{youtubeId}/hqdefault.jpg
export const TESTIMONIALS = [
  {
    id: 'unstoppable-transformation',
    type: 'youtube',
    youtubeId: 'axDyJHW3KTA',
    url: 'https://www.youtube.com/watch?v=axDyJHW3KTA',
    badge: 'From suicidal to unstoppable',
  },
  {
    id: 'career-growth',
    type: 'youtube',
    youtubeId: 'Sr2rN7CB9es',
    url: 'https://www.youtube.com/watch?v=Sr2rN7CB9es',
    badge: 'From unemployed to employed in 2 weeks',
  },
  {
    id: 'stuck-money-recovered',
    type: 'instagram',
    thumb: '/images/reel-stuck-money.jpg',
    url: 'https://www.instagram.com/reels/DMIBFX_Mi2Z/',
    badge: 'Stuck money recovered',
  },
]

export const STUCK_PATTERNS = [
  'You stay where you are',
  'You procrastinate on financial decisions',
  'You self-sabotage opportunities',
  'You avoid and delay',
  'You work harder — but nothing moves',
]

export const FOR_YOU = [
  'Your income has been stuck at the same level for over a year, despite trying different strategies',
  "You've tested pricing models, marketing funnels and hard work — 14-hour days — and nothing moved",
  "You feel money anxiety, self-doubt or an invisible ceiling you can't name",
  "You're ready to work on the root cause — not another quick hack",
]

export const STEPS = [
  { strong: 'Book your call below', rest: ' and complete the application form carefully.' },
  { strong: "We'll review your application", rest: ' and contact you if you are qualified.' },
  { strong: 'If your application is not accepted', rest: ', your booking amount will be refunded.' },
  { strong: 'Only 99 members', rest: ' will be accepted every 2 months.' },
  { strong: 'Any questions?', rest: ' Write to us at connect@theinnatebliss.com', email: true },
]

export const BOOKING_BULLETS = [
  "Identify what's keeping your income stuck – emotionally, mentally and in your business",
  "Understand why your hard work and efforts haven't translated into higher income",
  'Identify the hidden money blocks behind your self-doubt and money fears',
  'Create a personalised plan to help you overcome these blocks and reach your next income level',
]

export const DISCLAIMER =
  'Disclaimer: Results shown are as stated by clients and are not typical. Individual results vary and depend on effort, skills, business model and market conditions. No specific income is guaranteed. This site is not a part of the Facebook website or Meta Platforms, Inc., and is not endorsed by Facebook in any way. FACEBOOK is a trademark of Meta Platforms, Inc.'
