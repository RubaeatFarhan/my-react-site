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
  title: "The Complete Full-Stack Web Development Bootcamp 2025",
  subtitle:
    "Master React, Node.js, TypeScript, PostgreSQL & More — Build Production-Ready Apps from Scratch",
  rating: 4.8,
  totalRatings: 12847,
  students: 58432,
  lastUpdated: "January 2025",
  language: "English",
  subtitles: ["English", "Spanish", "French", "German", "Japanese"],
  price: 199.99,
  discountPrice: 49.99,
  discountPercent: 75,
  instructor: {
    name: "Alex Thompson",
    title: "Senior Software Engineer & Educator",
    avatar: "/images/instructor.jpg",
    rating: 4.9,
    students: 185000,
    courses: 12,
    bio: "Alex is a senior software engineer with over 12 years of industry experience at companies like Google, Meta, and several successful startups. He's passionate about making complex topics accessible and has helped over 185,000 students launch their tech careers.",
  },
  heroImage: "/images/course-hero.jpg",
  highlights: [
    "63.5 hours of on-demand video content",
    "45 coding exercises & 12 real-world projects",
    "Certificate of completion",
    "Lifetime access with free updates",
    "30-day money-back guarantee",
    "Access on mobile, tablet & TV",
  ],
  whatYouWillLearn: [
    "Build 12+ professional projects including a full e-commerce platform",
    "Master React 19 with hooks, context, and advanced patterns",
    "Build RESTful APIs and GraphQL servers with Node.js & Express",
    "TypeScript from fundamentals to advanced type patterns",
    "Database design with PostgreSQL and MongoDB",
    "Authentication, authorization & security best practices",
    "Deploy apps to AWS, Vercel, and Docker containers",
    "Write clean, maintainable code with testing (Jest & Cypress)",
    "State management with Redux Toolkit and Zustand",
    "Real-time features with WebSockets and Server-Sent Events",
    "CI/CD pipelines, Git workflows & team collaboration",
    "Performance optimization and web accessibility (a11y)",
  ],
  requirements: [
    "Basic understanding of HTML & CSS (beginner-friendly refresher included)",
    "A computer with internet access (Windows, Mac, or Linux)",
    "No prior programming experience required — we start from zero!",
    "Curiosity and willingness to learn",
  ],
  description: `This is the most comprehensive full-stack web development course on the internet. Whether you're a complete beginner or an experienced developer looking to level up, this course has everything you need.

We don't just teach you syntax — we teach you how to think like a software engineer. Every concept is reinforced with hands-on projects that mirror real-world applications you'll build in your career.

By the end of this course, you'll have a professional portfolio with 12+ projects, the skills to land a full-stack developer role, and the confidence to build any web application from scratch.`,
};

export const modules: Module[] = [
  {
    id: 1,
    title: "Getting Started & Environment Setup",
    lessons: [
      { title: "Welcome & Course Overview", duration: "5:30", isPreview: true },
      { title: "Setting Up Your Development Environment", duration: "12:45", isPreview: true },
      { title: "How the Internet Works", duration: "8:20" },
      { title: "Your First Web Page", duration: "15:10" },
    ],
  },
  {
    id: 2,
    title: "HTML & CSS Mastery",
    lessons: [
      { title: "HTML5 Semantic Elements Deep Dive", duration: "18:30" },
      { title: "CSS Flexbox — Complete Guide", duration: "22:15" },
      { title: "CSS Grid — Layouts Made Easy", duration: "25:40" },
      { title: "Responsive Design & Media Queries", duration: "19:55" },
      { title: "Project: Portfolio Website", duration: "45:00" },
    ],
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    lessons: [
      { title: "Variables, Data Types & Operators", duration: "16:20" },
      { title: "Functions & Scope", duration: "20:10" },
      { title: "Arrays & Objects In-Depth", duration: "24:30" },
      { title: "DOM Manipulation", duration: "28:15" },
      { title: "Async JavaScript: Promises & Async/Await", duration: "32:45" },
      { title: "Project: Interactive Quiz App", duration: "55:00" },
    ],
  },
  {
    id: 4,
    title: "TypeScript Essentials",
    lessons: [
      { title: "Why TypeScript? Setup & Configuration", duration: "14:20" },
      { title: "Types, Interfaces & Generics", duration: "26:30" },
      { title: "Advanced Type Patterns", duration: "22:15" },
      { title: "TypeScript with React", duration: "18:40" },
    ],
  },
  {
    id: 5,
    title: "React — Building Modern UIs",
    lessons: [
      { title: "React Fundamentals & JSX", duration: "20:30", isPreview: true },
      { title: "Components, Props & State", duration: "28:15" },
      { title: "Hooks Deep Dive (useState, useEffect, useRef)", duration: "35:20" },
      { title: "Context API & Custom Hooks", duration: "24:45" },
      { title: "React Router v6", duration: "22:10" },
      { title: "Performance Optimization", duration: "18:30" },
      { title: "Project: Task Management Dashboard", duration: "1:15:00" },
    ],
  },
  {
    id: 6,
    title: "Node.js & Backend Development",
    lessons: [
      { title: "Node.js Fundamentals", duration: "18:20" },
      { title: "Express.js & Middleware", duration: "24:30" },
      { title: "RESTful API Design", duration: "28:15" },
      { title: "Authentication with JWT", duration: "32:40" },
      { title: "File Uploads & Cloud Storage", duration: "20:15" },
      { title: "Project: Blog API", duration: "1:05:00" },
    ],
  },
  {
    id: 7,
    title: "Databases & Data Modeling",
    lessons: [
      { title: "SQL Fundamentals with PostgreSQL", duration: "30:20" },
      { title: "Database Design & Normalization", duration: "22:45" },
      { title: "MongoDB & Mongoose", duration: "26:30" },
      { title: "ORM with Prisma", duration: "24:15" },
    ],
  },
  {
    id: 8,
    title: "Full-Stack Capstone Projects",
    lessons: [
      { title: "E-Commerce Platform — Part 1: Setup & Auth", duration: "1:20:00" },
      { title: "E-Commerce Platform — Part 2: Products & Cart", duration: "1:35:00" },
      { title: "E-Commerce Platform — Part 3: Checkout & Payments", duration: "1:15:00" },
      { title: "E-Commerce Platform — Part 4: Admin Dashboard", duration: "1:10:00" },
      { title: "Deployment & CI/CD Pipeline", duration: "45:00" },
    ],
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "SC",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "This course completely changed my career trajectory. I went from knowing nothing about coding to landing a $95K full-stack developer role in just 6 months. Alex explains everything so clearly!",
    role: "Full-Stack Developer at Shopify",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    avatar: "MJ",
    rating: 5,
    date: "1 month ago",
    comment:
      "Best investment I've ever made. The projects are incredibly practical and I use concepts from this course every single day at work. The TypeScript section alone is worth the price.",
    role: "Frontend Engineer at Stripe",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "ER",
    rating: 4,
    date: "3 weeks ago",
    comment:
      "Extremely thorough and well-structured. I appreciated how each module builds on the previous one. The capstone project gave me a portfolio piece that impressed interviewers.",
    role: "Junior Developer at Netflix",
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "DK",
    rating: 5,
    date: "1 week ago",
    comment:
      "I've tried many online courses but this one stands out. The instructor's real-world experience shows in every lesson. The community Discord is also incredibly helpful!",
    role: "Software Engineer at Microsoft",
  },
  {
    id: 5,
    name: "Priya Patel",
    avatar: "PP",
    rating: 5,
    date: "2 months ago",
    comment:
      "As someone switching careers from finance, this course was perfect. It's beginner-friendly but doesn't shy away from advanced topics. I now work as a full-stack dev and love it!",
    role: "Full-Stack Developer at Coinbase",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Is this course suitable for complete beginners?",
    answer:
      "Absolutely! We start from the very basics and gradually build up to advanced concepts. No prior programming experience is needed. We even include a refresher on HTML & CSS basics.",
  },
  {
    question: "How long will it take to complete the course?",
    answer:
      "The course contains 63.5 hours of video content. Most students complete it in 3-5 months studying 1-2 hours per day. However, you have lifetime access, so you can go at your own pace.",
  },
  {
    question: "Will I get a certificate upon completion?",
    answer:
      "Yes! You'll receive a verified certificate of completion that you can share on LinkedIn and include in your resume. Many of our students have used it to land their first developer roles.",
  },
  {
    question: "What if I'm not satisfied with the course?",
    answer:
      "We offer a 30-day no-questions-asked money-back guarantee. If you're not completely satisfied, simply request a refund within 30 days of purchase.",
  },
  {
    question: "Do I need an expensive computer?",
    answer:
      "No! Any modern computer (Windows, Mac, or Linux) with at least 4GB of RAM will work perfectly. All the tools we use are free and open-source.",
  },
  {
    question: "Is the content kept up to date?",
    answer:
      "Yes! We regularly update the course to reflect the latest industry standards, framework updates, and best practices. All updates are free for enrolled students.",
  },
];
