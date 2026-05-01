import { motion } from "framer-motion";
import { 
  Shield, 
  Globe, 
  Terminal, 
  Cpu, 
  Target, 
  BookOpen, 
  Wrench, 
  Award,
  ChevronRight,
  Crosshair
} from "lucide-react";

const roadmapData = [
  {
    level: 1,
    title: "Foundations → System Exploitation",
    subtitle: "Build the hacker mindset from zero",
    icon: Shield,
    color: "from-emerald-400 to-green-600",
    bgLight: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    textLight: "text-emerald-400",
    shadow: "shadow-emerald-500/20",
    focus: "Core fundamentals + first real attacks",
    modules: [
      "Networking (TCP/IP, OSI, Ports, Protocols)",
      "Linux & Windows Fundamentals",
      "Virtual Lab Setup (VMware / VirtualBox)",
      "Programming Basics (Python, Bash)",
      "Cybersecurity Fundamentals",
      "Footprinting & Reconnaissance",
      "Scanning & Enumeration (Nmap Deep Dive)",
      "System Hacking (Password Attacks, Privilege Escalation)",
      "Basic Malware Concepts"
    ],
    outcome: "Think like a hacker, break into systems in controlled labs, build a strong base for everything ahead.",
  },
  {
    level: 2,
    title: "Web Security → Cryptography",
    subtitle: "Master the internet battlefield",
    icon: Globe,
    color: "from-blue-400 to-indigo-600",
    bgLight: "bg-blue-500/10",
    border: "border-blue-500/20",
    textLight: "text-blue-400",
    shadow: "shadow-blue-500/20",
    focus: "Web hacking + secure communication",
    modules: [
      "Web Fundamentals (HTTP, Sessions, Cookies)",
      "OWASP Top 10 (Deep Practical)",
      "Authentication & Access Control Attacks",
      "API Security Basics",
      "Bug Bounty Hunting (Beginner → Intermediate)",
      "Cryptography (Hashing, Encryption, SSL/TLS)",
    ],
    tools: ["Burp Suite (Full workflow)", "OWASP ZAP", "Gobuster / FFUF"],
    outcome: "Find real-world web vulnerabilities, start earning from bug bounties, understand secure systems.",
  },
  {
    level: 3,
    title: "Professional Pentesting",
    subtitle: "Become industry-ready",
    icon: Terminal,
    color: "from-orange-400 to-red-500",
    bgLight: "bg-orange-500/10",
    border: "border-orange-500/20",
    textLight: "text-orange-400",
    shadow: "shadow-orange-500/20",
    focus: "Real-world penetration testing + defensive knowledge",
    modules: [
      "🔴 Offensive: Advanced Enum, Exploitation, Privilege Esc, AD Attacks, Post Exploitation",
      "🔵 Defensive: Security Arch & Design, Risk Management, IAM, SOC basics",
    ],
    tools: ["Metasploit (Advanced)", "BloodHound", "CrackMapExec"],
    outcome: "Perform full penetration tests, understand enterprise security, job-ready (Pentester / Security Analyst).",
  },
  {
    level: 4,
    title: "Advanced Cyber Ops → AI & Warfare",
    subtitle: "Operate like an elite hacker",
    icon: Cpu,
    color: "from-purple-500 to-fuchsia-600",
    bgLight: "bg-purple-500/10",
    border: "border-purple-500/20",
    textLight: "text-purple-400",
    shadow: "shadow-purple-500/20",
    focus: "Cutting-edge + real-world offensive strategy + future tech",
    modules: [
      "🤖 AI & Offensive Security (LLM Exploitation, AI Tools)",
      "☁️ Cloud & Modern Infra Security (AWS/Azure/GCP, Docker/K8s)",
      "⚔️ Red Team Operations (C2, Persistence, Phishing, Lateral Movement)",
      "🧬 Malware & Reverse Engineering (Obfuscation, Analysis)",
      "🛰️ IoT & Hardware Hacking (Firmware, Wireless)",
      "🧩 Advanced Bug Bounty (Vulnerability Chaining, Automation)",
      "🛰️ Threat Intelligence & Cyber Warfare (APT Groups, MITRE ATT&CK)",
    ],
    outcome: "Master advanced hacking, AI integrations, and real-world warfare tactics.",
  }
];

export default function EliteRoadmap() {
  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-primary-400 font-medium text-sm mb-6"
          >
            <Crosshair className="w-4 h-4" />
            Final 4-Level Structure
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Cyber Cracker{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400">
              Elite Roadmap
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400"
          >
            The ultimate blueprint to transform you from an absolute beginner to an elite cybersecurity professional. Follow the structured path to mastery.
          </motion.p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {roadmapData.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-900/50 backdrop-blur-xl border ${level.border} rounded-2xl lg:rounded-3xl p-6 lg:p-10 hover:shadow-2xl hover:${level.shadow} transition-all duration-500 overflow-hidden group`}
            >
              {/* Subtle background gradient based on level color */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${level.bgLight} blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                
                {/* Left Column: Level Identity */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${level.color} shadow-lg`}>
                      <level.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold uppercase tracking-wider ${level.textLight}`}>
                        Level {level.level}
                      </h4>
                      <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                        {level.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-300 italic mb-6 border-l-2 border-slate-700 pl-4 py-1">
                    "{level.subtitle}"
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Target className={`w-5 h-5 mt-0.5 flex-shrink-0 ${level.textLight}`} />
                      <div>
                        <span className="text-sm font-semibold text-slate-200 block mb-1">Focus</span>
                        <p className="text-sm text-slate-400">{level.focus}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className={`w-5 h-5 mt-0.5 flex-shrink-0 ${level.textLight}`} />
                      <div>
                        <span className="text-sm font-semibold text-slate-200 block mb-1">Outcome</span>
                        <p className="text-sm text-slate-400">{level.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Modules and Tools */}
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div className="bg-slate-950/50 rounded-xl p-5 lg:p-7 border border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className={`w-5 h-5 ${level.textLight}`} />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Curriculum Modules</h4>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {level.modules.map((module, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-sm text-slate-300 group/item">
                          <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity ${level.textLight} -ml-2`} />
                          <span className="group-hover/item:translate-x-1 transition-transform duration-300 -ml-2 group-hover/item:ml-0">
                            {module}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {level.tools && (
                      <div className="pt-4 border-t border-slate-800">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex items-center gap-2 mr-2">
                            <Wrench className={`w-4 h-4 ${level.textLight}`} />
                            <span className="text-sm font-semibold text-slate-200">Key Tools:</span>
                          </div>
                          {level.tools.map((tool, tIdx) => (
                            <span key={tIdx} className="px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 rounded-full text-xs font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
