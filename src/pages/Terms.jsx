import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Legal</span>
                    <h1 className="section-title">Terms of Service</h1>
                    <p className="page-header-lead">
                        Last updated: April 27, 2026. These terms govern your use of nymbloc.com and general
                        engagement with NYMBLOC’s public website.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section legal-page" data-aos="fade-up">
                <div className="container legal-container">
                    <h2>1. Agreement</h2>
                    <p>
                        By accessing or using this website, you agree to these Terms. If you do not agree, please
                        do not use the site. Separate written agreements apply to paid projects and deliverables.
                    </p>

                    <h2>2. Not legal or professional advice</h2>
                    <p>
                        Articles and resources on this site are for general information only. They are not legal,
                        financial, or technical advice for your specific situation. Consult qualified professionals
                        before making decisions.
                    </p>

                    <h2>3. Intellectual property</h2>
                    <p>
                        Unless otherwise noted, NYMBLOC owns or licenses the content, branding, and materials on
                        this site. You may view and print reasonable portions for personal or internal business use.
                        You may not copy, scrape, redistribute, or exploit the site for competing services without
                        permission.
                    </p>

                    <h2>4. Acceptable use</h2>
                    <p>You agree not to:</p>
                    <ul className="legal-list">
                        <li>Attempt unauthorized access to our systems or other users’ data;</li>
                        <li>Introduce malware, overload infrastructure, or interfere with site operation;</li>
                        <li>Use automated means to access the site in a way that impairs performance or violates law;</li>
                        <li>Misrepresent your identity or affiliation.</li>
                    </ul>

                    <h2>5. Third-party links</h2>
                    <p>
                        The site may link to third-party websites or tools. We are not responsible for their
                        content, policies, or practices. Your use of third-party services is at your own risk.
                    </p>

                    <h2>6. Disclaimers</h2>
                    <p>
                        THE SITE AND CONTENT ARE PROVIDED “AS IS” WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                        IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT,
                        TO THE FULLEST EXTENT PERMITTED BY LAW.
                    </p>

                    <h2>7. Limitation of liability</h2>
                    <p>
                        TO THE FULLEST EXTENT PERMITTED BY LAW, NYMBLOC AND ITS TEAM WILL NOT BE LIABLE FOR ANY
                        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
                        DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR CLAIMS RELATING
                        TO THE SITE IS LIMITED TO THE GREATER OF ONE HUNDRED U.S. DOLLARS OR THE AMOUNTS YOU PAID US
                        FOR SERVICES DIRECTLY RELATED TO THE CLAIM IN THE TWELVE MONTHS BEFORE THE EVENT GIVING RISE
                        TO LIABILITY, IF ANY.
                    </p>

                    <h2>8. Indemnity</h2>
                    <p>
                        You will defend and indemnify NYMBLOC against claims arising from your misuse of the site,
                        your violation of these Terms, or your violation of others’ rights, to the extent permitted
                        by law.
                    </p>

                    <h2>9. Governing law</h2>
                    <p>
                        These Terms are governed by the laws of the State of Ohio, USA, excluding conflict-of-law
                        rules, unless otherwise required by applicable law. Courts in that jurisdiction have
                        exclusive venue, subject to mandatory consumer protections where applicable.
                    </p>

                    <h2>10. Changes</h2>
                    <p>
                        We may update these Terms by posting a revised version on this page. Continued use after
                        changes become effective constitutes acceptance of the updated Terms where allowed by law.
                    </p>

                    <h2>11. Contact</h2>
                    <p>
                        Questions about these Terms:{' '}
                        <a href="mailto:hello@nymbloc.com">hello@nymbloc.com</a>.{' '}
                        <Link to="/contact">Contact form</Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Terms;
