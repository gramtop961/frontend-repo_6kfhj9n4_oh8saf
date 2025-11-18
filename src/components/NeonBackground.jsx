export default function NeonBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Soft cosmic gradients */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Star (white glow) */}
      <IconStar className="text-white/80 drop-shadow-[0_0_18px_rgba(255,255,255,0.7)] absolute top-16 left-12 w-10 h-10" />
      <IconStar className="text-white/60 drop-shadow-[0_0_14px_rgba(255,255,255,0.6)] absolute top-28 right-24 w-6 h-6 rotate-12" />
      <IconStar className="text-white/70 drop-shadow-[0_0_14px_rgba(255,255,255,0.7)] absolute bottom-24 left-1/3 w-8 h-8 -rotate-12" />

      {/* Moon (off‑white glow) */}
      <IconMoon className="text-zinc-100/90 drop-shadow-[0_0_22px_rgba(245,245,245,0.8)] absolute top-20 right-10 w-16 h-16" />

      {/* Sun (yellow glow) */}
      <IconSun className="text-yellow-300 drop-shadow-[0_0_24px_rgba(253,224,71,0.9)] absolute bottom-12 right-12 w-16 h-16" />

      {/* Flowers */}
      <FlowerHibiscus className="text-pink-300/80 drop-shadow-[0_0_20px_rgba(244,114,182,0.7)] absolute top-1/3 left-[-20px] w-28 h-28 opacity-70" />
      <FlowerTulip className="text-fuchsia-300/80 drop-shadow-[0_0_20px_rgba(217,70,239,0.6)] absolute bottom-24 left-10 w-24 h-24 opacity-70" />
      <FlowerRose className="text-rose-300/80 drop-shadow-[0_0_20px_rgba(244,63,94,0.6)] absolute top-10 left-1/2 -translate-x-1/2 w-24 h-24 opacity-60" />

      {/* Angel silhouette */}
      <Angel className="text-white/70 drop-shadow-[0_0_26px_rgba(255,255,255,0.7)] absolute bottom-10 left-1/2 -translate-x-1/2 w-28 h-28 opacity-60" />

      {/* Pomegranate */}
      <Pomegranate className="text-pink-200/80 drop-shadow-[0_0_22px_rgba(251,113,133,0.6)] absolute top-1/4 right-1/4 w-20 h-20 opacity-70" />
    </div>
  )
}

function IconStar({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.6 6.7L22 10l-6 4.6L17.2 22 12 18.3 6.8 22 8 14.6 2 10l7.4-1.3L12 2z" />
    </svg>
  )
}

function IconMoon({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.3A9 9 0 0111.7 3a7.5 7.5 0 109.3 9.3z" />
    </svg>
  )
}

function IconSun({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
      <g>
        <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function FlowerHibiscus({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      {Array.from({ length: 5 }).map((_, i) => (
        <path key={i} d="M32 8c6 4 12 8 12 12s-6 8-12 8-12-4-12-8 6-8 12-12z" transform={`rotate(${i*72} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="6" fill="currentColor" />
    </svg>
  )
}

function FlowerTulip({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 8c6 8 12 8 12 18 0 8-6 14-12 14S20 34 20 26c0-10 6-10 12-18z" />
      <path d="M32 40v16" stroke="currentColor" strokeWidth="4" />
      <path d="M32 48c8-2 12-6 14-10M32 48c-8-2-12-6-14-10" stroke="currentColor" strokeWidth="3" fill="none" />
    </svg>
  )
}

function FlowerRose({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <circle cx="32" cy="32" r="16" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx="32" cy="16" r="8" fill="currentColor" transform={`rotate(${i*45} 32 32)`} />
      ))}
    </svg>
  )
}

function Angel({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      {/* Halo */}
      <ellipse cx="32" cy="10" rx="12" ry="4" fill="currentColor" />
      {/* Head */}
      <circle cx="32" cy="20" r="6" fill="currentColor" />
      {/* Body */}
      <path d="M20 54c0-10 6-20 12-20s12 10 12 20z" />
      {/* Wings */}
      <path d="M20 28c-10 2-12 10-8 16 6 8 16 4 16-4 0-6-4-10-8-12z" />
      <path d="M44 28c10 2 12 10 8 16-6 8-16 4-16-4 0-6 4-10 8-12z" />
    </svg>
  )
}

function Pomegranate({ className = "" }){
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor">
      <circle cx="32" cy="36" r="16" />
      <path d="M28 10l4 6 4-6-4-4-4 4z" />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx={32 + 8*Math.cos((i*Math.PI)/6)} cy={36 + 8*Math.sin((i*Math.PI)/6)} r="2.2" fill="currentColor" />
      ))}
    </svg>
  )
}
