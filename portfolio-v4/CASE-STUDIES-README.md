# Case Studies - Navigation Structure

## 📄 Included Case Study Files

Your portfolio includes 6 complete case study pages:

1. **case-study-rds.html** - R7 Design System & MUI Migration
2. **case-study-dvs.html** - Data Visualization System
3. **case-study-design-forum.html** - Design Forum Standards
4. **case-study-unified-platform.html** - Unified Platform Patterns
5. **case-study-ai-experience.html** - AI Experience Standard
6. **case-study-enablement.html** - Designer Enablement Program

---

## 🎨 Navigation Design

### Current Structure (Simplified)
Case study pages use a **simplified navigation** for:
- **Faster loading** - Focused content experience
- **Minimal distraction** - Emphasizes case study content
- **Easy navigation** - Simple "Back to Portfolio" link

```html
<header>
    <a href="index.html">Rebecca Gore</a>
    <a href="index.html#work">Back to Portfolio</a>
</header>
```

### Why Simplified?
1. **Content Focus** - Readers came to learn about the project
2. **Performance** - Lighter page weight, faster loading
3. **Print-Friendly** - Better for PDF exports
4. **Professional** - Clean, distraction-free presentation

---

## ⚙️ Optional: Add Theme Switcher to Case Studies

If you want the full glassmorphic theme switcher on case study pages:

### Quick Method (Recommended)
1. Open `index.html` in a text editor
2. Copy everything between `<!-- Theme System CSS -->` and `/* Hamburger Menu */`
3. Paste into each case study's `<style>` section
4. Copy the theme switcher HTML from `index.html` navigation
5. Replace the simple header in each case study
6. Copy the theme JavaScript from bottom of `index.html`
7. Paste before `</body>` in each case study

### What You'll Get
✅ Auto/Light/Dark/Contrast themes  
✅ Glassmorphic segmented control  
✅ Responsive dropdown  
✅ Mobile nav overlay  

### Trade-offs
- ⚠️ Larger file size (+30KB per page)
- ⚠️ More complexity
- ⚠️ Additional testing needed

---

## 🔗 Updating Case Study Links

### In index.html
Case study cards link to case study pages:
```html
<!-- This line in index.html -->
<a href="case-study-rds.html" class="case-card__link">
```

### In Case Study Pages
Back link returns to portfolio:
```html
<!-- This line in case studies -->
<a href="index.html#work" class="back-link">Back to Portfolio</a>
```

**Important:** Ensure href matches your file structure:
- Same folder: `case-study-rds.html`
- Subfolder: `pages/case-study-rds.html`
- Update both directions (to and from)

---

## 📁 Recommended Folder Structure

### Option 1: Flat (Default)
```
portfolio/
├── index.html
├── case-study-rds.html
├── case-study-dvs.html
├── case-study-design-forum.html
├── case-study-unified-platform.html
├── case-study-ai-experience.html
└── case-study-enablement.html
```
**Pros:** Simple, all files together  
**Cons:** Root gets crowded

### Option 2: Organized
```
portfolio/
├── index.html
└── case-studies/
    ├── rds.html
    ├── dvs.html
    ├── design-forum.html
    ├── unified-platform.html
    ├── ai-experience.html
    └── enablement.html
```
**Pros:** Clean organization  
**Cons:** Must update all links

**If you reorganize:**
1. Update links in `index.html`:  
   `href="case-studies/rds.html"`
2. Update back links in case studies:  
   `href="../index.html#work"`

---

## ✏️ Updating Case Study Content

### Text Content
All content is inline in each HTML file:
- Hero title/description
- Problem statement
- Solution details
- Impact metrics
- Process steps

### Images (When You Add Them)
```html
<!-- Add images to case studies -->
<img src="images/rds-before-after.png" alt="Description">
```

Create an `images/` folder:
```
portfolio/
├── index.html
├── case-study-rds.html
└── images/
    ├── rds-before-after.png
    ├── dvs-dashboard.png
    └── ...
```

---

## 🎯 SEO Optimization

Each case study has meta tags:
```html
<title>R7 Design System & MUI Migration – Rebecca Gore</title>
<meta name="description" content="Case study: Scaling a unified...">
```

**Update these:**
1. Page title - Appears in browser tab
2. Meta description - Shows in search results
3. Keep under 60 chars (title) and 155 chars (description)

---

## ✅ Testing Case Studies

After uploading to GitHub:

### Navigation
- [ ] Click case study card on index.html
- [ ] Case study page loads
- [ ] Click "Back to Portfolio"
- [ ] Returns to index.html #work section
- [ ] All 6 case studies load correctly

### Content
- [ ] Title displays correctly
- [ ] All text readable
- [ ] Sections properly formatted
- [ ] No broken links
- [ ] Consistent styling

### Responsive
- [ ] Desktop view clean
- [ ] Tablet view readable
- [ ] Mobile view functional
- [ ] Text doesn't overflow

---

## 🚀 Deployment Notes

### All Files Upload Together
When you upload to GitHub:
1. Upload `index.html` (required)
2. Upload all 6 `case-study-*.html` files
3. Create `images/` folder if you have images
4. Links will work automatically

### GitHub Pages URLs
- Portfolio: `username.github.io/portfolio/`
- Case study: `username.github.io/portfolio/case-study-rds.html`

### Custom Domain
If using custom domain (yourdomain.com):
- Portfolio: `yourdomain.com/`
- Case study: `yourdomain.com/case-study-rds.html`

---

## 📊 File Sizes

| File | Size | Purpose |
|------|------|---------|
| case-study-rds.html | 40 KB | Design System case |
| case-study-dvs.html | 34 KB | Data Viz case |
| case-study-design-forum.html | 22 KB | Standards case |
| case-study-unified-platform.html | 36 KB | Platform UX case |
| case-study-ai-experience.html | 42 KB | AI principles case |
| case-study-enablement.html | 41 KB | Enablement program |

**Total:** ~215 KB for all case studies

---

## 💡 Pro Tips

### Keep It Simple
- Case studies load faster with minimal JS
- Readers focus on content, not interface
- Print-friendly for PDF exports

### Consistent Updates
- Update index.html cards when you update case studies
- Keep URLs consistent
- Test navigation both directions

### Future Enhancements
- Add process images/diagrams
- Include before/after screenshots
- Embed videos or prototypes
- Add testimonials/quotes

---

## 🎉 Ready to Go

Your case studies are:
- ✅ Complete with full content
- ✅ Professionally formatted
- ✅ Ready to deploy
- ✅ SEO optimized
- ✅ Print-friendly
- ✅ Mobile responsive

**Just upload to GitHub and they work!**

---

**Note:** The simplified navigation is intentional and professional. If you want the full theme switcher, follow the "Optional" section above.
