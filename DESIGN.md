```markdown
# Design System Document: The Algorithmic Ledger

## 1. Overview & Creative North Star
**Creative North Star: "The Algorithmic Ledger"**

This design system is built to bridge the gap between high-stakes quantitative analysis and bespoke editorial design. In the world of Quantitative Finance, trust is built through precision, while distinction is earned through sophistication. We are moving away from the "SaaS-template" look. Instead, we are creating a digital experience that feels like a high-end, limited-edition financial journal.

The design breaks traditional grids through **intentional asymmetry**—offsetting headings and utilizing generous white space to guide the eye. We favor "The Precision of the Void," where the space between elements is as meaningful as the data itself. Elements should feel layered, like a physical desk where technical charts meet heavy-stock stationery.

---

## 2. Colors
Our palette is a study in high-contrast authority and technical focus.

*   **Primary Elements:** Use `primary` (#010a27) for text and `primary_container` (#16213e) for hero sections or deep-background cards. This deep navy provides the "weight" of a legacy institution.
*   **The Accents:** `secondary` (#745a27) evokes the heritage of gold leaf, while `tertiary_fixed_dim` (#00e639) provides the "Terminal Green" technical edge required for data visualization.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. Standard dividers are prohibited. 
Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` (#f3f3f3) section should sit directly against a `surface` (#f9f9f9) background. The eye should perceive the change in tone, not a drawn line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface tiers to create depth:
1.  **Base:** `surface` (#f9f9f9) - The canvas.
2.  **Sectioning:** `surface_container_low` (#f3f3f3) - For secondary content areas.
3.  **Emphasis Cards:** `surface_container_lowest` (#ffffff) - To make specific data points "pop" against the off-white base.

### Signature Textures
To add "soul," apply subtle linear gradients to `primary_container` elements. Transition from `primary` to `primary_container` at a 135-degree angle to give deep navy surfaces a sense of metallic sheen rather than flat plastic.

---

## 3. Typography
The typography system is an intentional friction between the "Humanist Narrative" and "Machine Logic."

*   **Display & Headlines (Noto Serif):** These are your editorial anchors. Use `display-lg` and `headline-lg` for biographical or philosophical headers. The serif font represents the "Quant" as a thinker.
*   **Body (Inter):** Clean, invisible, and highly legible. Use for all long-form descriptions.
*   **Labels & Data (Space Grotesk):** This is where the "Terminal" feel lives. Use `label-md` for all technical metadata, chart labels, and small UI actions. Its geometric nature signals mathematical precision.

**Hierarchy Note:** Always pair a `headline-sm` (Serif) with a `label-sm` (Mono) prefix in `secondary` (Gold) to create a "Documented Record" feel.

---

## 4. Elevation & Depth
In this system, depth is conveyed through **Tonal Layering**, not shadows.

*   **The Layering Principle:** Stack `surface_container` tiers. A `surface_container_highest` card should never sit on a `surface` background; it must transition through at least one intermediary tone (e.g., `surface` -> `surface_container_low` -> `surface_container_highest`).
*   **Ambient Shadows:** If an element must float (e.g., a modal or a floating action), use a shadow with a 32px blur and 4% opacity. The shadow color should be a tinted navy (`#010a27` at 4% alpha), never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use `outline_variant` at **15% opacity**. This creates a "suggestion" of a box rather than a cage.
*   **Glassmorphism:** Use `surface_container_lowest` with a 70% opacity and a `20px` backdrop-blur for navigation bars. This allows the sophisticated "Grid Line" motifs in the background to bleed through, maintaining a sense of architectural continuity.

---

## 5. Components

### Cards & Lists
*   **Forbid dividers.** To separate list items, use 24px of vertical white space or a subtle hover state shift to `surface_container_high`.
*   **The "Data Motif" Card:** Incorporate faint 1px `outline_variant` grid lines (at 10% opacity) as a background pattern inside cards to mimic graph paper.

### Buttons
*   **Primary:** `primary` background with `on_primary` text. Use `md` (0.375rem) roundedness. No icons unless they are "Terminal" style arrows (e.g., `→`).
*   **Secondary:** `surface_container_highest` background with `primary` text.
*   **Ghost:** No background, `secondary` (Gold) text, `label-md` (Space Grotesk) font.

### Chips
*   **Technical Chips:** Use `tertiary_container` with `on_tertiary_container` (Terminal Green) for "Live" statuses or "Active" algorithms. Keep roundedness at `sm` (0.125rem) to maintain a technical, sharp-edged look.

### Input Fields
*   **Styling:** Remove all borders except for a 2px bottom-bar in `outline_variant`. On focus, transition the bottom-bar to `secondary` (Gold). Labels must always be in `label-sm` (Space Grotesk).

### Signature Component: The "Ticker Header"
A thin bar (32px height) using `primary_container` that runs at the very top of sections, displaying metadata or "Running Code" motifs in `tertiary_fixed_dim` using the `label-sm` scale.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Margins:** Let the left margin be wider than the right to create an editorial, "notebook" feel.
*   **Embrace High Contrast:** Pair the deepest navy with the lightest white to suggest clarity of thought.
*   **Treat Space as a Tool:** If a section feels crowded, do not add a border. Add 40px of white space.

### Don't:
*   **No Rounded Corners over 12px:** We avoid "bubbly" UI. Stay within the `sm` to `lg` range of the roundedness scale. `full` is only for status dots.
*   **No Generic Icons:** Avoid "Home," "User," or "Settings" icons. Use text labels in `Space Grotesk` or bespoke SVG paths that look like mathematical symbols.
*   **No Pure Black:** Always use `primary` (#010a27) for your "black" values to keep the palette sophisticated and "ink-like."
*   **No Dividers:** If you feel the urge to draw a line, change the background color of the next section by 2% instead.