'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

const copy = {
  en: {
    nav: ['Home', 'Products', 'Applications', 'About', 'Contact'],
    quote: 'Request a Quote',
    location: 'Oran, Algeria · Local manufacturing',
    heroTitle: 'Recycled HCS polyester fiber for industry.',
    heroText: 'Phoeber manufactures Hollow Conjugated Siliconized rPET Fiber for mattress, pillow, cushion, bedding, textile and furniture manufacturers.',
    viewProducts: 'View Products',
    hcsText: 'A consistent recycled fiber solution, manufactured for professional industrial use.',
    aboutLabel: 'About Phoeber',
    aboutTitle: 'An Algerian manufacturer built for industrial buyers.',
    aboutText: ['Phoeber is an industrial manufacturer based in Oran, Algeria, specializing in Hollow Conjugated Siliconized Recycled Polyester Fiber.', 'We supply professional manufacturers with local HCS rPET fiber in two core deniers: 7D and 15D.'],
    productsLabel: 'Products',
    productsTitle: 'HCS rPET Fiber',
    productsText: 'Two practical specifications for the most common filling and bedding applications.',
    applicationsLabel: 'Industrial applications',
    applicationsTitle: 'Fiber solutions for manufacturers.',
    whyLabel: 'Why choose Phoeber',
    why: [['Local supply', 'Manufactured in Oran for Algerian industrial customers.'], ['Product focus', 'Specialized HCS rPET fiber in 7D and 15D specifications.'], ['Direct inquiries', 'Speak directly with our team about your production requirements.']],
    contactLabel: 'Contact',
    contactTitle: 'Request a Quote',
    contactText: 'Tell us what your production requires and our team will respond directly.',
    form: ['Full Name', 'Company Name', 'Business Email', 'Phone Number', 'Product Selection', 'Estimated Quantity', 'Message'],
    select: 'Select a product',
    prepared: 'Your email application has been prepared. Please send the message to complete your inquiry.',
    footer: 'Recycled HCS Polyester Fiber Manufacturer',
  },
  fr: {
    nav: ['Accueil', 'Produits', 'Applications', 'À propos', 'Contact'],
    quote: 'Demander un devis',
    location: 'Oran, Algérie · Fabrication locale',
    heroTitle: 'Fibre polyester HCS recyclée pour l’industrie.',
    heroText: 'Phoeber fabrique une fibre rPET polyester creuse, conjuguée et siliconée pour les fabricants de matelas, oreillers, coussins, literie, textile et ameublement.',
    viewProducts: 'Voir les produits',
    hcsText: 'Une solution de fibre recyclée régulière, fabriquée pour un usage industriel professionnel.',
    aboutLabel: 'À propos de Phoeber',
    aboutTitle: 'Un fabricant algérien conçu pour les acheteurs industriels.',
    aboutText: ['Phoeber est un fabricant industriel basé à Oran, en Algérie, spécialisé dans la fibre polyester recyclée creuse, conjuguée et siliconée.', 'Nous fournissons aux industriels une fibre HCS rPET locale en deux deniers principaux : 7D et 15D.'],
    productsLabel: 'Produits',
    productsTitle: 'Fibre HCS rPET',
    productsText: 'Deux spécifications adaptées aux principales applications de rembourrage et de literie.',
    applicationsLabel: 'Applications industrielles',
    applicationsTitle: 'Des solutions de fibre pour les fabricants.',
    whyLabel: 'Pourquoi Phoeber',
    why: [['Approvisionnement local', 'Fabriquée à Oran pour les industriels algériens.'], ['Expertise produit', 'Fibre HCS rPET spécialisée en 7D et 15D.'], ['Contact direct', 'Échangez directement avec notre équipe sur vos besoins de production.']],
    contactLabel: 'Contact',
    contactTitle: 'Demander un devis',
    contactText: 'Indiquez vos besoins de production et notre équipe vous répondra directement.',
    form: ['Nom complet', 'Entreprise', 'Email professionnel', 'Téléphone', 'Choix du produit', 'Quantité estimée', 'Message'],
    select: 'Choisir un produit',
    prepared: 'Votre application email est prête. Envoyez le message pour terminer votre demande.',
    footer: 'Fabricant de fibre polyester HCS recyclée',
  },
} as const

const products = [
  { name: 'HCS rPET 7D', specs: ['7 Denier', 'Coupe 32 mm', 'Finition siliconée'], use: { en: 'Pillows and cushions', fr: 'Oreillers et coussins' } },
  { name: 'HCS rPET 15D', specs: ['15 Denier', 'Coupe 51 mm', 'Structure creuse conjuguée'], use: { en: 'Mattresses and thicker filling', fr: 'Matelas et rembourrage épais' } },
]

const applications = { en: ['Mattresses', 'Pillows', 'Cushions', 'Bedding', 'Textile and furniture'], fr: ['Matelas', 'Oreillers', 'Coussins', 'Literie', 'Textile et ameublement'] }

export default function Page() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en')
  const [submitted, setSubmitted] = useState(false)
  const t = copy[language]

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`${t.quote} - ${form.get('company') || form.get('name')}`)
    const body = encodeURIComponent(`Name: ${form.get('name')}\nCompany: ${form.get('company')}\nEmail: ${form.get('email')}\nPhone: ${form.get('phone')}\nProduct: ${form.get('product')}\nQuantity: ${form.get('quantity')}\n\n${form.get('message')}`)
    window.location.href = `mailto:contact@fibaer.dz?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="bg-white text-[#1a2c5a]">
      <header className="sticky top-0 z-50 border-b border-[#6c9ec3]/40 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
          <Link href="#home" aria-label="Phoeber home"><img src="/logo.png" alt="Phoeber" className="h-10 w-auto object-contain md:h-14" /></Link>
          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-wide md:flex">{t.nav.map((item, index) => <Link key={item} href={['#home', '#products', '#applications', '#about', '#contact'][index]} className="hover:text-[#105fb8]">{item}</Link>)}</nav>
          <div className="flex items-center gap-2"><button type="button" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} className="border border-[#6c9ec3] px-3 py-2 text-xs font-bold uppercase text-[#1a2c5a] hover:bg-[#f7faff]" aria-label="Switch language">{language === 'en' ? 'FR' : 'EN'}</button><Link href="#contact" className="bg-[#105fb8] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#1a2c5a] md:px-6 md:py-3">{t.quote}</Link></div>
        </div>
      </header>

      <section id="home" className="border-b border-[#6c9ec3]/40 px-4 py-16 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">{t.location}</p><h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight md:text-7xl">{t.heroTitle}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-[#526b8c] md:text-lg">{t.heroText}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="#products" className="bg-[#105fb8] px-6 py-3 text-center text-sm font-bold uppercase text-white transition hover:bg-[#1a2c5a]">{t.viewProducts}</Link><Link href="#contact" className="border border-[#1a2c5a] px-6 py-3 text-center text-sm font-bold uppercase text-[#1a2c5a] transition hover:bg-[#1a2c5a] hover:text-white">{t.quote}</Link></div></div>
          <div className="border-l-4 border-[#105fb8] pl-6"><p className="text-3xl font-black text-[#105fb8]">HCS rPET</p><p className="mt-2 text-sm leading-6 text-[#526b8c]">{t.hcsText}</p></div>
        </div>
      </section>

      <section className="border-b border-[#6c9ec3]/40 bg-white"><img src="/phoeber-fibre-showcase.jpeg" alt={language === 'fr' ? 'Fibre polyester HCS recyclée Phoeber' : 'Phoeber recycled HCS polyester fiber'} className="block h-auto w-full object-cover" /></section>

      <section id="about" className="border-b border-[#6c9ec3]/40 px-4 py-16 md:px-6 md:py-24"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-24"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">{t.aboutLabel}</p><h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">{t.aboutTitle}</h2></div><div className="space-y-5 text-sm leading-7 text-[#526b8c]">{t.aboutText.map((text) => <p key={text}>{text}</p>)}</div></div></section>

      <section id="products" className="border-b border-[#6c9ec3]/40 bg-[#f7faff] px-4 py-16 md:px-6 md:py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">{t.productsLabel}</p><h2 className="mt-3 text-3xl font-black md:text-5xl">{t.productsTitle}</h2></div><p className="max-w-md text-sm leading-6 text-[#526b8c]">{t.productsText}</p></div><div className="mt-10 grid gap-6 md:grid-cols-2">{products.map((product) => <article key={product.name} className="border border-[#6c9ec3] bg-white p-6 md:p-8"><h3 className="text-2xl font-black text-[#1a2c5a]">{product.name}</h3><p className="mt-3 text-sm font-semibold text-[#105fb8]">{product.use[language]}</p><ul className="mt-6 space-y-3 text-sm text-[#526b8c]">{product.specs.map((spec) => <li key={spec} className="border-b border-[#6c9ec3]/30 pb-3">{language === 'fr' && spec === 'Siliconized finish' ? 'Finition siliconée' : spec}</li>)}</ul><Link href="#contact" className="mt-8 inline-block bg-[#105fb8] px-5 py-3 text-xs font-bold uppercase text-white hover:bg-[#1a2c5a]">{t.quote}</Link></article>)}</div></div></section>

      <section id="applications" className="border-b border-[#6c9ec3]/40 px-4 py-16 md:px-6 md:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">{t.applicationsLabel}</p><h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">{t.applicationsTitle}</h2><div className="mt-10 grid gap-px overflow-hidden border border-[#6c9ec3] bg-[#6c9ec3] sm:grid-cols-2 lg:grid-cols-5">{applications[language].map((application) => <div key={application} className="bg-white p-6 text-sm font-bold">{application}</div>)}</div></div></section>

      <section className="border-b border-[#6c9ec3]/40 bg-[#1a2c5a] px-4 py-16 text-white md:px-6 md:py-24"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6c9ec3]">{t.whyLabel}</p><div className="mt-8 grid gap-8 md:grid-cols-3">{t.why.map(([title, text]) => <div key={title}><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[#d9e8f5]">{text}</p></div>)}</div></div></section>

      <section id="contact" className="px-4 py-16 md:px-6 md:py-24"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#105fb8]">{t.contactLabel}</p><h2 className="mt-3 text-3xl font-black md:text-5xl">{t.contactTitle}</h2><p className="mt-5 text-sm leading-6 text-[#526b8c]">{t.contactText}</p><div className="mt-8 space-y-2 text-sm text-[#526b8c]"><p>Oran, Algeria</p><p>contact@fibaer.dz</p><p>https://v0-phoeber.vercel.app/</p></div></div><form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-label={t.contactTitle}><label className="text-sm font-semibold">{t.form[0]}<input required name="name" type="text" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label><label className="text-sm font-semibold">{t.form[1]}<input required name="company" type="text" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label><label className="text-sm font-semibold">{t.form[2]}<input required name="email" type="email" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label><label className="text-sm font-semibold">{t.form[3]}<input required name="phone" type="tel" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label><label className="text-sm font-semibold">{t.form[4]}<select required name="product" className="mt-2 w-full border border-[#6c9ec3] bg-white px-3 py-3 font-normal outline-none focus:border-[#105fb8]"><option value="">{t.select}</option><option>HCS rPET 7D</option><option>HCS rPET 15D</option></select></label><label className="text-sm font-semibold">{t.form[5]}<input required name="quantity" type="text" className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label><label className="text-sm font-semibold sm:col-span-2">{t.form[6]}<textarea required name="message" rows={5} className="mt-2 w-full border border-[#6c9ec3] px-3 py-3 font-normal outline-none focus:border-[#105fb8]" /></label><div className="sm:col-span-2"><button type="submit" className="bg-[#105fb8] px-6 py-3 text-sm font-bold uppercase text-white hover:bg-[#1a2c5a]">{t.quote}</button>{submitted && <p className="mt-3 text-sm text-[#105fb8]">{t.prepared}</p>}</div></form></div></section>

      <footer className="border-t border-[#6c9ec3]/40 px-4 py-6 md:px-6"><div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-[#526b8c] md:flex-row md:items-center md:justify-between"><span>© 2026 Phoeber · Oran, Algeria</span><span>{t.footer}</span></div></footer>
    </main>
  )
}
