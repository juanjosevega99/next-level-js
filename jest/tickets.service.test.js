const { expect } = require('@jest/globals');
const { hasFreeTickets } = require('./tickets.service');
const scoreService = require('./score.service');

describe('.hasFreeTickets(user)', () => {
  describe('when the user is VIP', () => {
    test('should have a free ticket when is below the score threshold', () => {
      const user = new User({ isVip: true });
      // Creamos un test doble que siempre devuelve 4
      jest.spyOn(scoreService, 'computeScore').mockReturnValue(4);
      const actual = hasFreeTickets(user);
      expect(actual).toBe(true);
    });
    test('should have a free ticket when is exactly at the score threshold', () => {
      const user = new User({ isVip: true });
      // Creamos un test doble que siempre devuelve 5
      jest.spyOn(scoreService, 'computeScore').mockReturnValue(5);
      const actual = hasFreeTickets(user);
      expect(actual).toBe(false);
    });
    test('should have a free ticket when is over the score threshold', () => {
      const user = new User({ isVip: true });
      // Creamos un test doble que siempre devuelve 6
      jest.spyOn(scoreService, 'computeScore').mockReturnValue(6);
      const actual = hasFreeTickets(user);
      expect(actual).toBe(true);
    });
  });
  describe('when the user is not VIP', () => {
    test('should have a free ticket when is below the score threshold ', () => {
      const user = new User({ isVip: false });
      // Creamos un test doble que siempre devuelve 4
      jest.spyOn(scoreService, 'computeScore').mockReturnValue(4);
      const actual = hasFreeTickets(user);
      expect(actual).toBe(true);
    });
    test('should NOT have a free ticket when is exactly at the score threshold', () => {
      const user = new User({ isVip: false });
      // Creamos un test doble que siempre devuelve 5
      jest.spyOn(scoreService, 'computeScore').mockReturnValue(5);
      const actual = hasFreeTickets(user);
      expect(actual).toBe(false);
    });
    test('should NOT have a free ticket when is over the score threshold', () => {
      const user = new User({ isVip: false });
      // Creamos un test doble que siempre devuelve 6
      jest.spyOn(scoreService, 'computeScore').mockReturnValue(6);
      const actual = hasFreeTickets(user);
      expect(actual).toBe(false);
    });
  });
});
