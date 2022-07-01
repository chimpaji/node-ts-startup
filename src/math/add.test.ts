import add from '@src/math/add';

describe('add', () => {
  it('should add arg together as a number together', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
