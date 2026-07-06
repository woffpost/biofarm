"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Clock, Phone, ArrowRight, Shield, Truck, FlaskConical, Menu, X, Star } from "lucide-react";

const GREEN = "#006B3E";
const MINT = "#F0FAF5";
const DARK = "#0D1A14";
const TEAL = "#0891B2";

const categories = [
  { name: "Prescription", icon: "💊", count: "2,400+ items" },
  { name: "Vitamins & Supplements", icon: "🌿", count: "380 products" },
  { name: "Dermocosmetics", icon: "✨", count: "240 brands" },
  { name: "Baby & Mother", icon: "🍼", count: "190 products" },
  { name: "Medical Devices", icon: "🩺", count: "120 items" },
  { name: "Homeopathy", icon: "🌱", count: "95 products" },
];

const featured = [
  { name: "Vitamin D3 4000 IU", brand: "Solgar", price: "€18.90", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80" },
  { name: "Magnesium Bisglycinate", brand: "Douglas", price: "€22.50", img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&q=80" },
  { name: "Omega-3 Fish Oil", brand: "Nordic Naturals", price: "€34.80", img: "https://images.unsplash.com/photo-1585399000684-d2f72d519094?w=400&q=80" },
  { name: "Probiotic 30B", brand: "Jarrow", price: "€28.40", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
];

const services = [
  { icon: <FlaskConical className="w-5 h-5" />, title: "Prescription Dispensing", desc: "Paper and electronic prescriptions accepted. Controlled substances available." },
  { icon: <Truck className="w-5 h-5" />, title: "Same-Day Delivery", desc: "Order before 14:00, receive by 19:00. Free delivery over €25." },
  { icon: <Shield className="w-5 h-5" />, title: "Pharmacist Consultation", desc: "Free face-to-face or phone consultation with certified pharmacists." },
  { icon: <Star className="w-5 h-5" />, title: "Loyalty Programme", desc: "Earn 1 point per €1 spent. Redeem as discount on next purchase." },
];

const locations = [
  { name: "Hauptplatz Branch", addr: "Hauptplatz 12, 8010 Graz", hours: "Mo–Fr 8–19 · Sa 9–14" },
  { name: "Jakominiplatz", addr: "Jakominiplatz 5, 8010 Graz", hours: "Mo–Fr 8–20 · Sa 9–17" },
  { name: "Smart City Branch", addr: "Waagner-Biro-Str. 100", hours: "Mo–Sa 9–20 · Su 10–18" },
];

export default function PharmacyDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white", fontFamily: "'Inter', -apple-system, sans-serif", color: DARK }}>

      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs font-medium" style={{ backgroundColor: GREEN, color: "rgba(255,255,255,0.7)" }}>
        <div className="flex items-center gap-6 max-w-6xl mx-auto w-full">
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />+43 316 123 456</span>
          <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" />Free delivery over €25</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />Open today: 8:00–20:00</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-white" style={{ borderColor: `${DARK}10` }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-sm" style={{ backgroundColor: GREEN }}>
              Rx
            </div>
            <div>
              <div className="font-black text-base leading-tight" style={{ color: DARK }}>BioFarm</div>
              <div className="text-xs" style={{ color: `${DARK}45` }}>Pharmacy · Graz</div>
            </div>
          </a>

          {/* Search */}
          <div className="relative flex-1 max-w-md hidden md:block">
            <Search className="absolute left-3 top-2.5 w-4 h-4" style={{ color: `${DARK}40` }} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search medicine, supplements, cosmetics..."
              className="w-full h-10 rounded-xl border pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400"
              style={{ borderColor: `${DARK}15` }}
            />
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium" style={{ color: `${DARK}60` }}>
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#prescription" className="hover:text-gray-900 transition-colors">Prescription</a>
            <a href="#locations" className="hover:text-gray-900 transition-colors">Locations</a>
          </div>

          <div className="flex items-center gap-2">
            <a href="#prescription" className="hidden md:inline-flex items-center gap-1.5 font-semibold h-10 px-5 rounded-xl text-sm text-white transition-colors" style={{ backgroundColor: GREEN }}>
              Upload Rx
            </a>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-16 border-b" style={{ borderColor: `${DARK}10` }}>
            <span className="font-black text-lg" style={{ color: DARK }}>BioFarm</span>
            <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5" /></button>
          </div>
          <div className="flex flex-col px-6 pt-6">
            {["Services", "Prescription", "Locations", "About"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                className="text-2xl font-bold py-4 border-b" style={{ color: DARK, borderColor: `${DARK}10` }}>{l}</a>
            ))}
          </div>
          <div className="mt-auto px-6 pb-8">
            <a href="#prescription" className="flex items-center justify-center h-12 rounded-xl font-semibold text-sm text-white w-full" style={{ backgroundColor: GREEN }}>
              Upload Prescription
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${GREEN} 0%, #004D2E 100%)`, minHeight: "76vh" }}>
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white/70 mb-8">
              <Shield className="w-3.5 h-3.5 text-white" /> Certified pharmacy · Since 1998
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
              Your health,<br />
              <span style={{ color: "#6EE7B7" }}>expertly</span><br />
              supported.
            </h1>
            <p className="text-white/65 text-base leading-relaxed mb-10 max-w-md">
              3 pharmacies in Graz with 25 years of experience. Prescriptions, consultations, cosmetics, and same-day delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 font-semibold h-12 px-8 rounded-xl text-sm bg-white" style={{ color: GREEN }}>
                Browse Catalog <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#prescription" className="inline-flex items-center gap-2 font-semibold h-12 px-8 rounded-xl text-sm text-white border border-white/30 hover:bg-white/10 transition-colors">
                Upload Prescription
              </a>
            </div>
          </div>
          {/* Quick upload card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-auto w-full">
            <h3 className="font-black text-lg mb-1" style={{ color: DARK }}>Upload prescription</h3>
            <p className="text-sm mb-6" style={{ color: `${DARK}55` }}>We'll prepare your order and call to confirm.</p>
            <div className="border-2 border-dashed rounded-xl py-10 text-center mb-4 cursor-pointer hover:bg-gray-50 transition-colors" style={{ borderColor: `${GREEN}30` }}>
              <FlaskConical className="w-8 h-8 mx-auto mb-2" style={{ color: `${GREEN}60` }} />
              <p className="text-sm font-semibold" style={{ color: DARK }}>Drag & drop prescription</p>
              <p className="text-xs mt-1" style={{ color: `${DARK}45` }}>or <span className="underline" style={{ color: GREEN }}>browse files</span> · PDF, JPG, PNG</p>
            </div>
            <button className="w-full h-11 rounded-xl text-sm font-bold text-white transition-colors" style={{ backgroundColor: GREEN }}>
              Submit Prescription
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="catalog" className="py-20 px-6" style={{ backgroundColor: MINT }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>Product range</p>
            <h2 className="text-3xl font-black" style={{ color: DARK }}>Browse categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <a key={i} href="#" className="bg-white rounded-2xl p-5 border hover:border-emerald-200 hover:shadow-md transition-all group" style={{ borderColor: `${DARK}08` }}>
                <div className="text-3xl mb-3">{cat.icon}</div>
                <div className="font-bold text-sm mb-1" style={{ color: DARK }}>{cat.name}</div>
                <div className="text-xs" style={{ color: `${DARK}45` }}>{cat.count}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>Popular this month</p>
              <h2 className="text-3xl font-black" style={{ color: DARK }}>Top supplements</h2>
            </div>
            <a href="#" className="text-sm font-semibold flex items-center gap-1.5" style={{ color: GREEN }}>
              View all <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {featured.map((p, i) => (
              <div key={i} className="rounded-2xl border overflow-hidden group hover:shadow-md transition-all" style={{ borderColor: `${DARK}08` }}>
                <div className="relative h-44">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="text-xs mb-1" style={{ color: `${DARK}45` }}>{p.brand}</div>
                  <div className="font-bold text-sm mb-2" style={{ color: DARK }}>{p.name}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-base" style={{ color: GREEN }}>{p.price}</span>
                    <button className="text-xs font-bold px-3 py-1.5 rounded-lg text-white" style={{ backgroundColor: GREEN }}>Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6" style={{ backgroundColor: MINT }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>What we offer</p>
            <h2 className="text-3xl font-black" style={{ color: DARK }}>Pharmacy services</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border" style={{ borderColor: `${DARK}06` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white" style={{ backgroundColor: GREEN }}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: DARK }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: `${DARK}55` }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescription */}
      <section id="prescription" className="py-20 px-6" style={{ backgroundColor: MINT }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>Electronic & paper</p>
            <h2 className="text-3xl font-black" style={{ color: DARK }}>Prescription dispensing</h2>
            <p className="text-sm mt-2 max-w-md mx-auto" style={{ color: `${DARK}55` }}>
              Upload your prescription online or bring it in-store. We accept all formats and can deliver same day.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: `${DARK}08` }}>
              <h3 className="font-black text-base mb-6" style={{ color: DARK }}>Upload your prescription</h3>
              <div className="border-2 border-dashed rounded-xl py-10 text-center mb-5 cursor-pointer hover:bg-gray-50 transition-colors" style={{ borderColor: `${GREEN}30` }}>
                <FlaskConical className="w-8 h-8 mx-auto mb-2" style={{ color: `${GREEN}60` }} />
                <p className="text-sm font-semibold" style={{ color: DARK }}>Drag & drop your prescription</p>
                <p className="text-xs mt-1" style={{ color: `${DARK}45` }}>PDF, JPG, PNG · Max 10MB</p>
                <button className="mt-4 text-xs font-bold px-4 py-2 rounded-lg text-white" style={{ backgroundColor: GREEN }}>
                  Browse files
                </button>
              </div>
              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: `${DARK}50` }}>Your name</label>
                  <input placeholder="As shown on prescription" className="w-full h-11 rounded-xl border px-3 text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }} />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: `${DARK}50` }}>Phone number</label>
                  <input placeholder="+43 316..." className="w-full h-11 rounded-xl border px-3 text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }} />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-1.5" style={{ color: `${DARK}50` }}>Preferred location</label>
                  <select className="w-full h-11 rounded-xl border px-3 text-sm outline-none" style={{ borderColor: `${DARK}15`, color: DARK }}>
                    <option>Hauptplatz Branch</option>
                    <option>Jakominiplatz</option>
                    <option>Smart City Branch</option>
                    <option>Home delivery</option>
                  </select>
                </div>
              </div>
              <button className="w-full h-11 rounded-xl text-sm font-bold text-white" style={{ backgroundColor: GREEN }}>
                Submit Prescription
              </button>
              <p className="text-xs text-center mt-3" style={{ color: `${DARK}40` }}>
                We'll call you within 2 hours to confirm your order.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-black text-base mb-4" style={{ color: DARK }}>What we accept</h3>
              {[
                { icon: "📋", title: "Paper prescriptions", desc: "Bring in-store or photograph and upload. Valid Austrian and EU prescriptions accepted." },
                { icon: "💻", title: "Electronic prescriptions (e-Rezept)", desc: "Scan the QR code or send us the e-Rezept token directly. Fully integrated with ELGA." },
                { icon: "🌍", title: "EU cross-border prescriptions", desc: "Prescriptions issued by EU member state physicians valid under Directive 2011/24/EU." },
                { icon: "🔒", title: "Controlled substances", desc: "Narcotics and psychotropics dispensed with valid Suchtmittelrezept only. ID required." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 flex gap-4 border" style={{ borderColor: `${DARK}06` }}>
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm mb-1" style={{ color: DARK }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: `${DARK}55` }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GREEN }}>Our story</p>
            <h2 className="text-3xl font-black mb-5 leading-tight" style={{ color: DARK }}>
              Serving Graz families<br />for 25 years.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: `${DARK}65` }}>
              BioFarm was founded in 1998 by pharmacist Dr. Helena Krenn as a single dispensary on Hauptplatz. From the start, the focus was on personalised consultation, not just product sales.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: `${DARK}65` }}>
              Today BioFarm operates 3 branches across Graz, employs 24 licensed pharmacists, and carries over 12,000 products. Same-day delivery launched in 2021 now covers all Graz postal codes.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "1998", l: "Founded" },
                { n: "24", l: "Pharmacists" },
                { n: "12k+", l: "Products" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border p-4 text-center" style={{ borderColor: `${DARK}10` }}>
                  <div className="font-black text-xl mb-1" style={{ color: GREEN }}>{s.n}</div>
                  <div className="text-xs" style={{ color: `${DARK}50` }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden h-52">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="Pharmacy" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-5 border" style={{ borderColor: `${DARK}08`, backgroundColor: MINT }}>
                <Shield className="w-5 h-5 mb-2" style={{ color: GREEN }} />
                <div className="font-bold text-sm" style={{ color: DARK }}>Certified</div>
                <div className="text-xs" style={{ color: `${DARK}50` }}>Registered pharmacies · AT-1287</div>
              </div>
              <div className="rounded-2xl p-5 border" style={{ borderColor: `${DARK}08`, backgroundColor: MINT }}>
                <Star className="w-5 h-5 mb-2" style={{ color: GREEN }} />
                <div className="font-bold text-sm" style={{ color: DARK }}>4.9 ★</div>
                <div className="text-xs" style={{ color: `${DARK}50` }}>Average Google rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: GREEN }}>Find us</p>
            <h2 className="text-3xl font-black" style={{ color: DARK }}>3 locations in Graz</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {locations.map((loc, i) => (
              <div key={i} className="rounded-2xl border p-6" style={{ borderColor: `${DARK}08` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-white text-xs font-bold" style={{ backgroundColor: GREEN }}>
                  {i + 1}
                </div>
                <h3 className="font-bold mb-1" style={{ color: DARK }}>{loc.name}</h3>
                <p className="text-sm flex items-center gap-1.5 mb-2" style={{ color: `${DARK}55` }}>
                  <MapPin className="w-3.5 h-3.5 shrink-0" />{loc.addr}
                </p>
                <p className="text-sm flex items-center gap-1.5" style={{ color: `${DARK}55` }}>
                  <Clock className="w-3.5 h-3.5 shrink-0" />{loc.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t" style={{ backgroundColor: DARK, borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          <span className="font-black text-sm text-white">BioFarm Pharmacy</span>
          <span>Demo site — <a href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>built by Vladimir Rusacov</a></span>
          <span>© 2026 BioFarm GmbH · Aut. Pharmacy #AT-1287</span>
        </div>
      </footer>
    </div>
  );
}
