🏆 Quiz Leaderboard System
📌 Overview
The Quiz Leaderboard System is a web application that fetches quiz data from multiple API polls, removes duplicate entries, and generates a final leaderboard based on total participant scores. It is designed to demonstrate efficient API handling, data processing, and UI presentation.

🚀 Features
Fetches data from multiple API polls (0–9)
Handles duplicate entries using roundId + participant
Aggregates total scores per participant
Displays a sorted leaderboard (highest score first)
Shows total combined score
Responsive and clean UI with real-time status updates

🛠️ Tech Stack
Frontend: HTML, JavaScript
Styling: Tailwind CSS
API Handling: Fetch API (Async/Await)
Architecture: Client-side (No backend required)

🏗️ Project Structure
quiz-leaderboard
**frontend**

> index.html
> script.js

**backend**

> server.js
> service.js

🧠 Architecture
The application follows a client-side architecture:
UI triggers data fetching
API is called sequentially (poll 0–9)
Data is stored and deduplicated using a Map
Scores are aggregated per participant
Leaderboard is sorted and rendered dynamically

⚙️ How It Works
User clicks “Start Processing”
App fetches API data with delay (5 seconds per poll)
Duplicate records are filtered
Scores are summed and sorted
Final leaderboard is displayed

▶️ How to Run
Download or clone the repository
Open index.html in a browser
Enter your REG_NO in the script
Click Start Processing

📈 Key Concepts Used
Asynchronous programming (async/await)
API integration
Data deduplication
Dynamic DOM manipulation

✅ Conclusion
This project showcases efficient handling of real-time API data, clean UI design, and optimized logic without requiring backend setup.

