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
            Website: {
                'Starter Website': '$199',
                'Business Website': '$299',
                'Advanced Website': '$399',
            },
            Application: {
                'Basic App': '$249',
                'Standard App': '$399',
                'Advanced App': '$599',
            },
            WordPress: {
                Basic: '$199',
                Standard: '$249',
                Premium: '$299',
            },
        };

        return prices[service]?.[plan] || 'Custom / Contact';
    };

    return (
        <div className="checkout-page">
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Next step</span>
                    <h1 className="section-title reveal-text">Request this plan</h1>
                    <p className="page-header-lead">
                        Submit your details and we will follow up to confirm scope and timeline. This is a project
                        inquiry—not instant payment processing.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section" data-aos="fade-up">
                <div className="container">
                    <div className="checkout-grid">
                        <div className="checkout-form-container" data-aos="fade-up" data-aos-delay="0">
                            <div className="glass-panel checkout-form-panel">
                                <h2 className="checkout-form-title">Your information</h2>
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
                                    
                                    <div className="checkout-notice">
                                        <p>
                                            <strong>Note:</strong> After submission, our team will contact you within
                                            24 hours to finalize details. For faster communication, call us directly:
                                        </p>
                                        <a href="tel:+17407626613" className="checkout-phone">
                                            +1 740 762 6613
                                        </a>
                                    </div>

                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                        Confirm Selection
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="order-summary-container" data-aos="fade-up" data-aos-delay="80">
                            <div className="glass-panel checkout-summary-panel">
                                <h2 className="checkout-summary-title">Summary</h2>
                                <div className="summary-item">
                                    <span className="summary-label">Service</span>
                                    <strong className="summary-value">{service} Development</strong>
                                </div>
                                <div className="summary-item">
                                    <span className="summary-label">Plan</span>
                                    <strong className="summary-plan">{plan}</strong>
                                </div>
                                <div className="summary-total">
                                    <span className="summary-total-label">Estimate</span>
                                    <span className="summary-total-price">{getPrice()}</span>
                                </div>
                                <p className="summary-disclaimer">
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
