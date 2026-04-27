import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationDevelopment = () => {
    const plans = [
        {
            name: "Basic App",
            price: "$249",
            timeline: "1 week",
            tech: "React / React Native + Supabase",
            features: [
                "Simple mobile or web app",
                "2–4 screens",
                "Basic UI",
                "Simple database"
            ],
            recommended: false
        },
        {
            name: "Standard App",
            price: "$399",
            timeline: "2 weeks",
            tech: "React Native + Laravel / Supabase",
            features: [
                "5–8 screens",
                "User authentication",
                "API integrations",
                "Real-time features"
            ],
            recommended: true
        },
        {
            name: "Advanced App",
            price: "$599",
            timeline: "2 weeks",
            tech: "React Native + Laravel + SQL/NoSQL",
            features: [
                "Complex app / SaaS-like system",
                "Authentication + roles",
                "Real-time features",
                "Payment integration (Stripe/PayPal)",
                "Scalable backend"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section
                className="page-header robot-page-header service-page-hero"
                style={{ '--service-hero-image': 'url(/assets/expertise.jpg)' }}
                data-aos="fade-down"
            >
                <div className="container">
                    <span className="section-subtitle">Service</span>
                    <h1 className="section-title reveal-text">Application development</h1>
                    <p className="page-header-lead">
                        Web and mobile-style products, dashboards, and integrations—scoped for maintainability and real
                        user workflows.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="service-intro-block">
                        <h2 className="section-title">Robust App Solutions</h2>
                        <p>From simple prototypes to complex enterprise systems, we build applications that solve real-world problems. Our cross-platform expertise ensures your app reaches users on any device.</p>
                        <br />
                        <ul className="feature-list">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Cross-Platform (Web & Mobile)
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Real-time Functionality
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Scalable Cloud Architecture
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-subtitle">Pricing Plans</span>
                        <h2 className="section-title">Choose Your Plan</h2>
                    </div>

                    <div className="pricing-grid">
                        {plans.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} data-aos="fade-up" data-aos-delay={index * 100}>
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
                                    <li className="plan-tech-line">
                                        Tech: {plan.tech}
                                    </li>
                                </ul>
                                <Link to={`/checkout?service=Application&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'} plan-select-btn`}>
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

export default ApplicationDevelopment;
