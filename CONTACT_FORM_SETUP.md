# Contact Form Email Setup Guide

## 🚀 Quick Setup for Email Notifications

Your contact form is now configured to send emails, but you need to complete the setup to receive messages at `shannonsikadi@gmail.com`.

## Option 1: Formspree (Recommended - Free & Easy)

### Step 1: Sign Up
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Create a Form
1. Click "Create a new form" in your dashboard
2. Name it "Portfolio Contact Form"
3. Copy the form endpoint URL (it looks like: `https://formspree.io/f/xxxxxxxx`)

### Step 3: Update Your Code
1. Open `index.html` in your code editor
2. Find this line (around line 431):
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
   ```html
   <form id="contactForm" action="https://formspree.io/f/your-actual-form-id" method="POST">
   ```

### Step 4: Configure Email Destination
1. In your Formspree dashboard, go to your form settings
2. Set "Email To" to: `shannonsikadi@gmail.com`
3. Optionally customize the email subject and reply-to settings

### Step 5: Test
1. Upload your portfolio to a web server
2. Fill out the contact form and submit it
3. Check your email for the message!

## Option 2: Netlify Forms (If deploying on Netlify)

If you're deploying your portfolio on Netlify:

1. Remove the `action` attribute from the form in `index.html`
2. Add `data-netlify="true"` to the form tag:
   ```html
   <form id="contactForm" data-netlify="true" method="POST">
   ```
3. In your Netlify dashboard, go to Site Settings > Forms
4. Set up email notifications to `shannonsikadi@gmail.com`

## ✅ What Happens Now

- ✅ Form validation (required fields, valid email)
- ✅ Loading state while sending ("Sending..." button text)
- ✅ Success notification when message is sent
- ✅ Error handling if something goes wrong
- ✅ Automatic form reset after successful submission
- ✅ Emails delivered directly to your inbox

## 🛠️ Troubleshooting

**Form not sending emails?**
- Make sure you've replaced `YOUR_FORM_ID` with your actual Formspree form ID
- Check that your Formspree account is active and email is verified
- Verify the email destination is set to `shannonsikadi@gmail.com`

**Still having issues?**
- Contact Formspree support
- Check browser console for JavaScript errors
- Test with a different email address first

## 📧 Email Format

You'll receive emails with:
- **From**: Visitor's email address
- **Subject**: Visitor's subject line
- **Message**: Full contact form content including name, email, subject, and message

---

**Need help?** Feel free to reach out if you run into any issues setting this up!
