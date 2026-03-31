import React from 'react';

const Process = () => {
    const steps = [
        {
            num: "01",
            title: "Discovery & Consultation",
            desc: "We begin by diving deep into your business goals, target audience, and project requirements. Through workshops and interviews, we define the scope and set clear objectives for success.",
            image: "/assets/process-discovery.png",
            points: ["Goal Alignment", "User Personas", "Tech Requirements"]
        },
        {
            num: "02",
            title: "Strategy & Planning",
            desc: "Once we have a clear understanding, we move into the strategic phase. We create sitemaps, wireframes, and a technical roadmap that outlines the architecture and development timeline.",
            image: "/assets/process-strategy.png",
            points: ["Wireframing", "UX Design", "Sprint Planning"]
        },
        {
            num: "03",
            title: "Agile Development",
            desc: "Our expert developers bring the designs to life using modern technologies. We work in sprints, providing regular updates and allowing for feedback at every stage of the build.",
            image: "/assets/process-development.png",
            points: ["Sprints & Demos", "QA Testing", "Continuous Feedback"]
        },
        {
            num: "04",
            title: "Launch & Growth",
            desc: "After thorough testing, we deploy your solution to production. But our job doesn't end there—we provide ongoing support and optimizations to ensure long-term growth.",
            image: "/assets/process-growth.png",
            points: ["Production Deployment", "Performance Tuning", "Ongoing Support"]
        }
    ];

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">How We Work</span>
                    <h1 className="section-title reveal-text">Our Development Process</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>We follow a streamlined, agile process to ensure your project is delivered on time, on budget, and to the highest standards.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="process-steps">
                        {steps.map((step, index) => (
                            <div className="step-item" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={index}>
                                <div className="step-number-large">{step.num}</div>
                                <div className="step-content">
                                    <h2>{step.title}</h2>
                                    <p>{step.desc}</p>
                                    <div className="step-details">
                                        {step.points.map((point, pIndex) => (
                                            <div className="detail-point" key={pIndex}>
                                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                                                {point}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="step-image">
                                    <img src={step.image} alt={step.title} className="responsive-img" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;
