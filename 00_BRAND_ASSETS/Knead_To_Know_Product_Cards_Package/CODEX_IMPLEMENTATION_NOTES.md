# Codex Implementation Notes

## Suggested Asset Path

Copy the product card PNGs into:

```text
/public/assets/knead-to-know/product-cards/
```

## Suggested Website Mapping

Use these assets in:

- Homepage featured products
- Menu page product grid
- Category sections
- Pre-order page product selection
- Seasonal specials area, if needed

## Suggested Component Names

```text
ProductCard
ProductGrid
MenuSection
FeaturedProductCard
PreOrderProductSelector
```

## Suggested Category Keys

```ts
const categories = {
  sourdoughBread: "Sourdough Bread",
  sourdoughCookies: "Sourdough Cookies",
  sourdoughBagels: "Sourdough Bagels",
};
```

## Suggested Product Data Shape

```ts
type Product = {
  id: string;
  name: string;
  category: "sourdoughBread" | "sourdoughCookies" | "sourdoughBagels";
  price: string;
  cardAsset: string;
  photoAsset?: string;
  description?: string;
  cta: "Pre-Order";
};
```

## Implementation Guidance

- Preserve PNG transparency.
- Use a bright white page background.
- Keep high whitespace around product grids.
- Use serif typography where aligned with the brand.
- Do not distort card proportions.
- Do not crop decorative borders.
- Render product photos inside the transparent product-image frame area.
- Compress assets for web after layout approval.
- Add alt text for accessibility.
- Keep product name, price, category, and CTA consistent with the manifest.
- Do not flatten assets onto dark, colored, textured, or gradient backgrounds.
- Avoid generic ecommerce cards, app-style cards, Shopify-template styling, and startup/SaaS aesthetics.

## Layout Notes

Recommended product-card display behavior:

```css
.product-card {
  width: min(100%, 420px);
  aspect-ratio: auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}
```

If compositing product photos underneath the PNG overlay, use a wrapper with the product photo positioned inside the transparent frame area and the card PNG above it. Validate positioning at desktop, tablet, and mobile breakpoints.

## QA Checklist For Codex

- Product-card files load from `/public/assets/knead-to-know/product-cards/`.
- All 16 products appear in the correct category.
- Product names and prices match the manifest.
- Product photos do not cover decorative borders or text.
- PNG transparency is preserved.
- Layout remains bright white, clean, premium, and high-whitespace.
- Mobile product grid is readable and not cramped.
- Images have descriptive alt text.
- Assets are compressed only after layout approval.
