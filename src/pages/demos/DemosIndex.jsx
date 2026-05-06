import React from 'react';
import { Link } from 'react-router-dom';
import { NICHE_DEMO_LIST } from '../../data/nicheDemos';

const DemosIndex = () => {
    return (
        <div className="service-page niche-demo-index">
            <section className="page-header robot-page-header" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Industry previews</span>
                    <h1 className="section-title reveal-text">Demo sites by niche</h1>
                    <p className="page-header-lead">
                        Sample one-page layouts you can share on{' '}
                        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                            Pinterest
                        </a>{' '}
                        or with clients—each URL is a full landing page linked from our <Link to="/">home</Link>: hero,
                        the problem you solve, offer grid with imagery, a WhatsApp call-to-action, and testimonial cards
                        (sample quotes for layout only).
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="niche-demo-index-grid">
                        {NICHE_DEMO_LIST.map((demo, i) => (
                            <Link
                                key={demo.slug}
                                to={demo.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="niche-demo-index-card"
                                data-aos="fade-up"
                                data-aos-delay={i * 60}
                            >
                                <div
                                    className="niche-demo-index-card-image"
                                    style={{
                                        '--card-image': `url("${demo.heroImage.replace(/"/g, '%22')}")`,
                                    }}
                                />
                                <div className="niche-demo-index-card-body">
                                    <h2>{demo.label}</h2>
                                    <p>{demo.accentNote}</p>
                                    <span className="niche-demo-index-cta">Open demo →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <p className="niche-demo-index-attribution" style={{ marginTop: '2rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', fontSize: '0.9rem', lineHeight: 1.55, color: 'var(--text-light)' }}>
                        Branding, layout, and copy on each demo are <strong>NYMBLOC originals</strong> for illustration only.
                        Venue names and stories are fictional; photography is credited stock (see each demo)—not an endorsement
                        by any real restaurant, salon, or brand.
                    </p>
                    <p className="niche-demo-index-back text-center" style={{ marginTop: '2.5rem' }}>
                        <Link to="/" className="text-link">
                            ← Back to NYMBLOC home
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DemosIndex;
