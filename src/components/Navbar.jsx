import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0b0b14]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="block w-10 h-10 bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-cyan-300 rounded-sm shadow-[0_0_0_3px_#06060b]" />
            <span className="absolute inset-0 rounded-sm border-2 border-white/30 mix-blend-overlay" />
          </div>
          <div>
            <div className="text-white font-extrabold tracking-wider text-lg">
              Tarot Reveal
            </div>
            <div className="text-xs text-fuchsia-300/80 -mt-1">glow • calm • cosmic</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-fuchsia-200 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-fuchsia-200 hover:text-white transition-colors">About</a>
        </nav>
        <button className="md:hidden text-fuchsia-200">
          <Menu />
        </button>
      </div>
    </header>
  )
}
