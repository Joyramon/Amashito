# Project memory

## Product intent & audience

- Site showcasing **chicharrones**, **telas enceradas** (wax cloth wraps), and **pasta de ajo** (artisanal garlic paste) — Mexican/Latin food product catalog or gallery.
- Audience: Spanish-speaking users; content written in Spanish.
- Product catalog includes distinct sizes of telas enceradas (10×10, 20×20, 40×30 cm) each associated with specific foods (limón, cilantro, papaya).
- Pasta de ajo products: "Pasta de Ajo Artesanal" and "Pasta de Ajo con Mantequilla y Chile Amashito" ($90 MXN per 220g jar).

## Brand personality & voice

- Spanish-language copy throughout; descriptive, appetizing, product-focused.
- Tone: vibrant, appealing, production-ready presentation of food-related items.

## Visual design & UX direction

- Product cards display a photo/illustration plus a distinctive custom SVG icon in the upper-right corner.
- Icons are custom SVG components (not Lucide), representing wrapped foods (tela with a fruit peeking out, chile shapes for chicharrones).
- Gallery includes a decorative row showing both tela encerada icons and chile icons together.
- Custom SVG illustrations embedded directly; no external image dependencies for icons.
- Card-based layout with consistent icon placement pattern across product types.
- Spicy products show a "Picor Intenso" badge and a 3-flame heat-level indicator.
- All products support add-to-cart interaction.
- Product images themselves are custom SVG illustrations (not stock photos) when exact visual representation is needed.
- Pasta de Ajo Artesanal: SVG tarro de vidrio con pasta dorada, especias, dientes de ajo visibles, lazo rojo en tapa.
- Pasta de Ajo con Mantequilla y Chile Amashito: SVG tarro de vidrio con pasta cremosa amarillenta, chiles amashito verdes visibles, lazo rojo.
- Tela Encerada 10×10 cm: SVG tela con diseños de flores (rosas y moradas con centros amarillos), hojas decorativas, esquinas dobladas simulando cera.

## Decisions, constraints & rationale

- Framework: Vite + React with Tailwind CSS, Lucide React icons, `@/` path alias.
- Custom SVG icons created inline rather than using Lucide for product-specific imagery.
- Custom SVG product illustrations created when stock photos don't match specific visual requirements.
- Each tela size gets its own photo and icon matching a specific food: limón (yellow), cilantro (green), papaya (orange).
- Icon placement mirrors existing chicharrón card pattern (upper-right corner) for visual consistency.
- Product categories used: chicharrones, telas enceradas, pasta de ajo.
- Pasta de ajo priced at $90 MXN / 220g jar, categorized under "Pasta de Ajo".

## Open questions & assumptions

- Assumes product images for chicharrones and other telas are sourced/available; exact image sourcing method unclear.
- No explicit color palette or typography decisions documented yet — inferred from implementation context only.
- Heat-level / picor badge system may need extension if more spicy products are added.