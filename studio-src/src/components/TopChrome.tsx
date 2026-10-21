import React, { useState } from 'react';
import { Phone, MapPin, Star, Menu, X } from 'lucide-react';
import { NAV_ITEMS, PageId, VERIFIED_FACTS } from '../data/workshopData';

interface TopChromeProps {
  activePage: PageId;
  onNavigate: (page: PageId, scrollToCallback?: boolean) => void;
}

export const TopChrome: React.FC<TopChromeProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: PageId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      {/* Persistent small demo ribbon at the top of every page */}
      <div
        role="region"
        aria-label="Demonstration site notice"
        className="bg-[#23262B] text-[#E6E4E0] border-b border-white/10 px-4 py-1.5 text-xs"
      >
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <p className="font-medium tracking-wide">
            {VERIFIED_FACTS.demoNotice}
          </p>
          <span className="text-[#A9B0BC] hidden sm:inline">
            Verified directory details only · Bathurst NSW 2795
          </span>
        </div>
      </div>

      {/* Slim dark facts bar: address, Maps 4.7/63, phone */}
      <div
        role="region"
        aria-label="Verified workshop facts"
        className="bg-[#111214] text-[#F6F5F2] border-b border-white/10 px-4 py-2 text-xs"
      >
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={VERIFIED_FACTS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D8D6D0] hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C83E2B] shrink-0" aria-hidden="true" />
              <span>{VERIFIED_FACTS.fullAddress}</span>
            </a>
            <span className="text-white/25 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href={VERIFIED_FACTS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#D8D6D0] hover:text-white transition-colors font-mono-num"
            >
              <Star className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27] shrink-0" aria-hidden="true" />
              <span>
                Google Maps {VERIFIED_FACTS.mapsRating} / {VERIFIED_FACTS.mapsReviewCount} reviews (snapshot {VERIFIED_FACTS.mapsSnapshotDate})
              </span>
            </a>
          </div>

          <a
            href={VERIFIED_FACTS.phoneHref}
            className="inline-flex items-center gap-1.5 font-mono-num font-semibold text-white hover:text-[#E56B58] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#C83E2B] shrink-0" aria-hidden="true" />
            <span>{VERIFIED_FACTS.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Sticky white/charcoal nav following the 3-zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#181A1E]/95 backdrop-blur-md text-white border-b border-white/10">
        <div className="max-w-[1200px] mx-auto h-14 md:h-16 px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white uppercase whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C83E2B]"
          >
            {VERIFIED_FACTS.businessName}
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.hash}
                  onClick={(e) => handleNavClick(e, item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-1 whitespace-nowrap shrink-0 transition-colors border-b-2 ${
                    isActive
                      ? 'text-white border-[#C83E2B] font-semibold'
                      : 'text-[#B8BEC8] border-transparent hover:text-white hover:border-white/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action (Call now) + Mobile menu trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={VERIFIED_FACTS.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Call now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-sm transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav-drawer"
            aria-label="Mobile navigation"
            className="md:hidden bg-[#141619] border-t border-white/10 px-4 py-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.hash}
                    onClick={(e) => handleNavClick(e, item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3 py-2.5 text-sm font-medium rounded-sm transition-colors ${
                      isActive
                        ? 'bg-[#C83E2B]/20 text-white font-semibold'
                        : 'text-[#C4C9D4] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
