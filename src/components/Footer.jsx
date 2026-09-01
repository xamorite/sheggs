export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/stranparentimage.png" alt="Sheqqs — Cinematographer · Photographer · Equipment Rentals" />
            <p>Cinematographer · Photographer · Equipment Rentals — creating visuals that make people feel something.</p>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:sheqqs06@gmail.com">sheqqs06@gmail.com</a></li>
              <li><a href="tel:+2349075235165">090 7523 5165</a></li>
              <li><a href="/contact">Booking enquiry →</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">Behance</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="meta">© <span className="js-year">{new Date().getFullYear()}</span> Sheqqs. All rights reserved.</span>
          <span className="meta">Cinematographer · Photographer · Equipment Rentals</span>
        </div>
      </div>
    </footer>
  )
}
