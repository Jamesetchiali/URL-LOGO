'use client'

import { useEffect, useRef } from 'react'

export function CinematicDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Array<{
    x: number
    y: number
    r: number
    vx: number
    vy: number
    a: number
    tw: number
  }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }

    function rand(a: number, b: number) {
      return a + Math.random() * (b - a)
    }

    function initParticles() {
      particlesRef.current = []
      const count = Math.round((w * h) / 26000)
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: rand(w * 0.35, w),
          y: rand(0, h),
          r: rand(0.5, 2.2),
          vx: rand(0.05, 0.35),
          vy: rand(-0.15, 0.15),
          a: rand(0.15, 0.55),
          tw: rand(0, Math.PI * 2),
        })
      }
    }

    let t = 0
    let animationId: number

    function loop() {
      t += 0.016
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]
        p.x += p.vx
        p.y += p.vy + Math.sin(t + p.tw) * 0.05

        if (p.x > w + 10) {
          p.x = -10
          p.y = rand(0, h)
        }

        const flicker = 0.6 + 0.4 * Math.sin(t * 2 + p.tw)
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${p.a * flicker})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    resize()
    loop()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const my = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    
    const img = containerRef.current.querySelector('[data-parallax]') as HTMLElement
    if (img) {
      img.style.setProperty('--mx', mx.toFixed(3))
      img.style.setProperty('--my', my.toFixed(3))
    }
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    const img = containerRef.current.querySelector('[data-parallax]') as HTMLElement
    if (img) {
      img.style.setProperty('--mx', '0')
      img.style.setProperty('--my', '0')
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen overflow-hidden bg-[#faf9f6]"
    >
      <img
        data-parallax
        src="data:image/webp;base64,UklGRgBNCQBXRUJQVlA4WAoAAAAEAAAATwkA7wMAVlA4IDRDCQAQJRidASpQCfADPhkMhUIhBB6DGAQAYSzgGUdjtvU64mkfwOcH2b7Hfef4z/P/9n4Z/8f/w+3Lw593/6n/i/1X4+e+F0X/x/8l+8P+h////s+4n/e/9f+/99/8+/3P/j/0X77fQZ+sP/G/vf+Y/7v+k////0/Gn/m/cz4O/vJ+QHwh/sv+q/9H+h/f/5gv/N+43wL/sX/U/cT/b/It/Sv8z/8uyZ9DX91v//6937i/Eb/Vv+T+3P/I+R7+f/4n/vfnt8gH//9vbnB/LP/f/u/TV82/2f9N+Rv96/9fsv+Zfc/43+9/5L/Z/4H/5f73/sfSj/j/6P92fap7H/Yf8T/O/7D/j/v1/8Pon+S/cX8b/cf8t/tP8D+5H3I/w/+B/kf3e/zP7l/Gfyd/vP8j/o/+r/kf3F+wj8g/nf9//t3+T/2P+A/br66Px/+b/qv91/yP8H6u+9/7L/pf6P93/gO9p/rn+e/vf+U/4f+G/eT56fw/+v/nf22/f/6K/Wv9T/x/9B/l//N/pvsG/mf9b/0n+B/cz+7////y/hn/c/8vmJ+qf+T/d/kB9g/9c/xH/H/yX+d/9X+f///23/4f/a/z/+t/9P+l////f+Zf01/0/83/p//N/of///3f0H/ln9T/0n9+/yv/U/xf///8v3z//H3Xful/9v+Z8Lf7Mf/D/Wf8xMSnYHcgsJqiKaWk6MSAwFsg6ueQWE1RFNLSc8UtAnbJ7lXnRizWyy07PI2pZizMW5no4td6vOjG+stJzxS9K1H4WQcjnOzyNqWYszFokROVEU0vxwqOqvWc4ZQU0tJzxVFQ8GciY8HOXTa6hxEaaP6y0oJOEbUuhd1fQWHwrUVhQSoKaWk54paAsedHOfkbWkKbOftHnRzmbQGYlfQWE1RthWic6ZI5e3nwOcjpFOzIzv2/1ew/DINw6Fb2VFHDnr/qXQu+DVXc7P3LiVQXerzo2cJTxS0BY86OczaZ6gipn95N4qzaCnPJg1XUFhNURTS0nPFL0rvGfJg1XaEYdV1LhxBnXM9HFrvWLEJbAWPOr2Jm0BmJX0FhNURTS0nPFL0rvGfJg1XaEYdV1LhxBnXM9HFrvWLEJbAWPOr2Jm0BmJX0FhNURTS/HDpY4WWXRtOyRtwFjzoyTX0dvI+cz724jg/20FmMJPz2yrkus/Hph2w9g/SoaYdsU002i0H6VDTGJqKdBxbTXsH6VL2/G98C9K10IrDd58m1KAroJ4jP7SMr+P4qutMDbD2elcN1Y3yEOptHzGnkcQDinqV3WmTsSKzd3B4GD/FWudh7H5FiYWHbE+1325Z1fNr9Khph2w8fx6ZCPz2D7uL/Q4q4QPEtQdVDiDIxiBE2o2o7mnPGAKawF/YvDtP0qGmHbaTR/Tt68+DGxqRwOXum2PLQ3j84/DQPNZr9KiqcO2HzPuiu64I0bdTkia4eGOMvxjINBs9v8IZchFSPvWFCiRth7B/iqKrZfuJE7D0ehw9jKegzl9JiZq5k/1EoCVXRK+iImdjt5dYJ2H/6f6aAxio13gvdEDlewfpdI9Q2HuV0qGmHbEGgZUNMO2J8w/SoaYdsPbE38Vo0wdM3WNqQZeAwfUHZfi6Zvej2HRIjxzxsKue79tTL45E3rZQkXcKi9ZmM8ajBYP0rXOw9j9wypnniekHPVLwIVShaS0/txXIXqsQ/RYdsPY/Hph3BMkxw6D9gATlez+F4QwVmOuQB0hdILzfPsyBh3tT0vH/5SD/+sQ+H7sPXtpNCRyio0B6BLE65/s16f6giOcIqj/NCQoD667YQ/GZP9MTTTelnpyPFZ9SN4OlI4WNkZwyr+GHrnHreajOohtj7gYo0Ei+2Ifsy4XKdR2w9g/SoaYdsPYP0qGmx/c/Stc7C0RBMykYFmWzUJYz0O1JztgvHAktK17bTv81sD2BWFOxvtk50Z6sf7"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'contrast(1.08) saturate(1.05) brightness(1.02)',
          transform: 'scale(1.06) translate3d(calc(var(--mx, 0) * 14px), calc(var(--my, 0) * 10px), 0)',
          transition: 'transform 0.6s cubic-bezier(.2,.6,.2,1)',
          animation: 'kenburns 22s ease-in-out infinite alternate',
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(120% 120% at 50% 48%, transparent 55%, rgba(0,0,0,0.62) 100%)',
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
        filter: 'blur(6px)',
        mixBlendMode: 'screen',
        animation: 'sweep 9s cubic-bezier(.55,0,.2,1) infinite',
        width: '26%',
        left: '-30%',
      }} />

      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-soft-light" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        boxShadow: 'inset 0 0 140px rgba(0,0,0,0.55)',
      }} />

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.04) translate3d(calc(var(--mx, 0) * 14px), calc(var(--my, 0) * 10px), 0); }
          100% { transform: scale(1.10) translate3d(calc(var(--mx, 0) * 20px), calc(var(--my, 0) * 14px), 0); }
        }
        @keyframes sweep {
          0% { left: -30%; }
          55% { left: 110%; }
          100% { left: 110%; }
        }
        @media (prefers-reduced-motion: reduce) {
          img { animation: none !important; }
          div[style*="animation: sweep"] { animation: none !important; display: none !important; }
        }
      `}</style>
    </div>
  )
}
