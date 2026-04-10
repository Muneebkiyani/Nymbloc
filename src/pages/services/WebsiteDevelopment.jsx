import React from 'react';
import { Link } from 'react-router-dom';

const WebsiteDevelopment = () => {
    const plans = [
        {
            name: "Starter Website",
            price: "$199",
            timeline: "1 week",
            tech: "React + basic backend",
            colorClass: "card-green",
            features: [
                "React-based website",
                "3–5 pages",
                "Mobile responsive design",
                "Basic animations",
                "Contact form integration"
            ],
            recommended: false
        },
        {
            name: "Business Website",
            price: "$299",
            timeline: "2 weeks",
            tech: "React + Laravel / Supabase",
            colorClass: "card-blue",
            features: [
                "React / Next.js website",
                "6–10 pages",
                "API integrations",
                "Dynamic content (CMS/backend)",
                "Performance optimization"
            ],
            recommended: true
        },
        {
            name: "Advanced Website",
            price: "$399",
            timeline: "2 weeks",
            tech: "React + Laravel + SQL/NoSQL",
            colorClass: "card-purple",
            features: [
                "High-end React / Next.js",
                "10+ pages or complex UI",
                "Dashboard / admin panel",
                "Authentication system",
                "Advanced integrations"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">Service Detail</span>
                    <h1 className="section-title reveal-text">Website Development</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Premium React-based websites tailored for impact and conversion.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="service-row">
                        <div className="service-image" data-aos="fade-right">
                            <img src="/assets/wordpress.png" alt="Website Development" className="responsive-img" />
                        </div>
                        <div className="service-text" data-aos="fade-left">
                            <h2 className="section-title">Modern Web Solutions</h2>
                            <p>We build high-performance, responsive websites using the latest technologies. Whether you need a simple brand presence or a complex business platform, we deliver excellence in record time.</p>
                            <br />
                            <ul className="feature-list">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    React & Next.js Experts
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    SEO & Speed Optimized
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Custom API Integrations
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pricing-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-subtitle">Pricing Plans</span>
                        <h2 className="section-title">Choose Your Plan</h2>
                    </div>

                    <div className="pricing-grid">
                        {plans.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''} ${plan.colorClass}`} data-aos="fade-up" data-aos-delay={index * 100}>
                                {plan.recommended && <div className="recommended-tag">Most Popular</div>}
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">{plan.price}</div>
                                <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: '700' }}>
                                    Timeline: {plan.timeline}
                                </div>
                                <ul className="plan-features">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            {feature}
                                        </li>
                                    ))}
                                    <li style={{ marginTop: '10px', color: 'white', fontWeight: '600', fontSize: '0.85rem' }}>
                                        Tech: {plan.tech}
                                    </li>
                                </ul>
                                <Link to={`/checkout?service=Website&plan=${plan.name}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', borderColor: plan.recommended ? 'transparent' : 'rgba(255,255,255,0.2)' }}>
                                    Select Plan
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDevelopment;
