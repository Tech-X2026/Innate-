// All copy from Landing Page Structure_v1.pdf + verified client data
// from theinnatebliss.com / theinnatebliss.in / theinnatebliss.co.in

// VSL video: https://www.youtube.com/watch?v=P3ZwZZpm6Dc
// Inline autoplay version: muted (browsers block sound autoplay) + loop,
// keeps playing until the user presses pause/stop on the player controls.
export const YOUTUBE_AUTOPLAY =
  'https://www.youtube.com/embed/P3ZwZZpm6Dc?autoplay=1&mute=1&loop=1&playlist=P3ZwZZpm6Dc&controls=1&playsinline=1&rel=0&modestbranding=1'

export const RAZORPAY_KEY_ID =
  import.meta.env.VITE_RAZORPAY_KEY_ID || ''

// Pre-call video for Thank You page: https://www.youtube.com/watch?v=PNQkxCcTrR8
export const PRECALL_YOUTUBE_EMBED =
  'https://www.youtube.com/embed/PNQkxCcTrR8?rel=0&modestbranding=1'

// Assignment Google Form on Thank You page
export const ASSIGNMENT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSc0D-W43WbP88YygIQbjX3wYoBf6j-r3g3VMLIZq44ECsb_wA/viewform'

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

export const STEPS = [
  { strong: 'Book your call below', rest: ' and complete the application form carefully.' },
  { strong: "We'll review your application", rest: ' and contact you if you are qualified.' },
  { strong: 'If your application is not accepted', rest: ', your booking amount will be refunded.' },
  { strong: 'Only 99 members', rest: ' will be accepted every 2 months.' },
  { strong: 'Any questions?', rest: ' Write to us at connect@theinnatebliss.com', email: true },
]
