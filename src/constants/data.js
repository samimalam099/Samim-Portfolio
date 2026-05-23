export const NAVIGATION = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  {
    category: 'Frontend',
    skills: ['React', 'Vue', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'Firebase', 'REST APIs'],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with React, Node.js, and MongoDB. Features include product filtering, user authentication, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using WebSockets. Built with React and Firebase for seamless teamwork.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
    link: '#',
    github: '#',
  },
]

export const EXPERIENCE = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    position: 'Senior Frontend Developer',
    duration: '2022 - Present',
    description: 'Led the development of React applications, mentored junior developers, and improved application performance by 40%.',
    achievements: [
      'Built scalable React components used across 5+ projects',
      'Reduced bundle size by 45% through code optimization',
      'Mentored 3 junior developers on best practices',
    ],
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    description: 'Developed and maintained full-stack web applications using React and Node.js. Collaborated with UX/UI team for seamless integration.',
    achievements: [
      'Implemented 15+ new features for main product',
      'Reduced API response time by 50% with optimization',
      'Set up CI/CD pipeline using GitHub Actions',
    ],
  },
  {
    id: 3,
    company: 'Startup Hub',
    position: 'Junior Web Developer',
    duration: '2019 - 2020',
    description: 'Developed web applications using Vue.js and React. Worked with REST APIs and built responsive UIs.',
    achievements: [
      'Developed 8 responsive web applications',
      'Implemented real-time features using WebSockets',
      'Improved code quality and test coverage to 85%',
    ],
  },
]

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'SiGithub', url: 'https://github.com/samimalam099' },
  { name: 'LinkedIn', icon: 'SiLinkedin', url: 'https://www.linkedin.com/in/samimalam099' },
  { name: 'Twitter', icon: 'SiTwitter', url: 'https://x.com/SamimAk93555172' },
  { name: 'Instagram', icon: 'SiInstagram', url: 'https://www.instagram.com/samim.akhtar099' },
  { name: 'Email', icon: 'SiGmail', url: 'mailto:samimbth000@gmail.com' },
]

export const TYPING_TEXTS = [
  'Full Stack Developer',
  'React Specialist',
  'UI/UX Enthusiast',
  'Problem Solver',
]
