import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getNicheDemoBySlug, whatsappHref } from '../../data/nicheDemos';
import RestaurantFarmLayout from './RestaurantFarmLayout';
import SalonStudioLayout from './SalonStudioLayout';
import CleaningCorporateLayout from './CleaningCorporateLayout';
import BakeryPeaceputLayout from './BakeryPeaceputLayout';
import { SITE_NAME } from '../../seo/siteConfig';

const THEME_AOS = {
    ember: { hero: 'zoom-in', problem: 'fade-up', offer: 'fade-up', cta: 'flip-up', testimonials: 'fade-up', byline: 'fade-up' },
    rose: { hero: 'fade-down', problem: 'fade-right', offer: 'fade-left', cta: 'zoom-in', testimonials: 'flip-up', byline: 'fade-up' },
    aqua: { hero: 'fade-up', problem: 'fade-left', offer: 'fade-right', cta: 'zoom-in-up', testimonials: 'fade-up', byline: 'fade-up' },
    honey: { hero: 'fade-right', problem: 'zoom-in', offer: 'fade-up', cta: 'fade-up', testimonials: 'zoom-in', byline: 'fade-up' },
};

const OFFER_AOS = {
    ember: 'zoom-in',
    rose: 'flip-up',
    aqua: 'fade-left',
    honey: 'zoom-in-up',
};

function NicheDemoPage() {
    const { slug } = useParams();
    const demo = getNicheDemoBySlug(slug);

    if (!demo) {
        return <Navigate to="/demos" replace />;
    }

    const wa = whatsappHref(demo.label);

    if (demo.slug === 'restaurants') {
        return <RestaurantFarmLayout demo={demo} wa={wa} />;
    }

    if (demo.slug === 'salons') {
        return <SalonStudioLayout demo={demo} wa={wa} />;
    }

    if (demo.slug === 'cleaning') {
        return <CleaningCorporateLayout demo={demo} wa={wa} />;
    }

    if (demo.slug === 'bakeries') {
        return <BakeryPeaceputLayout demo={demo} wa={wa} />;
    }

    const theme = demo.visualTheme || 'ember';
    const aos = THEME_AOS[theme] || THEME_AOS.ember;
    const offerAnim = OFFER_AOS[theme] || 'fade-up';

    const heroStyle = {
        '--service-hero-image': `url("${demo.heroImage.replace(/"/g, '%22')}")`,
    };

    return (
        <div className={`service-page niche-demo-page niche-lp niche-theme-${theme}`}>
            <section
                className="page-header robot-page-header service-page-hero niche-demo-hero niche-lp-hero"
                style={heroStyle}
                data-aos={aos.hero}
                data-aos-duration="900"
            >
                <div className="container">
                    <p className="niche-demo-back-home">
                        <Link to="/" className="niche-demo-back-link">
                            ← {SITE_NAME} home
                        </Link>
                    </p>
                    <span className="section-subtitle">{demo.heroEyebrow}</span>
                    <h1 className="section-title reveal-text niche-demo-headline">{demo.heroHeadline}</h1>
                    <p className="page-header-lead">{demo.heroSub}</p>
                    <p className="niche-lp-hero-credit">
                        {demo.slug === 'restaurants' ? (
                            <>
                                Photography shown in offer cards is split from your supplied collage; hero uses the
                                dining-room frame.
                            </>
                        ) : (
                            <>Imagery via stock for this sample layout.</>
                        )}
                    </p>
                </div>
            </section>

            <section
                className="section-padding robot-page-section niche-lp-problem"
                data-aos={aos.problem}
                data-aos-duration="850"
                id="problem"
            >
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">{demo.problem.eyebrow}</span>
                        <h2 className="section-title section-title-business">{demo.problem.title}</h2>
                        <p className="section-lead">{demo.problem.lead}</p>
                    </div>
                    <ul className="niche-lp-problem-grid">
                        {demo.problem.items.map((item, i) => (
                            <li
                                key={item.title}
                                className="niche-lp-problem-card"
                                data-aos="fade-up"
                                data-aos-delay={100 + i * 90}
                                data-aos-duration="700"
                            >
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section
                className="section-padding section-alt robot-page-section niche-lp-offer"
                data-aos={aos.offer}
                data-aos-duration="850"
                id="offer"
            >
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">{demo.offer.eyebrow}</span>
                        <h2 className="section-title section-title-business">{demo.offer.title}</h2>
                        <p className="section-lead">{demo.offer.lead}</p>
                    </div>
                    <div className="niche-lp-offer-grid">
                        {demo.offer.items.map((item, i) => (
                            <article
                                key={item.title}
                                className="niche-lp-offer-card"
                                data-aos={offerAnim}
                                data-aos-delay={60 + i * 90}
                                data-aos-duration="700"
                            >
                                <div className="niche-lp-offer-image-wrap">
                                    <img src={item.image} alt="" className="niche-lp-offer-image" />
                                </div>
                                <div className="niche-lp-offer-body">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="section-padding niche-lp-cta-whatsapp"
                data-aos={aos.cta}
                data-aos-duration="800"
                id="contact"
            >
                <div className="container niche-lp-cta-inner text-center">
                    <h2 className="niche-lp-cta-title">{demo.cta.title}</h2>
                    <p className="niche-lp-cta-lead">{demo.cta.lead}</p>
                    <a href={wa} className="btn btn-whatsapp btn-whatsapp-lg" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                    </a>
                    <p className="niche-lp-cta-phone">+92 316 5423233</p>
                </div>
            </section>

            <section
                className="section-padding section-alt robot-page-section niche-lp-testimonials"
                data-aos={aos.testimonials}
                data-aos-duration="800"
            >
                <div className="container">
                    <div className="section-intro">
                        <span className="section-subtitle">{demo.testimonials.eyebrow}</span>
                        <h2 className="section-title section-title-business">{demo.testimonials.title}</h2>
                        <p className="section-lead niche-lp-testimonials-disclaimer">{demo.testimonials.disclaimer}</p>
                    </div>
                    <ul className="niche-lp-testimonial-grid">
                        {demo.testimonials.items.map((t, i) => (
                            <li
                                key={t.name}
                                className="niche-lp-testimonial-card"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <blockquote className="niche-lp-quote">{t.quote}</blockquote>
                                <footer>
                                    <strong>{t.name}</strong>
                                    <span className="niche-lp-role">{t.role}</span>
                                </footer>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section
                className="section-padding niche-lp-byline robot-page-section"
                data-aos={aos.byline}
                data-aos-duration="700"
            >
                <div className="container text-center">
                    <p className="niche-lp-byline-text">
                        This multi-section layout is a <strong>{SITE_NAME}</strong> demonstration. Want it for your business?{' '}
                        <Link to="/contact" className="text-link">
                            Get in touch
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
}

export default NicheDemoPage;
