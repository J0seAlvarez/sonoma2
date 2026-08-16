import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = ['Services', 'Work', 'About', 'Testimonials', 'Contact']

const SERVICES = [
  {
    num: '01',
    title: 'Web Design',
    desc: 'Bespoke interfaces engineered for conversion. We design for the humans behind every click — with intention.',
    tags: ['UI/UX', 'Figma', 'Prototyping'],
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'React, Next.js, and Headless CMS builds that perform at scale. Clean code, zero compromise.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    num: '03',
    title: 'Brand Identity',
    desc: 'Visual systems that tell your story before a single word is read. Logo, typography, color, motion.',
    tags: ['Branding', 'Motion', 'Systems'],
  },
  {
    num: '04',
    title: 'SEO & Performance',
    desc: 'Core Web Vitals, technical SEO, and analytics that turn organic traffic into qualified pipeline.',
    tags: ['SEO', 'Analytics', 'Speed'],
  },
  {
    num: '05',
    title: 'E-Commerce',
    desc: 'Shopify and custom storefronts designed to reduce friction and maximize revenue per visitor.',
    tags: ['Shopify', 'Conversion', 'CRO'],
  },
  {
    num: '06',
    title: 'Maintenance & Support',
    desc: 'Ongoing retainers for updates, security, and growth experiments. Your team on call.',
    tags: ['Retainer', 'Security', 'Support'],
  },
]

const WORK = [
  {
    client: 'Halverson & Reed',
    type: 'B2B SaaS',
    year: '2025',
    result: '+340% qualified leads',
    img: 'photo-1461749280684-dccba630e2f6',
  },
  {
    client: 'Pacific Shelf Co.',
    type: 'E-Commerce',
    year: '2025',
    result: '2.8× conversion lift',
    img: 'photo-1542744173-8e7e53415bb0',
  },
  {
    client: 'Arctura Health',
    type: 'Healthcare SaaS',
    year: '2024',
    result: '58% lower bounce rate',
    img: 'photo-1576091160399-112ba8d25d1d',
  },
]

const TESTIMONIALS = [
  {
    quote: "Sonoma redesigned our entire platform in eight weeks. The result was a 340% increase in demo requests within the first quarter. They didn't just build a website — they built a growth engine.",
    name: 'Marcus Halverson',
    title: 'CEO, Halverson & Reed',
    avatar: 'photo-1472099645785-5658abf4ff4e',
  },
  {
    quote: "Every agency we'd worked with before gave us templates dressed up as custom work. Sonoma was different from the first call. Thoughtful, meticulous, and deeply invested in outcomes.",
    name: 'Priya Nair',
    title: 'VP Marketing, Arctura Health',
    avatar: 'photo-1508214751196-bcfd4ca60f91',
  },
  {
    quote: "Our Shopify store went from $40k/mo to $112k/mo within three months of launch. The UX work alone paid for the entire engagement twelve times over.",
    name: 'Derek Solis',
    title: 'Founder, Pacific Shelf Co.',
    avatar: 'photo-1500648767791-00dcc994a43e',
  },
]

export default function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark-mode')
    } else {
      root.classList.remove('dark-mode')
    }
  }, [dark])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const bg = dark ? '#0d0f14' : '#f7f6f2'
  const fg = dark ? '#e8e4dc' : '#1a1a1a'
  const subtle = dark ? '#2a2d35' : '#e8e4dc'
  const muted = dark ? '#6b7180' : '#7a7068'
  const accent = '#c8a96e'
  const accentDim = dark ? 'rgba(200,169,110,0.12)' : 'rgba(200,169,110,0.15)'
  const cardBg = dark ? '#13161d' : '#ffffff'
  const navBg = dark ? 'rgba(13,15,20,0.92)' : 'rgba(247,246,242,0.92)'
  const border = dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'

  return (
    <div style={{ background: bg, color: fg, minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", transition: 'background 0.3s, color 0.3s' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: navBg,
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${border}`,
        padding: '0 clamp(1.5rem, 5vw, 4rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
        transition: 'background 0.3s',
      }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.25rem', letterSpacing: '-0.02em', color: fg }}>
          Sonoma<span style={{ color: accent }}> Web</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{ background: 'none', border: 'none', color: muted, cursor: 'pointer', fontSize: '0.875rem', fontFamily: 'inherit', letterSpacing: '0.02em', transition: 'color 0.2s', padding: '4px 0' }}
              onMouseEnter={e => (e.currentTarget.style.color = fg)}
              onMouseLeave={e => (e.currentTarget.style.color = muted)}
            >{link}</button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            style={{ background: subtle, border: 'none', color: fg, cursor: 'pointer', borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem', fontFamily: 'inherit', transition: 'all 0.2s' }}
          >{dark ? '☀ Light' : '● Dark'}</button>
          <button
            onClick={() => scrollTo('contact')}
            style={{ background: accent, border: 'none', color: '#1a1208', cursor: 'pointer', borderRadius: '4px', padding: '8px 20px', fontSize: '0.875rem', fontFamily: 'inherit', fontWeight: 600, transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >Get a quote</button>
        </div>

        {/* Mobile hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-nav">
          <button onClick={() => setDark(!dark)} style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', fontSize: '1rem' }}>{dark ? '☀' : '●'}</button>
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', fontSize: '1.4rem', lineHeight: 1 }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: cardBg, borderBottom: `1px solid ${border}`,
          padding: '1.5rem clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {NAV_LINKS.map(link => (
            <button key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              style={{ background: 'none', border: 'none', color: fg, cursor: 'pointer', fontSize: '1.1rem', fontFamily: 'inherit', textAlign: 'left', padding: '6px 0', borderBottom: `1px solid ${border}` }}
            >{link}</button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{ background: accent, border: 'none', color: '#1a1208', cursor: 'pointer', borderRadius: '4px', padding: '12px 20px', fontSize: '1rem', fontFamily: 'inherit', fontWeight: 600, marginTop: '0.5rem' }}
          >Get a quote</button>
        </div>
      )}

      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 6rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(${border} 1px, transparent 1px), linear-gradient(90deg, ${border} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: dark
            ? 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,169,110,0.07) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,169,110,0.12) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <div style={{ width: '32px', height: '1px', background: accent }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent }}>Sonoma, California · Est. 2017</span>
          </div>

          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: fg,
            maxWidth: '900px',
            marginBottom: '2rem',
            fontWeight: 400,
          }}>
            We build B2B websites<br />
            that <em style={{ color: accent, fontStyle: 'italic' }}>generate revenue.</em>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: muted, maxWidth: '520px', lineHeight: 1.7, marginBottom: '3rem' }}>
            Strategy-led design and development for ambitious B2B companies. We've helped 120+ clients turn their web presence into their #1 sales asset.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('contact')}
              style={{ background: accent, border: 'none', color: '#1a1208', cursor: 'pointer', borderRadius: '4px', padding: '14px 32px', fontSize: '1rem', fontFamily: 'inherit', fontWeight: 600, letterSpacing: '0.01em', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >Start a project</button>
            <button
              onClick={() => scrollTo('work')}
              style={{ background: 'transparent', border: `1px solid ${border}`, color: fg, cursor: 'pointer', borderRadius: '4px', padding: '14px 32px', fontSize: '1rem', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = accent)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = border)}
            >View our work</button>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 'clamp(2rem, 4vw, 4rem)', flexWrap: 'wrap', marginTop: '5rem', paddingTop: '3rem', borderTop: `1px solid ${border}` }}>
            {[['120+', 'Projects delivered'], ['$48M', 'Client revenue generated'], ['97%', 'Client retention rate'], ['8 wks', 'Avg. time to launch']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2.25rem', color: fg, letterSpacing: '-0.02em' }}>{n}</div>
                <div style={{ fontSize: '0.8rem', color: muted, letterSpacing: '0.05em', marginTop: '2px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', marginBottom: '0.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent }}>What we do</span>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '0.75rem', color: fg }}>
                Full-stack digital<br />services for B2B
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1px', background: border, marginTop: '3rem', border: `1px solid ${border}` }}>
            {SERVICES.map((s, i) => (
              <div key={i}
                style={{ background: bg, padding: '2.5rem', transition: 'background 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = accentDim)}
                onMouseLeave={e => (e.currentTarget.style.background = bg)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: accent, letterSpacing: '0.1em' }}>{s.num}</span>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {s.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.7rem', color: muted, background: subtle, borderRadius: '2px', padding: '2px 8px', letterSpacing: '0.03em' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.5rem', fontWeight: 400, color: fg, marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: muted, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent }}>Selected work</span>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '0.75rem', marginBottom: '3rem', color: fg }}>
            Results that compound
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: border, border: `1px solid ${border}` }}>
            {WORK.map((w, i) => (
              <div key={i} style={{ background: bg, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '2rem', padding: '0', overflow: 'hidden', transition: 'background 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = accentDim)}
                onMouseLeave={e => (e.currentTarget.style.background = bg)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 3rem)', padding: '2rem clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: muted, minWidth: '24px' }}>0{i+1}</span>
                  <div>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)', fontWeight: 400, color: fg }}>{w.client}</div>
                    <div style={{ fontSize: '0.8rem', color: muted, marginTop: '2px' }}>{w.type} · {w.year}</div>
                  </div>
                </div>
                <div style={{ padding: '2rem clamp(1.5rem, 3vw, 2.5rem)', textAlign: 'right' }}>
                  <div style={{ fontSize: '0.875rem', color: accent, fontWeight: 500 }}>{w.result}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
            <button
              onClick={() => scrollTo('contact')}
              style={{ background: 'none', border: 'none', color: accent, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem', letterSpacing: '0.05em', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >See all case studies →</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop: `1px solid ${border}`,
        background: dark ? '#0f1117' : '#f0ece4',
        transition: 'background 0.3s',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent }}>About us</span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.15, marginTop: '0.75rem', color: fg }}>
              Built in Sonoma.<br />
              <em style={{ fontStyle: 'italic' }}>Trusted worldwide.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: muted, lineHeight: 1.8, marginTop: '1.5rem' }}>
              We're a boutique B2B web studio founded in Sonoma Valley, California. Our team of designers, developers, and strategists obsess over one thing: turning your website from a cost center into your most powerful sales tool.
            </p>
            <p style={{ fontSize: '1rem', color: muted, lineHeight: 1.8, marginTop: '1rem' }}>
              We work with 12 clients at a time — no more. That focus is why our work consistently outperforms.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: '4px', padding: '1.75rem', transition: 'background 0.3s' }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: accent }}>12</div>
              <div style={{ fontSize: '0.8rem', color: muted, marginTop: '4px' }}>Active clients max</div>
            </div>
            <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: '4px', padding: '1.75rem', transition: 'background 0.3s' }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: accent }}>8yr</div>
              <div style={{ fontSize: '0.8rem', color: muted, marginTop: '4px' }}>In business</div>
            </div>
            <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: '4px', padding: '1.75rem', transition: 'background 0.3s' }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: accent }}>18</div>
              <div style={{ fontSize: '0.8rem', color: muted, marginTop: '4px' }}>Team members</div>
            </div>
            <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: '4px', padding: '1.75rem', transition: 'background 0.3s' }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: accent }}>4.9★</div>
              <div style={{ fontSize: '0.8rem', color: muted, marginTop: '4px' }}>Clutch rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)', borderTop: `1px solid ${border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent }}>Client voices</span>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1, marginTop: '0.75rem', marginBottom: '3rem', color: fg }}>
            What our clients say
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: border, border: `1px solid ${border}` }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i}
                style={{
                  background: activeTestimonial === i ? accentDim : bg,
                  padding: '2.5rem',
                  cursor: 'pointer',
                  transition: 'background 0.25s',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem',
                }}
                onClick={() => setActiveTestimonial(i)}
              >
                <div>
                  <div style={{ color: accent, fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>"</div>
                  <p style={{ fontSize: '0.95rem', color: fg, lineHeight: 1.8, fontStyle: 'italic', fontFamily: "'Instrument Serif', serif" }}>
                    {t.quote}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <img
                    src={`https://images.unsplash.com/${t.avatar}?w=80&h=80&fit=crop&auto=format`}
                    alt={t.name}
                    style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', background: subtle }}
                  />
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: fg }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: muted }}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
        borderTop: `1px solid ${border}`,
        background: dark ? '#0f1117' : '#f0ece4',
        transition: 'background 0.3s',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(3rem, 6vw, 6rem)' }}>
          <div>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: accent }}>Start a project</span>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.15, marginTop: '0.75rem', color: fg }}>
              Let's build<br />
              <em style={{ fontStyle: 'italic' }}>something that works.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: muted, lineHeight: 1.8, marginTop: '1.5rem' }}>
              Tell us about your project. We respond within one business day and offer a free 30-minute strategy call.
            </p>
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[['hello@sonomawebdesign.co', 'Email'], ['(707) 555-0142', 'Phone'], ['Sonoma, CA 95476', 'Location']].map(([val, label]) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '0.7rem', color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: '56px', paddingTop: '2px' }}>{label}</span>
                  <span style={{ fontSize: '0.9rem', color: fg }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ background: accentDim, border: `1px solid ${border}`, borderRadius: '4px', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '2rem', color: fg, marginBottom: '1rem' }}>Message received.</div>
                <p style={{ color: muted, fontSize: '0.95rem', lineHeight: 1.7 }}>We'll review your project and reach out within one business day. Thank you for considering Sonoma Web Design.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { key: 'name', label: 'Full name', type: 'text', placeholder: 'Sarah Chen' },
                  { key: 'email', label: 'Work email', type: 'email', placeholder: 'sarah@company.com' },
                  { key: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>{label}</label>
                    <input
                      required
                      type={type}
                      placeholder={placeholder}
                      value={(formData as any)[key]}
                      onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))}
                      style={{
                        width: '100%', background: cardBg, border: `1px solid ${border}`, color: fg,
                        borderRadius: '4px', padding: '12px 14px', fontSize: '0.9rem', fontFamily: 'inherit',
                        outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
                      }}
                      onFocus={e => (e.target.style.borderColor = accent)}
                      onBlur={e => (e.target.style.borderColor = border)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>Budget range</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData(d => ({ ...d, budget: e.target.value }))}
                    style={{
                      width: '100%', background: cardBg, border: `1px solid ${border}`, color: formData.budget ? fg : muted,
                      borderRadius: '4px', padding: '12px 14px', fontSize: '0.9rem', fontFamily: 'inherit',
                      outline: 'none', cursor: 'pointer', boxSizing: 'border-box',
                    }}
                  >
                    <option value="" disabled>Select range</option>
                    {['$5k – $15k', '$15k – $30k', '$30k – $75k', '$75k+'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>Tell us about your project</label>
                  <textarea
                    required
                    placeholder="We're rebuilding our marketing site ahead of a Series B raise..."
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                    style={{
                      width: '100%', background: cardBg, border: `1px solid ${border}`, color: fg,
                      borderRadius: '4px', padding: '12px 14px', fontSize: '0.9rem', fontFamily: 'inherit',
                      outline: 'none', resize: 'vertical', transition: 'border-color 0.2s', boxSizing: 'border-box',
                    }}
                    onFocus={e => (e.target.style.borderColor = accent)}
                    onBlur={e => (e.target.style.borderColor = border)}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: accent, border: 'none', color: '#1a1208', cursor: 'pointer',
                    borderRadius: '4px', padding: '14px 32px', fontSize: '1rem', fontFamily: 'inherit',
                    fontWeight: 600, transition: 'opacity 0.2s', letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >Send message →</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${border}`,
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem',
      }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '1.1rem', color: fg }}>
          Sonoma<span style={{ color: accent }}> Web</span>
        </div>
        <div style={{ fontSize: '0.8rem', color: muted }}>© 2026 Sonoma Web Design. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy', 'Terms', 'LinkedIn', 'Dribbble'].map(l => (
            <button key={l} style={{ background: 'none', border: 'none', color: muted, cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = fg)}
              onMouseLeave={e => (e.currentTarget.style.color = muted)}
            >{l}</button>
          ))}
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        * { box-sizing: border-box; }
        input::placeholder, textarea::placeholder { opacity: 0.45; }
      `}</style>
    </div>
  )
}
