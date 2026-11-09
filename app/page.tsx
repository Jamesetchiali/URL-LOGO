'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

const products = [
  {
    name: 'HCS rPET 7D',
    specs: ['7 Denier', '32 mm cut length', 'Siliconized finish'],
    use: 'Pillows and cushions',
  },
  {
    name: 'HCS rPET 15D',
    specs: ['15 Denier', '51 mm cut length', 'Hollow conjugated structure'],
    use: 'Mattresses and thicker filling',
  },
]

const applications = ['Mattresses', 'Pillows', 'Cushions', 'Bedding', 'Textile and furniture']

export default function Page() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Quote request from ${form.get('company') || form.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${form.get('name')}\nCompany: ${form.get('company')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone')}\nProduct: ${form.get('product')}\nEstimated quantity: ${form.get('quantity')}\n\n${form.get('message')}`,
    )
    window.location.href = `mailto:contact@fibaer.dz?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="bg-white text-[#1a2c5a]">
      <header className="sticky top-0 z-50 border-b border-[#6c9ec3]/40 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link href="#home" aria-label="Phoeber home">
            <img src="/logo.png" alt="Phoeber" className="h-10 w-auto object-contain md:h-14" />
          </Link>
          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-wide md:flex">
            <Link href="#home" className="hover:text-[#105fb8]">Home</Link>
            <Link href="#products" className="hover:text-[#105fb8]">Products</Link>
            <Link href="#applications" className="hover:text-[#105fb8]">Applications</Link>
            <Link href="#about" className="hover:text-[#105fb8]">About</Link>
            <Link href="#contact" className="hover:text-[#105fb8]">Contact</Link>
          </nav>
          <Link href="#contact" className="bg-[#105fb8] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#1a2c5a] md:px-6 md:py-3">
            Request a Quote
          </Link>
        </div>
      </header>

      <section id="home" className="border-b border-[#6c9ec3]/40 px-4 py-16 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">Oran, Algeria · Local manufacturing</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">Recycled HCS polyester fiber for industry.</h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#526b8c] md:text-lg">Phoeber manufactures Hollow Conjugated Siliconized rPET Fiber for mattress, pillow, cushion, bedding, textile and furniture manufacturers.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#products" className="bg-[#105fb8] px-6 py-3 text-center text-sm font-bold uppercase text-white transition hover:bg-[#1a2c5a]">View Products</Link>
              <Link href="#contact" className="border border-[#1a2c5a] px-6 py-3 text-center text-sm font-bold uppercase text-[#1a2c5a] transition hover:bg-[#1a2c5a] hover:text-white">Request a Quote</Link>
            </div>
          </div>
          <div className="border-l-4 border-[#105fb8] pl-6">
            <p className="text-3xl font-black text-[#105fb8]">HCS rPET</p>
            <p className="mt-2 text-sm leading-6 text-[#526b8c]">A consistent recycled fiber solution, manufactured for professional industrial use.</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[#6c9ec3]/40 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">About Phoeber</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">An Algerian manufacturer built for industrial buyers.</h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-[#526b8c]">
            <p>Phoeber is an industrial manufacturer based in Oran, Algeria, specializing in Hollow Conjugated Siliconized Recycled Polyester Fiber.</p>
            <p>We supply professional manufacturers with local HCS rPET fiber in two core deniers: 7D and 15D.</p>
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-[#6c9ec3]/40 bg-[#f7faff] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">Products</p><h2 className="mt-3 text-3xl font-black md:text-5xl">HCS rPET Fiber</h2></div>
            <p className="max-w-md text-sm leading-6 text-[#526b8c]">Two practical specifications for the most common filling and bedding applications.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="border border-[#6c9ec3] bg-white p-6 md:p-8">
                <h3 className="text-2xl font-black text-[#1a2c5a]">{product.name}</h3>
                <p className="mt-3 text-sm font-semibold text-[#105fb8]">{product.use}</p>
                <ul className="mt-6 space-y-3 text-sm text-[#526b8c]">
                  {product.specs.map((spec) => <li key={spec} className="border-b border-[#6c9ec3]/30 pb-3">{spec}</li>)}
                </ul>
                <Link href="#contact" className="mt-8 inline-block bg-[#105fb8] px-5 py-3 text-xs font-bold uppercase text-white hover:bg-[#1a2c5a]">Request a Quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="border-b border-[#6c9ec3]/40 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">Industrial applications</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">Fiber solutions for manufacturers.</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-[#6c9ec3] bg-[#6c9ec3] sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((application) => <div key={application} className="bg-white p-6 text-sm font-bold">{application}</div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-[#6c9ec3]/40 bg-[#1a2c5a] px-4 py-16 text-white md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6c9ec3]">Why choose Phoeber</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div><h3 className="text-xl font-black">Local supply</h3><p className="mt-3 text-sm leading-6 text-[#d9e8f5]">Manufactured in Oran for Algerian industrial customers.</p></div>
            <div><h3 className="text-xl font-black">Product focus</h3><p className="mt-3 text-sm leading-6 text-[#d9e8f5]">Specialized HCS rPET fiber in 7D and 15D specifications.</p></div>
            <div><h3 className="text-xl font-black">Direct inquiries</h3><p className="mt-3 text-sm leading-6 text-[#d9e8f5]">Speak directly with our team about your production requirements.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">Contact</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Request a Quote</h2><p className="mt-5 text-sm leading-6 text-[#526b8c]">Tell us what your production requires and our team will respond directly.</p><div className="mt-8 space-y-2 text-sm text-[#526b8c]"><p>Oran, Algeria</p><p>contact@fibaer.dz</p><p>https://v0-phoeber.vercel.app/</p></div></div>
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-label="Request a quote form">
            <label className="text-sm font-semibold">Full Name<input required name="name" type="text" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label>
            <label className="text-sm font-semibold">Company Name<input required name="company" type="text" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label>
            <label className="text-sm font-semibold">Business Email<input required name="email" type="email" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label>
            <label className="text-sm font-semibold">Phone Number<input required name="phone" type="tel" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label>
            <label className="text-sm font-semibold">Product Selection<select required name="product" className="mt-2 w-full border border-[#6c9ec3] bg-white px-3 py-3 font-normal outline-none focus:border-[#105fb8]"><option value="">Select a product</option><option>HCS rPET 7D</option><option>HCS rPET 15D</option></select></label>
            <label className="text-sm font-semibold">Estimated Quantity<input required name="quantity" type="text" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label>
            <label className="text-sm font-semibold sm:col-span-2">Message<textarea required name="message" rows={5} className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label>
            <div className="sm:col-span-2"><button type="submit" className="bg-[#105fb8] px-6 py-3 text-sm font-bold uppercase text-white hover:bg-[#1a2c5a]">Request a Quote</button>{submitted && <p className="mt-3 text-sm text-[#105fb8]">Your email application has been prepared. Please send the message to complete your inquiry.</p>}</div>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#6c9ec3]/40 px-4 py-6 md:px-6"><div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-[#526b8c] md:flex-row md:items-center md:justify-between"><span>© 2026 Phoeber · Oran, Algeria</span><span>Recycled HCS Polyester Fiber Manufacturer</span></div></footer>
    </main>
  )
}
