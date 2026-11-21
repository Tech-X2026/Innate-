export default function FloatingCta({ onBook }) {
  return (
    <div className="float-dock">
      <button
        type="button"
        className="floating-pill"
        onClick={onBook}
        aria-label="Book your 1:1 Strategy call @ ₹299"
      >
        <span className="pill-shimmer" aria-hidden="true" />
        <span className="pill-content">
          <span className="pill-dot" aria-hidden="true" />
          <span className="pill-text">Book your 1:1 Strategy call @ ₹299</span>
        </span>
        <span className="pill-btn">
          <span>Book</span>
          <span className="pill-arrow" aria-hidden="true">→</span>
        </span>
      </button>
    </div>
  )
}
