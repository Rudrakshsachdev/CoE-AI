// Advanced JavaScript for enhanced interactivity

        // Preloader
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1500);
        });

        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Add hover effect to interactive elements
        const hoverElements = document.querySelectorAll('a, button, .btn, .event-card, .team-member, .stat-box');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });

        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                body.style.overflow = 'auto';
            });
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                        body.style.overflow = 'auto';
                    }
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const backToTop = document.querySelector('.back-to-top');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                backToTop.classList.add('visible');
            } else {
                header.classList.remove('scrolled');
                backToTop.classList.remove('visible');
            }
        });

        // Form Submission with improved validation
        document.getElementById('joinForm').addEventListener('submit', function(e) {
            //e.preventDefault();
            
            // Simple validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.boxShadow = '0 0 0 2px #ff3860';
                    isValid = false;
                    
                    // Remove error style after a delay
                    setTimeout(() => {
                        input.style.boxShadow = '';
                    }, 3000);
                }
            });
            
            if (isValid) {
                // Show success message
                const button = this.querySelector('button');
                const originalText = button.textContent;
                
                button.innerHTML = '<i class="fas fa-check"></i> Success!';
                button.style.background = 'linear-gradient(135deg, #23d160 0%, #12a54c 100%)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    this.reset();
                }, 3000);
            }
        });

        // Animation on Scroll with Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate').forEach(el => {
            observer.observe(el);
        });

        // Counter animation for stats
        const counterElements = document.querySelectorAll('.stat-number');
        
        const startCounter = (element) => {
            const target = parseInt(element.getAttribute('data-count'));
            const duration = 2000; // in milliseconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + '+';
                }
            }, 16);
        };
        
        const statsSection = document.querySelector('.stats-container');
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    counterElements.forEach(counter => {
                        startCounter(counter);
                    });
                    statsObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });
        
        if (statsSection) {
            statsObserver.observe(statsSection);
        }

        // Particle Network Animation
        const initParticleNetwork = () => {
            const canvas = document.getElementById('particle-network');
            const ctx = canvas.getContext('2d');
            let particles = [];
            const particleCount = 100;
            
            // Set canvas size
            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            
            // Create particles
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * 0.5;
                    this.vy = (Math.random() - 0.5) * 0.5;
                    this.radius = Math.random() * 1.5 + 0.5;
                    this.color = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
                }
                
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    
                    // Bounce off walls
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                }
                
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }
            
            // Initialize particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            
            // Draw connections between particles
            const drawConnections = () => {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance/150)})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            };
            
            // Animation loop
            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                
                drawConnections();
                
                requestAnimationFrame(animate);
            };
            
            animate();
        };
        
        // Initialize particle network after page load
        window.addEventListener('load', initParticleNetwork);

        // Add subtle parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.backgroundPosition = `center ${scrolled * 0.4}px`;
            }
        });