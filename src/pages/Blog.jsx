import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_COVER_FALLBACK_URL } from '../data/blogCovers.js';
import { blogPosts } from '../data/blogPosts';

function BlogCardImage({ src, alt }) {
    const [current, setCurrent] = useState(src);
    const [failed, setFailed] = useState(false);
    return (
        <img
            src={current}
            alt={alt}
            className="blog-card-img"
            width={600}
            height={338}
            loading="lazy"
            decoding="async"
            onError={() => {
                if (!failed) {
                    setFailed(true);
                    setCurrent(BLOG_COVER_FALLBACK_URL);
                }
            }}
        />
    );
}

const Blog = () => {
    const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

    return (
        <>
            <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                <div className="container">
                    <span className="section-subtitle">Resources</span>
                    <h1 className="section-title reveal-text">Blog</h1>
                    <p className="page-header-lead">
                        Practical guides on websites, performance, SEO, and product decisions—written for business
                        owners and operators, not only developers.
                    </p>
                </div>
            </section>

            <section className="section-padding robot-page-section section--mobile-grid" data-aos="fade-up">
                <div className="container">
                    <div className="blog-grid">
                        {sorted.map((post, index) => (
                            <article
                                key={post.slug}
                                className="blog-card"
                                data-aos="fade-up"
                                data-aos-delay={Math.min(index * 40, 200)}
                            >
                                <Link to={`/blog/${post.slug}`} className="blog-card-media-link">
                                    <div className="blog-card-media">
                                        <BlogCardImage src={post.coverImage} alt={post.coverAlt} />
                                    </div>
                                </Link>
                                <div className="blog-card-body">
                                    <time className="blog-card-date" dateTime={post.date}>
                                        {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <h2>
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <div className="blog-card-meta">
                                        <span>{post.readTime}</span>
                                        <Link to={`/blog/${post.slug}`} className="blog-read-link">
                                            Read article →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="blog-image-attribution">
                        Article photos are from{' '}
                        <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                            Unsplash
                        </a>{' '}
                        (free-to-use license).
                    </p>
                </div>
            </section>
        </>
    );
};

export default Blog;
