import { useReveal } from '../hooks/useReveal'

// Wrapper that fades + slides content in on scroll. Simple, human, not flashy.
export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
