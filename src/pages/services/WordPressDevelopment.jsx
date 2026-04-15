import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader3D from '../../components/three/PageHeader3D';

const WordPressDevelopment = () => {
    const plans = [
        {
            name: "Basic",
            price: "$199",
            timeline: "1 week",
            tech: "WordPress + Custom Theme",
            colorClass: "card-green",
            features: [
                "Custom Theme Design",
                "Mobile Responsive",
                "SEO Fundamental Set",
                "Performance Tuning",
                "Contact Form Setup"
            ],
            recommended: false
        },
        {
            name: "Standard",
            price: "$249",
            timeline: "2 weeks",
            tech: "WooCommerce / Elementor Pro",
            colorClass: "card-blue",
            features: [
                "Full WooCommerce Setup",
                "Payment Gateway Integration",
                "Inventory Management",
                "Shipping Logic",
                "Customer Dashboard"
            ],
            recommended: true
        },
        {
            name: "Premium",
            price: "$299",
            timeline: "2-3 weeks",
            tech: "Advanced WP Engine",
            colorClass: "card-purple",
            features: [
                "Subscription Integration",
                "Restricted Content Areas",
                "LMS Features Available",
                "Marketing Automation",
                "Advanced Security"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section className="page-header page-header-with-3d">
                <PageHeader3D variant="blocks" />
                <div className="container">
                    <span className="section-subtitle">Service Detail</span>
                    <h1 className="section-title reveal-text">Custom WordPress</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Professional WordPress solutions with optimized performance and custom features.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="service-row">
                        <div className="service-image" data-aos="fade-right">
                            <img src="/assets/wordpress.png" alt="WordPress Development" className="responsive-img" />
                        </div>
                        <div className="service-text" data-aos="fade-left">
                            <h2 className="section-title">Beyond the Basics</h2>
                            <p>We transform WordPress into a powerful business tool. Our custom builds ensure your site is fast, secure, and easy to manage, giving you total control over your digital presence.</p>
                            <br />
                            <ul className="feature-list">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Custom Theme & Plugin Dev
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Expert WooCommerce Setup
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Core Web Vitals Optimized
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
                                <Link to={`/checkout?service=WordPress&plan=${encodeURIComponent(plan.name)}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%', borderColor: plan.recommended ? 'transparent' : 'rgba(255,255,255,0.2)' }}>
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

export default WordPressDevelopment;
