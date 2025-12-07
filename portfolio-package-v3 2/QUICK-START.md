# Quick Start Guide - Deploy Your Portfolio

This guide will help you get your portfolio website live in minutes.

---

## 🎯 Choose Your Deployment Method

### Option 1: GitHub Pages (Recommended - Free & Easy)

**Perfect for:** Quick deployment, version control, free hosting

**Steps:**
1. **Create GitHub Account** (if you don't have one)
   - Go to github.com
   - Sign up for free

2. **Create New Repository**
   - Click "New Repository"
   - Name it: `yourname.github.io` (use your actual GitHub username)
   - Make it Public
   - Click "Create Repository"

3. **Upload Your Files**
   - Click "Upload files"
   - Drag all files from `website/` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch
   - Branch: main
   - Folder: / (root)
   - Click Save

5. **Access Your Site**
   - Your site will be live at: `https://yourname.github.io`
   - May take 5-10 minutes for first deployment

**Pros:**
- ✅ Free hosting
- ✅ Version control
- ✅ Easy updates
- ✅ Custom domain support

**Cons:**
- ⚠️ Public repository (your code is visible)

---

### Option 2: Netlify (Also Free & Simple)

**Perfect for:** Drag-and-drop deployment, custom domains

**Steps:**
1. **Create Netlify Account**
   - Go to netlify.com
   - Sign up for free

2. **Deploy Site**
   - Click "Add new site" → "Deploy manually"
   - Drag `website/` folder to upload area
   - Wait for deployment (30 seconds)

3. **Access Your Site**
   - You'll get a URL like: `random-name-12345.netlify.app`
   - Can customize name in Site Settings

4. **Optional: Custom Domain**
   - Go to Domain Settings
   - Add your custom domain (if you have one)

**Pros:**
- ✅ Extremely easy (drag & drop)
- ✅ Free hosting
- ✅ Auto SSL certificate
- ✅ Custom domain included

**Cons:**
- ⚠️ Limited to 100GB bandwidth/month (free tier)

---

### Option 3: Vercel (Developer-Friendly)

**Perfect for:** If you're comfortable with Git

**Steps:**
1. **Create Vercel Account**
   - Go to vercel.com
   - Sign up with GitHub

2. **Import Repository**
   - Click "Add New Project"
   - Import your GitHub repository
   - Deploy

3. **Access Your Site**
   - You'll get a URL like: `portfolio.vercel.app`
   - Can customize in Project Settings

**Pros:**
- ✅ Free hosting
- ✅ Lightning fast
- ✅ Excellent performance
- ✅ Easy Git integration

---

### Option 4: Traditional Web Hosting

**Perfect for:** If you already have hosting (GoDaddy, Bluehost, etc.)

**Steps:**
1. **Access Your Hosting**
   - Log into your hosting control panel (cPanel)

2. **Upload Files**
   - Go to File Manager
   - Navigate to `public_html/` or `www/`
   - Upload all files from `website/` folder

3. **Set Permissions**
   - Ensure files are readable (644 for files, 755 for folders)

4. **Access Your Site**
   - Visit your domain: `https://yourdomain.com`

**Pros:**
- ✅ Full control
- ✅ Can use existing domain

**Cons:**
- ⚠️ Costs money (if you don't already have hosting)
- ⚠️ More technical setup

---

## 📁 What to Upload

### For GitHub Pages / Vercel:
Upload everything from `website/` folder:
```
✅ index.html
✅ case-study-rds.html
✅ case-study-dvs.html
✅ case-study-design-forum.html
✅ case-study-unified-platform.html
✅ case-study-ai-experience.html
✅ case-study-enablement.html
```

### For Netlify:
Just drag the entire `website/` folder

### For Traditional Hosting:
Upload to `public_html/` or your domain's root directory

---

## 🖼️ Adding Your Images

**After deploying, you'll want to add your actual project images:**

1. **Create an `assets/` or `images/` folder** in your website directory

2. **Upload your images**
   - Screenshots of your work
   - Case study visuals
   - Professional headshot

3. **Update HTML files**
   ```html
   <!-- Change this: -->
   <img src="placeholder.jpg" alt="Project screenshot">
   
   <!-- To this: -->
   <img src="assets/rds-screenshot.jpg" alt="R7 Design System interface">
   ```

4. **Image optimization tips:**
   - Use .jpg for photos
   - Use .png for screenshots with text
   - Compress images (use tinypng.com)
   - Recommended max width: 1200px
   - Keep file sizes under 500KB each

---

## ✅ Pre-Launch Checklist

Before making your portfolio public:

- [ ] **Test all pages locally**
  - Open each HTML file in browser
  - Click all navigation links
  - Test theme toggle
  - Check responsive design (resize browser)

- [ ] **Update placeholder content**
  - Replace any [PLACEHOLDER] text
  - Add your actual images
  - Verify all contact information

- [ ] **Test accessibility**
  - Navigate with keyboard only (Tab key)
  - Test with screen reader if possible
  - Check color contrast

- [ ] **Verify all links**
  - LinkedIn profile link
  - Email link (should open email client)
  - Case study navigation (next/previous)
  - Back to portfolio buttons

- [ ] **Cross-browser testing**
  - Chrome
  - Firefox
  - Safari (if on Mac)
  - Edge

- [ ] **Mobile testing**
  - Test on actual phone if possible
  - Use browser DevTools mobile view
  - Check touch targets are large enough

---

## 🔍 Common Issues & Solutions

### Issue: Images don't show up
**Solution:** Check file paths
```html
<!-- If images are in assets folder: -->
<img src="assets/image.jpg">

<!-- If images are in same folder as HTML: -->
<img src="image.jpg">
```

### Issue: CSS looks broken
**Solution:** All CSS is embedded in HTML files, so this shouldn't happen. If it does:
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Check browser console for errors (F12)

### Issue: Links don't work
**Solution:** Make sure all HTML files are in the same directory
```
✅ Correct:
index.html
case-study-rds.html

❌ Wrong:
index.html
pages/case-study-rds.html
```

### Issue: Theme toggle doesn't work
**Solution:** JavaScript might be disabled
- Check browser console for errors (F12)
- Ensure JavaScript is enabled in browser
- Try different browser

---

## 📱 Testing Your Live Site

Once deployed, test:

1. **Main homepage**
   - Does it load?
   - Do animations work?
   - Does theme toggle work?

2. **Navigation**
   - Click each case study
   - Use next/previous buttons
   - Click "Back to Portfolio"

3. **Contact links**
   - Email link (should open email)
   - LinkedIn link (should go to profile)
   - Resume download (if applicable)

4. **Mobile view**
   - Visit on your phone
   - Test navigation menu
   - Check readability
   - Verify touch targets

---

## 🎉 You're Live!

After deployment:

1. **Share your portfolio**
   - Update LinkedIn profile with link
   - Add to resume
   - Share with your network

2. **Track updates**
   - Keep a list of changes you make
   - Test after each update
   - Use Git for version control (recommended)

3. **Gather feedback**
   - Share with trusted colleagues
   - Ask for honest feedback
   - Iterate and improve

---

## 🆘 Need Help?

**Common Questions:**

**Q: How do I update my live site?**
A: See UPDATE-GUIDE.md for detailed instructions

**Q: Can I use a custom domain?**
A: Yes! All hosting options support custom domains

**Q: How much does it cost?**
A: GitHub Pages, Netlify, and Vercel are all FREE for static sites

**Q: What if I want to add a blog?**
A: You can add more HTML pages following the same pattern

**Q: Can I password protect my portfolio?**
A: Not easily with free hosting. Consider Netlify Pro ($19/month) or traditional hosting

---

## 📊 Performance Tips

After going live:

1. **Check site speed**
   - Use Google PageSpeed Insights
   - Aim for 90+ score
   - Compress any large images

2. **Monitor uptime**
   - All platforms have 99.9%+ uptime
   - No monitoring needed for static sites

3. **Analytics (optional)**
   - Add Google Analytics
   - Track visitor behavior
   - Understand which case studies get most views

---

## ✅ Success Checklist

Your portfolio is successfully deployed when:

- [ ] You can access it via a public URL
- [ ] All pages load without errors
- [ ] All navigation works
- [ ] Images display correctly
- [ ] Contact links work
- [ ] Mobile view is functional
- [ ] You've tested on multiple devices
- [ ] You've updated your LinkedIn/resume with the link

---

**Congratulations! Your portfolio is now live! 🎉**

Next step: See UPDATE-GUIDE.md to learn how to maintain and update your portfolio.
