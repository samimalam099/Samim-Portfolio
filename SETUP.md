# 🚀 Developer Portfolio - Setup Guide

## Quick Start

This is a modern, fully responsive developer portfolio website. Follow these steps to get started.

### Prerequisites
- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- npm (comes with Node.js)

### 1️⃣ Install Dependencies

```bash
npm install
```

This will install all required packages:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

### 2️⃣ Start Development Server

```bash
npm run dev
```

The application will automatically open at `http://localhost:3000`

### 3️⃣ Customize Your Portfolio

Edit these files to personalize your portfolio:

**Main Content** - `src/constants/data.js`
- Update your name and information
- Modify skills and experience
- Add your projects
- Update social media links

**Theme Colors** - `tailwind.config.js`
- Change the accent color (currently cyan blue)
- Customize dark theme colors
- Adjust animations and shadows

**Component Text** - Edit individual components in `src/components/`:
- `Navbar.jsx` - Brand name and navigation
- `Hero.jsx` - Greeting and CTA text
- `About.jsx` - Bio and description
- `Contact.jsx` - Contact information
- `Footer.jsx` - Footer text

### 4️⃣ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 5️⃣ Deploy Your Portfolio

The `dist/` folder is ready to deploy to:
- **Vercel** - `vercel` (recommended)
- **Netlify** - Drag and drop `dist/` folder
- **GitHub Pages** - Push to gh-pages branch
- **AWS S3** - Upload `dist/` folder
- **Any static host** - Upload `dist/` folder

---

## 📂 Project Structure

```
├── src/
│   ├── components/          # 8 React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── data.js          # Portfolio content
│   ├── utils/
│   │   └── animations.js    # Animation variants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html               # Entry HTML
├── package.json             # Dependencies
├── vite.config.js           # Vite config
├── tailwind.config.js       # Tailwind config
├── postcss.config.js        # PostCSS config
└── README.md                # Full documentation
```

---

## 🎨 Customization Examples

### Change Accent Color
In `tailwind.config.js`:
```javascript
colors: {
  'accent': '#6366f1',  // Change from cyan to indigo
}
```

### Add a New Skill
In `src/constants/data.js`:
```javascript
export const SKILLS = [
  {
    category: 'Frontend',
    skills: ['React', 'Vue', 'TypeScript', 'Your New Skill'],
  },
]
```

### Add a New Project
In `src/constants/data.js`:
```javascript
{
  id: 7,
  title: 'Your Project Name',
  description: 'Project description',
  image: 'image-url',
  technologies: ['React', 'Node.js'],
  link: 'project-link',
  github: 'github-link',
}
```

### Update Social Links
In `src/constants/data.js`:
```javascript
export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'SiGithub', url: 'your-github-url' },
  { name: 'LinkedIn', icon: 'SiLinkedin', url: 'your-linkedin-url' },
]
```

---

## 🌟 Features Overview

✅ **Dark Modern UI** - Sleek and professional  
✅ **Glassmorphism Cards** - Modern design trend  
✅ **Smooth Animations** - Powered by Framer Motion  
✅ **Fully Responsive** - Works on all devices  
✅ **Sticky Navbar** - Always accessible navigation  
✅ **Mobile Menu** - Hamburger menu for small screens  
✅ **Typing Animation** - Dynamic hero section  
✅ **Gradient Text** - Eye-catching headings  
✅ **Project Showcase** - Filterable cards  
✅ **Experience Timeline** - Interactive timeline  
✅ **Contact Form** - Easy to customize  
✅ **Social Links** - Quick access buttons  
✅ **Scroll Animations** - Reveal on scroll  

---

## 🔧 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile** (< 640px) - Single column, hamburger menu
- **Tablet** (640px - 1024px) - Two columns
- **Desktop** (> 1024px) - Full multi-column layout

---

## 🎬 Animation Details

### Hero Section
- Typing animation cycles through multiple roles
- Floating background elements
- Scroll indicator animation

### Sections
- Fade-in on scroll reveal
- Staggered animations for list items
- Hover effects on cards and buttons

### Navbar
- Smooth slide-down animation
- Glassmorphism effect on scroll
- Mobile menu slide animation

---

## 🚀 Performance

- Optimized Vite bundling
- Minimal CSS with Tailwind
- Efficient Framer Motion animations
- Lazy loading ready
- Production build size: ~100KB (gzipped)

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Issues with dependencies?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm run build
```

---

## 📖 Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons)

---

## 📞 Support

Refer to the main `README.md` for detailed documentation and additional information.

---

## 🎉 You're Ready!

Your portfolio is set up and ready to customize. Edit the content, add your projects, and showcase your amazing work!

**Happy coding! 🚀**
