# Knead To Know Website Asset System

Premium branded website asset package for **Knead To Know**, a boutique small-batch home bakery established in **2026** on **Daniel Island, South Carolina**.

This package is intended for use while rebuilding the Knead To Know website from the **Spilled Milk site skeleton**. Treat the Spilled Milk site as the structural reference only: layout rhythm, page hierarchy, section order, spacing logic, menu/product flow, and customer journey. Do **not** copy Spilled Milk branding, copywriting, photos, logos, colors, or proprietary content.

## Brand Source of Truth

Use the approved circular **Knead To Know** logo supplied by Skyler as the master brand reference. These PNG assets were generated to match that logo direction: bright white, coastal blue, refined serif typography, subtle wheat/botanical details, and clean boutique spacing.

Primary brand feel:

- Premium home bakery
- Refined coastal Lowcountry identity
- Clean white website theme
- Soft blue and black accents
- Handcrafted, local, warm, but professional
- Boutique/elevated rather than rustic or generic

## Color Tokens

| Token                   |       Hex | Usage                                                    |
| ----------------------- | --------: | -------------------------------------------------------- |
| Bright White            | `#FFFFFF` | Primary background, cards, form surfaces                 |
| Lowcountry Coastal Blue | `#4F7EA8` | Main CTA, borders, logo accents, dividers                |
| Soft Harbor Blue        | `#7FA7C7` | Secondary CTA, subtle accents, hover states              |
| Soft Black              | `#111111` | Body text, headings, footer text                         |
| Deep Navy Accent        | `#1F3447` | Optional premium contrast for footer, overlays, emphasis |

## File Manifest

|   # | File                                                       | Asset                    | Recommended Use                                                            |
| --: | ---------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------- |
|  01 | `assets/png/01_Primary_Button_Knead_To_Know.png`           | Primary Button           | Main conversion action: Shop Now, Order Now, View Menu                     |
|  02 | `assets/png/02_Secondary_Button_Knead_To_Know.png`         | Secondary Button         | Secondary conversion action: Custom Orders, Seasonal Menu                  |
|  03 | `assets/png/03_Outline_Button_Knead_To_Know.png`           | Outline Button           | Low-friction action: Learn More, About, Details                            |
|  04 | `assets/png/04_Container_Card_Knead_To_Know.png`           | Container Card           | Branded intro block, homepage brand proof, about section                   |
|  05 | `assets/png/05_Feature_Card_Knead_To_Know.png`             | Feature Card             | Small-batch process, quality claims, local bakery values                   |
|  06 | `assets/png/06_Product_Card_Knead_To_Know.png`             | Product Card             | Featured product, menu card, seasonal item, bakery shop section            |
|  07 | `assets/png/07_Testimonial_Card_Knead_To_Know.png`         | Testimonial Card         | Social proof, customer reviews, homepage trust section                     |
|  08 | `assets/png/08_Contact_Form_Input_Field_Knead_To_Know.png` | Contact Form Input Field | Visual reference for form styling; rebuild input fields in code            |
|  09 | `assets/png/09_Icon_Set_Knead_To_Know.png`                 | Icon Set                 | Bakery/process/contact/local icons; crop/export individual icons if needed |
|  10 | `assets/png/10_Section_Divider_Knead_To_Know.png`          | Section Divider          | Decorative horizontal divider between homepage/content sections            |

## Instructions for Grok

Use this package as the visual asset system while adapting the Spilled Milk skeleton into the Knead To Know website.

### Build Direction

1. Keep the overall website bright white and clean.
2. Use the approved Knead To Know circular logo as the primary logo.
3. Replace all Spilled Milk brand elements with Knead To Know branding.
4. Use these PNGs as the design reference for the site’s component language.
5. Build the site as a refined boutique bakery website, not a generic bakery template.
6. Maintain generous spacing, minimal decoration, elegant borders, and subtle coastal blue accents.

### Page/Section Guidance

Recommended homepage order:

1. Hero section with logo, premium headline, short subheadline, and primary CTA.
2. Featured products or seasonal bakery items.
3. Small-batch/process section using the feature card language.
4. Custom orders section.
5. Testimonials/social proof.
6. About Daniel Island / local bakery identity.
7. Contact/order inquiry form.
8. Footer with logo, contact, socials, and location.

### Do Not Use

- Cartoon bakery graphics
- Loud colors
- Heavy gradients
- Fake paper texture
- Cluttered cards
- Generic clip-art
- Overly rustic farmhouse styling
- Dark, moody bakery theme

## Instructions for Codex

Codex should integrate these assets cleanly into the local project and rebuild functional UI components in code where appropriate.

### Recommended Folder Placement

```txt
public/
  assets/
    knead-to-know/
      brand/
        knead-to-know-logo.png
      ui/
        01_Primary_Button_Knead_To_Know.png
        02_Secondary_Button_Knead_To_Know.png
        03_Outline_Button_Knead_To_Know.png
        04_Container_Card_Knead_To_Know.png
        05_Feature_Card_Knead_To_Know.png
        06_Product_Card_Knead_To_Know.png
        07_Testimonial_Card_Knead_To_Know.png
        08_Contact_Form_Input_Field_Knead_To_Know.png
        09_Icon_Set_Knead_To_Know.png
        10_Section_Divider_Knead_To_Know.png
```

### Implementation Rules

- Use the PNGs as visual references and decorative assets.
- Do **not** build important buttons only as images. Recreate primary, secondary, and outline buttons as accessible HTML/CSS components.
- Do **not** build form inputs only as images. Recreate input fields as real form controls.
- Use the card PNGs as either hero/section visuals or as component references for CSS card styling.
- Use `alt` text for every image asset.
- Keep assets compressed and lazy-loaded where appropriate.
- Use responsive layouts so cards do not break on mobile.

### Suggested CSS Tokens

```css
:root {
  --k2k-white: #ffffff;
  --k2k-blue: #4f7ea8;
  --k2k-harbor-blue: #7fa7c7;
  --k2k-black: #111111;
  --k2k-navy: #1f3447;
  --k2k-border: rgba(79, 126, 168, 0.35);
  --k2k-radius-lg: 28px;
  --k2k-radius-pill: 999px;
  --k2k-shadow-soft: 0 18px 45px rgba(17, 17, 17, 0.08);
}
```

### Suggested Button Implementation

```css
.k2k-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 52px;
  padding: 0 2rem;
  border-radius: var(--k2k-radius-pill);
  font-family: serif;
  font-size: 0.82rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  text-decoration: none;
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    border-color 180ms ease;
}

.k2k-button:hover {
  transform: translateY(-1px);
}

.k2k-button-primary {
  color: var(--k2k-white);
  background: var(--k2k-blue);
  border: 1px solid var(--k2k-blue);
}

.k2k-button-secondary {
  color: var(--k2k-white);
  background: var(--k2k-harbor-blue);
  border: 1px solid var(--k2k-harbor-blue);
}

.k2k-button-outline {
  color: var(--k2k-blue);
  background: transparent;
  border: 1px solid var(--k2k-blue);
}
```

### Skeleton Conversion Checklist

Use this checklist when converting the Spilled Milk skeleton:

- [ ] Replace brand name everywhere with `Knead To Know`.
- [ ] Replace logo with the approved Knead To Know logo.
- [ ] Replace colors with the Knead To Know palette.
- [ ] Replace product/menu content with bakery-specific copy.
- [ ] Replace imagery with Knead To Know product/brand imagery.
- [ ] Replace all CTA language with Knead To Know ordering flow.
- [ ] Rebuild buttons and forms as real accessible components.
- [ ] Keep cards white, bordered, minimal, and premium.
- [ ] Add Daniel Island, SC location cues where appropriate.
- [ ] Verify mobile layout, image optimization, and Lighthouse performance.

## Asset Use Policy

These assets are for the Knead To Know website, packaging, social media, and digital brand presence. Keep the visual system cohesive. Avoid mixing in unrelated colors, fonts, icons, or generic bakery graphics unless they are redesigned to match this exact blue/white boutique identity.
