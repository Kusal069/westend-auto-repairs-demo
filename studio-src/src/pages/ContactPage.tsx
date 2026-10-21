import React from 'react';
import { Phone, MapPin, ExternalLink, Star } from 'lucide-react';
import { VERIFIED_FACTS } from '../data/workshopData';
import { CallbackForm } from '../components/CallbackForm';

interface ContactPageProps {
  initialTopic?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialTopic = '' }) => {
  return (
    <div className="py-12 sm:py-16 bg-[#F6F5F2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="border-b border-[#DCD8CE] pb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
            Workshop Contact & Location · Bathurst NSW 2795
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#111214]"
            style={{ textWrap: 'balance' }}
          >
            Contact {VERIFIED_FACTS.businessName}
          </h1>
          <p className="text-base text-[#4A4F58] leading-relaxed">
            Reach the workshop directly by phone on{' '}
            <a
              href={VERIFIED_FACTS.phoneHref}
              className="font-mono-num font-semibold text-[#C83E2B] underline underline-offset-2 hover:text-[#111214]"
            >
              {VERIFIED_FACTS.phoneDisplay}
            </a>{' '}
            or visit <strong className="text-[#111214]">{VERIFIED_FACTS.fullAddress}</strong>.
          </p>
        </div>

        {/* Main 2-column Contact Details + Demo Callback Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left column: Verified Contact Card + Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#181A1E] text-white border border-[#111214] p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#E56B58]">
                  Direct Workshop Contact
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mt-1">
                  {VERIFIED_FACTS.businessName}
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C83E2B] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#9AA2B1]">Telephone (Click-to-call)</p>
                    <a
                      href={VERIFIED_FACTS.phoneHref}
                      className="text-lg font-mono-num font-bold text-white hover:text-[#E56B58] underline underline-offset-4 transition-colors"
                    >
                      {VERIFIED_FACTS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C83E2B] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#9AA2B1]">Workshop Address</p>
                    <p className="text-base font-semibold text-white">
                      {VERIFIED_FACTS.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[#C59B27] fill-[#C59B27] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#9AA2B1]">Google Maps Rating (21 Oct 2026)</p>
                    <p className="text-sm font-mono-num text-white">
                      {VERIFIED_FACTS.mapsRating} / 5 from {VERIFIED_FACTS.mapsReviewCount} reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={VERIFIED_FACTS.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 font-mono-num"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
                </a>
                <a
                  href={VERIFIED_FACTS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors rounded-sm whitespace-nowrap shrink-0"
                >
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>

              <div className="pt-2 text-xs text-[#9AA2B1] flex items-center justify-between">
                <span>Public Facebook listing:</span>
                <a
                  href={VERIFIED_FACTS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-[#E56B58] underline underline-offset-2"
                >
                  <span>facebook.com/westendautorepairs</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Official Google Maps Location Card & Embed */}
            <div className="bg-white border border-[#DCD8CE] overflow-hidden">
              <div className="p-5 border-b border-[#E6E3DA] flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#111214]">
                    2 Lambert St, Bathurst NSW 2795
                  </h3>
                  <p className="text-xs text-[#5A606B] font-mono-num">
                    Coordinates: -33.4290413, 149.5797032
                  </p>
                </div>
                <a
                  href={VERIFIED_FACTS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C83E2B] hover:text-[#111214] underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="aspect-16/10 w-full bg-[#E6E3DA]">
                <iframe
                  title="Map showing 2 Lambert St, Bathurst NSW 2795"
                  src="https://www.google.com/maps?q=-33.4290413,149.5797032&z=16&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right column: Demo-Only Callback Form */}
          <div className="lg:col-span-7">
            <CallbackForm initialTopic={initialTopic} id="contact-callback-form" />
          </div>
        </div>
      </div>
    </div>
  );
};
