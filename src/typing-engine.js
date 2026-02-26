/**
 * Typing Engine
 * High-performance typing effect library.
 * 2026 @ DanVerse
 */
class TypingEngine {
    constructor(options = {}) {
        this.instances = new Map();
        this.observer = null;
        this.isTabVisible = true;
        this.defaultDelay = options.delay ?? 100;
        this.defaultDeleteDelay = options.deleteDelay ?? 50;
        this.defaultPause = options.pause ?? 2000;
        this.defaultStartDelay = options.startDelay ?? 500;
        this.defaultHumanity = options.humanity ?? 0;
        this.defaultChar = options.char ?? '_';

        this._init();
    }

    static autoInit(globalOptions = {}) {
        const engine = new TypingEngine(globalOptions);
        document.querySelectorAll('[data-texts]').forEach(el => {
            engine.register(el);
        });
        return engine;
    }

    _init() {
        if (typeof window === 'undefined') return;

        if (window.IntersectionObserver) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const instance = this.instances.get(entry.target);
                    if (instance) {
                        instance.isVisible = entry.isIntersecting;
                        if (instance.isVisible) this._tick(instance);
                    }
                });
            }, { threshold: 0.1 });
        }

        document.addEventListener('visibilitychange', () => {
            this.isTabVisible = !document.hidden;
            if (this.isTabVisible) {
                this.instances.forEach(instance => {
                    if (instance.isVisible) this._tick(instance);
                });
            }
        });
    }

    register(element, options = {}) {
        if (!element || this.instances.has(element)) return;

        const rawTexts = element.getAttribute('data-texts') || options.texts || '';
        const texts = Array.isArray(rawTexts) ? rawTexts : rawTexts.split(',').map(t => t.trim());

        if (texts.length === 0) return;

        const instance = {
            element,
            texts,
            pool: [],
            currentIndex: 0,
            charIndex: 0,
            isDeleting: false,
            isVisible: true,
            timer: null,
            delay: options.delay ?? this.defaultDelay,
            deleteDelay: options.deleteDelay ?? this.defaultDeleteDelay,
            pause: options.pause ?? this.defaultPause,
            startDelay: options.startDelay ?? this.defaultStartDelay,
            humanity: options.humanity ?? this.defaultHumanity,
            randomOrder: options.random ?? true,
            char: options.char ?? this.defaultChar
        };

        if (instance.randomOrder) {
            this._refillPool(instance);
            instance.currentIndex = instance.pool.pop();
        } else {
            instance.currentIndex = 0;
        }

        element.style.setProperty('--typing-char', `"${instance.char}"`);
        element.classList.add('typing-active');
        element.textContent = '';

        this.instances.set(element, instance);

        if (this.observer) {
            this.observer.observe(element);
        }

        requestAnimationFrame(() => this._tick(instance));
    }

    unregister(element) {
        const instance = this.instances.get(element);
        if (instance) {
            if (instance.timer) clearTimeout(instance.timer);
            if (this.observer) this.observer.unobserve(element);
            element.classList.remove('typing-active');
            this.instances.delete(element);
        }
    }

    _refillPool(instance) {
        instance.pool = instance.texts.map((_, i) => i);
        if (instance.randomOrder) {
            for (let i = instance.pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [instance.pool[i], instance.pool[j]] = [instance.pool[j], instance.pool[i]];
            }
        }
    }

    _tick(instance) {
        if (instance.timer) clearTimeout(instance.timer);
        if (!this.isTabVisible || !instance.isVisible) return;

        const currentFullText = instance.texts[instance.currentIndex];

        if (instance.isDeleting) {
            instance.charIndex--;
            if (instance.charIndex < 0) {
                instance.isDeleting = false;
                if (instance.randomOrder) {
                    if (instance.pool.length === 0) this._refillPool(instance);
                    instance.currentIndex = instance.pool.pop();
                } else {
                    instance.currentIndex = (instance.currentIndex + 1) % instance.texts.length;
                }
                instance.charIndex = 0;
                instance.timer = setTimeout(() => this._tick(instance), instance.startDelay);
                return;
            }
        } else {
            instance.charIndex++;
            if (instance.charIndex > currentFullText.length) {
                instance.isDeleting = true;
                instance.timer = setTimeout(() => this._tick(instance), instance.pause);
                return;
            }
        }

        instance.element.textContent = currentFullText.substring(0, instance.charIndex);

        let baseDelay = instance.isDeleting ? instance.deleteDelay : instance.delay;
        if (instance.humanity > 0) {
            const variation = baseDelay * instance.humanity;
            const randomFactor = (Math.random() * 2 - 1) * variation;
            baseDelay = Math.max(10, baseDelay + randomFactor);
        }

        instance.timer = setTimeout(() => this._tick(instance), baseDelay);
    }
}

if (typeof window !== 'undefined') {
    window.TypingEngine = TypingEngine;
}
