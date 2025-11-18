export default function NeonBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Deep cosmic wash */}
      <div className="absolute -top-1/3 -left-1/3 w-[1200px] h-[1200px] rounded-full bg-fuchsia-500/15 blur-[120px]" />
      <div className="absolute -bottom-1/3 -right-1/3 w-[1200px] h-[1200px] rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Celestials: big and background-only */}
      <IconStar className="text-white/15 drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] absolute -top-10 left-1/4 w-56 h-56 rotate-12" />
      <IconMoon className="text-zinc-100/15 drop-shadow-[0_0_50px_rgba(245,245,245,0.5)] absolute top-10 right-[12%] w-72 h-72" />
      <IconSun className="text-yellow-300/15 drop-shadow-[0_0_60px_rgba(253,224,71,0.6)] absolute -bottom-8 right-1/5 w-80 h-80" />

      {/* Florals and figures: oversized, low-opacity silhouettes */}
      <FlowerHibiscus className="text-pink-300/12 drop-shadow-[0_0_40px_rgba(244,114,182,0.4)] absolute top-[38%] -left-20 w-96 h-96" />
      <FlowerTulip className="text-fuchsia-300/12 drop-shadow-[0_0_40px_rgba(217,70,239,0.4)] absolute bottom-[10%] left-[8%] w-80 h-80" />
      <FlowerRose className="text-rose-300/12 drop-shadow-[0_0_40px_rgba(244,63,94,0.4)] absolute top-6 left-1/2 -translate-x-1/2 w-80 h-80" />
      <Angel className="text-white/12 drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] absolute bottom-[6%] left-1/2 -translate-x-1/2 w-96 h-96" />
      <Pomegranate className="text-pink-200/12 drop-shadow-[0_0_44px_rgba(251,113,133,0.5)] absolute top-[24%] right-[18%] w-72 h-72" />
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
      <ellipse cx="32" cy="10" rx="12" ry="4" fill="currentColor" />
      <circle cx="32" cy="20" r="6" fill="currentColor" />
      <path d="M20 54c0-10 6-20 12-20s12 10 12 20z" />
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
