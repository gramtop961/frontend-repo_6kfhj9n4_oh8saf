import { useEffect, useState } from "react"

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
]

export default function Horoscopes() {
  const [sign, setSign] = useState("aries")
  const [period, setPeriod] = useState("daily")
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  const fetchData = async () => {
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${baseUrl}/api/horoscopes?sign=${sign}&period=${period}&limit=1`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setError(e.message)
    } finally { setLoading(false) }
  }

  useEffect(() => { fetchData() }, [sign, period])

  return (
    <section id="horoscopes" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-white text-3xl font-black">Horoscopes</h2>
          <p className="text-fuchsia-100/80">Fresh cosmic notes for your sign</p>
        </div>
        <div className="flex gap-2">
          <select value={sign} onChange={(e)=>setSign(e.target.value)} className="bg-slate-800/70 text-white border border-white/10 rounded px-3 py-2">
            {SIGNS.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
          </select>
          <select value={period} onChange={(e)=>setPeriod(e.target.value)} className="bg-slate-800/70 text-white border border-white/10 rounded px-3 py-2">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {loading && <Card><p className="text-fuchsia-200">Loading...</p></Card>}
        {error && <Card><p className="text-red-300">{error}</p></Card>}
        {!loading && !error && items.length === 0 && (
          <Card>
            <p className="text-fuchsia-200">No horoscope found yet for this selection.</p>
          </Card>
        )}
        {items.map((it) => (
          <Card key={it.id}>
            <h3 className="text-white font-bold text-xl mb-2">{it.title}</h3>
            <p className="text-fuchsia-100/90 leading-relaxed whitespace-pre-wrap">{it.content}
            </p>
            <div className="mt-3 text-xs text-fuchsia-200/70">{(it.date_from||'').slice(0,10)} {(it.date_to?`→ ${String(it.date_to).slice(0,10)}`:'')}</div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Card({ children }){
  return (
    <div className="p-5 rounded-xl bg-slate-900/60 border border-white/10 shadow-[inset_0_0_0_1px_#ffffff10]">
      <div className="bg-[linear-gradient(#ffffff08_1px,transparent_1px),linear-gradient(90deg,#ffffff08_1px,transparent_1px)] bg-[size:14px_14px] rounded-lg p-4">
        {children}
      </div>
    </div>
  )
}
