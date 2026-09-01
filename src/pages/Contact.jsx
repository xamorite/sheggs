export default function Contact(){
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Let's talk</span>
        <h1>Contact.</h1>
        <p className="lede">Currently booking weddings, portraits and editorial work. Send details and expect a reply within two business days.</p>
      </section>
      <section>
        <div className="wrap">
          <div className="contact-grid">
            <div className="reveal is-in">
              <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); const b=e.target.querySelector('button[type="submit"]'); const o=b.textContent; b.textContent='Message sent'; e.target.reset(); setTimeout(()=>b.textContent=o,2600)}}>
                <div className="field"><label>Full name</label><input type="text" placeholder="Your name" required /></div>
                <div className="field"><label>Email address</label><input type="email" placeholder="you@email.com" required /></div>
                <div className="field"><label>Service</label><select><option>Wedding</option><option>Portrait session</option><option>Editorial / campaign</option><option>Event</option><option>Equipment rental</option><option>Music video / Commercial</option><option>Something else</option></select></div>
                <div className="field"><label>Tell me about it</label><textarea placeholder="Location, headcount, vibe — whatever helps me picture it." required></textarea></div>
                <button type="submit" className="btn solid" data-cursor="big">Send enquiry</button>
              </form>
            </div>
            <div className="reveal is-in">
              <div className="contact-info">
                <div className="item"><span className="eyebrow">Email</span><b>Say hello</b><a href="mailto:sheqqs06@gmail.com">sheqqs06@gmail.com</a></div>
                <div className="item"><span className="eyebrow">Direct Call</span><b>Phone</b><a href="tel:+2349075235165">090 7523 5165</a></div>
                <div className="item"><span className="eyebrow">WhatsApp</span><b>Chat with Sheqqs</b><a href="https://wa.me/2348039697731" target="_blank" rel="noopener">080 3969 7731</a></div>
                <div className="item"><span className="eyebrow">Studio</span><b>Based in Nigeria</b><p>Available worldwide — travel quoted separately.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
