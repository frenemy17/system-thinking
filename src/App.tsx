import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout components
import Layout from './components/Layout';

// Page components
import Home from './pages/Home';
import Process from './pages/Process';
import CLDNarrative from './pages/CLDNarrative';
import SystemInsights from './pages/SystemInsights';
import AdditionalInsights from './pages/AdditionalInsights';
import References from './pages/References';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/cld-narrative" element={<CLDNarrative />} />
          <Route path="/system-insights" element={<SystemInsights />} />
          <Route path="/additional-insights" element={<AdditionalInsights />} />
          <Route path="/references" element={<References />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default App;