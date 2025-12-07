# Assets Folder - Image & Media Guidelines

This folder is where you'll place all images, screenshots, and media files for your portfolio.

---

## 📁 Recommended Folder Structure

```
assets/
├── images/
│   ├── headshot/
│   │   └── rebecca-gore.jpg
│   ├── case-studies/
│   │   ├── rds/
│   │   │   ├── rds-overview.jpg
│   │   │   ├── rds-components.jpg
│   │   │   └── rds-before-after.jpg
│   │   ├── dvs/
│   │   │   ├── dvs-dashboard.jpg
│   │   │   └── dvs-charts.jpg
│   │   ├── design-forum/
│   │   ├── unified-platform/
│   │   ├── ai-experience/
│   │   └── enablement/
│   └── logos/
│       ├── rapid7.svg
│       ├── alphawave.svg
│       └── kronologic.svg
└── videos/ (optional)
    └── project-demos/
```

---

## 🖼️ Image Guidelines

### Professional Headshot
**Location:** `assets/images/headshot/`  
**Filename:** `rebecca-gore.jpg` or `headshot.jpg`  
**Specs:**
- Size: 400x400px minimum (square)
- Format: JPG
- File size: <200KB
- Professional, high-quality photo
- Good lighting, clean background

**HTML Reference:**
```html
<img src="assets/images/headshot/rebecca-gore.jpg" 
     alt="Rebecca Gore, Design Systems Lead" 
     class="headshot">
```

---

### Case Study Screenshots

**Location:** `assets/images/case-studies/[project-name]/`

**Recommended per case study:**
1. **Hero Image** (1920x1080px)
   - Overview/hero shot of project
   - High-quality, polished
   - JPG format, <1MB

2. **Process Images** (3-5 images)
   - Wireframes
   - Design iterations
   - User research
   - PNG format (if contains text)

3. **Final Outcome Images** (3-5 images)
   - Finished product screenshots
   - UI details
   - Impact visualizations
   - JPG or PNG

**File Naming:**
```
✅ Good:
rds-component-library.jpg
dvs-dashboard-overview.png
design-forum-process.jpg

❌ Avoid:
IMG_1234.jpg
Screenshot 2024-12-06.png
Untitled.jpg
```

---

## 📏 Image Specifications

### Recommended Sizes

**Hero Images (case study headers):**
- Dimensions: 1920x1080px (16:9 ratio)
- Format: JPG
- Quality: 80-90%
- File size: 500KB - 1MB max

**Screenshot Images:**
- Width: 1200-1600px (scale to fit)
- Format: PNG (UI with text) or JPG (photos)
- Quality: 85-90%
- File size: 300-800KB each

**Thumbnail Images:**
- Dimensions: 800x600px
- Format: JPG
- Quality: 80%
- File size: <300KB

**Logo Images:**
- Format: SVG preferred (or PNG)
- Background: Transparent
- Size: Variable (SVG scales)
- File size: <50KB

---

## 🎨 Image Optimization

### Before Adding Images

**1. Resize Images:**
- Use Photoshop, Figma, or online tools
- Don't upload massive 4K screenshots
- Target: 1200-1600px width max

**2. Compress Images:**
- Use TinyPNG.com (free online tool)
- Or ImageOptim (Mac app)
- Or Squoosh.app (web-based)
- Target: 50-70% reduction without visible quality loss

**3. Choose Right Format:**
- **JPG:** Photos, screenshots with gradients
- **PNG:** Screenshots with text, transparency needed
- **SVG:** Logos, icons, simple graphics
- **WebP:** Modern format (best compression, not all browsers)

**4. Use Descriptive Alt Text:**
```html
✅ Good:
<img src="assets/images/rds/component-library.jpg" 
     alt="R7 Design System component library showing buttons, forms, and navigation elements">

❌ Bad:
<img src="IMG_1234.jpg" alt="screenshot">
```

---

## 📝 Updating HTML with Images

### Step 1: Add Images to Assets Folder
Upload your optimized images to appropriate subfolders

### Step 2: Update HTML File Paths

**Find placeholder images in HTML:**
```html
<img src="placeholder.jpg" alt="Project screenshot">
```

**Replace with your actual images:**
```html
<img src="assets/images/case-studies/rds/component-library.jpg" 
     alt="R7 Design System component library interface">
```

### Step 3: Test Image Loading
- Open HTML file in browser
- Verify all images load
- Check responsive behavior (resize window)

---

## 🖼️ Image Best Practices

### Accessibility
- ✅ Always include meaningful alt text
- ✅ Describe what's in the image
- ✅ Mention context if needed
- ❌ Don't use "image of" or "picture of"
- ❌ Don't leave alt text empty

**Examples:**
```html
✅ Good alt text:
<img alt="Dashboard showing data visualization charts and filtering options">
<img alt="Before and after comparison of navigation redesign">
<img alt="User research session with sticky notes on whiteboard">

❌ Bad alt text:
<img alt="image">
<img alt="">
<img alt="screenshot">
```

### Performance
- ✅ Optimize all images before upload
- ✅ Use appropriate formats
- ✅ Lazy load images (optional)
- ❌ Don't upload uncompressed images
- ❌ Don't use images larger than needed

### Organization
- ✅ Use clear folder structure
- ✅ Use descriptive filenames
- ✅ Group by project/section
- ❌ Don't dump everything in one folder
- ❌ Don't use generic names

---

## 🎯 Image Checklist

Before adding images to portfolio:

- [ ] Images resized to appropriate dimensions
- [ ] Images compressed (use TinyPNG)
- [ ] Images renamed with descriptive names
- [ ] Images organized in folders by project
- [ ] Alt text written for each image
- [ ] HTML updated with correct file paths
- [ ] Images tested in browser
- [ ] Mobile view checked
- [ ] File sizes reasonable (<1MB each)

---

## 📊 Image Inventory Template

Use this to track your portfolio images:

```
PROJECT: R7 Design System
└── Hero: rds-hero.jpg (1920x1080, 850KB)
└── Component Library: rds-components.png (1600x1200, 600KB)
└── Before/After: rds-comparison.jpg (1600x900, 550KB)
└── Impact Metrics: rds-metrics.png (1200x800, 400KB)

PROJECT: Data Visualization System
└── Hero: dvs-hero.jpg (1920x1080, 900KB)
└── Dashboard: dvs-dashboard.png (1600x1200, 650KB)
└── Charts: dvs-charts.png (1400x1000, 500KB)

HEADSHOT: rebecca-gore.jpg (400x400, 150KB)
```

---

## 🔧 Common Issues & Solutions

### Issue: Images Don't Load
**Check:**
1. File path spelling matches exactly
2. File extension correct (.jpg vs .JPG)
3. Images actually uploaded to server
4. No typos in HTML src attribute

### Issue: Images Too Large (Slow Loading)
**Solution:**
1. Compress at TinyPNG.com
2. Resize to smaller dimensions
3. Convert to WebP format (optional)
4. Use JPG instead of PNG for photos

### Issue: Images Look Pixelated
**Solution:**
1. Use higher resolution source images
2. Export at 2x size, then scale down
3. Use PNG for sharp text/UI
4. Check compression quality settings

### Issue: Images Not Responsive
**Solution:**
Add CSS:
```css
img {
    max-width: 100%;
    height: auto;
}
```

---

## 📚 Helpful Tools

### Image Editing:
- **Figma** (export frames as images)
- **Photoshop** (professional editing)
- **GIMP** (free alternative)
- **Canva** (simple edits)

### Image Compression:
- **TinyPNG.com** (PNG/JPG compression)
- **Squoosh.app** (multiple formats)
- **ImageOptim** (Mac app)
- **Compress JPEG** (Windows)

### Screenshot Tools:
- **macOS:** Cmd+Shift+4 (selection)
- **Windows:** Win+Shift+S (Snipping Tool)
- **Chrome DevTools:** Device toolbar for mockups
- **Cleanshot X** (Mac, advanced features)

### Mockup Creation:
- **Figma** (design tool mockups)
- **Sketch** (Mac only)
- **Mockup World** (free mockup templates)
- **Smartmockups** (online mockup generator)

---

## 🎨 Image Style Guidelines

### Consistency
- Use similar aspect ratios across projects
- Maintain consistent visual style
- Similar lighting/background approach
- Unified color treatment

### Quality Standards
- High resolution (retina displays)
- Sharp, clear images
- Good contrast
- Professional presentation

### Context
- Show real UI, not Lorem Ipsum
- Include realistic data when possible
- Demonstrate actual use cases
- Show impact/outcomes

---

## 🚀 Quick Start: Adding Your First Images

1. **Create folder structure:**
   ```bash
   mkdir -p assets/images/headshot
   mkdir -p assets/images/case-studies/rds
   ```

2. **Add your images:**
   - Drag images into appropriate folders
   - Rename with descriptive names

3. **Optimize images:**
   - Visit TinyPNG.com
   - Upload and download compressed versions

4. **Update HTML:**
   ```html
   <img src="assets/images/case-studies/rds/component-library.jpg" 
        alt="Design system component library">
   ```

5. **Test:**
   - Open HTML in browser
   - Check all images load
   - Test responsive design

---

## 📞 Need Help?

**Can't find your images?**
- Check file paths match exactly
- Verify folder structure is correct
- Check browser console for errors (F12)

**Images look wrong?**
- Verify image dimensions
- Check compression quality
- Try different format (JPG vs PNG)

**Performance issues?**
- Compress images more
- Reduce image dimensions
- Consider lazy loading

---

**Remember:** Good images make your portfolio professional and engaging. Take time to properly prepare and optimize them!

---

*This folder is currently empty. Add your images following the guidelines above, then update the HTML files to reference them.*
