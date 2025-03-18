// This file simulates data fetching from a database
// In a real application, this would be replaced with actual API calls or database queries

// Types
export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: "Developer" | "Designer" | "Project Manager" | "Student"
  bio: string
  location: string
  joinDate: string
  github?: string
  linkedin?: string
  website?: string
  skills: {
    name: string
    level: number // 0-100
    category: "Frontend" | "Backend" | "Design" | "DevOps" | "Mobile" | "Other"
  }[]
  achievements: {
    id: string
    title: string
    date: string
    description: string
    icon: string
  }[]
  stats: {
    projectsCompleted: number
    competitionsWon: number
    articlesPublished: number
    contributions: number
  }
  activity: {
    date: string
    type: "project" | "comment" | "achievement" | "competition"
    description: string
  }[]
}

export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  coverImage: string
  demoUrl?: string
  repoUrl?: string
  technologies: string[]
  category: string
  author: {
    id: string
    name: string
    avatar: string
  }
  collaborators?: {
    id: string
    name: string
    avatar: string
  }[]
  createdAt: string
  updatedAt: string
  status: "draft" | "published" | "featured"
  likes: number
  views: number
  comments: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: {
    id: string
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  likes: number
  views: number
  comments: number
  featured: boolean
}

export interface Competition {
  id: string
  name: string
  theme: string
  description: string
  status: "Active" | "Upcoming" | "Completed"
  startDate: string
  endDate: string
  teamSize: string
  prizes: string
  rules: string[]
  judgingCriteria: {
    name: string
    weight: number
    description: string
  }[]
  timeline: {
    date: string
    title: string
    description: string
  }[]
  deadlines?: {
    teamFormation: string
    ideaSubmission: string
    finalSubmission: string
  }
  prizeDetails?: {
    firstPlace: string
    secondPlace: string
    thirdPlace: string
  }
  stats?: {
    teams: number
    participants: number
    submissions: number
  }
}

export interface Team {
  id: string
  name: string
  leader: string
  members: {
    name: string
    role: string
    avatar?: string
  }[]
  skills: string[]
  competitionId: string
}

export interface UserTeam {
  id: string
  name: string
  competition: string
  role: "Leader" | "Member"
  members: {
    name: string
    role: string
  }[]
  progress: number
  nextDeadline: {
    name: string
    date: string
  }
}

export interface Submission {
  id: string
  title: string
  team: string
  competition: string
  type: "Idea" | "Project"
  status: "Pending" | "Approved" | "Rejected"
  submittedDate: string
  feedback?: string
}

export interface LeaderboardEntry {
  id: string
  team: string
  scores: {
    innovation: number
    functionality: number
    uiUx: number
    codeQuality: number
    presentation: number
  }
  totalScore: number
}

// Mock data
// const users: User[] = [
//   {
//     id: "user-1",
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     avatar: "/placeholder.svg",
//     role: "Developer",
//     bio: "Full-stack developer with a passion for creating innovative solutions. 5+ years of experience in web and mobile development.",
//     location: "San Francisco, CA",
//     joinDate: "January 2021",
//     github: "github.com/janesmith",
//     linkedin: "linkedin.com/in/janesmith",
//     website: "janesmith.dev",
//     skills: [
//       { name: "React", level: 90, category: "Frontend" },
//       { name: "TypeScript", level: 85, category: "Frontend" },
//       { name: "Node.js", level: 80, category: "Backend" },
//       { name: "Python", level: 75, category: "Backend" },
//       { name: "UI/UX Design", level: 70, category: "Design" },
//       { name: "Docker", level: 65, category: "DevOps" },
//       { name: "AWS", level: 60, category: "DevOps" },
//       { name: "React Native", level: 80, category: "Mobile" },
//     ],
//     achievements: [
//       {
//         id: "ach-1",
//         title: "Competition Winner",
//         date: "June 2022",
//         description: "First place in the AI Innovation Challenge",
//         icon: "trophy",
//       },
//       {
//         id: "ach-2",
//         title: "Top Contributor",
//         date: "March 2022",
//         description: "Recognized as a top contributor to open source projects",
//         icon: "star",
//       },
//       {
//         id: "ach-3",
//         title: "Speaker",
//         date: "November 2021",
//         description: "Speaker at ReactConf 2021",
//         icon: "mic",
//       },
//     ],
//     stats: {
//       projectsCompleted: 12,
//       competitionsWon: 2,
//       articlesPublished: 5,
//       contributions: 157,
//     },
//     activity: [
//       {
//         date: "2023-05-15",
//         type: "project",
//         description: "Submitted AI-Powered Healthcare Assistant",
//       },
//       {
//         date: "2023-04-22",
//         type: "competition",
//         description: "Joined the AI Innovation Challenge",
//       },
//       {
//         date: "2023-03-10",
//         type: "achievement",
//         description: "Earned the 'Code Wizard' badge",
//       },
//       {
//         date: "2023-02-05",
//         type: "comment",
//         description: "Commented on 'Web3 Development Best Practices'",
//       },
//     ],
//   },
//   {
//     id: "user-2",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     avatar: "/placeholder.svg",
//     role: "Designer",
//     bio: "UI/UX designer focused on creating beautiful and functional user experiences. Passionate about accessibility and inclusive design.",
//     location: "New York, NY",
//     joinDate: "March 2021",
//     github: "github.com/johndoe",
//     linkedin: "linkedin.com/in/johndoe",
//     website: "johndoedesign.com",
//     skills: [
//       { name: "UI Design", level: 95, category: "Design" },
//       { name: "UX Research", level: 90, category: "Design" },
//       { name: "Figma", level: 95, category: "Design" },
//       { name: "Adobe XD", level: 85, category: "Design" },
//       { name: "HTML/CSS", level: 80, category: "Frontend" },
//       { name: "JavaScript", level: 65, category: "Frontend" },
//       { name: "Prototyping", level: 90, category: "Design" },
//       { name: "3D Modeling", level: 70, category: "Design" },
//     ],
//     achievements: [
//       {
//         id: "ach-1",
//         title: "Design Award",
//         date: "July 2022",
//         description: "Winner of the Annual Design Excellence Award",
//         icon: "award",
//       },
//       {
//         id: "ach-2",
//         title: "Featured Designer",
//         date: "April 2022",
//         description: "Featured on Dribbble's Hot Shots",
//         icon: "eye",
//       },
//     ],
//     stats: {
//       projectsCompleted: 18,
//       competitionsWon: 1,
//       articlesPublished: 3,
//       contributions: 42,
//     },
//     activity: [
//       {
//         date: "2023-05-20",
//         type: "project",
//         description: "Completed UI design for FitTrack Mobile App",
//       },
//       {
//         date: "2023-04-15",
//         type: "comment",
//         description: "Commented on 'The Future of UI Design'",
//       },
//       {
//         date: "2023-03-22",
//         type: "achievement",
//         description: "Earned the 'Design Guru' badge",
//       },
//     ],
//   },
//   {
//     id: "user-3",
//     name: "Alex Johnson",
//     email: "alex.johnson@example.com",
//     avatar: "/placeholder.svg",
//     role: "Project Manager",
//     bio: "Experienced project manager with a background in software development. Skilled in agile methodologies and team leadership.",
//     location: "Chicago, IL",
//     joinDate: "October 2021",
//     github: "github.com/alexj",
//     linkedin: "linkedin.com/in/alexjohnson",
//     skills: [
//       { name: "Agile", level: 95, category: "Other" },
//       { name: "Scrum", level: 90, category: "Other" },
//       { name: "JIRA", level: 85, category: "Other" },
//       { name: "Product Management", level: 85, category: "Other" },
//       { name: "JavaScript", level: 70, category: "Frontend" },
//       { name: "React", level: 60, category: "Frontend" },
//       { name: "Team Leadership", level: 90, category: "Other" },
//       { name: "Client Communication", level: 95, category: "Other" },
//     ],
//     achievements: [
//       {
//         id: "ach-1",
//         title: "Team Lead",
//         date: "September 2022",
//         description: "Led a team to successful completion of enterprise project",
//         icon: "users",
//       },
//       {
//         id: "ach-2",
//         title: "Certified Scrum Master",
//         date: "May 2022",
//         description: "Achieved Scrum Master certification",
//         icon: "certificate",
//       },
//     ],
//     stats: {
//       projectsCompleted: 24,
//       competitionsWon: 0,
//       articlesPublished: 7,
//       contributions: 112,
//     },
//     activity: [
//       {
//         date: "2023-05-18",
//         type: "project",
//         description: "Started managing the Web3 Hackathon project",
//       },
//       {
//         date: "2023-04-10",
//         type: "comment",
//         description: "Commented on 'Effective Team Management in Remote Settings'",
//       },
//       {
//         date: "2023-03-15",
//         type: "achievement",
//         description: "Earned the 'Project Maestro' badge",
//       },
//     ],
//   },
// ]

const users: User[] = [
  {
    id: "user-1",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
    role: "Developer",
    bio: "Full-stack developer with a passion for creating innovative solutions. 5+ years of experience in web and mobile development.",
    location: "San Francisco, CA",
    joinDate: "January 2021",
    github: "github.com/janesmith",
    linkedin: "linkedin.com/in/janesmith",
    website: "janesmith.dev",
    skills: [
      { name: "React", level: 90, category: "Frontend" },
      { name: "TypeScript", level: 85, category: "Frontend" },
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "Python", level: 75, category: "Backend" },
      { name: "UI/UX Design", level: 70, category: "Design" },
      { name: "Docker", level: 65, category: "DevOps" },
      { name: "AWS", level: 60, category: "DevOps" },
      { name: "React Native", level: 80, category: "Mobile" },
    ],
    achievements: [
      {
        id: "ach-1",
        title: "Competition Winner",
        date: "June 2022",
        description: "First place in the AI Innovation Challenge",
        icon: "trophy",
      },
      {
        id: "ach-2",
        title: "Top Contributor",
        date: "March 2022",
        description: "Recognized as a top contributor to open source projects",
        icon: "star",
      },
      {
        id: "ach-3",
        title: "Speaker",
        date: "November 2021",
        description: "Speaker at ReactConf 2021",
        icon: "mic",
      },
    ],
    stats: {
      projectsCompleted: 12,
      competitionsWon: 2,
      articlesPublished: 5,
      contributions: 157,
    },
    activity: [
      {
        date: "2023-05-15",
        type: "project",
        description: "Submitted AI-Powered Healthcare Assistant",
      },
      {
        date: "2023-04-22",
        type: "competition",
        description: "Joined the AI Innovation Challenge",
      },
      {
        date: "2023-03-10",
        type: "achievement",
        description: "Earned the 'Code Wizard' badge",
      },
      {
        date: "2023-02-05",
        type: "comment",
        description: "Commented on 'Web3 Development Best Practices'",
      },
    ],
  },
  {
    id: "user-2",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
    role: "Designer",
    bio: "UI/UX designer focused on creating beautiful and functional user experiences. Passionate about accessibility and inclusive design.",
    location: "New York, NY",
    joinDate: "March 2021",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    website: "johndoedesign.com",
    skills: [
      { name: "UI Design", level: 95, category: "Design" },
      { name: "UX Research", level: 90, category: "Design" },
      { name: "Figma", level: 95, category: "Design" },
      { name: "Adobe XD", level: 85, category: "Design" },
      { name: "HTML/CSS", level: 80, category: "Frontend" },
      { name: "JavaScript", level: 65, category: "Frontend" },
      { name: "Prototyping", level: 90, category: "Design" },
      { name: "3D Modeling", level: 70, category: "Design" },
    ],
    achievements: [
      {
        id: "ach-1",
        title: "Design Award",
        date: "July 2022",
        description: "Winner of the Annual Design Excellence Award",
        icon: "award",
      },
      {
        id: "ach-2",
        title: "Featured Designer",
        date: "April 2022",
        description: "Featured on Dribbble's Hot Shots",
        icon: "eye",
      },
    ],
    stats: {
      projectsCompleted: 18,
      competitionsWon: 1,
      articlesPublished: 3,
      contributions: 42,
    },
    activity: [
      {
        date: "2023-05-20",
        type: "project",
        description: "Completed UI design for FitTrack Mobile App",
      },
      {
        date: "2023-04-15",
        type: "comment",
        description: "Commented on 'The Future of UI Design'",
      },
      {
        date: "2023-03-22",
        type: "achievement",
        description: "Earned the 'Design Guru' badge",
      },
    ],
  },
  {
    id: "user-3",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=80",
    role: "Project Manager",
    bio: "Experienced project manager with a background in software development. Skilled in agile methodologies and team leadership.",
    location: "Chicago, IL",
    joinDate: "October 2021",
    github: "github.com/alexj",
    linkedin: "linkedin.com/in/alexjohnson",
    skills: [
      { name: "Agile", level: 95, category: "Other" },
      { name: "Scrum", level: 90, category: "Other" },
      { name: "JIRA", level: 85, category: "Other" },
      { name: "Product Management", level: 85, category: "Other" },
      { name: "JavaScript", level: 70, category: "Frontend" },
      { name: "React", level: 60, category: "Frontend" },
      { name: "Team Leadership", level: 90, category: "Other" },
      { name: "Client Communication", level: 95, category: "Other" },
    ],
    achievements: [
      {
        id: "ach-1",
        title: "Team Lead",
        date: "September 2022",
        description: "Led a team to successful completion of enterprise project",
        icon: "users",
      },
      {
        id: "ach-2",
        title: "Certified Scrum Master",
        date: "May 2022",
        description: "Achieved Scrum Master certification",
        icon: "certificate",
      },
    ],
    stats: {
      projectsCompleted: 24,
      competitionsWon: 0,
      articlesPublished: 7,
      contributions: 112,
    },
    activity: [
      {
        date: "2023-05-18",
        type: "project",
        description: "Started managing the Web3 Hackathon project",
      },
      {
        date: "2023-04-10",
        type: "comment",
        description: "Commented on 'Effective Team Management in Remote Settings'",
      },
      {
        date: "2023-03-15",
        type: "achievement",
        description: "Earned the 'Project Maestro' badge",
      },
    ],
  },
]

const projects: Project[] = [
  {
    id: "project-1",
    title: "AI-Powered Healthcare Assistant",
    description:
      "An AI-powered healthcare assistant that helps users manage their health and wellness. Features include symptom tracking, medication reminders, and virtual consultations with healthcare professionals. Built with React, Node.js, and TensorFlow.js.",
    shortDescription: "AI assistant for health management and virtual consultations",
    coverImage: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://healthcare-assistant.example.com",
    repoUrl: "https://github.com/janesmith/healthcare-assistant",
    technologies: ["React", "Node.js", "TensorFlow.js", "MongoDB", "WebRTC"],
    category: "Healthcare",
    author: {
      id: "user-1",
      name: "Jane Smith",
      avatar: "/placeholder.svg",
    },
    collaborators: [
      {
        id: "user-2",
        name: "John Doe",
        avatar: "/placeholder.svg",
      },
      {
        id: "user-3",
        name: "Alex Johnson",
        avatar: "/placeholder.svg",
      },
    ],
    createdAt: "2023-01-15",
    updatedAt: "2023-05-10",
    status: "featured",
    likes: 125,
    views: 1840,
    comments: 32,
  },
  {
    id: "project-2",
    title: "Crypto Portfolio Tracker",
    description:
      "A comprehensive cryptocurrency portfolio tracker that allows users to monitor their crypto investments in real-time. The application integrates with multiple exchanges and provides advanced analytics and visualization tools to help users make informed investment decisions.",
    shortDescription: "Real-time cryptocurrency portfolio tracking and analytics",
    coverImage: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://crypto-tracker.example.com",
    repoUrl: "https://github.com/alexj/crypto-tracker",
    technologies: ["React", "Redux", "Express", "CoinGecko API", "D3.js", "Firebase"],
    category: "Finance",
    author: {
      id: "user-3",
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
    },
    createdAt: "2023-02-10",
    updatedAt: "2023-04-25",
    status: "published",
    likes: 98,
    views: 1245,
    comments: 21,
  },
  {
    id: "project-3",
    title: "FitTrack Mobile App",
    description:
      "A fitness tracking mobile application designed to help users monitor their workouts, nutrition, and progress. The app provides personalized workout plans, meal suggestions, and analytics to help users achieve their fitness goals.",
    shortDescription: "Mobile app for fitness tracking and personalized workout plans",
    coverImage: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://fittrack.example.com",
    repoUrl: "https://github.com/johndoe/fittrack",
    technologies: ["React Native", "Redux", "Node.js", "Express", "MongoDB", "TensorFlow Lite"],
    category: "Health & Fitness",
    author: {
      id: "user-2",
      name: "John Doe",
      avatar: "/placeholder.svg",
    },
    collaborators: [
      {
        id: "user-1",
        name: "Jane Smith",
        avatar: "/placeholder.svg",
      },
    ],
    createdAt: "2023-03-01",
    updatedAt: "2023-05-15",
    status: "published",
    likes: 156,
    views: 2150,
    comments: 45,
  },
  {
    id: "project-4",
    title: "Sustainable City Dashboard",
    description:
      "An interactive dashboard that visualizes environmental data for urban areas, helping city planners and residents make sustainable decisions. The dashboard aggregates data from various IoT sensors and public datasets to provide insights on air quality, energy consumption, waste management, and more.",
    shortDescription: "Interactive dashboard for urban environmental monitoring",
    coverImage: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://sustainable-city.example.com",
    repoUrl: "https://github.com/janesmith/sustainable-city",
    technologies: ["React", "D3.js", "Python", "Flask", "PostgreSQL", "IoT", "Machine Learning"],
    category: "Environment",
    author: {
      id: "user-1",
      name: "Jane Smith",
      avatar: "/placeholder.svg",
    },
    createdAt: "2023-04-05",
    updatedAt: "2023-05-20",
    status: "published",
    likes: 87,
    views: 1120,
    comments: 19,
  },
]

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "The Future of AI in Everyday Applications",
    slug: "future-of-ai-everyday-applications",
    excerpt:
      "Exploring how artificial intelligence is becoming an integral part of our daily digital interactions and what this means for developers and users alike.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coverImage: "/placeholder.svg?height=600&width=800",
    author: {
      id: "user-1",
      name: "Jane Smith",
      avatar: "/placeholder.svg",
    },
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Future Tech", "Development"],
    publishedAt: "2023-05-10",
    readTime: 8,
    likes: 153,
    views: 2450,
    comments: 42,
    featured: true,
  },
  {
    id: "post-2",
    title: "Designing for Accessibility: Best Practices",
    slug: "designing-accessibility-best-practices",
    excerpt:
      "A comprehensive guide to designing web and mobile applications with accessibility in mind, ensuring your products are usable by everyone.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coverImage: "/placeholder.svg?height=600&width=800",
    author: {
      id: "user-2",
      name: "John Doe",
      avatar: "/placeholder.svg",
    },
    category: "Design",
    tags: ["Accessibility", "UI/UX", "Design", "Inclusive Design"],
    publishedAt: "2023-05-05",
    readTime: 12,
    likes: 98,
    views: 1760,
    comments: 31,
    featured: true,
  },
  {
    id: "post-3",
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    slug: "blockchain-beyond-cryptocurrency",
    excerpt:
      "Exploring the diverse applications of blockchain technology outside of cryptocurrencies, from supply chain management to voting systems.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coverImage: "/placeholder.svg?height=600&width=800",
    author: {
      id: "user-3",
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
    },
    category: "Blockchain",
    tags: ["Blockchain", "Web3", "DApps", "Technology"],
    publishedAt: "2023-04-28",
    readTime: 10,
    likes: 75,
    views: 1230,
    comments: 19,
    featured: false,
  },
  {
    id: "post-4",
    title: "The Psychology of Effective User Interfaces",
    slug: "psychology-effective-user-interfaces",
    excerpt:
      "Delving into the psychological principles that underpin successful user interface design and how to leverage them in your projects.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coverImage: "/placeholder.svg?height=600&width=800",
    author: {
      id: "user-2",
      name: "John Doe",
      avatar: "/placeholder.svg",
    },
    category: "Design",
    tags: ["UI/UX", "Psychology", "Design", "User Experience"],
    publishedAt: "2023-04-20",
    readTime: 7,
    likes: 112,
    views: 1890,
    comments: 27,
    featured: false,
  },
  {
    id: "post-5",
    title: "Building Scalable Microservices with Node.js",
    slug: "building-scalable-microservices-nodejs",
    excerpt:
      "A practical guide to designing and implementing microservices architecture using Node.js and related technologies.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    coverImage: "/placeholder.svg?height=600&width=800",
    author: {
      id: "user-1",
      name: "Jane Smith",
      avatar: "/placeholder.svg",
    },
    category: "Development",
    tags: ["Microservices", "Node.js", "Architecture", "Backend"],
    publishedAt: "2023-04-15",
    readTime: 15,
    likes: 135,
    views: 2210,
    comments: 38,
    featured: false,
  },
]

const competitions: Competition[] = [
  {
    id: "comp-1",
    name: "AI Innovation Challenge",
    theme: "Artificial Intelligence for Social Good",
    description:
      "Develop AI solutions that address pressing social challenges such as healthcare access, education, climate change, or economic inequality.",
    status: "Active",
    startDate: "May 1, 2023",
    endDate: "June 15, 2023",
    teamSize: "2-5",
    prizes: "$10,000",
    rules: [
      "All code must be original or properly attributed",
      "Teams must consist of 2-5 members",
      "Solutions must address a real-world social problem",
      "Final submissions must include source code and documentation",
    ],
    judgingCriteria: [
      { name: "Innovation", weight: 25, description: "Originality and creativity of the solution" },
      { name: "Functionality", weight: 25, description: "How well the solution works" },
      { name: "UI/UX", weight: 20, description: "User interface and experience design" },
      { name: "Code Quality", weight: 15, description: "Clean, well-documented code" },
      { name: "Presentation", weight: 15, description: "Quality of the final presentation" },
    ],
    timeline: [
      {
        date: "May 1, 2023",
        title: "Competition Start",
        description: "Registration opens and teams can start forming",
      },
      {
        date: "May 15, 2023",
        title: "Idea Submission Deadline",
        description: "Teams must submit their project ideas for approval",
      },
      { date: "June 1, 2023", title: "Progress Check", description: "Teams submit a progress report" },
      {
        date: "June 15, 2023",
        title: "Final Submission",
        description: "Teams submit their final projects and presentations",
      },
      { date: "June 20, 2023", title: "Judging Period", description: "Judges review and score all submissions" },
      { date: "June 30, 2023", title: "Winners Announced", description: "Winners are announced and prizes awarded" },
    ],
    deadlines: {
      teamFormation: "May 10, 2023",
      ideaSubmission: "May 15, 2023",
      finalSubmission: "June 15, 2023",
    },
    prizeDetails: {
      firstPlace: "$5,000 + Mentorship",
      secondPlace: "$3,000 + Cloud Credits",
      thirdPlace: "$2,000",
    },
    stats: {
      teams: 42,
      participants: 186,
      submissions: 38,
    },
  },
  {
    id: "comp-2",
    name: "Web3 Hackathon",
    theme: "Decentralized Applications",
    description: "Build innovative decentralized applications using blockchain technology.",
    status: "Upcoming",
    startDate: "July 1, 2023",
    endDate: "August 15, 2023",
    teamSize: "1-4",
    prizes: "$15,000",
    rules: [
      "Solutions must use blockchain technology",
      "Teams must consist of 1-4 members",
      "All code must be open source",
      "Final submissions must include a working demo",
    ],
    judgingCriteria: [
      { name: "Innovation", weight: 30, description: "Originality and creativity of the solution" },
      { name: "Technical Complexity", weight: 25, description: "Technical difficulty and implementation" },
      { name: "Usability", weight: 20, description: "How user-friendly the solution is" },
      { name: "Impact", weight: 15, description: "Potential impact on the industry" },
      { name: "Presentation", weight: 10, description: "Quality of the final presentation" },
    ],
    timeline: [
      {
        date: "July 1, 2023",
        title: "Competition Start",
        description: "Registration opens and teams can start forming",
      },
      { date: "July 15, 2023", title: "Idea Submission", description: "Teams submit their project ideas" },
      { date: "August 1, 2023", title: "Midpoint Check", description: "Teams submit progress updates" },
      { date: "August 15, 2023", title: "Final Submission", description: "Teams submit their final projects" },
      { date: "August 30, 2023", title: "Winners Announced", description: "Winners are announced and prizes awarded" },
    ],
  },
  {
    id: "comp-3",
    name: "Mobile App Challenge",
    theme: "Health and Wellness",
    description: "Create mobile applications that promote health and wellness.",
    status: "Completed",
    startDate: "January 15, 2023",
    endDate: "March 1, 2023",
    teamSize: "2-3",
    prizes: "$8,000",
    rules: [
      "Apps must be developed for iOS or Android",
      "Teams must consist of 2-3 members",
      "Solutions must address health or wellness",
      "Final submissions must be published to app stores",
    ],
    judgingCriteria: [
      { name: "Innovation", weight: 20, description: "Originality and creativity of the solution" },
      { name: "Functionality", weight: 30, description: "How well the app works" },
      { name: "UI/UX", weight: 25, description: "User interface and experience design" },
      { name: "Impact", weight: 15, description: "Potential impact on health outcomes" },
      { name: "Presentation", weight: 10, description: "Quality of the final presentation" },
    ],
    timeline: [
      {
        date: "January 15, 2023",
        title: "Competition Start",
        description: "Registration opens and teams can start forming",
      },
      { date: "February 1, 2023", title: "Progress Check", description: "Teams submit a progress report" },
      { date: "March 1, 2023", title: "Final Submission", description: "Teams submit their final apps" },
      { date: "March 15, 2023", title: "Winners Announced", description: "Winners are announced and prizes awarded" },
    ],
  },
]

const teams: Team[] = [
  {
    id: "team-1",
    name: "Code Wizards",
    leader: "Jane Smith",
    members: [
      { name: "Jane Smith", role: "Team Leader", avatar: "/placeholder.svg" },
      { name: "John Doe", role: "Frontend Developer", avatar: "/placeholder.svg" },
      { name: "Alice Johnson", role: "Backend Developer", avatar: "/placeholder.svg" },
      { name: "Bob Brown", role: "UI/UX Designer", avatar: "/placeholder.svg" },
    ],
    skills: ["React", "Node.js", "Python", "UI/UX", "Machine Learning"],
    competitionId: "comp-1",
  },
  {
    id: "team-2",
    name: "Blockchain Pioneers",
    leader: "Mike Wilson",
    members: [
      { name: "Mike Wilson", role: "Team Leader", avatar: "/placeholder.svg" },
      { name: "Sarah Lee", role: "Blockchain Developer", avatar: "/placeholder.svg" },
      { name: "David Chen", role: "Full Stack Developer", avatar: "/placeholder.svg" },
    ],
    skills: ["Solidity", "Ethereum", "React", "Node.js", "Web3"],
    competitionId: "comp-1",
  },
  {
    id: "team-3",
    name: "AI Innovators",
    leader: "Emily Davis",
    members: [
      { name: "Emily Davis", role: "Team Leader", avatar: "/placeholder.svg" },
      { name: "Ryan Martinez", role: "Machine Learning Engineer", avatar: "/placeholder.svg" },
      { name: "Jessica Wang", role: "Data Scientist", avatar: "/placeholder.svg" },
      { name: "Tom Jackson", role: "Backend Developer", avatar: "/placeholder.svg" },
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "API Development"],
    competitionId: "comp-1",
  },
]

const userTeams: UserTeam[] = [
  {
    id: "team-1",
    name: "Code Wizards",
    competition: "AI Innovation Challenge",
    role: "Leader",
    members: [
      { name: "Jane Smith (You)", role: "Team Leader" },
      { name: "John Doe", role: "Frontend Developer" },
      { name: "Alice Johnson", role: "Backend Developer" },
      { name: "Bob Brown", role: "UI/UX Designer" },
    ],
    progress: 65,
    nextDeadline: {
      name: "Final Submission",
      date: "June 15, 2023",
    },
  },
  {
    id: "team-4",
    name: "Mobile Mavericks",
    competition: "Mobile App Challenge",
    role: "Member",
    members: [
      { name: "Chris Taylor", role: "Team Leader" },
      { name: "Jane Smith (You)", role: "UI/UX Designer" },
      { name: "Mark Robinson", role: "iOS Developer" },
    ],
    progress: 100,
    nextDeadline: {
      name: "Completed",
      date: "March 1, 2023",
    },
  },
]

const submissions: Submission[] = [
  {
    id: "sub-1",
    title: "AI-Powered Healthcare Assistant",
    team: "Code Wizards",
    competition: "AI Innovation Challenge",
    type: "Idea",
    status: "Approved",
    submittedDate: "May 12, 2023",
  },
  {
    id: "sub-2",
    title: "AI-Powered Healthcare Assistant - Progress Report",
    team: "Code Wizards",
    competition: "AI Innovation Challenge",
    type: "Project",
    status: "Approved",
    submittedDate: "June 1, 2023",
    feedback:
      "Great progress! The AI model shows promising results. Consider adding more user-friendly features to the interface.",
  },
  {
    id: "sub-3",
    title: "FitTrack Mobile App",
    team: "Mobile Mavericks",
    competition: "Mobile App Challenge",
    type: "Project",
    status: "Approved",
    submittedDate: "February 28, 2023",
    feedback:
      "Excellent work! The app is well-designed and functional. The judges were impressed with the innovative features.",
  },
]

const leaderboard: LeaderboardEntry[] = [
  {
    id: "team-5",
    team: "Health Heroes",
    scores: {
      innovation: 23,
      functionality: 28,
      uiUx: 24,
      codeQuality: 14,
      presentation: 9,
    },
    totalScore: 98,
  },
  {
    id: "team-6",
    team: "Wellness Warriors",
    scores: {
      innovation: 22,
      functionality: 27,
      uiUx: 23,
      codeQuality: 13,
      presentation: 9,
    },
    totalScore: 94,
  },
  {
    id: "team-7",
    team: "FitTech",
    scores: {
      innovation: 21,
      functionality: 26,
      uiUx: 22,
      codeQuality: 12,
      presentation: 8,
    },
    totalScore: 89,
  },
  {
    id: "team-4",
    team: "Mobile Mavericks",
    scores: {
      innovation: 20,
      functionality: 25,
      uiUx: 21,
      codeQuality: 12,
      presentation: 8,
    },
    totalScore: 86,
  },
  {
    id: "team-8",
    team: "HealthApp Devs",
    scores: {
      innovation: 19,
      functionality: 24,
      uiUx: 20,
      codeQuality: 11,
      presentation: 7,
    },
    totalScore: 81,
  },
]

// Data access functions
export async function getAllCompetitions(): Promise<Competition[]> {
  return competitions
}

export async function getActiveCompetitions(): Promise<Competition[]> {
  return competitions.filter((comp) => comp.status === "Active")
}

export async function getCompetitionById(id: string): Promise<Competition | undefined> {
  return competitions.find((comp) => comp.id === id)
}

export async function getTeamsByCompetition(competitionId: string): Promise<Team[]> {
  return teams.filter((team) => team.competitionId === competitionId)
}

export async function getUserTeams(): Promise<UserTeam[]> {
  return userTeams
}

export async function getUserSubmissions(): Promise<Submission[]> {
  return submissions
}

export async function getLeaderboardByCompetition(competitionId: string): Promise<LeaderboardEntry[]> {
  // In a real app, we would filter by competition ID
  // For this demo, we'll just return the mock leaderboard
  return leaderboard
}

// New data access functions
export async function getUserById(id: string): Promise<User | undefined> {
  return users.find((user) => user.id === id)
}

export async function getCurrentUser(): Promise<User | undefined> {
  // In a real app, this would get the currently logged-in user
  // For this demo, we'll just return the first user
  return users[0]
}

export async function getAllProjects(): Promise<Project[]> {
  return projects
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  return projects.find((project) => project.id === id)
}

export async function getProjectsByUser(userId: string): Promise<Project[]> {
  return projects.filter(
    (project) => project.author.id === userId || project.collaborators?.some((collab) => collab.id === userId),
  )
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((project) => project.status === "featured")
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((post) => post.slug === slug)
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.featured)
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.category === category)
}

export async function getBlogPostsByAuthor(authorId: string): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.author.id === authorId)
}

// Add this function to ensure we can get competitions by their string ID
export async function getCompetitionByStringId(stringId: string): Promise<Competition | undefined> {
  // Map string IDs to competition IDs
  const idMap: Record<string, string> = {
    "web3-2025": "comp-1",
    "mobile-2025": "comp-2",
    "ai-ml-2025": "comp-3",
    "design-2025": "comp-4",
    "cloud-2025": "comp-5",
    "web-perf-2025": "comp-6",
  }

  // Get the competition ID from the map
  const compId = idMap[stringId]

  // If we have a mapped ID, get the competition
  if (compId) {
    return getCompetitionById(compId)
  }

  // If the string ID is actually a competition ID, try to get it directly
  return getCompetitionById(stringId)
}

