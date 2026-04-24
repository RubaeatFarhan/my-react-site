import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Zap, Shield, Star, Award, Users, BookOpen, Target, Code, Lock } from 'lucide-react';

const categoryTabs = ['Beginner', 'Intermediate', 'Advanced'];
const seriesSections = ['Mastery Series', 'Pro Series', 'Job Series', 'Labs Series'];
const languages = ['Bangla', 'English', 'Spanish'];
const filterOptions = ['A to Z', 'Labs', 'Live Projects', 'Certification', 'Bootcamp'];

const heroPackages = [
  {
    title: 'Red Team Full Package',
    subtitle: 'Attack, evade, and compromise like a professional adversary.',
    duration: '16 Weeks',
    badge: 'Full Package',
    accent: 'from-red-500 to-orange-500',
    icon: Shield,
    link: '/course/red-team'
  },
  {
    title: 'Purple Teaming Complete Bundle',
    subtitle: 'Blend offensive and defensive skills for real-world security readiness.',
    duration: '14 Weeks',
    badge: 'Full Package',
    accent: 'from-violet-500 to-fuchsia-500',
    icon: Zap,
    link: '/course/purple-teaming'
  }
];

const courses = [
  {
    id: 'metasploit-framework',
    title: 'Master Metasploit',
    description: 'Complete Metasploit Framework training for ethical hackers, from msfconsole basics to full exploitation workflows.',
    level: 'Advanced',
    series: 'Mastery Series',
    language: 'English',
    duration: '12 Weeks',
    price: 'Tk 2,499',
    rating: 4.9,
    students: 421,
    icon: Shield,
    color: 'from-cyan-500 to-blue-500',
    image: '/images/course1.jpg',
    link: '/course/metasploit-framework'
  },
  {
    id: 'bug-bounty',
    title: 'Bug Bounty Hunting Masterclass',
    description: 'Hands-on vulnerability hunting course that prepares you to find and report real-world bugs like a security researcher.',
    level: 'Beginner',
    series: 'Job Series',
    language: 'Bangla',
    duration: '8 Weeks',
    price: 'Tk 1,999',
    rating: 4.8,
    students: 340,
    icon: Target,
    color: 'from-amber-500 to-orange-500',
    image: '/images/course1.jpg',
    link: '/course/bug-bounty'
  },
  {
    id: 'malware-analysis',
    title: 'Malware Analysis Advanced',
    description: 'Master malware behavior analysis, reverse engineering, and threat intelligence for modern cyber defense.',
    level: 'Intermediate',
    series: 'Pro Series',
    language: 'Spanish',
    duration: '10 Weeks',
    price: 'Tk 3,499',
    rating: 4.8,
    students: 187,
    icon: Code,
    color: 'from-violet-500 to-purple-500',
    image: '/images/course1.jpg',
    link: '/course/malware-development'
  }
];

export const Courses = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Beginner');
  const [selectedSeries, setSelectedSeries] = useState('Mastery Series');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchText, setSearchText] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>(['A to Z']);

  const toggleFilter = (filter: string) => {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  };

  const filteredCourses = courses.filter((course) => {
    const searchMatch =
      !searchText ||
      course.title.toLowerCase().includes(searchText.toLowerCase()) ||
      course.description.toLowerCase().includes(searchText.toLowerCase());

    const categoryMatch = selectedCategory ? course.level === selectedCategory : true;
    const seriesMatch = selectedSeries ? course.series === selectedSeries : true;
    const languageMatch = selectedLanguage ? course.language === selectedLanguage : true;

    return searchMatch && categoryMatch && seriesMatch && languageMatch;
  });

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-10 py-12">
        <aside className="space-y-8 sticky top-28 self-start">
          <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 shadow-xl shadow-cyan-500/5">
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-300 font-semibold mb-4">Course Levels</div>
            <div className="space-y-3">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`w-full text-left rounded-2xl px-4 py-3 font-medium transition-all ${
                    selectedCategory === tab
                      ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-200'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 shadow-xl shadow-violet-500/5">
            <div className="text-sm uppercase tracking-[0.24em] text-violet-300 font-semibold mb-4">Series</div>
            <div className="space-y-3">
              {seriesSections.map((series) => (
                <button
                  key={series}
                  onClick={() => setSelectedSeries(series)}
                  className={`w-full text-left rounded-2xl px-4 py-3 text-sm transition-all ${
                    selectedSeries === series
                      ? 'bg-violet-500/15 border border-violet-500/40 text-violet-200'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {series}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 shadow-xl shadow-rose-500/5">
            <div className="text-sm uppercase tracking-[0.24em] text-rose-300 font-semibold mb-4">Language</div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`w-full text-left rounded-2xl px-4 py-3 text-sm transition-all ${
                    selectedLanguage === lang
                      ? 'bg-rose-500/15 border border-rose-500/40 text-rose-200'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 shadow-xl shadow-white/5">
            <div className="text-sm uppercase tracking-[0.24em] text-gray-300 font-semibold mb-4">Need help?</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pick the right path: beginner to advanced, red team or purple team, and learn in your preferred language.
            </p>
          </div>
        </aside>

        <main className="space-y-10">
          <section className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900 border border-white/10 p-8 shadow-2xl shadow-cyan-500/5">
            <div className="grid xl:grid-cols-[1fr_360px] gap-8 items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-300 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-300" /> New Course Hub
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                    Discover courses for every skill level
                  </h1>
                  <p className="text-gray-400 text-lg max-w-3xl">
                    Search by course name, filter by series, and jump into curated Red Team and Purple Team packages designed for real-world security professionals.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 shadow-inner shadow-black/20 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center text-cyan-300">
                      <Search className="w-5 h-5" />
                    </div>
                    <input
                      value={searchText}
                      onChange={(event) => setSearchText(event.target.value)}
                      placeholder="Search courses, labs, certifications..."
                      className="w-full rounded-3xl border-none bg-transparent py-4 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {filterOptions.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        className={`rounded-full px-4 py-2 text-sm transition-all ${
                          activeFilters.includes(filter)
                            ? 'bg-cyan-500 text-black font-semibold'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {heroPackages.map((packageItem, index) => {
                    const IconComponent = packageItem.icon;
                    return (
                      <motion.div
                        key={packageItem.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`rounded-3xl border border-white/10 p-6 bg-gradient-to-br ${packageItem.accent} bg-opacity-10 shadow-lg shadow-cyan-500/5`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-4">
                          <div className="rounded-full bg-white/10 p-3 text-white">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">{packageItem.badge}</div>
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{packageItem.title}</h2>
                      <p className="text-gray-300 leading-relaxed mb-5">{packageItem.subtitle}</p>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-gray-400">{packageItem.duration}</span>
                        <button
                          type="button"
                          onClick={() => navigate(packageItem.link)}
                          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15"
                        >
                          Explore
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-violet-500/5">
                <div className="mb-6 text-center">
                  <div className="text-sm uppercase tracking-[0.24em] text-violet-300 font-semibold mb-2">Featured Package</div>
                  <h2 className="text-3xl font-bold">Purple Teaming Full Package</h2>
                  <p className="text-gray-400 mt-3">A unique course bundle that connects offense and defense for comprehensive security training.</p>
                </div>

                <div className="space-y-4">
                  {[
                    'Red Team scenarios',
                    'Purple Team collaboration',
                    'Network defense strategy',
                    'Threat detection playbooks'
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 text-violet-400">�</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/course/purple-teaming')}
                  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-fuchsia-500/20 transition hover:brightness-110"
                >
                  View Purple Team Package
                </button>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900/90 border border-white/10 p-8 shadow-2xl shadow-slate-800/50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300 font-semibold mb-2">Course Collections</p>
                <h2 className="text-3xl font-bold">Primary learning paths</h2>
                <p className="text-gray-400 mt-2 max-w-2xl">Browse the core Metasploit, Bug Bounty and Malware Analysis courses designed for fast skill growth.</p>
              </div>
              <div className="text-gray-400 text-sm">
                Showing {filteredCourses.length} course{filteredCourses.length === 1 ? '' : 's'} for {selectedCategory} / {selectedSeries} / {selectedLanguage}
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, idx) => {
                  const IconComponent = course.icon;
                  return (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 shadow-2xl shadow-cyan-500/5"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 rounded-2xl bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white">
                          {course.series}
                        </div>
                        <div className="absolute top-4 right-4 rounded-full bg-black/40 p-3 backdrop-blur-md text-white">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between gap-3 text-sm text-gray-400">
                          <span>{course.level}</span>
                          <span>{course.language}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{course.description}</p>
                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                          <div className="rounded-2xl bg-white/5 p-3">Duration<br /><span className="font-semibold text-white">{course.duration}</span></div>
                          <div className="rounded-2xl bg-white/5 p-3">Students<br /><span className="font-semibold text-white">{course.students}+</span></div>
                        </div>
                        <div className="flex items-center justify-between gap-3">
                          <div className="rounded-2xl bg-slate-950/80 px-3 py-2 text-sm text-cyan-300 font-semibold">{course.price}</div>
                          <button
                            type="button"
                            onClick={() => navigate(course.link)}
                            className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${course.color} hover:brightness-110 transition`}
                          >
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-slate-950/80 p-12 text-center">
                  <p className="text-gray-300 text-lg font-semibold">No courses match your current filters.</p>
                  <p className="text-gray-500 mt-3">Try a different level, series, language, or search term.</p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
