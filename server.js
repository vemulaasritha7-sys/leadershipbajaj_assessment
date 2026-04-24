const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// ✅ THIS IS IMPORTANT
app.get("/leaderboard", (req, res) => {
  res.json({ message: "Backend working ✅" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});