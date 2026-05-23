# Developer Portfolio - Copilot Instructions

## Project Overview
This is a modern, fully responsive developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. The portfolio showcases a developer's skills, projects, experience, and provides contact information.

## Tech Stack
- **Frontend**: React 18 + JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Icons**: React Icons (HiX, HiMenu, etc.) and Lucide React
- **State Management**: React hooks (useState, useEffect)

## Project Structure
```
src/
├── components/        # 8 reusable React components
├── constants/         # Data and configuration
├── utils/            # Animation variants and helpers
├── App.jsx           # Main app component
├── index.css         # Global Tailwind styles
└── main.jsx          # Entry point
```

## Key Features
- Dark modern UI with glassmorphism effects
- Sticky responsive navbar with mobile hamburger menu
- Hero section with typing animation
- About section with profile image and stats
- Skills section with categorized abilities
- Projects showcase with hover animations
- Experience timeline with achievements
- Contact form with validation
- Footer with social links
- Smooth scroll animations throughout
- Fully responsive design

## Customization Guide

### Update Portfolio Content
Edit `src/constants/data.js` to modify:
- `NAVIGATION` - Menu links
- `SKILLS` - Technical skills by category
- `PROJECTS` - Project cards (6 projects included)
- `EXPERIENCE` - Work history with achievements
- `SOCIAL_LINKS` - Social media profiles
- `TYPING_TEXTS` - Hero section text variations

### Modify Colors and Theme
Edit `tailwind.config.js`:
- Dark background: `#0f172a` (dark-bg)
- Card background: `#1e293b` (dark-card)
- Accent color: `#0ea5e9` (cyan blue)
- Adjust shadows, animations, gradients

### Component Customization
- **Navbar.jsx**: Logo, navigation, mobile menu
- **Hero.jsx**: Greeting, heading, CTA buttons
- **About.jsx**: Bio, stats cards, profile image
- **Skills.jsx**: Skill categories, competencies
- **Projects.jsx**: Project cards, filters, links
- **Experience.jsx**: Timeline, achievements
- **Contact.jsx**: Form fields, contact info
- **Footer.jsx**: Links, copyright, social icons

## Animation System
Animations are centralized in `src/utils/animations.js`:
- `containerVariants` - Staggered child animations
- `itemVariants` - Individual element animations
- `slideInFromLeft/Right` - Directional slide effects
- `fadeInUp` - Fade with upward movement
- `scaleIn` - Scale-based animations
- `floatingAnimation` - Continuous floating effect

Animations use Framer Motion's:
- `initial` - Starting state
- `animate` - Target state
- `whileHover` - Hover effects
- `whileInView` - Scroll-triggered animations
- `variants` - Reusable animation definitions

## Styling Approach
- **Utility-First**: Tailwind CSS for rapid development
- **Responsive**: Mobile-first design with breakpoints
- **Dark Theme**: Complete dark color scheme
- **Glassmorphism**: Semi-transparent cards with blur
- **Gradients**: CSS gradient text and backgrounds
- **Custom CSS**: `index.css` for animations and effects

## Common Tasks

### Add a New Project
1. Open `src/constants/data.js`
2. Add to `PROJECTS` array:
```javascript
{
  id: X,
  title: 'Project Name',
  description: 'Description...',
  image: 'image-url',
  technologies: ['Tech1', 'Tech2'],
  link: 'project-url',
  github: 'github-url',
}
```

### Update Social Links
1. Edit `SOCIAL_LINKS` in `src/constants/data.js`
2. Icons use React Icons naming (e.g., `HiGithub`)
3. Update URLs to actual profiles

### Change Color Scheme
1. Modify color variables in `tailwind.config.js`
2. Update `index.css` for custom effects
3. Accent color is primary (default: `#0ea5e9`)

### Add a New Section
1. Create new component in `src/components/`
2. Use animation variants from `src/utils/animations.js`
3. Import and add to `App.jsx`
4. Add scroll link to `NAVIGATION` in constants

## Running the Project

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
```

### Production
```bash
npm run build        # Build optimized production files
npm run preview      # Preview production build
```

## Best Practices
- Use Framer Motion variants for consistent animations
- Keep components focused and reusable
- Use Tailwind utility classes instead of custom CSS when possible
- Follow existing code style (semicolon-less, single quotes)
- Test responsiveness on mobile devices
- Update README when making significant changes

## Performance Considerations
- Images should be optimized (JPEG/WebP format)
- Use lazy loading for projects section
- Minimize animation complexity on mobile
- Bundle size monitoring with Vite
- Remove unused components and dependencies

## Dependencies Info
- **framer-motion**: Advanced animations and gestures
- **react-icons**: Icon components library
- **tailwindcss**: Utility-first CSS framework
- **vite**: Next-generation frontend build tool

## Notes for Copilot
- This portfolio is a static site with no backend
- Contact form is client-side only (no email integration)
- Images use Unsplash URLs as placeholders
- All content is data-driven from `constants/data.js`
- Animations are triggered by scroll and user interaction
- Mobile responsiveness is prioritized
- Dark theme is the only theme (no light mode toggle)
