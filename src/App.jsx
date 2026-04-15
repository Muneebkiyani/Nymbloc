import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import WordPressDevelopment from './pages/services/WordPressDevelopment';
import WebsiteDevelopment from './pages/services/WebsiteDevelopment';
import ApplicationDevelopment from './pages/services/ApplicationDevelopment';
import Checkout from './pages/Checkout';

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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/website" element={<WebsiteDevelopment />} />
          <Route path="/services/application" element={<ApplicationDevelopment />} />
          <Route path="/services/wordpress" element={<WordPressDevelopment />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
