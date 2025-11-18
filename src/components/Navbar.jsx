import { Menu } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="block w-10 h-10 bg-gradient-to-br from-pink-400 via-fuchsia-400 to-indigo-400 rounded-sm shadow-[0_0_0_3px_#111827]" />
            <span className="absolute inset-0 rounded-sm border-2 border-white/30 mix-blend-overlay" />
          </div>
          <div>
            <div className="text-white font-extrabold tracking-wider text-lg">
              Pixel Tarot
            </div>
            <div className="text-xs text-fuchsia-300/80 -mt-1">cute • cool • cosmic</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#horoscopes" className="text-fuchsia-200 hover:text-white transition-colors">Horoscopes</a>
          <a href="#pick" className="text-fuchsia-200 hover:text-white transition-colors">Pick a Card</a>
          <a href="#readings" className="text-fuchsia-200 hover:text-white transition-colors">Paid Readings</a>
          <a href="#about" className="text-fuchsia-200 hover:text-white transition-colors">About</a>
        </nav>
        <button className="md:hidden text-fuchsia-200">
          <Menu />
        </button>
      </div>
    </header>
  )
}
