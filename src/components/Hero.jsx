import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-fuchsia-500/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white"
          >
            Tarot, but make it pixel perfect
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-5 text-fuchsia-100/90 text-lg leading-relaxed"
          >
            Daily, weekly, and monthly horoscopes. Magical pick‑a‑card pulls. Personal paid readings. All wrapped in a cute yet cool pixel‑art vibe.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pick" className="px-5 py-3 rounded-md bg-fuchsia-500 text-white font-semibold shadow hover:bg-fuchsia-600 transition-colors">Pick a Card</a>
            <a href="#readings" className="px-5 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors">Book a Reading</a>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="grid grid-cols-5 gap-2 p-4 bg-slate-900/60 rounded-xl border border-white/10 shadow-xl">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-sm bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 relative">
                <div className="absolute inset-px bg-[linear-gradient(#00000066_1px,transparent_1px),linear-gradient(90deg,#00000066_1px,transparent_1px)] bg-[size:6px_6px] rounded-[3px]" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 -z-10 blur-xl bg-[radial-gradient(circle_at_20%_20%,#f0abfc33,transparent_30%),radial-gradient(circle_at_80%_80%,#818cf833,transparent_30%)]" />
        </motion.div>
      </div>
    </section>
  )
}
