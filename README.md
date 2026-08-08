# Accredian Enterprise — Partial Clone

A partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with **Next.js (App Router)** and **Tailwind CSS**, submitted for the Full Stack Developer Intern assignment.

> Live demo: _add your Vercel URL here after deploying_
> GitHub repo: _add your repo URL here_

---

## 1. Tech Stack

- **Next.js 15/16 (App Router)** — functional components + hooks, no class components
- **Tailwind CSS v4** — utility-first styling, fully responsive
- **lucide-react** — icon set (used instead of copying the original site's icon assets)
- **Next.js Route Handler** (`/app/api/lead/route.js`) — mock API for the bonus lead-capture form

No UI kit or component library is used — every component is hand-built and reusable.

---

## 2. Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build (what Vercel runs)
npm run build
npm run start
```

### Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**.

---

## 3. Project Structure

```
accredian-clone/
├── app/
│   ├── layout.js            # Root layout (html/body shell, metadata)
│   ├── page.js               # Home page — stacks every section in order
│   ├── globals.css           # Tailwind import + global styles
│   └── api/
│       └── lead/route.js     # Mock API: POST/GET lead form submissions
│
├── components/
│   ├── Navbar.js              # Sticky nav + mobile hamburger menu
│   ├── Hero.js                # "Next-Gen Expertise For Your Enterprise" banner
│   ├── Stats.js                # "Our Track Record" numbers
│   ├── Clients.js              # "Our Proven Partnerships" logo strip
│   ├── AccredianEdge.js        # Wraps the 4 Accredian Edge subsections
│   ├── CAT.js                  # Wraps the 2 CAT subsections
│   ├── HowItWorks.js           # 4-step process section
│   ├── FAQs.js                 # Category tabs + accordion (interactive)
│   ├── Testimonials.js         # 2-per-slide carousel with dot navigation
│   ├── LeadForm.js             # Bonus: lead capture form → /api/lead
│   ├── CTABanner.js            # "Want to Learn More?" blue banner
│   ├── Footer.js               # Logo, socials, link columns, contact info
│   │
│   ├── edge/                   # Accredian Edge subsections (one file each)
│   │   ├── WhoShouldJoin.js
│   │   ├── CourseSegmentation.js
│   │   ├── DomainExpertise.js
│   │   └── KeyAspects.js
│   │
│   ├── cat/                    # CAT subsections (one file each)
│   │   ├── DeliverResults.js
│   │   └── CATFramework.js
│   │
│   └── ui/                     # Small reusable primitives
│       ├── Button.js            # Single Button used by every CTA on the site
│       ├── SectionHeading.js    # "Title + highlighted word + subtitle" block
│       └── Icon.js               # Maps an icon-name string to a lucide icon
│
├── data/
│   └── siteData.js             # ALL page content/copy lives here (single source of truth)
│
└── public/
```

**Why a `data/siteData.js` file?** Every section component is "dumb" — it just
imports its content from `siteData.js` and renders it. This means:
- Editing copy never requires touching JSX.
- Components are trivially reusable (e.g. `SectionHeading`, `Button`, `Icon` are shared across 10+ sections).
- Adding a new FAQ, testimonial, or stat is a one-line data change.

---

## 4. Approach Taken

1. **Studied the reference site** section by section (Home, Stats, Clients, Accredian Edge, CAT, How It Works, FAQs, Testimonials, Footer) from the screenshots provided, noting layout, copy, and visual hierarchy.
2. **Planned the component tree first** — one component per visual section, grouped into folders (`edge/`, `cat/`, `ui/`) that mirror the site's own information architecture.
3. **Built a shared content file** (`siteData.js`) so every component stays a simple, reusable "renderer" instead of hard-coding text.
4. **Built shared UI primitives** (`Button`, `SectionHeading`, `Icon`) before building sections, so every section reuses the same three building blocks instead of re-implementing buttons/headings each time.
5. **Made it interactive** where the original site is interactive: FAQ accordion with category tabs, testimonial carousel with dot navigation, mobile nav menu — all with plain `useState`, no external state library.
6. **Added the bonus lead-capture form**, wired to a real Next.js API route (`/api/lead`) that validates input and stores submissions (in-memory, since this is a mock backend for the assignment).
7. **Verified the production build** (`npm run build` + `npm run start`) and manually tested the API route with `curl` before packaging.

### Notes on visual fidelity

- Client/partner logos are rendered as styled text (not the original brand SVGs), since the actual Accredian brand/client logo files aren't something this project has rights to redistribute.
- Photography uses royalty-free stock images (Unsplash) that approximate the mood of the original photos, rather than downloading the original site's exact image assets.
- The "Accredian Edge" wavy-connector timeline graphic was simplified to a clean responsive icon grid with identical content/order — easier to read on mobile and easier to maintain than replicating the decorative SVG curve.

---

## 5. AI Usage Explanation

This project was built with **Claude** (Anthropic) as the primary AI assistant, working directly from screenshots of the reference site.

**Where AI helped:**
- Translating the screenshots into a component breakdown and file structure.
- Generating the initial JSX/Tailwind markup for every section.
- Setting up the Next.js project scaffold, `next.config.mjs` image config, and the mock API route.
- Debugging a `lucide-react` version mismatch (the latest major version had dropped several icons used here) and a Google Fonts network issue during the build.

**What was reviewed/adjusted manually (or should be, before submission):**
- Read through every generated file to confirm content matched the reference screenshots section-by-section.
- Simplified the "Accredian Edge" key-aspects timeline from a decorative curved-line SVG to a plain responsive grid (see note above) — a deliberate scope trade-off for cleaner, more maintainable code.
- Swapped brand logos/photos for text badges and stock imagery instead of trying to source the original site's exact assets.
- **Before you submit:** re-read the code once more yourself, tweak any copy/spacing you'd word differently, and note in this section anything else you personally changed — reviewers want to see your own judgment on top of the AI draft, not just a pasted result.

---

## 6. Improvements With More Time

- Pull live stats/testimonials from a real CMS or database instead of `siteData.js`.
- Replace the client logo text badges with actual SVG logo assets (with proper licensing).
- Add scroll-triggered entrance animations (e.g. Framer Motion) matching the original site's motion feel.
- Add form validation messaging (inline field errors) and a honeypot/rate-limit on `/api/lead` to prevent spam.
- Add unit tests (Vitest + React Testing Library) for the FAQ accordion and lead form.
- Add an actual CMS-driven blog/"About" page (currently footer links are placeholders).
- Persist lead submissions to a real database (e.g. Postgres via Prisma) instead of an in-memory array.
