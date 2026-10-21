import React from 'react';
import { Phone, MapPin, ExternalLink, MessageSquare } from 'lucide-react';
import { NAV_ITEMS, PageId, VERIFIED_FACTS } from '../data/workshopData';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId, scrollToCallback?: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({ activePage, onNavigate }) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageId,
    scrollToCallback = false
  ) => {
    e.preventDefault();
    onNavigate(page, scrollToCallback);
  };

  return (
    <>
      <footer className="bg-[#111214] text-[#E6E4E0] border-t border-white/10 pb-20 md:pb-0">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Wordmark & Verified Summary */}
            <div className="md:col-span-5 space-y-4">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="inline-block font-display text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase"
              >
                {VERIFIED_FACTS.businessName}
              </a>
              <p className="text-sm text-[#B0B6C2] max-w-sm leading-relaxed">
                Independent auto repair workshop located at {VERIFIED_FACTS.fullAddress}. Call directly to discuss mechanical repairs and workshop bookings.
              </p>
              <div className="pt-1 flex flex-col gap-1.5 text-sm font-mono-num">
                <a
                  href={VERIFIED_FACTS.phoneHref}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#E56B58] transition-colors w-fit"
                >
                  <Phone className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
                  <span>{VERIFIED_FACTS.phoneDisplay}</span>
                </a>
                <a
                  href={VERIFIED_FACTS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C4C9D4] hover:text-white transition-colors w-fit"
                >
                  <MapPin className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
                  <span>{VERIFIED_FACTS.fullAddress}</span>
                </a>
              </div>
            </div>

            {/* Column 2: Pages */}
            <div className="md:col-span-3 space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3]">
                Site Pages
              </h2>
              <ul className="space-y-2 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.hash}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`transition-colors ${
                        activePage === item.id
                          ? 'text-white font-semibold underline decoration-[#C83E2B] underline-offset-4'
                          : 'text-[#B8BEC8] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Verified External Links */}
            <div className="md:col-span-4 space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8F96A3]">
                Verified Public Listings
              </h2>
              <div className="space-y-2.5 text-sm">
                <p className="text-[#B8BEC8]">
                  Google Maps Rating: <strong className="text-white font-mono-num">{VERIFIED_FACTS.mapsRating} / 5</strong> from <strong className="text-white font-mono-num">{VERIFIED_FACTS.mapsReviewCount} reviews</strong> (snapshot {VERIFIED_FACTS.mapsSnapshotDate}).
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  <a
                    href={VERIFIED_FACTS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white hover:text-[#E56B58] font-medium transition-colors w-fit"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                  <a
                    href={VERIFIED_FACTS.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white hover:text-[#E56B58] font-medium transition-colors w-fit"
                  >
                    <span>Official Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Independent Demo Notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9AA2B1]">
            <p className="font-semibold text-[#E6E4E0]">
              {VERIFIED_FACTS.demoNotice}
            </p>
            <p>
              Workshop photos are from the public Google listing (&ldquo;{VERIFIED_FACTS.conceptCaption}&rdquo;). Phone:{' '}
              <a
                href={VERIFIED_FACTS.phoneHref}
                className="text-white underline underline-offset-2 hover:text-[#E56B58] font-mono-num"
              >
                {VERIFIED_FACTS.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile bottom bar: Call now + Request callback */}
      <div
        role="region"
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 inset-x-0 z-40 h-12 bg-[#111214] border-t border-white/15 grid grid-cols-2"
      >
        <a
          href={VERIFIED_FACTS.phoneHref}
          className="flex items-center justify-center gap-2 bg-[#C83E2B] text-white text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 active:bg-[#B23321]"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Call now</span>
        </a>
        <button
          type="button"
          onClick={() => onNavigate('contact', true)}
          className="flex items-center justify-center gap-2 bg-[#181A1E] text-white text-xs font-semibold tracking-wide whitespace-nowrap shrink-0 hover:bg-[#22252B] cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#C83E2B] shrink-0" aria-hidden="true" />
          <span>Request callback</span>
        </button>
      </div>
    </>
  );
};
