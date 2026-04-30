export interface ForumTopic {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
  isSticky: boolean;
  isHot: boolean;
}

export interface CommunityMember {
  id: number;
  name: string;
  avatar: string;
  role: string;
  roleBadge: 'admin' | 'mod' | 'vip' | 'member';
  posts: number;
  reputation: number;
  joinedDate: string;
  status: 'online' | 'away' | 'offline';
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'webinar' | 'workshop' | 'ctf' | 'meetup';
  attendees: number;
  host: string;
}

export interface ResourceItem {
  id: number;
  title: string;
  description: string;
  type: 'guide' | 'tool' | 'paper' | 'code';
  downloads: number;
  rating: number;
  author: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  date?: string;
  progress?: number;
}
