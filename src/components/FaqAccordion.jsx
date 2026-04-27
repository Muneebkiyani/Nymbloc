import React, { useState } from 'react';

/**
 * Shared accordion — same markup/classes as /faq for consistent styling site-wide.
 */
export default function FaqAccordion({ items, idPrefix = 'faq' }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="faq-list">
            {items.map((faq, index) => {
                const open = activeIndex === index;
                const qId = `${idPrefix}-q-${index}`;
                const panelId = `${idPrefix}-panel-${index}`;
                return (
                    <div
                        key={faq.q}
                        className={`faq-item${open ? ' active' : ''}`}
                    >
                        <button
                            type="button"
                            className="faq-question"
                            aria-expanded={open}
                            aria-controls={panelId}
                            id={qId}
                            onClick={() => setActiveIndex(open ? null : index)}
                        >
                            <span className="faq-question-text">{faq.q}</span>
                            <span className="faq-icon" aria-hidden>
                                ▼
                            </span>
                        </button>
                        <div
                            className="faq-answer"
                            id={panelId}
                            role="region"
                            aria-labelledby={qId}
                            aria-hidden={!open}
                        >
                            <div className="faq-answer-inner">{faq.a}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
