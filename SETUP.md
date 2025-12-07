# The October Loop — Astro + Tailwind Migration

## Prerequisites

1. **Node.js 18+** — [Download](https://nodejs.org/)
2. **VS Code** — [Download](https://code.visualstudio.com/)
3. **Git** — [Download](https://git-scm.com/)
4. **GitHub Account** — For deployment

---

## Part 1: Install Claude Code CLI

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Authenticate (opens browser)
claude login

# Verify installation
claude --version
```

### Useful Claude Code Commands

```bash
# Start interactive session in current directory
claude

# Ask a one-off question
claude "How do I add a new page in Astro?"

# Resume previous conversation
claude --continue

# Start fresh conversation
claude --new
```

---

## Part 2: Create the Project

```bash
# Create project directory
mkdir october-loop-japan
cd october-loop-japan

# Initialize Astro with Tailwind
npm create astro@latest . -- --template minimal --install --git --typescript strict

# Add Tailwind CSS
npx astro add tailwind

# Add MDX support for rich markdown
npx astro add mdx

# Install additional dependencies
npm install @astrojs/sitemap
```

---

## Part 3: Project Structure

After setup, your project should look like this:

```
october-loop-japan/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   └── images/                 # Static images
│       └── .gitkeep
├── src/
│   ├── content/               # Markdown content
│   │   ├── config.ts          # Content collections config
│   │   ├── journey/           # Journey sections
│   │   │   ├── 01-tokyo.md
│   │   │   ├── 02-kanazawa.md
│   │   │   ├── 03-takayama.md
│   │   │   ├── 04-kyoto.md
│   │   │   └── 05-osaka.md
│   │   └── pages/             # Static pages content
│   │       ├── hotels.md
│   │       ├── flights.md
│   │       └── budget.md
│   ├── layouts/
│   │   └── MainLayout.astro   # Header + Footer wrapper
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── JourneyCard.astro
│   │   ├── TimelineItem.astro
│   │   └── HotelCard.astro
│   ├── pages/
│   │   └── index.astro        # Main page
│   └── styles/
│       └── global.css         # Global styles + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Part 4: Copy These Files

Create each file below in your project. You can use Claude Code to help:

```bash
# Start Claude Code in your project
cd october-loop-japan
claude

# Then ask:
# "Create the MainLayout.astro file with header navigation and footer"
# "Create the Hero component with the October Loop branding"
# etc.
```

---

## Part 5: GitHub Pages Deployment

### 1. Create GitHub Repository

```bash
# Initialize git (if not already)
git init

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/october-loop-japan.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo on GitHub
2. Settings → Pages
3. Source: **GitHub Actions**

### 3. Push and Deploy

```bash
git add .
git commit -m "Initial Astro setup"
git push
```

The workflow will automatically build and deploy to:
`https://YOUR_USERNAME.github.io/october-loop-japan/`

---

## Part 6: Local Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Working with Claude Code

Once in the project, here are useful prompts:

```
# Content updates
"Add a new timeline item for October 7th - Nikita's birthday in Kanazawa"

# Styling
"Make the hero section taller with a gradient background"

# Features
"Add a countdown timer showing days until October 1, 2026"

# Debugging
"The navigation links aren't scrolling smoothly, fix it"

# Deployment
"Why is my GitHub Pages build failing?"
```

### Pro Tips

1. **Keep Claude in context** — Run `claude` from your project root
2. **Be specific** — "Add hotel card for Hyatt Centric Kanazawa, €250/night, Oct 6-7"
3. **Iterate** — "Make it darker" / "Add more spacing" / "Use the vermillion color"
4. **Ask for explanations** — "Explain how the content collections work"

---

## Next Steps

1. Run through Part 1-3 to set up the project
2. Copy the starter files (provided separately)
3. Run `npm run dev` to see it working
4. Use Claude Code to customize and add content
5. Push to GitHub to deploy

Questions? Run `claude "How do I..."` from your project directory!
