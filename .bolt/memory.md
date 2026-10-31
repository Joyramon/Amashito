# Project memory

## Product intent & audience

- Site showcasing **chicharrones**, **telas enceradas** (wax cloth wraps), and **pasta de ajo** (artisanal garlic paste) — Mexican/Latin food product catalog or gallery.
- Audience: Spanish-speaking users; content written in Spanish.
- Product catalog includes distinct sizes of telas enceradas (10×10, 20×20, 40×30 cm) each associated with specific foods (limón, cilantro, papaya).
- Pasta de ajo products: "Pasta de Ajo Artesanal" and "Pasta de Ajo con Mantequilla y Chile Amashito" ($90 MXN per 220g jar).

## Brand personality & voice

- Spanish-language copy throughout; descriptive, appetizing, product-focused.
- Tone: vibrant, appealing, production-ready presentation of food-related items.
- User prefers realistic representations showing what products truly look like.

## Visual design & UX direction

- Product cards display a photo plus a distinctive custom SVG icon in the upper-right corner.
- Icons are custom SVG components (not Lucide), representing wrapped foods (tela with a fruit peeking out, chile shapes for chicharrones).
- Gallery includes a decorative row showing both tela encerada icons and chile icons together.
- Custom SVG illustrations embedded directly; no external image dependencies for icons.
- Card-based layout with consistent icon placement pattern across product types.
- Spicy products show a "Picor Intenso" badge and a 3-flame heat-level indicator.
- All products support add-to-cart interaction.
- **Product images: real photos preferred over custom SVG illustrations.** User explicitly requested realistic figures showing what products truly are.
- Pasta de Ajo Artesanal: real photo of glass jar with preserved garlic.
- Pasta de Ajo con Mantequilla y Chile Amashito: real photo of glass jar with chiles and garlic.
- Tela Encerada 10×10 cm: real photo of reusable cloth wrap with watermelon and fruit around.
- Custom SVG product illustrations deprecated in favor of real photos.

## Decisions, constraints & rationale

- Framework: Vite + React with Tailwind CSS, Lucide React icons, `@/` path alias.
- Custom SVG icons retained for product-specific iconography (upper-right corner badges).
- Real photos used for product images instead of custom SVG illustrations — user wanted realism.
- Each tela size gets its own photo and icon matching a specific food: limón (yellow), cilantro (green), papaya (orange).
- Icon placement mirrors chicharrón card pattern (upper-right corner) for visual consistency.
- Product categories used: chicharrones, telas enceradas, pasta de ajo.
- Pasta de ajo priced at $90 MXN / 220g jar, categorized under "Pasta de Ajo".
- Unused SVG illustration components cleaned up after switching to real photos.

## Open questions & assumptions

- Assumes real product photos are sourced externally (URLs or uploaded assets); exact sourcing method unclear.
- No explicit color palette or typography decisions documented yet — inferred from implementation context only.
- Heat-level / picor badge system may need extension if more spicy products are added.
- Image sourcing strategy for remaining telas (20×20, 40×30) and chicharrones not yet confirmed.