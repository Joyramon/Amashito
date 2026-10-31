# Project memory

## Product intent & audience

- Site showcasing **chicharrones** and **telas enceradas** (wax cloth wraps), likely a Mexican/Latin food-adjacent product catalog or gallery.
- Audience: Spanish-speaking users; content written in Spanish.
- Product catalog includes distinct sizes of telas enceradas (10×10, 20×20, 40×30 cm) each associated with specific foods (limón, cilantro, papaya).

## Brand personality & voice

- Spanish-language copy throughout; descriptive, appetizing, product-focused.
- Tone: vibrant, appealing, production-ready presentation of food-related items.

## Visual design & UX direction

- Product cards display a photo plus a distinctive custom SVG icon in the upper-right corner.
- Icons are custom SVG components (not Lucide), representing wrapped foods (tela with a fruit peeking out, chile shapes for chicharrones).
- Gallery includes a decorative row showing both tela encerada icons and chile icons together.
- Custom SVG illustrations embedded directly; no external image dependencies for icons.
- Card-based layout with consistent icon placement pattern across product types.

## Decisions, constraints & rationale

- Framework: Vite + React with Tailwind CSS, Lucide React icons, `@/` path alias.
- Custom SVG icons created inline rather than using Lucide for product-specific imagery (tela encerada wrapping food).
- Each tela size gets its own photo and icon matching a specific food: limón (yellow), cilantro (green), papaya (orange).
- Product descriptions updated to mention the specific foods each size can wrap.
- Icon placement mirrors existing chicharrón card pattern (upper-right corner) for visual consistency.

## Open questions & assumptions

- Assumes the project already had chicharrón cards with chile icons that this pattern follows.
- Assumes product images are sourced/available; exact image sourcing method unclear.
- No explicit color palette or typography decisions documented yet — inferred from implementation context only.