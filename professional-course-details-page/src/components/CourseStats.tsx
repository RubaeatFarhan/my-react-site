import { Clock, Monitor, FileText, Download, Trophy, Smartphone } from "lucide-react";

const stats = [
  { icon: Clock, label: "Total Hours", value: "63.5", sublabel: "On-demand video" },
  { icon: FileText, label: "Exercises", value: "45+", sublabel: "Coding challenges" },
  { icon: Monitor, label: "Projects", value: "12", sublabel: "Real-world apps" },
  { icon: Download, label: "Resources", value: "200+", sublabel: "Downloadable files" },
  { icon: Trophy, label: "Certificate", value: "Yes", sublabel: "Upon completion" },
  { icon: Smartphone, label: "Access", value: "Lifetime", sublabel: "Any device" },
];

export default function CourseStats() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3 group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm font-medium text-primary-200">{stat.label}</div>
              <div className="text-xs text-primary-300 mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
