# Changelog

All notable changes to the BASIC Community Future Labs website (WEDE5020 Part 3) are documented here, newest first. Dates use the format YYYY-MM-DD.

---

## 2026-11-09 — Project structure and naming cleanup

### Changed
- Renamed shared scripts to `js/site.js` and `js/animations.js`, and renamed their stylesheets to `css/interactions.css` and `css/animations.css`.
- Renamed image assets to descriptive, lowercase kebab-case filenames without spaces or redundant prefixes.
- Updated page references, social preview URLs, the sitemap order and README project structure to match the current files.
- Updated the News page image and alternative text to match the image content.

### Verified
- All six pages load without browser errors or broken images.
- All local HTML references resolve, and JavaScript syntax checks pass.

---

## 2026-11-07 — Rubric compliance: forms, SEO and images

### Added
- **`enquiry.html`**
  - Required programme dropdown with validation.
  - Volunteer availability checkboxes (at least one must be selected).
  - Experience level radio button group.
  - Required consent checkbox.
- **`contact.html`**
  - Required consent checkbox.
  - Optional newsletter subscription checkbox.
- **`js/part3.js`**
  - New `checked` validation rule for checkbox and consent fields.
  - Select validation that runs on `change`.
  - Contact form submission through `FORM_ENDPOINT` (Formspree), with a clear on-page success message.
  - Automatic `mailto:` fallback if the Formspree request fails.
- **`css/part3.css`**: styles for checkbox, radio and fieldset controls, including focus and error states.
- **SEO files**
  - `robots.txt` and `sitemap.xml` using the live GitHub Pages URLs.
  - Site map section in `README.md` with `images/sitemap.png`.

### Changed
- **`enquiry.html`**: the volunteer response now lists the selected experience level and availability.
- **`contact.html`**: submit button renamed to "Send message".
- **`js/part3.js`**: programme intake dates now roll forward automatically.
- **SEO metadata**: page-specific meta keywords on `programmes.html`, `enquiry.html` and `contact.html`.
- **Images**
  - Files renamed with descriptive, hyphenated names (for example `TOGETHER.jpg` → `community-members-together.jpg`).
  - All references in HTML, CSS and JS updated to the new names.
  - Alt text rewritten to describe what each image actually shows.

### Fixed
- Programme intake dates were hard-coded to 2026 dates that had already passed; they now roll forward so the listed intakes are always upcoming.

---

## 2026-11-05 — Feedback repository continuity

### Added
- Link between this Part 3 repository and the original Part 2 repository: https://github.com/EMKNDW/wede5020-g2-2026-formative-2-part-2-44xolo

### Documentation
- Reviewed the Part 2 feedback and recorded every completed correction in `README.md` and this changelog.
- Corrections recorded cover: layout tables, commit and changelog documentation, interactive-state styling, metadata, image names and alt text, semantic accessibility, references and deployment placeholders.

---

## 2026-11-05 — SEO and form completion

### Added
- Page metadata, Open Graph and Twitter sharing details on all five pages.
- Accessible enquiry and contact result announcements in `enquiry.html`, `contact.html` and `js/part3.js`, so screen readers announce form outcomes.
- Contact `mailto:` workflow connected to `info@basicfuturelabs.org`, with encoded subject and body values.

### Verified
- `robots.txt`, `sitemap.xml` and canonical GitHub Pages URLs cover every page.
- JavaScript form validation, enquiry calculations, required fields, phone and email formats, and live form feedback all behave as expected.

---

## 2026-11-05 — Image ownership documentation

### Added
- Ownership and licence register in `README.md` covering every local image, logo, favicon and animation.

### Changed
- BASIC/student-created assets are recorded as owned by Hlompho Muzi Xolo / BASIC Community Future Labs for academic use.

### Removed
- Unresolved image-source placeholders.

### Notes
- Duplicate legacy filenames are retained only for compatibility.

---

## 2026-11-05 — Accessible gallery lightbox

### Added
- **`index.html`**: full-size gallery image viewing.
- **`js/part3.js`**
  - Backdrop click to close.
  - Keyboard navigation between images.
  - Focus trapping while the lightbox is open.
  - Focus restoration to the triggering element on close.
- **`css/part3.css`**: responsive lightbox layout and keyboard focus styles.

---

## 2026-11-05 — Part 3 submission preparation

### Added
- **Programmes (`js/part3.js`)**: searchable, filterable and sortable programme data.
- **Enquiry (`enquiry.html`, `js/part3.js`)**: enquiry calculations and validated form responses.
- **Contact (`contact.html`, `js/part3.js`)**: `mailto:` workflow.
- **Maps (`contact.html`, `js/maps.js`)**: Leaflet maps with markers, popups and Google Maps directions.
- **Interactive components (`js/part3.js`)**: accordion, tabs, modal, lightbox and keyboard controls.
- **Styling**: responsive and interaction styles in `css/part3.css` and `css/style.css`.
- **Animation**: `js/gsap.js` and `css/gsap-animations.css`.
- **Documentation**: references, deployment documentation, canonical links and repository documentation across the HTML pages and `README.md`.

### Verified
- Repository and deployment instructions checked through GitHub.

---

## 2026-11-05 — Part 2 feedback implementation

### Changed
- Removed HTML table-based layout from the whole site; CSS Grid and Flexbox are used for layout.
- Expanded hover, active, focus-visible and disabled styling across navigation, buttons, cards and interactive controls.
- Improved image alt text, semantic headings and descriptive image filenames.
- Replaced placeholder deployment-domain instructions with the GitHub Pages URL.

### Added
- Skip navigation link.
- Descriptive meta titles and descriptions on every page.
- Documented responsive breakpoints at 1024px, 768px and 480px.
- Dated README and changelog entries documenting the feedback corrections.

---

## 2026-11-05 — Initial website implementation

### Added
- Five-page BASIC Community Future Labs website.
- Consistent navigation and footer across all pages.
- Organisation content and programme information.
- Initial responsive CSS and JavaScript interactions.