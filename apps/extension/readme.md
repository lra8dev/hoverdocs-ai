# HoverDocs AI

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/luckyra8od.hoverdocs-ai?style=flat-square&color=2563eb)](https://marketplace.visualstudio.com/items?itemName=luckyra8od.hoverdocs-ai)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/luckyra8od.hoverdocs-ai?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=luckyra8od.hoverdocs-ai)

> Context-Aware AI Code Summaries for VS Code

**HoverDocs AI** is your intelligent coding companion that explains complex logic instantly.
Powered by Google Gemini 1.5 Flash and Upstash Redis, it delivers lightning-fast, context-aware summaries of classes, functions, and variables directly inside your VS Code tooltip.

---

## ✨ Key Features

- **Smart Context Extraction**: Intelligently detects if you are hovering a variable (single line) or a class (block scope) and extracts _only_ the relevant context to save tokens.
- **Instant Caching**: Powered by **Upstash Redis**. If you have hovered this code before, the result is returned in `<50ms`.
- **Secure Authentication**: Enterprise-grade security via **Clerk**. Your usage is securely tracked and rate-limited.
- **Smart Debouncing**: Prevents accidental API calls while you fly your mouse across the screen.
- **Battery Included**: Comes with a Status Bar toggle to pause the AI when you need deep focus.

## 🚀 Usage

1. **Install** the extension from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=luckyra8od.hoverdocs-ai).
2. Click the **"Sign In"** button in the notification (or run `HoverDocs: Sign In` from the Command Palette).
3. **Authenticate** via your browser.
4. **Hover** over any code block to see the magic! ✨

## 🕹️ Commands

| Command                    | Description                                                   |
| :------------------------- | :------------------------------------------------------------ |
| `HoverDocs: Sign In`       | Authenticate with the HoverDocs server.                       |
| `HoverDocs: Sign Out`      | Remove your session token from VS Code Secure Storage.        |
| `HoverDocs: Toggle On/Off` | Pause or Resume the extension. (Also available in Status Bar) |

## ✊ Supported Languages

HoverDocs AI provides full context-aware code summaries for a growing set of popular programming languages:

`TypeScript`, `JavaScript`, `Java`, `C++`, `C#`, and `C`, and `GoLang`

_More languages coming soon!_

## 🔒 Privacy & Security

We take your code privacy seriously.

1. **Stateless Analysis**: Your code is sent to Gemini for analysis and immediately discarded.
2. **Hashed Caching**: We store a **SHA-256 hash** of the code block in Redis, not the code itself.
3. **Secure Tokens**: Auth tokens are stored in the OS Keychain via VS Code's `SecretStorage` API.

## 📄 License

Distributed under the [MIT License](https://github.com/lra8dev/hoverdocs-ai/blob/main/LICENSE).
