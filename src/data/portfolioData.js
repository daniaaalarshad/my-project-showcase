export const personalInfo = {
  name: "M Danial Arshad",
  title: "Full Stack Developer",
  tagline: "An enthusiastic programmer loving web development and many other technologies.",
  bio: `I'm a passionate full-stack developer with 5+ years of experience building web applications. 
I love turning complex problems into simple, beautiful, and intuitive solutions. 
When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.`,
  email: "danialarshad231@gmail.com",
  location: "Oslo, Norway",
  avatarUrl: "danial.jpg",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "Github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
];

export const skills = [
  // Frontend
  { name: "React", icon: "Code2", category: "frontend" },
  { name: "TypeScript", icon: "FileCode", category: "frontend" },
  { name: "Next.js", icon: "Globe", category: "frontend" },
  { name: "Tailwind CSS", icon: "Palette", category: "frontend" },
  { name: "Vue.js", icon: "Code2", category: "frontend" },
  // Backend
  { name: "Node.js", icon: "Server", category: "backend" },
  { name: "Python", icon: "FileCode", category: "backend" },
  { name: "PostgreSQL", icon: "Database", category: "backend" },
  { name: "MongoDB", icon: "Database", category: "backend" },
  { name: "GraphQL", icon: "Share2", category: "backend" },
  // Tools
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "Docker", icon: "Container", category: "tools" },
  { name: "AWS", icon: "Cloud", category: "tools" },
  { name: "Figma", icon: "Figma", category: "tools" },
  { name: "VS Code", icon: "Code", category: "tools" },
];

export const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration",
    longDescription: "Built a scalable e-commerce platform featuring product management, shopping cart, secure checkout with Stripe, user authentication, and an admin dashboard for inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://example-store.com",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Real-time collaborative task management tool",
    longDescription: "A Trello-like application with real-time updates using WebSockets, drag-and-drop functionality, team collaboration features, and progress tracking dashboards.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS", "WebSocket"],
    githubUrl: "https://github.com/username/task-app",
    liveUrl: "https://taskapp-demo.com",
    featured: true,
  },
  {
    id: "3",
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by GPT-4",
    longDescription: "An AI-powered chat assistant that helps users with various tasks, featuring context-aware conversations, document analysis, and integration with external APIs.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    techStack: ["Python", "FastAPI", "OpenAI", "React", "MongoDB"],
    githubUrl: "https://github.com/username/ai-chat",
    featured: true,
  },
  {
    id: "4",
    title: "Fitness Tracker",
    description: "Track workouts and monitor health metrics",
    longDescription: "A comprehensive fitness application with workout logging, progress charts, calorie tracking, and integration with wearable devices for real-time health monitoring.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    techStack: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitness-demo.com",
    featured: false,
  },
  {
    id: "5",
    title: "Developer Portfolio",
    description: "This very portfolio website you're viewing",
    longDescription: "A modern, responsive portfolio website built with React and JavaScript, featuring smooth animations, dark theme, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
  },
  {
    id: "6",
    title: "Weather Dashboard",
    description: "Real-time weather data visualization",
    longDescription: "A beautiful weather application showing current conditions, forecasts, and historical data with interactive maps and customizable widgets.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    techStack: ["React", "D3.js", "OpenWeather API", "Mapbox"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-demo.com",
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
