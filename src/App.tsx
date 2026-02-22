import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import WhatWeDo from './components/WhatWeDo';
import RecentWork from './components/RecentWork';
import ServiceArea from './components/ServiceArea';
import ContactAndWhy from './components/ContactAndWhy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <WhatWeDo />
        <RecentWork />
        <ServiceArea />
        <ContactAndWhy />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
