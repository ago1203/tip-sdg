# 🎯 Quick Start: Adding Images (No Renaming Required!)

## Your Current Setup ✅

Your images are **already working**! Here's what you have:

```
public/contents/
├── 1.1.1/
│   ├── ccvc df.png          ← Shows as Image 1
│   ├── dfsdsfv.png          ← Shows as Image 2
│   ├── sdfvs s ee.png       ← Shows as Image 3
│   └── sdfvsfdvsdf.png      ← Not shown (imageCount is 3)
├── 1.1.2/
│   ├── ccvc df.png          ← Shows as Image 1
│   ├── dfsdsfv.png          ← Shows as Image 2
│   ├── sdfvs s ee.png       ← Not shown (imageCount is 2)
│   └── sdfvsfdvsdf.png      ← Not shown (imageCount is 2)
└── 1.2.1/
    ├── ccvc df.png          ← Shows as Image 1
    ├── sdfvs s ee.png       ← Shows as Image 2
    └── sdfvsfdvsdf.png      ← Not shown (imageCount is 2)
```

## How to Add More Images

### Example: Adding images for indicator "sdg-2-1-1"

1. **Convert the ID:**
   - Indicator ID: `sdg-2-1-1`
   - Folder name: `2.1.1` (remove "sdg-", replace "-" with ".")

2. **Create the folder:**
   ```
   public/contents/2.1.1/
   ```

3. **Drop your images (any names!):**
   ```
   public/contents/2.1.1/
   ├── my vacation photo.jpg
   ├── IMG_5432.png
   └── screenshot 2025.jpeg
   ```

4. **Done!** The system automatically detects them in alphabetical order.

## 📋 Complete Folder List You'll Need

Based on your data, create these folders and add images:

### SDG 1 - No Poverty
- ✅ `1.1.1/` (needs 3 images) - **Already done!**
- ✅ `1.1.2/` (needs 2 images) - **Already done!**
- ✅ `1.2.1/` (needs 2 images) - **Already done!**
- ⚠️ `1.2.2/` (needs 3 images) - **TODO**

### SDG 2 - Zero Hunger
- ⚠️ `2.1.1/` (needs 3 images) - **TODO**
- ⚠️ `2.1.2/` (needs 2 images) - **TODO**
- ⚠️ `2.2.1/` (needs 2 images) - **TODO**
- ⚠️ `2.2.2/` (needs 3 images) - **TODO**

### SDG 3 - Good Health
- ⚠️ `3.1.1/` (needs 3 images) - **TODO**
- ⚠️ `3.1.2/` (needs 2 images) - **TODO**
- ⚠️ `3.2.1/` (needs 2 images) - **TODO**
- ⚠️ `3.2.2/` (needs 3 images) - **TODO**

### SDG 4 - Quality Education
- ⚠️ `4.1.1/` (needs 3 images) - **TODO**
- ⚠️ `4.1.2/` (needs 2 images) - **TODO**
- ⚠️ `4.2.1/` (needs 2 images) - **TODO**
- ⚠️ `4.2.2/` (needs 3 images) - **TODO**

### SDG 5 - Gender Equality
- ⚠️ `5.1.1/` (needs 3 images) - **TODO**
- ⚠️ `5.1.2/` (needs 2 images) - **TODO**
- ⚠️ `5.2.1/` (needs 2 images) - **TODO**
- ⚠️ `5.2.2/` (needs 3 images) - **TODO**

### SDG 6 - Clean Water
- ⚠️ `6.1.1/` (needs 3 images) - **TODO**
- ⚠️ `6.1.2/` (needs 2 images) - **TODO**
- ⚠️ `6.2.1/` (needs 3 images) - **TODO**
- ⚠️ `6.2.2/` (needs 2 images) - **TODO**

*...continue for SDG 7-17*

## 💡 Tips

- **Any filename works** - no need to rename!
- **Alphabetical order** - images display in alphabetical order by filename
- **Supported formats:** PNG, JPG, JPEG, WebP, GIF
- **Missing images?** Placeholder will show with folder name
- **Too many images?** Only the first N images (based on imageCount) will display

## 🚀 That's It!

Just drop images in folders - the system handles everything automatically!
