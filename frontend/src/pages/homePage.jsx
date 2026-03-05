import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, MapPin, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import PhoneCard from "../components/PhoneCard";
import ScrollReveal from "../components/ScrollReveal";
import { phones, categories } from "../data/phones";

const heroSlides = [
  {
    tag: "Nepal's #1 Phone Marketplace",
    headline: "Buy & Sell Used Phones with Confidence",
    desc: "Thousands of verified listings from trusted sellers across Nepal. Find your next phone at the best price.",
    cta: "Browse Phones",
    ctaLink: "/buy",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=700&h=700&fit=crop",
    accent: "iPhone 14 Pro Max — Rs. 85,000",
  },
  {
    tag: "Top Samsung Deals",
    headline: "Galaxy S Series at Unbeatable Prices",
    desc: "Find Samsung flagships, mid-range, and budget phones from genuine sellers. Best prices guaranteed.",
    cta: "Shop Samsung",
    ctaLink: "/buy?brand=Samsung",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=700&h=700&fit=crop",
    accent: "Galaxy S23 Ultra — Rs. 72,000",
  },
  {
    tag: "Ready to Upgrade?",
    headline: "Sell Your Old Phone in Minutes",
    desc: "List your phone for free. Reach thousands of buyers instantly. Get the best value for your device.",
    cta: "Sell My Phone",
    ctaLink: "/sell",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=700&h=700&fit=crop",
    accent: "Free listing, no commission",
  },
];

const stats = [
  { value: "2,400+", label: "Active Listings" },
  { value: "1,200+", label: "Trusted Sellers" },
  { value: "30+", label: "Cities" },
  { value: "98%", label: "Satisfaction Rate" },
];

const howItWorks = [
  {
    step: "01",
    title: "Browse Listings",
    desc: "Search thousands of phones by brand, price, and condition. Filter to find exactly what you need.",
  },
  {
    step: "02",
    title: "Contact Seller",
    desc: "Connect directly with verified sellers. Ask questions, negotiate price, and arrange meeting.",
  },
  {
    step: "03",
    title: "Safe Exchange",
    desc: "Meet in a safe public location, inspect the phone thoroughly, and complete your purchase.",
  },
];

const brandLogos = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Realme", "Vivo", "Oppo"];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const featuredPhones = phones.filter((p) => p.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <div className="bg-base-100">
      {/* ── HERO CAROUSEL (no scroll reveal — above the fold) ── */}
      <section className="bg-base-200 overflow-hidden">
        <div className="page-container">
          <div className="relative min-h-[520px] flex items-center">
            <div className="w-full grid lg:grid-cols-2 gap-10 items-center py-16">
              <div className="text-left">
                <span className="section-label">{heroSlides[activeSlide].tag}</span>
                <h1 className="section-title mt-3 mb-5 text-4xl lg:text-5xl">
                  {heroSlides[activeSlide].headline}
                </h1>
                <p className="text-secondary text-base max-w-md mb-8 leading-relaxed">
                  {heroSlides[activeSlide].desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to={heroSlides[activeSlide].ctaLink} className="btn btn-primary">
                    {heroSlides[activeSlide].cta}
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/sell" className="btn btn-outline">
                    List for Free
                  </Link>
                </div>
                <div className="flex items-center gap-3 mt-10">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeSlide ? "w-8 bg-primary" : "w-3 bg-base-300"
                      }`}
                    />
                  ))}
                  <div className="flex gap-1 ml-4">
                    <button onClick={prevSlide} className="btn btn-ghost btn-xs btn-circle">
                      <ChevronLeft size={14} />
                    </button>
                    <button onClick={nextSlide} className="btn btn-ghost btn-xs btn-circle">
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent rounded-3xl scale-90 opacity-60 blur-xl" />
                  <img
                    key={activeSlide}
                    src={heroSlides[activeSlide].image}
                    alt="Featured phone"
                    className="relative w-72 h-72 object-contain drop-shadow-2xl transition-opacity duration-500"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-content text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                    {heroSlides[activeSlide].accent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-base-300">
        <div className="page-container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80} direction="up">
                <div className={`py-8 text-center ${i < stats.length - 1 ? "border-r border-base-300" : ""}`}>
                  <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                  <p className="section-label mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PHONES ── */}
      <section className="py-16">
        <div className="page-container">
          <ScrollReveal direction="up">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="section-label mb-2">Handpicked for You</p>
                <h2 className="section-title">Featured Listings</h2>
              </div>
              <Link to="/buy" className="btn btn-outline btn-sm gap-1">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPhones.map((phone, i) => (
              <ScrollReveal key={phone.id} delay={i * 100} direction="up">
                <PhoneCard phone={phone} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-base-200">
        <div className="page-container">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <p className="section-label mb-2">What are you looking for?</p>
              <h2 className="section-title">Browse by Category</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 70} direction="up">
                <Link
                  to={`/buy?category=${cat.name}`}
                  className="card bg-base-100 border border-base-300 hover:border-primary hover:shadow-md transition-all duration-200 p-5 text-center group"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-semibold text-sm">{cat.name}</h3>
                  <p className="text-xs text-secondary mt-1 leading-snug">{cat.desc}</p>
                  <span className="badge badge-ghost badge-xs mt-2">{cat.count} listings</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16">
        <div className="page-container">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="section-label mb-2">Simple & Secure</p>
              <h2 className="section-title">How It Works</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120} direction="up">
                <div className="relative text-center">
                  {i < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-2/3 w-1/3 h-px bg-base-300" />
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-content flex items-center justify-center mx-auto mb-5 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="py-14 bg-base-200">
        <div className="page-container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={24} />, title: "Verified Sellers", desc: "Every seller is verified with real contact info and location." },
              { icon: <Users size={24} />, title: "1,200+ Buyers & Sellers", desc: "Join a growing community of trusted phone traders across Nepal." },
              { icon: <MapPin size={24} />, title: "30+ Cities Covered", desc: "From Kathmandu to Biratnagar — find phones near you." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="flex gap-5 p-6 bg-base-100 rounded-xl border border-base-300">
                  <div className="w-12 h-12 rounded-xl bg-primary text-primary-content flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-secondary text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-14 border-t border-base-300">
        <div className="page-container">
          <ScrollReveal direction="fade">
            <p className="section-label text-center mb-8">Top Brands Available</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {brandLogos.map((brand) => (
                <Link
                  key={brand}
                  to={`/buy?brand=${brand}`}
                  className="text-secondary hover:text-primary font-semibold text-sm transition-colors tracking-wide"
                >
                  {brand}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SELL CTA ── */}
      <section className="py-16">
        <div className="page-container">
          <ScrollReveal direction="up" threshold={0.15}>
            <div className="bg-primary text-primary-content rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="section-label text-primary-content/50 mb-3">Ready to Upgrade?</p>
                <h2 className="text-3xl font-bold tracking-tight mb-3">Sell Your Phone Today</h2>
                <p className="text-primary-content/70 text-sm max-w-sm leading-relaxed">
                  List your phone in under 5 minutes. Free listing, no commission. Reach thousands of buyers instantly.
                </p>
                <ul className="mt-5 space-y-2">
                  {["Free to list", "Direct buyer contact", "No hidden fees"].map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-primary-content/80">
                      <CheckCircle size={14} className="text-accent" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/sell" className="btn bg-base-100 text-primary hover:bg-base-200 border-0 px-8 shrink-0">
                Start Selling
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
