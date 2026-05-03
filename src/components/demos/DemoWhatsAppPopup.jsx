import React, { useCallback, useEffect, useId, useRef, useState } from 'react';

const OPEN_DELAY_MS = 7200;

function storageKeyForSlug(slug) {
    return slug ? `nymbloc_demo_wa_popup_dismissed_${slug}` : 'nymbloc_demo_wa_popup_dismissed';
}

/**
 * Promotional modal on industry demo pages — opens WhatsApp in a new tab.
 */
export default function DemoWhatsAppPopup({ waHref, nicheLabel, slug }) {
    const sessionDismissKey = storageKeyForSlug(slug);
    const titleId = useId();
    const openTimer = useRef(null);
    const [open, setOpen] = useState(false);

    const dismiss = useCallback(() => {
        try {
            sessionStorage.setItem(sessionDismissKey, '1');
        } catch {
            /* ignore */
        }
        setOpen(false);
    }, [sessionDismissKey]);

    useEffect(() => {
        if (!waHref || typeof sessionStorage === 'undefined') return;
        if (sessionStorage.getItem(sessionDismissKey) === '1') return;

        openTimer.current = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
        return () => {
            if (openTimer.current) window.clearTimeout(openTimer.current);
        };
    }, [waHref, sessionDismissKey]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === 'Escape') dismiss();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, dismiss]);

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    if (!open || !waHref) return null;

    return (
        <div className="demo-wa-popup" role="presentation">
            <button type="button" className="demo-wa-popup__backdrop" aria-label="Close promotion" onClick={dismiss} />
            <div
                className="demo-wa-popup__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
            >
                <button type="button" className="demo-wa-popup__close" aria-label="Close" onClick={dismiss}>
                    ✕
                </button>
                <p className="demo-wa-popup__eyebrow">Quick response · WhatsApp</p>
                <h2 id={titleId} className="demo-wa-popup__title">
                    Want a site like this{nicheLabel ? ` for ${nicheLabel}` : ''}?
                </h2>
                <p className="demo-wa-popup__text">
                    Tap below to message us on WhatsApp—share this demo and we’ll outline next steps.
                </p>
                <a href={waHref} className="demo-wa-popup__cta" target="_blank" rel="noopener noreferrer" onClick={dismiss}>
                    Open WhatsApp
                </a>
                <p className="demo-wa-popup__phone">+92 316 5423233</p>
                <button type="button" className="demo-wa-popup__later" onClick={dismiss}>
                    Maybe later
                </button>
            </div>
        </div>
    );
}
