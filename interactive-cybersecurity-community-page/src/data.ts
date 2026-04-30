import { ForumTopic, CommunityMember, EventItem, ResourceItem, Achievement } from './types';

export const forumTopics: ForumTopic[] = [
  { id: 1, title: '🔴 Critical: New Zero-Day Vulnerability in OpenSSH - CVE-2026-XXXX', author: 'CyberSentinel', authorAvatar: 'CS', replies: 143, views: 12890, lastActivity: '2 min ago', category: 'Threat Alerts', isSticky: true, isHot: true },
  { id: 2, title: '📢 Community Guidelines Update - Please Read', author: 'AdminTeam', authorAvatar: 'AT', replies: 32, views: 5430, lastActivity: '15 min ago', category: 'Announcements', isSticky: true, isHot: false },
  { id: 3, title: '🛡️ How I Secured My Home Network - Full Guide', author: 'NetGuardian', authorAvatar: 'NG', replies: 89, views: 7230, lastActivity: '8 min ago', category: 'Guides & Tutorials', isSticky: false, isHot: true },
  { id: 4, title: '💻 Help with Reverse Engineering Challenge', author: 'HexHunter', authorAvatar: 'HH', replies: 27, views: 1890, lastActivity: '25 min ago', category: 'Help & Support', isSticky: false, isHot: false },
  { id: 5, title: '🔐 Discussion: Is Passwordless Auth The Future?', author: 'CrypticMind', authorAvatar: 'CM', replies: 67, views: 4560, lastActivity: '1 hour ago', category: 'Discussions', isSticky: false, isHot: true },
  { id: 6, title: '📊 Annual Cyber Threat Report 2026 Analysis', author: 'DataWatch', authorAvatar: 'DW', replies: 45, views: 3210, lastActivity: '2 hours ago', category: 'Industry News', isSticky: false, isHot: false },
  { id: 7, title: '🐍 Python Tool for Automated Pentesting - Open Source', author: 'ScriptKiddiePro', authorAvatar: 'SK', replies: 56, views: 4670, lastActivity: '3 hours ago', category: 'Tools & Resources', isSticky: false, isHot: true },
  { id: 8, title: '🎯 Bug Bounty Success Story: Found RCE in Major Platform', author: 'BugHunter99', authorAvatar: 'BH', replies: 112, views: 8900, lastActivity: '4 hours ago', category: 'Bug Bounty', isSticky: false, isHot: true },
];

export const communityMembers: CommunityMember[] = [
  { id: 1, name: 'CyberSentinel', avatar: 'CS', role: 'Security Researcher', roleBadge: 'admin', posts: 3421, reputation: 12890, joinedDate: 'Jan 2022', status: 'online' },
  { id: 2, name: 'NetGuardian', avatar: 'NG', role: 'Network Security Engineer', roleBadge: 'mod', posts: 2107, reputation: 8760, joinedDate: 'Mar 2022', status: 'online' },
  { id: 3, name: 'CrypticMind', avatar: 'CM', role: 'Cryptography Expert', roleBadge: 'vip', posts: 1567, reputation: 6540, joinedDate: 'Jun 2022', status: 'away' },
  { id: 4, name: 'HexHunter', avatar: 'HH', role: 'Malware Analyst', roleBadge: 'vip', posts: 1234, reputation: 5430, joinedDate: 'Aug 2022', status: 'online' },
  { id: 5, name: 'DataWatch', avatar: 'DW', role: 'SOC Analyst', roleBadge: 'mod', posts: 987, reputation: 4320, joinedDate: 'Oct 2022', status: 'offline' },
  { id: 6, name: 'BugHunter99', avatar: 'BH', role: 'Bug Bounty Hunter', roleBadge: 'vip', posts: 876, reputation: 3980, joinedDate: 'Dec 2022', status: 'online' },
  { id: 7, name: 'ScriptKiddiePro', avatar: 'SK', role: 'Penetration Tester', roleBadge: 'member', posts: 654, reputation: 2870, joinedDate: 'Feb 2023', status: 'away' },
  { id: 8, name: 'FirewallFox', avatar: 'FF', role: 'Security Architect', roleBadge: 'member', posts: 543, reputation: 2340, joinedDate: 'Apr 2023', status: 'offline' },
];

export const events: EventItem[] = [
  { id: 1, title: 'Zero-Day Threat Hunting Workshop', description: 'Learn advanced techniques to identify and analyze zero-day vulnerabilities in real-world scenarios.', date: '2026-05-15', time: '14:00 UTC', type: 'workshop', attendees: 234, host: 'CyberSentinel' },
  { id: 2, title: 'CTF: Cyber Fortress 2026', description: 'Compete in our monthly Capture The Flag challenge focused on web exploitation and cryptography.', date: '2026-05-20', time: '09:00 UTC', type: 'ctf', attendees: 567, host: 'CTF Team' },
  { id: 3, title: 'Webinar: AI in Cybersecurity', description: 'Explore how artificial intelligence is reshaping threat detection and incident response.', date: '2026-05-25', time: '16:00 UTC', type: 'webinar', attendees: 892, host: 'Dr. Sarah Chen' },
  { id: 4, title: 'Community Meetup: Securing IoT', description: 'Monthly virtual meetup discussing IoT security challenges and solutions.', date: '2026-06-01', time: '18:00 UTC', type: 'meetup', attendees: 156, host: 'NetGuardian' },
];

export const resources: ResourceItem[] = [
  { id: 1, title: 'Pentesting Methodology Guide v3', description: 'Comprehensive guide covering all phases of penetration testing from reconnaissance to reporting.', type: 'guide', downloads: 12450, rating: 4.8, author: 'CyberSentinel', difficulty: 'intermediate' },
  { id: 2, title: 'Network Scanner Pro', description: 'Advanced network discovery and vulnerability scanning tool with real-time analysis.', type: 'tool', downloads: 8930, rating: 4.6, author: 'NetGuardian', difficulty: 'beginner' },
  { id: 3, title: 'Quantum Crypto Analysis Paper', description: 'Research paper on post-quantum cryptography algorithms and their implementation.', type: 'paper', downloads: 5670, rating: 4.9, author: 'CrypticMind', difficulty: 'advanced' },
  { id: 4, title: 'Malware Detection ML Pipeline', description: 'Python code for building machine learning pipeline for malware classification.', type: 'code', downloads: 7230, rating: 4.7, author: 'HexHunter', difficulty: 'intermediate' },
];

export const achievements: Achievement[] = [
  { id: 1, title: 'First Post', description: 'Made your first post in the community', icon: '📝', earned: true, date: 'Jan 15, 2026' },
  { id: 2, title: 'Forum Regular', description: 'Posted 50 times in discussions', icon: '💬', earned: true, date: 'Feb 20, 2026' },
  { id: 3, title: 'Threat Hunter', description: 'Reported a valid vulnerability', icon: '🎯', earned: true, date: 'Mar 10, 2026' },
  { id: 4, title: 'Helping Hand', description: 'Answered 25 questions in Help & Support', icon: '🤝', earned: false, progress: 76 },
  { id: 5, title: 'CTF Champion', description: 'Win a Capture The Flag event', icon: '🏆', earned: false, progress: 45 },
  { id: 6, title: 'Knowledge Base', description: 'Published 10 guides or resources', icon: '📚', earned: false, progress: 30 },
];

export const stats = {
  totalMembers: 28472,
  activeNow: 1456,
  totalPosts: 89234,
  totalTopics: 12789,
  totalEvents: 48,
  resourcesShared: 3256,
};
