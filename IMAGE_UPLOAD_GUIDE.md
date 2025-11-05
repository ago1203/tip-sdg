# Image Upload Guide for SDG Goals

## 🎉 Automatic Image Loading System

Your images are **automatically detected** - no renaming required! Just drop them in the right folder.

### Folder Structure

```
public/
├── contents/
│   ├── 1.1.1/          <- Indicator "sdg-1-1-1"
│   │   ├── any-name-1.png
│   │   ├── photo.jpg
│   │   └── whatever.jpeg
│   ├── 1.1.2/          <- Indicator "sdg-1-1-2"
│   │   ├── my-image.png
│   │   └── another-pic.jpg
│   ├── 1.2.1/          <- Indicator "sdg-1-2-1"
│   │   ├── file1.png
│   │   ├── file2.png
│   │   └── file3.webp
│   └── ... (continue for all indicators)
```

## ✨ How to Add Images (Super Easy!)

### Step 1: Find the Indicator ID
Each indicator in your data has an ID like `"sdg-1-1-1"`, `"sdg-2-1-1"`, etc.

### Step 2: Convert ID to Folder Name
- Remove `"sdg-"` prefix
- Replace hyphens with dots
- Example: `"sdg-1-1-1"` → folder name: `"1.1.1"`

### Step 3: Just Drop Your Images!
1. Navigate to `/public/contents/`
2. Create a folder with the converted name (e.g., `1.1.1`)
3. Drop ANY images with ANY filenames - they'll be automatically detected!
   - ✅ `my photo.png`
   - ✅ `IMG_1234.jpg`
   - ✅ `screenshot.jpeg`
   - ✅ `whatever name you want.webp`

**No renaming needed!** The system automatically finds all images in the folder.

### Step 4: Match Image Count
Just make sure the number of images matches the `imageCount` in your data.

For example, if indicator `"sdg-1-1-1"` has `imageCount: 3`, just put any 3 images in the folder:
- `/public/contents/1.1.1/first-pic.png`
- `/public/contents/1.1.1/second-photo.jpg`
- `/public/contents/1.1.1/third-image.jpeg`

## Example Mapping

| Indicator ID | imageCount | Folder Path | Required Images |
|-------------|-----------|-------------|----------------|
| `sdg-1-1-1` | 3 | `/public/contents/1.1.1/` | image-1.png, image-2.png, image-3.png |
| `sdg-1-1-2` | 2 | `/public/contents/1.1.2/` | image-1.png, image-2.png |
| `sdg-2-1-1` | 3 | `/public/contents/2.1.1/` | image-1.png, image-2.png, image-3.png |

## Supported Image Formats
- PNG (.png)
- JPEG (.jpg, .jpeg)
- WebP (.webp)
- GIF (.gif)

## What You Currently Have

You currently have images in:
- ✅ `1.1.1/` - 4 images (data says imageCount: 3, will show first 3)
- ✅ `1.1.2/` - 4 images (data says imageCount: 2, will show first 2)
- ✅ `1.2.1/` - 3 images (data says imageCount: 2, will show first 2)

## No Action Required! ✨

Your existing images will work automatically! The system will:
- ✅ Automatically detect all images in each folder
- ✅ Display them in alphabetical order
- ✅ Show the number specified by `imageCount`

Your current images are already working:
- `1.1.1/ccvc df.png` ✅
- `1.1.1/dfsdsfv.png` ✅
- `1.1.1/sdfvs s ee.png` ✅
- `1.1.2/ccvc df.png` ✅
- `1.1.2/dfsdsfv.png` ✅
- `1.2.1/ccvc df.png` ✅
- `1.2.1/sdfvs s ee.png` ✅

## Complete List of Folders Needed

Based on your current data (SDG 1-6 only shown, you have up to SDG 17), you'll need:

```
1.1.1/ (3 images)
1.1.2/ (2 images)
1.2.1/ (2 images)
1.2.2/ (3 images)
2.1.1/ (3 images)
2.1.2/ (2 images)
2.2.1/ (2 images)
2.2.2/ (3 images)
3.1.1/ (3 images)
3.1.2/ (2 images)
3.2.1/ (2 images)
3.2.2/ (3 images)
... (continue for all 17 SDGs)
```

## Tips

1. **Use consistent naming**: Always use `image-1`, `image-2`, etc.
2. **Optimize images**: Compress images to reduce load times
3. **Use appropriate dimensions**: Recommended size is 450x300px (aspect ratio 3:2)
4. **Fallback display**: If an image is missing, a placeholder will show instead
