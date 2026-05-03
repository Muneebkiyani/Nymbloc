import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../../seo/siteConfig';

const sectionFade = {
    'data-aos': 'fade-up',
    'data-aos-duration': '900',
    'data-aos-anchor-placement': 'center-bottom',
};

/**
 * Peaceput-inspired editorial bakery page — cream/charcoal, full-bleed bands, cards, recruit, news.
 * Reference: https://peaceput.com/ (layout pattern only; fictitious “hearthlot” copy).
 */
export default function BakeryPeaceputLayout({ demo, wa }) {
    const pp = demo.peaceputPage ?? {};
    const bands = pp.storyBands ?? [];

    useEffect(() => {
        const refresh = () => AOS.refresh();
        window.addEventListener('load', refresh);
        const t = window.setTimeout(refresh, 600);
        requestAnimationFrame(refresh);
        return () => {
            window.removeEventListener('load', refresh);
            window.clearTimeout(t);
        };
    }, []);

    return (
        <div className="pp-page">
            <section id="pp-top" className="pp-hero">
                <div className="pp-hero__media">
                    <img
                        src={demo.heroImage}
                        alt=""
                        fetchPriority="high"
                        decoding="async"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="pp-hero__shade" aria-hidden />
                <div className="pp-hero__content">
                    <p className="pp-hero__eyebrow" data-aos="fade-down" data-aos-duration="800">
                        {demo.heroEyebrow}
                    </p>
                    <h1 className="pp-hero__title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        {demo.heroHeadline}
                    </h1>
                    <p className="pp-hero__sub" data-aos="fade-up" data-aos-duration="880" data-aos-delay="220">
                        {demo.heroSub}
                    </p>
                    <p className="pp-hero__scroll" data-aos="fade" data-aos-delay="400">
                        scroll
                    </p>
                </div>
            </section>

            <section className="pp-matte" aria-label="Media placeholder" {...sectionFade}>
                <div className="pp-matte__inner">
                    <span className="pp-matte__line">{pp.showLoaderLine}</span>
                    <p className="pp-matte__cap">Full-bleed film or campaign still—sample block for layout rhythm.</p>
                </div>
            </section>

            <section className="pp-vision" {...sectionFade}>
                <div className="pp-container">
                    <p className="pp-vision__eyebrow">{pp.visionEyebrow}</p>
                    <h2 className="pp-vision__title">{pp.visionTitle}</h2>
                    <p className="pp-vision__lead">{pp.visionLead}</p>
                </div>
            </section>

            <section id="pp-brand" className="pp-brand" {...sectionFade}>
                <div className="pp-container pp-brand__grid">
                    <h2 className="pp-brand__h">{pp.brandHeading}</h2>
                    <div className="pp-brand__copy">
                        <p className="pp-brand__lead">{pp.brandLead}</p>
                        <p className="pp-brand__aside">{pp.brandAside}</p>
                    </div>
                </div>
            </section>

            {bands.map((band, i) => (
                <section key={`${band.title}-${i}`} id={`pp-story-${i}`} className="pp-band">
                    <div className="pp-band__parallax" aria-hidden>
                        <img
                            src={band.image}
                            alt=""
                            className="pp-band__bg-img"
                            loading={i < 2 ? 'eager' : 'lazy'}
                            decoding="async"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="pp-band__film" aria-hidden />
                    <div className="pp-band__wrap">
                        <article
                            className="pp-band__card"
                            data-aos="zoom-in"
                            data-aos-duration="850"
                            data-aos-delay={80 + (i % 3) * 40}
                        >
                            <span className="pp-band__glyph">{band.glyph}</span>
                            <span className="pp-band__tag">{band.accent}</span>
                            <h3 className="pp-band__title">{band.title}</h3>
                            <p className="pp-band__body">{band.body}</p>
                            <span className="pp-band__plus" aria-hidden>
                                +
                            </span>
                        </article>
                    </div>
                </section>
            ))}

            <section id="pp-recruit" className="pp-recruit" {...sectionFade}>
                <div className="pp-container">
                    <h2 className="pp-recruit__h">{pp.recruitHeading}</h2>
                    <p className="pp-recruit__lead">{pp.recruitLead}</p>
                    <p className="pp-recruit__sub">{pp.recruitSub}</p>
                    <div className="pp-recruit__grid">
                        {(pp.recruits ?? []).map((p, i) => (
                            <article
                                key={p.name}
                                className="pp-person"
                                data-aos="fade-up"
                                data-aos-duration="750"
                                data-aos-delay={i * 75}
                            >
                                <span className="pp-person__corner">{p.corner}</span>
                                <div className="pp-person__photo">
                                    <img src={p.image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                <p className="pp-person__name">{p.name}</p>
                                <p className="pp-person__role">{p.role}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pp-news" className="pp-news" {...sectionFade}>
                <div className="pp-container">
                    <h2 className="pp-news__h">{pp.newsHeading}</h2>
                    <p className="pp-news__lead">{pp.newsLead}</p>
                    <ul className="pp-news__list">
                        {(pp.newsItems ?? []).map((n) => (
                            <li key={n.date + n.title} className="pp-news__row">
                                <span className="pp-news__date">{n.date}</span>
                                <span className="pp-news__title">{n.title}</span>
                                <span className="pp-news__tags">{n.tags}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="pp-line" {...sectionFade}>
                <div className="pp-container pp-line__inner">
                    <div>
                        <h2 className="pp-line__h">{pp.lineTitle}</h2>
                        <p className="pp-line__lead">{pp.lineLead}</p>
                    </div>
                    <a href={wa} className="pp-line__btn" target="_blank" rel="noopener noreferrer">
                        {pp.lineButton}
                    </a>
                </div>
            </section>

            <p className="pp-mini-note">
                Editorial layout demo by <Link to="/">{SITE_NAME}</Link>. Inspired by the structure of{' '}
                <a href="https://peaceput.com/" target="_blank" rel="noopener noreferrer">
                    peaceput.com
                </a>
                —not a copy of their brand assets.
            </p>
        </div>
    );
}
