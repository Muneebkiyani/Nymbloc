import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Legal</span>
                    <h1 className="section-title">Privacy Policy</h1>
                    <p className="page-header-lead">
                        Last updated: April 27, 2026. This policy describes how NYMBLOC (“we”, “us”) handles
                        information when you use nymbloc.com and related services.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section legal-page" data-aos="fade-up">
                <div className="container legal-container">
                    <h2>1. Information we collect</h2>
                    <p>
                        We may collect information you voluntarily provide, such as your name, email address,
                        company name, phone number, and project details when you submit a contact form, checkout
                        inquiry, or email us. We may also collect technical data automatically, including IP address,
                        browser type, device type, general location derived from IP, and pages viewed, through
                        standard server logs and analytics tools.
                    </p>

                    <h2>2. How we use information</h2>
                    <p>We use this information to:</p>
                    <ul className="legal-list">
                        <li>Respond to inquiries and provide proposals or support;</li>
                        <li>Operate, secure, and improve our website;</li>
                        <li>Understand aggregate usage trends (for example, which pages are most helpful);</li>
                        <li>Comply with legal obligations and protect our rights.</li>
                    </ul>

                    <h2>3. Forms and email delivery</h2>
                    <p>
                        Contact and order forms may be processed through third-party form or email delivery
                        providers. Those providers act on our instructions and should only use your data to
                        transmit or store messages for us. Review their privacy policies for details on how they
                        process data.
                    </p>

                    <h2>4. Cookies and similar technologies</h2>
                    <p>
                        Our site may use cookies or similar technologies for essential functionality, preferences,
                        or analytics and advertising where enabled. You can control cookies through your browser
                        settings. If we use advertising or analytics partners, their use of data is governed by
                        their respective policies and any consent mechanisms shown on the site.
                    </p>

                    <h2>5. Retention</h2>
                    <p>
                        We retain communications and project-related information for as long as needed to fulfill
                        the purposes above, unless a longer period is required by law. Technical logs may be kept for
                        shorter rolling periods for security and troubleshooting.
                    </p>

                    <h2>6. Sharing</h2>
                    <p>
                        We do not sell your personal information. We may share information with service providers
                        who assist our operations (hosting, email, analytics), when required by law, or to protect
                        the safety and integrity of our business and users.
                    </p>

                    <h2>7. Security</h2>
                    <p>
                        We use reasonable administrative, technical, and organizational measures to protect
                        information. No method of transmission over the Internet is completely secure; we cannot
                        guarantee absolute security.
                    </p>

                    <h2>8. Your rights</h2>
                    <p>
                        Depending on where you live, you may have rights to access, correct, delete, or restrict
                        processing of your personal information, or to object to certain processing. To exercise
                        these rights, contact us at{' '}
                        <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>. We may need to verify your
                        identity before responding.
                    </p>

                    <h2>9. Children</h2>
                    <p>
                        Our services are not directed to children under 16, and we do not knowingly collect
                        personal information from children.
                    </p>

                    <h2>10. International visitors</h2>
                    <p>
                        If you access the site from outside the United States, your information may be processed in
                        the United States or other jurisdictions where we or our providers operate.
                    </p>

                    <h2>11. Changes</h2>
                    <p>
                        We may update this policy from time to time. The “Last updated” date reflects the latest
                        revision. Continued use of the site after changes constitutes acceptance of the updated
                        policy where permitted by law.
                    </p>

                    <h2>12. Contact</h2>
                    <p>
                        NYMBLOC — questions about privacy:{' '}
                        <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>.{' '}
                        <Link to="/contact">Contact form</Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Privacy;
