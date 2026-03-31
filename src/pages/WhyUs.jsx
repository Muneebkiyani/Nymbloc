import React from 'react';

const WhyUs = () => {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--accent-orange)' }}>Our Advantage</span>
                    <h1 className="section-title reveal-text">The NYMBLOC Difference</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#cbd5e1' }}>We don't just build websites; we build the digital foundations for your business success.</p>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="innovation-section">
                        <div className="innovation-image" data-aos="fade-right">
                            <img src="/assets/innovation.jpg" alt="Innovation at NYMBLOC" />
                        </div>
                        <div className="innovation-text" data-aos="fade-left">
                            <span className="section-subtitle">Innovation Lab</span>
                            <h2 className="section-title">Pushing the Boundaries of Tech</h2>
                            <p>At NYMBLOC, we don't just follow trends—we set them. Our innovation lab is constantly exploring the intersection of AI, automated systems, and scalable architecture to provide our clients with a competitive edge that lasts.</p>
                            <p>By integrating cutting-edge research into every project, we ensure that the digital solutions we build today are ready for the challenges of tomorrow.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="benefits-detail">
                        {[
                            { title: "Future-Proof Tech", desc: "We use the latest stable technologies like React and Laravel to ensure your application remains modern, secure, and easy to maintain for years to come." },
                            { title: "Scalable by Design", desc: "Every line of code we write is designed with scale in mind. Whether you have 10 users or 10 million, our architecture is ready to grow with you." },
                            { title: "Agile & Transparent", desc: "You're always in the loop. Our agile process features regular demos and updates, ensuring the final product matches your vision perfectly." },
                            { title: "Performance Optimized", desc: "Speed matters. We optimize every asset and query to ensure your application loads instantly, improving both user experience and SEO rankings." },
                            { title: "Security First", desc: "We implement industry-standard security protocols from day one, protecting your data and your users' privacy against modern threats." },
                            { title: "Dedicated Support", desc: "We're your long-term partners. Our maintenance packages provide peace of mind, knowing that expert help is always just a message away." }
                        ].map((benefit, i) => (
                            <div className="benefit-item" data-aos="fade-up" data-aos-delay={i * 100} key={i}>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="stats-row" data-aos="fade-up">
                        {[
                            { val: "50+", lab: "Projects Delivered" },
                            { val: "98%", lab: "Client Satisfaction" },
                            { val: "10+", lab: "Tech Experts" },
                            { val: "5+", lab: "Years of Innovation" }
                        ].map((s, i) => (
                            <div className="stat-card" key={i}>
                                <span className="stat-number">{s.val}</span>
                                <span className="stat-label">{s.lab}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: 'var(--primary-blue)', color: 'white' }}>
                <div className="container">
                    <div className="innovation-section">
                        <div className="innovation-text" data-aos="fade-right">
                            <span className="section-subtitle" style={{ color: 'var(--accent-orange)' }}>Infrastructure</span>
                            <h2 className="section-title" style={{ color: 'white' }}>Bulletproof Hosting & Security</h2>
                            <p style={{ color: '#cbd5e1' }}>We don't just build the software; we ensure it lives in a secure, high-performance environment. Our next-gen server infrastructure utilizes quantum-level encryption and high-speed fiber optics to ensure zero downtime.</p>
                            <p style={{ color: '#cbd5e1' }}>Your data's safety is our top priority. Our facilities are monitored 24/7 by specialized technicians in controlled environments, guaranteeing the highest standards of digital hygiene and physical security.</p>
                        </div>
                        <div className="innovation-image" data-aos="fade-left">
                            <img src="/assets/infrastructure.jpg" alt="Infrastructure at NYMBLOC" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyUs;
