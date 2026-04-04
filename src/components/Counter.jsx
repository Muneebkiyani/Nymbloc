import React, { useState, useEffect } from 'react';

const Counter = ({ target, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const countRef = React.useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasStarted) {
                setHasStarted(true);
            }
        }, { threshold: 0.1 });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function: easeOutQuart
            const easedPercentage = 1 - Math.pow(1 - percentage, 4);
            
            setCount(Math.floor(easedPercentage * target));

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(target); // Ensure it lands exactly on target
            }
        };

        requestAnimationFrame(animate);
    }, [hasStarted, target, duration]);

    return <span ref={countRef} className={count === 0 && !hasStarted ? 'hidden-stat' : ''}>{count}{suffix}</span>;
};

export default Counter;
