import { useState } from "react"

const CARDS = [
  "The Fool","The Magician","The High Priestess","The Empress","The Emperor","The Hierophant",
  "The Lovers","The Chariot","Strength","The Hermit","Wheel of Fortune","Justice","The Hanged Man",
  "Death","Temperance","The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"
]

export default function PickACard(){
  const [picked, setPicked] = useState([])
  const [submitted, setSubmitted] = useState(null)
  const [prompt, setPrompt] = useState("")
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  const toggle = (name) => {
    setPicked((prev) => prev.includes(name) ? prev.filter(n=>n!==name) : [...prev, name])
  }

  const submit = async () => {
    const res = await fetch(`${baseUrl}/api/pick`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, picked_cards: picked })
    })
    const data = await res.json();
    setSubmitted(data.id)
  }

  return (
    <section id="pick" className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-white text-3xl font-black">Pick a Card</h2>
          <p className="text-fuchsia-100/80">Choose a few and see what calls to you</p>
        </div>
        <div className="flex gap-2">
          <input value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Your intention..." className="bg-slate-800/70 text-white border border-white/10 rounded px-3 py-2 w-56" />
          <button onClick={submit} disabled={picked.length===0} className="px-4 py-2 rounded-md bg-fuchsia-500 text-white font-semibold disabled:opacity-50">Save Pull</button>
        </div>
      </div>

      {submitted && (
        <div className="mb-4 text-sm text-fuchsia-200">Saved! Session id: {submitted}</div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {CARDS.map((c)=> (
          <button key={c} onClick={()=>toggle(c)} className={`relative p-4 rounded-lg border transition-all text-left ${picked.includes(c) ? 'bg-fuchsia-600/30 border-fuchsia-400/50' : 'bg-slate-900/60 border-white/10'}`}>
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#ffffff0a_1px,transparent_1px),linear-gradient(90deg,#ffffff0a_1px,transparent_1px)] bg-[size:12px_12px] rounded-lg" />
            <div className="font-bold text-white">{c}</div>
            <div className="text-xs text-fuchsia-200/80">Major Arcana</div>
          </button>
        ))}
      </div>
    </section>
  )
}
