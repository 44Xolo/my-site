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

## Table of contents

1. [Project overview](#project-overview)
2. [Website pages](#website-pages)
3. [Site map](#site-map)
4. [Part 3 requirements and where they are implemented](#part-3-requirements-and-where-they-are-implemented)
5. [Forms](#forms)
6. [Running locally](#running-locally)
7. [Testing checklist](#testing-checklist)
8. [Part 2 result: 87%](#part-2-result-87)
9. [Feedback from Formative Part 2](#feedback-from-formative-part-2)
10. [Technologies](#technologies)
11. [Project structure](#project-structure)
12. [Commit history](#commit-history)
13. [Changelog](#changelog)
14. [Known limitations](#known-limitations)
15. [Future improvements](#future-improvements)
16. [Images used](#images-used)
17. [AI use declaration](#ai-use-declaration)
18. [References and source use](#references-and-source-use)
19. [References](#references)

## Project overview

A responsive, six-page website for **BASIC Community Future Labs (Building Access, Skills, Innovation & Community)**, a student-led organisation building Community Future Labs in underserved areas, with lab locations in Johannesburg and Durban. The site encourages the **LEARN → BUILD → EARN → GIVE BACK** model, lists seven programmes, and provides an opportunity for visitors to volunteer, sponsor or partner or get in touch. 

Designed using HTML5, CSS3 (Grid and Flexbox), vanilla JavaScript, Leaflet/OpenStreetMap and GSAP. No backend, database, package install or build step: it's a static site.

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

- **Enquiry form** - text, email, telephone, programme, date, select and textarea controls. The tab you choose determines which fields are applicable. The ?programme= query string (from the "Volunteer" button on each programme card) pre-selects the programme.
- **Contact form** — validates and then sends the message through Formspree when FORM_ENDPOINT is set at the top of js/site.js, displays a confirmation message. If the endpoint is empty or the request fails, it defaults to a ready-to-go mailto: to info@basicfuturelabs.org.
- **Form controls** – text, email, telephone, date, number, select dropdowns, checkboxes (availability, consent, newsletter) and radio buttons (experience level) with label and inline validation.

Forms are validated client-side only. Submissions are not stored or sent by a server.

## Running locally

1. Clone or download the repository.
2. Open `index.html` in a browser, or right-click it in VS Code and choose **Open with Live Server** (recommended for testing maps and navigation).

```bash
git clone https://github.com/44Xolo/my-site.git
cd BASIC
```

The splash screen will play on the first visit of each session for approximately 2.5 seconds. For Leaflet, GSAP, Google Fonts and map tiles, an Internet connection is required. 

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
- **Accessibility and SEO:** Descriptive image alternative text, semantic heading structure, skip navigation, unique page titles and descriptions, canonical links, keywords, `robots.txt` and `sitemap.xml` were added across the six HTML pages.
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

## Commit history

**Part 2 mark: 1/5**

**Feedback:** Commit messages should identify the files, pages or features changed instead of using vague descriptions.

**Action:** Part 3 history contains feature-specific messages. The examples below link to actual commits:

| Date | Commit | Change recorded |
|---|---|---|
| 07 November 2026 | [`18bd19b`](https://github.com/44Xolo/my-site/commit/18bd19b) — `docs: document optimised asset workflow` | Documented how the site's media assets were optimized. |
| 07 November 2026 | [`e12e616`](https://github.com/44Xolo/my-site/commit/e12e616) — `perf: reduce home page media payloads` | Reduced the Home page's image and animation payloads. |
| 07 November 2026 | [`8aacca1`](https://github.com/44Xolo/my-site/commit/8aacca1) — `feat: add AJAX delivery for enquiry forms` | Added form submission behavior to `enquiry.html`, `contact.html` and the site JavaScript. |
| 07 November 2026 | [`60c91b2`](https://github.com/44Xolo/my-site/commit/60c91b2) — `fix: restore news filters and newsletter` | Restored the News page's filtering and newsletter interactions. |
| 07 November 2026 | [`7771112`](https://github.com/44Xolo/my-site/commit/7771112) — `fix: add news to all page navigation` | Added News to the shared site navigation. |
| 07 November 2026 | [`1ccb234`](https://github.com/44Xolo/my-site/commit/1ccb234) — `feat: add expandable news stories` | Added expandable story content to the News page. |
| 09 November 2026 | [`889faf6`](https://github.com/44Xolo/my-site/commit/889faf6) — `Organize site assets and document image references` | Renamed assets and updated their references and documentation. |

Some older commits use a feature-focused message without naming a file, and the original `init` and `Update site` messages remain in the history. Existing commits have not been rewritten. New commits use the more specific `type(file): what changed` format where practical.

## Changelog

Part 3 Changelog: Response to Part 2 Feedback.

**Part 2 mark: 87/100.** This changelog details the lecturer's feedback and how this is covered by the current BASIC Community Future Labs website. The cited dates and links for the examples are from the repository history; earlier project milestones are kept with their documented dates. There are 6 pages on the website: Home, About, Programmes, News, Enquiry and Contact.

This changelog lists the changes made to the current site.This is the current site's changelog.

**Part 2 mark: 1.5/5**

The base level site was in need of a changelog with reasons and descriptions of changes.

The root-level changelog is in this file. The name of the pages, files, and purpose of the work are given in the entries.

#### 05 November 2026 — Part 2 feedback carried into Part 3

Made changes to `css/style.css` to change the page layout from table to CSS Grid and Flexbox.
- Enhanced the hover, focus, active and disabled states of navigation, buttons, and form controls.
Incorporated descriptive page metadata, skip navigation and responsive layout documentation.
- Documented the modifications in the README and changelog for later reference of the changes in response to previous feedback.

#### 05–07 November 2026 — Part 3 features and refinements

Added programme search, category filtering and sorting for the programme html and shared site java script in `programmes.html`.
- Incorporated validated volunteer, sponsor and partnership, and contact form interactions into `enquiry.html` and `contact.html`.
- Included interactive maps on contact.html, and a lightbox that is keyboard accessible on index.html.
- (9) Improved the News page, added category filters, improve the newsletter form, and made expandable story content.
- Implemented page specific metadata, social-sharing previews and added the robots.txt file, and sitemap.xml.
The above linked commit history contains the relevant changes.

Naming files and documenting projects.Project documentation and file naming.

- Changed scripts, stylesheets and image names to descriptive, lowercase (kebab) case.
Renamed HTML, CSS and JS references are updated.
- Added a new README project structure and updated sitemap ordering; updated image credits and the explanatory comments in the home page.
Inspected each of the six pages in the integrated browser, no broken images, console errors, no syntax and local asset references errors.

### References and attribution

**Part 2 mark: 2.5/5**

Feedback: Refer to the youth-unemployment statistic, the images and external resources, and any AI assistance.

In the README is the reference list and the AI-use declaration. The following is a summary of sources documented.

#### Youth-unemployment statistic

According to the Home page, Statistics South Africa is blamed for their 60.9% youth-unemployment rate.

The statistics South Africa (2026) Labour market trends and youth unemployment statistics. The information has been retrieved from: https://www.statssa.gov.za/?p=18215 (Accessed: 5 November 2026).

The figure is labelled on the page and linked to the source. It is important to verify the statistic reported with the cited release to be sure it is the same period and wording as the source release.

#### Images

The README contains a list of the local image names and provides Harvard Anglia style dated Pinterest references (2026). The source for the images is Pinterest.

Not all URLs for individual pins are supplied, and the name of the original creator and licence information were not supplied. Images can be on Pinterest without having been created by Pinterest. Before submitting, replace each URL marked in the README with the direct pin, and record the original creator and reuse terms, if applicable.

#### Other external resources

Water your yard using a low-impact sprinkler system.Use a low-impact sprinkler system to water your lawn.
|---|---|---|
The Google Fonts Inter, Montserrat and Space Grotesk are part of the typography collection.Inter, Montserrat and Space Grotesk are Google Fonts in the typography collection.
If you are interested in animation for your home page, there are some great solutions out there, including GSAP 3.12.5 and ScrollTrigger. GSAP 3.12.5 | ScrollTrigger | Home-page animation | https://gsap.com/docs/v3/ | https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ |
Interactive maps are included in leaflet 1.9.4 in the map file on contact.html, which is located in the unpackage resource at unpkg.com/leaflet@1.9.4/ |
OpenStreetMap contributors: Map tiles and map data are provided by OpenStreetMap contributors.If you use map tiles or map data, you are using www.openstreetmap.org, which is provided by OpenStreetMap contributors.
Google Map or Directions links on `contact.html` | https://www.google.com/maps/ |

Social icons are not imported from an external icon library, but rather are inline SVG.

#### AI assistance

Anthropic Claude is identified in the README as the AI tool used for structuring and the dates on which each of these is used. Individual conversation URLs were not provided, and this changelog does not create conversation URLs.

The pseudo-classes and interaction states are the same.The pseudo-classes and interaction states are identical.

**Part 2 mark: 9/10**

Use and check interaction states in a consistent way with interactive elements.

Action: The following states are used in shared style: hover, focus, focus-visible, active and disabled. These include navigation, links, buttons, form controls, cards, gallery images and lightbox controls. There is a visible outline of the keyboard focus and disabled controls are different in their appearance.

A browser included for integration was used to test the loading time and key interactions such as Home page lightbox and Programme sorting. It was not recorded whether a separate test matrix for Firefox/Safaria/Mobile Device was performed - cross-browser coverage should be done and documented before submission.

We will use the feedback from Part 1.Feedback from Part 1 will be used.

**Part 2 mark: 8/10**

Feedback: Tables used for layout, changes made based on feedback were not clearly documented.

Action: No layout tables in HTML pages, CSS Grid and Flexbox used in shared stylesheets. Tables in the README are limited to actual tabular data, like marks, references/asset lists etc. Some sections of this changelog and the Part 2 feedback summary in the README will provide a clarification of what changed and why.

Changes in future commits should be tagged with a message like docs(CHANGELOG.md): record response to Part 2 feedback.

## Known limitations

There is no back-end to forms, the contact form uses the visitor's email client by using the `mailto:`.
To use map tiles, GSAP and Leaflet, the Internet is required (this is because map tiles and Leaflet do not load when no Internet connection is available, with a message on the maps indicating otherwise).
For GitHub Pages, HTML pages are stored in the project root, and the styles, scripts and images are stored in `css/`, `js/` and `images/`.
- Assets filenames are lowercase kebab case and descriptive of what it is or what it does.

## Future improvements

Link forms to a form service or back end for storing enquiries and sending them by email.
- Continue to expand news and events coverage by expanding community stories.
Ensure automated accessibility and link checks to the deployment workflow.

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

To use the Harvard Anglia author-date system, see the photo credits below. Pinterest was provided as the source, and 2026 is used as the publication year supplied for the photos. It wasn't supplied by the original creators, and it wasn't included with the original pin URLs, so the URL fields they marked must be changed to each image's individual Pinterest URL before the submission. The host of the blog is not necessarily the photographer – it's Pinterest.

All images that are hosted locally are in the `images/` directory, where they have descriptive names.

### Photo references (Harvard Anglia)

| Image file | Harvard Anglia reference |
|---|---|
| `community-lab-hero.png` | Xolo, H.M. (2026) *Community lab hero* [Digital composite, created in Canva using a Pinterest photograph]. Original photograph available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `community-workshop.jpg` | *Community workshop* (2026) [Photograph]. Pinterest. Available at: [direct Pinterest pin URL required] (Accessed: 9 November 2026). |
| `coding-workspace.jpg` | *Coding workspace* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/89/08/f0/8908f0757e4fa971caaed7bec1c84913.jpg] (Accessed: 9 November 2026). |
| `learning-workspace.jpg` | *Learning workspace* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/f4/d6/79/f4d67926415098db008d82ab460840c5.jpg] (Accessed: 9 November 2026). |
| `computer-workspace.jpg` | *Computer workspace* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/ff/cf/63/ffcf631cef9c7507ce584f3650b09550.jpg] (Accessed: 9 November 2026). |
| `community-team-outdoors.jpg` | *Community team outdoors* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/1200x/11/2d/03/112d03facd2c43d2e23e464fce37baad.jpg] (Accessed: 9 November 2026). |
| `community-event.jpg` | *Community event* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/db/ec/2b/dbec2b036c1d304eae220919405ee9f9.jpg] (Accessed: 9 November 2026). |
| `community-gala.jpg` | *Community gala* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/4a/d8/c1/4ad8c16d4a38ac44a5c754594bf9be1b.jpg] (Accessed: 9 November 2026). |
| `future-city-illustration.jpg` | *Future city illustration* (2026) [Illustration]. Pinterest. Available at: [https://i.pinimg.com/736x/25/75/2d/25752d74d9d8a4eeb7719232bc78fb95.jpg] (Accessed: 9 November 2026). |
| `workshop-machinery.jpg` | *Workshop machinery* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/b3/48/a7/b348a78139378d0466f5c336014046c8.jpg] (Accessed: 9 November 2026). |
| `solar-panel-installation.jpg` | *Solar panel installation* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/ed/64/cf/ed64cf35a9dfa96de4fab793419e0196.jpg] (Accessed: 9 November 2026). |
| `sustainable-city-illustration.jpg` | *Sustainable city illustration* (2026) [Illustration]. Pinterest. Available at: [https://i.pinimg.com/736x/04/e3/c2/04e3c27ca15b94fb07449f19080cdd20.jpg] (Accessed: 9 November 2026). |
| `glass-office-city-view.jpg` | *Glass office city view* (2026) [Photograph]. Pinterest. Available at: [https://i.pinimg.com/736x/79/39/79/79397956de598a91b165001637fd0f7a.jpg] (Accessed: 9 November 2026). |

## AI use declaration

| Tool | Used for | Student contribution |
|---|---|---|
| Anthropic Claude (Sonnet 5.5) | Structuring this README, `CHANGELOG.md` and `robots.txt`/`sitemap.xml`; auditing the site against the Part 3 rubric; writing the enquiry/contact form additions (checkbox, radio and dropdown controls, validation rules, Formspree sending with fallback), rolling intake dates, meta keywords, image filenames and alt text | Supplied the repository, rubric and feedback; reviewed, tested, edited and committed the changes; responsible for understanding and explaining all submitted code |
| Canva | Creating `community-lab-hero.png` | Designed the graphic |

If using images from Pinterest, the direct link to Pinterest and original creator should be checked prior to submission for each image so it can be traced to the original creator and usage terms. Chat prompts can be provided upon request.

## References and source use

In-text citations are used throughout the site when factual and/or technical support is provided. For instance, the youth-unemployment statistic on the home page, the lab maps provided by Statistics South Africa, and the form and accessibility implementation provided by MDN and W3C resources. The sources that have been informed of the project are listed below.

## References

GitHub (n.d.) *GitHub Pages documentation*. Available at: https://docs.github.com/en/pages (Accessed: 5 November 2026).

Google (n.d.) *Google Search Central: Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt (Accessed: 5 November 2026).

Google (n.d.) *Google Search Central: Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-submit-sitemaps (Accessed: 5 November 2026).

GreenSock (n.d.) *GSAP documentation*. Available at: https://gsap.com/docs/v3/ (Accessed: 5 November 2026).

MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 5 November 2026).

MDN Web Docs (n.d.) *HTML dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog (Accessed: 5 November 2026).

Leaflet (n.d.) *Leaflet: An open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com/ (Accessed: 5 November 2026).

Anglia Ruskin University (n.d.) *Harvard referencing*. Available at: https://library.aru.ac.uk/referencing/ (Accessed: 5 November 2026). This institutional guide was used to present AI-assistance and other sources in Harvard style.

Anthropic (2026) *Claude Sonnet 5.5* [Large language model]. Available at: https://claude.ai/ (Accessed: 7 November 2026). Prompt: 'Create for me README file for Part 3'. Used Structure this README from the repository contents and the Part 2 marker feedback; the content was reviewed and edited by the student (Anglia Ruskin University, n.d.).

OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 5 November 2026).

Statistics South Africa (2026) *Labour market trends and youth unemployment statistics*. Available at: https://www.statssa.gov.za/?p=18215 (Accessed: 5 November 2026).

World Wide Web Consortium (W3C) (2023) *Web Content Accessibility Guidelines (WCAG) 2.2*. Available at: https://www.w3.org/TR/WCAG22/ (Accessed: 5 November 2026).

BASIC (2026) BASIC Community Future Lab. Available at: https://www.basiccommunity.org/ (Accessed: 02 October 2026).

Google Fonts (2026) Google Fonts. Available at: https://fonts.google.com/ (Accessed: 02 October 2026).

MDN Web Docs (2026) CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 02 October 2026).

MDN Web Docs (2026) Flexible Box Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 02 October 2026).

MDN Web Docs (2026) HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 02 October 2026).

W3Schools (2026) HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: 02 October 2026).

W3Schools (2026) CSS Tutorial. Available at: https://www.w3schools.com/css/ (Accessed: 02 October 2026).

W3Schools (2026) JavaScript Tutorial. Available at: https://www.w3schools.com/js/ (Accessed: 02 October 2026).

World Wide Web Consortium (W3C) (2026) HTML5 Specification. Available at: https://www.w3.org/TR/html5/ (Accessed: 02 October 2026).

World Wide Web Consortium (W3C) (2026) CSS Snapshot. Available at: https://www.w3.org/TR/CSS/ (Accessed: 02 October 2026).
