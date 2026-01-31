# Google Slides Setup Instructions

## How to Update Presentation Links

The contributions page uses Google Slides links for better user experience. Here's how to set them up:

### Step 1: Upload to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload each `.pptx` file
3. Double-click each file to open in Google Slides

### Step 2: Set Sharing
1. Click "Share" button in Google Slides
2. Change access to "Anyone with the link can view"
3. Copy the sharing link

### Step 3: Update Links in Code
1. Open `src/pages/contributions.tsx`
2. Find the presentation you want to update
3. Replace `https://docs.google.com/presentation/d/YOUR_FILE_ID/edit?usp=sharing` with your actual Google Slides link

### Example:
```typescript
{
  title: 'Investigating Lumma Stealer Malware',
  // ... other fields
  slides: 'https://docs.google.com/presentation/d/1abc123def456/edit?usp=sharing', // Real Google Slides link
}
```

### Benefits of Google Slides:
- ✅ Professional online preview
- ✅ Works perfectly on mobile
- ✅ Users can download if they want
- ✅ No large files in repository
- ✅ Native sharing and collaboration features

### Files to Upload:
- bsides2025-macOS IR.pptx
- barcampmm2025-Not_So_Boring SOC.pptx  
- NDSS2025-presentation.pptx
- bsides2024-Investigating Lumma Stealer Malware.pptx
- bsides2023-Applied Machine Learning In CyberSecurity.pptx
- cybergon2022.pptx
- bsides2020-Building An Open-Source SOC Platform.pptx
- awsugmm2020-AWSUGMM_Cloud Security.pptx