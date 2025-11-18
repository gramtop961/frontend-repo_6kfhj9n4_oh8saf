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
        <div className="absolute inset-0 rounded-xl border border-white/10 bg-slate-900/70 shadow-xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* subtle neon wash */}
          <div className="absolute inset-0 mix-blend-screen"
               style={{
                 background:
                   "radial-gradient(1200px 600px at 20% 10%, rgba(168,85,247,0.22), transparent 60%)," +
                   "radial-gradient(800px 500px at 80% 70%, rgba(34,211,238,0.18), transparent 55%)," +
                   "radial-gradient(600px 600px at 50% 50%, rgba(251,191,36,0.12), transparent 60%)"
               }}
          />
          {/* inner frame */}
          <div className="absolute inset-3 rounded-lg border border-white/15 shadow-[0_0_30px_rgba(217,70,239,0.35)]" />
          {/* arc sigils */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative w-[75%] h-[75%]">
              <SigilCircle className="absolute inset-0 text-fuchsia-300/25" />
              <span
                className="absolute inset-0 grid place-items-center text-3xl md:text-4xl font-black drop-shadow-[0_0_26px_rgba(255,255,255,0.7)]"
                style={{ color }}
              >
                {glyph}
              </span>
            </div>
          </div>
          <div className="absolute bottom-3 left-0 right-0 text-center text-xs tracking-widest text-fuchsia-50/90 font-semibold">
            {title}
          </div>
        </div>

        {/* Back (shown before reveal) */}
        <div className="absolute inset-0 rounded-xl border border-white/10 bg-slate-900/50 shadow-lg overflow-hidden [backface-visibility:hidden]">
          {/* mystic back pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(#ffffff14_1px,transparent_1px),linear-gradient(90deg,#ffffff14_1px,transparent_1px)] bg-[size:18px_18px] opacity-40" />
          <div className="absolute inset-0 mix-blend-screen"
               style={{
                 background:
                   "radial-gradient(900px 500px at 30% 20%, rgba(255,255,255,0.10), transparent 50%)," +
                   "radial-gradient(700px 500px at 70% 80%, rgba(217,70,239,0.20), transparent 55%)," +
                   "radial-gradient(500px 500px at 50% 50%, rgba(34,211,238,0.16), transparent 60%)"
               }}
          />
          {/* corner sigils (non-celestial) */}
          <CornerSigils />
          {/* central sigil */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative w-[70%] h-[70%]">
              <SigilCircle className="absolute inset-0 text-fuchsia-200/30" />
              <SigilRune className="absolute inset-0 text-white/45" />
            </div>
          </div>
          {/* hover sheen */}
          <div
            className="pointer-events-none absolute -inset-1 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.22), rgba(255,255,255,0.06), rgba(255,255,255,0.22))"
            }}
          />
        </div>
      </div>
    </button>
  )
}

function CornerSigils(){
  return (
    <>
      <span className="absolute top-2 left-2 text-white/70 text-lg">◈</span>
      <span className="absolute top-2 right-2 text-white/70 text-lg">◈</span>
      <span className="absolute bottom-2 left-2 text-white/70 text-lg">◈</span>
      <span className="absolute bottom-2 right-2 text-white/70 text-lg">◈</span>
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

function SigilRune({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none">
      <path d="M60 20 L80 60 L60 100 L40 60 Z" fill="currentColor" opacity="0.35" />
      <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.6" />
      <path d="M60 28 V92" stroke="currentColor" strokeWidth="3" opacity="0.5" />
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
      <p className="text-fuchsia-100/95 mb-8">Tap a card to flip. Celestial and floral energy glows in the background — cards stay arcane and abstract.</p>

      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <FlipCard index={0} onReveal={handleReveal} revealed={revealed[0]} glyph="⟁" title="REVEALED I" color="#a78bfa" />
        <FlipCard index={1} onReveal={handleReveal} revealed={revealed[1]} glyph="⌾" title="REVEALED II" color="#22d3ee" />
        <FlipCard index={2} onReveal={handleReveal} revealed={revealed[2]} glyph="△" title="REVEALED III" color="#fbbf24" />
      </div>

      <div className="mt-8">
        <button
          disabled={!allRevealed}
          onClick={() => onSubmit && onSubmit(revealed)}
          className="px-5 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 hover:from-fuchsia-400 hover:via-violet-400 hover:to-cyan-300 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 shadow-[0_0_20px_rgba(168,85,247,0.45)]"
        >
          Continue
        </button>
      </div>
    </section>
  )
}
