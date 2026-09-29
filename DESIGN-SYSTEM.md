# Design System — Atelier OS

## Design intelligence source
UI UX Pro Max reviewed for new-project design-system guidance, accessibility, interaction sizing, consistent iconography and style consistency.
Reference: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

## Product pattern
Premium B2B SaaS / CRM / scheduling dashboard for beauty and grooming businesses.

## Visual style
“Quiet Luxury Operations”: editorial restraint, high information quality, hospitality warmth, low-noise finance-software precision.

## Colors
Primary: `#181816`
Secondary: `#726E65`
Accent: `#B79A68`
Background: `#F5F2EC`
Surface: `#FFFDF9`
Text: `#181816`
Muted: `#726E65`
Success: `#47745F`
Warning: `#A97742`
Danger: `#A65C50`

## Typography
Heading: Geist/system sans, tight tracking.
Body: Geist/system sans.
Numeric/data: tabular numerals.
Scale: 11/12/14/16/20/24/32/40.

## Spacing
4px base grid. Page gutters: 16px mobile / 24–28px desktop.

## Radius
Controls 12px; panels 20–24px; pills fully rounded.

## Shadows
Low-opacity broad shadows. Avoid stacked heavy shadows and fake 3D effects.

## Icons
Lucide only in foundation. SVG icons; no emoji functional controls.

## Component strategy
1. Existing local component.
2. shadcn/Radix primitive where behavior/accessibility is useful.
3. Astryx component/template when it fits stack and visual direction.
4. Custom component when product-specific behavior or visual system justifies it.

The visual layer is never left at library defaults.

## Tables and dense data
Desktop retains tabular alignment. Mobile converts rows into semantic cards rather than squeezing columns.

## Forms
44px+ interactive height where practical, explicit labels, visible focus, inline validation.

## Navigation
Dark left rail on desktop; compact bottom navigation on mobile. Active state is unmistakable without relying only on color.

## Charts
Minimal gridlines, direct labels when possible, contextual deltas. No chart without a business question.

## Responsive breakpoints
Mobile-first CSS; primary adaptation around 768px and 1024px.

## Accessibility
- keyboard navigation
- visible focus
- semantic controls
- minimum contrast targets
- reduced motion support
- no meaning by color alone
- resilient text wrapping
- icon buttons receive accessible labels

## Anti-patterns to avoid
- default shadcn visual identity
- decorative glass everywhere
- excessive gradients
- huge empty KPI cards
- hover-only functionality
- tiny click targets
- meaningless animation
- fake AI labels
- metrics without source of truth

## Reference screenshots / URLs
See `docs/REFERENCES.md`.
