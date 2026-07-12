---
name: Ethereal Union
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#474741'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#787770'
  outline-variant: '#c8c7be'
  surface-tint: '#5f5e5a'
  primary: '#5f5e5a'
  on-primary: '#ffffff'
  primary-container: '#f9f6f0'
  on-primary-container: '#72706c'
  inverse-primary: '#c9c6c1'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#4c6455'
  on-tertiary: '#ffffff'
  tertiary-container: '#e2fdea'
  on-tertiary-container: '#5d7667'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2dc'
  primary-fixed-dim: '#c9c6c1'
  on-primary-fixed: '#1c1c18'
  on-primary-fixed-variant: '#474743'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#cee9d6'
  tertiary-fixed-dim: '#b2cdbb'
  on-tertiary-fixed: '#082014'
  on-tertiary-fixed-variant: '#344c3e'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is centered on the concepts of timeless elegance, romantic intimacy, and modern sophistication. It targets couples seeking a premium digital experience that mirrors the tactility of high-end stationery. The emotional response should be one of serenity, celebration, and "quiet luxury."

The visual style is **Minimalist with a Tactile twist**. It utilizes generous whitespace (the "airy" feel) to allow content to breathe, while incorporating delicate botanical motifs and soft-focus background textures to evoke the feeling of handmade paper. Motion should be fluid and intentional, utilizing "fade-in" and "staggered-slide" transitions to mimic the unfolding of a physical invitation.

## Colors
The palette is rooted in organic, sophisticated tones that evoke a natural yet polished wedding aesthetic.

*   **Primary (Ivory):** `#F9F6F0` — Used as the main background surface to provide a warmer, more premium feel than pure white.
*   **Secondary (Champagne Gold):** `#D4AF37` — Reserved for interactive elements, borders, and decorative typography. It signifies value and celebration.
*   **Tertiary (Sage Green):** `#8FA998` — Used for secondary accents, botanical icons, and success states, providing a grounded, natural contrast.
*   **Accent (Blush Pink):** `#F4E1E1` — Used sparingly for soft highlights, hover states on light surfaces, or romantic call-outs.
*   **Neutral (Charcoal):** `#4A4A4A` — Used for body text to ensure high legibility without the harshness of pure black.

## Typography
The typographic scale emphasizes a hierarchy between the "expressive" serif and the "functional" sans-serif. 

**Playfair Display** is the voice of the event, used for names, dates, and section headings. It should be typeset with slightly tighter tracking for larger sizes to maintain a modern editorial look. 

**Plus Jakarta Sans** provides a clean, contemporary counterpoint for all informational text. Its soft curves complement the romantic theme while ensuring maximum readability for logistics like venue addresses and RSVP instructions. The `label-caps` style is specifically designed for small navigational cues or dates above headlines to provide a structured, "documented" feel.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to mimic the centered, formal composition of a printed invitation. On mobile, it transitions to a single-column fluid layout with generous vertical padding.

Key layout principles:
*   **Verticality:** High emphasis on "scrolling as storytelling." Use large `section-gap` units to separate the Story, the Schedule, and the RSVP.
*   **Negative Space:** Avoid packing information. Elements should occupy roughly 60% of the horizontal container width on desktop to maintain the "airy" aesthetic.
*   **Alignment:** Headings are primarily center-aligned to evoke formality, while long-form body text (like the "Our Story" section) may be left-aligned for better readability.

## Elevation & Depth
Depth is achieved through **Tonal Layers** rather than heavy shadows. The system uses subtle shifts in background color (e.g., Ivory to a very light Sage) to define different content blocks.

Where elevation is required for interactive elements:
*   **Soft Shadows:** Use ultra-diffused shadows with very low opacity (5-8%) and a slight Sage or Champagne tint (e.g., `rgba(143, 169, 152, 0.1)`) to avoid a "UI-heavy" feel.
*   **Floating Elements:** RSVP cards and image galleries use a slight upward "lift" on hover to indicate interactability.
*   **Inner Glows:** Buttons utilize a subtle inner highlight to mimic the shimmer of metallic foil stamping.

## Shapes
Shapes in this design system are soft and welcoming. 
*   **Cards:** Use the `rounded-lg` (16px) or `rounded-xl` (24px) values to create a gentle, organic container.
*   **Buttons:** Standardized at `rounded-lg` to feel modern yet approachable—avoiding the aggressive sharpness of square corners or the overly casual look of full pills.
*   **Imagery:** Wedding photography should utilize the same rounding or occasionally "Arch" shapes (rounded top, flat bottom) to reinforce the botanical and architectural elegance.

## Components
Consistent styling across the invitation ensures a cohesive "stationery" experience.

*   **Buttons:** Primary buttons use a Champagne Gold background with White or Ivory text. Secondary buttons are "ghost" style with a thin Sage Green border and a soft Blush Pink hover state.
*   **Cards:** White or very light Blush surfaces with a 1px border in Gold or a slightly darker Ivory. No heavy borders; let the soft shadow define the edge.
*   **Input Fields:** Minimalist design for RSVP. Use a simple bottom-border only (like a signature line) that glows Sage Green when focused. Labels should use the `label-caps` typography style.
*   **Chips/Tags:** Used for guest dietary requirements or event tags (e.g., "Reception", "Ceremony"). These should be semi-transparent Sage Green with dark neutral text.
*   **RSVP Form:** A dedicated, centered card component. It should feel like a formal document, using the serif font for the "Accept/Decline" radio buttons.
*   **Floral Accents:** Not a standard component, but botanical SVG ornaments should be used as dividers (replacing standard horizontal rules) between major content sections.