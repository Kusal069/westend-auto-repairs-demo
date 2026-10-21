import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, PageId, VERIFIED_FACTS } from '../data/workshopData';
import { WorkshopVisual } from '../components/WorkshopVisual';

interface AboutPageProps {
  onNavigate: (page: PageId, scrollToCallback?: boolean) => void;
  onInspectGalleryItem: (item: GalleryItem) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onInspectGalleryItem }) => {
  const aboutVisuals = [GALLERY_ITEMS[3], GALLERY_ITEMS[2]];

  return (
    <div className="py-12 sm:py-16 bg-[#F6F5F2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-14">
        {/* Header */}
        <div className="border-b border-[#DCD8CE] pb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
            About the Workshop · Verified Factual Profile
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#111214]"
            style={{ textWrap: 'balance' }}
          >
            Independent Auto Repairs at 2 Lambert St, Bathurst
          </h1>
          <p className="text-base sm:text-lg text-[#4A4F58] leading-relaxed">
            {VERIFIED_FACTS.businessName} is an independent auto repair workshop located at{' '}
            <strong className="text-[#111214]">{VERIFIED_FACTS.fullAddress}</strong>.
          </p>
        </div>

        {/* Two-column Factual Profile & Transparency Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-6 space-y-6 bg-white border border-[#DCD8CE] p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111214]">
              Straightforward Local Workshop Information
            </h2>
            <p className="text-sm sm:text-base text-[#383C44] leading-relaxed">
              When looking for a mechanical workshop in Bathurst, vehicle owners need accurate contact details rather than invented marketing claims. This independent demonstration website presents only verified directory facts for {VERIFIED_FACTS.businessName}.
            </p>
            <p className="text-sm sm:text-base text-[#383C44] leading-relaxed">
              We do not invent owner names, founding dates, staff headcounts, trading hours, licences, or warranty policies. To check workshop availability, discuss a mechanical issue, or confirm opening hours, call the workshop directly on{' '}
              <a
                href={VERIFIED_FACTS.phoneHref}
                className="font-mono-num font-semibold text-[#C83E2B] underline underline-offset-2 hover:text-[#111214]"
              >
                {VERIFIED_FACTS.phoneDisplay}
              </a>
              .
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={VERIFIED_FACTS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 font-mono-num"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-5 py-3 text-sm font-semibold text-[#111214] border border-[#111214] hover:bg-[#111214] hover:text-white transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
              >
                View location & contact
              </button>
            </div>
          </div>

          {/* Verified Record Table */}
          <div className="lg:col-span-6 bg-[#181A1E] text-white border border-[#111214] p-6 sm:p-8 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#E56B58]">
                Verified Record Summary
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                Confirmed Workshop Facts
              </h2>
            </div>

            <dl className="divide-y divide-white/10 text-sm">
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="text-[#9AA2B1]">Business Name</dt>
                <dd className="font-semibold text-white">{VERIFIED_FACTS.businessName}</dd>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="text-[#9AA2B1]">Confirmed Category</dt>
                <dd className="font-semibold text-white">{VERIFIED_FACTS.category}</dd>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="text-[#9AA2B1]">Street Address</dt>
                <dd className="font-semibold text-white">{VERIFIED_FACTS.fullAddress}</dd>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="text-[#9AA2B1]">Telephone</dt>
                <dd className="font-mono-num font-semibold">
                  <a
                    href={VERIFIED_FACTS.phoneHref}
                    className="text-[#E56B58] hover:text-white underline underline-offset-2"
                  >
                    {VERIFIED_FACTS.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="text-[#9AA2B1]">Google Maps Rating (21 Oct 2026)</dt>
                <dd className="font-mono-num font-semibold text-white">
                  {VERIFIED_FACTS.mapsRating} / 5 from {VERIFIED_FACTS.mapsReviewCount} reviews
                </dd>
              </div>
              <div className="py-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="text-[#9AA2B1]">Public Social Listing</dt>
                <dd>
                  <a
                    href={VERIFIED_FACTS.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-white hover:text-[#E56B58] underline underline-offset-2"
                  >
                    <span>facebook.com/westendautorepairs</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>

            <div className="pt-2 border-t border-white/10 text-xs text-[#9AA2B1] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
              <span>{VERIFIED_FACTS.demoNotice}</span>
            </div>
          </div>
        </div>

        {/* Concept Visuals with Mandatory Captions */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111214]">
              Bathurst-Style Workshop Concept Studies
            </h2>
            <p className="text-sm text-[#4A4F58]">
              Generated architectural and workbench studies illustrating an independent regional workshop. Every image is captioned &ldquo;{VERIFIED_FACTS.conceptCaption}&rdquo;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutVisuals.map((item) => (
              <WorkshopVisual
                key={item.id}
                item={item}
                onSelect={onInspectGalleryItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
