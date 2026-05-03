import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import DemoStandaloneLayout from './components/DemoStandaloneLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import WordPressDevelopment from './pages/services/WordPressDevelopment';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import ApplicationDevelopment from './pages/services/ApplicationDevelopment';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DemosIndex from './pages/demos/DemosIndex';
import NicheDemoPage from './pages/demos/NicheDemoPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        </Route>
        <Route element={<DemoStandaloneLayout />}>
          <Route path="/demos/:slug" element={<NicheDemoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
