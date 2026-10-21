import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, VERIFIED_FACTS } from '../data/workshopData';
import { filterGalleryByCategory } from '../utils/validation';
import { WorkshopVisual } from '../components/WorkshopVisual';

interface GalleryPageProps {
  onInspectGalleryItem: (item: GalleryItem) => void;
}

const CATEGORIES: Array<'All' | GalleryItem['category']> = [
  'All',
  'Workshop Bay',
  'Hoist & Equipment',
  'Tools & Bench',
  'Exterior & Facade',
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onInspectGalleryItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | GalleryItem['category']>('All');
  const filteredItems = filterGalleryByCategory(GALLERY_ITEMS, selectedCategory);

  return (
    <div className="py-12 sm:py-16 bg-[#14161A] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E56B58]">
              Work / Gallery · Original Bathurst-Style Workshop Concept Series
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Workshop Environment & Equipment Studies
            </h1>
            <p className="text-base text-[#B4BBC6] leading-relaxed">
              This gallery features {GALLERY_ITEMS.length} original Bathurst-style independent workshop visuals (hydraulic hoist, open service bay, tool shadow board, twilight workshop facade, engine diagnostics bench, disc brake assembly, and undercarriage inspection). No Google Maps or Facebook photos are reused, and every visual is explicitly captioned{' '}
              <strong className="text-white">&ldquo;{VERIFIED_FACTS.conceptCaption}&rdquo;</strong>
            </p>
          </div>

          <a
            href={VERIFIED_FACTS.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#C83E2B] hover:bg-[#B23321] transition-colors rounded-sm whitespace-nowrap shrink-0 w-fit font-mono-num"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Call {VERIFIED_FACTS.phoneDisplay}</span>
          </a>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filter workshop gallery plates by subject"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#1E222A] rounded-sm"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#C83E2B] text-white'
                      : 'text-[#B8BEC8] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-[#9AA2B1] font-mono-num">
            Showing {filteredItems.length} of {GALLERY_ITEMS.length} concept visuals · Caption: &ldquo;{VERIFIED_FACTS.conceptCaption}&rdquo;
          </p>
        </div>

        {/* Asymmetric Cinematic Grid of 7 Workshop Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item) => {
            const colSpan =
              item.aspect === 'wide' && selectedCategory === 'All'
                ? 'md:col-span-12 lg:col-span-6'
                : 'md:col-span-6';
            return (
              <div key={item.id} className={colSpan}>
                <WorkshopVisual item={item} onSelect={onInspectGalleryItem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
