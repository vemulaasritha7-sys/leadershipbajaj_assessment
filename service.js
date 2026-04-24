const axios = require("axios");

const BASE_URL = "https://devapigw.vidalhealthtpa.com/srm-quiz-task";
const REG_NO = "RA2311030020166";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function processQuiz() {
  let uniqueMap = new Map();

  for (let i = 0; i < 10; i++) {
    const response = await axios.get(`${BASE_URL}/quiz/messages`, {
      params: { regNo: REG_NO, poll: i }
    });

    const events = response.data.events;

    for (let e of events) {
      const key = `${e.roundId}_${e.participant}`;

      // Deduplication logic
      if (!uniqueMap.has(key)) {
        uniqueMap.set(key, e);
      }
    }

    await delay(5000); // 5 sec delay
  }

  // Aggregate scores
  let scoreMap = {};

  for (let e of uniqueMap.values()) {
    scoreMap[e.participant] =
      (scoreMap[e.participant] || 0) + e.score;
  }

  // Convert to leaderboard
  let leaderboard = Object.entries(scoreMap).map(([participant, totalScore]) => ({
    participant,
    totalScore
  }));

  // Sort descending
  leaderboard.sort((a, b) => b.totalScore - a.totalScore);

  // Total score
  const totalScore = leaderboard.reduce((sum, p) => sum + p.totalScore, 0);

  return { leaderboard, totalScore };
}

module.exports = { processQuiz };
