import { useState } from "react"

function Card({ index, label, color, onReveal, revealed }){
  return (
    <button
      onClick={() => onReveal(index)}
      className={`group relative aspect-[3/5] w-full rounded-xl border transition-transform duration-300 ${
        revealed ? "translate-y-0" : "translate-y-1"
      } ${
        revealed ? "bg-slate-900/60" : "bg-slate-900/40"
      } border-white/10 hover:-translate-y-1`}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        {/* Back pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
      </div>
      {/* Glyph */}
      <div className="absolute inset-0 grid place-items-center">
        <span
          className="font-black tracking-wider text-3xl md:text-4xl drop-shadow-[0_0_24px_rgba(255,255,255,0.6)]"
          style={{ color }}
        >
          {label}
        </span>
      </div>
      {/* Shine */}
      <div className="absolute -inset-1 rounded-[14px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background:
          "conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.18), rgba(255,255,255,0.04), rgba(255,255,255,0.18))"
      }} />
    </button>
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
      <p className="text-fuchsia-100/90 mb-8">Tap to reveal. Once all three glow, you can continue.</p>

      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <Card index={0} label="★" color="#c4b5fd" onReveal={handleReveal} revealed={revealed[0]} />
        <Card index={1} label="☾" color="#e5e7eb" onReveal={handleReveal} revealed={revealed[1]} />
        <Card index={2} label="☼" color="#fde047" onReveal={handleReveal} revealed={revealed[2]} />
      </div>

      <div className="mt-8">
        <button
          disabled={!allRevealed}
          onClick={() => onSubmit && onSubmit(revealed)}
          className="px-5 py-3 rounded-md font-semibold text-white bg-fuchsia-500 disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </section>
  )
}
