export const personalInfo = {
  name: "M Danial Arshad",
  title: "Full Stack Developer",
  tagline: "An enthusiastic programmer loving web development and many other technologies.",
  bio: `I'm a passionate full-stack developer with 5 years of experience building web applications. 
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
  { name: "Vanilla javascript", icon: "Code2", category: "frontend" },
  { name: "Jquery", icon: "Code2", category: "frontend" },
  { name: "React", icon: "Code2", category: "frontend" },
  { name: "TypeScript", icon: "FileCode", category: "frontend" },
  { name: "Next.js", icon: "Globe", category: "frontend" },
  { name: "Tailwind CSS", icon: "Palette", category: "frontend" },
  { name: "Vue.js", icon: "Code2", category: "frontend" },
  { name: "HTML/CSS", icon: "Code2", category: "frontend" },
  // Backend
  { name: "PHP", icon: "Server", category: "backend" },
  { name: "Laravel", icon: "Server", category: "backend" },
  // { name: "Python", icon: "Server", category: "backend" },
  
  { name: "Node.js", icon: "Server", category: "backend" },
  // { name: "Python", icon: "FileCode", category: "backend" },
  { name: "MySql", icon: "Server", category: "backend" },
  { name: "PostgreSQL", icon: "Database", category: "backend" },
  // { name: "MongoDB", icon: "Database", category: "backend" },
  // { name: "GraphQL", icon: "Share2", category: "backend" },
  // Tools
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "Bitbucket", icon: "GitBranch", category: "tools" },
  // { name: "Docker", icon: "Container", category: "tools" },
  // { name: "AWS", icon: "Cloud", category: "tools" },
  { name: "Figma", icon: "Figma", category: "tools" },
  { name: "VS Code", icon: "Code", category: "tools" },
];

export const projects = [
  {
    id: "1",
    title: "Home Cleaner Finder (BUILT WITH REPLIT AI)",
    description: "Find a cleaner to clean your space",
    longDescription: "Find a cleaner to clean your space",
    image: "https://images.unsplash.com/photo-1721620780493-e905708eba0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Replit AI", "Next.js", "React", "TailwindCSS", "shadcn/ui + Radix UI", "TanStack React Query", "React Hook Form + Zod",
      "Lucide React", "Framer Motion", "Drizzle ORM", "drizzle-zod"
    ],
    githubUrl: "https://github.com/daniaaalarshad/Home-Cleaner-Finder",
    // liveUrl: "https://example-store.com",
    featured: true,
  },
  {
    id: "2",
    title: "Xplore Food (BUILT WITH REPLIT AI)",
    description: "Explore the food places in your city",
    longDescription: "Explore the food places in your city",
    image: "../public/hero-food-bg.png",
    techStack: ["Next.js", "Express.js", "Tailwind CSS", "PostgreSQL with Drizzle ORM", "Node.js"],
    githubUrl: "https://github.com/daniaaalarshad/Xplore-Food",
    // liveUrl: "https://example-store.com",
    featured: true,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
