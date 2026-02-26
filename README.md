# Typing Engine 🚀

A high-performance, resource-efficient typing effect engine for the modern web. Built for the DanVerse ecosystem.

[**✨ View Live Demo**](https://danversedev.github.io/typing-engine/examples/index.html)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/Version-1.1.0-blue)
![Size](https://img.shields.io/badge/Size-2kb-brightgreen)

## ✨ Features

- **🔋 Resource Efficient:** Uses `IntersectionObserver` to pause animations when elements are not visible.
- **📱 Tab-Aware:** Integrates with the Page Visibility API to stop all timers when the browser tab is inactive.
- **🎲 Smart Randomization:** Uses the Fisher-Yates algorithm to shuffle text lists without immediate repetition.
- **🧠 Organic Feel:** Adjustable "Humanity" factor for human-like typing variations.
- **⚡ GPU Accelerated:** Cursor blinking is handled by CSS animations.
- **🔌 Zero Dependencies:** Pure Vanilla JavaScript.

## 📦 Installation

### Via NPM
```bash
npm install typing-engine
```

### Via CDN (Unpkg)
```html
<link rel="stylesheet" href="https://unpkg.com/typing-engine/src/typing-engine.css">
<script src="https://unpkg.com/typing-engine/src/typing-engine.js"></script>
```

## 🚀 Usage

### 1. Modern Environments (Vite, Webpack, ES Modules)
```javascript
import TypingEngine from 'typing-engine';
import 'typing-engine/style';

const engine = new TypingEngine();
const element = document.querySelector('.my-text');

engine.register(element, {
  delay: 80,
  humanity: 0.3
});
```

### 2. Traditional Setup
```html
<div class="dynamic-text" data-texts="Hello World, Experience the flow"></div>

<script src="path/to/typing-engine.js"></script>
<script>
  const engine = new TypingEngine();
  document.querySelectorAll('.dynamic-text').forEach(el => engine.register(el));
</script>
```

## 🛠 API

### `engine.register(element, options)`
Registers a new DOM element and starts the effect.
- `texts`: Array of strings or comma-separated string.
- `delay`: Typing delay (ms).
- `deleteDelay`: Deletion delay (ms).
- `pause`: Pause before starting to delete (ms).
- `startDelay`: Pause after deleting before typing again (ms).
- `humanity`: Organic variation (0 to 1).
- `random`: Shuffle list toggle.

### `engine.unregister(element)`
Stops the effect and clears resources.

## 📄 License
MIT License - Copyright (c) 2024 Daniel Martí

---
Built with ❤️ by [Daniel Martí](https://github.com/DanVerseDev).
