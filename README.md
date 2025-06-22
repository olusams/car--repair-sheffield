# AutoFix Pro - Modern Car Repair Website

A modern, responsive car repair and automotive services website built with React, TypeScript, and Vite. Features a clean design, smooth animations, and excellent user experience.

## 🚀 Features

- **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging user interactions
- **SEO Optimized** - Structured data, meta tags, and semantic HTML
- **Performance Focused** - Optimized bundle size and loading times
- **Accessibility** - WCAG compliant with proper ARIA labels
- **Video Integration** - Interactive video components with fallback support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/autofix-pro-modern.git
   cd autofix-pro-modern
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── common/         # Shared components (buttons, modals, etc.)
│   └── layout/         # Layout components (header, footer)
├── data/               # Static data and configuration
├── pages/              # Page components
├── styles/             # Global styles and CSS
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🎨 Customization

### Colors and Branding
Update the Tailwind configuration in `tailwind.config.js` to match your brand colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

### Content Updates
- **Business Information**: Update `src/data/siteConfig.ts`
- **Services**: Modify `src/data/services.ts`
- **SEO**: Edit `src/components/common/SEOOptimizer.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
This project uses ESLint with TypeScript support. Run `npm run lint` to check for issues.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: info@autofixpro.co.uk
- Phone: 0114 385 4721
- Website: https://autofixpro.co.uk

---

Built with ❤️ by AutoFix Pro Team 