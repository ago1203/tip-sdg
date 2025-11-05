# SDG Individual Pages Guide

## Overview
The application now features individual pages for each SDG and their indicators with PDF viewing capabilities.

## Page Structure

### 1. Home Page (`/`)
- Displays a grid of all 17 SDGs
- Each SDG card links to its individual page
- Includes the "Institutional Commitment" section
- Features the sidebar navigation

### 2. Individual SDG Pages (`/sdg/[id]`)
**Route Examples:**
- `/sdg/1` - No Poverty
- `/sdg/6` - Clean Water and Sanitation
- `/sdg/17` - Partnerships for the Goals

**Features:**
- Full SDG information with all targets and indicators
- Links to view PDFs for indicators that have them
- Sidebar navigation for easy access to other SDGs
- Breadcrumb navigation
- Footer with T.I.P. logo

### 3. Indicator PDF Pages (`/sdg/[id]/[indicatorId]`)
**Route Examples:**
- `/sdg/6/sdg-6-1-1` - Water publications
- `/sdg/6/sdg-6-1-2` - Water consumption tracking
- `/sdg/17/sdg-17-1-1` - Relationships with NGOs

**Features:**
- Embedded PDF viewer showing Google Drive documents
- Page header with SDG context
- Breadcrumb navigation (Home → SDG → Indicator)
- Sidebar navigation
- Alternative link to open PDF in Google Drive if embed fails
- Loading and error states

## Components

### PDF Viewer Component (`components/pdf-viewer.tsx`)
**Props:**
- `pdfUrl`: Google Drive sharing link
- `title`: PDF document title

**Features:**
- Automatically converts Google Drive sharing links to embedded preview URLs
- Displays loading spinner while PDF loads
- Shows error message if PDF fails to load
- Provides "Open in New Tab" button
- Responsive iframe with minimum height

**URL Conversion:**
```
Input:  https://drive.google.com/file/d/FILE_ID/view?usp=sharing
Output: https://drive.google.com/file/d/FILE_ID/preview
```

### Updated Sidebar Component (`components/side-bar.tsx`)
**Features:**
- Context-aware navigation (different behavior on home vs. SDG pages)
- Links to individual SDG pages
- Expandable sections showing indicators with PDFs
- Direct links to indicator PDF pages
- Resizable sidebar

## Data Structure

Each SDG can have:
1. **Targets** - Major goals (e.g., "6.3 Water usage and care")
2. **Indicators** - Specific metrics (e.g., "6.3.1 Wastewater treatment")

Both targets and indicators can have:
- `title`: Display name
- `link`: Google Drive PDF URL
- `description`: Text description

## Navigation Flow

```
Home (/)
  ↓
SDG Page (/sdg/1)
  ↓
Indicator PDF Page (/sdg/1/sdg-1-1-1)
```

Users can:
1. Browse all SDGs on the home page
2. Click an SDG to see its full details
3. Click "View PDF" buttons to see indicator PDFs
4. Use sidebar to navigate between SDGs
5. Use breadcrumbs to navigate back

## Adding New PDF Links

To add a PDF to an indicator in `data/sdg-data.ts`:

```typescript
{
  id: "sdg-6-1-1",
  title: "6.1.3 Clean Water and Sanitation: publications",
  link: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
  description: "Description text..."
}
```

The PDF will automatically:
- Appear as a "View PDF" button on the SDG page
- Create a dedicated page at `/sdg/6/sdg-6-1-1`
- Show in the sidebar under the SDG section

## Styling

**Color Scheme:**
- Primary: `#f6c445` (Gold/Yellow)
- Text: `#292929` (Dark Gray)
- Background: White
- Borders: Gray-200

**Responsive Design:**
- Mobile-first approach
- Grid layouts adjust for different screen sizes
- PDF viewer maintains minimum height on mobile
- Sidebar can be resized on desktop

## Error Handling

1. **Invalid SDG ID**: Shows "SDG Not Found" message
2. **Invalid Indicator ID**: Shows "Indicator Not Found" message
3. **PDF Load Failure**: Shows error message with link to Google Drive
4. **Missing PDF Link**: Indicator shown without PDF button

## Future Enhancements

Potential improvements:
- [ ] Add search functionality across SDGs
- [ ] Add filtering by target/indicator
- [ ] Implement PDF download functionality
- [ ] Add print-friendly views
- [ ] Add sharing buttons for social media
- [ ] Implement progress tracking for SDG completion
