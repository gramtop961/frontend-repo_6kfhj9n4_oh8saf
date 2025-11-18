import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Horoscopes from './components/Horoscopes'
import PickACard from './components/PickACard'
import PaidReadings from './components/PaidReadings'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#f0abfc22,transparent_35%),radial-gradient(circle_at_80%_20%,#818cf822,transparent_35%),radial-gradient(circle_at_50%_90%,#22d3ee11,transparent_35%)]" />
      <Navbar />
      <Hero />
      <Horoscopes />
      <PickACard />
      <PaidReadings />
      <footer id="about" className="max-w-6xl mx-auto px-4 py-14 text-fuchsia-100/70">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-black text-white text-xl">Pixel Tarot</div>
            <p className="mt-2">A cozy corner of the web for cosmic clarity, crafted with modern pixel charm.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Contact</div>
            <p>hello@pixeltarot.example</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Social</div>
            <p>@pixeltarot</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-fuchsia-200/60">© {new Date().getFullYear()} Pixel Tarot</div>
      </footer>
    </div>
  )
}

export default App
