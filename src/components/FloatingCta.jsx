export default function FloatingCta({ onBook }) {
  return (
    <div className="floatbar">
      <div className="inner">
        <button className="fcta" onClick={onBook}>
          <span>
            <span className="ft">Book your 1:1 Strategy call @ ₹299</span>
            <br />
            <span className="fs">Only 99 seats / 2 months • Refundable if not accepted</span>
          </span>
          <span className="fbtn">Book →</span>
        </button>
      </div>
    </div>
  )
}
