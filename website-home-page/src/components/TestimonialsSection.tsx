import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafiq Hasan',
    role: 'Security Engineer at Grameenphone',
    avatar: '👨‍💻',
    rating: 5,
    text: 'CyberCracker\'s CEH course completely transformed my career. The hands-on labs were incredibly realistic, and the instructors provided insights you can\'t find in textbooks. I landed my dream role within 3 months of completing the program.',
    course: 'Certified Ethical Hacker',
  },
  {
    name: 'Tasnim Akter',
    role: 'SOC Analyst at BRAC Bank',
    avatar: '👩‍💻',
    rating: 5,
    text: 'The SOC Analyst training was exactly what I needed to transition from IT support to cybersecurity. The SIEM lab exercises and real threat simulations gave me confidence that no other program in Bangladesh could match.',
    course: 'SOC Analyst Training',
  },
  {
    name: 'Md. Ariful Islam',
    role: 'IT Security Head at Robi Axiata',
    avatar: '👨‍🔬',
    rating: 5,
    text: 'I\'ve sent over 20 team members through CyberCracker\'s programs. The CISSP prep course has a near-perfect pass rate, and the corporate training packages are outstanding value. Highly recommend for enterprise teams in Bangladesh.',
    course: 'CISSP Certification',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Cloud Security Architect at Pathao',
    avatar: '👩‍🔧',
    rating: 5,
    text: 'The Cloud Security course covered AWS, Azure, and GCP security in incredible depth. The zero-trust architecture module alone was worth the entire investment. Best cybersecurity training available in Bangladesh — now going global!',
    course: 'Cloud Security Architect',
  },
  {
    name: 'Shahidul Alam',
    role: 'Penetration Tester at Bangladesh Bank',
    avatar: '🧑‍💻',
    rating: 5,
    text: 'From a fresh graduate to a certified pen tester in under 6 months. The career placement support was incredible — CyberCracker connected me with top employers and helped prep me for technical interviews.',
    course: 'CompTIA Security+',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cyber-800/30 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-neon-purple/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5">
            What Our{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Graduates Say
            </span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto">
          <div key={current} className="relative bg-cyber-800/60 backdrop-blur border border-cyber-600/30 rounded-2xl p-8 lg:p-12 animate-[fadeIn_0.4s_ease-out]">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-neon-purple/10" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 italic">
              "{t.text}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-cyber-700 flex items-center justify-center text-2xl border-2 border-neon-purple/30">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-neon-purple/10 text-neon-purple text-xs font-medium rounded-full border border-neon-purple/20">
                {t.course}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-neon-purple' : 'w-2 bg-cyber-500 hover:bg-cyber-400'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={prev} className="p-3 rounded-xl border border-cyber-600/50 text-gray-400 hover:text-white hover:border-neon-purple/50 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="p-3 rounded-xl border border-cyber-600/50 text-gray-400 hover:text-white hover:border-neon-purple/50 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
