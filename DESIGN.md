---
name: Obsidian Logic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#fcf8f8'
  on-tertiary: '#313030'
  tertiary-container: '#dfdcdb'
  on-tertiary-container: '#616060'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '450'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  grid-margin: 24px
  grid-gutter: 16px
---

## Brand & Style
The design system is engineered for the high-performance developer environment of agentchecker. The brand personality is clinical, efficient, and technically rigorous. It targets developers and AI engineers who value speed, precision, and low-latency feedback.

The aesthetic follows a **Terminal-Inspired Minimalism**. It combines the austerity of a command-line interface with the sophisticated layering of modern SaaS. Expect high-contrast text against deep obsidian voids, punctuated by "active" states that mimic glowing phosphor monitors. Visual interest is generated through structural geometry and data-rich visualizations rather than decorative imagery.

## Colors
The palette is rooted in a "True Dark" philosophy to reduce eye strain and maximize the impact of functional color.

- **Primary (#00ff41):** The "Terminal Green." Reserved for success states, active processes, and primary call-to-actions. It should feel like a light source.
- **Secondary (#3b82f6):** The "Electric Blue." Used for information, hyperlinks, and secondary technical highlights.
- **Neutral/Background (#0a0a0a):** The core canvas.
- **Surface (#111111):** Used for elevated containers like code blocks and cards to create subtle depth without breaking the dark aesthetic.
- **Borders (#262626):** Low-contrast hair-lines that define structure without visual noise.

## Typography
The typography system uses a dual-axis approach. **Geist** provides a clean, Swiss-inspired grotesque feel for marketing copy and UI controls, ensuring legibility and a modern SaaS feel. **JetBrains Mono** is utilized for all technical data, code snippets, and metadata labels to reinforce the "built for builders" narrative.

Large displays should use tight letter spacing to feel "locked-in" and engineered. All monospaced labels should be treated with intentionality, often paired with subtle background shifts to denote status or categories.

## Layout & Spacing
This design system utilizes a **Rigid Grid Scale** based on a 4px baseline. The layout is structured on a 12-column fluid grid for desktop and a 4-column grid for mobile.

To evoke the terminal aesthetic, use "Technical Margins"—visible grid lines or subtle background patterns (dot matrix or 32px square grids) in `#161616`. Sections should be clearly delineated by horizontal rules (`1px solid #262626`) rather than large gaps of white space, creating a dense, information-rich environment.

## Elevation & Depth
Elevation is achieved through **Tonal Layering** and **Luminous Accents** rather than traditional drop shadows.

- **Level 0:** Base background (`#0a0a0a`).
- **Level 1:** Containers (`#111111`) with a `1px` border of `#262626`.
- **Level 2:** Hover states or active modals. Instead of shadows, use a primary-colored "glow" (outer glow: `0 0 15px rgba(0, 255, 65, 0.15)`).
- **Depth:** Use backdrop-filters (blur: 8px) on navigation bars and overlays to maintain context while keeping the interface feeling lightweight.

## Shapes
The shape language is **Precision-Focused**. While not entirely sharp-edged, the roundedness is kept minimal to maintain a professional, hardware-like feel.

- **Small elements (Buttons, Inputs):** 4px radius.
- **Large elements (Cards, Code Blocks):** 8px radius.
- **Status Indicators:** Use perfect circles or square-block "LED" styles.

## Components
- **Buttons:** Primary buttons use a solid `#00ff41` background with black text. Secondary buttons use a ghost style (transparent background, `#262626` border) with white text.
- **Code Blocks:** Use `#111111` background. Include a top "window bar" with three subtle dots and the file name in JetBrains Mono.
- **Inputs:** Dark backgrounds (`#050505`) with a `1px` border. On focus, the border transitions to Primary Green with a subtle outer glow.
- **Chips/Status:** Use the label-caps typography. Success chips should have a subtle green border and a 4px green dot.
- **Terminal Viewports:** A specialized component for the landing page that simulates a live agent run, using monospaced text and a blinking cursor (`#00ff41`).
- **Grid Background:** A persistent but subtle CSS background grid of 32px squares using `#161616` lines.