import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'nymbloc_cookie_consent';

function applyGtagConsent(choice) {
    if (typeof window.gtag !== 'function') return;
    if (choice === 'all') {
        window.gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            analytics_storage: 'granted',
            personalization_storage: 'granted',
        });
    } else {
        window.gtag('consent', 'update', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            personalization_storage: 'denied',
        });
    }
}

function readNeedsBanner() {
    if (typeof window === 'undefined') return false;
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved !== 'all' && saved !== 'essential';
    } catch {
        return true;
    }
}

export default function CookieConsent() {
    const [visible, setVisible] = useState(readNeedsBanner);

    useLayoutEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'all' || saved === 'essential') {
                applyGtagConsent(saved === 'all' ? 'all' : 'essential');
            }
        } catch {
            /* ignore */
        }
    }, []);

    useEffect(() => {
        if (visible) {
            document.body.classList.add('cookie-consent-open');
        } else {
            document.body.classList.remove('cookie-consent-open');
        }
        return () => document.body.classList.remove('cookie-consent-open');
    }, [visible]);

    const acceptAll = () => {
        try {
            localStorage.setItem(STORAGE_KEY, 'all');
        } catch {
            /* ignore */
        }
        applyGtagConsent('all');
        setVisible(false);
    };

    const essentialOnly = () => {
        try {
            localStorage.setItem(STORAGE_KEY, 'essential');
        } catch {
            /* ignore */
        }
        applyGtagConsent('essential');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className="cookie-consent"
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-desc"
        >
            <div className="cookie-consent__inner container">
                <div className="cookie-consent__text">
                    <p id="cookie-consent-title" className="cookie-consent__title">
                        Cookies &amp; privacy
                    </p>
                    <p id="cookie-consent-desc" className="cookie-consent__desc">
                        We use cookies and similar tools for essential site features, and—with your
                        permission—for analytics and ads (for example Google AdSense). See our{' '}
                        <Link to="/privacy">Privacy Policy</Link> for details.
                    </p>
                </div>
                <div className="cookie-consent__actions">
                    <button type="button" className="btn btn-outline cookie-consent__btn" onClick={essentialOnly}>
                        Essential only
                    </button>
                    <button type="button" className="btn btn-primary cookie-consent__btn" onClick={acceptAll}>
                        Accept all
                    </button>
                </div>
            </div>
        </div>
    );
}
