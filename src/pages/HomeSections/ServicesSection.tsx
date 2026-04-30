import { Shield, Search, FileWarning, Server, Lock, Radio, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-7 h-7" />,
    title: 'Penetration Testing',
    description: 'Identify vulnerabilities before attackers do with comprehensive network, web app, and infrastructure pen testing.',
    color: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-500/10 text-green-400',
  },
  {
    icon: <FileWarning className="w-7 h-7" />,
    title: 'Incident Response',
    description: '24/7 rapid incident response team to contain breaches, minimize damage, and restore operations quickly.',
    color: 'from-red-500 to-orange-600',
    iconBg: 'bg-red-500/10 text-red-400',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Compliance & Audit',
    description: 'Achieve SOC 2, ISO 27001, HIPAA, PCI-DSS compliance with expert guidance and audit preparation.',
    color: 'from-blue-500 to-cyan-600',
    iconBg: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: 'Managed Security (MSSP)',
    description: 'Fully managed SOC services with continuous monitoring, threat detection, and expert analysis around the clock.',
    color: 'from-purple-500 to-violet-600',
    iconBg: 'bg-purple-500/10 text-purple-400',
  },
  {
    icon: <Lock className="w-7 h-7" />,
    title: 'Security Architecture',
    description: 'Design and implement zero-trust security architectures tailored to your organization\'s unique needs.',
    color: 'from-cyan-500 to-blue-600',
    iconBg: 'bg-cyan-500/10 text-cyan-400',
  },
  {
    icon: <Radio className="w-7 h-7" />,
    title: 'Threat Intelligence',
    description: 'Proactive threat intelligence feeds and dark web monitoring to stay ahead of emerging cyber threats.',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-500/10 text-amber-400',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-cyber-800/30 relative">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-blue text-sm font-semibold uppercase tracking-widest">Enterprise Solutions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5">
            Professional{' '}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Security Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond training, we provide enterprise-grade cybersecurity services to protect your organization from evolving threats.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-cyber-800/60 backdrop-blur border border-cyber-600/30 rounded-2xl p-8 hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-neon-blue transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
