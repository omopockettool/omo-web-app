# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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