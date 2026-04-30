import { useEffect, useState, useRef } from 'react';
import { GraduationCap, ShieldCheck, Building2, Trophy } from 'lucide-react';

const stats = [
  { icon: <GraduationCap className="w-7 h-7" />, value: 15000, suffix: '+', label: 'Students Trained', color: 'text-neon-green' },
  { icon: <ShieldCheck className="w-7 h-7" />, value: 98, suffix: '%', label: 'Certification Pass Rate', color: 'text-neon-blue' },
  { icon: <Building2 className="w-7 h-7" />, value: 500, suffix: '+', label: 'Corporate Partners', color: 'text-neon-purple' },
  { icon: <Trophy className="w-7 h-7" />, value: 50, suffix: '+', label: 'Industry Awards', color: 'text-neon-cyan' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-extrabold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 bg-cyber-800/50 border-y border-cyber-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-400 mt-2 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
