import { useState } from "react"

export default function PaidReadings(){
  const [form, setForm] = useState({ name: "", email: "", question: "", package: "standard" })
  const [submitted, setSubmitted] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${baseUrl}/api/paid-readings`, {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
    })
    const data = await res.json();
    setSubmitted(data.id)
  }

  return (
    <section id="readings" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-2">Book a Personal Reading</h3>
          <p className="text-fuchsia-100/80">Choose your tier and share your question.</p>
          <form className="mt-6 space-y-3" onSubmit={submit}>
            <input name="name" placeholder="Your name" value={form.name} onChange={onChange} className="w-full bg-slate-800/70 text-white border border-white/10 rounded px-3 py-2" />
            <input type="email" name="email" placeholder="Email for delivery" value={form.email} onChange={onChange} className="w-full bg-slate-800/70 text-white border border-white/10 rounded px-3 py-2" />
            <textarea name="question" placeholder="Your question" rows={4} value={form.question} onChange={onChange} className="w-full bg-slate-800/70 text-white border border-white/10 rounded px-3 py-2" />
            <div className="grid grid-cols-3 gap-2">
              {['mini','standard','deep'].map(p => (
                <label key={p} className={`cursor-pointer rounded-md border px-3 py-2 text-center ${form.package===p?'bg-fuchsia-600/30 border-fuchsia-400/50 text-white':'bg-slate-800/70 border-white/10 text-fuchsia-100'}`}>
                  <input type="radio" name="package" value={p} className="hidden" onChange={onChange} checked={form.package===p} />
                  {p.toUpperCase()}
                </label>
              ))}
            </div>
            <button className="w-full px-4 py-2 rounded-md bg-fuchsia-500 text-white font-semibold">Request Reading</button>
            {submitted && <p className="text-fuchsia-200 text-sm">Request received! Reference: {submitted}</p>}
          </form>
        </div>
        <div className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 border border-white/10">
          <h3 className="text-white text-2xl font-bold mb-2">What you get</h3>
          <ul className="text-fuchsia-100/90 list-disc list-inside space-y-1">
            <li>Thoughtful, compassionate guidance</li>
            <li>PDF delivery to your email</li>
            <li>Optional clarifying follow‑up</li>
          </ul>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[...Array(9)].map((_,i)=> (
              <div key={i} className="aspect-square rounded-sm bg-slate-900/60 border border-white/10" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
