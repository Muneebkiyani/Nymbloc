import React from 'react';

const sectionAos = {
    'data-aos': 'fade-up',
    'data-aos-duration': '780',
    'data-aos-anchor-placement': 'center-bottom',
};

/**
 * Salon / beauty studio demo — Container-style cream layout: hero, circular services,
 * alternating splits, 3×2 gallery, tall feature split, testimonials.
 */
export default function SalonStudioLayout({ demo, wa }) {
    const items = demo.offer?.items ?? [];
    const problems = demo.problem?.items ?? [];
    const testimonials = demo.testimonials?.items ?? [];

    const imgs = [demo.heroImage, ...items.map((x) => x.image)].filter(Boolean);
    const gallerySix = Array.from({ length: 6 }, (_, i) => imgs[i % imgs.length] || demo.heroImage);

    const splitImgA = items[0]?.image ?? demo.heroImage;
    const splitImgB = items[2]?.image ?? items[1]?.image ?? demo.heroImage;
    const featureTallImg = items[3]?.image ?? items[2]?.image ?? demo.heroImage;

    return (
        <div className="salon-page">
            <section id="salon-top" className="salon-hero">
                <div className="salon-hero__media">
                    <img
                        src={demo.heroImage}
                        alt=""
                        className="salon-hero__photo"
                        fetchPriority="high"
                        decoding="async"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="salon-hero__overlay" aria-hidden />
                <div className="salon-hero__content">
                    <p className="salon-hero__eyebrow" data-aos="fade-up" data-aos-duration="750" data-aos-delay="0">
                        {demo.heroEyebrow}
                    </p>
                    <h1 className="salon-hero__title" data-aos="fade-up" data-aos-duration="780" data-aos-delay="90">
                        {demo.heroHeadline}
                    </h1>
                    <p className="salon-hero__sub" data-aos="fade-up" data-aos-duration="750" data-aos-delay="170">
                        {demo.heroSub}
                    </p>
                    <div className="salon-hero__actions" data-aos="fade-up" data-aos-duration="720" data-aos-delay="260">
                        <a href={wa} className="salon-btn salon-btn--primary" target="_blank" rel="noopener noreferrer">
                            Book on WhatsApp
                        </a>
                        <a href="#salon-services" className="salon-btn salon-btn--ghost">
                            View services
                        </a>
                    </div>
                </div>
            </section>

            <section
                id="salon-services"
                className="salon-band salon-band--cream salon-band--enter"
                {...sectionAos}
            >
                <div className="salon-container">
                    <div className="salon-panel salon-panel--services">
                        <h2 className="salon-section-title">Services</h2>
                        <p className="salon-section-lead">{demo.offer?.lead}</p>
                        <div className="salon-service-circles">
                            {items.map((item) => (
                                <article key={item.title} className="salon-service-circle">
                                    <div className="salon-service-circle__ring">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="salon-service-circle__img"
                                            loading="lazy"
                                            decoding="async"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                    <h3 className="salon-service-circle__title">{item.title}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="salon-about"
                className="salon-band salon-band--white salon-band--enter"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-anchor-placement="center-bottom"
            >
                <div className="salon-container salon-split">
                    <div className="salon-split__text">
                        <span className="salon-kicker">{demo.problem?.eyebrow}</span>
                        <h2 className="salon-split__heading">{demo.problem?.title}</h2>
                        <p className="salon-split__lead">{demo.problem?.lead}</p>
                        {problems[0] ? (
                            <div className="salon-prose-block">
                                <h3 className="salon-prose-block__h">{problems[0].title}</h3>
                                <p className="salon-prose-block__p">{problems[0].text}</p>
                            </div>
                        ) : null}
                    </div>
                    <div className="salon-split__figure">
                        <img
                            src={splitImgA}
                            alt=""
                            className="salon-split__img"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            <section
                className="salon-band salon-band--cream salon-band--enter"
                data-aos="fade-up"
                data-aos-duration="780"
                data-aos-anchor-placement="center-bottom"
            >
                <div className="salon-container salon-split salon-split--reverse">
                    <div className="salon-split__figure">
                        <img
                            src={splitImgB}
                            alt=""
                            className="salon-split__img"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="salon-split__text">
                        <span className="salon-kicker">{demo.offer?.eyebrow}</span>
                        <h2 className="salon-split__heading">{demo.offer?.title}</h2>
                        <p className="salon-split__lead">{demo.offer?.lead}</p>
                        {problems[1] ? (
                            <div className="salon-prose-block">
                                <h3 className="salon-prose-block__h">{problems[1].title}</h3>
                                <p className="salon-prose-block__p">{problems[1].text}</p>
                            </div>
                        ) : null}
                        <a href={wa} className="salon-btn salon-btn--primary salon-btn--inline" target="_blank" rel="noopener noreferrer">
                            Check availability
                        </a>
                    </div>
                </div>
            </section>

            <section
                id="salon-gallery"
                className="salon-band salon-band--cream salon-band--enter"
                data-aos="zoom-in"
                data-aos-duration="760"
                data-aos-anchor-placement="center-bottom"
            >
                <div className="salon-container">
                    <div className="salon-panel salon-panel--gallery">
                        <h2 className="salon-section-title">Gallery</h2>
                        <p className="salon-section-lead">
                            A structured portfolio—captions and consistency so new clients know what to expect.
                        </p>
                        <div className="salon-gallery-grid">
                            {gallerySix.map((src, i) => (
                                <div key={`${src}-${i}`} className="salon-gallery-cell">
                                    <img
                                        src={src}
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="salon-band salon-band--cream salon-band--enter"
                {...sectionAos}
            >
                <div className="salon-container salon-feature">
                    <div className="salon-feature__media">
                        <img
                            src={featureTallImg}
                            alt=""
                            className="salon-feature__img"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="salon-feature__text">
                        <h2 className="salon-feature__title">The chair, clarified</h2>
                        <p className="salon-feature__lead">
                            Patch-test windows, deposit policy, and stylist notes live beside your look-book—so
                            consultations move faster and no-shows drop.
                        </p>
                        {problems[2] ? (
                            <div className="salon-prose-block">
                                <h3 className="salon-prose-block__h">{problems[2].title}</h3>
                                <p className="salon-prose-block__p">{problems[2].text}</p>
                            </div>
                        ) : null}
                        <a href={wa} className="salon-btn salon-btn--dark" target="_blank" rel="noopener noreferrer">
                            {demo.cta?.title ?? 'Message us'}
                        </a>
                        <p className="salon-feature__fine">{demo.cta?.lead}</p>
                    </div>
                </div>
            </section>

            <section
                className="salon-band salon-band--white salon-band--enter"
                id="salon-testimonials"
                data-aos="fade-up"
                data-aos-duration="820"
                data-aos-anchor-placement="center-bottom"
            >
                <div className="salon-container">
                    <h2 className="salon-section-title">{demo.testimonials?.title ?? 'Client love'}</h2>
                    <p className="salon-section-lead salon-section-lead--muted">{demo.testimonials?.disclaimer}</p>
                    <ul className="salon-testimonial-grid">
                        {testimonials.map((t) => (
                            <li key={t.name} className="salon-testimonial-card">
                                <blockquote className="salon-testimonial-card__quote">{t.quote}</blockquote>
                                <p className="salon-testimonial-card__meta">
                                    <strong>{t.name}</strong>
                                    <span>{t.role}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
