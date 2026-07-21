'use client'

import Link from 'next/link'
import { useState } from 'react'

const translations = {
  fr: {
    oran: 'ORAN, ALGERIE -- PREMIER PRODUCTEUR NATIONAL',
    tagline: 'Second life, First Quality.',
    discover: 'DECOUVRIR NOTRE FIBRE',
    quote: 'DEMANDER UN DEVIS',
    delaiLivraison: 'DELAI LIVRAISON',
    denierDisponible: 'DENIER DISPONIBLE',
    ballesStandards: 'BALLES STANDARDS',
    aboutTitle: 'QUI SOMMES-NOUS',
    aboutHeading: 'LA OU LES AUTRES IMPORTENT, NOUS PRODUISONS.',
    aboutDesc1: 'FIBAER est une startup industrielle algérienne basée à Oran, pionnière dans la transformation de bouteilles plastiques post-consommation en fibre polyester creuse de haute qualité destinée aux secteurs du textile, de la literie et de l\'ameublement.',
    aboutDesc2: 'Nous développons une chaîne de valeur entièrement nationale qui transforme un déchet en une matière première à forte valeur ajoutée, afin d\'approvisionner les industriels algériens en dinars et de réduire la dépendance aux importations.',
    feature1: '100% Algérien',
    feature1Desc: 'Matière, process et livraison locale',
    feature2: 'Certifiable rPET',
    feature2Desc: 'Trace de la bouteille a la balle',
    feature3: 'Paiement DZD',
    feature3Desc: 'Aucune depense en devises',
    feature4: 'Livraison 48h',
    feature4Desc: 'Stock permanent disponible',
    productTitle: 'NOTRE PRODUIT',
    productHeading: 'FIBRE POLYESTER CREUSE CONJUGUEE HCS RPET',
    productDesc: 'Notre fibre est produite a partir de paillettes de bouteilles PET recyclees. Sa structure creuse lui confere legerete, gonflant et resilience exceptionnels. Qualite identique a la fibre vierge importee, a un prix competitif.',
    productDelivery: 'LIVREE EN 48H / IMPORTEE EN 4-8 SEMAINES',
    productNav: 'NOUS CONTACTER',
    processTitle: 'PROCESSUS DE FABRICATION',
    processHeading: 'DE LA BOUTEILLE A LA BALLE EN 8 ETAPES.',
    advantagesTitle: 'POURQUOI FIBAER',
    advantagesHeading: 'L\'AVANTAGE LOCAL.',
    impactTitle: 'NOTRE IMPACT',
    impactHeading: 'CHAQUE TONNE COMPTE.',
    clientsTitle: 'NOS CLIENTS',
    clientsHeading: 'FABRICANTS ALGERIENS DE LITERIE.',
    contactTitle: 'CONTACT',
    contactHeading: 'PARLONS FIBRE.',
    address: 'Zone Industrielle -- Oran, Algerie',
    email: 'contact@fibaer.dz',
    website: 'www.fibaer.dz',
    quote2: 'La ou les autres importent, nous produisons.',
    nomLabel: 'NOM',
    nomPlaceholder: 'Votre nom',
    entrepriseLabel: 'ENTREPRISE',
    entreprisePlaceholder: 'Votre entreprise',
    emailLabel: 'EMAIL',
    emailPlaceholder: 'email@example.dz',
    messageLabel: 'MESSAGE',
    messagePlaceholder: 'Votre message ou demande de devis...',
    submitButton: 'ENVOYER LE MESSAGE',
    footerCopy: '© 2024 FIBAER -- Oran, Algerie',
  },
  en: {
    oran: 'ORAN, ALGERIA -- PREMIER NATIONAL PRODUCER',
    tagline: 'Second life, First Quality.',
    discover: 'DISCOVER OUR FIBER',
    quote: 'REQUEST A QUOTE',
    delaiLivraison: 'DELIVERY TIME',
    denierDisponible: 'AVAILABLE DENIERS',
    ballesStandards: 'STANDARD BALES',
    aboutTitle: 'ABOUT US',
    aboutHeading: 'WHERE OTHERS IMPORT, WE PRODUCE.',
    aboutDesc1: 'FIBAER is an Algerian industrial startup based in Oran, pioneering the transformation of post-consumer plastic bottles into high-quality hollow polyester fiber intended for the textile, bedding and furniture sectors.',
    aboutDesc2: 'We develop an entirely national value chain that transforms waste into high value-added raw material, to supply Algerian industrialists in dinars and reduce import dependence.',
    feature1: '100% Algerian',
    feature1Desc: 'Material, process and local delivery',
    feature2: 'Certifiable rPET',
    feature2Desc: 'Traced from bottle to bale',
    feature3: 'DZD Payment',
    feature3Desc: 'No foreign exchange expenses',
    feature4: '48h Delivery',
    feature4Desc: 'Permanent stock available',
    productTitle: 'OUR PRODUCT',
    productHeading: 'CONJUGATED HOLLOW POLYESTER FIBER HCS RPET',
    productDesc: 'Our fiber is produced from recycled PET bottle flakes. Its hollow structure gives it exceptional lightness, loft and resilience. Quality identical to imported virgin fiber, at a competitive price.',
    productDelivery: 'DELIVERED IN 48H / IMPORTED IN 4-8 WEEKS',
    productNav: 'CONTACT US',
    processTitle: 'MANUFACTURING PROCESS',
    processHeading: 'FROM BOTTLE TO BALE IN 8 STEPS.',
    advantagesTitle: 'WHY FIBAER',
    advantagesHeading: 'THE LOCAL ADVANTAGE.',
    impactTitle: 'OUR IMPACT',
    impactHeading: 'EVERY TONNE COUNTS.',
    clientsTitle: 'OUR CLIENTS',
    clientsHeading: 'ALGERIAN BEDDING MANUFACTURERS.',
    contactTitle: 'CONTACT',
    contactHeading: 'LET\'S TALK FIBER.',
    address: 'Industrial Zone -- Oran, Algeria',
    email: 'contact@fibaer.dz',
    website: 'www.fibaer.dz',
    quote2: 'Where others import, we produce.',
    nomLabel: 'NAME',
    nomPlaceholder: 'Your name',
    entrepriseLabel: 'COMPANY',
    entreprisePlaceholder: 'Your company',
    emailLabel: 'EMAIL',
    emailPlaceholder: 'email@example.dz',
    messageLabel: 'MESSAGE',
    messagePlaceholder: 'Your message or quote request...',
    submitButton: 'SEND MESSAGE',
    footerCopy: '© 2024 FIBAER -- Oran, Algeria',
  },
}

export default function Page() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', company: '', email: '', message: '' })
  }

  return (
    <main className="bg-[#f5f1ed]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f1ed] border-b border-[#d9cfc4] py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="FIBAER" className="h-16 object-contain" />
          </Link>
          <nav className="hidden md:flex gap-12 items-center text-sm">
            <Link href="#about" className="text-[#999] hover:text-[#262522] transition-colors">
              {language === 'fr' ? 'A PROPOS' : 'ABOUT'}
            </Link>
            <Link href="#product" className="text-[#999] hover:text-[#262522] transition-colors">
              {language === 'fr' ? 'PRODUIT' : 'PRODUCT'}
            </Link>
            <Link href="#process" className="text-[#999] hover:text-[#262522] transition-colors">
              {language === 'fr' ? 'PROCESS' : 'PROCESS'}
            </Link>
            <Link href="#impact" className="text-[#999] hover:text-[#262522] transition-colors">
              {language === 'fr' ? 'IMPACT' : 'IMPACT'}
            </Link>
            <Link href="#contact" className="text-[#999] hover:text-[#262522] transition-colors">
              {language === 'fr' ? 'CONTACT' : 'CONTACT'}
            </Link>
            <div className="flex gap-3 ml-6 pl-6 border-l border-[#d9cfc4]">
              <button
                onClick={() => setLanguage('fr')}
                className={`text-xs font-bold transition-colors ${language === 'fr' ? 'text-[#45926f]' : 'text-[#999] hover:text-[#262522]'}`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-[#45926f]' : 'text-[#999] hover:text-[#262522]'}`}
              >
                EN
              </button>
            </div>
          </nav>
          <Link
            href="#contact"
            className="bg-[#45926f] hover:bg-[#3a7559] text-white px-6 py-2 text-sm font-bold transition-colors"
          >
            {language === 'fr' ? 'NOUS CONTACTER' : 'CONTACT US'}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-20">
            <div className="col-span-2">
              <p className="text-[#999] text-xs font-medium tracking-widest mb-8">
                {t.oran}
              </p>
              <h1 className="text-6xl font-black text-[#262522] leading-tight mb-8">
                SECOND <span className="text-[#45926f]">LIFE,</span> {language === 'fr' ? 'FIRST QUALITY.' : 'FIRST QUALITY.'}
              </h1>
              <div className="flex gap-6">
                <Link
                  href="#process"
                  className="bg-[#45926f] hover:bg-[#3a7559] text-white px-8 py-4 font-bold text-sm transition-colors inline-block"
                >
                  {t.discover}
                </Link>
                <Link
                  href="#contact"
                  className="border-2 border-[#262522] text-[#262522] hover:bg-[#262522] hover:text-white px-8 py-4 font-bold text-sm transition-colors inline-block"
                >
                  {t.quote}
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-[#45926f] text-sm font-bold mb-2">48h</p>
                <p className="text-[#999] text-xs">{t.delaiLivraison}</p>
              </div>
              <div>
                <p className="text-[#45926f] text-3xl font-bold mb-2">7-15D</p>
                <p className="text-[#999] text-xs">{t.denierDisponible}</p>
              </div>
              <div>
                <p className="text-[#45926f] text-3xl font-bold mb-2">250kg</p>
                <p className="text-[#999] text-xs">{t.ballesStandards}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 border-b border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— QUI SOMMES-NOUS</p>
              <h2 className="text-5xl font-black text-[#262522] leading-tight mb-12">
                LA OU LES AUTRES <span className="text-[#45926f]">IMPORTENT,</span> NOUS PRODUISONS.
              </h2>
              <p className="text-[#666] text-sm leading-relaxed mb-8">
                FIBAER est une startup industrielle algérienne basée à Oran, pionnière dans la transformation de bouteilles plastiques post-consommation en fibre polyester creuse de haute qualité destinée aux secteurs du textile, de la literie et de l&apos;ameublement.
              </p>
              <p className="text-[#666] text-sm leading-relaxed">
                Nous développons une chaîne de valeur entièrement nationale qui transforme un déchet en une matière première à forte valeur ajoutée, afin d&apos;approvisionner les industriels algériens en dinars et de réduire la dépendance aux importations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-[#d9cfc4] p-6">
                <p className="text-[#262522] font-bold text-sm mb-2">100% Algérien</p>
                <p className="text-[#999] text-xs">Matière, process et livraison locale</p>
              </div>
              <div className="border border-[#d9cfc4] p-6">
                <p className="text-[#262522] font-bold text-sm mb-2">Certifiable rPET</p>
                <p className="text-[#999] text-xs">Trace de la bouteille a la balle</p>
              </div>
              <div className="border border-[#d9cfc4] p-6">
                <p className="text-[#262522] font-bold text-sm mb-2">Paiement DZD</p>
                <p className="text-[#999] text-xs">Aucune depense en devises</p>
              </div>
              <div className="border border-[#d9cfc4] p-6">
                <p className="text-[#262522] font-bold text-sm mb-2">Livraison 48h</p>
                <p className="text-[#999] text-xs">Stock permanent disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 px-6 border-b border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— NOTRE PRODUIT</p>
              <h2 className="text-5xl font-black text-[#262522] leading-tight mb-8">
                FIBRE POLYESTER <span className="text-[#45926f]">CREUSE CONJUGUEE</span> HCS RPET
              </h2>
              <p className="text-[#999] text-sm leading-relaxed mb-6">
                Notre fibre est produite a partir de paillettes de bouteilles PET recyclees. Sa structure creuse lui confere legerete, gonflant et resilience exceptionnels. Qualite identique a la fibre vierge importee, a un prix competitif.
              </p>
              <p className="text-[#999] text-xs font-medium tracking-wide mb-8">
                LIVREE EN 48H / IMPORTEE EN 4-8 SEMAINES
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-[#45926f] font-bold text-sm">7 Denier</span>
                  <span className="text-[#999] text-sm">Oreillers & coussins premium</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#45926f] font-bold text-sm">15 Denier</span>
                  <span className="text-[#999] text-sm">Matelas & rembourrage epais</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border border-[#d9cfc4] p-6">
                <p className="text-[#45926f] font-bold text-xs mb-3">7 Denier</p>
                <p className="text-[#262522] font-bold text-sm mb-4">Oreillers & coussins premium</p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Structure creuse conjuguee</span>
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Silicone anti-feutrage</span>
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Coupe : 32 mm</span>
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Gonflant superieur</span>
                </div>
              </div>
              <div className="border border-[#d9cfc4] p-6">
                <p className="text-[#45926f] font-bold text-xs mb-3">15 Denier</p>
                <p className="text-[#262522] font-bold text-sm mb-4">Matelas & rembourrage epais</p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Structure creuse HCS</span>
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Haute resilience</span>
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Coupe : 51 mm</span>
                  <span className="border border-[#d9cfc4] px-3 py-1 text-xs text-[#999]">Resistance a la compression</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Image */}
      <section className="py-16 px-6 border-b border-[#d9cfc4] bg-white">
        <div className="max-w-7xl mx-auto">
          <img
            src="/fibre-showcase.jpeg"
            alt="Fibre Polyester Creuse Conjuguee HCS rPET"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 border-b border-[#d9cfc4] bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— PROCESSUS DE FABRICATION</p>
          <h2 className="text-5xl font-black leading-tight mb-16">
            DE LA BOUTEILLE <span className="text-[#45926f]">A LA BALLE</span> EN 8 ETAPES.
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Collecte des paillettes rPET',
                desc: 'Approvisionnement aupres de fournisseurs locaux agrees.',
              },
              {
                num: '02',
                title: 'Sechage',
                desc: 'Elimination de toute humidite residuelle avant fusion.',
              },
              {
                num: '03',
                title: 'Fusion a 280 C',
                desc: 'Polymer fondu en phase liquide homogene.',
              },
              {
                num: '04',
                title: 'Filtration',
                desc: 'Purification du polymer fondu de toute impurete.',
              },
              {
                num: '05',
                title: 'Filieres creuses',
                desc: 'Extrusion a travers des filieres microscopiques creuses.',
              },
              {
                num: '06',
                title: 'Etirage & frisage',
                desc: 'Structuration mecanique pour resilience et gonflant.',
              },
              {
                num: '07',
                title: 'Siliconisation',
                desc: 'Traitement de surface pour douceur et anti-feutrage.',
              },
              {
                num: '08',
                title: 'Coupe & emballage',
                desc: 'Fibres 32-51 mm, emballees en balles de 250 kg.',
              },
            ].map((step) => (
              <div key={step.num} className="border border-white/20 p-6">
                <p className="text-[#45926f] text-sm font-bold mb-3">{step.num}</p>
                <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-[#999] text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transformation Visual */}
        <div className="mt-20">
          <img
            src="/transformation.webp"
            alt="Transformation du plastique en fibre"
            className="w-full h-96 object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
          />
        </div>
      </section>

      {/* Local Advantages */}
      <section className="py-20 px-6 border-b border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— POURQUOI FIBAER</p>
          <h2 className="text-5xl font-black text-[#262522] leading-tight mb-12">
            L&apos;AVANTAGE <span className="text-[#45926f]">LOCAL.</span>
          </h2>
          <div className="grid grid-cols-5 gap-6">
            {[
              {
                title: 'LIVRAISON EN 48H',
                desc: 'Contre 4 a 8 semaines pour une importation de Chine ou Coree du Sud.',
              },
              {
                title: 'PAIEMENT EN DINAR DZD',
                desc: 'Sans devises, sans marche parallele, sans risque de change.',
              },
              {
                title: 'MATIERE CERTIFIABLE RPET',
                desc: 'Tracee de la bouteille a la balle. Repond aux exigences RSE.',
              },
              {
                title: 'PRIX COMPETITIF',
                desc: 'Inferieur a la fibre importee rendue Algerie, toutes charges comprises.',
              },
              {
                title: 'ZERO RUPTURE DE STOCK',
                desc: 'Production locale = stock permanent. Votre ligne ne s&apos;arrete jamais.',
              },
            ].map((item, i) => (
              <div key={i} className="border-t-4 border-[#45926f] pt-4">
                <h3 className="font-black text-[#262522] text-xs mb-3">{item.title}</h3>
                <p className="text-[#999] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 px-6 border-b border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— NOTRE IMPACT</p>
          <h2 className="text-5xl font-black text-[#262522] leading-tight mb-16">
            CHAQUE TONNE <span className="text-[#45926f]">COMPTE.</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-[#262522] text-base leading-relaxed mb-8">
                Chaque tonne de fibre FIBAER transforme un dechet en matiere premiere a forte valeur ajoutee, tout en preservant les ressources naturelles et en renforçant la souverainete industrielle nationale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t-2 border-r-2 border-b-2 border-[#45926f]">
              <div className="border-r-2 border-b-2 border-[#45926f] p-6 text-center">
                <p className="text-4xl font-black text-[#262522] mb-2">-50%</p>
                <p className="text-xs text-[#999]">d&apos;energie economisee vs polyester vierge</p>
              </div>
              <div className="border-b-2 border-[#45926f] p-6 text-center">
                <p className="text-4xl font-black text-[#262522] mb-2">-70%</p>
                <p className="text-xs text-[#999]">d&apos;eau economisee vs polyester vierge</p>
              </div>
              <div className="border-r-2 border-[#45926f] p-6 text-center">
                <p className="text-4xl font-black text-[#262522] mb-2">-1,5T</p>
                <p className="text-xs text-[#999]">de CO₂ evitee par tonne de fibre produite</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-4xl font-black text-[#262522] mb-2">100%</p>
                <p className="text-xs text-[#999]">dechet local transforme en matiere nationale</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="border-l-4 border-[#45926f] pl-6 py-4">
              <p className="text-[#45926f] font-bold text-xs mb-3">01</p>
              <h3 className="font-black text-[#262522] text-sm mb-3">SOUVERAINETE INDUSTRIELLE</h3>
              <p className="text-[#999] text-xs">Une matiere premiere produite en Algerie a partir de dechets plastiques locaux.</p>
            </div>
            <div className="border-l-4 border-[#45926f] pl-6 py-4">
              <p className="text-[#45926f] font-bold text-xs mb-3">02</p>
              <h3 className="font-black text-[#262522] text-sm mb-3">ECONOMIE CIRCULAIRE</h3>
              <p className="text-[#999] text-xs">Chaque tonne de fibre produite valorise des bouteilles destinees a l&apos;enfouissement ou a l&apos;abandon dans la nature.</p>
            </div>
            <div className="border-l-4 border-[#45926f] pl-6 py-4">
              <p className="text-[#45926f] font-bold text-xs mb-3">03</p>
              <h3 className="font-black text-[#262522] text-sm mb-3">IMPACT ENVIRONNEMENTAL</h3>
              <p className="text-[#999] text-xs">Jusqu&apos;a 50% d&apos;energie, 70% d&apos;eau et 1,5 tonne de CO₂ evitee par tonne de fibre produite, compare a la fabrication de polyester vierge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-6 border-b border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— NOS CLIENTS</p>
          <h2 className="text-5xl font-black text-[#262522] leading-tight mb-12">
            FABRICANTS <span className="text-[#45926f]">ALGERIENS</span> DE LITERIE.
          </h2>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <p className="text-[#999] text-sm leading-relaxed mb-6">
                Nous nous adressons aux fabricants de matelas, d&apos;oreillers et de coussins algeriens qui importent aujourd&apos;hui leur fibre de Chine et de Coree du Sud.
              </p>
              <p className="text-[#999] text-sm leading-relaxed">
                Nous leur offrons une alternative locale fiable, moins chere rendue usine, et certifiable rPET pour leurs propres exigences commerciales.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[#45926f] pl-6 py-4">
                <p className="font-bold text-[#262522] text-sm mb-1">Fabricants de matelas</p>
                <p className="text-[#999] text-xs">15 Denier HCS iPET</p>
              </div>
              <div className="border-l-4 border-[#45926f] pl-6 py-4">
                <p className="font-bold text-[#262522] text-sm mb-1">Fabricants d&apos;oreillers</p>
                <p className="text-[#999] text-xs">7 Denier HCS iPET</p>
              </div>
              <div className="border-l-4 border-[#45926f] pl-6 py-4">
                <p className="font-bold text-[#262522] text-sm mb-1">Fabricants de coussins</p>
                <p className="text-[#999] text-xs">7 Denier HCS iPET</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Bag Section */}
      <section className="py-20 px-6 border-b border-[#d9cfc4] bg-gradient-to-b from-[#f5f1ed] to-black">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <img
            src="/bulk-bag.jpeg"
            alt="Balles de fibre FIBAER"
            className="max-w-2xl w-full h-auto transition-all duration-500 hover:scale-110 hover:drop-shadow-2xl cursor-pointer transform hover:-translate-y-4"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <p className="text-[#45926f] text-xs font-bold tracking-widest mb-8">— CONTACT</p>
              <h2 className="text-4xl font-black text-[#262522] leading-tight mb-12">
                PARLONS <span className="text-[#45926f]">FIBRE.</span>
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-[#45926f] text-xs font-bold mb-2">ADRESSE</p>
                  <p className="text-[#262522] text-sm">Zone Industrielle -- Oran, Algerie</p>
                </div>
                <div>
                  <p className="text-[#45926f] text-xs font-bold mb-2">EMAIL</p>
                  <p className="text-[#262522] text-sm">contact@fibaer.dz</p>
                </div>
                <div>
                  <p className="text-[#45926f] text-xs font-bold mb-2">SITE WEB</p>
                  <p className="text-[#262522] text-sm">www.fibaer.dz</p>
                </div>
                <blockquote className="border-l-4 border-[#45926f] pl-6 py-4">
                  <p className="font-bold text-[#262522] mb-2">
                    &quot;La ou les autres importent, nous produisons.&quot;
                  </p>
                  <p className="text-[#999] text-xs">FIBAER -- Oran, Algerie</p>
                </blockquote>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#999] text-xs font-bold mb-3">NOM</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#d9cfc4] px-4 py-3 text-sm focus:outline-none focus:border-[#45926f]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#999] text-xs font-bold mb-3">ENTREPRISE</label>
                    <input
                      type="text"
                      placeholder="Votre entreprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-[#d9cfc4] px-4 py-3 text-sm focus:outline-none focus:border-[#45926f]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#999] text-xs font-bold mb-3">EMAIL</label>
                  <input
                    type="email"
                    placeholder="email@example.dz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#d9cfc4] px-4 py-3 text-sm focus:outline-none focus:border-[#45926f]"
                  />
                </div>
                <div>
                  <label className="block text-[#999] text-xs font-bold mb-3">MESSAGE</label>
                  <textarea
                    placeholder="Votre message ou demande de devis..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-white border border-[#d9cfc4] px-4 py-3 text-sm focus:outline-none focus:border-[#45926f] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#45926f] hover:bg-[#3a7559] text-white py-4 font-bold text-sm transition-colors"
                >
                  ENVOYER LE MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#262522] text-white py-12 px-6 border-t border-[#d9cfc4]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-white/50 font-medium">© 2024 FIBAER -- Oran, Algerie</p>
        </div>
      </footer>
    </main>
  )
}
