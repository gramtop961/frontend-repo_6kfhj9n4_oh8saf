export default function NeonBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Deeper, more vibrant cosmic wash */}
      <div className="absolute -top-1/2 -left-1/3 w-[1400px] h-[1400px] rounded-full blur-[140px] mix-blend-screen"
           style={{
             background:
               "radial-gradient(800px 800px at 30% 20%, rgba(217,70,239,0.28), transparent 60%)," +
               "radial-gradient(900px 700px at 80% 30%, rgba(34,211,238,0.22), transparent 60%)," +
               "radial-gradient(1100px 900px at 50% 80%, rgba(251,191,36,0.18), transparent 60%)"
           }}
      />
      <div className="absolute -bottom-1/2 -right-1/3 w-[1400px] h-[1400px] rounded-full blur-[140px] mix-blend-screen"
           style={{
             background:
               "radial-gradient(1000px 800px at 70% 60%, rgba(16,185,129,0.20), transparent 60%)," +
               "radial-gradient(900px 900px at 20% 70%, rgba(99,102,241,0.22), transparent 60%)"
           }}
      />

      {/* Celestials: big, neon glows, background-only */}
      <LayeredGlow>
        <IconStar className="absolute -top-6 left-[18%] w-64 h-64 text-fuchsia-200/25" />
      </LayeredGlow>
      <LayeredGlow>
        <IconMoon className="absolute top-6 right-[10%] w-80 h-80 text-cyan-100/25" />
      </LayeredGlow>
      <LayeredGlow>
        <IconSun className="absolute -bottom-10 right-[22%] w-96 h-96 text-amber-200/25" />
      </LayeredGlow>

      {/* Florals and figures: oversized neon silhouettes with glow */}
      <LayeredGlow>
        <FlowerHibiscus className="absolute top-[36%] -left-16 w-[26rem] h-[26rem] text-pink-200/20 rotate-[-8deg]" />
      </LayeredGlow>
      <LayeredGlow>
        <FlowerTulip className="absolute bottom-[8%] left-[6%] w-[22rem] h-[22rem] text-fuchsia-200/22 rotate-[10deg]" />
      </LayeredGlow>
      <LayeredGlow>
        <FlowerRose className="absolute top-8 left-1/2 -translate-x-1/2 w-[22rem] h-[22rem] text-rose-200/20" />
      </LayeredGlow>
      <LayeredGlow>
        <Angel className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] text-zinc-100/18" />
      </LayeredGlow>
      <LayeredGlow>
        <Pomegranate className="absolute top-[24%] right-[16%] w-[22rem] h-[22rem] text-rose-100/22" />
      </LayeredGlow>

      {/* subtle twinkle dots */}
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <Twinkle count={60} />
      </div>
    </div>
  )
}

function LayeredGlow({ children }){
  return (
    <div className="relative">
      {/* soft halo */}
      <div className="absolute inset-0 blur-[50px] opacity-80 mix-blend-screen">
        {children}
      </div>
      {/* crisp silhouette */}
      <div className="relative drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
        {children}
      </div>
    </div>
  )
}

function Twinkle({ count = 40 }){
  const dots = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100
    const top = Math.random() * 100
    const size = 1 + Math.random() * 2
    const opacity = 0.4 + Math.random() * 0.4
    return (
      <span
        key={i}
        className="absolute rounded-full bg-white"
        style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity }}
      />
    )
  })
  return <div className="absolute inset-0">{dots}</div>
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
