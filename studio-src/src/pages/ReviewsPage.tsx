import React from 'react';
import { Star, ExternalLink, Phone, MapPin, ShieldAlert } from 'lucide-react';
import { VERIFIED_FACTS } from '../data/workshopData';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 bg-[#F6F5F2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="border-b border-[#DCD8CE] pb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
            Verified Google Maps Rating Snapshot · {VERIFIED_FACTS.mapsSnapshotDate}
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#111214]"
            style={{ textWrap: 'balance' }}
          >
            Google Maps Rating & Review Policy
          </h1>
          <p className="text-base text-[#4A4F58] leading-relaxed">
            Quoted customer testimonials and individual review text are not reproduced on this independent demo site. Below is the verified aggregate Google Maps rating snapshot for {VERIFIED_FACTS.businessName} at {VERIFIED_FACTS.fullAddress}.
          </p>
        </div>

        {/* Main Rating Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#181A1E] text-white border border-[#111214] p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-mono-num text-[#A9B0BC]">
                SNAPSHOT RECORDED: {VERIFIED_FACTS.mapsSnapshotDate.toUpperCase()} · SOURCE: GOOGLE MAPS
              </p>
              <div className="flex flex-wrap items-baseline gap-5">
                <span className="font-display text-6xl sm:text-7xl font-bold text-white font-mono-num">
                  {VERIFIED_FACTS.mapsRating}
                </span>
                <div className="space-y-1.5">
                  <div
                    className="flex items-center gap-1.5 text-[#C59B27]"
                    aria-label="Rated 4.7 out of 5 stars on Google Maps"
                  >
                    <Star className="w-5 h-5 fill-[#C59B27]" aria-hidden="true" />
                    <Star className="w-5 h-5 fill-[#C59B27]" aria-hidden="true" />
                    <Star className="w-5 h-5 fill-[#C59B27]" aria-hidden="true" />
                    <Star className="w-5 h-5 fill-[#C59B27]" aria-hidden="true" />
                    <Star className="w-5 h-5 fill-[#C59B27] opacity-75" aria-hidden="true" />
                  </div>
                  <p className="text-sm sm:text-base font-mono-num text-[#E5E7EB]">
                    From <strong>{VERIFIED_FACTS.mapsReviewCount}</strong> Google reviews (snapshot {VERIFIED_FACTS.mapsSnapshotDate})
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#C4C9D4] leading-relaxed pt-2">
                {VERIFIED_FACTS.businessName} ({VERIFIED_FACTS.fullAddress}) holds a {VERIFIED_FACTS.mapsRating} rating across {VERIFIED_FACTS.mapsReviewCount} reviews on Google Maps as of {VERIFIED_FACTS.mapsSnapshotDate}. Click below to read customer feedback directly on Google Maps.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              <a
                href={VERIFIED_FACTS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Read Google reviews</span>
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={VERIFIED_FACTS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors rounded-sm whitespace-nowrap shrink-0 font-mono-num"
              >
                <Phone className="w-4 h-4 text-[#C83E2B] shrink-0" aria-hidden="true" />
                <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right column: Policy on Quoted Testimonials */}
          <div className="lg:col-span-5 bg-white border border-[#DCD8CE] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
                <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Testimonial Reproduction Policy</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111214]">
                Why Quoted Testimonials Are Not Reproduced
              </h2>
              <p className="text-sm text-[#4A4F58] leading-relaxed">
                Quoted testimonials and individual customer review excerpts are not reproduced on this demonstration website. We never fabricate customer quotes, reviewer names, or star summaries.
              </p>
              <p className="text-sm text-[#4A4F58] leading-relaxed">
                To view authentic, up-to-date customer reviews and ratings in full context, visit the official Google Maps listing for {VERIFIED_FACTS.businessName} at {VERIFIED_FACTS.fullAddress}.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E3DA] space-y-2 text-xs text-[#5A606B]">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C83E2B] shrink-0" aria-hidden="true" />
                <span>{VERIFIED_FACTS.fullAddress}</span>
              </p>
              <p>{VERIFIED_FACTS.demoNotice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
