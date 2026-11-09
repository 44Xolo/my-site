# BASIC Community Future Labs Website

**WEDE5020 — Part 3: Interactivity, Validation, Maps, Animation, SEO and Deployment**

| Field | Details |
|---|---|
| **Student** | Hlompho Muzi Xolo |
| **Student number** | ST10476575 |
| **Module** | WEDE5020 — Web Development (Introduction) |
| **Assessment** | Portfolio of Evidence, Part 3 |
| **Live website** | https://44xolo.github.io/BASIC/ |
| **Part 3 repository** | https://github.com/44Xolo/BASIC |
| **Part 2 repository** | https://github.com/EMKNDW/wede5020-g2-2026-formative-2-part-2-44xolo |
| **Deployment** | GitHub Pages — `main` branch, repository root |

## Project overview

A responsive, six-page website for **BASIC Community Future Labs** (Building Access, Skills, Innovation & Community), a student-led organisation building Community Future Labs in underserved areas, with lab locations in Johannesburg and Durban. The site promotes the **LEARN → BUILD → EARN → GIVE BACK** model, presents seven programmes, and lets visitors volunteer, sponsor, partner or make contact.

Built with HTML5, CSS3 (Grid and Flexbox), vanilla JavaScript, Leaflet/OpenStreetMap and GSAP. It is a static site: no backend, database, package install or build step.

| Part | Focus | Result |
|---|---|---|
| Part 1 | Proposal, sitemap, wireframes, HTML structure | 86% |
| Part 2 | External CSS, typography, layout, responsive design, GitHub documentation | **87%** — marker feedback addressed below |
| **Part 3** | **JavaScript functionality, validation, maps, animation, SEO, deployment** | **This submission** |

## Website pages

| Page | Purpose |
|---|---|
| `index.html` | Home: splash screen, hero, impact counters, programme overview, gallery with lightbox, GSAP animations |
| `about.html` | History, mission, vision, values, team, FAQ accordion |
| `programmes.html` | Search, filter and sort catalogue of the seven programmes |
| `news.html` | News cards, category filters, story dialogs and newsletter form |
| `enquiry.html` | Tabbed Volunteer / Sponsor / Partnership form with generated responses and sponsorship estimate |
| `contact.html` | Validated contact form (mailto), Leaflet maps for both labs, Google Maps directions |

## Site map

![BASIC site map showing index.html at the top, linking to about.html, programmes.html, news.html, enquiry.html and contact.html, with a shared footer](images/sitemap.png)

Solid lines show the primary navigation path from the homepage. Dashed lines show in-page sections and shared components. Every page shares the same sticky header and footer.

```text
index.html (Homepage)
├── about.html        → team cards (4 governance roles), core values grid
├── programmes.html   → anchors #code #ai #green #build #entrepreneur #education #connect
├── news.html         → news stories, category filters and newsletter
├── enquiry.html      → tabbed forms: Volunteer | Sponsor | Partnership
└── contact.html      → Johannesburg Lab (map), Durban Lab (map)
Shared header and footer on all six pages
```

## Part 3 requirements and where they are implemented

| Requirement | Implementation | File(s) |
|---|---|---|
| Dynamic content from data | Seven programmes stored in a JavaScript array and rendered as cards | `js/site.js` |
| Search, filter, sort | Live text search with `<mark>` highlighting, category filter, A–Z / Z–A / duration sort, result counter, "no match" message | `js/site.js`, `programmes.html` |
| Form validation | Rule-driven (`data-rules`): required, min/max length, email, South African phone, future date; checked on blur and on submit; inline errors per field | `js/site.js`, `enquiry.html`, `contact.html` |
| Calculations / generated output | Volunteer: next intake and available slots. Sponsor: estimate = base × months/12 × tier. Partnership: acknowledgement | `js/site.js` |
| Contact workflow | Builds an encoded `mailto:` link with name, email, phone, type and message, and shows a preview | `js/site.js`, `contact.html` |
| Interactive components | Accordion, enquiry tabs, modal feedback, mobile navigation toggle (`aria-expanded`) | `js/site.js`, `css/interactions.css` |
| Gallery lightbox | Click or Enter/Space to open; close button, backdrop click, Esc, arrow keys, focus trap and focus restoration | `js/site.js`, `css/interactions.css` |
| Maps | Leaflet 1.9.4 with OpenStreetMap tiles, markers and popups for the Johannesburg and Durban labs, plus directions links; graceful fallback if Leaflet fails | `js/maps.js`, `contact.html` |
| Animation | GSAP 3.12.5 and ScrollTrigger: scroll progress, hero zoom, programme scroller, reveal effects; scroll reveal, animated counters and word-by-word hero text in vanilla JS | `js/animations.js`, `css/animations.css`, `js/site.js` |
| Splash screen | Plays once per session (`sessionStorage`), skipped for repeat visits and reduced-motion users | `js/site.js`, `css/style.css` |
| Accessibility | Skip link, semantic headings, labelled controls, `aria-invalid` and live result announcements, visible `:focus-visible` outlines, `prefers-reduced-motion` support | all pages, `css/*.css` |
| SEO | Unique titles and descriptions, canonical links, Open Graph and Twitter tags, keywords, `robots.txt`, `sitemap.xml`, favicon | all pages, `robots.txt`, `sitemap.xml` |
| Responsive design | Breakpoints at 900px, 768px, 600px and 520px (plus the Part 2 layout); gallery becomes a swipeable scroller on mobile | `css/style.css`, `css/interactions.css` |
| Deployment | GitHub Pages from `main` | repository settings |

## Forms

- **Enquiry form** — text, email, telephone, programme, date, number, select and textarea controls. The selected tab decides which fields apply. The `?programme=` query string (from the "Volunteer" button on each programme card) pre-selects the programme.
- **Contact form** — validates (including a required consent checkbox), then sends the message through Formspree when `FORM_ENDPOINT` is set at the top of `js/site.js`, showing a confirmation message. If the endpoint is empty or the request fails, it falls back to a prepared `mailto:` message to `info@basicfuturelabs.org`.
- **Form controls** — text, email, telephone, date, number, select dropdowns, checkboxes (availability, consent, newsletter) and radio buttons (experience level), each with a label and inline validation.

Forms are validated client-side only. Submissions are not stored or sent by a server.

## Running locally

1. Clone or download the repository.
2. Open `index.html` in a browser, or right-click it in VS Code and choose **Open with Live Server** (recommended for testing maps and navigation).

```bash
git clone https://github.com/44Xolo/BASIC.git
cd BASIC
```

The splash screen plays for about 2.5 seconds on the first visit of each session. An internet connection is needed for Leaflet, GSAP, Google Fonts and map tiles.

## Testing checklist

- [ ] All six pages load from the live GitHub Pages URL
- [ ] Navigation and hamburger menu work on desktop and mobile
- [ ] Programme search, category filter and sort work, and "no match" message appears
- [ ] Enquiry tabs switch fields and generate the correct Volunteer / Sponsor / Partnership output
- [ ] Empty and invalid values are rejected in both forms (email, SA phone, past date)
- [ ] Contact form produces the mailto preview and link
- [ ] Lightbox opens, closes (button, backdrop, Esc), moves with arrow keys and traps focus
- [ ] Leaflet maps show markers and popups; directions links open
- [ ] No console errors, missing images or broken internal links
- [ ] Layouts checked at desktop, 900px, 768px, 600px and 520px
- [ ] Keyboard-only navigation has visible focus; modal and lightbox can be closed
- [ ] Reduced-motion setting disables splash and animations

*(Tick each item after testing and add Lighthouse / validator scores here.)*

## Part 2 result: 87%

Marker feedback on the Part 2 submission (marks as awarded) and the action taken in this Part 3 repository:

| Criterion | Mark | Marker feedback | Action taken in Part 3 |
|---|---|---|---|
| Feedback for Part 1 | 8/10 | Earlier feedback partly incomplete, including tables used for layout and limited documentation of changes | Removed table-based layout (CSS Grid/Flexbox only) and documented every change in dated README and `CHANGELOG.md` entries |
| External stylesheet; default style; typography; layout; decoration and colour | 10/10; 5/5; 5/5; 5/5; 5/5 | Full marks | Structure and design system kept; extended in `css/interactions.css` and `css/animations.css` |
| Pseudo-classes used | 9/10 | Apply and test more consistently across all interactive elements | Hover, active, `:focus-visible` and disabled states added to navigation, buttons, cards, tabs, form controls, gallery images and lightbox controls |
| Responsive: breakpoints, layout, typography, navigation menu, images | 10/10; 5/5 each | Full marks | Responsive rules retained; gallery becomes a swipeable scroller on mobile |
| GitHub: multiple descriptive commits | 1/5 | Use specific messages that identify the files or features updated | Commit messages in Part 3 name the file or feature changed, and each is listed in the commit history table below |
| GitHub: README | 5/5 | Full marks | Kept comprehensive and extended for Part 3 |
| GitHub: changelog | 1.5/5 | Root README has a changelog but the current site has no changelog documenting Part 2 development; entries should be dated, specific and linked to pages or features | Root `CHANGELOG.md` added with dated entries naming the files, pages and features changed, summarised in this README |
| References | 2.5/5 | Youth unemployment source, image sources and other external content not clearly referenced; reference AI use if used | Statistics South Africa cited for the youth unemployment figure; image source table added; Leaflet, OpenStreetMap, GSAP, MDN, W3C and AI assistance referenced |
| **Total** | **87/100** | Late deductions: 0 | |

## Feedback from Formative Part 2

This Part 3 repository continues the work submitted in the [Part 2 formative repository](https://github.com/EMKNDW/wede5020-g2-2026-formative-2-part-2-44xolo). Each point below records the marker feedback and the correction made in this repository:

- **Layout:** HTML tables used for page layout were replaced with CSS Grid and Flexbox; no `<table>` element is used for website structure. The layout changes are implemented in `css/style.css` and documented here and in [`CHANGELOG.md`](CHANGELOG.md).
- **Interactive pseudo-classes:** Hover, keyboard focus, active and focus-visible states now cover navigation, buttons, cards, tabs and form controls in `css/style.css` and `css/interactions.css`. Disabled controls are styled separately.
- **Commit messages:** Commit messages name the page, file or feature changed (for example, `Add readable comments to all HTML pages`) rather than vague messages such as `updated files`. See the commit history table below.
- **Changelog and README:** Development work is recorded with dates at repository root in [`CHANGELOG.md`](CHANGELOG.md), with a linked summary in this README.
- **References:** The Harvard-style reference list cites the youth unemployment source, development libraries, map providers, deployment documentation and AI assistance used. The image source table records where each image was taken from.
- **Accessibility and SEO:** Descriptive image alternative text, semantic heading structure, skip navigation, unique page titles and descriptions, canonical links, keywords, `robots.txt` and `sitemap.xml` were added across the five HTML pages.
- **Deployment:** Placeholder deployment instructions were removed from production pages and replaced with the live GitHub Pages URL and repository documentation.

## Technologies

- HTML5, CSS3 (Grid, Flexbox, custom properties)
- Vanilla JavaScript
- Leaflet 1.9.4 and OpenStreetMap
- GSAP 3.12.5 and ScrollTrigger
- Google Fonts: Inter and Montserrat
- GitHub Pages

## Project structure

```text
BASIC/
├── index.html
├── about.html
├── programmes.html
├── news.html
├── enquiry.html
├── contact.html
├── README.md
├── CHANGELOG.md
├── robots.txt
├── sitemap.xml
├── css/
│   ├── style.css
│   ├── interactions.css
│   └── animations.css
├── js/
│   ├── site.js
│   ├── maps.js
│   └── animations.js
└── images/
    ├── coding-workspace.jpg
    ├── community-event.jpg
    ├── community-gala.jpg
    ├── community-lab-animation.gif
    ├── community-lab-hero.png
    ├── community-team-outdoors.jpg
    ├── community-workshop.jpg
    ├── computer-workspace.jpg
    ├── favicon.svg
    ├── future-city-illustration.jpg
    ├── glass-office-city-view.jpg
    ├── learning-workspace.jpg
    ├── sitemap.png
    ├── solar-panel-installation.jpg
    ├── sustainable-city-illustration.jpg
    └── workshop-machinery.jpg
```

## Known limitations

- Forms have no back-end; the contact form relies on the visitor's email client via `mailto:`.
- Map tiles, GSAP and Leaflet load from CDNs, so those features need an internet connection (the maps show a fallback message if Leaflet is unavailable).
- HTML pages remain in the project root for GitHub Pages; styles, scripts and images are grouped in `css/`, `js/` and `images/`.
- Asset filenames use lowercase kebab case and describe their content or role.

## Future improvements

- Connect forms to a form service or back-end so enquiries are stored and emailed.
- Expand the news and events coverage with more community stories.
- Add automated accessibility and link checks to the deployment workflow.

## Images used

The website uses the following locally hosted files from the `images/` directory:

| Image file | Use in the website |
|---|---|
| `coding-workspace.jpg` | Home gallery, CODE programme card and CODE news story |
| `community-event.jpg` | Home gallery and CONNECT programme card |
| `community-gala.jpg` | Home gallery |
| `community-lab-animation.gif` | Animated gallery section on the home page |
| `community-lab-hero.png` | Home-page preload and social preview images |
| `community-team-outdoors.jpg` | Home gallery and news-page heading |
| `community-workshop.jpg` | Home gallery, Entrepreneur programme card and news story |
| `computer-workspace.jpg` | Home gallery, AI programme card and Contact page |
| `favicon.svg` | Browser icon used across all pages |
| `future-city-illustration.jpg` | Home gallery |
| `glass-office-city-view.jpg` | Home gallery, About page and Enquiry page |
| `learning-workspace.jpg` | Home gallery and EDUCATION programme card |
| `sitemap.png` | Site map in this README |
| `solar-panel-installation.jpg` | Home gallery and GREEN programme card |
| `sustainable-city-illustration.jpg` | Home gallery and news story |
| `workshop-machinery.jpg` | Home gallery, BUILD programme card and news story |

The photo credits below follow the Harvard Anglia author-date format. Pinterest was provided as the source, and 2026 is used as the publication year supplied for the photos. The original creators and direct pin URLs were not provided, so the marked URL fields must be replaced with each image's individual Pinterest link before submission. Pinterest is the hosting platform, not necessarily the photographer.

All locally hosted image files are stored in `images/` and use descriptive filenames.

### Photo references (Harvard Anglia)

| Image file | Harvard Anglia reference |
|---|---|
| `community-lab-hero.png` | Xolo, H.M. (2026) *Community lab hero* [Digital composite, created in Canva using a Pinterest photograph]. Original photograph available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `community-workshop.jpg` | *Community workshop* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `coding-workspace.jpg` | *Coding workspace* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `learning-workspace.jpg` | *Learning workspace* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `computer-workspace.jpg` | *Computer workspace* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `community-team-outdoors.jpg` | *Community team outdoors* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `community-event.jpg` | *Community event* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `community-gala.jpg` | *Community gala* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `future-city-illustration.jpg` | *Future city illustration* (2026) [Illustration]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `workshop-machinery.jpg` | *Workshop machinery* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `solar-panel-installation.jpg` | *Solar panel installation* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `sustainable-city-illustration.jpg` | *Sustainable city illustration* (2026) [Illustration]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `glass-office-city-view.jpg` | *Glass office city view* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |

## AI use declaration

| Tool | Used for | Student contribution |
|---|---|---|
| Anthropic Claude (Sonnet 5.5) | Drafting this README, `CHANGELOG.md` and `robots.txt`/`sitemap.xml`; auditing the site against the Part 3 rubric; writing the enquiry/contact form additions (checkbox, radio and dropdown controls, validation rules, Formspree sending with fallback), rolling intake dates, meta keywords, image filenames and alt text | Supplied the repository, rubric and feedback; reviewed, tested, edited and committed the changes; responsible for understanding and explaining all submitted code |
| Microsoft Copilot | Code explanations, debugging and implementation suggestions | Wrote, tested and integrated the final code |
| Canva | Creating `community-lab-hero.png` | Designed the graphic |

The direct Pinterest links and original creators should be checked before submission so each image can be traced to its creator and usage terms. The chat prompts are available on request.

## References and source use

In-text citations are used where factual or technical support appears on the website. For example, Statistics South Africa supports the youth-unemployment statistic on the home page (Statistics South Africa, 2026), Leaflet and OpenStreetMap support the lab maps, and the MDN and W3C resources support the form and accessibility implementation (MDN Web Docs, n.d.; W3C, 2023). Only sources that informed the project are listed below.

## References

GitHub (n.d.) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 5 November 2026).

Google (n.d.) *Google Search Central: Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt (Accessed: 5 November 2026).

Google (n.d.) *Google Search Central: Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-submit-sitemaps (Accessed: 5 November 2026).

GreenSock (n.d.) *GSAP documentation*. Available at: https://gsap.com/docs/v3/ (Accessed: 5 November 2026).

MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 5 November 2026).

MDN Web Docs (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog (Accessed: 5 November 2026).

Leaflet (n.d.) *Leaflet: An open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 5 November 2026).

Anglia Ruskin University (n.d.) *Harvard referencing*. Available at: https://library.aru.ac.uk/referencing/ (Accessed: 5 November 2026). This institutional guide was used to present AI-assistance and other sources in Harvard style.

Anthropic (2026) *Claude Sonnet 5.5* [Large language model]. Available at: https://claude.ai/ (Accessed: 7 November 2026). Prompt: 'Create for me README file for Part 3'. Used to draft and structure this README from the repository contents and the Part 2 marker feedback; the content was reviewed and edited by the student (Anglia Ruskin University, n.d.).

Microsoft (2026) *Microsoft Copilot*. Available at: https://copilot.microsoft.com/ (Accessed: 5 November 2026). Development and debugging assistance was used for code explanations and implementation suggestions (Anglia Ruskin University, n.d.).

OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 5 November 2026).

Statistics South Africa (2026) *Labour market trends and youth unemployment statistics*. Available at: https://www.statssa.gov.za/?p=18215 (Accessed: 5 November 2026).

World Wide Web Consortium (W3C) (2023) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 5 November 2026).
