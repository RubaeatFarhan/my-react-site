import { Link } from 'react-router-dom';
import { Clock, Users, Award, ArrowRight, Star } from 'lucide-react';

const courses = [
  {
    title: 'Complete Ethical Hacking Course',
    level: 'Beginner',
    duration: '8 Weeks',
    students: '5,100+',
    rating: 4.9,
    reviews: 842,
    price: '$899',
    originalPrice: '$1,399',
    image: '/images/complet ethical hacking course.png',
    tags: ['Threats', 'Vulnerabilities', 'Architecture'],
    popular: true,
    path: '/professional-course',
  },
  {
    title: 'Certified Ethical Hacker',
    level: 'Intermediate',
    duration: '12 Weeks',
    students: '2,450+',
    rating: 4.8,
    reviews: 634,
    price: '$1,299',
    originalPrice: '$1,899',
    image: '🐛',
    tags: ['Pen Testing', 'Exploits', 'Recon'],
    popular: false,
    path: '/professional-course',
  },
  {
    title: 'CISSP Certification',
    level: 'Advanced',
    duration: '16 Weeks',
    students: '1,800+',
    rating: 4.9,
    reviews: 421,
    price: '$2,499',
    originalPrice: '$3,499',
    image: '🏆',
    tags: ['Security Mgmt', 'Risk', 'Governance'],
    popular: false,
  },
  {
    title: 'SOC Analyst Training',
    level: 'Beginner',
    duration: '10 Weeks',
    students: '3,300+',
    rating: 4.7,
    reviews: 589,
    price: '$999',
    originalPrice: '$1,599',
    image: '⚡',
    tags: ['SIEM', 'Threat Hunting', 'Forensics'],
    popular: true,
  },
  {
    title: 'Cloud Security Architect',
    level: 'Intermediate',
    duration: '10 Weeks',
    students: '1,200+',
    rating: 4.8,
    reviews: 312,
    price: '$1,799',
    originalPrice: '$2,499',
    image: '☁️',
    tags: ['AWS', 'Azure', 'Zero Trust'],
    popular: false,
  },
  {
    tags: ['Reverse Eng', 'Malware', 'Threat Intel'],
    popular: false,
    comingSoon: true,
  },
  {
    title: 'Professional Red Team Course',
    level: 'Advanced',
    duration: '16 Weeks',
    students: '0+',
    rating: 5.0,
    reviews: 0,
    price: '$2,999',
    originalPrice: '$3,999',
    image: '🛡️',
    tags: ['Red Teaming', 'Adversary Simulation', 'Post-Exploitation'],
    popular: false,
    comingSoon: true,
  },
];

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
  Intermediate: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Advanced: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-neon-green text-sm font-semibold uppercase tracking-widest">Our Programs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5">
            Industry-Leading{' '}
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Cybersecurity Courses
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            From beginner fundamentals to advanced specializations — master cybersecurity with expert-led training and hands-on labs.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => {
            const isComingSoon = (course as any).comingSoon;
            const CardContent = (
              <div className={`h-full relative ${isComingSoon ? 'opacity-75' : ''}`}>
                {course.popular && !isComingSoon && (
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-neon-green text-cyber-900 text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}

                {isComingSoon && (
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-cyber-700 text-gray-300 text-xs font-bold rounded-full border border-cyber-600">
                    COMING SOON
                  </div>
                )}
  
                {/* Image/Emoji header */}
                <div className="h-40 bg-gradient-to-br from-cyber-700 to-cyber-800 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {course.image.includes('.png') || course.image.includes('.jpg') ? (
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                    />
                  ) : (
                    <div className="group-hover:scale-110 transition-transform duration-500 relative z-10">
                      {course.image}
                    </div>
                  )}

                  {isComingSoon && (
                    <div className="absolute inset-0 bg-cyber-900/40 backdrop-blur-[1px] flex items-center justify-center z-20">
                      <div className="text-[10px] font-bold text-white tracking-[4px] uppercase bg-black/50 px-4 py-2 rounded-lg border border-white/10">
                        Opening Soon
                      </div>
                    </div>
                  )}
                </div>
  
                <div className="p-6">
                  {/* Level badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${levelColor[course.level]}`}>
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-white font-medium">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.reviews})</span>
                    </div>
                  </div>
  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                    {course.title}
                  </h3>
  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/5 text-gray-400 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> Certificate
                    </span>
                  </div>
  
                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-cyber-600/30">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-white">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <div className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group/btn ${
                      isComingSoon 
                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                        : 'bg-neon-green/10 text-neon-green hover:bg-neon-green hover:text-cyber-900'
                    }`}>
                      {isComingSoon ? 'Soon' : (course.path ? 'View' : 'Enroll')}
                      {!isComingSoon && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />}
                    </div>
                  </div>
                </div>
              </div>
            );

            return course.path && !isComingSoon ? (
              <Link
                key={i}
                to={course.path}
                className="group relative bg-cyber-800/60 backdrop-blur border border-cyber-600/30 rounded-2xl overflow-hidden hover:border-neon-green/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,255,136,0.1)] block"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={i}
                className={`group relative bg-cyber-800/60 backdrop-blur border border-cyber-600/30 rounded-2xl overflow-hidden transition-all duration-500 ${
                  isComingSoon ? 'cursor-not-allowed' : 'hover:border-neon-green/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,255,136,0.1)]'
                }`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Can't find what you're looking for?</p>
          <button className="px-8 py-3 border border-neon-green/30 text-neon-green font-medium rounded-xl hover:bg-neon-green/10 transition-all duration-300">
            View All Courses & Learning Paths
          </button>
        </div>
      </div>
    </section>
  );
}
