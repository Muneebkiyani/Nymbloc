import React from 'react';
import { Link } from 'react-router-dom';

const FrontendDevelopment = () => {
    const plans = [
        {
            name: "Landing Page",
            price: "$1,200",
            features: [
                "Single Page Application",
                "High Conversion Design",
                "Mobile Responsive",
                "SEO Optimization",
                "Speed Optimization"
            ],
            recommended: false
        },
        {
            name: "Web Application",
            price: "$3,500",
            features: [
                "Complex State Management",
                "Interactive Dashboard",
                "API Integration",
                "Custom UI Components",
                "Real-time Data"
            ],
            recommended: true
        },
        {
            name: "Next.js Powerhouse",
            price: "$6,000",
            features: [
                "Full-stack Next.js App",
                "Server-Side Rendering",
                "Advanced SEO Strategy",
                "Enterprise Architecture",
                "Premium Support"
            ],
            recommended: false
        }
    ];

    return (
        <div className="service-page">
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">Service Detail</span>
                    <h1 className="section-title reveal-text">React & Frontend</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        Creating breathtaking, high-performance user interfaces that captivate and convert.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="service-row">
                        <div className="service-image" data-aos="fade-right">
                            <img src="/assets/react.png" alt="Frontend Development" className="responsive-img" />
                        </div>
                        <div className="service-text" data-aos="fade-left">
                            <h2 className="section-title">Modern UI/UX</h2>
                            <p>We leverage the power of React and Next.js to build frontends that are not only beautiful but also lightning-fast. Our focus is on providing a seamless experience across all devices.</p>
                            <br />
                            <ul className="feature-list">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Component-Driven Architecture
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Performance First Mentality
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Accessible & Inclusive Design
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
                                <Link to={`/checkout?service=Frontend&plan=${plan.name}`} className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`} style={{ width: '100%' }}>
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

export default FrontendDevelopment;
