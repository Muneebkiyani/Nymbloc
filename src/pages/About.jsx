import React from 'react';

const About = () => {
    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Get to know us</span>
                    <h1 className="section-title reveal-text">About NYMBLOC</h1>
                    <p className="page-header-lead">
                        We are designers and engineers who help businesses ship websites and software that are easy to
                        understand, fast to load, and straightforward to maintain.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image" data-aos="fade-right">
                            <img src="/assets/expertise.jpg" alt="NYMBLOC Team" className="responsive-img" />
                        </div>
                        <div className="about-text" data-aos="fade-left">
                            <h2 className="section-title">Our Story</h2>
                            <p>Founded with the vision of simplifying digital transformation, NYMBLOC has grown into a premier agency known for technical excellence and creative innovation. We believe that every block of code should serve a purpose and contribute to a larger, scalable ecosystem.</p>
                            <br />
                            <p>Our expertise spans across modern web technologies, allowing us to build everything from reactive frontends to robust enterprise backends.</p>
                            <ul className="feature-list" style={{ marginTop: '20px' }}>
                                <li><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Innovation-Driven Approach</li>
                                <li><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Client-Centric Solutions</li>
                                <li><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>Excellence in Execution</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mission-vision" data-aos="fade-up">
                        <div className="mv-card" data-aos="fade-up" data-aos-delay="0">
                            <h3>Our Mission</h3>
                            <p>To empower businesses by providing high-quality, scalable digital solutions that drive growth and foster innovation in an ever-evolving digital landscape.</p>
                        </div>
                        <div className="mv-card" data-aos="fade-up" data-aos-delay="80">
                            <h3>Our Vision</h3>
                            <p>
                                To be a dependable partner for teams that care about quality—known for honest scoping,
                                careful execution, and long-term support when you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="culture-section section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <span className="section-subtitle">Our Values</span>
                        <h2 className="section-title reveal-text">What Drives NYMBLOC</h2>
                    </div>
                    <div className="culture-grid">
                        <div className="culture-card" data-aos="fade-up" data-aos-delay="0">
                            <span className="culture-icon">🎯</span>
                            <h3>Precision</h3>
                            <p>We believe in getting it right the first time. Our rigorous testing and code review processes ensure that every release is stable and high-performing.</p>
                        </div>
                        <div className="culture-card" data-aos="zoom-in" data-aos-delay="100">
                            <span className="culture-icon">🤝</span>
                            <h3>Transparency</h3>
                            <p>No black boxes here. We maintain open communication channels and provide full visibility into our development process via shared boards and weekly demos.</p>
                        </div>
                        <div className="culture-card" data-aos="fade-up" data-aos-delay="160">
                            <span className="culture-icon">🚀</span>
                            <h3>Agility</h3>
                            <p>The digital landscape changes fast. Our agile mindset allows us to pivot and adapt to your feedback, ensuring the end product meets your evolving needs.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
