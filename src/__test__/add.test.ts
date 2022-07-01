import add from '@src/math/add';

describe('add', () => {
  it('should add a number together', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
