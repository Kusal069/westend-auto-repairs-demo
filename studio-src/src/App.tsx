/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { GalleryItem, PageId, VERIFIED_FACTS } from './data/workshopData';
import { resolvePageFromHash } from './utils/validation';
import { TopChrome } from './components/TopChrome';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? resolvePageFromHash(window.location.hash) : 'home'
  );
  const [callbackTopic, setCallbackTopic] = useState<string>('');
  const [inspectedPlate, setInspectedPlate] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(resolvePageFromHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, scrollToCallback = false) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${page}`);
      if (scrollToCallback) {
        setTimeout(() => {
          const el =
            document.getElementById('contact-callback-form') ||
            document.getElementById('home-callback-form');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 40);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleSelectServiceEnquiry = (topic: string) => {
    setCallbackTopic(topic);
    handleNavigate('contact', true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#111214]">
      <TopChrome activePage={activePage} onNavigate={handleNavigate} />

      <main id="main-content" className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceEnquiry={handleSelectServiceEnquiry}
            onInspectGalleryItem={setInspectedPlate}
          />
        )}
        {activePage === 'services' && (
          <ServicesPage onSelectServiceEnquiry={handleSelectServiceEnquiry} />
        )}
        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onInspectGalleryItem={setInspectedPlate}
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage onInspectGalleryItem={setInspectedPlate} />
        )}
        {activePage === 'reviews' && <ReviewsPage />}
        {activePage === 'contact' && <ContactPage initialTopic={callbackTopic} />}
      </main>

      <Footer activePage={activePage} onNavigate={handleNavigate} />

      {/* Accessible Lightbox Modal for Inspecting Workshop Concept Plates */}
      {inspectedPlate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-plate-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setInspectedPlate(null)}
        >
          <div
            className="bg-[#181A1E] text-white border border-white/20 max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono-num text-[#B8BEC8]">
                <span className="text-white font-semibold">PLATE {inspectedPlate.number}</span>
                <span aria-hidden="true">·</span>
                <span>{inspectedPlate.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setInspectedPlate(null)}
                aria-label="Close plate preview"
                className="p-1.5 text-[#C4C9D4] hover:text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-[#111317] aspect-16/10 w-full">
              <img
                src={inspectedPlate.imageUrl}
                alt={`${inspectedPlate.title} — ${VERIFIED_FACTS.conceptCaption}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 px-4 py-2 bg-[#111214]/95 border-t border-white/15">
                <p className="text-xs font-semibold text-white">
                  {VERIFIED_FACTS.conceptCaption}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <h2
                  id="lightbox-plate-title"
                  className="font-display text-2xl font-bold uppercase tracking-tight text-white"
                >
                  {inspectedPlate.number}. {inspectedPlate.title}
                </h2>
                <p className="mt-1.5 text-sm text-[#C4C9D4] leading-relaxed">
                  {inspectedPlate.description}
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#9AA2B1]">
                <span>Mandatory Notice: {inspectedPlate.caption}</span>
                <a
                  href={VERIFIED_FACTS.phoneHref}
                  className="inline-flex items-center gap-1.5 font-mono-num font-semibold text-[#E56B58] hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
