import { useState } from "react"

function FlipCard({ index, onReveal, revealed, glyph, title, color }){
  return (
    <button
      onClick={() => onReveal(index)}
      aria-label={revealed ? `${title} revealed` : `Reveal card ${index + 1}`}
      className="group relative aspect-[3/5] w-full focus:outline-none"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          revealed ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ perspective: "1200px" }}
      >
        {/* Front (shown after reveal) */}
        <div className="absolute inset-0 rounded-xl border border-white/10 bg-slate-900/60 shadow-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(250,250,250,0.08),transparent_55%),radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.12),transparent_60%)]" />
          {/* inner frame */}
          <div className="absolute inset-3 rounded-lg border border-white/10" />
          {/* arc sigils */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative w-[75%] h-[75%]">
              <SigilCircle className="absolute inset-0 text-fuchsia-300/20" />
              <span
                className="absolute inset-0 grid place-items-center text-3xl md:text-4xl font-black drop-shadow-[0_0_24px_rgba(255,255,255,0.6)]"
                style={{ color }}
              >
                {glyph}
              </span>
            </div>
          </div>
          <div className="absolute bottom-3 left-0 right-0 text-center text-xs tracking-widest text-fuchsia-100/80 font-semibold">
            {title}
          </div>
        </div>

        {/* Back (shown before reveal) */}
        <div className="absolute inset-0 rounded-xl border border-white/10 bg-slate-900/40 shadow-lg overflow-hidden [backface-visibility:hidden]">
          {/* mystic back pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:18px_18px] opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.14),transparent_50%)]" />
          {/* corner stars */}
          <CornerStars />
          {/* central sigil */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative w-[70%] h-[70%]">
              <SigilCircle className="absolute inset-0 text-fuchsia-200/25" />
              <SigilStar className="absolute inset-0 text-white/40" />
            </div>
          </div>
          {/* hover sheen */}
          <div className="pointer-events-none absolute -inset-1 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.18), rgba(255,255,255,0.04), rgba(255,255,255,0.18))"
          }} />
        </div>
      </div>
    </button>
  )
}

function CornerStars(){
  return (
    <>
      <span className="absolute top-2 left-2 text-white/60 text-lg">✦</span>
      <span className="absolute top-2 right-2 text-white/60 text-lg">✦</span>
      <span className="absolute bottom-2 left-2 text-white/60 text-lg">✦</span>
      <span className="absolute bottom-2 right-2 text-white/60 text-lg">✦</span>
    </>
  )
}

function SigilCircle({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="36" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="24" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="60" y1="12" x2="60" y2="24" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 30} 60 60)`} />
      ))}
    </svg>
  )
}

function SigilStar({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <path d="M60 18l10 24 26 4-19 18 5 26-22-12-22 12 5-26-19-18 26-4 10-24z" fill="currentColor" />
    </svg>
  )
}

export default function RevealThree({ onSubmit }){
  const [revealed, setRevealed] = useState([false, false, false])

  const handleReveal = (i) => {
    setRevealed((prev) => prev.map((v, idx) => (idx === i ? true : v)))
  }

  const allRevealed = revealed.every(Boolean)

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-white text-3xl font-black mb-2">Pick three cards</h2>
      <p className="text-fuchsia-100/90 mb-8">Tap a card to flip. Background holds the stars, moon, and sun — cards stay mystical.</p>

      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <FlipCard index={0} onReveal={handleReveal} revealed={revealed[0]} glyph="★" title="THE STAR" color="#c4b5fd" />
        <FlipCard index={1} onReveal={handleReveal} revealed={revealed[1]} glyph="☾" title="THE MOON" color="#e5e7eb" />
        <FlipCard index={2} onReveal={handleReveal} revealed={revealed[2]} glyph="☼" title="THE SUN" color="#fde047" />
      </div>

      <div className="mt-8">
        <button
          disabled={!allRevealed}
          onClick={() => onSubmit && onSubmit(revealed)}
          className="px-5 py-3 rounded-md font-semibold text-white bg-fuchsia-500/90 hover:bg-fuchsia-500 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
        >
          Continue
        </button>
      </div>
    </section>
  )
}
