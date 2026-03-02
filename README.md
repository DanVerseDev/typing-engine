# Typing Engine 🚀

A high-performance, resource-efficient typing effect engine for the modern web. Built for the DanVerse ecosystem.

[**✨ View Live Demo**](https://danversedev.github.io/typing-engine/examples/index.html)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/Version-1.1.1-blue)
![Size](https://img.shields.io/badge/Size-2kb-brightgreen)

## ✨ Features

- **🔋 Zero Config:** Auto-initializes any element with the `data-texts` attribute.
- **🔋 Resource Efficient:** Uses `IntersectionObserver` to pause animations when elements are not visible.
- **📱 Tab-Aware:** Integrates with the Page Visibility API to stop all timers when the browser tab is inactive.
- **🎲 Smart Randomization:** Uses the Fisher-Yates algorithm to shuffle text lists without immediate repetition.
- **🧠 Organic Feel:** Adjustable "Humanity" factor for human-like typing variations.
- **⚡ GPU Accelerated:** Cursor blinking is handled by CSS animations.

## 📦 Installation

### Via NPM
```bash
npm install typing-engine
```

### Via CDN (Unpkg)
```html
<link rel="stylesheet" href="https://unpkg.com/typing-engine/style">
<script src="https://unpkg.com/typing-engine"></script>
```

## 🚀 Usage

### 1. Zero-Config (Automatic)
Just add the `data-texts` attribute to any HTML element. The engine will find it and start automatically.

```html
<div data-texts="Hello World, Experience the flow, Zero configuration needed"></div>
```

### 2. Modern Environments (Manual Control)
If you need custom settings or manual registration:

```javascript
import TypingEngine from 'typing-engine';
import 'typing-engine/style';

const engine = new TypingEngine({
  delay: 80,
  humanity: 0.3,
  char: '|'
});

const element = document.querySelector('.my-text');
engine.register(element);
```

## 🛠 API

### `TypingEngine.autoInit(options)` (Static)
Scans the document for `[data-texts]` elements and registers them.

### `engine.register(element, options)`
Registers a new DOM element manually.
- `texts`: Array of strings or comma-separated string (overrides `data-texts`).
- `delay`: Typing delay (ms).
- `deleteDelay`: Deletion delay (ms).
- `pause`: Pause before starting to delete (ms).
- `startDelay`: Pause after deleting before typing again (ms).
- `humanity`: Organic variation (0 to 1).
- `random`: Shuffle list toggle.
- `char`: Custom cursor character.

### `engine.unregister(element)`
Stops the effect and clears resources.

## 📄 License
MIT License - Copyright (c) 2026 Daniel Martí

---
Built with ❤️ by [Daniel Martí](https://gravatar.com/danversedev) aka DanVerse(https://github.com/DanVerseDev).
