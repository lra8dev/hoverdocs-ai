# HoverExplain Changelog

## Version 1.4.0 — February 3, 2026

### 🔧 Improved

- Simplified monorepo by removing `@hoverexplain/utils` package
- Moved code hash generation inline to `SummaryController`
- Renamed `gemini-api` → `ai-model` for better abstraction
- Improved type imports and code organization

### 🐛 Bug Fixes:

- Fixed README badge URLs
- Added missing braces in conditional statements

### 📦 Dependencies:

- Removed `@hoverexplain/utils` package
- Cleaned up workspace dependencies

---

## Version 1.3.0 — February 1, 2026

### ⚡ Performance

- Refactored rate limiter into a singleton pattern with lazy initialization for improved memory efficiency.
- Added performance timing logs to track summary generation duration.
- Extracted cache TTL into a static constant for better maintainability.

### 🔧 Improved

- Refactored `Toast` utility from function to class-based API with `info`, `warn`, and `error` methods.
- Enhanced `AuthManager` with token expiration handling (30-day validity).
- Improved URI handler with async/await pattern and cleaner token validation.
- Better type safety with `as const` assertions in config values.
- Configurable rate limit tokens and window via environment variables.
- Improved env schema with `z.preprocess` for better PORT validation.

### 🐛 Bug Fixes

- Fixed status bar notification appearing on initial load (now silent by default).
- Fixed hover provider starting as enabled instead of disabled.
- Improved error messages for authentication and rate limiting.
- Fixed README demo gif URL to use absolute GitHub path.

### 📦 Dependencies

- Updated `@clerk/express` to v1.7.67.
- Updated `@google/genai` to v1.39.0.

---

## Version 1.2.0 — January 31, 2026

### Added

- Rebrand to HoverExplain (name, marketing assets, and store metadata).
- New onboarding experience: step-by-step guidance and clearer in-product tips.
- Packaging helper command for producing a VSIX:
```bash
pnpm dlx @vscode/vsce package --no-dependencies
```

### Changed

- Clarified privacy and security messaging so users understand what (if any) data is transmitted.
- Improved hover explanation wording for greater clarity and reduced noise.

### Fixed

- Corrected the extension icon URL so the icon displays properly in the Marketplace.
- Various small UX fixes (status bar messages, prompt handling, and edge-case rendering).

Notes

- No breaking changes in this release. We recommend reloading or restarting VS Code after updating.

---

## Version 1.1.0 — January 30, 2026

### Added

- Branding: HoverLens
- Improved documentation and onboarding
- Updated Marketplace description
- New extension icon

### Changed

- Clearer privacy and security messaging
- Improved hover explanation clarity

### Fixed

- Minor UX inconsistencies

## 1.0.0

- Initial release