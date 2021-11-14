const { computeScore } = require('./score.service');

describe('when the language is "typescript"', () => {
  test('should score 8 points when is below the experience threshold', () => {
    const user = new User({ language: 'typescript', experience: 2 });
    const actual = computeScore(user);
    expect(actual).toEqual(8);
  });
  test('should score 7 points when is at the experience threshold', () => {
    const user = new User({ language: 'typescript', experience: 3 });
    const actual = computeScore(user);
    expect(actual).toEqual(7);
  });
  test('should score 5 points when is above the experience threshold', () => {
    const user = new User({ language: 'typescript', experience: 4 });
    const actual = computeScore(user);
    expect(actual).toEqual(5);
  });
});
describe('when the language is "javascript"', () => {
  test('should score 7 points when is below the experience threshold', () => {
    const user = new User({ language: 'javascript', experience: 2 });
    const actual = computeScore(user);
    expect(actual).toEqual(7);
  });
  test('should score 6 points when is at the experience threshold', () => {
    const user = new User({ language: 'javascript', experience: 3 });
    const actual = computeScore(user);
    expect(actual).toEqual(6);
  });
  test('should score 4 points when is above the experience threshold', () => {
    const user = new User({ language: 'javascript', experience: 4 });
    const actual = computeScore(user);
    expect(actual).toEqual(4);
  });
});
describe('when the language is "other"', () => {
  test('should score 6 points when is below the experience threshold', () => {
    const user = new User({ language: 'other', experience: 2 });
    const actual = computeScore(user);
    expect(actual).toEqual();
  });
  test('should score 5 points when is at the experience threshold', () => {
    const user = new User({ language: 'other', experience: 3 });
    const actual = computeScore(user);
    expect(actual).toEqual();
  });
  test('should score 3 points when is above the experience threshold', () => {
    const user = new User({ language: 'other', experience: 4 });
    const actual = computeScore(user);
    expect(actual).toEqual();
  });
});
