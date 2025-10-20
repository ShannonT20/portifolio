#!/bin/bash

# Portfolio Deployment Script for GitHub Pages
# Run this script to deploy your portfolio to GitHub Pages

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Error: Git repository not initialized. Run 'git init' first."
    exit 1
fi

# Check if remote origin exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Git remote origin already configured"
else
    echo "❓ Enter your GitHub username:"
    read -r username

    if [ -z "$username" ]; then
        echo "❌ Error: GitHub username cannot be empty"
        exit 1
    fi

    repo_url="https://github.com/${username}/shannon-t20.github.io.git"
    git remote add origin "$repo_url"
    echo "✅ Added remote origin: $repo_url"
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Update portfolio - $(date +'%Y-%m-%d %H:%M:%S')"

    # Switch to main branch
    echo "🌿 Switching to main branch..."
    git branch -M main

    # Push to GitHub
    echo "⬆️  Pushing to GitHub..."
    git push -u origin main

    echo ""
    echo "🎉 Deployment successful!"
    echo "=========================="
    echo "📍 Your portfolio will be available at:"
    echo "   https://${username}.github.io"
    echo ""
    echo "⏱️  It may take 2-3 minutes for the site to update."
    echo "🔍 Check the 'Actions' tab in your GitHub repository for deployment status."
fi

echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Click Settings > Pages"
echo "3. Select 'GitHub Actions' as the source"
echo "4. Your site should be live within a few minutes!"
