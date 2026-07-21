# FIBAER Website - Deployment Guide

## 🎨 Website Features

Your FIBAER website includes:

✅ **Interactive Cinematic Hero** - Animated dust particles with parallax effect and Ken Burns animation
✅ **Logo with Transparent Background** - High-quality branding displayed without background
✅ **Responsive Design** - Works beautifully on desktop, tablet, and mobile
✅ **Premium Typography** - Light, professional font hierarchy with Inter
✅ **Strategic Color System**:
   - Primary: #45926f (green accent)
   - Background: #faf9f6 (warm off-white)
   - Secondary: #f5f3ef (light sand)
   - Text: #262522 (dark brown)

## 📱 Sections

1. **Hero Section** - Cinematic background with logo and call-to-action
2. **Navigation Header** - Fixed, professional navigation with transparency
3. **About Us (À Propos)** - Company mission and values
4. **Products (Transformation)** - Three-step process visualization
5. **Impact** - Environmental and economic benefits
6. **Footer** - Complete company information

## 🚀 How to Deploy to Vercel

### Option 1: Using GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial FIBAER website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fibaer-website.git
   git push -u origin main
   ```

2. **In Vercel Dashboard:**
   - Go to vercel.com and sign in
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Paste your GitHub URL
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

### Option 2: Direct Deployment via v0

1. **In v0 Settings (top right):**
   - Click "Settings" ⚙️
   - Go to "Git" section
   - Connect your GitHub account
   - Create a new repository
   - v0 will automatically push your changes

2. **Then connect to Vercel:**
   - Go to vercel.com
   - Click "Add New..." → "Project"
   - Select the GitHub repository
   - Deploy automatically

### Option 3: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel

# Follow the prompts:
# - Select your scope
# - Confirm project settings
# - Deploy to production
```

## 🔧 Environment Variables

This project doesn't require environment variables. All styling and design tokens are built into the code.

## 📊 Performance

- ✅ Fast builds with Turbopack
- ✅ Optimized images (WebP background)
- ✅ Efficient particle animation (Canvas-based)
- ✅ Responsive animations with prefers-reduced-motion support
- ✅ Built-in SEO optimization

## 🎯 Customization After Deployment

Edit these files in v0 to make changes:

- **Page Content**: `/app/page.tsx` - All text, sections, and layout
- **Colors**: Update hex codes in `/app/page.tsx` and `/app/layout.tsx`
- **Logo**: Replace `/public/logo.png` with your image
- **Fonts**: Modify in `/app/layout.tsx`

## 📝 SEO

- Title: "FIBAER - Première fibre polyester recyclée en Algérie"
- Description: "Startup industrielle basée à Oran, pionnière dans la transformation de bouteilles plastiques..."
- Language: French (fr)
- Theme Color: #45926f

## 🎬 Responsive Breakpoints

- Mobile: 375px (optimized)
- Tablet: 768px
- Desktop: 1024px+
- Large Desktop: 1280px+

## ✨ Interactive Elements

- Cinematic dust particle effect
- Parallax background on mouse movement
- Smooth scroll animations
- Hover effects on cards
- Smooth transitions on all elements

---

**Ready to Deploy?** Follow Option 1 or 2 above to get your FIBAER website live on Vercel in minutes!
