export default function About(){
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">About Me</span>
        <h1>About<br/>Sheqqs.</h1>
        <p className="lede">I don’t just capture moments — I create visual experiences.</p>
      </section>
      <section>
        <div className="wrap">
          <div className="split reveal is-in">
            <div className="split-media"><div className="ring"></div><div className="ph tone-4"><img src="/assets/images/IMG_6499.JPG" alt="Sheqqs" loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/></div></div>
            <div>
              <span className="eyebrow">Cinematographer · Photographer · Equipment Rentals</span>
              <p className="pull-quote mt-lg">I don’t just capture moments — I create visual experiences.</p>
              <p className="lede mt-lg">I’m a Cinematographer, Photographer, and Equipment Rental Professional driven by a passion for turning ideas into striking visual stories. From the energy of music videos and the precision of commercials to the raw emotions of events, I approach every project with a cinematic eye and a commitment to detail.</p>
              <p className="lede mt-lg">My work is built around storytelling, lighting, composition, movement, and atmosphere — creating visuals that don’t just look good, but make people feel something.</p>
              <p className="lede mt-lg" style={{fontWeight:700}}>Your vision. My lens. One story at a time.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{background:'var(--ink-2)'}}>
        <div className="wrap">
          <div className="section-head reveal is-in"><div><span className="eyebrow">How it started</span><h2>A timeline.</h2></div></div>
          <div className="timeline reveal-stagger is-in">
            <div className="timeline-row"><span className="yr">2017</span><h3>First borrowed camera</h3><p>Started shooting friends and campus events.</p></div>
            <div className="timeline-row"><span className="yr">2019</span><h3>First paid wedding</h3><p>Second shooter — learned people relax when you stop asking them to pose.</p></div>
            <div className="timeline-row"><span className="yr">2021</span><h3>Studio Noir campaign</h3><p>First editorial commission on available light.</p></div>
            <div className="timeline-row"><span className="yr">2023</span><h3>Sheqqs founded</h3><p>Full studio with booking calendar and archive.</p></div>
            <div className="timeline-row"><span className="yr">2026</span><h3>84 frames and counting</h3><p>120+ weddings, 14 countries.</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
