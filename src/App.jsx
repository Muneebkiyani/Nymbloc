import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout'));
const DemoStandaloneLayout = lazy(() => import('./components/DemoStandaloneLayout'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const WordPressDevelopment = lazy(() => import('./pages/services/WordPressDevelopment'));
const WebsiteDevelopment = lazy(() => import('./pages/services/WebsiteDevelopment'));
const ApplicationDevelopment = lazy(() => import('./pages/services/ApplicationDevelopment'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const DemosIndex = lazy(() => import('./pages/demos/DemosIndex'));
const NicheDemoPage = lazy(() => import('./pages/demos/NicheDemoPage'));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function RouteFallback() {
    return (
        <div
            style={{
                minHeight: '30vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                color: '#64748b',
                fontSize: '0.9rem',
            }}
            aria-busy="true"
            aria-live="polite"
        >
            Loading…
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/website" element={<WebsiteDevelopment />} />
                        <Route path="/services/application" element={<ApplicationDevelopment />} />
                        <Route path="/services/wordpress" element={<WordPressDevelopment />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/demos" element={<DemosIndex />} />
                        <Route path="/demo" element={<DemosIndex />} />
                    </Route>
                    <Route element={<DemoStandaloneLayout />}>
                        <Route path="/demos/:slug" element={<NicheDemoPage />} />
                        <Route path="/demo/:slug" element={<NicheDemoPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
