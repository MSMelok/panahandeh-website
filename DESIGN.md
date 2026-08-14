---
name: Imperial Harvest Heritage
colors:
  surface: '#fbf9fb'
  surface-dim: '#dbd9dc'
  surface-bright: '#fbf9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f5'
  surface-container: '#efedf0'
  surface-container-high: '#e9e7ea'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f2f0f3'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7c'
  primary: '#00030a'
  on-primary: '#ffffff'
  primary-container: '#0a1d37'
  on-primary-container: '#7586a5'
  inverse-primary: '#b6c7e9'
  secondary: '#7a5900'
  on-secondary: '#ffffff'
  secondary-container: '#fece68'
  on-secondary-container: '#765600'
  tertiary: '#000201'
  on-tertiary: '#ffffff'
  tertiary-container: '#002213'
  on-tertiary-container: '#678d76'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b6c7e9'
  on-primary-fixed: '#081c36'
  on-primary-fixed-variant: '#364763'
  secondary-fixed: '#ffdea1'
  secondary-fixed-dim: '#efc05c'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5c4200'
  tertiary-fixed: '#c3ecd1'
  tertiary-fixed-dim: '#a7d0b6'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#2a4e3a'
  background: '#fbf9fb'
  on-background: '#1b1b1e'
  surface-variant: '#e4e2e4'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style

The brand identity is rooted in **Modern Classicism**, blending a prestigious, established heritage with contemporary digital precision. It targets high-end B2B partners and discerning consumers who value global sourcing and uncompromising quality in food products. 

The aesthetic is characterized by a sophisticated interplay of deep jewel tones and metallic accents. It utilizes a **Corporate / Modern** framework elevated by **Tactile** flourishes—referencing premium packaging textures and the physical richness of raw ingredients. The UI should evoke a sense of trust, authority, and "old-world" craftsmanship through spacious layouts, high-contrast serif typography, and rich, atmospheric photography.

## Colors

The palette is anchored by **Midnight Navy** (Primary), symbolizing stability and global authority. **Satin Gold** (Secondary) is used exclusively for highlights, iconography, and interactive accents to denote premium status. 

**Forest Green** and **Deep Burgundy** serve as functional accents to categorize product lines (e.g., grains vs. spices). The background should predominantly use a warm **Off-White/Cream** rather than pure white to maintain a tactile, parchment-like quality. Text is set in a near-black for maximum legibility and gravitas.

## Typography

The typographic system relies on a high-contrast pairing. **Playfair Display** provides an editorial, authoritative voice for all headlines and brand statements. It should be used with generous leading to allow the characters to breathe.

**Montserrat** provides a clean, geometric counterbalance for all functional text, body copy, and UI labels. Use wide letter-spacing for uppercase labels to reinforce the premium, "architectural" feel of the brand. For mobile, headline sizes are slightly reduced to maintain visual hierarchy without overwhelming the smaller viewport.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to ensure content remains centered and prestigious, reminiscent of high-end lifestyle magazines. A 12-column system is used for desktop, transitioning to 8 columns for tablet and 4 for mobile.

Spacing should be generous ("airy"). Use large vertical margins between sections (80px+) to distinguish different narrative blocks. Elements should favor asymmetrical alignments in editorial sections to create visual interest, while product grids remain strictly symmetrical and ordered.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** rather than aggressive shadows. Surfaces use subtle shifts from the cream base to pure white or very light gold tints to indicate depth.

Where elevation is required for interactivity (like cards or dropdowns), use **Ambient Shadows** that are extremely diffused (Blur: 30px+, Opacity: 5-8%) with a slight navy tint to maintain color harmony. High-priority interactive elements should use **Low-contrast outlines** in Satin Gold to define boundaries without breaking the flat, elegant aesthetic.

## Shapes

The shape language is primarily **Soft (Level 1)**. Rectilinear shapes with very small corner radii (4px) communicate precision and corporate stability. 

Circular shapes are reserved for high-level brand elements like seal-style logos, profile avatars, or product category chips. Buttons and input fields should remain strictly rectangular or subtly softened to maintain the "traditional" feel of the brand identity.

## Components

**Buttons:** 
- Primary: Solid Midnight Navy with Gold text or Gold icon. Rectangular with 4px radius.
- Secondary: Outline in Gold or Navy with uppercase Montserrat labels.
- Hover states should involve a subtle shift in background luminosity rather than a color change.

**Cards:** 
- Use a "Framed" approach. A thin 1px border in a muted gold or light grey. 
- Images within cards should have a slight zoom-in effect on hover to emphasize the quality of the food photography.

**Input Fields:** 
- Minimalist bottom-border only or very light grey full borders. 
- Labels should always be visible (never just placeholders) in uppercase Montserrat.

**Chips/Tags:** 
- Used for product origins or certifications. 
- Pill-shaped but with low-saturation backgrounds (Forest Green or Burgundy) and white text.

**Navigation:** 
- Sticky header with a transparent background that transitions to a solid Cream or Navy on scroll. 
- Use a center-aligned logo to reinforce the symmetrical, established brand feel.