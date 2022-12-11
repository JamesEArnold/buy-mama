import { testFunction } from '@/components/dummy';

describe(testFunction, () => {
  it('returns true', () => {
    expect(testFunction).toBeTruthy();
  });
});
