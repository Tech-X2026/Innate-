import { useEffect, useRef } from 'react'

// Simple scroll-reveal: adds .in-view when element enters viewport.
// Usage: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            io.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return ref
}
