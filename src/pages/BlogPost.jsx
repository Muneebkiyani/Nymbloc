import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_COVER_FALLBACK_URL } from '../data/blogCovers.js';
import { getPostBySlug } from '../data/blogPosts';

function renderSection(section, index) {
    const delay = Math.min(index * 35, 210);
    if (section.type === 'p') {
        return (
            <p key={index} className="article-p">
                {section.text}
            </p>
        );
    }
    if (section.type === 'h2') {
        return (
            <h2 key={index} className="article-h2" data-aos="fade-up" data-aos-delay={delay}>
                {section.text}
            </h2>
        );
    }
    if (section.type === 'ul') {
        return (
            <ul key={index} className="article-ul" data-aos="fade-up" data-aos-delay={delay}>
                {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        );
    }
    return null;
}

const BlogPost = () => {
    const { slug } = useParams();
    const post = slug ? getPostBySlug(slug) : undefined;
    const [heroFallbackSlug, setHeroFallbackSlug] = useState(null);
    const heroSrc =
        post && heroFallbackSlug === post.slug ? BLOG_COVER_FALLBACK_URL : (post?.coverImage ?? '');

    if (!post) {
        return (
            <>
                <section className="page-header robot-page-header page-header-simple" data-aos="fade-down">
                    <div className="container">
                        <h1 className="section-title">Article not found</h1>
                        <p className="page-header-lead">
                            That post does not exist or the link is outdated.
                        </p>
                        <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                            Back to blog
                        </Link>
                    </div>
                </section>
            </>
        );
    }

    const heroBgStyle = {
        '--article-hero-bg': `url("${String(heroSrc).replace(/"/g, '%22')}")`,
    };

    return (
        <>
            <article itemScope itemType="https://schema.org/Article">
                <section
                    className="page-header robot-page-header page-header-simple article-page-hero article-hero-has-bg"
                    style={heroBgStyle}
                    data-aos="fade-down"
                >
                    <div className="article-hero-bg-layer" aria-hidden="true" />
                    <div className="article-hero-scrim" aria-hidden="true" />
                    <div className="container">
                        <div className="article-hero-copy">
                            <p className="article-breadcrumb">
                                <Link to="/blog">Blog</Link>
                                <span aria-hidden> / </span>
                                <span>{post.readTime}</span>
                            </p>
                            <h1 className="section-title article-title" itemProp="headline">
                                {post.title}
                            </h1>
                            <p className="page-header-lead article-deck" itemProp="description">
                                {post.excerpt}
                            </p>
                            <time
                                className="article-published"
                                dateTime={post.date}
                                itemProp="datePublished"
                            >
                                {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                            <p className="article-hero-photo-credit">
                                Photo: {post.coverAlt}{' '}
                                <span className="article-hero-credit-source">
                                    (
                                    <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
                                        Unsplash
                                    </a>
                                    )
                                </span>
                            </p>
                        </div>
                    </div>
                    <img
                        src={heroSrc}
                        alt={post.coverAlt}
                        itemProp="image"
                        width={1200}
                        height={675}
                        className="article-hero-schema-img"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        onError={() => {
                            if (post.slug && heroFallbackSlug !== post.slug) {
                                setHeroFallbackSlug(post.slug);
                            }
                        }}
                    />
                </section>

                <section className="section-padding robot-page-section article-body-section" data-aos="fade-up">
                    <div className="container article-container">
                        <div className="article-content" itemProp="articleBody">
                            {post.sections.map((s, i) => renderSection(s, i))}
                        </div>
                        <div className="article-footer-cta" data-aos="fade-up">
                            <h2 className="article-h2">Need help with your site?</h2>
                            <p className="article-p">
                                We build and maintain websites, applications, and WordPress platforms for growing
                                businesses. Share your goals on our contact page and we will respond within one
                                business day.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Contact NYMBLOC
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
};

export default BlogPost;
