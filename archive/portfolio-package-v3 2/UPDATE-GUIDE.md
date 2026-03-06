# Update Guide - Maintain & Enhance Your Portfolio

This guide shows you how to make common updates to your portfolio website.

---

## 📝 Table of Contents

1. [Quick Updates](#quick-updates)
2. [Content Updates](#content-updates)
3. [Adding Images](#adding-images)
4. [Styling Changes](#styling-changes)
5. [Adding New Case Studies](#adding-new-case-studies)
6. [Updating Resume](#updating-resume)
7. [Advanced Customization](#advanced-customization)
8. [Testing Your Changes](#testing-your-changes)

---

## 🚀 Quick Updates

### Update Your Contact Information

**Location:** `index.html` (bottom of file, in footer section)

```html
<!-- Find this section and update: -->
<div class="contact-info">
    <a href="mailto:becca.h.gore@gmail.com">
        becca.h.gore@gmail.com
    </a>
    <a href="https://linkedin.com/in/rebecca-havens-gore" target="_blank">
        LinkedIn →
    </a>
</div>
```

**What to change:**
- Email address
- LinkedIn URL

---

### Update Your Professional Title

**Location:** `index.html` (near top, in hero section)

```html
<!-- Find this: -->
<div class="hero-eyebrow">
    Design Systems Lead • Principal Product Designer • UX & AI Experience Architect
</div>

<!-- Update to your current title -->
```

---

### Update Your Bio/Summary

**Location:** `index.html` (about section)

```html
<!-- Find the about section: -->
<section id="about" class="section">
    <div class="container">
        <h2>About</h2>
        <p>Your bio text here...</p>
    </div>
</section>
```

**Tips:**
- Keep it concise (2-3 paragraphs)
- Focus on your unique value
- Include quantified achievements
- Use professional but conversational tone

---

## 📄 Content Updates

### Add a New Achievement

**Location:** Any case study HTML file

```html
<!-- Find the impact metrics section: -->
<div class="metric-grid">
    <div class="metric-card">
        <div class="metric-number">40%</div>
        <div class="metric-label">Faster Build Time</div>
    </div>
    <!-- Add your new metric here -->
</div>
```

**How to add:**
```html
<div class="metric-card">
    <div class="metric-number">85%</div>
    <div class="metric-label">User Satisfaction</div>
</div>
```

---

### Update Project Descriptions

**Location:** Each case study file

```html
<!-- Find the overview section: -->
<div class="case-study-overview">
    <p>Your project description here...</p>
</div>
```

**Best practices:**
- Lead with impact
- Include context (problem, solution, outcome)
- Use specific numbers
- Keep paragraphs short (3-4 sentences max)

---

### Update Skills & Percentages

**Location:** `index.html` (skills section)

```html
<!-- Find the skills list: -->
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">Design Systems</span>
        <span class="skill-percentage">95%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-fill" style="--skill-width: 95%;"></div>
    </div>
</div>
```

**To update:**
1. Change the skill name
2. Update the percentage number (appears twice)
3. Update `--skill-width` to match percentage

**To add new skill:**
Copy the entire `skill-item` block and modify values

---

## 🖼️ Adding Images

### Add Project Screenshots

1. **Create images folder:**
   ```
   website/
   ├── index.html
   ├── assets/
   │   └── images/
   │       ├── rds-screenshot.jpg
   │       ├── dvs-dashboard.png
   │       └── ...
   ```

2. **Update HTML:**
   ```html
   <!-- Find placeholder image tags: -->
   <img src="placeholder.jpg" alt="Description">
   
   <!-- Replace with: -->
   <img src="assets/images/your-image.jpg" alt="R7 Design System interface showing component library">
   ```

3. **Image best practices:**
   - Use descriptive filenames (not IMG_1234.jpg)
   - Always include meaningful alt text
   - Optimize images before uploading:
     - Use JPG for photos
     - Use PNG for screenshots with text
     - Compress at tinypng.com
     - Max width: 1200px
     - Target file size: <500KB each

---

### Add Professional Headshot

**Location:** `index.html` (about section)

```html
<!-- Add after the section title: -->
<div class="about-header">
    <img src="assets/images/headshot.jpg" 
         alt="Rebecca Gore, Design Systems Lead" 
         class="headshot">
</div>
```

**Then add CSS:**
```css
<style>
.headshot {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 2rem;
    display: block;
}
</style>
```

---

### Add Case Study Images

Each case study should have visual examples. Update the image sections:

```html
<!-- In any case study file, find: -->
<div class="case-study-images">
    <img src="assets/images/case-study-1.jpg" 
         alt="Before and after comparison">
    <img src="assets/images/case-study-2.jpg" 
         alt="Final design implementation">
</div>
```

---

## 🎨 Styling Changes

### Change Color Scheme

**Location:** `design-system/design-tokens.css`

```css
/* Find the color definitions: */
:root {
    --color-primary: #FF6B2B;  /* Main accent color */
    --color-gradient-1: #FF6B2B;
    --color-gradient-2: #FF8F59;
}
```

**To change:**
1. Pick your new color (use a color picker)
2. Update the hex codes
3. Test contrast at webaim.org/resources/contrastchecker

**Apply to HTML:**
Copy your updated CSS variables into the `<style>` section of each HTML file

---

### Change Typography

**Location:** Any HTML file's `<style>` section

```css
/* Find font declarations: */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

:root {
    --font-display: 'Playfair Display', serif;
    --font-body: 'IBM Plex Sans', sans-serif;
}
```

**To change fonts:**
1. Choose new fonts from Google Fonts
2. Update the @import URL
3. Update the font-family variables
4. Test readability across devices

---

### Adjust Spacing

**Location:** Design tokens or individual HTML `<style>` sections

```css
:root {
    --spacing-xs: 0.5rem;   /* 8px */
    --spacing-sm: 1rem;     /* 16px */
    --spacing-md: 1.5rem;   /* 24px */
    --spacing-lg: 2rem;     /* 32px */
    --spacing-xl: 3rem;     /* 48px */
}
```

**Common adjustments:**
- Increase section padding: change `--spacing-xl`
- Tighten content: reduce margins in section styles
- More whitespace: increase all spacing values by 25%

---

### Modify Animations

**Location:** Any HTML file's `<style>` section

**To slow down animations:**
```css
/* Find animation duration: */
animation: fadeInUp 0.6s ease-out;

/* Change to: */
animation: fadeInUp 1.2s ease-out; /* Double the time */
```

**To disable specific animation:**
```css
/* Find the element: */
.hero-title {
    animation: fadeInUp 0.6s ease-out;
}

/* Remove or comment out: */
.hero-title {
    /* animation: fadeInUp 0.6s ease-out; */
}
```

**To disable ALL animations** (accessibility):
Already included in code:
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

---

## ➕ Adding New Case Studies

### Step 1: Duplicate Existing File

```bash
# Copy an existing case study
cp case-study-rds.html case-study-new-project.html
```

### Step 2: Update Content

Open your new file and update:

1. **Page title** (in `<title>` tag)
2. **Project name** (hero section)
3. **Overview text**
4. **Impact metrics**
5. **Challenge, approach, outcome sections**
6. **Images**

### Step 3: Update Navigation

**In your new file:**
```html
<!-- Update previous/next links: -->
<a href="case-study-previous.html" class="nav-link">
    ← Previous
</a>
<a href="case-study-next.html" class="nav-link">
    Next →
</a>
```

### Step 4: Add to Homepage

**In `index.html`:**
```html
<!-- Add new case study card: -->
<div class="case-study-card" data-color="cyan">
    <div class="case-tag">NEW PROJECT</div>
    <h3>Your New Project Name</h3>
    <p>Brief description of the project and its impact.</p>
    <div class="case-stats">
        <div class="stat">
            <strong>50%</strong>
            <span>Key Metric</span>
        </div>
    </div>
    <a href="case-study-new-project.html" class="case-link">
        View Case Study →
    </a>
</div>
```

**Available colors:** orange, purple, cyan, magenta, amber

---

## 📋 Updating Resume

### Update Resume File

1. **Edit Word document:**
   - Open `resume/Rebecca_Gore_Resume.docx`
   - Make your changes
   - Save

2. **Update in portfolio:**
   - If you have resume download link in HTML
   - Update the file path
   - Or link to LinkedIn/PDF version

### Add Resume Download Link

**Location:** `index.html` (resume section)

```html
<a href="assets/Rebecca_Gore_Resume.pdf" 
   class="button" 
   download>
    Download Resume
</a>
```

---

## 🔧 Advanced Customization

### Add New Section to Homepage

```html
<!-- Add after existing sections: -->
<section id="testimonials" class="section">
    <div class="container">
        <h2>What People Say</h2>
        <div class="testimonial-grid">
            <blockquote>
                <p>"Quote text here..."</p>
                <cite>— Person Name, Title</cite>
            </blockquote>
        </div>
    </div>
</section>
```

**Add corresponding CSS:**
```css
.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

blockquote {
    background: var(--surface-1);
    padding: 2rem;
    border-radius: 12px;
    border-left: 4px solid var(--color-primary);
}
```

---

### Add Animation to New Element

1. **Choose from existing animations:**
   - fadeInUp
   - fadeInDown
   - slideInLeft
   - slideInRight
   - scaleIn
   - rotateIn
   - etc. (see animation-enhancements-guide.md)

2. **Apply to element:**
   ```css
   .your-element {
       animation: fadeInUp 0.6s ease-out;
   }
   ```

3. **Add delay for stagger effect:**
   ```css
   .item:nth-child(1) { animation-delay: 0.1s; }
   .item:nth-child(2) { animation-delay: 0.2s; }
   .item:nth-child(3) { animation-delay: 0.3s; }
   ```

---

### Customize Theme Colors

**Location:** Any HTML `<style>` section

```css
/* Light theme */
[data-theme="light"] {
    --bg-color: #FFFFFF;
    --text-color: #1A1A1A;
    --surface-1: #F5F5F5;
}

/* Dark theme */
[data-theme="dark"] {
    --bg-color: #0A0A0A;
    --text-color: #FFFFFF;
    --surface-1: #1A1A1A;
}

/* High contrast light */
[data-theme="high-contrast-light"] {
    --bg-color: #FFFFFF;
    --text-color: #000000;
    --surface-1: #E0E0E0;
}

/* High contrast dark */
[data-theme="high-contrast-dark"] {
    --bg-color: #000000;
    --text-color: #FFFFFF;
    --surface-1: #1A1A1A;
}
```

---

## ✅ Testing Your Changes

### Local Testing

1. **Open HTML file in browser**
   - Right-click file → Open with → Browser
   - Or drag file into browser window

2. **Test all functionality:**
   - Click all links
   - Toggle theme
   - Scroll through page
   - Resize window (responsive test)

3. **Check browser console:**
   - Press F12
   - Look for any errors (red text)
   - Fix errors before deploying

---

### Cross-Browser Testing

Test in multiple browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari (if on Mac)
- ✅ Edge

**Common issues:**
- Animations may work differently
- Fonts may render slightly different
- Some CSS properties not supported in older browsers

---

### Mobile Testing

1. **Browser DevTools:**
   - Press F12 → Click device toolbar
   - Test different screen sizes
   - Check touch targets (should be 44x44px min)

2. **Real device testing:**
   - Upload to server (see QUICK-START.md)
   - Visit on your phone
   - Test scrolling, tapping, navigation

---

### Accessibility Testing

1. **Keyboard navigation:**
   - Tab through entire page
   - Should see focus indicators
   - All interactive elements should be reachable

2. **Color contrast:**
   - Use WebAIM contrast checker
   - All text should pass WCAG AA (4.5:1 ratio)

3. **Screen reader:**
   - macOS: Enable VoiceOver (Cmd+F5)
   - Windows: Enable Narrator
   - Verify alt text is descriptive

---

## 🚀 Deploying Updates

### GitHub Pages

```bash
# In your repository:
git add .
git commit -m "Update case study content"
git push origin main

# Changes go live in 5-10 minutes
```

---

### Netlify

**Option 1: Manual**
1. Drag updated files to Netlify deploy area
2. Wait for deployment (30 seconds)

**Option 2: Git Integration**
1. Push changes to GitHub
2. Netlify auto-deploys

---

### Traditional Hosting

1. Use FTP/SFTP client (FileZilla, Cyberduck)
2. Upload changed files
3. Overwrite existing files
4. Changes are immediate

---

## 🐛 Common Issues & Fixes

### Issue: Changes don't appear

**Solution:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check you uploaded correct file
4. Verify file path is correct

---

### Issue: Layout breaks on mobile

**Solution:**
1. Check for fixed widths in CSS
2. Use percentages or max-width instead
3. Test with browser DevTools mobile view
4. Verify all images have max-width: 100%

---

### Issue: Images don't load

**Solution:**
1. Check file path spelling
2. Verify image file exists
3. Check file extensions (.jpg vs .JPG)
4. Ensure images are in correct folder

---

### Issue: Broken links

**Solution:**
1. Verify all files are in same directory
2. Check link spelling
3. Ensure file names match exactly
4. Use relative paths (not absolute)

---

## 📊 Version Control (Recommended)

### Using Git

**Initial setup:**
```bash
git init
git add .
git commit -m "Initial portfolio"
```

**Making updates:**
```bash
git add .
git commit -m "Update about section"
git push
```

**Benefits:**
- Track all changes
- Revert mistakes
- Collaborate with others
- Required for GitHub Pages

---

## 📝 Update Checklist

Before deploying changes:

- [ ] Test locally in browser
- [ ] Check all links work
- [ ] Verify images load
- [ ] Test responsive design
- [ ] Check color contrast
- [ ] Test keyboard navigation
- [ ] Clear browser cache and retest
- [ ] Test on mobile device
- [ ] Check for typos
- [ ] Verify contact info is current

---

## 🎯 Best Practices

1. **Make one change at a time**
   - Easier to debug if something breaks
   - Easier to track what worked

2. **Keep backups**
   - Save original files before editing
   - Use version control (Git)

3. **Test before deploying**
   - Always test locally first
   - Don't deploy broken code

4. **Document your changes**
   - Keep notes of what you changed
   - Helps future you remember

5. **Optimize performance**
   - Compress images
   - Minimize animations if needed
   - Test page load speed

---

## 🆘 Getting Help

**Resources:**
- MDN Web Docs (developer.mozilla.org)
- W3Schools (w3schools.com)
- CSS-Tricks (css-tricks.com)
- Stack Overflow (stackoverflow.com)

**Testing Tools:**
- WebAIM Contrast Checker (contrast ratio)
- Google PageSpeed Insights (performance)
- WAVE (accessibility)
- BrowserStack (cross-browser testing)

---

**Remember:** Your portfolio is never "done" - it should evolve as you grow. Keep it updated with your latest work and achievements!

**Happy updating! 🎉**
