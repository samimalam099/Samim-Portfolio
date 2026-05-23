# Project File Tree

```
Samim Portfolio/
├── .github/
│   └── copilot-instructions.md      # Copilot configuration and guidelines
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky navigation bar
│   │   ├── Hero.jsx                 # Hero section with typing animation
│   │   ├── About.jsx                # About section with stats
│   │   ├── Skills.jsx               # Skills showcase
│   │   ├── Projects.jsx             # Projects grid with filters
│   │   ├── Experience.jsx           # Experience timeline
│   │   ├── Contact.jsx              # Contact form
│   │   └── Footer.jsx               # Footer with social links
│   ├── constants/
│   │   └── data.js                  # Portfolio content and configuration
│   ├── utils/
│   │   └── animations.js            # Framer Motion animation variants
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles and Tailwind imports
├── .eslintrc.cjs                    # ESLint configuration
├── .gitignore                       # Git ignore rules
├── .prettierrc                      # Code formatter configuration
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and npm scripts
├── postcss.config.js                # PostCSS configuration
├── README.md                        # Complete documentation
├── SETUP.md                         # Quick start guide
├── tailwind.config.js               # Tailwind CSS configuration
└── vite.config.js                   # Vite build configuration
```

## File Purposes

### Configuration Files
- **package.json** - Lists all dependencies and available npm scripts
- **vite.config.js** - Vite server and build configuration
- **tailwind.config.js** - Theme colors, animations, and customizations
- **postcss.config.js** - PostCSS processor for Tailwind
- **index.html** - HTML page that loads React
- **.eslintrc.cjs** - Code linting rules
- **.prettierrc** - Code formatting rules
- **.gitignore** - Files to ignore in Git

### Source Code
- **main.jsx** - React DOM render entry point
- **App.jsx** - Root component that organizes all sections
- **index.css** - Global styles and Tailwind utilities

### Components (8 Sections)
Each component is a reusable React module:
- **Navbar.jsx** - Navigation with responsive mobile menu
- **Hero.jsx** - Main introduction with typing effect
- **About.jsx** - Personal bio and statistics
- **Skills.jsx** - Skills organized by category
- **Projects.jsx** - Portfolio projects showcase
- **Experience.jsx** - Timeline of work experience
- **Contact.jsx** - Contact form and information
- **Footer.jsx** - Footer with links and CTA

### Utilities & Constants
- **data.js** - All portfolio content (skills, projects, experience, etc.)
- **animations.js** - Reusable Framer Motion animation definitions

### Documentation
- **README.md** - Comprehensive project documentation
- **SETUP.md** - Quick start and setup instructions
- **copilot-instructions.md** - AI assistant customization guide

## Total Files: 26
- Configuration: 9 files
- Source Code: 12 files (components, utilities, main files)
- Documentation: 3 files
- Hidden: 2 files (.gitignore)
