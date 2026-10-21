import {
  GALLERY_ITEMS,
  GalleryItem,
  NAV_ITEMS,
  PageId,
  SERVICE_ITEMS,
  ServiceItem,
  VERIFIED_FACTS,
} from '../data/workshopData';

export interface CallbackFormInput {
  name: string;
  phone: string;
  message: string;
}

export interface CallbackValidationResult {
  valid: boolean;
  errors: {
    name?: string;
    phone?: string;
    message?: string;
  };
  demoNotice?: string;
}

export function validateCallbackForm(input: CallbackFormInput): CallbackValidationResult {
  const errors: CallbackValidationResult['errors'] = {};
  const trimmedName = input.name.trim();
  const trimmedPhone = input.phone.trim();
  const trimmedMessage = input.message.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (!trimmedPhone) {
    errors.phone = 'Please enter a contact phone number.';
  } else if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    errors.phone = 'Please enter a valid Australian phone number (at least 8 digits).';
  }

  if (!trimmedMessage) {
    errors.message = 'Please briefly describe the vehicle or repair enquiry.';
  } else if (trimmedMessage.length < 5) {
    errors.message = 'Please add a few more words about your enquiry.';
  }

  const valid = Object.keys(errors).length === 0;
  return {
    valid,
    errors,
    demoNotice: valid ? VERIFIED_FACTS.callbackDemoMessage : undefined,
  };
}

export function resolvePageFromHash(hashOrPath: string): PageId {
  const cleaned = hashOrPath.replace(/^[#/]+/, '').split('?')[0].toLowerCase().trim();
  if (!cleaned) return 'home';
  if (cleaned === 'work' || cleaned === 'work-gallery') return 'gallery';
  const matched = NAV_ITEMS.find((item) => item.id === cleaned);
  return matched ? matched.id : 'home';
}

export function filterServicesByStatus(
  services: ServiceItem[],
  filter: 'all' | 'confirmed' | 'placeholder'
): ServiceItem[] {
  if (filter === 'all') return services;
  return services.filter((s) => s.status === filter);
}

export function filterGalleryByCategory(
  items: GalleryItem[],
  category: 'All' | GalleryItem['category']
): GalleryItem[] {
  if (category === 'All') return items;
  return items.filter((item) => item.category === category);
}

export function auditStrictCompliance(): {
  confirmedServicesCount: number;
  allGalleryCaptioned: boolean;
  hasValidPhoneHref: boolean;
} {
  const confirmed = SERVICE_ITEMS.filter((s) => s.status === 'confirmed');
  const allGalleryCaptioned =
    GALLERY_ITEMS.length >= 6 &&
    GALLERY_ITEMS.length <= 8 &&
    GALLERY_ITEMS.every((g) => g.caption === 'Google listing photo of this workshop.');
  const hasValidPhoneHref = VERIFIED_FACTS.phoneHref === 'tel:+61263312920';

  return {
    confirmedServicesCount: confirmed.length,
    allGalleryCaptioned,
    hasValidPhoneHref,
  };
}
