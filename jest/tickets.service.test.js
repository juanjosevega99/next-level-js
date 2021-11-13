const { expect, beforeEach } = require('@jest/globals');
const ticketsService = require('./tickets.service');

describe('.hasFreeTickets(user)', () => {
  let dummyUser;

  describe('when the user is VIP', () => {
    beforeEach(() => {
      dummyUser = new User({ isVip: true });
    });
    test('should have a free ticket when is below the junior threshold', () => {
      dummyUser.experience = 1;
      const actual = ticketsService.hasFreeTickets(dummyUser);
      expect(actual).toBeTruthy();
    });
    test('should have a free ticket when is exactly at the junior threshold', () => {
      dummyUser.experience = 3;
      const actual = ticketsService.hasFreeTickets(dummyUser);
      expect(actual).toBeTruthy();
    });
    test('should have a free ticket when is over the junior threshold', () => {
      dummyUser.experience = 4;

      const actual = ticketsService.hasFreeTickets(dummyUser);

      expect(actual).toBeTruthy();
    });
  });
  describe('when the user is not VIP', () => {
    beforeEach(() => {
      dummyUser = new User({ isVip: false });
    });
    test('should have a free ticket when is below the junior threshold', () => {
      dummyUser.experience = 1;

      const actual = ticketsService.hasFreeTickets(dummyUser);

      expect(actual).toBeFalsy();
    });
    test('should have a free ticket when is exactly at the junior threshold', () => {
      dummyUser.experience = 3;

      const actual = ticketsService.hasFreeTickets(dummyUser);

      expect(actual).toBeTruthy();
    });
    test('should NOT have a free ticket when is over the junior threshold', () => {
      dummyUser.experience = 4;

      const actual = ticketsService.hasFreeTickets(freeUser);

      expect(actual).toBeFalsy();
    });
  });
});
