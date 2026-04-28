import { useEffect, useRef } from 'react';

const AD_CLIENT = 'ca-pub-5069208540458066';

/**
 * Responsive AdSense unit. Loads only after `adsbygoogle.js` is in the page (see index.html).
 * Consent Mode is configured in index.html + CookieConsent; ads respect stored choices.
 *
 * @param {'display'|'in-article'} [variant='display'] — `in-article` uses fluid layout for blog posts.
 */
export default function AdSense({ adSlot, className = '', variant = 'display' }) {
    const insRef = useRef(null);
    const isInArticle = variant === 'in-article';

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense', err);
        }
    }, [adSlot, variant]);

    return (
        <div className={className}>
            <ins
                ref={insRef}
                className="adsbygoogle"
                style={isInArticle ? { display: 'block', textAlign: 'center' } : { display: 'block' }}
                data-ad-client={AD_CLIENT}
                data-ad-slot={adSlot}
                data-ad-format={isInArticle ? 'fluid' : 'auto'}
                data-ad-layout={isInArticle ? 'in-article' : undefined}
                data-full-width-responsive={isInArticle ? undefined : 'true'}
            />
        </div>
    );
}
