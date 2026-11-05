import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBookTotal,
  formatVietnameseCurrency,
  validateBookOrder,
  BOOK_PRICE,
  HOAN_KIEM_15_SPOTS,
  TAKEAWAYS_DATA,
  JOURNEY_STAGES,
  FIVE_LAYERS_DATA,
  FIELD_PHOTOS_DATA
} from './monograph';

test('calculateBookTotal calculates accurately', () => {
  const single = calculateBookTotal(1);
  assert.equal(single.unitPrice, BOOK_PRICE);
  assert.equal(single.total, 186000);

  const double = calculateBookTotal(2);
  assert.equal(double.total, 372000);
});

test('formatVietnameseCurrency formats properly with symbol', () => {
  const str = formatVietnameseCurrency(186000);
  assert.match(str, /186\.000/);
  assert.match(str, /₫/);
});

test('validateBookOrder checks correctly', () => {
  const valid = validateBookOrder({
    fullName: 'Công Khanh',
    phone: '0912 307 657',
    address: 'Số 49 Bát Đàn, Hoàn Kiếm, Hà Nội',
    quantity: 1
  });
  assert.equal(valid.isValid, true);
});

test('checks 15 spots and data completeness', () => {
  assert.equal(HOAN_KIEM_15_SPOTS.length, 15);
  assert.equal(TAKEAWAYS_DATA.length, 4);
  assert.equal(JOURNEY_STAGES.length, 5);
  assert.equal(FIVE_LAYERS_DATA.length, 5);
  assert.equal(FIELD_PHOTOS_DATA.length, 5);
});
