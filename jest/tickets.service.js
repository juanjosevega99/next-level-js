const scoreService = require('./score.service');

const MIN_REQUIRED_SCORE = 5;

export default function hasFreeTickets(developer) {
  if (developer.isVIP) {
    return true;
  }

  return scoreService.computeScore(developer) > MIN_REQUIRED_SCORE
}

module.exports = hasFreeTickets;
