# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-05-25

### Added
- **Dedicated legal pages for Terms and Privacy** (`pages/terms.html`, `pages/privacy.html`, `pages/legal_styles.css`) — OMO now has standalone legal pages with the same editorial visual language as the rest of the website, plus footer links across the public site.
- **Dark mode and ES/EN controls on the core website experience** (`index.html`, `script.js`, `styles.css`) — the landing page and legal pages now include persistent theme and language controls in the navbar, stored locally in the browser.

### Changed
- **Privacy messaging on the landing page now matches the real onboarding flow** — the philosophy pillar no longer promises “sin cuentas” and now emphasizes no tracking plus clearer ownership of user data.
- **Terms content now scales to the future OMO catalog** — the legal copy was generalized so it applies to present and future Pocket Tools, not only OMONI.
- **Terms copy now sets clearer expectations around product errors and backup responsibility** — availability language now explicitly says the apps are made by humans for humans, and the liability section points users to backup/export/import functions in Settings.

### Fixed
- **Dark mode now also reaches `historia`, `glosario`, and `omoni_detailed`** — those pages now load the shared website script, expose navbar controls, and use theme-aware navbar styling instead of staying stuck in light mode.
- **Timeline year markers in `historia` now keep contrast in dark mode** — the `'13` / `'15` style circular markers now invert correctly against the active theme instead of blending into the page background.

## [1.3.0] - 2026-05-17

### Added
- **New landing page** — complete overhaul of `index.html` layout and content:
  - Philosophy section with three pillars (Minimalismo, Privacidad, Presencia) with inline SVG icons
  - Pocket Tools catalog grid — OMONI (active) + OMOBREATH, OMOHABITS, OMODIARY, OMOSILENCE, OMOSOCIAL (coming soon) with monogram placeholders
  - Historia strip section linking to Mi Historia page
  - Support button linking to Buy Me a Coffee
- **Glosario page** (`pages/glosario.html` + `pages/glosario_styles.css`) — dictionary-style reference for OMO ecosystem terminology:
  - Classic dictionary header (large light-weight title, edition label, full-width rule)
  - Two-column layout: term + grammatical category on the left, numbered definitions + usage quote on the right
  - Initial entries: OMO, Pocket Tool, uxOS
  - Linked from footer on all pages

### Changed
- **Footer navigation** — replaced `footer.js` dynamic path detection with inlined `<footer>` HTML per page using correct relative paths. Cleaner, no JS required, React-migration-ready
- **Removed "sin cuentas" messaging** from hero subtitle and OMONI card description to align with future account-based ecosystem model
- **Navbar logo** updated from `omo-letters.png` to `omo-logo.png`
- **Hero layout** updated to two-column: text left, `omo-logo.png` right; logo hidden on mobile

### Fixed
- Navigation `ERR_FILE_NOT_FOUND` error caused by absolute paths (`/pages/...`) in `footer.js` when opening files locally without a server

## [1.2.0] - 2026-04-28

### Added
- **OMO ecosystem redesign** — complete visual and conceptual overhaul aligned with the OMO philosophy and MAIN.md:
  - New full-screen hero section with two-column layout (text + OMO logo)
  - OMO ecosystem section replacing the old intro card copy
  - Historia teaser section linking to the new "Mi Historia" page
- **Mi Historia page** (`pages/historia.html`) — personal timeline with entrance scroll animation:
  - Age 17: first Android app on an old computer
  - Age 21: working as a gardener to buy first Mac, pivot to iOS/SwiftUI
  - Open aspirational node describing the OMO vision
- **`pages/historia_styles.css`** — self-contained timeline styles with IntersectionObserver fade-up animation
- **`omo-logo.png`** used in hero visual and navbar

### Changed
- **Design system** — removed chakra-based color palette, replaced with monochromatic charcoal scale:
  - Removed `--color-root/sacral/solar/heart/throat/third-eye/crown/disabled`
  - Added `--color-accent`, `--color-accent-soft`, `--color-accent-muted`
  - Feature chips updated from red (#F44336) to charcoal (#4a4a4a)
- **index.html** — removed circular apps navigation and all 6 chakra sections (Crea, Control, Genius, Express, Totem, Dreams)
- **OMONI card** — chakra label replaced with "Pocket Tool Nº 1", copy updated to OMO ecosystem voice
- **omoni_detailed.html** — "Root Chakra - Money Tool" replaced with "Pocket Tool Nº 1", chakra description updated
- **script.js** — stripped down from 219 to 19 lines; removed all circular nav, app status, and chakra section logic
- **footer.js** — added "Mi Historia" link
- **Navbar** — now uses `omo-logo.png` instead of `omo-letters.png`
- **`html { scroll-behavior: smooth }`** added globally

### Removed
- Circular apps layout (`.apps-circle`, `.circle-container`, `.app-circle`, `.progress-fill`)
- All 6 chakra section components and their per-chakra CSS rules
- Chakra color variables and status chip color overrides
- All "sin cuentas / no accounts" messaging from public-facing copy

## [1.1.0] - 2025-07-23

### Added
- **Donation system integration**:
  - Buy Me a Coffee integration with custom styling
  - Prominent donation section in main OMO section
  - Donation link in footer with special styling
  - Custom donation button with gradient design
- **Enhanced disabled state styling**:
  - Improved visual feedback for disabled chakras
  - Grayscale filter for disabled app icons
  - Maintained text readability for disabled sections
  - Non-clickable status chips for disabled apps

### Changed
- **Disabled chakra behavior**:
  - Removed blur effects from disabled sections
  - Changed to grayscale icon filter for better UX
  - Maintained full text readability for user information
  - Disabled click events on status chips for unavailable apps
- **Donation system styling**:
  - Changed from gradient design to solid gray color for better browser compatibility
  - Hover effects with smooth animations
  - Responsive design for all screen sizes
  - Integrated seamlessly with existing design language

### Fixed
- **User experience improvements**:
  - Users can now read full descriptions of disabled apps
  - Clear visual distinction between available and disabled states
  - Better accessibility for donation links
  - Consistent styling across all donation elements
- **Browser compatibility**:
  - Fixed donation button rendering issues in production environments
  - Improved cross-browser compatibility for donation elements
  - Ensured consistent appearance across different hosting platforms

### Documentation
- Updated donation system implementation
- Enhanced user experience documentation
- Improved accessibility guidelines

## [1.0.0] - 2025-07-08

### Added
- Completely flat minimalist design with `#fbeee6` background
- Application status system (available/coming soon)
- Smooth navigation between sections
- Informative tooltips for each application
- Minimalist footer with navigation links
- Optimized circular layout to display all 7 applications
- Application status badge system
- Detailed descriptions of each chakra and its corresponding application

### Changed
- **Complete minimalist redesign**:
  - Removed all gradients
  - Flat `#fbeee6` background with black text
  - Removed shadows and complex visual effects
  - Simple black borders
  - Simplified animations
- **Updated application system**:
  - 6 applications marked as "Available"
  - 1 application (OMO Express) marked as "Coming Soon" as example
  - Removed percentage progress system
  - Simplified states (available/disabled)
- **Updated typography**:
  - Changed from Inter to Poppins for better readability
  - Adjusted font sizes and weights
- **Improved content structure**:
  - Individual sections for each chakra
  - More detailed and specific descriptions
  - Better content organization

### Removed
- Progress bars and percentage system
- Gradients and complex visual effects
- Shadows and depth effects
- Animated "LIVE" badge system
- App Store references (placeholder)

### Fixed
- Circular layout corrected to properly display all 7 applications
- Element positioning on mobile devices
- Optimized navigation between sections
- Tooltips working correctly on all devices

### Documentation
- Complete README.md with usage instructions
- .gitignore configured for web development
- Organized project structure
- Customization and extension examples

---

## Types of changes

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for features that will be removed soon.
- `Removed` for removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities. 
