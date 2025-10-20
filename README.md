# Shannon T20 - Portfolio Website

A beautiful, modern, and responsive portfolio website showcasing your projects and skills. This portfolio features a stunning design with smooth animations, interactive elements, and a mobile-first responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animated counters
- **Project Showcase**: Featured section for your Penjeni.ai with media gallery (screenshots & videos) and grid layout for other projects
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading with optimized CSS and JavaScript

## 🎨 Design Highlights

- **Hero Section**: Eye-catching gradient background with animated elements
- **Featured Project**: Special highlighting for your Compliance Management System
- **Skills Section**: Interactive skill tags with hover effects
- **Project Grid**: Beautiful card-based layout for showcasing projects
- **Contact Section**: Professional contact form with validation
- **Smooth Animations**: Fade-in effects and smooth transitions throughout

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # App screenshots directory
│   ├── screenshot1.png # Chat interface screenshot
│   ├── screenshot2.png # Pension calculator screenshot
│   └── README.md       # Image guidelines
├── videos/             # Demo videos directory
│   ├── penjeni-demo.mp4  # Demo video (MP4)
│   ├── penjeni-demo.webm # Demo video (WebM)
│   └── README.md       # Video guidelines
└── README.md           # This file
```

## 🛠️ Customization Guide

### 1. Update Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<h2 class="hero-subtitle">Your Professional Title</h2>
<p class="hero-description">
    Your personal description and what you do.
</p>
```

#### Contact Information
```html
<div class="contact-method">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your.email@example.com</p>
    </div>
</div>
```

### 2. Update Project Information

#### Featured Project (Penjeni.ai with Media Gallery)
Replace the placeholder content with your actual project details and add screenshots/videos:

```html
<div class="project-content">
    <div class="project-badge">Featured</div>
    <h3 class="project-title">Your Project Title</h3>
    <p class="project-description">
        Your project description with key features and technologies.
    </p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
        <!-- Add more technologies -->
    </div>
    <div class="project-links">
        <a href="https://github.com/ShannonT20/your-repo" target="_blank" class="project-link">
            <i class="fab fa-github"></i> View Code
        </a>
        <a href="https://your-live-demo.com" class="project-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>
    </div>
</div>
```

#### Other Projects
Update the project cards in the projects grid:

```html
<div class="project-card">
    <div class="project-card-image">
        <i class="fas fa-icon-name"></i> <!-- Choose appropriate icon -->
    </div>
    <div class="project-card-content">
        <h4>Project Name</h4>
        <p>Project description</p>
        <div class="project-card-tech">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
        </div>
        <a href="https://github.com/ShannonT20/project-repo" target="_blank" class="project-card-link">
            <i class="fab fa-github"></i>
        </a>
    </div>
</div>
```

### 3. Update Skills Section

Modify the skills section to reflect your actual skills:

```html
<div class="skill-category">
    <h4>Frontend</h4>
    <div class="skill-tags">
        <span class="skill-tag">React</span>
        <span class="skill-tag">Vue.js</span>
        <span class="skill-tag">JavaScript</span>
        <!-- Add your skills -->
    </div>
</div>
```

### 4. Update Social Links

Replace the placeholder social links with your actual profiles:

```html
<div class="social-links">
    <a href="https://github.com/ShannonT20" target="_blank" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Add more social links -->
</div>
```

### 5. Customize Colors and Styling

You can customize the color scheme by modifying the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --accent-color: #667eea;
    --text-color: #1f2937;
    --bg-color: #ffffff;
}
```

## 🚀 Deployment

### Option 1: GitHub Pages (Recommended)

1. Create a new repository named `ShannonT20.github.io`
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your portfolio will be available at `https://ShannonT20.github.io`

### Option 2: Netlify

1. Connect your GitHub repository to Netlify
2. Netlify will automatically deploy your site
3. You'll get a custom domain like `your-site.netlify.app`

### Option 3: Vercel

1. Import your repository to Vercel
2. Vercel will automatically deploy your site
3. You'll get a custom domain like `your-site.vercel.app`

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for mobile devices. Key features include:

- Mobile-first design approach
- Hamburger navigation menu
- Touch-friendly buttons and links
- Optimized images and animations
- Fast loading on mobile networks

## 🎯 SEO Optimization

The portfolio includes:

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

If you need help customizing your portfolio, feel free to:

1. Check the comments in the code
2. Modify the HTML structure as needed
3. Adjust CSS styles to match your preferences
4. Update JavaScript functionality if required

### 6. Add App Screenshots and Videos

For the Penjeni.ai featured project, add your actual media files:

#### Screenshots
Place high-quality screenshots in the `images/` directory:
- `images/screenshot1.png` - Chat interface
- `images/screenshot2.png` - Pension calculator
- Recommended size: 800x600px, PNG/JPG format

#### Demo Videos
Add demo videos in the `videos/` directory:
- `videos/penjeni-demo.mp4` - Main demo video (MP4 format)
- `videos/penjeni-demo.webm` - Same video in WebM format (for better browser compatibility)
- Recommended resolution: 1920x1080 (Full HD) or 1280x720 (HD)
- Duration: 2-5 minutes for optimal viewing

## 🎨 Customization Tips

1. **Images**: Replace placeholder icons with actual project screenshots
2. **Colors**: Modify the CSS color scheme to match your brand
3. **Content**: Update all text content to reflect your personal information
4. **Projects**: Add your actual GitHub repository links
5. **Media Gallery**: Add real screenshots and demo videos for Penjeni.ai
6. **Contact**: Update contact information and social media links

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Happy coding! 🚀**
