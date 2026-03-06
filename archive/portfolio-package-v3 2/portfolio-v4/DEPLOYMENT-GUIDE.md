# GitHub Pages Deployment Guide

## 🚀 Step-by-Step Instructions

### Option 1: Deploy via GitHub Website (Easiest)

#### Step 1: Upload Files
1. Go to your GitHub repository: `https://github.com/[your-username]/portfolio`
2. Click **Add file** → **Upload files**
3. Drag and drop:
   - `index.html`
   - `README.md`
   - `.gitignore`
4. Add commit message: "Portfolio v4 - Production ready"
5. Click **Commit changes**

#### Step 2: Enable GitHub Pages
1. Click **Settings** (top menu)
2. Scroll down and click **Pages** (left sidebar)
3. Under **Source**:
   - Branch: Select **main** (or **master**)
   - Folder: Select **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes for deployment

#### Step 3: View Your Live Site
- GitHub will show: "Your site is live at `https://[your-username].github.io/portfolio/`"
- Click the link to view your portfolio!

---

### Option 2: Deploy via Command Line (Git)

#### Prerequisites
- Git installed on your computer
- Repository cloned locally

#### Step 1: Add Files to Repository
```bash
# Navigate to your repository
cd /path/to/portfolio

# Copy the files from the zip
# (Extract portfolio-v4.zip first)

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Portfolio v4 - Production ready with glassmorphic theme switcher"

# Push to GitHub
git push origin main
```

#### Step 2: Enable GitHub Pages
1. Go to: `https://github.com/[your-username]/portfolio/settings/pages`
2. Under **Source**, select **main** branch
3. Click **Save**

#### Step 3: Verify Deployment
```bash
# Check deployment status
# Visit: https://github.com/[your-username]/portfolio/deployments

# Your site will be live at:
# https://[your-username].github.io/portfolio/
```

---

## 🌐 Custom Domain Setup (Optional)

### Step 1: Create CNAME File
Create a file named `CNAME` (no extension) with your domain:
```
yourdomain.com
```

### Step 2: Update DNS Settings
At your domain registrar, add these records:

**For apex domain (yourdomain.com):**
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: [your-username].github.io
```

### Step 3: Enable HTTPS
1. Go to repository **Settings** → **Pages**
2. Wait for DNS to propagate (can take 24 hours)
3. Check **Enforce HTTPS**

---

## ✅ Verification Checklist

After deployment, test these:

### Basic Functionality
- [ ] Site loads at GitHub Pages URL
- [ ] All navigation links work
- [ ] Images/icons display correctly
- [ ] Hover effects work

### Theme System
- [ ] Auto theme detects OS preference
- [ ] Light theme switches correctly
- [ ] Dark theme switches correctly
- [ ] High Contrast theme switches correctly
- [ ] Theme selection persists on refresh

### Responsive Design
- [ ] Desktop view (> 1200px) - segmented control visible
- [ ] Tablet view (768-1200px) - dropdown visible
- [ ] Mobile view (< 768px) - hamburger menu works
- [ ] Theme buttons appear in mobile nav overlay

### Accessibility
- [ ] Tab through all elements
- [ ] Enter/Space activates buttons
- [ ] Skip link works (press Tab on page load)
- [ ] Color contrast is sufficient
- [ ] Text is readable at all sizes

### Cross-Browser
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🐛 Common Issues & Solutions

### Issue: 404 Page Not Found
**Cause:** GitHub Pages not enabled or wrong branch selected  
**Solution:** 
1. Go to Settings → Pages
2. Select correct branch (main)
3. Select root folder (/)
4. Save and wait 1-2 minutes

### Issue: Theme Switcher Not Working
**Cause:** JavaScript blocked or localStorage disabled  
**Solution:**
1. Check browser console for errors
2. Enable JavaScript in browser settings
3. Clear site data and reload

### Issue: Mobile Menu Not Opening
**Cause:** JavaScript not loading  
**Solution:**
1. Hard refresh: Cmd/Ctrl + Shift + R
2. Clear browser cache
3. Check console for errors

### Issue: Glassmorphic Effect Not Showing
**Cause:** Old browser without backdrop-filter support  
**Solution:**
- Update browser to latest version
- Effect gracefully degrades to semi-transparent backgrounds

### Issue: Custom Domain Not Working
**Cause:** DNS not propagated yet  
**Solution:**
1. Wait up to 24 hours for DNS propagation
2. Check DNS settings with: `dig yourdomain.com`
3. Ensure CNAME file is in repository root

---

## 📊 Analytics Setup (Optional)

### Google Analytics
Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### Plausible Analytics (Privacy-Friendly)
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔄 Updating Your Portfolio

### Quick Content Updates
1. Edit `index.html` directly on GitHub
2. Click the **pencil icon** (Edit this file)
3. Make changes
4. Commit directly to main branch
5. Changes live in 1-2 minutes

### Adding New Case Studies
1. Find `<!-- Case Studies -->` section
2. Duplicate a `.case-card` div
3. Update:
   - Title
   - Description
   - Role/Impact/Scope metadata
   - Link (if applicable)
4. Save and commit

### Updating Contact Information
1. Find `<!-- Footer/Contact -->` section
2. Update email link
3. Update LinkedIn URL
4. Save and commit

---

## 🎯 Performance Optimization

Your portfolio is already optimized:
- ✅ Single HTML file (no external requests)
- ✅ Inline CSS (no render-blocking stylesheets)
- ✅ Inline JavaScript (no script loading delays)
- ✅ Hardware-accelerated animations
- ✅ Efficient CSS (custom properties, minimal specificity)

### Optional Enhancements
- Add `<link rel="preconnect">` for external resources if you add any
- Enable Cloudflare for CDN (if using custom domain)
- Add service worker for offline support

---

## 📝 Maintenance Schedule

### Monthly
- [ ] Check for broken links
- [ ] Test all themes
- [ ] Verify mobile functionality
- [ ] Review analytics (if added)

### Quarterly
- [ ] Update case studies
- [ ] Refresh project descriptions
- [ ] Update skills/tools
- [ ] Check browser compatibility

### Annually
- [ ] Major content refresh
- [ ] New projects/case studies
- [ ] Resume updates
- [ ] Design refinements

---

## 🎉 Success!

Your portfolio is now live! Share it:
- 📧 Email signature
- 💼 LinkedIn profile
- 🐦 Twitter/X bio
- 📄 Resume header
- 💬 Job applications

---

## 📞 Support

If you encounter issues:
1. Check GitHub Pages status: [githubstatus.com](https://www.githubstatus.com/)
2. Review GitHub Pages docs: [docs.github.com/pages](https://docs.github.com/pages)
3. Inspect browser console for errors (F12)

---

**Deployment Version:** 4.0  
**Last Updated:** December 7, 2025  
**Status:** ✅ PRODUCTION READY
