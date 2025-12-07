# October Loop Japan - Trip Planning Website

A personal travel planning website for a 15-day Japan trip (October 1–15, 2026). Built with Astro, Tailwind CSS, and deployed via GitHub Pages.

**Live Site:** [japan2026.ushkalov.com](https://japan2026.ushkalov.com)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
japan-trip/
├── public/
│   └── images/           # Static images (hero, photos, etc.)
│       └── hero_shibuya.png
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Footer.astro
│   │   ├── JourneyCard.astro
│   │   ├── TimelineItem.astro
│   │   ├── HotelCard.astro
│   │   └── DetailHero.astro    # Hero for detail pages
│   ├── content/          # Markdown content (editable data)
│   │   ├── journey/      # The 4 "Acts" of the trip
│   │   ├── timeline/     # Day-by-day itinerary
│   │   ├── hotels/       # Accommodation options
│   │   └── config.ts     # Content schemas
│   ├── layouts/
│   │   ├── MainLayout.astro        # Home page layout
│   │   └── DetailPageLayout.astro  # Detail pages layout
│   └── pages/
│       ├── index.astro   # Main page
│       ├── tokyo.astro   # Tokyo detail page
│       ├── alps.astro    # Japanese Alps detail page
│       ├── kyoto.astro   # Kyoto detail page
│       ├── osaka.astro   # Osaka detail page
│       └── flights.astro # Flights detail page
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind theme & colors
└── package.json
```

---

## Adding New Detail Pages

Detail pages are standalone pages for deep research on specific destinations or topics.

### Create a new detail page

1. Create a new file in `src/pages/`, e.g., `src/pages/nara.astro`
2. Use the `DetailPageLayout` component:

```astro
---
import DetailPageLayout from '../layouts/DetailPageLayout.astro';
---

<DetailPageLayout 
  title="Day Trip to Nara"
  subtitle="Ancient capital with friendly deer and massive Buddha"
  heroImage="/images/nara_hero.jpg"
  actLabel="Day Trip"
>
  <!-- Your content sections go here -->
  <section class="detail-section section-reveal">
    <h2 class="detail-section-title">Highlights</h2>
    <div class="detail-card">
      <p>Your research notes here...</p>
    </div>
  </section>
</DetailPageLayout>
```

### Available layout props

| Prop | Required | Description |
|------|----------|-------------|
| `title` | Yes | Page title (shown in hero) |
| `subtitle` | No | Subtitle under title |
| `heroImage` | Yes | Path to hero background image |
| `actLabel` | No | Small label above title (e.g., "Act I", "Day Trip") |

### Available CSS classes for content

| Class | Description |
|-------|-------------|
| `detail-section` | Main content section with spacing |
| `section-reveal` | Adds fade-in animation on scroll |
| `detail-section-title` | Section heading with accent bar |
| `detail-subsection` | Subsection with smaller spacing |
| `detail-subsection-title` | Subsection heading (gold color) |
| `detail-card` | Card container with border |
| `detail-list-item` | List item with icon support |
| `detail-list-icon` | Circular icon container |

### Example: Adding a card with items

```astro
<section class="detail-section section-reveal">
  <h2 class="detail-section-title">Must-Visit Spots</h2>
  <div class="detail-card">
    <div class="detail-list-item">
      <div class="detail-list-icon">🦌</div>
      <div>
        <h4 class="font-medium">Nara Park</h4>
        <p class="text-gray-400 text-sm">Over 1,000 sacred deer roam freely</p>
      </div>
    </div>
  </div>
</section>
```

### Linking to your new page

The page will be available at `/nara` (matching the filename). To link from the homepage, you can add a card or button:

```astro
<a href="/nara" class="detail-card">Visit Nara page</a>
```

---

## How to Update Content

### Adding/Editing Itinerary Days

Edit files in `src/content/timeline/`. Each day is a markdown file:

```markdown
---
day: 3
date: "October 3"
title: "Shibuya & Harajuku"
location: "Tokyo"
type: "default"           # Options: default, birthday, nature, travel
highlight:                 # Optional
  title: "Highlight Title"
  description: "What makes this day special"
---
Your day description goes here. This is the body text.
```

**Day types:**
- `default` - Normal day
- `birthday` - Special celebration day (styled differently)
- `nature` - Nature/scenic day
- `travel` - Travel/transit day

### Adding/Editing Journey Acts

Edit files in `src/content/journey/`:

```markdown
---
title: "The Neon Future"
act: "Act I"
dates: "Oct 1–6 · Tokyo"
location: "Tokyo"
order: 1                   # Controls display order
---
Description of this part of the journey.
```

### Adding/Editing Hotels

Edit files in `src/content/hotels/`:

```markdown
---
location: "Tokyo"
name: "Hotel Name"
dates: "Oct 1–6 · 5 nights"
nights: 5
price: "€150/night"
status: "pending"          # Options: pending, booked, priority
notes: "Near Yamanote line"
options:                   # Alternative options to consider
  - "Option A"
  - "Option B"
---
```

---

## Adding Images

1. Place images in `public/images/`
2. Reference them with `/images/filename.png`

**Example - Update hero image:**
1. Add your image to `public/images/`
2. Edit `src/components/Hero.astro`:
   ```astro
   image = '/images/your-new-image.png'
   ```

**Or pass as prop from `index.astro`:**
```astro
<Hero image="/images/custom-hero.png" />
```

---

## Editing the Main Page

The main page is `src/pages/index.astro`. It contains:

- **Hero Section** - Title, dates, route
- **Premise Section** - Introduction text
- **Journey Section** - The 4 acts (pulls from `content/journey/`)
- **Timeline Section** - Day-by-day (pulls from `content/timeline/`)
- **Hotels Section** - Accommodations (pulls from `content/hotels/`)
- **Flights Section** - Flight options (hardcoded in index.astro)
- **Budget Section** - Cost estimates (hardcoded in index.astro)
- **CTA Section** - Call to action

To edit static sections (Flights, Budget), modify the HTML directly in `index.astro`.

---

## Editing Components

### Header (`src/components/Header.astro`)
Site name and navigation links.

### Hero (`src/components/Hero.astro`)
Accepts these props:
- `dates` - Date range text
- `title` - Main title
- `subtitle` - Subtitle text
- `route` - Route summary
- `image` - Background image path

### Footer (`src/components/Footer.astro`)
Footer content.

---

## Styling & Theme

Colors are defined in `tailwind.config.mjs`:

```javascript
colors: {
  'bg': '#0a0a0a',           // Page background
  'surface': '#141414',       // Card backgrounds
  'surface-2': '#1e1e1e',     // Lighter surface
  'vermillion': '#C41E3A',    // Red accent (Japanese vermillion)
  'vermillion-dark': '#8B0000',
  'gold': '#D4AF37',          // Gold accent
  'gold-muted': 'rgba(212, 175, 55, 0.15)',
}
```

Fonts:
- **Display:** Cormorant Garamond (headings)
- **Body:** DM Sans (text)

---

## Deployment

The site auto-deploys to GitHub Pages when you push to `main`.

### To publish changes:

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Update itinerary for day 3"

# Push to GitHub (triggers deploy)
git push
```

### Deployment process:
1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages
4. Live at japan2026.ushkalov.com

Check deployment status: Go to repo → Actions tab

---

## Common Tasks

### Add a new day to the timeline

1. Create `src/content/timeline/day-XX.md`
2. Add frontmatter with required fields
3. Add description in body
4. Commit and push

### Change the site title

Edit `src/components/Header.astro` (nav title) and `src/layouts/MainLayout.astro` (page title).

### Update hero image

1. Add image to `public/images/`
2. Update `image` prop in `src/components/Hero.astro` or pass via `index.astro`

### Add a new hotel option

1. Create `src/content/hotels/location-name.md`
2. Fill in the schema fields
3. Commit and push

### Change colors

Edit `tailwind.config.mjs` → `theme.extend.colors`

---

## Content Schema Reference

### Journey (content/journey/)
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Act title |
| act | string | Yes | "Act I", "Act II", etc. |
| dates | string | Yes | Date range display |
| location | string | Yes | Location name |
| order | number | Yes | Display order |
| highlight | string | No | Optional highlight |

### Timeline (content/timeline/)
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| day | number | Yes | Day number |
| date | string | Yes | Display date |
| title | string | Yes | Day title |
| location | string | Yes | Location |
| type | enum | No | default/birthday/nature/travel |
| highlight.title | string | No | Highlight title |
| highlight.description | string | No | Highlight description |

### Hotels (content/hotels/)
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| location | string | Yes | City/area |
| name | string | Yes | Hotel name |
| dates | string | Yes | Date range |
| nights | number | Yes | Number of nights |
| price | string | Yes | Price display |
| status | enum | No | pending/booked/priority |
| notes | string | No | Additional notes |
| options | array | No | Alternative hotel options |

---

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
npm install
npm run build
```

### Changes not showing
- Hard refresh browser (Cmd+Shift+R)
- Check if dev server is running
- Check GitHub Actions for deploy errors

### Images not loading
- Ensure path starts with `/images/`
- Check file is in `public/images/`
- Check filename matches exactly (case-sensitive)

---

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[MDX](https://mdxjs.com/)** - Markdown with components
- **GitHub Pages** - Hosting
- **GitHub Actions** - Auto-deployment

---

## Useful Links

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GitHub Actions Workflow](.github/workflows/deploy.yml)
