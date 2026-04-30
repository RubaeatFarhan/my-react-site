import { Monitor, Users, BookOpen, Briefcase, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Hands-On Virtual Labs',
    description: 'Practice in real-world simulated environments with 200+ lab exercises across all major attack vectors.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Instructors',
    description: 'Learn from certified professionals with 10+ years of real-world cybersecurity and incident response experience.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Flexible Learning',
    description: 'Choose between live online classes, self-paced modules, or hybrid learning that fits your schedule.',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Career Placement',
    description: '93% of our graduates land cybersecurity roles within 6 months through our hiring partner network.',
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: '24/7 Mentor Support',
    description: 'Get help whenever you need it with round-the-clock access to mentors and our student community.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Recognition',
    description: 'Our certifications are recognized by 500+ organizations worldwide across all industries.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-green/3 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-neon-green text-sm font-semibold uppercase tracking-widest">Why CyberCracker</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6">
              The{' '}
              <span className="bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
                #1 Cybersecurity
              </span>{' '}
              Training Platform
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We don't just teach theory — we build cyber warriors. Our immersive, battle-tested curriculum combines cutting-edge tools, 
              live threat simulations, and mentorship from industry veterans.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              {['EC-Council Partner', 'CompTIA Authorized', 'ISC² Official'].map((badge, i) => (
                <div key={i} className="px-4 py-2 bg-cyber-800/60 border border-cyber-600/30 rounded-full text-sm text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group p-5 bg-cyber-800/40 border border-cyber-600/20 rounded-xl hover:border-neon-green/20 hover:bg-cyber-800/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-green/10 text-neon-green flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-1.5">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
