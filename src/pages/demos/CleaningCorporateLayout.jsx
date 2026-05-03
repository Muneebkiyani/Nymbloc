import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../../seo/siteConfig';

const sectionUp = {
    'data-aos': 'fade-up',
    'data-aos-duration': '780',
    'data-aos-anchor-placement': 'center-bottom',
};

/**
 * IWCF-inspired corporate cleaning landing — hero overlap cards, navy split, carousel, gallery, partners, footer.
 */
export default function CleaningCorporateLayout({ demo, wa }) {
    const co = demo.corporate ?? {};
    const slides = co.featuredSlides ?? [];
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return undefined;
        const id = window.setInterval(() => {
            setSlide((s) => (s + 1) % slides.length);
        }, 6500);
        return () => window.clearInterval(id);
    }, [slides.length]);

    useEffect(() => {
        const t = window.setTimeout(() => {
            AOS.refresh();
        }, 320);
        return () => window.clearTimeout(t);
    }, [slide]);

    useEffect(() => {
        const refresh = () => AOS.refresh();
        window.addEventListener('load', refresh);
        const t = window.setTimeout(refresh, 800);
        requestAnimationFrame(refresh);
        return () => {
            window.removeEventListener('load', refresh);
            window.clearTimeout(t);
        };
    }, []);

    const idx = slides.length ? slide % slides.length : 0;
    const active = slides[idx] ?? {};

    const offerItems = demo.offer?.items ?? [];
    const problemItems = demo.problem?.items ?? [];
    const testimonials = demo.testimonials?.items ?? [];

    return (
        <div className="cc-page">
            <section id="cc-top" className="cc-hero" aria-label="Hero">
                <div className="cc-hero__media">
                    <img
                        src={demo.heroImage}
                        alt=""
                        fetchPriority="high"
                        decoding="async"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="cc-hero__overlay" aria-hidden />
                <div className="cc-hero__inner">
                    <p className="cc-hero__eyebrow" data-aos="fade-up" data-aos-duration="700">
                        {demo.heroEyebrow}
                    </p>
                    <h1 className="cc-hero__title" data-aos="fade-up" data-aos-duration="760" data-aos-delay="80">
                        {demo.heroHeadline}
                    </h1>
                    <p className="cc-hero__sub" data-aos="fade-up" data-aos-duration="720" data-aos-delay="160">
                        {demo.heroSub}
                    </p>
                </div>
                <div className="cc-hero__cards" data-aos="fade-up" data-aos-duration="820" data-aos-delay="200">
                    {(co.heroCards ?? []).map((card, i) => (
                        <a key={card.label} href={card.href} className="cc-hero-card">
                            <img
                                src={card.image}
                                alt=""
                                className="cc-hero-card__img"
                                loading={i < 3 ? 'eager' : 'lazy'}
                                decoding="async"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <span className="cc-hero-card__label">{card.label}</span>
                            <span className="cc-hero-card__chev" aria-hidden>
                                ›
                            </span>
                        </a>
                    ))}
                </div>
                <div className="cc-hero__spacer" aria-hidden />
            </section>

            <section id="cc-stats" className="cc-stats" {...sectionUp}>
                <div className="cc-container">
                    <div className="cc-stats__grid">
                        {(co.stats ?? []).map((s) => (
                            <div key={s.label}>
                                <p className="cc-stat__value">{s.value}</p>
                                <p className="cc-stat__label">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cc-about" className="cc-split" {...sectionUp}>
                <div className="cc-container">
                    <div className="cc-split__grid">
                        <div className="cc-split__visual">
                            <div className="cc-split__primary">
                                {co.splitPrimaryImage ? (
                                    <img src={co.splitPrimaryImage} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                                ) : null}
                            </div>
                            <div className="cc-split__overlap">
                                {co.splitOverlapImage ? (
                                    <img src={co.splitOverlapImage} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                                ) : null}
                            </div>
                        </div>
                        <div className="cc-split__copy">
                            <span className="cc-split__eyebrow">{co.splitEyebrow}</span>
                            <h2 className="cc-split__title">{co.splitTitle}</h2>
                            <p className="cc-split__lead">{co.splitLead}</p>
                            {problemItems.length ? (
                                <ul className="cc-split__list">
                                    {problemItems.map((p) => (
                                        <li key={p.title}>{p.title}</li>
                                    ))}
                                </ul>
                            ) : null}
                            <a href={wa} className="cc-btn cc-btn--header" target="_blank" rel="noopener noreferrer">
                                {demo.cta?.title ?? 'Get in touch'} <span aria-hidden>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cc-services" className="cc-services" {...sectionUp}>
                <div className="cc-container">
                    <header className="cc-services__head">
                        <span className="cc-services__eyebrow">{demo.offer?.eyebrow}</span>
                        <h2 className="cc-services__title">{demo.offer?.title}</h2>
                        <p className="cc-services__lead">{demo.offer?.lead}</p>
                    </header>
                    <div className="cc-service-rows">
                        {offerItems.map((item, i) => (
                            <article
                                key={item.title}
                                className="cc-service-row"
                                data-aos="fade-up"
                                data-aos-duration="680"
                                data-aos-delay={i * 70}
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="cc-service-row__img"
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* No section-level AOS here: avoids transform/stacking glitches with absolutely positioned slides */}
            <section id="cc-carousel" className="cc-featured" aria-label="Featured programmes">
                {slides.map((s, i) => (
                    <div
                        key={`cc-slide-${i}`}
                        className={`cc-featured__slide ${i === idx ? 'cc-featured__slide--active' : ''}`}
                        aria-hidden={i !== idx}
                    >
                        {s.image ? (
                            <img
                                src={s.image}
                                alt=""
                                className="cc-featured__slide-img"
                                decoding="async"
                                referrerPolicy="no-referrer-when-downgrade"
                                loading={i === 0 ? 'eager' : 'lazy'}
                            />
                        ) : null}
                        <div className="cc-featured__tint" aria-hidden />
                    </div>
                ))}
                <div
                    className="cc-featured__inner"
                    data-aos="fade-up"
                    data-aos-duration="780"
                    data-aos-anchor-placement="center-bottom"
                >
                    <h2 className="cc-featured__title">{active.title}</h2>
                    <p className="cc-featured__sub">{active.sub}</p>
                    <div className="cc-featured__card">
                        {active.cardThumb ? (
                            <img src={active.cardThumb} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                        ) : null}
                        <div>
                            <p className="cc-featured__card-kicker">{active.cardKicker}</p>
                            <p className="cc-featured__card-title">{active.cardTitle}</p>
                            <p className="cc-featured__card-text">{active.cardText}</p>
                        </div>
                    </div>
                </div>
                <div className="cc-featured__dots" role="tablist" aria-label="Slide indicators">
                    {slides.map((_, i) => (
                        <button
                            key={`cc-dot-${i}`}
                            type="button"
                            role="tab"
                            aria-selected={i === idx}
                            className={`cc-featured__dot ${i === idx ? 'cc-featured__dot--active' : ''}`}
                            onClick={() => setSlide(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>

            <section id="cc-stories" className="cc-stories" {...sectionUp}>
                <div className="cc-container">
                    <header className="cc-stories__head">
                        <h2 className="cc-stories__title">Stories from the field</h2>
                    </header>
                    <div className="cc-stories__grid">
                        {(co.videos ?? []).map((v, i) => (
                            <div
                                key={v.title}
                                className="cc-video-cell"
                                data-aos="fade-up"
                                data-aos-duration="700"
                                data-aos-delay={i * 90}
                            >
                                {v.thumb ? (
                                    <img src={v.thumb} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                                ) : null}
                                <div className="cc-video-cell__shade">
                                    <button type="button" className="cc-video-cell__play" aria-label="Play sample video (demo only)">
                                        ▶
                                    </button>
                                    <h3>{v.title}</h3>
                                    <p>{v.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cc-gallery" className="cc-gallery" {...sectionUp}>
                <div className="cc-container">
                    <div className="cc-gallery__head">
                        <h2>Our work</h2>
                        <p>Recent handoffs and recurring routes—sample photography for layout only.</p>
                    </div>
                    <div className="cc-gallery__grid">
                        <div className="cc-gallery__large" data-aos="fade-right" data-aos-duration="750">
                            <span className="cc-gallery__corner" aria-hidden>
                                ↗
                            </span>
                            {co.galleryLarge ? (
                                <img src={co.galleryLarge} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                            ) : null}
                        </div>
                        <div className="cc-gallery__stack">
                            {(co.galleryStacked ?? []).map((src, i) => (
                                <div key={String(i)} className="cc-gallery__stack-item" data-aos="fade-left" data-aos-duration="720" data-aos-delay={i * 80}>
                                    <span className="cc-gallery__corner" aria-hidden>
                                        ↗
                                    </span>
                                    {src ? <img src={src} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" /> : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="cc-strip" {...sectionUp}>
                <div className="cc-strip__bg" aria-hidden>
                    {demo.heroImage ? (
                        <img src={demo.heroImage} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer-when-downgrade" />
                    ) : null}
                </div>
                <div className="cc-strip__tint" aria-hidden />
                <div className="cc-container cc-strip__inner">
                    <p>{co.ctaBannerLine}</p>
                    <a href={wa} className="cc-btn cc-btn--header" target="_blank" rel="noopener noreferrer">
                        Book on WhatsApp <span aria-hidden>→</span>
                    </a>
                </div>
            </section>

            <section className="cc-partners" {...sectionUp}>
                <p className="cc-partners__label">Trusted by teams like</p>
                <div className="cc-container">
                    <div className="cc-partners__row">
                        {(co.partners ?? []).map((name) => (
                            <span key={name} className="cc-partner-pill">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cc-quotes" {...sectionUp}>
                <div className="cc-container">
                    <header className="cc-quotes__head">
                        <h2>{demo.testimonials?.title}</h2>
                        <p>{demo.testimonials?.disclaimer}</p>
                    </header>
                    <div className="cc-quotes__grid">
                        {testimonials.map((t, i) => (
                            <blockquote key={t.name} className="cc-quote-card" data-aos="fade-up" data-aos-delay={i * 85} data-aos-duration="680">
                                <p>{t.quote}</p>
                                <footer>
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </footer>
                            </blockquote>
                        ))}
                    </div>
                </div>
            </section>

            <p className="cc-note">
                Full corporate layout demo by <Link to="/">{SITE_NAME}</Link>. Design pattern inspired by public marketing sites such as{' '}
                <a href="https://www.iwcf.org/" target="_blank" rel="noopener noreferrer">
                    iwcf.org
                </a>
                —brand, photography, and partners are fictitious placeholders.
            </p>
        </div>
    );
}
