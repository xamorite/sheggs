import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Sheqqs — home">
        <img src="/assets/stranparentimage.png" alt="Sheqqs — Cinematographer · Photographer · Equipment Rentals" />
      </Link>
      <nav className={`main-nav ${open ? 'is-open' : ''}`}>
        <ul>
          <li><NavLink to="/" className={({isActive})=>isActive?'is-active':''} onClick={()=>setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/work" className={({isActive})=>isActive?'is-active':''} onClick={()=>setOpen(false)}>Work</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=>isActive?'is-active':''} onClick={()=>setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" className={({isActive})=>isActive?'is-active':''} onClick={()=>setOpen(false)}>Contact</NavLink></li>
        </ul>
        <Link to="/contact" className="nav-cta" onClick={()=>setOpen(false)}>Book a session</Link>
      </nav>
      <button className="nav-toggle" aria-label="Toggle menu" onClick={()=>setOpen(o=>!o)} style={{display: open ? 'block' : undefined}}>
        <span></span><span></span><span></span>
      </button>
    </header>
  )
}
