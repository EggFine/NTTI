import assert from 'node:assert/strict';
import test from 'node:test';
import { buildLocaleUrl } from '../lib/locale-url';

test('switches the locale without adding a query marker', () => {
  assert.equal(buildLocaleUrl('/zh', 'en', ''), '/en/');
  assert.equal(buildLocaleUrl('/en/codex', 'zh', ''), '/zh/codex');
});

test('preserves a complete share query', () => {
  assert.equal(
    buildLocaleUrl('/zh/r', 'en', '?d=payload&s=checksum'),
    '/en/r?d=payload&s=checksum',
  );
});

test('preserves repeated and arbitrary parameters in their original order', () => {
  assert.equal(
    buildLocaleUrl('/en/r', 'zh', 'tag=a&tag=b&debug=true'),
    '/zh/r?tag=a&tag=b&debug=true',
  );
});

test('preserves encoded and empty query values byte-for-byte', () => {
  assert.equal(
    buildLocaleUrl('/zh/r', 'en', '?d=a%2Bb%2Fc&s=&debug'),
    '/en/r?d=a%2Bb%2Fc&s=&debug',
  );
});
