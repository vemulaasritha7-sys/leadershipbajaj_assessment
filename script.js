async function loadData() {
  const loader = document.getElementById("loader");
  const tableBody = document.getElementById("tableBody");
  const total = document.getElementById("total");

  tableBody.innerHTML = "";
  total.innerText = "";

  loader.classList.remove("hidden");

  try {
    const res = await fetch("http://localhost:3000/leaderboard");
    const data = await res.json();

    loader.classList.add("hidden");

    data.leaderboard.forEach((p, i) => {
      let medal = "";

      if (i === 0) medal = "🥇";
      else if (i === 1) medal = "🥈";
      else if (i === 2) medal = "🥉";

      const row = `
        <tr class="border-b hover:bg-gray-50 transition">
          <td class="p-3 font-medium">${medal || i + 1}</td>
          <td class="p-3">${p.participant}</td>
          <td class="p-3 text-right font-semibold">${p.totalScore}</td>
        </tr>
      `;

      tableBody.innerHTML += row;
    });

    total.innerText = data.totalScore;

  } catch (err) {
    loader.innerText = "Error loading data ❌";
    console.error(err);
  }
}