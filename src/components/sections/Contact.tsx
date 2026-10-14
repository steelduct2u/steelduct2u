'use client'

import { useState } from 'react'
import { MapPin, Phone, CheckCircle2, ShieldCheck } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import { siteConfig, whatsappLink } from '@/config/site'
import { GA_EVENTS, trackEvent } from '@/lib/analytics'

const serviceOptions = [
  'Kitchen Hood Installation (NFPA 96 & Certified HVAC)',
  'Industrial Exhaust Fan Systems',
  'Commercial Air Cooler / Evaporative Cooling',
  'Sheet Metal & Steel Duct Fabrication (GI / SS 304)',
  'Kitchen Hood Cleaning & Maintenance Servicing',
  'General MVAC / HVAC Project Consultation',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceOptions[0],
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const inquiryUrl = () =>
    whatsappLink(
      [
        '📋 *PROJECT INQUIRY — STEEL DUCT*',
        '',
        `👤 *Name:* ${formData.name}`,
        `📞 *Phone / WhatsApp:* ${formData.phone}`,
        `📧 *Email:* ${formData.email || 'Not provided'}`,
        `🔧 *Service Required:* ${formData.service}`,
        `📍 *Project Location:* ${formData.location || 'Not provided'}`,
        '',
        '💬 *Project Details & Requirements:*',
        formData.message,
        '',
        '_Sent via Steel Duct Website Inquiry Form_',
      ].join('\n'),
    )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    trackEvent(GA_EVENTS.whatsappFormSubmit, { service: formData.service })
    window.open(inquiryUrl(), '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-zinc-950 py-16 sm:py-24 px-5 sm:px-6">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
      />

      {/* Grid texture for background (kotak-kotak) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(249,115,22,0.06), transparent 70%)',
        }}
      />

      <LazySection>
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader eyebrow="Free Site Inspection" title="Request a" accent="Free Quote">
              Tell us about your project below and it will open in WhatsApp, ready to send.
              Prefer email? Write to{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2 font-medium"
              >
                {siteConfig.contact.email}
              </a>
              .
          </SectionHeader>

          {/* ── Value & Satisfaction Guarantee Banner ── */}
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/30 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex-shrink-0 shadow-lg shadow-orange-500/10">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h3
                  className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Free Site Inspection, Expert Advice &amp; Quotation
                </h3>
                <p className="leading-relaxed text-xs sm:text-sm text-zinc-400">
                  Quality engineering, scoped to fit your budget.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-wider shadow-md"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>100% Free &middot; No Obligation</span>
              </span>
            </div>
          </div>

          {/* ── Direct Email Inquiry Form ── */}
          <div className="mb-16 rounded-3xl bg-zinc-900/40 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366]">
                <WhatsAppIcon size={22} />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  WhatsApp Inquiry Form
                </h3>
                <p className="leading-relaxed text-xs text-zinc-400">
                  Fill in the form and click <span className="text-green-400 font-semibold">Send Now</span> — your inquiry will be sent directly to our WhatsApp.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366]/20 text-[#25D366] mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  WhatsApp Ready!
                </h4>
                <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-6 leading-relaxed">
                  Your inquiry has been prepared. If WhatsApp did not open automatically, click the button below:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={inquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-200"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    <WhatsAppIcon size={16} />
                    Open WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        service: serviceOptions[0],
                        location: '',
                        message: '',
                      })
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-name"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Your Name / Company Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmad Razif / Restaurant ABC"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/15 transition-shadow"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-phone"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Phone / WhatsApp Number <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +60 12-345 6789"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/15 transition-shadow"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-email"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/15 transition-shadow"
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="inquiry-service"
                      className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Service Required
                    </label>
                    <select
                      id="inquiry-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white text-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/15 transition-shadow"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-zinc-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Location */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="inquiry-location"
                    className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Project Location / Town / State
                  </label>
                  <input
                    id="inquiry-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Petaling Jaya, Selangor / KLCC / Shah Alam"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/15 transition-shadow"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="inquiry-message"
                    className="text-xs font-semibold tracking-wider uppercase text-orange-400"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Project Details &amp; Requirements <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your kitchen exhaust hood requirements, ductwork dimensions, factory specifications, or site inspection requests..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/15 transition-shadow"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 cursor-pointer"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    <WhatsAppIcon size={16} />
                    <span>Send Now</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Info cards grid (3 cards: Office Address, Office Phone, WhatsApp Direct Line) */}
          <div className="stagger grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Address Card */}
            <div className="card-lift group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl h-full">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-300 mb-5">
                  <MapPin
                    size={22}
                    strokeWidth={1.75}
                    className="text-zinc-400 group-hover:text-orange-500 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5 min-h-[130px]">
                  <p
                    className="leading-relaxed text-xs font-semibold tracking-widest uppercase text-orange-500"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Office Address
                  </p>
                  <p
                    className="text-base text-zinc-400 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {siteConfig.address.street},
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.locality},
                    <br />
                    {siteConfig.address.region}, Malaysia
                  </p>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Steel Duct Office Address on Google Maps"
                className="mt-6 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-orange-500/50 text-orange-500 hover:text-orange-400 text-xs font-bold tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                View on Google Maps
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Office Phone Card */}
            <div className="card-lift group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl h-full">
              <div>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-300 mb-5">
                  <Phone
                    size={22}
                    strokeWidth={1.75}
                    className="text-zinc-400 group-hover:text-orange-500 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1.5 min-h-[130px]">
                  <p
                    className="leading-relaxed text-xs font-semibold tracking-widest uppercase text-orange-500"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Office Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    aria-label={`Call Steel Duct office phone at ${siteConfig.contact.phone}`}
                    className="text-xl font-bold text-white hover:text-orange-400 transition-colors duration-200 block"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                    Operating Hours:
                    <br />
                    {siteConfig.hours.days}: {siteConfig.hours.time}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                aria-label={`Call Steel Duct office phone at ${siteConfig.contact.phone}`}
                className="mt-6 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-orange-500/50 text-orange-500 hover:text-orange-400 text-xs font-bold tracking-wider uppercase transition-all duration-200"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Call Office Directly
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* WhatsApp Direct Line Card */}
            <div className="card-lift group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl h-full !border-orange-500/40">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] transition-all duration-300">
                    <WhatsAppIcon size={22} />
                  </div>
                  <span
                    className="text-xs font-bold tracking-widest uppercase text-orange-500 border border-orange-500/40 rounded px-2 py-0.5"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Instant Reply
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 min-h-[130px]">
                  <p
                    className="leading-relaxed text-xs font-semibold tracking-widest uppercase text-[#25D366]"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    WhatsApp Enquiries &amp; Quotes
                  </p>
                  <a
                    href={whatsappLink('Hello Steel Duct, I would like to request a quote for your services.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with Steel Duct on WhatsApp: ${siteConfig.contact.phone}`}
                    className="text-xl font-bold text-white hover:text-[#25D366] transition-colors duration-200 block"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                    Available for immediate project consultations, PDF quotation sharing, and site inspections.
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappLink('Hello Steel Duct, I would like to request a quote for your services.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat with Steel Duct on WhatsApp: ${siteConfig.contact.phone}`}
                className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#25D366]/20"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <WhatsAppIcon size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />
    </section>
  )
}
