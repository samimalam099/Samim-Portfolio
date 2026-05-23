# Developer Portfolio Website

A modern, fully responsive developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Dark UI** - Sleek dark theme with glassmorphism effects
- **Smooth Animations** - Framer Motion animations throughout the site
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Sticky Navbar** - Navigation bar that adjusts on scroll
- **Mobile Menu** - Hamburger menu for mobile devices
- **Hero Section** - Eye-catching introduction with typing animation
- **Gradient Text** - Beautiful gradient text effects
- **Project Showcase** - Filterable project cards with hover animations
- **Experience Timeline** - Interactive timeline of work experience
- **Contact Form** - Functional contact form for inquiries
- **Social Links** - Quick access to social media profiles
- **Scroll Reveal** - Animations triggered on scroll
- **Optimized Performance** - Fast loading and smooth performance

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Development**: Node.js + npm

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.jsx       # Navigation bar with mobile menu
│   ├── Hero.jsx         # Hero section with typing animation
│   ├── About.jsx        # About section with stats
│   ├── Skills.jsx       # Skills section with proficiency
│   ├── Projects.jsx     # Projects showcase grid
│   ├── Experience.jsx   # Experience timeline
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer with social links
├── constants/
│   └── data.js          # Portfolio content and data
├── utils/
│   └── animations.js    # Framer Motion animation variants
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind imports

public/                  # Static assets
index.html              # HTML entry point
package.json            # Dependencies and scripts
vite.config.js          # Vite configuration
tailwind.config.js      # Tailwind CSS configuration
postcss.config.js       # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the project files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/constants/data.js` to update:
- Navigation links
- Skills and expertise
- Project information
- Experience history
- Social media links
- Typing animation texts

### Change Colors

Modify `tailwind.config.js` to customize:
- Dark background colors
- Accent colors
- Custom animations
- Font configurations

### Modify Components

Each component in `src/components/` can be customized independently:
- Update typography and text
- Adjust spacing and sizing
- Modify animation effects
- Add or remove sections

## 🎬 Animation Variants

Animation variants are defined in `src/utils/animations.js` and can be customized:

- `containerVariants` - Container animations for staggered children
- `itemVariants` - Individual item animations
- `slideInFromLeft/Right` - Slide in effects
- `fadeInUp` - Fade and slide up
- `scaleIn` - Scale animations
- `floatingAnimation` - Floating effect

## 📱 Responsive Breakpoints

The design is responsive across all devices:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Sections

### 1. **Navbar**
- Logo with brand name
- Desktop navigation menu
- Mobile hamburger menu
- Sticky header on scroll

### 2. **Hero Section**
- Welcome greeting
- Main heading with gradient text
- Typing animation for roles
- Call-to-action buttons
- Floating background elements

### 3. **About Section**
- Profile image with glassmorphism effect
- Bio and introduction
- Statistics cards
- Call-to-action button

### 4. **Skills Section**
- Categorized skills
- Proficiency indicators
- Additional competencies
- Interactive hover effects

### 5. **Projects Section**
- Project cards grid
- Project images with zoom effect
- Technologies used
- External links
- GitHub links
- Filter buttons

### 6. **Experience Section**
- Timeline with visual indicators
- Company and position information
- Duration of employment
- Key achievements
- Visual achievements checklist

### 7. **Contact Section**
- Contact information
- Email, phone, location
- Contact form with validation
- Social media links
- Success notification

### 8. **Footer**
- Quick navigation links
- Social media icons
- Copyright information
- Back to top button

## 🎯 Features Breakdown

### Glassmorphism
- Semi-transparent backgrounds with blur effect
- Used on cards and containers
- Creates a modern, sophisticated look

### Gradient Text
- Multi-color gradient text effects
- Applied to headings and brand name
- Enhanced visual hierarchy

### Animations
- Smooth page transitions
- Scroll reveal animations
- Hover effects on interactive elements
- Floating and rotating elements
- Staggered animations for lists

### Responsive Images
- Project images scale with hover
- Profile image with decorative effects
- All images are optimized and responsive

## 🔧 Configuration Files

### vite.config.js
Vite configuration for React and dev server settings

### tailwind.config.js
Tailwind CSS customization with dark theme and custom animations

### postcss.config.js
PostCSS configuration for Tailwind CSS processing

### package.json
Project dependencies and npm scripts

## 📚 Dependencies

### Main
- react: ^18.2.0
- react-dom: ^18.2.0
- framer-motion: ^10.16.4
- react-icons: ^4.11.0
- lucide-react: ^0.263.1

### Dev
- @vitejs/plugin-react: ^4.0.3
- vite: ^4.4.5
- tailwindcss: ^3.3.0
- postcss: ^8.4.24
- autoprefixer: ^10.4.14

## 🌟 Best Practices

- **Reusable Components** - Components are designed to be reusable
- **Clean Code** - Well-structured and commented code
- **Performance** - Optimized animations and lazy loading
- **Accessibility** - Semantic HTML and keyboard navigation
- **SEO** - Meta tags and proper heading hierarchy
- **Responsive** - Mobile-first design approach

## 🚀 Future Enhancements

- Blog section
- Dark/Light theme toggle
- Multi-language support
- Backend integration for contact form
- CMS integration
- Analytics tracking

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

- Samim Alam - Full Stack Developer

## 🤝 Support

For issues or questions, feel free to reach out through the contact form or social media links.

---

**Made with ❤️ using React, Vite, and Tailwind CSS**
