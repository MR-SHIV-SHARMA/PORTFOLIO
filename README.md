# 🚀 Shiv Sharma - Full-Stack Developer Portfolio

A modern, high-performance portfolio website showcasing full-stack development skills, built with React, Vite, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-19+-blue)
![Vite](https://img.shields.io/badge/Vite-5.4+-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-cyan)

## ✨ Features

### 🎨 **Modern Design**
- Responsive design that works on all devices
- Smooth animations and transitions
- Dark theme with professional aesthetics
- Interactive UI elements

### ⚡ **Performance Optimized**
- **Ultra-fast loading**: Optimized from 60 seconds to ~1 second
- Lazy loading for non-critical components
- Image preloading and optimization
- Code splitting and tree shaking
- Minimal bundle size

### 🧩 **Sections**
- **Home**: Hero section with introduction
- **About**: Personal profile and skills
- **Resume**: Professional experience and education
- **Projects**: Portfolio of development work
- **Contact**: Get in touch form and information

### 🛠️ **Technical Features**
- Built with modern React 19+ and hooks
- Vite for lightning-fast development
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- React Router for seamless navigation
- Optimized images with WebP format

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run optimize-images` | Optimize images |

## 🏗️ Project Structure

```
PORTFOLIO/
├── public/
│   ├── images/           # Static images
│   └── index.html        # HTML template
├── src/
│   ├── components/       # React components
│   │   ├── header/       # Navigation header
│   │   ├── home/         # Hero section
│   │   ├── Projects/     # Projects showcase
│   │   ├── Resume/       # Resume section
│   │   ├── Contact/      # Contact form
│   │   └── Footer/       # Footer component
│   ├── Layout.jsx        # Main layout wrapper
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🎯 Performance Optimizations

### **Before vs After**
- **Loading Time**: 60 seconds → ~1 second ⚡
- **Development Server**: ~423ms startup
- **Bundle Size**: Optimized with code splitting
- **Images**: WebP format with preloading

### **Key Optimizations**
1. **Removed artificial delays** from preloader
2. **Implemented smart lazy loading** for components
3. **Added image preloading** for critical assets
4. **Optimized Vite configuration** for better bundling
5. **Enhanced CSS performance** with GPU acceleration
6. **Added resource hints** for faster loading

## 🖼️ Image Optimization

Images are automatically optimized using:
- WebP format for better compression
- Responsive image loading
- Preloading for critical images
- Lazy loading for non-critical content

Run image optimization:
```bash
npm run optimize-images
```

## 🔧 Configuration

### Vite Configuration
- **Development**: Hot module replacement (HMR)
- **Production**: Optimized builds with Terser
- **Code Splitting**: Automatic vendor chunk splitting
- **Asset Optimization**: Minified CSS and JS

### Tailwind CSS
- **Utility-first**: Rapid UI development
- **Responsive**: Mobile-first design approach
- **Custom Colors**: Brand-specific color palette
- **Performance**: Purged unused styles

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🛡️ Performance Monitoring

Monitor your portfolio performance:
- **Lighthouse**: Built-in Chrome DevTools
- **Web Vitals**: Core performance metrics
- **Bundle Analyzer**: Check bundle size

## 🔄 Updates & Maintenance

### Latest Updates (January 2025)
- ✅ Fixed image loading issues during scroll
- ✅ Removed viewport-based animations causing flicker
- ✅ Optimized Projects section for instant loading
- ✅ Enhanced global image preloading
- ✅ Improved CSS caching strategies

### Maintenance Tasks
- Regular dependency updates
- Image optimization
- Performance monitoring
- Cross-browser testing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Developer

**Shiv Sharma** - Full-Stack Developer
- 🌍 Location: Jaipur, Rajasthan, India
- 💼 Specializes in modern web development
- 🚀 Passionate about performance optimization
- 📧 Contact: [Your Email]

## 🔗 Links

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **GitHub**: [Repository](https://github.com/your-username/portfolio)
- **LinkedIn**: [Profile](https://linkedin.com/in/your-profile)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by Shiv Sharma*
