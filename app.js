/**
 * Aplicación Angular optimizada para página gótica victoriana romántica
 * Versión: 1.0.0
 * Autor: Diana
 * Descripción: Página de amor eterno con estética gótica victoriana
 */

(function() {
    'use strict';

    // Aplicación Angular principal
    angular.module('gothicApp', [])
    .controller('GothicController', ['$scope', '$timeout', '$window', function($scope, $timeout, $window) {
        
        // Configuración de la aplicación
        $scope.appConfig = {
            title: '♥ Amor Eterno ♥',
            subtitle: 'Donde el corazón susurra al vacío lo que ya no puede decir',
            version: '1.0.0',
            author: 'Diana',
            theme: 'gothic-victorian-romantic'
        };

        // Datos del contenido
        $scope.content = {
            sections: [
                {
                    id: 'ultimo-adios',
                    title: '🌹 El Último Adiós 🌹',
                    content: 'En los jardines secretos del alma, donde florecen las rosas más hermosas pero inalcanzables, vive el amor que trasciende lo terrenal. Entre pétalos carmesí y espinas doradas, los corazones laten con la melancolía de lo imposible, creando la más bella de las tragedias románticas.',
                    quote: 'El amor verdadero no conoce distancias, solo eternidades'
                },
                {
                    id: 'poema-amor',
                    title: '♥ Poema del Amor Imposible ♥',
                    poem: {
                        title: '🌹 Entre Rosas y Suspiros 🌹',
                        stanzas: [
                            {
                                lines: [
                                    'En jardines de luna plateada,',
                                    'donde las rosas lloran rocío,',
                                    'mi corazón susurra tu nombre',
                                    'en ecos de amor perdido.'
                                ]
                            },
                            {
                                lines: [
                                    'Eres la estrella que no puedo tocar,',
                                    'la melodía que no puedo cantar,',
                                    'el sueño que al alba se desvanece',
                                    'pero en mi alma permanece.'
                                ]
                            },
                            {
                                lines: [
                                    'Como pétalos al viento dispersos,',
                                    'son mis versos de amor secreto,',
                                    'llevando en cada palabra',
                                    'el dolor de este amor incompleto.'
                                ]
                            },
                            {
                                lines: [
                                    'Y aunque el destino nos separe,',
                                    'y el tiempo borre nuestras huellas,',
                                    'en cada rosa que florezca',
                                    'revivirá nuestra historia de estrellas.'
                                ]
                            }
                        ],
                        conclusion: '💔 Porque el amor verdadero nunca muere, solo se transforma en eternidad... 💔'
                    }
                },
                {
                    id: 'palabras-no-enviadas',
                    title: '💔 Palabras No Enviadas 💔',
                    letter: {
                        greeting: 'A ti, que fuiste mi universo,',
                        intro: 'Palabras que el viento se llevará, pero mi alma guardará para siempre...',
                        paragraphs: [
                            'Escribo esta carta sabiendo que tal vez nunca la leas, pero necesito que estas palabras existan en algún lugar del mundo, aunque sea en la soledad de mi habitación. Ayer tomé la decisión más difícil de mi vida: dejarte ir. No porque mi amor por ti haya disminuido, sino porque a veces amar significa saber cuándo apartarse.',
                            'Entre todas las fechas que olvidé recordar, nunca podré olvidar que ayer se convirtió en el día en que nos convertimos en extraños. Pero hay algo que debo confesarte, aunque estas palabras solo las escuche el eco de mi soledad: yo sigo amándote con la misma intensidad que cuando éramos nosotros.',
                            'Mi amor por ti no necesitaba de nuestra relación para existir, y tampoco necesita de su ausencia para morir. Eres y serás siempre esa melodía que mi corazón tararea en silencio, ese verso que se escribe solo en las madrugadas cuando el mundo duerme y yo permanezco despierto pensando en lo que fuimos.',
                            'Sé que ya no tengo derecho a decirte estas cosas, sé que ya no soy parte de tu presente y tal vez nunca lo sea de tu futuro. Pero en este jardín secreto de mi alma, donde florecen las rosas inmortales de la memoria, tú sigues siendo la reina de cada pensamiento, la dueña de cada suspiro.',
                            'Te amaré desde la distancia que yo mismo impuse, te amaré en el silencio que ahora nos separa, te amaré hasta que mi último aliento se convierta en una oración susurrada con tu nombre.',
                            'Perdóname por amarte tanto que tuve que dejarte ir. Perdóname por convertir nuestro amor en una historia de amor imposible.'
                        ],
                        signature: 'Desde mi soledad eterna, Con un amor que ya no tiene hogar',
                        epilogue: 'Hay amores que solo pueden vivir en la memoria y morir en el silencio'
                    }
                }
            ]
        };

        // Configuración de animaciones
        $scope.animationSettings = {
            particles: {
                count: 15,
                types: ['heart', 'rose'],
                speed: 0.3,
                colors: ['#8b4b6b', '#d4a574']
            },
            effects: {
                enableParticles: true,
                enableHover: true,
                enableScroll: true,
                enableTypewriter: true,
                enableParallax: true
            },
            performance: {
                mobileOptimized: false,
                reducedMotion: false,
                lowPowerMode: false
            }
        };

        // Iconos románticos disponibles
        $scope.romanticIcons = {
            roses: ['🌹', '🌺', '🌻'],
            hearts: ['💕', '💖', '💗', '💘', '💝', '💞', '💟'],
            romantic: ['💌', '💍', '💎', '✨', '💫', '🌟'],
            all: ['🌹', '💕', '💖', '💗', '💘', '💝', '💞', '💟', '💌', '💍', '✨', '💫', '🌟']
        };

        // Estado de la aplicación
        $scope.appState = {
            isLoaded: false,
            isAnimating: false,
            currentSection: 0,
            particlesActive: true,
            soundEnabled: false
        };

        // Métodos de inicialización
        $scope.init = function() {
            $scope.detectDevice();
            $scope.setupPerformanceOptimizations();
            $scope.createParticles();
            $scope.setupAnimations();
            $scope.setupEventListeners();
            $scope.startTypewriterEffect();
            
            $scope.appState.isLoaded = true;
            console.log('🌹 Aplicación gótica victoriana inicializada correctamente 💕');
        };

        // Detección de dispositivo
        $scope.detectDevice = function() {
            const isMobile = $window.innerWidth < 768;
            const isTablet = $window.innerWidth >= 768 && $window.innerWidth < 1024;
            
            $scope.animationSettings.performance.mobileOptimized = isMobile;
            
            if (isMobile) {
                $scope.animationSettings.particles.count = 8;
                $scope.animationSettings.particles.speed = 0.2;
            } else if (isTablet) {
                $scope.animationSettings.particles.count = 12;
                $scope.animationSettings.particles.speed = 0.25;
            }
        };

        // Optimizaciones de rendimiento
        $scope.setupPerformanceOptimizations = function() {
            // Detectar preferencia de movimiento reducido
            if ($window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                $scope.animationSettings.performance.reducedMotion = true;
                $scope.animationSettings.effects.enableParticles = false;
                $scope.animationSettings.effects.enableParallax = false;
            }

            // Detectar modo de bajo consumo
            if ($window.navigator.connection && $window.navigator.connection.effectiveType === 'slow-2g') {
                $scope.animationSettings.performance.lowPowerMode = true;
                $scope.animationSettings.particles.count = 5;
            }
        };

        // Crear partículas románticas
        $scope.createParticles = function() {
            if (!$scope.animationSettings.effects.enableParticles) return;
            
            const container = document.getElementById('particles');
            if (!container) return;

            container.innerHTML = '';

            for (let i = 0; i < $scope.animationSettings.particles.count; i++) {
                const particle = document.createElement('div');
                const isRose = Math.random() > 0.5;
                particle.className = `particle ${isRose ? 'rose' : 'heart'}`;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particle.style.textShadow = '0 0 8px rgba(212, 165, 116, 0.6)';
                particle.style.filter = 'drop-shadow(0 0 3px rgba(139, 75, 107, 0.6))';
                container.appendChild(particle);
            }
        };

        // Configurar animaciones
        $scope.setupAnimations = function() {
            if (!$scope.animationSettings.effects.enableScroll) return;

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

            const animatedElements = document.querySelectorAll(
                '.gothic-fade-in, .gothic-slide-up, .gothic-scale-in, .gothic-rotate-in'
            );
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
        };

        // Configurar event listeners
        $scope.setupEventListeners = function() {
            // Efectos de hover
            if ($scope.animationSettings.effects.enableHover) {
                $scope.setupHoverEffects();
            }

            // Paralaje
            if ($scope.animationSettings.effects.enableParallax) {
                $scope.setupParallax();
            }

            // Optimización de visibilidad
            $scope.setupVisibilityOptimization();

            // Click effects
            $scope.setupClickEffects();
        };

        // Efectos de hover
        $scope.setupHoverEffects = function() {
            const hoverElements = document.querySelectorAll(
                '.romantic-icon, .heart, .rose-animated, .rose-float, .rose-glow, .rose-spin, .card'
            );

            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05) translateY(-2px)';
                    this.style.filter = 'drop-shadow(0 0 15px rgba(212, 165, 116, 0.6))';
                    this.style.transition = 'all 0.3s ease';
                });

                element.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                    this.style.filter = '';
                });
            });
        };

        // Efecto de paralaje desactivado - partículas estáticas
        $scope.setupParallax = function() {
            // Paralaje desactivado para mantener partículas estáticas en el top
            console.log('Paralaje desactivado - partículas estáticas en el top');
        };

        // Optimización de visibilidad
        $scope.setupVisibilityOptimization = function() {
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
        };

        // Efectos de click
        $scope.setupClickEffects = function() {
            document.addEventListener('click', (e) => {
                if (Math.random() > 0.7) {
                    $scope.createSparkleEffect(e.clientX, e.clientY);
                }
            });
        };

        // Efecto de escritura
        $scope.startTypewriterEffect = function() {
            if (!$scope.animationSettings.effects.enableTypewriter) return;
            
            const title = document.getElementById('main-title');
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
        };

        // Crear efecto de sparkle
        $scope.createSparkleEffect = function(x, y) {
            const sparkle = document.createElement('div');
            const icon = $scope.romanticIcons.all[Math.floor(Math.random() * $scope.romanticIcons.all.length)];
            sparkle.innerHTML = icon;
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
            
            $timeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        };

        // Métodos de utilidad
        $scope.getRandomIcon = function(type) {
            const icons = $scope.romanticIcons[type] || $scope.romanticIcons.all;
            return icons[Math.floor(Math.random() * icons.length)];
        };

        $scope.toggleParticles = function() {
            $scope.appState.particlesActive = !$scope.appState.particlesActive;
            const container = document.getElementById('particles');
            if (container) {
                container.style.display = $scope.appState.particlesActive ? 'block' : 'none';
            }
        };

        // Inicialización cuando el DOM esté listo
        $timeout(() => {
            $scope.init();
        }, 100);

        // Manejo de redimensionamiento
        angular.element($window).on('resize', function() {
            $scope.detectDevice();
            $scope.createParticles();
        });

    }]);

    // Agregar CSS para efectos de sparkle
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
        
        /* Mejoras de accesibilidad */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
        
        /* Mejoras para modo oscuro */
        @media (prefers-color-scheme: dark) {
            body {
                background: linear-gradient(135deg, #0a050a 0%, #1a0f1a 50%, #000000 100%);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

})();