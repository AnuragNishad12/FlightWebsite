import React, { useEffect, useRef, useState } from 'react';

const FloatingButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressCircleRef = useRef(null);
    const floatingBtnRef = useRef(null);
    const radius = 36; // r value of the circle
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressCircle = progressCircleRef.current;

        // Initialize strokeDasharray and strokeDashoffset
        if (progressCircle) {
            progressCircle.style.strokeDasharray = `${circumference}`;
            progressCircle.style.strokeDashoffset = `${circumference}`;
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            // Show/hide button based on scroll position (after hero section)
            const heroHeight = document.querySelector('.hero').clientHeight;
            setIsVisible(scrollTop > heroHeight);

            // Calculate and update progress
            const scrollPercent = (scrollTop / docHeight) * 100;
            setProgress(scrollPercent);
            const offset = circumference - (scrollPercent / 100) * circumference;
            if (progressCircle) {
                progressCircle.style.strokeDashoffset = offset;
            }

            // Handle fade-in animation for feature items
            const featureItems = document.querySelectorAll('.animate-fade-in');
            featureItems.forEach(item => {
                if (item.getBoundingClientRect().top < window.innerHeight) {
                    item.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [circumference]);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`floating-btn ${isVisible ? 'show' : ''}`} ref={floatingBtnRef} onClick={handleClick}>
            <div className="circle-progress">
                <i className="fas fa-arrow-circle-up" id="cdn-icon"></i> {/* CDN Icon */}
                <svg className="progress-ring" width="80" height="80">
                    <circle
                        className="progress-ring__circle"
                        stroke="url(#grad1)"
                        strokeWidth="6"
                        fill="transparent"
                        r={radius}
                        cx="40"
                        cy="40"
                        ref={progressCircleRef}
                    />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#ff66cc', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#66ccff', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default FloatingButton;