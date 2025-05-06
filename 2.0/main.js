/**
 * NALIFT - Main JavaScript
 * Version: 1.0
 */

(function() {
    'use strict';
    
    // DOM Elements
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchBtn = document.querySelector('.search-btn');
    const chatButton = document.querySelector('.chat-button');
    
    // Initialize when DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSlider();
        initScrollAnimation();
        initTabs();
        initVideoPlayers();
        initContactForm();
    });
    
    // Mobile Menu
    function initMobileMenu() {
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileMenu.classList.toggle('active');
                document.body.classList.toggle('menu-open');
            });
        }
    }
    
    // Hero Slider
    function initSlider() {
        const slides = document.querySelectorAll('.hero-slider .slide');
        if (slides.length > 1) {
            let currentSlide = 0;
            
            // Show first slide
            slides[currentSlide].classList.add('active');
            
            // Auto slide
            setInterval(function() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);
        }
    }
    
    // Scroll Animation
    function initScrollAnimation() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenuBtn.classList.remove('active');
                        mobileMenu.classList.remove('active');
                        document.body.classList.remove('menu-open');
                    }
                }
            });
        });
        
        // Back to top button
        const backToTopBtn = document.createElement('div');
        backToTopBtn.classList.add('back-to-top');
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(backToTopBtn);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Tabs
    function initTabs() {
        const tabs = document.querySelectorAll('.tab');
        if (tabs.length > 0) {
            tabs.forEach(tab => {
                tab.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Show corresponding content
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        if (targetElement) {
                            // Hide all sections
                            document.querySelectorAll('section[id]').forEach(section => {
                                section.style.display = 'none';
                            });
                            
                            // Show target section
                            targetElement.style.display = 'block';
                        }
                    }
                });
            });
        }
    }
    
    // Video Players
    function initVideoPlayers() {
        const playButtons = document.querySelectorAll('.play-button');
        if (playButtons.length > 0) {
            playButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const videoThumbnail = this.closest('.video-thumbnail') || this.closest('.video-player');
                    if (videoThumbnail) {
                        const thumbnailImg = videoThumbnail.querySelector('img');
                        if (thumbnailImg) {
                            const videoId = getVideoIdFromUrl(thumbnailImg.src);
                            if (videoId) {
                                // Create iframe
                                const iframe = document.createElement('iframe');
                                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                                iframe.width = '100%';
                                iframe.height = '100%';
                                iframe.frameBorder = '0';
                                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                                iframe.allowFullscreen = true;
                                
                                // Replace thumbnail with iframe
                                videoThumbnail.innerHTML = '';
                                videoThumbnail.appendChild(iframe);
                            }
                        }
                    }
                });
            });
        }
    }
    
    // Helper function to extract YouTube video ID from URL
    function getVideoIdFromUrl(url) {
        // This is a placeholder function
        // In a real implementation, you would extract the video ID from the URL
        return 'dQw4w9WgXcQ'; // Example YouTube video ID
    }
    
    // Contact Form
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                
                // Disable submit button
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending...';
                
                // Simulate form submission
                setTimeout(function() {
                    // Enable submit button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message';
                    
                    // Show success message
                    alert('Your message has been sent successfully!');
                    
                    // Reset form
                    contactForm.reset();
                }, 2000);
            });
        }
    }
    
    // Chat Widget
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            alert('Chat functionality is not available in this demo.');
        });
    }
    
    //