import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { PageTransition } from './components/PageTransition';

import { HomePage } from './pages/HomePage';
import { DrinksPage } from './pages/DrinksPage';
import { FlavoursPage } from './pages/FlavoursPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { StoryPage } from './pages/StoryPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync route with URL hash for easy direct bookmarking & navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'drinks', 'flavours', 'ingredients', 'story', 'discover', 'contact', '404'].includes(hash)) {
        setActivePage(hash);
      } else if (hash === '') {
        setActivePage('home');
      } else {
        setActivePage('404');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Calculate scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (pageKey) => {
    window.location.hash = pageKey === 'home' ? '' : pageKey;
    setActivePage(pageKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'drinks':
        return <DrinksPage onNavigate={navigateTo} />;
      case 'flavours':
        return <FlavoursPage onNavigate={navigateTo} />;
      case 'ingredients':
        return <IngredientsPage onNavigate={navigateTo} />;
      case 'story':
        return <StoryPage onNavigate={navigateTo} />;
      case 'discover':
        return <DiscoverPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '404':
        return <NotFoundPage onNavigate={navigateTo} />;
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0C10] text-white selection:bg-pulse-citrus selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Header Sticky Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        scrollProgress={scrollProgress}
      />

      {/* Main Content with Page Transition */}
      <main className="w-full min-h-screen">
        <PageTransition pageKey={activePage}>
          {renderPage()}
        </PageTransition>
      </main>

      {/* Global Brand Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Floating Back To Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
