import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationDevelopment = () => {
    const plans = [
        {
            name: "Basic App",
            price: "$249",
            timeline: "1 week",
            tech: "React / React Native + Supabase",
            colorClass: "card-green",
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
            colorClass: "card-blue",
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
            colorClass: "card-purple",
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
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">Service Detail</span>
                    <h1 className="section-title reveal-text">Application Development</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Custom mobile and web applications built for performance and scale.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="service-row">
                        <div className="service-image" data-aos="fade-right">
                            <img src="/assets/expertise.jpg" alt="Application Development" className="responsive-img" />
                        </div>
                        <div className="service-text" data-aos="fade-left">
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
                                <Link to={`/checkout?service=Application&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', borderColor: plan.recommended ? 'transparent' : 'rgba(255,255,255,0.2)' }}>
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
