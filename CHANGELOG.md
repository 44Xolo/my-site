# Part 3 Changelog: Response to Part 2 Feedback

**Part 2 mark: 87/100.** This changelog records how the current BASIC Community Future Labs website addresses the lecturer's feedback. Commit links and dates for the cited examples are taken from the repository history; earlier project milestones retain their documented dates. The website has six pages: Home, About, Programmes, News, Enquiry and Contact.

## 1. Commit history

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

## 2. Dated changelog for the current site

**Part 2 mark: 1.5/5**

**Feedback:** The root-level site needed a dated changelog that described what changed and why.

**Action:** This file is the root-level changelog. Entries name the relevant pages, files and purpose of the work.

### 05 November 2026 — Part 2 feedback carried into Part 3

- Replaced table-based page layout with CSS Grid and Flexbox rules in `css/style.css`.
- Improved visible hover, focus, active and disabled states for navigation, buttons and form controls.
- Added descriptive page metadata, skip navigation and responsive layout documentation.
- Recorded the corrections in the README and changelog so the response to earlier feedback is traceable.

### 05–07 November 2026 — Part 3 features and refinements

- Added programme search, category filtering and sorting in `programmes.html` and the shared site JavaScript.
- Added validated volunteer, sponsor, partnership and contact form interactions in `enquiry.html` and `contact.html`.
- Added interactive maps to `contact.html`, plus a keyboard-accessible image lightbox to `index.html`.
- Added the News page, category filters, newsletter form and expandable story content.
- Added page-specific metadata, social-sharing previews and the `robots.txt` and `sitemap.xml` files.
- Relevant changes are recorded in the linked commit history in section 1.

### 09 November 2026 — File naming and project documentation

- Renamed scripts, stylesheets and image files to descriptive, lowercase kebab-case names.
- Updated HTML, CSS and JavaScript references to match the renamed files.
- Updated the README project structure and sitemap ordering; revised image credits and the home page's explanatory comments.
- Checked all six pages in the integrated browser, confirmed there were no broken images or console errors, and verified JavaScript syntax and local asset references.

## 3. References and attribution

**Part 2 mark: 2.5/5**

**Feedback:** Cite the youth-unemployment statistic, images and external resources, and identify any AI assistance.

**Action:** The README contains the reference list and AI-use declaration. The sources currently documented are summarized below.

### Youth-unemployment statistic

The Home page attributes its 60.9% youth-unemployment figure to Statistics South Africa:

Statistics South Africa (2026) *Labour market trends and youth unemployment statistics*. Available at: https://www.statssa.gov.za/?p=18215 (Accessed: 5 November 2026).

The figure is identified on the page with a link to the source. The reported statistic should be checked against the cited release before final submission to ensure the period and wording match the source.

### Images

The README lists the local image filenames and gives Harvard Anglia-style, 2026-dated Pinterest reference entries. The source information provided for the images was Pinterest.

Individual Pinterest pin URLs, original creator names and licence details have not been provided. Pinterest may host an image without being its original creator. Replace each marked URL field in the README with the direct pin and, where possible, record the original creator and reuse terms before submission.

### Other external resources

| Resource | Use in the site | Source |
|---|---|---|
| Google Fonts: Inter, Montserrat and Space Grotesk | Typography | https://fonts.googleapis.com/ |
| GSAP 3.12.5 and ScrollTrigger | Home-page animation | https://gsap.com/docs/v3/ and https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ |
| Leaflet 1.9.4 | Interactive maps on `contact.html` | https://leafletjs.com/ and https://unpkg.com/leaflet@1.9.4/ |
| OpenStreetMap contributors | Map tiles and map data | https://www.openstreetmap.org/copyright |
| Google Maps | Directions links on `contact.html` | https://www.google.com/maps/ |

The site's social icons are inline SVG markup rather than an externally loaded icon library.

### AI assistance

The README identifies Anthropic Claude and Microsoft Copilot, their use in drafting, code explanation and debugging, and the dates recorded for that assistance. No shareable links to individual AI conversations were supplied, so this changelog does not invent conversation URLs.

## 4. Pseudo-classes and interaction states

**Part 2 mark: 9/10**

**Feedback:** Use and check interaction states consistently across interactive elements.

**Action:** Shared styles in `css/style.css`, `css/interactions.css` and `css/animations.css` include hover, focus, focus-visible, active and disabled states. They cover navigation, links, buttons, form controls, cards, gallery images and lightbox controls. Keyboard focus uses a visible outline, and disabled controls have a distinct appearance.

The available integrated browser was used to check page loading and key interactions, including the Home page lightbox and Programme sorting. A separate Firefox/Safari or mobile-device test matrix was not recorded, so cross-browser coverage should be completed and documented before submission.

## 5. Feedback carried over from Part 1

**Part 2 mark: 8/10**

**Feedback:** Tables were used for layout, and changes made after feedback were not clearly documented.

**Action:** Page layouts use CSS Grid and Flexbox in the shared stylesheets; the HTML pages contain no layout tables. Tables in the README are reserved for genuinely tabular information, such as marks, references and asset lists. Dated sections in this changelog and the Part 2 feedback summary in the README explain which areas changed and why.

---

For project details, page descriptions and the full reference list, see [`README.md`](README.md). Historical changes are linked to their original commits above; future commits should identify their change using a message such as `docs(CHANGELOG.md): record response to Part 2 feedback`.
