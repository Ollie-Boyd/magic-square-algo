import * as MagicSquare from '../magic_square.js';

  

  beforeEach(() => {
    // magicSquare = new MagicSquare([[ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ]]);
  });

  it('should be able to rotate', function () {
    const magicSquare = new MagicSquare([[ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ]]);
    const actual = magicSquare.rotate90Clockwise([[ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ]]);
    assert.deepStrictEqual(actual, [[4,3,8],[9,5,1],[2,7,6]]);
  });

  test('should be able to rotate', () => {
    const actual = magicSquare.rotate90Clockwise(magicSquare.reference());
    expect(actual).toEqual([[4,3,8],[9,5,1],[2,7,6]]);
  });


