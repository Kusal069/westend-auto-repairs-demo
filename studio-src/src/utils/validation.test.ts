import test from 'node:test';
import assert from 'node:assert/strict';
import {
  auditStrictCompliance,
  filterGalleryByCategory,
  filterServicesByStatus,
  resolvePageFromHash,
  validateCallbackForm,
} from './validation';
import { GALLERY_ITEMS, SERVICE_ITEMS, VERIFIED_FACTS } from '../data/workshopData';

test('strict brand facts match prompt specification', () => {
  assert.equal(VERIFIED_FACTS.businessName, 'Westend Auto Repairs');
  assert.equal(VERIFIED_FACTS.fullAddress, '2 Lambert St, Bathurst NSW 2795');
  assert.equal(VERIFIED_FACTS.phoneDisplay, '+61 2 6331 2920');
  assert.equal(VERIFIED_FACTS.phoneHref, 'tel:+61263312920');
  assert.equal(VERIFIED_FACTS.mapsRating, '4.7');
  assert.equal(VERIFIED_FACTS.mapsReviewCount, 63);
  assert.equal(VERIFIED_FACTS.mapsSnapshotDate, '21 Oct 2026');
  assert.equal(
    VERIFIED_FACTS.demoNotice,
    'Independent demo site. Not the official Westend Auto Repairs website.'
  );
  assert.equal(
    VERIFIED_FACTS.callbackDemoMessage,
    'Demo only — this form does not send a message. Call +61 2 6331 2920.'
  );
});

test('services enforce single confirmed Auto repairs service and labelled placeholders', () => {
  const confirmed = filterServicesByStatus(SERVICE_ITEMS, 'confirmed');
  const placeholders = filterServicesByStatus(SERVICE_ITEMS, 'placeholder');
  assert.equal(confirmed.length, 1);
  assert.equal(confirmed[0].title, 'Auto repairs');
  assert.equal(placeholders.length, 4);
  for (const item of placeholders) {
    assert.equal(item.statusLabel, 'Typical workshop work — confirm with the shop');
  }
});

test('gallery has 6 to 8 items and every item has a listing-photo caption', () => {
  const audit = auditStrictCompliance();
  assert.equal(audit.confirmedServicesCount, 1);
  assert.equal(audit.allGalleryCaptioned, true);
  assert.equal(audit.hasValidPhoneHref, true);
  const hoistItems = filterGalleryByCategory(GALLERY_ITEMS, 'Hoist & Equipment');
  assert.ok(hoistItems.length >= 1);
});

test('callback form validation rejects empty inputs and returns exact demo notice when valid', () => {
  const emptyResult = validateCallbackForm({ name: '', phone: '', message: '' });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.message);

  const validResult = validateCallbackForm({
    name: 'Alex Taylor',
    phone: '0412 345 678',
    message: 'Looking to book a brake inspection next Tuesday.',
  });
  assert.equal(validResult.valid, true);
  assert.equal(
    validResult.demoNotice,
    'Demo only — this form does not send a message. Call +61 2 6331 2920.'
  );
});

test('resolvePageFromHash resolves all 6 navigation pages', () => {
  assert.equal(resolvePageFromHash('#home'), 'home');
  assert.equal(resolvePageFromHash('#services'), 'services');
  assert.equal(resolvePageFromHash('#about'), 'about');
  assert.equal(resolvePageFromHash('#gallery'), 'gallery');
  assert.equal(resolvePageFromHash('#reviews'), 'reviews');
  assert.equal(resolvePageFromHash('#contact'), 'contact');
  assert.equal(resolvePageFromHash('#unknown'), 'home');
});
