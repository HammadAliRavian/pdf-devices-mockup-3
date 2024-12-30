# PDFDevices Documentation

## Table of Contents

1. [Overview](#overview)
2. [Brand Identity](#brand-identity)
3. [Design System](#design-system)
4. [Components](#components)
5. [Pages](#pages)
6. [Technical Architecture](#technical-architecture)
7. [Performance Optimizations](#performance-optimizations)

## Overview

PDFDevices is a professional PDF manipulation platform that offers various tools for working with PDF files. The platform is built with modern web technologies focusing on user experience, accessibility, and performance.

### Core Features

- PDF Merging & Editing
- PDF Compression
- Format Conversion (To/From PDF)
- PDF Security Tools
- API Access

## Brand Identity

### Color Palette

#### Primary Colors

- Primary-600 (`#2563EB`): Main brand color
  - Represents trust, professionalism, and reliability
  - Used for primary CTAs and important UI elements
  - High contrast ratio ensures accessibility
- Primary-500 (`#3B82F6`): Secondary brand color
  - Softer variant for hover states and gradients
  - Creates depth in UI elements

#### Secondary Colors

- Gray Scale
  - Gray-900 (`#111827`): Primary text
  - Gray-700 (`#374151`): Secondary text
  - Gray-600 (`#4B5563`): Tertiary text
  - Gray-100 (`#F3F4F6`): Borders and dividers
  - Gray-50 (`#F9FAFB`): Background variations

### Typography

- Font Family: Inter (Google Fonts)
  - Clean and modern sans-serif
  - Excellent readability across devices
  - Professional appearance

Font Sizes:

- Text-xs: 0.75rem (12px) - Small labels, badges
- Text-sm: 0.875rem (14px) - Secondary text
- Text-base: 1rem (16px) - Body text
- Text-lg: 1.125rem (18px) - Subtitles
- Text-xl: 1.25rem (20px) - Section headers
- Text-2xl: 1.5rem (24px) - Main headers

## Design System

### Components

#### Navigation

The navbar implements a three-section layout:

1. Left: Logo and branding
2. Center: Main navigation links
3. Right: Authentication actions

Design choices:

- Fixed position for constant accessibility
- Subtle backdrop blur on scroll
- Responsive mobile menu
- Smooth transitions and animations

#### Footer

Four-column layout with:

- Company information and social links
- PDF Tools directory
- Popular tools section
- Resources and documentation
- Newsletter subscription
- Legal links and copyright

#### Buttons

Three variants:

1. Primary: Solid background with hover effects
   ```css
   bg-primary-600 hover:bg-primary-700
   ```
2. Secondary: Outlined with hover background
   ```css
   border-primary-600 hover:bg-primary-50
   ```
3. Tertiary: Text-only with hover underline
   ```css
   text-primary-600 hover:underline
   ```

### Layout System

Grid System:

- Mobile: Single column
- Tablet: 2 columns
- Desktop: 4 columns
- Maximum width: 1152px (72rem)

Spacing Scale:

- 4px (0.25rem): Minimal spacing
- 8px (0.5rem): Tight spacing
- 16px (1rem): Standard spacing
- 24px (1.5rem): Section spacing
- 32px (2rem): Large spacing
- 48px (3rem): Extra large spacing

## Technical Architecture

### Framework

- Next.js 14 (App Router)
- React 18
- TailwindCSS

### Key Libraries

- Framer Motion: Animations
- React Icons: Icon system
- Next/Image: Image optimization

### Performance Features

1. Image Optimization

   - Automatic WebP conversion
   - Lazy loading
   - Proper sizing

2. Code Splitting

   - Component-level splitting
   - Route-based splitting
   - Dynamic imports

3. Caching Strategy
   - Static page caching
   - API response caching
   - Asset caching

## Accessibility Features

1. Semantic HTML

   - Proper heading hierarchy
   - ARIA labels
   - Role attributes

2. Keyboard Navigation

   - Focus indicators
   - Tab order
   - Skip links

3. Color Contrast
   - WCAG 2.1 AA compliant
   - Tested color combinations
   - High contrast mode support

## Development Guidelines

### Code Style

- Functional components
- Custom hooks for logic
- Component composition
- Prop type validation

### File Structure

```
├── app/
│   ├── layout.js
│   ├── page.js
│   └── tools/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── public/
│   └── Icons/
└── styles/
    └── globals.css
```

### Assets Organization

#### Public Directory Structure

```
public/
└── Icons/
    ├── PDFSecurity/
    │   ├── UnlockPDF.svg
    │   └── ProtectPDF.svg
    ├── PDFSecurity.svg
    └── ConvertFromPDF/
        ├── PDFToZIP.svg
        ├── PDFToTXT.svg
        ├── PDFToPpt.svg
        ├── PDFToWord.svg
        └── PDFToTIFF.svg
```

#### Icon System

Our icon system is organized by functionality and conversion types:

1. PDF Security Icons

   - `UnlockPDF.svg`: Used for PDF unlocking features
   - `ProtectPDF.svg`: Used for PDF protection features
   - `PDFSecurity.svg`: General security operations icon

2. PDF Conversion Icons
   - `PDFToWord.svg`: Word document conversion
   - `PDFToPpt.svg`: PowerPoint presentation conversion
   - `PDFToTXT.svg`: Text file conversion
   - `PDFToTIFF.svg`: TIFF image conversion
   - `PDFToZIP.svg`: ZIP archive conversion

#### Icon Design Guidelines

1. Style Consistency

   - Stroke width: 1.5px
   - Corner radius: 4px
   - Padding: 2px from bounds
   - Color: Inherits from parent (currentColor)

2. Size Specifications

   - Default: 24x24px
   - Touch targets: 40x40px minimum
   - Viewbox: 0 0 24 24

3. Implementation

   ```jsx
   <Image
     src="/Icons/PDFSecurity/ProtectPDF.svg"
     alt="Protect PDF"
     width={24}
     height={24}
     className="text-primary-600"
   />
   ```

4. Accessibility
   - All icons include meaningful alt text
   - Decorative icons use aria-hidden="true"
   - Interactive icons have proper ARIA labels

#### Asset Optimization

1. SVG Optimization

   - Minified using SVGO
   - Removed unnecessary attributes
   - Simplified paths
   - Consistent formatting

2. Loading Strategy

   - Icons are preloaded for critical paths
   - Lazy loaded for below-the-fold content
   - Cached aggressively

3. Performance Considerations
   - All SVGs are optimized for size
   - Inline critical icons
   - Use sprite sheets for frequently used icons

#### Usage Guidelines

1. Icon Placement

   - Left of labels in buttons
   - Right of labels in links
   - Centered when standalone
   - 8px spacing from text

2. Responsive Behavior

   ```css
   .icon {
     @apply w-5 h-5 sm:w-6 sm:h-6;
     @apply transition-transform duration-200;
   }
   ```

3. Interactive States

   ```css
   .icon-button:hover .icon {
     @apply transform scale-110;
   }
   ```

4. Color Inheritance
   ```css
   .icon {
     @apply text-gray-600 hover:text-primary-600;
   }
   ```

#### Maintenance

1. Adding New Icons

   - Follow naming convention: ActionName.svg
   - Optimize before adding
   - Update documentation
   - Test in all themes

2. Version Control

   - Track icon changes in commits
   - Document breaking changes
   - Maintain backwards compatibility

3. Quality Checks
   - Visual consistency
   - Accessibility compliance
   - Performance impact
   - Cross-browser testing
