# Typing Engine 🚀

A high-performance, resource-efficient typing effect engine for the modern web.

[**✨ View Live Demo**](https://danversedev.github.io/typing-engine/examples/index.html)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Size](https://img.shields.io/badge/Size-2kb-brightgreen)

## ✨ Features

- **🔋 Resource Efficient:** Uses `IntersectionObserver` to pause animations when elements are not visible.
- **📱 Tab-Aware:** Integrates with the Page Visibility API to stop all timers when the browser tab is inactive.
- **🎲 Smart Randomization:** Uses the Fisher-Yates algorithm to shuffle text lists without immediate repetition.
- **⚡ GPU Accelerated:** Cursor blinking is handled by CSS animations, keeping the main thread free.
- **🔌 Zero Dependencies:** Pure Vanilla JavaScript.

## 📦 Installation

Just include the files in your project:

```html
<link rel="stylesheet" href="src/typing-engine.css">
<script src="src/typing-engine.js"></script>
```

## 🚀 Usage

### 1. Simple Setup
Add the `data-texts` attribute to any element:

```html
<div class="dynamic-text" data-texts="Hello World, Experience the flow, Smart & Efficient"></div>
```

### 2. Initialize
```javascript
const engine = new TypingEngine();
document.querySelectorAll('.dynamic-text').forEach(el => engine.register(el));
```

### 3. Advanced Configuration
```javascript
const engine = new TypingEngine({
    delay: 80,          // Typing delay (ms)
    deleteDelay: 40,    // Deleting delay (ms)
    pause: 3000,        // Pause before deleting (ms)
    humanity: 0.3,      // Organic feel (0 to 1). Adds random delay variations.
    random: true        // Shuffle text list (true/false)
});
```

## 🛠 API

### `engine.register(element, options)`
Registers a new DOM element and starts the effect.
- `texts`: Array of strings or comma-separated string.
- `delay`: Typing delay (ms).
- `deleteDelay`: Deletion delay (ms).
- `pause`: Pause before starting to delete (ms).
- `startDelay`: Pause after deleting before starting to type again (ms).
- `humanity`: Organic variation (0 to 1).
- `random`: Shuffle list toggle.

### `engine.unregister(element)`
Stops the effect, clears timers, and removes the element from tracking. Essential for Single Page Applications (SPA) to prevent memory leaks.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Built with ❤️ by [Daniel Martí](https://github.com/DanVerseDev).
