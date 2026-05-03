import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import 'lenis/dist/lenis.css'
import 'aos/dist/aos.css'
import './utils/gsapClient.js'
import './index.css'
import './styles/niche-themes.css'
import './styles/restaurant-farmform.css'
import './styles/salon-studio.css'
import './styles/cleaning-corporate.css'
import './styles/bakery-peaceput.css'
import './styles/demo-standalone.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
