import React from 'react';

/** Inline icons for “Why choose” grid (minimal line style, matches reference). */
function IconSparkle() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2l1.2 4.2L17 8l-3.8 1.8L12 14l-1.2-4.2L7 8l3.8-1.8L12 2z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function IconPlate() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function IconChat() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 6h16v10H8l-4 3V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    );
}
function IconLeaf() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 20s8-4 8-12a8 8 0 00-8-8 8 8 0 00-8 8c0 3 2 6 4 8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function IconCalendar() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 3v4M16 3v4M4 11h16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function IconWine() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M8 2h8v5a4 4 0 01-4 4 4 4 0 01-4-4V2zM12 11v11" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function IconUsers() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}
function IconBolt() {
    return (
        <svg className="rf-why__icon-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    );
}

const WHY_ICONS = [IconPlate, IconSparkle, IconChat, IconLeaf, IconCalendar, IconWine, IconUsers, IconBolt];

const WHY_COPY = [
    {
        title: 'Menu you can actually read',
        text: 'Prices, allergens, and pairings in one scroll—no hunting through faded screenshots.',
    },
    {
        title: 'Atmosphere that matches the room',
        text: 'Photography and tone aligned with your dining room so first-time guests know what to expect.',
    },
    {
        title: 'WhatsApp handoff in seconds',
        text: 'Big nights and custom requests move to chat without losing context or patience.',
    },
    {
        title: 'Local story, clear sourcing',
        text: 'Room for producers, seasonality, and the “why” behind your plates—without cluttering the order path.',
    },
    {
        title: 'Reservations that convert',
        text: 'One obvious next step after the hero—table, terrace, or tasting—so intent does not leak away.',
    },
    {
        title: 'Bar & pairing upsells',
        text: 'Cocktails and low-ABV routes get their moment next to mains, not buried in a PDF.',
    },
    {
        title: 'Private dining & events',
        text: 'Structured inquiry for groups with timelines deposits and menu previews—all on brand.',
    },
    {
        title: 'Fast answers, fewer no-shows',
        text: 'Clear policies and proactive messaging patterns guests actually follow.',
    },
];

/** Stock photography for “rest of page” cards (Unsplash — real photos). */
const RF_STOCK = {
    lounge: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=960&q=82',
    lawn: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=960&q=82',
    suite: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=960&q=82',
};

function buildExperienceCards(demo, wa) {
    const items = demo.offer?.items ?? [];
    return [
        {
            image: RF_STOCK.lounge,
            title: 'The lounge & bar',
            desc: 'Light wood tones, relaxed seating, and a bar program built for long conversations.',
            cta: 'Learn more',
            href: '#rf-enquire',
            external: false,
        },
        {
            image: RF_STOCK.lawn,
            title: 'Garden & lawn events',
            desc: 'Outdoor gatherings framed by brick and greenery—receptions, vows, and tented dinners.',
            cta: 'View details',
            href: wa,
            external: true,
        },
        {
            image: RF_STOCK.suite,
            title: 'Suites & overnight stays',
            desc: 'Uncluttered rooms, soft daylight, and balconies that open to the trees.',
            cta: 'View details',
            href: '#rf-enquire',
            external: false,
        },
        {
            image: demo.heroImage,
            title: 'The dining room',
            desc: 'Communal energy and open-kitchen theater—the heart of the house when service starts.',
            cta: 'Learn more',
            href: '#rf-services',
            external: false,
        },
        {
            image: items[0]?.image ?? demo.heroImage,
            title: items[0]?.title ?? 'Seasonal plates',
            desc:
                items[0]?.desc ??
                'Bright produce, crisp textures, and sauces that read beautifully on mobile menus.',
            cta: 'View details',
            href: wa,
            external: true,
        },
        {
            image: items[3]?.image ?? items[1]?.image ?? demo.heroImage,
            title: items[3]?.title ?? 'Bar & pairings',
            desc:
                items[3]?.desc ??
                'Low-ABV routes and classic cocktails staged for the late seating.',
            cta: 'Learn more',
            href: '#rf-gallery',
            external: false,
        },
    ];
}

const RF_LINK_COLUMNS = [
    [
        { label: 'Private dining', href: '#rf-services' },
        { label: 'Garden events', href: '#rf-experience' },
        { label: 'Chef’s table', href: '#rf-enquire' },
    ],
    [
        { label: 'Menus & wine', href: '#rf-gallery' },
        { label: 'Gift cards', href: '#rf-enquire' },
        { label: 'Hours & directions', href: '#rf-contact' },
    ],
];

/**
 * Container.png–style layout: black field, white rounded cards, full-bleed hero,
 * services grid, 8-up “why” grid, 5-column gallery, 2×3 experience cards, enquire block, site chrome footer.
 */
export default function RestaurantFarmLayout({ demo, wa }) {
    const items = demo.offer.items ?? [];
    const services = items.slice(0, 3);
    const experienceCards = buildExperienceCards(demo, wa);
    const galleryImages = [
        { image: demo.heroImage, title: 'The dining room', desc: 'Warm light, communal tables, energy that reads on the first click.' },
        items[0] ? { image: items[0].image, title: items[0].title, desc: items[0].desc } : null,
        items[1] ? { image: items[1].image, title: items[1].title, desc: items[1].desc } : null,
        items[2] ? { image: items[2].image, title: items[2].title, desc: items[2].desc } : null,
        items[3] ? { image: items[3].image, title: items[3].title, desc: items[3].desc } : null,
    ].filter(Boolean);

    function submitInquiry(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email?.value?.trim() ?? '';
        const message = form.message?.value?.trim() ?? '';
        const body = encodeURIComponent(`From: ${email}\n\n${message}`);
        window.location.href = `mailto:hello@nymbloc.com?subject=${encodeURIComponent('Ember Yard inquiry')}&body=${body}`;
    }

    return (
        <div className="service-page rf-lp" id="rf-top">
            <header className="rf-hero" data-aos="fade-in" data-aos-duration="900">
                <div className="rf-hero__media">
                    <img src={demo.heroImage} alt="" className="rf-hero__img" fetchPriority="high" />
                    <div className="rf-hero__scrim" aria-hidden />
                </div>
                <div className="rf-hero__content rf-wrap">
                    <h1 className="rf-hero__title">{demo.heroHeadline}</h1>
                    {demo.heroSub ? <p className="rf-hero__sub">{demo.heroSub}</p> : null}
                </div>
                <div className="rf-hero__dots" aria-hidden>
                    <span className="rf-hero__dot is-active" />
                    <span className="rf-hero__dot" />
                    <span className="rf-hero__dot" />
                </div>
            </header>

            <section className="rf-stack" id="rf-services" data-aos="fade-up">
                <div className="rf-card rf-wrap">
                    <h2 className="rf-card__title">Our services</h2>
                    <p className="rf-card__lead">
                        Signature plates and drinks shown the way guests decide—clear titles, honest descriptions, and
                        room to swap in tonight’s specials.
                    </p>
                    <div className="rf-services">
                        {services.map((s, i) => (
                            <article
                                key={s.title}
                                className="rf-service"
                                data-aos="fade-up"
                                data-aos-delay={i * 90}
                                data-aos-duration="700"
                            >
                                <div className="rf-service__media">
                                    <img src={s.image} alt="" />
                                </div>
                                <h3 className="rf-service__title">{s.title}</h3>
                                <p className="rf-service__desc">{s.desc}</p>
                                <a href={wa} className="rf-service__link" target="_blank" rel="noopener noreferrer">
                                    Explore more <span aria-hidden>→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rf-stack" id="rf-why" data-aos="fade-up">
                <div className="rf-card rf-wrap">
                    <h2 className="rf-card__title">Why choose Ember Yard?</h2>
                    <p className="rf-card__lead">{demo.problem.lead}</p>
                    <div className="rf-why">
                        {WHY_COPY.map((row, i) => {
                            const Ico = WHY_ICONS[i % WHY_ICONS.length];
                            return (
                                <div
                                    key={row.title}
                                    className="rf-why__cell"
                                    data-aos="fade-up"
                                    data-aos-delay={(i % 4) * 60}
                                    data-aos-duration="650"
                                >
                                    <div className="rf-why__icon">
                                        <Ico />
                                    </div>
                                    <h3 className="rf-why__title">{row.title}</h3>
                                    <p className="rf-why__text">{row.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="rf-stack" id="rf-gallery" data-aos="fade-up">
                <div className="rf-gallery rf-wrap">
                    {galleryImages.map((g, i) => (
                        <figure
                            key={g.image + g.title}
                            className="rf-gallery__strip"
                            data-aos="fade-up"
                            data-aos-delay={i * 70}
                            data-aos-duration="680"
                        >
                            <div className="rf-gallery__img-wrap">
                                <img src={g.image} alt="" />
                            </div>
                            <figcaption className="rf-gallery__cap">
                                <strong>{g.title}</strong>
                                <span>{g.desc}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </section>

            <section className="rf-stack" id="rf-experience" data-aos="fade-up">
                <div className="rf-card rf-wrap">
                    <h2 className="rf-card__title">Spaces & experiences</h2>
                    <p className="rf-card__lead">
                        A second band of story-driven cards—dine, stay, and celebrate—with the same clean hierarchy as
                        your reference layout.
                    </p>
                    <div className="rf-exp-grid">
                        {experienceCards.map((card, i) => (
                            <article
                                key={`${card.title}-${i}`}
                                className="rf-exp-card"
                                data-aos="fade-up"
                                data-aos-delay={80 + i * 70}
                                data-aos-duration="700"
                            >
                                <div className="rf-exp-card__media">
                                    <img src={card.image} alt="" loading="lazy" />
                                </div>
                                <h3 className="rf-exp-card__title">{card.title}</h3>
                                <p className="rf-exp-card__desc">{card.desc}</p>
                                <a
                                    href={card.href}
                                    className="rf-exp-card__cta"
                                    {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {card.cta} <span aria-hidden>→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="rf-stack" id="rf-enquire" data-aos="fade-up">
                <div className="rf-card rf-wrap rf-enquire-card">
                    <div className="rf-link-cols">
                        {RF_LINK_COLUMNS.map((col, ci) => (
                            <ul key={ci} className="rf-link-col">
                                {col.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="rf-link-col__a"
                                            {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        >
                                            {link.label} <span aria-hidden>→</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className="rf-pill-row">
                        <a href={wa} className="rf-pill rf-pill--black" target="_blank" rel="noopener noreferrer">
                            Reserve on WhatsApp
                        </a>
                        <a href="#rf-contact" className="rf-pill rf-pill--black">
                            Contact & directions
                        </a>
                    </div>
                    <form className="rf-inquiry-form" onSubmit={submitInquiry}>
                        <label className="rf-inquiry-form__label">
                            <span className="rf-inquiry-form__hint">Tell us about your visit or event</span>
                            <textarea
                                name="message"
                                className="rf-inquiry-form__textarea"
                                rows={4}
                                placeholder="Date, party size, dietary notes…"
                                required
                            />
                        </label>
                        <label className="rf-inquiry-form__label">
                            <span className="rf-inquiry-form__hint">Email</span>
                            <input
                                name="email"
                                type="email"
                                className="rf-inquiry-form__input"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </label>
                        <div className="rf-inquiry-form__actions">
                            <button type="submit" className="rf-inquiry-form__submit">
                                Send request
                            </button>
                            <p className="rf-inquiry-form__fine">Opens your email app—you can also reach us on WhatsApp.</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
