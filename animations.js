/**
 * Sistema de animaciones románticas optimizado
 * Versión: 2.0.0
 * Autor: Diana
 * Descripción: Animaciones suaves y profesionales para página gótica victoriana
 */
class RomanticAnimations {
    constructor() {
        this.config = {
            particles: {
                count: 15,
                speed: 0.3,
                colors: ['#8b4b6b', '#d4a574'],
                types: ['heart', 'rose']
            },
            animations: {
                duration: 0.8,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                stagger: 0.1
            },
            performance: {
                mobileOptimized: window.innerWidth < 768,
                reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            }
        };
        this.init();
    }

    init() {
        this.createRomanticParticles();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupTypewriterEffect();
        this.setupParallaxEffect();
        this.setupRoseAnimations();
        this.setupGothicMist();
        this.setupCustomCursor();
    }

    // Generar partículas románticas optimizadas
    createRomanticParticles() {
        if (this.config.performance.reducedMotion) return;
        
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = this.config.performance.mobileOptimized ? 8 : this.config.particles.count;
        
        // Limpiar partículas existentes
        particlesContainer.innerHTML = '';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const isRose = Math.random() > 0.5;
            particle.className = `particle ${isRose ? 'rose' : 'heart'}`;
            
            // Posicionamiento optimizado
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
            
            // Estilos románticos optimizados
            particle.style.textShadow = '0 0 8px rgba(212, 165, 116, 0.6)';
            particle.style.filter = 'drop-shadow(0 0 3px rgba(139, 75, 107, 0.6))';
            particle.style.willChange = 'transform, opacity';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Animaciones basadas en scroll con Intersection Observer
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observar elementos con clases de animación
        const animatedElements = document.querySelectorAll(
            '.gothic-fade-in, .gothic-slide-up, .gothic-scale-in, .gothic-rotate-in'
        );
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Efectos de hover optimizados para iconos románticos
    setupHoverEffects() {
        const hoverElements = document.querySelectorAll(
            '.romantic-icon, .heart, .rose-animated, .rose-float, .rose-glow, .rose-spin, .card'
        );

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.addRomanticHoverEffect(element);
            });

            element.addEventListener('mouseleave', () => {
                this.removeRomanticHoverEffect(element);
            });
        });
    }

    addRomanticHoverEffect(element) {
        element.style.transform = 'scale(1.05) translateY(-2px)';
        element.style.filter = 'drop-shadow(0 0 15px rgba(212, 165, 116, 0.6))';
        element.style.transition = `all ${this.config.animations.duration}s ${this.config.animations.easing}`;
        element.style.willChange = 'transform, filter';
    }

    removeRomanticHoverEffect(element) {
        element.style.transform = '';
        element.style.filter = '';
        element.style.willChange = 'auto';
    }

    // Efecto de escritura en el título
    setupTypewriterEffect() {
        const title = document.querySelector('h1');
        if (!title) return;

        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typewriterInterval = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typewriterInterval);
            }
        }, 100);
    }

    // Efecto de paralaje desactivado - partículas estáticas
    setupParallaxEffect() {
        // Paralaje desactivado para mantener partículas estáticas en el top
        console.log('Paralaje desactivado - partículas estáticas en el top');
    }

    // Animaciones especiales para rosas románticas
    setupRoseAnimations() {
        const roses = document.querySelectorAll('.rose-animated, .rose-float, .rose-glow, .rose-spin');
        
        roses.forEach((rose, index) => {
            // Agregar delay escalonado
            rose.style.animationDelay = `${index * 0.2}s`;
            
            // Efecto de hover especial para rosas
            rose.addEventListener('mouseenter', () => {
                rose.style.animationPlayState = 'paused';
                rose.style.transform = 'scale(1.3) rotate(10deg)';
                rose.style.filter = 'drop-shadow(0 0 20px rgba(212, 165, 116, 1))';
            });

            rose.addEventListener('mouseleave', () => {
                rose.style.animationPlayState = 'running';
                rose.style.transform = '';
                rose.style.filter = '';
            });
        });
    }

    // Crear efecto de neblina gótica
    setupGothicMist() {
        const mist = document.createElement('div');
        mist.className = 'gothic-mist';
        document.body.appendChild(mist);
    }

    // Cursor personalizado romántico
    setupCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'gothic-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Animación suave del cursor
        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            
            cursor.style.left = cursorX - 10 + 'px';
            cursor.style.top = cursorY - 10 + 'px';
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
    }

    // Método para optimizar rendimiento
    optimizePerformance() {
        // Reducir animaciones en dispositivos móviles
        if (window.innerWidth < 768) {
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                if (index > 8) { // Mantener solo 8 partículas en móvil
                    particle.style.display = 'none';
                }
            });
        }

        // Pausar animaciones cuando la pestaña no está activa
        document.addEventListener('visibilitychange', () => {
            const particles = document.querySelectorAll('.particle');
            particles.forEach(particle => {
                if (document.hidden) {
                    particle.style.animationPlayState = 'paused';
                } else {
                    particle.style.animationPlayState = 'running';
                }
            });
        });
    }

    // Crear efecto de pétalos románticos cayendo
    createFallingPetals() {
        const petalsContainer = document.createElement('div');
        petalsContainer.className = 'falling-petals';
        petalsContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        document.body.appendChild(petalsContainer);

        const createPetal = () => {
            const petal = document.createElement('div');
            const romanticIcons = ['🌹', '💕', '💖', '💗', '💘'];
            petal.innerHTML = romanticIcons[Math.floor(Math.random() * romanticIcons.length)];
            petal.style.cssText = `
                position: absolute;
                font-size: 20px;
                color: #8b4b6b;
                opacity: 0.7;
                left: ${Math.random() * 100}%;
                animation: gothic-fall 8s linear forwards;
                text-shadow: 0 0 10px rgba(212, 165, 116, 0.8);
                filter: drop-shadow(0 0 5px rgba(139, 75, 107, 0.6));
            `;
            petalsContainer.appendChild(petal);

            // Limpiar pétalo después de la animación
            setTimeout(() => {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 8000);
        };

        // Crear pétalos cada 4 segundos (menos frecuente para mejor rendimiento)
        setInterval(createPetal, 4000);
    }
}

// Inicializar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const romanticAnimations = new RomanticAnimations();
    
    // Activar optimizaciones de rendimiento
    romanticAnimations.optimizePerformance();
    
    // Activar efecto de escritura con delay
    setTimeout(() => {
        romanticAnimations.setupTypewriterEffect();
    }, 500);
});

// Función para crear efectos de sparkles románticos
function createRomanticSparkle(x, y) {
    const sparkle = document.createElement('div');
    const romanticIcons = ['🌹', '💕', '💖', '✨'];
    sparkle.innerHTML = romanticIcons[Math.floor(Math.random() * romanticIcons.length)];
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 16px;
        color: #8b4b6b;
        pointer-events: none;
        z-index: 9999;
        animation: sparkle-fade 1s ease-out forwards;
        text-shadow: 0 0 10px rgba(212, 165, 116, 0.8);
        filter: drop-shadow(0 0 5px rgba(139, 75, 107, 0.6));
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 1000);
}

// Agregar CSS para efecto de sparkle
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Efecto de click con sparkles románticos
document.addEventListener('click', (e) => {
    if (Math.random() > 0.7) { // Solo 30% de probabilidad para no sobrecargar
        createRomanticSparkle(e.clientX, e.clientY);
    }
});