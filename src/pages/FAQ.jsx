import React from 'react';
import FaqAccordion from '../components/FaqAccordion';

const FAQ_ITEMS = [
    {
        q: 'What technologies do you specialize in?',
        a: 'We specialize in modern web technologies including React (Next.js, TypeScript), Laravel (PHP), WordPress (Custom themes/plugins), and Node.js. We also have extensive experience with AWS, Docker, and various database systems.',
    },
    {
        q: 'How long does a typical project take?',
        a: 'Project timelines vary based on complexity. A simple WordPress site might take 2-4 weeks, a custom React frontend 4-8 weeks, while a comprehensive SaaS platform can take 3-6 months. We define clear milestones at the start of every project.',
    },
    {
        q: 'Do you offer ongoing maintenance and support?',
        a: 'Yes, we provide several maintenance tiers to ensure your application remains secure, updated, and performing optimally. Our support includes security patches, performance monitoring, and priority bug fixes.',
    },
    {
        q: 'How do you handle project pricing?',
        a: 'We typically work on a fixed-price basis for well-defined projects, providing a detailed quote after the discovery phase. For ongoing development or evolving scopes, we also offer monthly retainers or hourly billing.',
    },
    {
        q: 'Will I own the source code after the project?',
        a: 'Absolutely. Upon full payment, you own 100% of the custom source code and intellectual property developed for your project. We deliver all assets and repositories to you at launch.',
    },
    {
        q: 'Can you work with an existing codebase?',
        a: 'Yes, we often help clients modernize or expand their existing React or Laravel applications. We start with a code audit to assess the current state and provide recommendations for the best path forward.',
    },
    {
        q: 'What is your communication process during development?',
        a: 'Communication is key to our success. We use tools like Slack for daily updates, Jira for task tracking, and schedule weekly or bi-weekly video calls to demo progress and gather feedback.',
    },
];

const FAQ = () => {
    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down" data-aos-duration="600">
                <div className="container">
                    <span className="section-subtitle">FAQ</span>
                    <h1 className="section-title reveal-text">Common questions</h1>
                    <p className="page-header-lead">
                        Straight answers about how we work, what we build, and what to expect in a project.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <FaqAccordion items={FAQ_ITEMS} idPrefix="page-faq" />
                </div>
            </section>
        </>
    );
};

export default FAQ;
