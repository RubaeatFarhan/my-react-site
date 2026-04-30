export interface Module {
  id: number;
  title: string;
  lessons: { title: string; duration: string; isPreview?: boolean }[];
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const courseData = {
  title: "CompleteEthical Hacking Course - Beginner to Advanced",
  subtitle:
    "Master ethical hacking, penetration testing, and cybersecurity — build production-ready security skills from scratch",
  rating: 4.8,
  totalRatings: 128,
  students: 35,
  lastUpdated: "April 2026",
  language: "Bangla",
  subtitles: ["Bangla"],
  price: 4999,
  discountPrice: 1499,
  discountPercent: 70,
  instructor: {
    name: "Rubaeat Farhan",
    title: "Ethical Hacker & Cybersecurity Expert",
    avatar: "/images/instructor.jpg",
    rating: 4.9,
    students: 100,
    courses: 4,
    bio: "Farhan is a cybersecurity expert with over 5 years of experience in the field. He has worked as a freelancer, and cybersecurity trainer. Now he is a full-time cybersecurity instructor.",
  },
  heroImage: "/images/course-hero.jpg",
  videoUrl: "https://www.youtube.com/embed/U7KiygxTXuQ",
  highlights: [
    "20+ hours of on-demand video content",
    "10+ coding exercises & 4 real-world projects",
    "Certificate of completion",
    "Lifetime access with free updates",
    "30-day money-back guarantee",
    "Access on mobile, tablet & TV",
  ],
  whatYouWillLearn: [
    "Ethical Hacking-এর Foundation ও Hacker Mindset তৈরি হবে",
    "Internet, VPN, Proxy, Tor ও Online Anonymity সম্পর্কে গভীর ধারণা",
    "Networking Basics (OSI, TCP/IP, IP Addressing, Ports) পরিষ্কারভাবে শিখবে",
    "নিজের Hacking Lab Setup (Kali Linux, VMware, Metasploitable) করতে পারবে",
    "Linux ও Windows Operating System-এ দক্ষতা অর্জন করবে",
    "Information Gathering (OSINT) ও Target Reconnaissance করতে পারবে",
    "Nmap, Wireshark দিয়ে Network Scanning ও Traffic Analysis শিখবে",
    "Enumeration techniques ব্যবহার করে hidden system data বের করতে পারবে",
    "Vulnerability Analysis ও Security Flaw detect করতে পারবে",
    "Password Attacks ও Cracking techniques (Hydra, John) শিখবে",
    "System Hacking, Reverse Shell ও Payload ব্যবহার করতে পারবে",
    "Privilege Escalation (Linux & Windows) করে Admin Access নিতে পারবে",
    "Malware types, analysis ও detection সম্পর্কে ধারণা পাবে",
    "Sniffing, MITM Attack ও Network interception techniques শিখবে",
    "Social Engineering attack ও Human manipulation techniques বুঝবে",
    "DoS/DDoS attack concept ও mitigation techniques শিখবে",
  ],
  requirements: [
    "Basic computer knowledge (file handling, software install, internet usage)",
    "A computer/laptop with minimum 8GB RAM (16GB recommended for virtual labs)",
    "Internet connection for downloading tools and accessing practice labs",
    "No prior hacking experience required — beginner থেকে শুরু করা হবে",
    "Learning mindset, patience, এবং problem-solving attitude",
    "Virtualization support (BIOS থেকে VT-x/AMD-V enable করা থাকলে ভালো)",
  ],
  description: `এটি একটি complete Ethical Hacking & Cybersecurity course, যা আপনাকে beginner থেকে advanced level পর্যন্ত নিয়ে যাবে।

এই course-এ আপনি শিখবেন hacking-এর fundamentals, networking basics, Linux & Windows security, এবং real-world cyber attacks কীভাবে কাজ করে।

আমরা শুধু theory না, বরং hands-on labs এবং practical demonstrations-এর মাধ্যমে শেখাই যাতে আপনি real skills develop করতে পারেন।

আপনি শিখবেন information gathering, scanning, enumeration, vulnerability analysis, system hacking, privilege escalation এবং basic defense techniques।

Course শেষে আপনি ethical hacking-এর strong foundation পাবেন এবং bug bounty বা cybersecurity career শুরু করার জন্য ready হবেন।`,
};
export const modules: Module[] = [
  {
    id: 1,
    title: "Introduction to Ethical Hacking",
    lessons: [
      { title: "What is Hacking & Ethical Hacking", duration: "10:00", isPreview: true },
      { title: "Types of Hackers (White, Black, Grey)", duration: "12:30" },
      { title: "Legal & Ethical Concepts", duration: "15:00" },
      { title: "Cybersecurity Career Paths & Certifications (CEH, eJPT, OSCP)", duration: "18:20" },
      { title: "Practice Platforms (TryHackMe, HackTheBox, HackerOne)", duration: "20:00" },
    ],
  },
  {
    id: 2,
    title: "Internet Basics",
    lessons: [
      { title: "Google Dorking & Advanced Search Operators", duration: "18:00" },
      { title: "VPN & Proxy Working Principles", duration: "20:15" },
      { title: "Tor Network & Dark Web Basics", duration: "22:30" },
      { title: "User Agent Spoofing & Browser Fingerprinting", duration: "16:40" },
    ],
  },
  {
    id: 3,
    title: "Networking Basics",
    lessons: [
      { title: "OSI Model & TCP/IP Model", duration: "25:00" },
      { title: "IP Addressing (IPv4, IPv6)", duration: "20:30" },
      { title: "Ports & Protocols", duration: "18:15" },
      { title: "Subnetting Basics", duration: "22:00" },
    ],
  },
  {
    id: 4,
    title: "Lab Setup",
    lessons: [
      { title: "VMware Installation & Setup", duration: "15:00" },
      { title: "Kali Linux Installation", duration: "20:00" },
      { title: "Metasploitable 2 Setup", duration: "18:00" },
      { title: "Windows & Ubuntu Lab Setup", duration: "20:30" },
    ],
  },
  {
    id: 5,
    title: "Operating System Basics",
    lessons: [
      { title: "Windows vs Linux Overview", duration: "15:30" },
      { title: "File Systems & Permissions", duration: "18:45" },
      { title: "CLI vs GUI", duration: "12:20" },
      { title: "Kali Linux Tools Overview", duration: "22:10" },
    ],
  },
  {
    id: 6,
    title: "Information Gathering (OSINT)",
    lessons: [
      { title: "Passive & Active Reconnaissance", duration: "20:00" },
      { title: "OSINT Tools (Sherlock, TheHarvester)", duration: "22:30" },
      { title: "Domain & DNS Analysis (Whois, NSLookup)", duration: "25:00" },
      { title: "Advanced Tools (Maltego, SpiderFoot, Recon-ng)", duration: "30:00" },
      { title: "Search Engines (Shodan, Censys)", duration: "18:30" },
    ],
  },
  {
    id: 7,
    title: "Network Scanning",
    lessons: [
      { title: "Scanning Basics & Phases", duration: "15:00" },
      { title: "Nmap Host Discovery & Port Scanning", duration: "30:00" },
      { title: "Service & OS Detection", duration: "25:00" },
      { title: "Wireshark Packet Analysis", duration: "28:00" },
      { title: "Tcpdump Basics", duration: "18:00" },
    ],
  },
  {
    id: 8,
    title: "Enumeration",
    lessons: [
      { title: "User & Service Enumeration", duration: "18:00" },
      { title: "SNMP, SMB, DNS Enumeration", duration: "25:00" },
      { title: "Tools (Enum4linux, Net Commands)", duration: "22:00" },
    ],
  },
  {
    id: 9,
    title: "Vulnerability Analysis",
    lessons: [
      { title: "CVE, CVSS & Risk Assessment", duration: "20:00" },
      { title: "Nessus, Nikto, OpenVAS, OWASP ZAP", duration: "35:00" },
      { title: "Exploit Research (Searchsploit, Exploit-DB)", duration: "25:00" },
      { title: "Vulnerability Reporting", duration: "18:00" },
    ],
  },
  {
    id: 10,
    title: "Password Attacks",
    lessons: [
      { title: "Brute Force & Dictionary Attacks", duration: "20:00" },
      { title: "Hydra & Medusa Tools", duration: "22:00" },
      { title: "Password Hashing & John the Ripper", duration: "25:00" },
    ],
  },
  {
    id: 11,
    title: "System Hacking",
    lessons: [
      { title: "Reverse Shell vs Bind Shell", duration: "20:00" },
      { title: "Payload Generation Basics", duration: "25:00" },
      { title: "Metasploitable Exploitation Concepts", duration: "30:00" },
    ],
  },
  {
    id: 12,
    title: "Privilege Escalation",
    lessons: [
      { title: "Linux & Windows Privilege Escalation", duration: "25:00" },
      { title: "Kernel Exploits (Dirty COW)", duration: "22:00" },
      { title: "Sudo & SSH Key Exploits", duration: "20:00" },
      { title: "LinPEAS & Meterpreter Usage", duration: "30:00" },
    ],
  },
  {
    id: 13,
    title: "Malware Threats",
    lessons: [
      { title: "Virus, Worm, Trojan, Ransomware", duration: "20:00" },
      { title: "Malware Lifecycle", duration: "18:00" },
      { title: "Static & Dynamic Analysis", duration: "25:00" },
      { title: "Detection & Prevention Techniques", duration: "22:00" },
    ],
  },
  {
    id: 14,
    title: "Network Sniffing",
    lessons: [
      { title: "Active & Passive Sniffing", duration: "18:00" },
      { title: "Packet Structure Analysis", duration: "20:00" },
      { title: "ARP Spoofing & MITM Attacks", duration: "30:00" },
      { title: "DNS Spoofing & SSL Stripping", duration: "25:00" },
    ],
  },
  {
    id: 15,
    title: "Social Engineering",
    lessons: [
      { title: "Human Psychology in Hacking", duration: "15:00" },
      { title: "Phishing, Baiting, Pretexting", duration: "25:00" },
      { title: "Attack Lifecycle", duration: "18:00" },
    ],
  },
  {
    id: 16,
    title: "Denial of Service (DoS/DDoS)",
    lessons: [
      { title: "DoS vs DDoS & Botnets", duration: "20:00" },
      { title: "SYN, UDP, HTTP Flood Attacks", duration: "25:00" },
      { title: "Slowloris & RUDY Attacks", duration: "22:00" },
      { title: "Mitigation Techniques (WAF, CDN, Rate Limiting)", duration: "25:00" },
    ],
  },
];
export const reviews: Review[] = [
  {
    id: 1,
    name: "Rafiul Islam",
    avatar: "RI",
    rating: 5,
    date: "1 week ago",
    comment:
      "এই course টা honestly আমার cybersecurity understanding পুরো change করে দিয়েছে। আগে কিছুই বুঝতাম না, এখন basic level penetration testing ও lab setup করতে পারি। খুব clear এবং structured teaching।",
    role: "Cybersecurity Learner, Dhaka",
  },
  {
    id: 2,
    name: "Tanvir Hasan",
    avatar: "TH",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Networking আর OSINT section টা especially খুব strong ছিল। Nmap আর Wireshark real-world use case সহ বুঝানো হয়েছে, যা অন্য কোথাও পাইনি। Highly recommended for beginners in Bangladesh.",
    role: "IT Student, BUET",
  },
  {
    id: 3,
    name: "Sadia Rahman",
    avatar: "SR",
    rating: 4,
    date: "3 weeks ago",
    comment:
      "আমি totally beginner ছিলাম, কিন্তু course structure এত ভালো যে ধাপে ধাপে সব clear হয়ে গেছে। Kali Linux setup থেকে শুরু করে scanning পর্যন্ত সব practicalভাবে শিখেছি।",
    role: "Computer Science Student, Dhaka",
  },
  {
    id: 4,
    name: "Mehedi Hasan",
    avatar: "MH",
    rating: 5,
    date: "5 days ago",
    comment:
      "Privilege escalation আর system hacking part টা খুব advanced level ছিল। Real lab environment use করে শেখানো হওয়ায় confidence অনেক বেড়ে গেছে। Cybersecurity career start করার জন্য perfect course।",
    role: "Junior Security Analyst, Bangladesh",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    avatar: "NJ",
    rating: 5,
    date: "1 month ago",
    comment:
      "Social engineering আর phishing concept গুলো খুব realisticভাবে explain করা হয়েছে। এখন আমি বুঝতে পারি কিভাবে attackers কাজ করে। Ethical hacking শেখার best starting point এটা।",
    role: "Freelance Security Researcher",
  },
];

export const faqs: FAQ[] = [
  {
    question: "এই Ethical Hacking course কি একেবারে beginner দের জন্য?",
    answer:
      "হ্যাঁ, একদম beginner-friendly। Zero knowledge থাকলেও সমস্যা নেই। আমরা basic থেকে শুরু করে step-by-step advanced level পর্যন্ত নিয়ে যাই, যাতে আপনি ধীরে ধীরে ethical hacking বুঝতে পারেন।",
  },
  {
    question: "এই course করতে কি programming জানা লাগবে?",
    answer:
      "না, আগে থেকে programming জানার দরকার নেই। তবে basic computer usage জানা থাকলে ভালো। দরকার হলে আমরা শুরুতেই সব basics explain করি।",
  },
  {
    question: "Course complete করতে কত সময় লাগবে?",
    answer:
      "এটা আপনার learning speed-এর উপর depend করে। যদি দিনে 1–2 ঘণ্টা দেন, তাহলে সাধারণত 2–4 মাসে complete করা সম্ভব। তবে lifetime access থাকায় আপনি নিজের pace-এ শিখতে পারবেন।",
  },
  {
    question: "Payment কিভাবে করা যাবে (Bangladesh থেকে)?",
    answer:
      "Bangladesh থেকে আপনি সহজেই bKash, Nagad বা Rocket দিয়ে payment করতে পারবেন। কিছু ক্ষেত্রে bank transfer বা international card (Visa/Mastercard) support করা হতে পারে।",
  },
  {
    question: "Course fee কত এবং একবার payment করলে কি lifetime access পাবো?",
    answer:
      "হ্যাঁ, একবার payment করলে আপনি lifetime access পাবেন। সব modules, updates এবং future content বিনামূল্যে access করতে পারবেন।",
  },
  {
    question: "আমি কি mobile দিয়ে course করতে পারবো?",
    answer:
      "থিওরিটিক্যাল অংশ mobile দিয়ে করা যাবে, কিন্তু practical lab, Kali Linux এবং tools use করার জন্য laptop/PC recommended।",
  },
  {
    question: "Certificate কি দেওয়া হবে?",
    answer:
      "হ্যাঁ, course complete করলে আপনি একটি completion certificate পাবেন, যা আপনি CV বা LinkedIn-এ ব্যবহার করতে পারবেন।",
  },
  {
    question: "Refund policy আছে কি?",
    answer:
      "হ্যাঁ, যদি আপনি course content নিয়ে সন্তুষ্ট না হন, তাহলে নির্দিষ্ট সময়ের মধ্যে refund request করতে পারবেন (terms & conditions apply)।",
  },
  {
    question: "Course update হলে কি আলাদা করে টাকা দিতে হবে?",
    answer:
      "না, সব future updates সম্পূর্ণ free থাকবে আপনার জন্য।",
  },
  {
    question: "এই course করে কি আমি bug bounty বা job start করতে পারবো?",
    answer:
      "হ্যাঁ, course শেষে আপনি basic to intermediate level ethical hacking skill পাবেন, যা bug bounty, freelancing বা entry-level cybersecurity career শুরু করার জন্য যথেষ্ট।",
  },
];
