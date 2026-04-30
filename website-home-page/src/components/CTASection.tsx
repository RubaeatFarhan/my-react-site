import { ArrowRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-cyber-900 to-neon-blue/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/3 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          Limited Time Offer — Save up to 35%
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Start Your Cybersecurity
          <br />
          <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Career Today
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Join 15,000+ professionals who've launched and advanced their cybersecurity careers with CyberCracker Academy.
          Enroll now and get access to exclusive resources, mentorship, and career support.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#home"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-neon-green text-cyber-900 font-bold text-lg rounded-xl hover:bg-neon-green/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:scale-105"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/5 transition-all duration-300"
          >
            Talk to an Advisor
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          ✓ 14-day money-back guarantee &nbsp; ✓ Flexible payment plans &nbsp; ✓ Lifetime access
        </p>
      </div>
    </section>
  );
}
