import test from 'node:test';
import assert from 'node:assert/strict';
test('the repository has a runnable test harness', () => {
  assert.equal(typeof test, 'function');
});
