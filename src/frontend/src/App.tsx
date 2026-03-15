import {
  Building2,
  Check,
  ExternalLink,
  Factory,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const PHONE_PRIMARY = "9816024581";
const PHONE_2 = "9816020581";
const PHONE_3 = "9459610000";
const WHATSAPP_URL = "https://wa.me/919816024581";
const MAPS_URL = "https://maps.google.com/?q=Hamirpur,Himachal+Pradesh,India";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Hamirpur,+Himachal+Pradesh,+India&output=embed";

const products = [
  {
    id: 1,
    title: "TMT BARS",
    brands: "SAIL · Jindal · Jai Bharat · Birla",
    description:
      "High-strength thermomechanically treated bars for superior load-bearing in residential and commercial structures.",
    image: "/assets/generated/tmt-bars.dim_600x400.jpg",
  },
  {
    id: 2,
    title: "STEEL PIPES",
    brands: "APL Apollo · Vectus",
    description:
      "Premium quality pipes for water supply, structural support, and industrial applications across all project scales.",
    image: "/assets/generated/pipes.dim_600x400.jpg",
  },
  {
    id: 3,
    title: "ROOFING SHEETS",
    brands: "Tata Durashine · Jindal",
    description:
      "Durable, weather-resistant corrugated and trapezoidal sheets for industrial, commercial and residential roofing.",
    image: "/assets/generated/roofing-sheets.dim_600x400.jpg",
  },
  {
    id: 4,
    title: "STRUCTURAL STEEL",
    brands: "Angles · Plates · Channels · Beams",
    description:
      "Precision-cut structural steel profiles for fabrication, construction framing and heavy-duty infrastructure work.",
    image: "/assets/generated/structural-steel.dim_600x400.jpg",
  },
];

const trustPoints = [
  {
    title: "Genuine Branded Materials",
    desc: "Only authentic products from certified manufacturers.",
  },
  {
    title: "Competitive Wholesale Pricing",
    desc: "Best market rates for bulk and regular orders.",
  },
  {
    title: "Reliable Supply Chain",
    desc: "Consistent availability, on-time delivery every time.",
  },
  {
    title: "Trusted by Contractors",
    desc: "Preferred supplier for builders across Himachal Pradesh.",
  },
  {
    title: "Professional Service",
    desc: "Experienced team with deep product knowledge.",
  },
  {
    title: "Strong Industry Relationships",
    desc: "Direct ties with India's leading steel manufacturers.",
  },
];

const brands = [
  "APL Apollo",
  "Tata Steel",
  "Jindal",
  "SAIL",
  "JSW",
  "Vectus",
  "Jai Bharat",
];

const services = [
  { icon: Home, label: "Residential Construction" },
  { icon: Building2, label: "Commercial Projects" },
  { icon: Wrench, label: "Infrastructure Work" },
  { icon: Factory, label: "Fabrication Industry" },
  { icon: Truck, label: "Dealer Supply" },
];

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-wide uppercase">
        {children}
      </h2>
      <div className={`mt-3 h-1 w-16 bg-gold ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── STICKY HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-steel-950/95 backdrop-blur-sm border-b border-steel-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#top" className="flex-shrink-0 flex items-center gap-3">
              <img
                src="/assets/uploads/IMG_0002-1.png"
                alt="Banarsi Dass & Sons"
                className="h-10 w-auto"
              />
              <span className="font-heading text-lg md:text-xl font-bold text-gold tracking-widest">
                BANARSI DASS &amp; SONS
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.link.${i + 1}`}
                  className="font-body text-sm font-medium text-steel-200 hover:text-gold transition-colors tracking-widest uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                data-ocid="nav.primary_button"
                className="hidden md:inline-flex items-center gap-2 bg-gold text-steel-950 font-heading font-semibold text-sm px-5 py-2 tracking-widest hover:bg-gold-light transition-colors"
              >
                <Phone size={14} />
                CALL NOW
              </a>
              <button
                type="button"
                className="md:hidden text-steel-200 hover:text-gold transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-steel-900 border-t border-steel-700">
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={`nav.link.${i + 1}`}
                  className="font-body text-sm font-medium text-steel-200 hover:text-gold transition-colors tracking-widest uppercase py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${PHONE_PRIMARY}`}
                data-ocid="nav.primary_button"
                className="inline-flex items-center justify-center gap-2 bg-gold text-steel-950 font-heading font-semibold text-sm px-5 py-3 tracking-widest mt-2"
              >
                <Phone size={14} />
                CALL NOW
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-steel-950/75" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16">
          {/* Logo mark in hero */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/uploads/IMG_0002-1.png"
              alt="Banarsi Dass & Sons"
              className="h-24 sm:h-28 w-auto drop-shadow-[0_0_30px_rgba(201,166,70,0.4)]"
            />
          </div>

          {/* Eyebrow line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-xs tracking-[0.3em] uppercase">
              Hamirpur · Himachal Pradesh
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>

          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-wide leading-none mb-4">
            BANARSI DASS
            <br />
            <span className="text-gold">&amp; SONS</span>
          </h1>

          <p className="font-heading text-xl sm:text-2xl md:text-3xl font-medium text-gold tracking-widest uppercase mt-6 mb-3">
            Wholesale Suppliers of Construction Materials
          </p>

          <p className="font-body text-base text-steel-400 italic mb-8 tracking-wide">
            Strength That Lasts Generations
          </p>

          <p className="font-body text-sm md:text-base text-steel-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Banarsi Dass &amp; Sons is a trusted supplier of TMT bars, roofing
            sheets, pipes and structural materials in Himachal Pradesh. We
            supply high quality construction materials from India&apos;s leading
            brands to contractors, builders and dealers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              data-ocid="hero.primary_button"
              className="inline-flex items-center justify-center gap-3 bg-gold text-steel-950 font-heading font-bold text-base px-8 py-4 tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              <Phone size={18} />
              CALL NOW
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white font-heading font-bold text-base px-8 py-4 tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={18} />
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Our Products</SectionHeading>
          <p className="mt-6 text-steel-400 font-body text-sm tracking-widest uppercase">
            Quality materials from India's most trusted brands
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <article
                key={product.id}
                data-ocid={`products.card.${idx + 1}`}
                className="group bg-steel-800 border border-steel-700 hover:border-gold transition-all duration-300 overflow-hidden"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-white tracking-wide mb-2">
                    {product.title}
                  </h3>
                  <span className="inline-block text-gold font-body text-xs tracking-widest uppercase mb-4 border border-gold/30 px-3 py-1">
                    {product.brands}
                  </span>
                  <p className="font-body text-sm text-steel-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}
      <section className="py-24 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Why Choose Banarsi Dass &amp; Sons</SectionHeading>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 items-start p-6 border border-steel-700 hover:border-gold/50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gold flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-steel-950" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-white tracking-wide mb-1">
                    {point.title}
                  </h4>
                  <p className="font-body text-xs text-steel-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section id="brands" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading center>Brands We Deal In</SectionHeading>
          <p className="mt-6 font-body text-sm text-steel-400 text-center">
            We supply materials from India&apos;s most trusted manufacturers.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={brand}
                data-ocid={`brands.card.${idx + 1}`}
                className="group border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-200 p-6 text-center cursor-default"
              >
                <span className="font-heading text-lg font-bold text-white group-hover:text-gold transition-colors tracking-wide uppercase">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVING CONSTRUCTION NEEDS ── */}
      <section className="py-24 bg-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading center>Serving Construction Needs</SectionHeading>
          <p className="mt-6 font-body text-sm text-steel-400 text-center">
            From small residential projects to large-scale infrastructure — we
            supply it all.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border border-steel-600 hover:border-gold hover:bg-gold/5 transition-all duration-200 px-6 py-4"
              >
                <Icon size={20} className="text-gold flex-shrink-0" />
                <span className="font-heading text-base font-semibold text-white tracking-wide uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading>About Us</SectionHeading>
              <p className="mt-8 font-body text-base text-steel-200 leading-relaxed">
                Banarsi Dass &amp; Sons is a trusted wholesale supplier of
                construction materials in Hamirpur. With years of experience, we
                focus on providing reliable materials and building long term
                relationships with customers.
              </p>
              <p className="mt-4 font-body text-base text-steel-200 leading-relaxed">
                Our goal is to support strong construction through quality
                materials. We work directly with India&apos;s leading
                manufacturers to ensure every product we supply meets the
                highest standards of quality and durability.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-sm text-steel-400 tracking-wide">
                  Hamirpur, Himachal Pradesh, India
                </span>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gold pl-4">
                  <div className="font-heading text-3xl font-bold text-gold">
                    7+
                  </div>
                  <div className="font-body text-xs text-steel-400 mt-1 uppercase tracking-widest">
                    Brands Stocked
                  </div>
                </div>
                <div className="border-l-2 border-gold pl-4">
                  <div className="font-heading text-3xl font-bold text-gold">
                    HP
                  </div>
                  <div className="font-body text-xs text-steel-400 mt-1 uppercase tracking-widest">
                    Himachal Pradesh
                  </div>
                </div>
              </div>
            </div>

            {/* Shop photo */}
            <div className="hidden lg:block">
              <img
                src="/assets/uploads/Screenshot-2026-03-15-at-10.22.31-AM-3-1.png"
                alt="Banarsi Dass & Sons Shop"
                className="w-full h-full object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading center>Get In Touch</SectionHeading>
          <p className="mt-6 font-body text-sm text-steel-400 text-center">
            Reach out for wholesale inquiries, pricing, and availability.
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gold tracking-wide uppercase">
                  Banarsi Dass &amp; Sons
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <MapPin size={14} className="text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-steel-200">
                    Hamirpur, Himachal Pradesh, India
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {[PHONE_PRIMARY, PHONE_2, PHONE_3].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 group"
                  >
                    <Phone size={14} className="text-gold flex-shrink-0" />
                    <span className="font-heading text-lg text-white group-hover:text-gold transition-colors tracking-wide">
                      +91 {phone.slice(0, 5)} {phone.slice(5)}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  data-ocid="contact.primary_button"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-steel-950 font-heading font-bold text-sm px-6 py-3 tracking-widest uppercase hover:bg-gold-light transition-colors"
                >
                  <Phone size={15} />
                  CALL NOW
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#25D366] text-[#25D366] font-heading font-bold text-sm px-6 py-3 tracking-widest uppercase hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageCircle size={15} />
                  WHATSAPP
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-steel-600 text-steel-200 font-heading font-bold text-sm px-6 py-3 tracking-widest uppercase hover:border-white hover:text-white transition-colors"
                >
                  <ExternalLink size={15} />
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            {/* Right: Map */}
            <div className="border-2 border-gold/40 overflow-hidden h-80 lg:h-auto">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hamirpur, Himachal Pradesh map"
                data-ocid="contact.map_marker"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[oklch(0.07_0_0)] border-t-2 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Col 1 */}
            <div>
              <img
                src="/assets/uploads/IMG_0002-1.png"
                alt="Banarsi Dass & Sons"
                className="h-12 w-auto mb-4"
              />
              <h4 className="font-heading text-xl font-bold text-gold tracking-widest uppercase mb-4">
                Banarsi Dass &amp; Sons
              </h4>
              <div className="flex items-start gap-2 mb-3">
                <MapPin size={13} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-xs text-steel-400 leading-relaxed">
                  Hamirpur, Himachal Pradesh, India
                </span>
              </div>
              <div className="space-y-2">
                {[PHONE_PRIMARY, PHONE_2, PHONE_3].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 group"
                  >
                    <Phone size={11} className="text-gold flex-shrink-0" />
                    <span className="font-body text-xs text-steel-400 group-hover:text-gold transition-colors">
                      +91 {phone.slice(0, 5)} {phone.slice(5)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Products */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-white tracking-[0.2em] uppercase mb-4">
                Our Products
              </h4>
              <ul className="space-y-2">
                {[
                  "TMT Bars",
                  "Steel Pipes",
                  "Roofing Sheets",
                  "Structural Steel",
                ].map((item) => (
                  <li key={item}>
                    <span className="font-body text-xs text-steel-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div>
              <h4 className="font-heading text-sm font-semibold text-white tracking-[0.2em] uppercase mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#top" },
                  { label: "Products", href: "#products" },
                  { label: "About", href: "#about" },
                  { label: "Brands", href: "#brands" },
                  { label: "Contact", href: "#contact" },
                ].map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid={`footer.link.${i + 1}`}
                      className="font-body text-xs text-steel-400 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-steel-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-steel-400 text-center sm:text-left">
              © {new Date().getFullYear()} Banarsi Dass &amp; Sons. All rights
              reserved. | Hamirpur, Himachal Pradesh, India
            </p>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-steel-400 hover:text-steel-200 transition-colors"
            >
              Built with ❤ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
