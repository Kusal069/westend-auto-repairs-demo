import React, { useState } from 'react';
import { Phone, Check, Info } from 'lucide-react';
import { SERVICE_ITEMS, VERIFIED_FACTS } from '../data/workshopData';
import { filterServicesByStatus } from '../utils/validation';

interface ServicesPageProps {
  onSelectServiceEnquiry: (topic: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectServiceEnquiry }) => {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'placeholder'>('all');
  const displayedServices = filterServicesByStatus(SERVICE_ITEMS, filter);

  return (
    <div className="py-12 sm:py-16 bg-[#F6F5F2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Page Header */}
        <div className="border-b border-[#DCD8CE] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C83E2B]">
              {VERIFIED_FACTS.businessName} · {VERIFIED_FACTS.fullAddress}
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#111214]"
              style={{ textWrap: 'balance' }}
            >
              Workshop Services & Scope
            </h1>
            <p className="text-base text-[#4A4F58] leading-relaxed">
              The only publicly confirmed service category for {VERIFIED_FACTS.businessName} is{' '}
              <strong className="text-[#111214]">Auto repairs</strong>. Cards 02 to 05 are included as generic mechanical workshop placeholders and are explicitly labelled{' '}
              <em>&ldquo;Typical workshop work — confirm with the shop&rdquo;</em> until confirmed by the workshop owner.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <p className="text-xs text-[#5A606B]">Confirm availability directly by phone:</p>
            <a
              href={VERIFIED_FACTS.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 font-mono-num"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter workshop services by confirmation status"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#E6E3DA] rounded-sm"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#111214] text-white'
                  : 'text-[#4A4F58] hover:text-[#111214]'
              }`}
            >
              All Cards ({SERVICE_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('confirmed')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'confirmed'
                  ? 'bg-[#C83E2B] text-white'
                  : 'text-[#4A4F58] hover:text-[#111214]'
              }`}
            >
              Confirmed Service (1)
            </button>
            <button
              type="button"
              onClick={() => setFilter('placeholder')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                filter === 'placeholder'
                  ? 'bg-[#111214] text-white'
                  : 'text-[#4A4F58] hover:text-[#111214]'
              }`}
            >
              Typical Workshop Placeholders (4)
            </button>
          </div>

          <p className="text-xs text-[#5A606B]">
            No prices, certifications, or warranties are stated on this demo site.
          </p>
        </div>

        {/* Numbered Service Cards List */}
        <div className="space-y-6">
          {displayedServices.map((service) => {
            const isConfirmed = service.status === 'confirmed';
            return (
              <article
                key={service.id}
                className={`${
                  isConfirmed
                    ? 'bg-[#181A1E] text-white border border-[#111214]'
                    : 'bg-white text-[#111214] border border-[#DCD8CE]'
                } p-6 sm:p-8`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-num">
                      <span
                        className={`font-bold ${
                          isConfirmed ? 'text-[#E56B58]' : 'text-[#C83E2B]'
                        }`}
                      >
                        CARD {service.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className={isConfirmed ? 'text-white font-semibold' : 'text-[#5A606B]'}>
                        {service.statusLabel}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                      {service.number}. {service.title}
                    </h2>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isConfirmed ? 'text-[#C8CDD6]' : 'text-[#4A4F58]'
                      }`}
                    >
                      {service.summary}
                    </p>

                    <div
                      className={`pt-2 flex items-start gap-2 text-xs ${
                        isConfirmed ? 'text-[#A9B0BC]' : 'text-[#60656F]'
                      }`}
                    >
                      <Info className="w-4 h-4 text-[#C83E2B] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{service.disclaimer}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                    <div
                      className={`p-4 border ${
                        isConfirmed
                          ? 'bg-[#111214] border-white/10'
                          : 'bg-[#F9F8F6] border-[#E6E3DA]'
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${
                          isConfirmed ? 'text-[#A9B0BC]' : 'text-[#5A606B]'
                        }`}
                      >
                        Enquiry Checklist
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <Check
                              className="w-4 h-4 text-[#C83E2B] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className={isConfirmed ? 'text-[#E5E7EB]' : 'text-[#383C44]'}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={VERIFIED_FACTS.phoneHref}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 font-mono-num"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() =>
                          onSelectServiceEnquiry(
                            `Enquiry for ${service.number}. ${service.title} (${service.statusLabel})`
                          )
                        }
                        className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-sm border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isConfirmed
                            ? 'border-white/25 text-white hover:bg-white/10'
                            : 'border-[#111214] text-[#111214] hover:bg-[#111214] hover:text-white'
                        }`}
                      >
                        Use demo callback form
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
