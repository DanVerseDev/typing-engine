// Entry point for ESM/Bundlers
import './src/typing-engine.js';

const TypingEngine = window.TypingEngine;

// Auto-initialize if running in a browser environment
if (typeof document !== 'undefined') {
    TypingEngine.autoInit();
}

export default TypingEngine;
