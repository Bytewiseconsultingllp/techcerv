# Techcerv - Next.js Website

A modern, high-performance website built with Next.js 15, TypeScript, and the App Router. This is a pixel-perfect conversion of the original HTML/CSS/jQuery website to a Next.js application.

## 🚀 Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🎯 **TypeScript** for type safety
- 🖼️ **Next.js Image Optimization** for faster loading
- 🎨 **Pixel-perfect design** matching the original website
- ✨ **Custom mouse cursor effect** (critical feature preserved)
- 📱 **Fully responsive** design
- 🎭 **WOW.js animations** for smooth scroll effects
- 🔄 **Swiper sliders** for hero sections
- 📊 **Counter animations** for statistics
- 🎪 **Bootstrap 5** for layout and components
- 🌈 **Font Awesome icons**

## 📂 Project Structure

```
demo-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with metadata & scripts
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── vision/              # Vision page
│   ├── resources/           # Resources page
│   └── training/            # Training page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   ├── HeroSection.tsx      # Hero banner
│   ├── AICloudSection.tsx   # AI & Cloud features
│   ├── ServicesSection.tsx  # Services grid
│   ├── WhyChooseSection.tsx # Why choose us
│   ├── PartnersSection.tsx  # Partners logos carousel
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── BlogSection.tsx      # Latest blog posts
│   ├── MouseCursor.tsx      # Custom cursor effect (CRITICAL)
│   └── ScriptInitializer.tsx # JS libraries initializer
├── public/
│   ├── css/                 # All original CSS files
│   ├── js/                  # All JavaScript libraries
│   ├── images/              # All images and assets
│   └── fonts/               # Font files
└── package.json
```

## 🛠️ Technologies Used

- **Next.js 15.1.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Bootstrap 5** - CSS framework
- **GSAP** - Animation library
- **WOW.js** - Scroll animations
- **Swiper** - Modern slider
- **jQuery** - For legacy library compatibility
- **Font Awesome** - Icon library

## 📦 Installation

1. **Clone or navigate to the project:**
   ```bash
   cd /Users/ssingh83/Desktop/abcdef/TechServ/demo-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 🎨 Custom Features

### Mouse Cursor Effect (Critical Feature)
The custom mouse cursor effect is implemented using GSAP and provides:
- Smooth following cursor
- Hover state animations
- Custom cursor on interactive elements
- Implemented in `components/MouseCursor.tsx`

### Component Architecture
All sections are broken down into reusable components:
- **Header**: Responsive navigation with mobile menu
- **Hero Section**: Full-screen hero with background image
- **AI & Cloud**: Feature cards grid
- **Services**: 9 service cards with hover effects
- **Why Choose Us**: Features with counter animations
- **Partners**: Auto-scrolling logo carousel
- **FAQ**: Bootstrap accordion
- **Blog**: Latest posts grid
- **Footer**: Multi-column footer with links

## 📱 Pages

- **/** - Home page (complete)
  - Hero section with AI & Cloud focus
  - Services grid (9 services)
  - Why Choose Us section
  - Partners carousel
  - FAQ accordion
  - Blog section
  
- **/vision** - Vision/About Us page (complete)
  - Page header with breadcrumb
  - About section
  - Interactive timeline (2015-2022)
  - Leadership profiles
  - Cultural values grid
  - Partner network

- **/training** - Training/Courses page (complete)
  - Hero section with CTA
  - Partner logos carousel
  - **Advanced Course Filtering System**:
    - 4 main categories (AWS, Google Cloud, Microsoft 365, AI)
    - Dynamic subcategory tabs
    - Real-time course filtering
    - 20+ courses with details
    - Responsive card grid
  
- **/resources** - Resources page (placeholder)

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Next Steps

When adding new pages:
1. Create a new folder in `/app` directory
2. Add `page.tsx` file
3. Import `Header` and `Footer` components
4. Add your content
5. Navigation links in Header will automatically work

Example:
```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <>
      <Header />
      <div className="container">
        {/* Your content here */}
      </div>
      <Footer />
    </>
  );
}
```

## 📝 Important Notes

1. **CSS Files**: All original CSS files are loaded via `<link>` tags in the layout for compatibility
2. **JavaScript Libraries**: Loaded via Next.js `<Script>` components with proper loading strategies
3. **Images**: Using Next.js `<Image>` component for optimization
4. **Navigation**: All navigation links updated to use Next.js `<Link>` component
5. **Mouse Cursor**: Implemented as a client component with GSAP for smooth animations

## 🌐 Comparison with Original

| Feature | Original | Next.js Version |
|---------|----------|-----------------|
| Framework | Static HTML | Next.js 15 |
| Language | JavaScript | TypeScript |
| Routing | Multi-page | App Router |
| Images | `<img>` | `<Image>` (optimized) |
| Navigation | `<a>` | `<Link>` |
| Performance | Good | Excellent |
| SEO | Manual | Built-in |
| Build | None | Optimized bundles |

## 🚀 Performance

- Server-side rendering for faster initial load
- Automatic code splitting
- Image optimization
- Font optimization
- CSS optimization
- JavaScript bundling

## 📄 License

Copyright © 2025 Techcerv. All Rights Reserved.

## 👨‍💻 Development

Built with ❤️ using Next.js, TypeScript, and modern web technologies.

---

**Server URL**: http://localhost:3000
**Original Demo**: http://localhost:8000/index.html
