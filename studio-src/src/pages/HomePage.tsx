import React from 'react';
import { Phone, ArrowRight, ExternalLink, MapPin, Star } from 'lucide-react';
import {
  GALLERY_ITEMS,
  GalleryItem,
  PageId,
  SERVICE_ITEMS,
  TRUST_STRIP_ITEMS,
  VERIFIED_FACTS,
} from '../data/workshopData';
import { WorkshopVisual } from '../components/WorkshopVisual';
import { CallbackForm } from '../components/CallbackForm';

interface HomePageProps {
  onNavigate: (page: PageId, scrollToCallback?: boolean) => void;
  onSelectServiceEnquiry: (topic: string) => void;
  onInspectGalleryItem: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectServiceEnquiry,
  onInspectGalleryItem,
}) => {
  const heroVisual = GALLERY_ITEMS[0];
  const featuredGallery = GALLERY_ITEMS.slice(0, 4);

  return (
    <div>
      {/* Full-bleed cinematic hero */}
      <section className="relative bg-[#111214] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left column: Proposition & 2 CTAs */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-xs sm:text-sm font-medium text-[#C4C9D4] tracking-wide">
                  Bathurst Independent Workshop · {VERIFIED_FACTS.fullAddress}
                </p>
                <h1
                  className="font-display font-bold uppercase tracking-tight text-white leading-[1.08]"
                  style={{
                    fontSize: 'clamp(2.35rem, 4.5vw, 3.75rem)',
                    textWrap: 'balance',
                  }}
                >
                  Straightforward{' '}
                  <span className="whitespace-nowrap underline decoration-[#C83E2B] decoration-4 underline-offset-4">
                    Auto Repairs
                  </span>{' '}
                  in Bathurst NSW.
                </h1>
                <p className="text-base sm:text-lg text-[#C8CDD6] max-w-2xl leading-relaxed pt-1">
                  {VERIFIED_FACTS.businessName} is an independent mechanical repair workshop at{' '}
                  <span className="text-white font-medium">{VERIFIED_FACTS.fullAddress}</span>. Speak directly with the workshop by phone to discuss your vehicle and confirm booking availability.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Two CTAs: Call + Request a callback */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <a
                    href={VERIFIED_FACTS.phoneHref}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0"
                  >
                    <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="font-mono-num">Call {VERIFIED_FACTS.phoneDisplay}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate('contact', true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/25 transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Request a callback</span>
                    <ArrowRight className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
                  </button>
                </div>

                {/* Unboxed metadata line */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A5ABB6] font-mono-num">
                  <span>Category: {VERIFIED_FACTS.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27] shrink-0" aria-hidden="true" />
                    <span>
                      Google Maps: {VERIFIED_FACTS.mapsRating} / 5 ({VERIFIED_FACTS.mapsReviewCount} reviews, {VERIFIED_FACTS.mapsSnapshotDate})
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right column: Workshop bay visual with mandatory caption */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative flex-1 border border-white/15 bg-[#16191E] overflow-hidden flex flex-col justify-between">
                <div className="px-4 py-2.5 bg-[#111214] border-b border-white/15 flex items-center justify-between gap-2 text-xs text-[#E5E7EB] font-mono-num">
                  <span>Bay Study 01 · Hydraulic Hoist</span>
                  <span className="text-[#A5ABB6]">{VERIFIED_FACTS.streetAddress}, Bathurst</span>
                </div>
                <div className="relative flex-1 min-h-[240px]">
                  <img
                    src={heroVisual.imageUrl}
                    alt={`${heroVisual.title} — ${VERIFIED_FACTS.conceptCaption}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover min-h-[240px]"
                  />
                </div>
                <div className="relative z-10 bg-[#111214] border-t border-white/15 px-4 py-2.5 flex items-center justify-between gap-3">
                  <p className="text-xs font-medium text-[#F3F4F6]">
                    {VERIFIED_FACTS.conceptCaption}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('gallery')}
                    className="text-xs font-semibold text-[#E56B58] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    View gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Column Trust Strip using ONLY verified facts */}
      <section
        aria-label="Verified workshop credentials"
        className="bg-[#181A1E] text-white border-b border-[#2A2E37]"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {TRUST_STRIP_ITEMS.map((item, idx) => (
              <div key={item.id} className="py-5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                <p className="text-xs font-mono-num text-[#9AA2B1]">
                  0{idx + 1} · {item.label}
                </p>
                {'href' in item && item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 inline-block font-display text-2xl font-bold uppercase tracking-tight text-white hover:text-[#E56B58] transition-colors font-mono-num"
                  >
                    {item.metric}
                  </a>
                ) : (
                  <p className="mt-1 font-display text-2xl font-bold uppercase tracking-tight text-white">
                    {item.metric}
                  </p>
                )}
                <p className="mt-1 text-xs text-[#B4BBC6]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered Service Cards Section */}
      <section className="py-16 sm:py-20 bg-[#F6F5F2] border-b border-[#DEDAD0]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
                Workshop Scope & Numbered Service Cards
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#111214]"
                style={{ textWrap: 'balance' }}
              >
                Confirmed Auto Repairs & Typical Workshop Enquiries
              </h2>
              <p className="text-sm sm:text-base text-[#4A4F58] leading-relaxed">
                Public records confirm <strong>Auto repairs</strong> as the workshop category at {VERIFIED_FACTS.fullAddress}. Additional numbered cards below are clearly marked as typical mechanical workshop placeholders until confirmed with the shop.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#111214] bg-white border border-[#C8C4B8] hover:border-[#111214] transition-colors rounded-sm whitespace-nowrap shrink-0 w-fit cursor-pointer"
            >
              <span>Inspect all service details</span>
              <ArrowRight className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {SERVICE_ITEMS.map((service, index) => {
              const isConfirmed = service.status === 'confirmed';
              const colSpan = index === 0 ? 'md:col-span-12' : 'md:col-span-6';
              return (
                <article
                  key={service.id}
                  className={`${colSpan} ${
                    isConfirmed
                      ? 'bg-[#181A1E] text-white border border-[#111214]'
                      : 'bg-white text-[#111214] border border-[#DCD8CE]'
                  } p-6 sm:p-8 flex flex-col justify-between gap-6`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span
                        className={`font-mono-num font-bold text-sm ${
                          isConfirmed ? 'text-[#E56B58]' : 'text-[#C83E2B]'
                        }`}
                      >
                        {service.number}. {isConfirmed ? 'CONFIRMED CATEGORY' : 'PLACEHOLDER SCOPE'}
                      </span>
                      <span
                        className={`font-medium ${
                          isConfirmed ? 'text-[#D0D5DD]' : 'text-[#5A606B]'
                        }`}
                      >
                        {service.statusLabel}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                      {service.number}. {service.title}
                    </h3>

                    <p
                      className={`text-sm sm:text-base leading-relaxed max-w-3xl ${
                        isConfirmed ? 'text-[#C8CDD6]' : 'text-[#4A4F58]'
                      }`}
                    >
                      {service.summary}
                    </p>
                  </div>

                  <div
                    className={`pt-4 border-t ${
                      isConfirmed ? 'border-white/10' : 'border-[#EAE6DF]'
                    } flex flex-wrap items-center justify-between gap-4`}
                  >
                    <p
                      className={`text-xs ${
                        isConfirmed ? 'text-[#9AA2B1]' : 'text-[#686E7A]'
                      }`}
                    >
                      {service.disclaimer}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={VERIFIED_FACTS.phoneHref}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                          isConfirmed
                            ? 'bg-[#C83E2B] text-white hover:bg-[#B23321]'
                            : 'bg-[#111214] text-white hover:bg-[#282C34]'
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span className="font-mono-num">Call {VERIFIED_FACTS.phoneDisplay}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          onSelectServiceEnquiry(
                            `Enquiry regarding ${service.number}. ${service.title} — please call me back.`
                          )
                        }
                        className={`px-3.5 py-2 text-xs font-semibold rounded-sm border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isConfirmed
                            ? 'border-white/25 text-white hover:bg-white/10'
                            : 'border-[#C8C4B8] text-[#111214] hover:border-[#111214]'
                        }`}
                      >
                        Demo callback form
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Concept Gallery Preview */}
      <section className="py-16 sm:py-20 bg-[#14161A] text-white border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#E56B58]">
                Bathurst-Style Workshop Concept Plates
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white"
                style={{ textWrap: 'balance' }}
              >
                Workshop Environment & Bay Studies
              </h2>
              <p className="text-sm sm:text-base text-[#B4BBC6] leading-relaxed">
                Original architectural and mechanical concept visuals illustrating an independent regional workshop environment. Every image is explicitly labelled &ldquo;{VERIFIED_FACTS.conceptCaption}&rdquo; and no external Google Maps or Facebook photos are reused.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors rounded-sm whitespace-nowrap shrink-0 w-fit cursor-pointer"
            >
              <span>Open all {GALLERY_ITEMS.length} workshop plates</span>
              <ArrowRight className="w-4 h-4 text-[#E56B58] shrink-0" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredGallery.map((item) => (
              <WorkshopVisual
                key={item.id}
                item={item}
                onSelect={onInspectGalleryItem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Verified Google Maps Snapshot & Direct Contact Split */}
      <section className="py-16 sm:py-20 bg-[#F6F5F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left column: Verified Google Rating & Location Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#DCD8CE] p-6 sm:p-8 space-y-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
                  Verified Public Rating Snapshot
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-[#111214] font-mono-num">
                    {VERIFIED_FACTS.mapsRating}
                  </span>
                  <div>
                    <div className="flex items-center gap-1 text-[#C59B27]" aria-label="4.7 out of 5 stars">
                      <Star className="w-4 h-4 fill-[#C59B27]" aria-hidden="true" />
                      <Star className="w-4 h-4 fill-[#C59B27]" aria-hidden="true" />
                      <Star className="w-4 h-4 fill-[#C59B27]" aria-hidden="true" />
                      <Star className="w-4 h-4 fill-[#C59B27]" aria-hidden="true" />
                      <Star className="w-4 h-4 fill-[#C59B27] opacity-75" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-[#5A606B] font-mono-num mt-1">
                      From {VERIFIED_FACTS.mapsReviewCount} Google reviews · Snapshot {VERIFIED_FACTS.mapsSnapshotDate}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#4A4F58] leading-relaxed">
                  Quoted customer testimonials are not reproduced on this independent demo website. You can read customer reviews directly on the official Google Maps place listing.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={VERIFIED_FACTS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#111214] hover:bg-[#262A32] transition-colors rounded-sm whitespace-nowrap shrink-0"
                  >
                    <span>Read Google reviews</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onNavigate('reviews')}
                    className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#111214] border border-[#C8C4B8] hover:border-[#111214] transition-colors rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Reviews page
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#DCD8CE] p-6 sm:p-8 space-y-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111214]">
                  Workshop Address & Direct Phone
                </h3>
                <div className="space-y-2 text-sm text-[#383C44]">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
                    <span>{VERIFIED_FACTS.fullAddress}</span>
                  </p>
                  <p className="flex items-center gap-2 font-mono-num">
                    <Phone className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
                    <a
                      href={VERIFIED_FACTS.phoneHref}
                      className="font-semibold text-[#111214] underline underline-offset-2 hover:text-[#C83E2B]"
                    >
                      {VERIFIED_FACTS.phoneDisplay}
                    </a>
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold">
                  <a
                    href={VERIFIED_FACTS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C83E2B] hover:text-[#111214] underline underline-offset-4"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <span className="text-[#C8C4B8]" aria-hidden="true">·</span>
                  <a
                    href={VERIFIED_FACTS.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#111214] hover:text-[#C83E2B] underline underline-offset-4"
                  >
                    <span>Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: Demo Callback Form */}
            <div className="lg:col-span-7">
              <CallbackForm id="home-callback-form" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
