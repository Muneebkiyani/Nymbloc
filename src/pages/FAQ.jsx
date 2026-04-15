import React, { useState } from 'react';
import PageHeader3D from '../components/three/PageHeader3D';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { q: "What technologies do you specialize in?", a: "We specialize in modern web technologies including React (Next.js, TypeScript), Laravel (PHP), WordPress (Custom themes/plugins), and Node.js. We also have extensive experience with AWS, Docker, and various database systems." },
        { q: "How long does a typical project take?", a: "Project timelines vary based on complexity. A simple WordPress site might take 2-4 weeks, a custom React frontend 4-8 weeks, while a comprehensive SaaS platform can take 3-6 months. We define clear milestones at the start of every project." },
        { q: "Do you offer ongoing maintenance and support?", a: "Yes, we provide several maintenance tiers to ensure your application remains secure, updated, and performing optimally. Our support includes security patches, performance monitoring, and priority bug fixes." },
        { q: "How do you handle project pricing?", a: "We typically work on a fixed-price basis for well-defined projects, providing a detailed quote after the discovery phase. For ongoing development or evolving scopes, we also offer monthly retainers or hourly billing." },
        { q: "Will I own the source code after the project?", a: "Absolutely. Upon full payment, you own 100% of the custom source code and intellectual property developed for your project. We deliver all assets and repositories to you at launch." },
        { q: "Can you work with an existing codebase?", a: "Yes, we often help clients modernize or expand their existing React or Laravel applications. We start with a code audit to assess the current state and provide recommendations for the best path forward." },
        { q: "What is your communication process during development?", a: "Communication is key to our success. We use tools like Slack for daily updates, Jira for task tracking, and schedule weekly or bi-weekly video calls to demo progress and gather feedback." }
    ];

    return (
        <>
            <section className="page-header page-header-with-3d">
                <PageHeader3D variant="orbs" />
                <div className="container">
                    <span className="section-subtitle">Got Questions?</span>
                    <h1 className="section-title reveal-text">Common Questions</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>Everything you need to know about working with NYMBLOC and our development process.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
                                <div className="faq-question" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                    {faq.q} <span className="faq-icon" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                                </div>
                                <div className="faq-answer" style={{ 
                                    maxHeight: activeIndex === index ? '400px' : '0', 
                                    padding: activeIndex === index ? '0 25px 25px' : '0 25px',
                                    opacity: activeIndex === index ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.4s ease'
                                }}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
