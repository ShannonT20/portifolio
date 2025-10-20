@echo off
REM Portfolio Deployment Script for GitHub Pages (Windows)
REM Run this script to deploy your portfolio to GitHub Pages

echo 🚀 Portfolio Deployment Script
echo ==============================

REM Check if git is initialized
if not exist ".git" (
    echo ❌ Error: Git repository not initialized. Run 'git init' first.
    pause
    exit /b 1
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git remote origin already configured
) else (
    echo ❓ Enter your GitHub username:
    set /p username=""

    if "%username%"=="" (
        echo ❌ Error: GitHub username cannot be empty
        pause
        exit /b 1
    )

    set repo_url=https://github.com/%username%/shannon-t20.github.io.git
    git remote add origin "%repo_url%"
    echo ✅ Added remote origin: %repo_url%
)

REM Add all files
echo 📁 Adding files to git...
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo ℹ️  No changes to commit
) else (
    REM Commit changes
    echo 💾 Committing changes...
    git commit -m "Update portfolio - %date% %time%"

    REM Switch to main branch
    echo 🌿 Switching to main branch...
    git branch -M main

    REM Push to GitHub
    echo ⬆️  Pushing to GitHub...
    git push -u origin main

    echo.
    echo 🎉 Deployment successful!
    echo ==========================
    echo 📍 Your portfolio will be available at:
    echo    https://%username%.github.io
    echo.
    echo ⏱️  It may take 2-3 minutes for the site to update.
    echo 🔍 Check the 'Actions' tab in your GitHub repository for deployment status.
)

echo.
echo 📋 Next steps:
echo 1. Go to your GitHub repository
echo 2. Click Settings ^> Pages
echo 3. Select 'GitHub Actions' as the source
echo 4. Your site should be live within a few minutes!

pause
