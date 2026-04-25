import { useState, useEffect, useCallback } from 'react';
import {
  Menu, X, Sparkles, CheckCircle, Users, Calendar, Home,
  Star, MapPin, Instagram, Mail, Phone, ChevronLeft, ChevronRight,
  Shield, Clock, Heart, Zap, ArrowRight
} from 'lucide-react';

const HERO_IMAGES = [
  {
    url: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Professional cleaner at work in a modern home',
  },
  {
    url: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Spotless living room with natural light',
  },
  {
    url: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Cleaner organizing a beautiful kitchen',
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden shadow-2xl group">
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: idx === current ? 1 : 0 }}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} className="text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight size={20} className="text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2.5 group">
           <img src="/Dusty_logo.png" alt="Dusty Logo" className="h-20 w-auto" />

          </button>

          <div className="hidden md:flex items-center gap-1">
            {[
              { label: 'About', id: 'about' },
              { label: 'App', id: 'app' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-violet-700 rounded-lg hover:bg-violet-50 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://forms.gle/buoPn38418G8VzkE9"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white text-sm font-semibold py-2 px-5 rounded-lg shadow-md shadow-violet-200 hover:shadow-lg hover:shadow-violet-300 transition-all duration-200"
            >
              <Sparkles size={14} />
              Early Access
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-lg">
            <div className="px-4 py-3 space-y-1">
              {[
                { label: 'About', id: 'about' },
                { label: 'App', id: 'app' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-violet-700 hover:bg-violet-50 rounded-lg font-medium transition"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://forms.gle/buoPn38418G8VzkE9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold py-3 px-5 rounded-lg mt-2"
              >
                Join Early Access
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Zap size={14} />
              Now accepting early access sign-ups
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Trusted home cleaning,{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
                matched to you
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Connect with vetted, local housekeepers in minutes. Save time, enjoy a spotless home — powered by smart AI matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://forms.gle/buoPn38418G8VzkE9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transition-all duration-200 text-base sm:text-lg"
              >
                <Sparkles size={20} />
                Join Early Access
              </a>
              <a
                href="https://wa.me/+447598833724"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-800 hover:border-violet-300 hover:bg-violet-50 font-bold py-4 px-8 rounded-xl transition-all duration-200 text-base sm:text-lg"
              >
                Book a Clean Now
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-5 flex items-center gap-1.5">
              <span className="inline-flex -space-x-1.5">
                {[1,2,3,4].map(i => (
                  <span key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 border-2 border-white inline-block" />
                ))}
              </span>
              Join 500+ early users on the waitlist
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-violet-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              About Dusty
            </h2>
          </div>
          <div className="bg-white-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Dusty is a platform that connects busy households in the UK with trusted, vetted housekeepers. We believe everyone deserves a clean home without the stress of finding and managing cleaners.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Vetted Cleaners', desc: 'Every cleaner is thoroughly screened, background-checked, and verified' },
              { icon: Sparkles, title: 'Smart Matching', desc: 'AI-powered matching based on your specific needs and preferences' },
              { icon: Calendar, title: 'Flexible Booking', desc: 'Book whenever it suits your schedule — one-off or recurring' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-violet-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-violet-50">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            How It Works
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {[
            { icon: Home, title: 'Tell Us What You Need', desc: 'Share your cleaning preferences and home details' },
            { icon: Sparkles, title: 'Get Matched', desc: 'Our AI finds the perfect cleaner for you' },
            { icon: Calendar, title: 'Choose Your Time', desc: 'Book a slot that works for your schedule' },
            { icon: CheckCircle, title: 'Enjoy a Clean Home', desc: 'Relax while we handle the cleaning' },
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative text-center group">
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-violet-200" />
                )}
                <div className="relative z-10 w-20 h-20 mx-auto bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-200 group-hover:shadow-xl group-hover:shadow-violet-300 group-hover:scale-105 transition-all duration-300">
                  <Icon className="text-white" size={32} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-white text-violet-700 text-xs font-bold rounded-full flex items-center justify-center shadow border border-violet-100">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-[220px] mx-auto">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Dusty Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-violet-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3">Our Advantages</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Why Choose Dusty
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: 'Vetted & Trusted Cleaners', desc: 'Every cleaner is background checked, insured, and rated by previous clients. Your safety comes first.' },
              { icon: MapPin, title: 'Smart Local Matching', desc: 'Our AI algorithm matches you with cleaners based on location, availability, and your specific preferences.' },
              { icon: Clock, title: 'Flexible Booking Options', desc: 'One-time clean, regular weekly visits, or deep cleans — book exactly what you need, when you need it.' },
              { icon: Heart, title: 'Fair Pay for Cleaners', desc: 'We ensure cleaners are fairly compensated for their professional work, building lasting trusted relationships.' },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-violet-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-violet-600 tracking-wide uppercase mb-3">Social Proof</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Trusted by Busy Households
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { name: 'Sarah M.', text: 'Finally, a cleaning service that actually listens. My cleaner shows up on time, does amazing work, and I can manage everything through the app.', rating: 5 },
            { name: 'James P.', text: 'The matching process was so easy. Within days, I had a professional cleaner who I trust completely. Worth every penny.', rating: 5 },
            { name: 'Emma L.', text: 'Best decision for our busy family. The flexibility and reliability are incredible. Highly recommended!', rating: 5 },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-5 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name[0]}
                </div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-4 gap-6">
          {[
            { number: '£7K+', label: 'Revenue' },
            { number: '80+', label: 'Cleans Completed' },
            { number: '30+ Hosts', label: 'UK Wide Coverage' },
            { number: '20+', label: 'Dusters' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon App Section */}
      <section id="app" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gradient-to-br from-violet-50 via-purple-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-violet-100 text-violet-700 text-xs font-extra bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Coming Soon</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              AI-Powered Cleaner Matching
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The ultimate smart cleaning app that uses advanced AI to match you with trusted cleaners based on your location across the UK
            </p>
          </div>

          {/* Two-column: mockup left, content right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Mockup image */}
            <div className="flex justify-center">
              <img
                src="/dusty_mockup-removebg-preview.png"
                alt="Dusty app screenshot"
                className="w-full max-w-[320px] sm:max-w-[380px] drop-shadow-2xl"
              />
            </div>

            {/* Right column: features + CTA + store badges */}
            <div className="flex flex-col gap-6">

              {/* Feature cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, title: 'Location-Based Matching', desc: 'Our AI finds the perfect cleaner near you instantly based on availability and preferences.' },
                  { icon: Users, title: 'Smart Cleaner Profiles', desc: 'Browse detailed profiles, ratings, and specialties to choose the right fit for your home.' },
                  { icon: Calendar, title: 'Real-Time Booking', desc: 'Book, reschedule, or cancel in seconds through our intuitive mobile interface.' },
                  { icon: CheckCircle, title: 'Verified & Safe', desc: 'Every cleaner is background-checked, insured, and AI-verified for your peace of mind.' },
                ].map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="group bg-white rounded-xl p-5 border border-violet-100 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white" size={18} />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA button */}
              <a
                href="https://forms.gle/buoPn38418G8VzkE9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transition-all duration-200"
              >
                <Sparkles size={18} />
                Get Early Access to App
              </a>

              {/* App store placeholders */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Download Coming Soon</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Google Play */}
                  <div className="flex-1 flex items-center gap-3 bg-gray-900 text-white rounded-xl px-5 py-3.5 cursor-not-allowed opacity-70 select-none">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="currentColor">
                      <path d="M3.18 23.76c.3.17.65.2.98.09l12.09-6.98-2.76-2.76-10.31 9.65zM.5 1.83C.19 2.16 0 2.67 0 3.33v17.34c0 .66.19 1.17.5 1.5l.08.07 9.71-9.71v-.23L.58 1.76l-.08.07zM20.65 10.66l-2.76-1.59-3.09 3.09 3.09 3.09 2.79-1.61c.8-.46.8-1.52-.03-1.98zM4.16.24L16.25 7.22l-2.76 2.76L3.18.33c.33-.2.68-.18.98-.09z"/>
                    </svg>
                    <div>
                      <p className="text-[10px] leading-none text-gray-300">GET IT ON</p>
                      <p className="text-base font-bold leading-tight">Google Play</p>
                    </div>
                  </div>
                  {/* App Store */}
                  <div className="flex-1 flex items-center gap-3 bg-gray-900 text-white rounded-xl px-5 py-3.5 cursor-not-allowed opacity-70 select-none">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.82.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.76M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <p className="text-[10px] leading-none text-gray-300">Download on the</p>
                      <p className="text-base font-bold leading-tight">App Store</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom CTA banner */}
          <div className="mt-16 p-8 md:p-10 bg-white rounded-2xl border-2 border-violet-200 text-center shadow-sm">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              <span className="font-bold bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent">
                Ready to experience the future of home cleaning?
              </span>
              <br />
              Join our exclusive early access list and be among the first to use Dusty's AI-powered app.
            </p>
            <a
              href="https://forms.gle/buoPn38418G8VzkE9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 transition-all duration-200 text-lg"
            >
              Join Early Access Now
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* Contact Section / Footer */}
      <footer id="contact" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
               <img src="/Dusty_logo.png" alt="Dusty Logo" className="h-20 w-auto"/>
              </div>
              <p className="text-gray-400 leading-relaxed">Trusted home cleaning, matched to you.</p>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'App', id: 'app' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Contact Us</h3>
              <div className="space-y-3">
                <a href="mailto:Info@getdusty.co.uk" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                  <Mail size={16} />
                  <span className="text-sm">Info@getdusty.co.uk</span>
                </a>
                <a href="tel:+447598833724" className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200">
                  <Phone size={16} />
                  <span className="text-sm">+44 7598 833724</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-5">Follow Us</h3>
              <a
                href="https://instagram.com/getdustyapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={16} />
                <span className="text-sm">@getdustyapp</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">&copy; 2024 Dusty. All rights reserved.</p>
              <a
                href="https://forms.gle/buoPn38418G8VzkE9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md shadow-violet-900/30 transition-all duration-200 text-sm"
              >
                <Sparkles size={14} />
                Join Early Access
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
