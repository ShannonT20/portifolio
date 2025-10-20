# 🚀 Portfolio Deployment Guide

## GitHub Pages Setup (5 Minutes)

### Step 1: Create Repository
1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `shannon-t20.github.io` (must be exact)
3. **Make it public** ✅
4. **Do NOT initialize** with README, .gitignore, or license
5. Click **Create repository**

### Step 2: Upload Your Code

#### Option A: Use the deployment script (Easiest)
```bash
# For Linux/Mac
chmod +x deploy.sh
./deploy.sh

# For Windows
deploy.bat
```

#### Option B: Manual upload
```bash
# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment"

# Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/shannon-t20.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**: select **"GitHub Actions"**
5. Wait 2-3 minutes for deployment

### Step 4: Your Site is Live! 🎉
- **URL**: `https://YOUR_USERNAME.github.io`
- **Automatic updates**: Every push to `main` branch auto-deploys

## 📧 Contact Form Setup

After deployment, set up email notifications:

1. Go to [formspree.io](https://formspree.io) (free)
2. Create account and new form
3. Copy your form ID (looks like: `xyz123abc`)
4. Update `index.html` line 431:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST">
   ```
5. Set email destination to `shannonsikadi@gmail.com`

## 🛠️ Troubleshooting

### Site not loading?
- Wait 5-10 minutes after first deployment
- Check **Actions** tab for build errors
- Verify repository name is exactly `shannon-t20.github.io`

### Contact form not working?
- Make sure Formspree form ID is correct
- Check that email destination is set properly
- Test with a different email first

### Need help?
Check the detailed README.md or contact me!

---

**🎯 Your portfolio will be live and collecting leads in under 10 minutes!**
