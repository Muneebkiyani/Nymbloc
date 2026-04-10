import React from 'react';
import { Link } from 'react-router-dom';

const BackendDevelopment = () => {
    const plans = [
        {
            name: "API Foundation",
            price: "$1,500",
            features: [
                "RESTful API Design",
                "Database Architecture",
                "JWT Authentication",
                "Basic Security Review",
                "Documentation"
            ],
            recommended: false
        },
        {
            name: "Business Engine",
            price: "$4,000",
            features: [
                "Complex Business Logic",
                "Payment Integrations",
                "Modular Architecture",
                "Admin Management Panel",
                "Priority Support"
            ],
            recommended: true
        },
        {
            name: "Legacy Overhaul",
            price: "$7,500",
            features: [
                "System Migration",
                "Security Hardening",
                "Performance Optimization",
                "Cloud Scaling Strategy",
                "24/7 Monitoring"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">Service Detail</span>
                    <h1 className="section-title reveal-text">Laravel & Backend</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Engineering robust, secure, and scalable backends that empower your application's logic.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="service-row">
                        <div className="service-image" data-aos="fade-right">
                            <img src="/assets/laravel.png" alt="Backend Development" className="responsive-img" />
                        </div>
                        <div className="service-text" data-aos="fade-left">
                            <h2 className="section-title">The Power of Laravel</h2>
                            <p>We leverage the elegance and security of Laravel to build backends that are reliable and maintainable. Our focus is on clean code and enterprise-grade architecture.</p>
                            <br />
                            <ul className="feature-list">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Automated Testing & QA
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Scalable Database Design
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Advanced API Security
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
                            <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`} data-aos="fade-up" data-aos-delay={index * 100}>
                                {plan.recommended && <div className="recommended-tag">Most Popular</div>}
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">{plan.price}</div>
                                <ul className="plan-features">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={`/checkout?service=Backend&plan=${plan.name}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
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

export default BackendDevelopment;
