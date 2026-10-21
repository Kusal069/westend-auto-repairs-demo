import React from 'react';
import { GalleryItem, VERIFIED_FACTS } from '../data/workshopData';

interface WorkshopVisualProps {
  item: GalleryItem;
  priority?: boolean;
  onSelect?: (item: GalleryItem) => void;
  compact?: boolean;
}

export const WorkshopVisual: React.FC<WorkshopVisualProps> = ({
  item,
  onSelect,
  compact = false,
}) => {
  return (
    <figure className="group relative bg-[#14161A] border border-[#282C34] overflow-hidden flex flex-col justify-between">
      {/* Top editorial plate number and category bar */}
      <div className="px-4 py-2.5 bg-[#111214] border-b border-white/10 flex items-center justify-between gap-2 text-xs text-[#D5D9E2]">
        <div className="flex items-center gap-2 font-mono-num">
          <span className="text-[#E56B58] font-semibold">{item.number}</span>
          <span aria-hidden="true">·</span>
          <span className="text-white font-medium">{item.category}</span>
        </div>
        <span className="text-[#9AA2B1] hidden sm:inline">Bathurst Workshop Study</span>
      </div>

      <div className="relative aspect-16/10 w-full overflow-hidden bg-[#111317]">
        <img
          src={item.imageUrl}
          alt={`${item.title} — ${VERIFIED_FACTS.conceptCaption}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
        />
        {/* Measured contrast scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Mandatory visible caption overlaid on bottom of visual */}
        <div className="absolute bottom-0 inset-x-0 px-3.5 py-2 bg-[#111214]/95 border-t border-white/10 flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-[#F3F4F6] tracking-wide">
            {VERIFIED_FACTS.conceptCaption}
          </span>
          {onSelect && (
            <button
              type="button"
              onClick={() => onSelect(item)}
              className="text-xs font-semibold text-[#E56B58] hover:text-white underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Inspect plate
            </button>
          )}
        </div>
      </div>

      {!compact && (
        <figcaption className="p-4 sm:p-5 bg-[#181B20] text-[#E6E4E0] flex-1 flex flex-col justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
              {item.number}. {item.title}
            </h3>
            <p className="mt-1.5 text-sm text-[#B4BBC6] leading-relaxed">
              {item.description}
            </p>
          </div>
          <p className="pt-2 text-xs text-[#9AA2B1] border-t border-white/10">
            Caption: {item.caption}
          </p>
        </figcaption>
      )}
    </figure>
  );
};
