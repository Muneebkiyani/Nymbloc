import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const { search } = useLocation();
    const { service, plan } = useMemo(() => {
        const params = new URLSearchParams(search);
        return {
            service: params.get('service') || 'Selected Service',
            plan: params.get('plan') || 'Selected Plan',
        };
    }, [search]);

    const getPrice = () => {
        const prices = {
            'Website': {
                'Starter Website': '$199',
                'Business Website': '$299',
                'Advanced Website': '$399'
            },
            'Application': {
                'Basic App': '$249',
                'Standard App': '$399',
                'Advanced App': '$599'
            },
            'Frontend': {
                'Landing Page': '$1,200',
                'Web Application': '$3,500',
                'Next.js Powerhouse': '$6,000'
            },
            'Backend': {
                'API Foundation': '$1,500',
                'Business Engine': '$4,000',
                'Legacy Overhaul': '$7,500'
            },
            'WordPress': {
                'Basic': '$199',
                'Standard': '$249',
                'Premium': '$299'
            }
        };

        return prices[service]?.[plan] || 'Custom / Contact';
    };

    return (
        <div className="checkout-page">
            <section className="page-header">
                <div className="container">
                    <span className="section-subtitle">Secure Checkout</span>
                    <h1 className="section-title reveal-text">Finalize Your Plan</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-light)' }}>
                        You're one step away from starting your digital transformation with NYMBLOC.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px' }}>
                        <div className="checkout-form-container">
                            <div className="glass-panel" style={{ padding: '40px' }}>
                                <h2 style={{ marginBottom: '30px', color: 'white' }}>Your Information</h2>
                                <form 
                                    className="contact-form" 
                                    style={{ padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}
                                    action="https://formsubmit.co/hello@nymbloc.com"
                                    method="POST"
                                >
                                    {/* Form Config */}
                                    <input type="hidden" name="_subject" value={`New Order Proposal: ${plan} ${service} Development`} />
                                    <input type="hidden" name="Service" value={service} />
                                    <input type="hidden" name="Plan" value={plan} />
                                    <input type="hidden" name="Amount" value={getPrice()} />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_captcha" value="false" />

                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-light)' }}>Full Name</label>
                                        <input type="text" name="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-light)' }}>Email Address</label>
                                        <input type="email" name="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-light)' }}>Company Name</label>
                                        <input type="text" name="company" placeholder="Your Company" />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-light)' }}>Project Brief (Optional)</label>
                                        <textarea name="message" placeholder="Tell us more about your project..."></textarea>
                                    </div>
                                    
                                    <div className="whatsapp-notice" style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '20px', borderRadius: '12px', marginBottom: '25px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                                        <p style={{ color: 'var(--accent-blue)', fontSize: '0.95rem' }}>
                                            <strong>Note:</strong> After submission, our team will contact you within 24 hours to finalize details. For faster communication, you can reach us directly at:
                                        </p>
                                        <a href="tel:+17407626613" style={{ display: 'block', marginTop: '10px', fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>
                                            +1 740 762 6613
                                        </a>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        Confirm Selection
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="order-summary-container">
                            <div className="glass-panel" style={{ padding: '40px', position: 'sticky', top: '100px' }}>
                                <h2 style={{ marginBottom: '30px', color: 'white' }}>Order Summary</h2>
                                <div className="summary-item" style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--glass-border)' }}>
                                    <span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.9rem' }}>Service</span>
                                    <strong style={{ fontSize: '1.1rem', color: 'white' }}>{service} Development</strong>
                                </div>
                                <div className="summary-item" style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--glass-border)' }}>
                                    <span style={{ color: 'var(--text-light)', display: 'block', fontSize: '0.9rem' }}>Selected Plan</span>
                                    <strong style={{ fontSize: '1.1rem', color: 'var(--accent-orange)' }}>{plan}</strong>
                                </div>
                                <div className="summary-total" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white' }}>Total Estimate</span>
                                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent-orange)' }}>
                                        {getPrice()}
                                    </span>
                                </div>
                                <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                                    * Final pricing might vary based on specific requirements. We will provide a formal invoice after the discovery call.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;
