import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="hero-frame"><div className="ph tone-2"><img src="/assets/images/0T5B9749.JPG" alt="Cinematic frame — Sheqqs" loading="eager" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /></div></div>
        <div className="hero-top">
          <span className="eyebrow">Cinematographer · Photographer · Equipment Rentals</span>
          <span className="eyebrow" style={{textAlign:'right'}}>Based in Nigeria — <br/>available worldwide</span>
        </div>
        <h1><span>SHEQQS</span><span className="thin">VISUALS</span></h1>
        <div className="hero-sub">
          <p className="lede">I don’t just capture moments — I create visual experiences. Music videos, commercials, events and rentals — cinematic eye, precise detail.</p>
          <Link to="/work" className="btn solid" data-cursor="big">View the work</Link>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div className="marquee-track"><span>Weddings <em>01</em></span><span>Portraits <em>02</em></span><span>Editorial <em>03</em></span><span>Street <em>04</em></span><span>Events <em>05</em></span></div></div>

      <section id="work">
        <div className="wrap">
          <div className="section-head reveal">
            <div><span className="eyebrow">Selected work</span><h2>Recent<br/>frames.</h2></div>
            <p className="lede">A short edit from the last few seasons — full sets, categories and stories live in the portfolio.</p>
          </div>
          <div className="grid-work reveal-stagger">
            <article className="work-card tall"><div className="ph tone-1"><img src="/assets/images/works/IMG_2642.JPG" alt="Davido" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div><span className="idx">01 — Davido · Portrait</span><div className="cap"><h3>Davido, Lagos</h3><span className="meta">f/1.8 · 1/400s<br/>ISO 200</span></div></article>
            <article className="work-card tall"><div className="ph tone-4"><img src="/assets/images/works/IMG_2644.JPG" alt="Davido" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div><span className="idx">02 — Davido · Live</span><div className="cap"><h3>Davido, Stage</h3><span className="meta">f/2.8 · 1/250s<br/>ISO 400</span></div></article>
            <article className="work-card wide"><div className="ph tone-3"><img src="/assets/images/works/IMG_2647.JPG" alt="Davido — Wide" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div><span className="idx">03 — Davido · Wide</span><div className="cap"><h3>Davido — Wide Frame</h3><span className="meta">f/4 · 1/1000s<br/>ISO 800</span></div></article>
            <article className="work-card"><div className="ph tone-5"><img src="/assets/images/zombie/IMG_5694.JPG" alt="Zombie" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div><span className="idx">04 — Zombie</span><div className="cap"><h3>Zombie, On Set</h3><span className="meta">f/2 · 1/320s<br/>ISO 100</span></div></article>
            <article className="work-card"><div className="ph tone-2"><img src="/assets/images/zombie/IMG_5704.JPG" alt="Zombie" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div><span className="idx">05 — Zombie</span><div className="cap"><h3>Zombie Portrait</h3><span className="meta">f/1.4 · 1/200s<br/>ISO 320</span></div></article>
          </div>
          <div className="section-foot reveal"><span className="meta">01 — 05 of 84 frames archived</span><Link to="/work" className="text-link">View all works →</Link></div>
        </div>
      </section>

      <section id="video">
        <div className="wrap">
          <div className="section-head reveal"><div><span className="eyebrow">Motion</span><h2>Video<br/>works.</h2></div><p className="lede">Cinematography in motion — music videos, commercials and event films. Tap to play with sound.</p></div>
          <div className="grid-work reveal-stagger">
            <article className="work-card tall"><div className="ph tone-2" style={{padding:0, background:'#000'}}><video src="/assets/videos/chocomalt.MP4" controls playsInline preload="metadata" poster="/assets/images/works/IMG_2642.JPG" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /></div><span className="idx">01 — Commercial</span><div className="cap"><h3>Chocomalt</h3><span className="meta">Commercial · 2024</span></div></article>
            <article className="work-card tall"><div className="ph tone-4" style={{padding:0, background:'#000'}}><video src="/assets/videos/komando.MOV" controls playsInline preload="metadata" poster="/assets/images/works/IMG_2644.JPG" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /></div><span className="idx">02 — Music Video</span><div className="cap"><h3>Komando</h3><span className="meta">Music Video · 2024</span></div></article>
          </div>
        </div>
      </section>

      <section id="all-works-preview" style={{background:'var(--ink-2)'}}>
        <div className="wrap">
          <div className="section-head reveal"><div><span className="eyebrow">Archive</span><h2>All<br/>works.</h2></div><p className="lede">Every file in <code>assets/</code> — preview. <Link to="/work">View all works →</Link></p></div>
          <div className="gallery reveal-stagger is-in" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px'}}>
            {['/assets/images/works/IMG_6023.JPG','/assets/images/works/IMG_2642.JPG','/assets/images/zombie/IMG_5694.JPG','/assets/images/works/IMG_2647.JPG','/assets/images/zombie/IMG_5704.JPG','/assets/images/IMG_4367.JPG'].map((src,i)=>(
              <div key={src} className="gallery-item" style={{position:'relative', aspectRatio:'4/5', overflow:'hidden'}}><div className="ph"><img src={src} alt="" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div></div>
            ))}
          </div>
          <div className="section-foot reveal" style={{marginTop:'18px'}}><Link to="/work" className="btn solid">View all works →</Link></div>
        </div>
      </section>
    </>
  )
}
