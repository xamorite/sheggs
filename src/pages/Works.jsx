import { useEffect, useMemo, useState } from 'react'

// Auto-load every asset in /assets (images + videos) for "All Works" — HEIC excluded (converted to JPG)
const imageModules = import.meta.glob('/assets/**/*.{JPG,jpg,JPEG,jpeg,PNG,png}', { eager: true, query: '?url', import: 'default' })
const videoModules = import.meta.glob('/assets/videos/*.{MP4,mp4,MOV,mov}', { eager: true, query: '?url', import: 'default' })

const CATS = ['all','brand_deals','celebrity','festival','photoshoot','zombies','video']

function catFor(path){
  const p = path.toLowerCase()
  if (p.includes('/brand_deals')) return 'brand_deals'
  if (p.includes('/celebrity')) return 'celebrity'
  if (p.includes('/festival')) return 'festival'
  if (p.includes('/photoshoot')) return 'photoshoot'
  if (p.includes('/zombie')) return 'zombies'
  if (p.includes('/works/')) return 'celebrity'
  if (p.includes('chocomalt') || p.includes('komando') || p.endsWith('.mp4') || p.endsWith('.mov')) return 'video'
  // fallback for root images
  if (p.includes('7005') || p.includes('8118')) return 'photoshoot'
  const cats = ['brand_deals','celebrity','festival','photoshoot','zombies']
  let h=0; for(let i=0;i<p.length;i++) h=(h*31+p.charCodeAt(i))>>>0
  return cats[h%cats.length]
}

export default function Works(){
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(12)
  useEffect(()=> setVisible(12), [filter])
  const assets = useMemo(()=>{
    const imgs = Object.entries(imageModules).map(([path, url])=>({ path, url, type: 'image', cat: catFor(path)}))
    const vids = Object.entries(videoModules).map(([path, url])=>({ path, url, type: 'video', cat: 'video'}))
    // Include root images already in imgs; videos separate. Dedupe by url
    const all = [...imgs, ...vids]
    // Sort: videos last, then by path
    all.sort((a,b)=> a.type===b.type ? a.path.localeCompare(b.path) : a.type==='image' ? -1 : 1)
    return all
  },[])

  const filtered = filter==='all' ? assets : assets.filter(a=>a.cat===filter)
  const shown = filtered.slice(0, visible)

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">The full archive — All Works</span>
        <h1>All Works.</h1>
        <p className="lede">Every file in <code>assets/</code> — images and motion. Filter by Brand Deals, Celebrity, Festival, Photoshoot, Zombies and Video.</p>
      </section>

      <section>
        <div className="wrap">
          <div className="filter-bar reveal is-in">
            {CATS.map(c=>(
              <button key={c} className={`filter-btn ${filter===c?'is-active':''}`} onClick={()=>setFilter(c)}>
                {c==='all'?'All':c.charAt(0).toUpperCase()+c.slice(1).replace('-',' ')}
              </button>
            ))}
          </div>

          <div className="gallery reveal-stagger is-in">
            {shown.map(({path, url, type, cat})=>(
              <div key={path} className={`gallery-item ${type==='video'?'span-2':''}`} data-cat={cat}>
                <div className="ph" style={type==='video'?{padding:0, background:'#000'}:undefined}>
                  {type==='video' ? (
                    <video src={url} controls playsInline preload="metadata" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}} />
                  ) : (
                    <img src={url} alt={path.split('/').pop()} loading="lazy" style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover'}} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="section-foot reveal is-in" style={{display:'flex', flexDirection:'column', gap:'12px', alignItems:'center'}}>
            <span className="meta">Showing {shown.length} of {filtered.length} {filter==='all' ? `· ${assets.length} total` : ''} in <code>assets/</code></span>
            {shown.length < filtered.length && (
              <button className="btn" onClick={()=>setVisible(v=>v+12)}>Load more — {filtered.length - shown.length} remaining</button>
            )}
            {shown.length >= filtered.length && filtered.length < assets.length && filter!=='all' && (
              <button className="btn solid" onClick={()=>{setFilter('all'); setVisible(12)}}>View all works →</button>
            )}
            <span className="meta">Add files to <code>assets/images/</code> or <code>assets/videos/</code> — they appear automatically</span>
          </div>
        </div>
      </section>
    </>
  )
}
