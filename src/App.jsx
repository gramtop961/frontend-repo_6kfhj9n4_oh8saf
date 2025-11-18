import Navbar from './components/Navbar'
import NeonBackground from './components/NeonBackground'
import RevealThree from './components/RevealThree'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b14] relative">
      <NeonBackground />
      <Navbar />

      {/* Hero replacement with simple intro */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-8">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-200 text-4xl md:text-6xl font-black tracking-tight">
          Tarot Reveal
        </h1>
        <p className="mt-3 text-fuchsia-100/90 max-w-2xl">
          Three cards. Tap to reveal: star, moon, and sun. Ethereal neon flowers and celestial symbols drift in the background.
        </p>
      </section>

      <RevealThree onSubmit={() => {
        const el = document.getElementById('about')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }} />

      <footer id="about" className="max-w-6xl mx-auto px-4 py-14 text-fuchsia-100/80">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-black text-white text-xl">Tarot Reveal</div>
            <p className="mt-2">A calm, glowy canvas for your practice.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Contact</div>
            <p>hello@tarotreveal.example</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Social</div>
            <p>@tarotreveal</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-fuchsia-200/70">© {new Date().getFullYear()} Tarot Reveal</div>
      </footer>
    </div>
  )
}

export default App
