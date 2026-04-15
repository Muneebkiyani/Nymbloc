import React from 'react';
import PageHeader3D from '../components/three/PageHeader3D';

const Portfolio = () => {
    const projects = [
        {
            title: "CloudFlow ERP",
            category: "SaaS / Enterprise",
            image: "/assets/expertise.jpg",
            desc: "A comprehensive ERP solution for manufacturing businesses, featuring real-time inventory tracking and automated reporting."
        },
        {
            title: "Nexus Dashboard",
            category: "React / Analytics",
            image: "/assets/react.png",
            desc: "A high-performance analytics dashboard built with React and D3.js, providing deep insights into customer behavior."
        },
        {
            title: "EcoStyle Store",
            category: "WordPress / E-commerce",
            image: "/assets/wordpress.png",
            desc: "A custom WooCommerce build for a sustainable fashion brand, focused on a clean aesthetic and seamless checkout."
        },
        {
            title: "SecurePay Gateway",
            category: "Laravel / Fintech",
            image: "/assets/laravel.png",
            desc: "A robust payment processing API built with Laravel, featuring military-grade encryption and 99.9% uptime."
        },
        {
            title: "FitTrack Pro",
            category: "Mobile App / SaaS",
            image: "https://picsum.photos/seed/p5/600/400.jpg",
            desc: "A subscription-based fitness tracking platform with real-time syncing and personalized workout plans."
        },
        {
            title: "EduPortal LMS",
            category: "React / Education",
            image: "https://picsum.photos/seed/p6/600/400.jpg",
            desc: "A modern Learning Management System designed for universities, supporting large-scale video streaming and assessments."
        }
    ];

    return (
        <>
            <section className="page-header page-header-with-3d">
                <PageHeader3D variant="rings" />
                <div className="container">
                    <span className="section-subtitle">Our Work</span>
                    <h1 className="section-title reveal-text">Case Studies</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>Take a look at some of our recent projects and the solutions we've delivered for our clients.</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="portfolio-grid">
                        {projects.map((project, index) => (
                            <div className="portfolio-item" data-aos="zoom-in" data-aos-delay={index * 100} key={index}>
                                <img src={project.image} alt={project.title} className="portfolio-image" />
                                <div className="portfolio-overlay">
                                    <span>{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
