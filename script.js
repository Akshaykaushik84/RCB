 const players = [
    {
      name: "Virat Kohli",
      image: "https://th.bing.com/th/id/OIP.IQl7M45j-SZmmAf3SoLHlgHaNK?w=184&h=328&c=7&r=0&o=7&pid=1.7&rm=3",
      country: "India",
      age: 35,
      strength: "Batting",
      role: "Top-order Batter",
      matches: 253,
      runs: 7687,
      wickets: 4,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium"
    },
    {
      name: "Phil Salt",
      image: "https://ichef.bbci.co.uk/ace/standard/3840/cpsprodpb/443b/live/496ab100-1d9b-11ef-a090-6b563b2f66e3.jpg",
      country: "England",
      age: 28,
      strength: "Opening Batsman",
      role: "Opener",
      matches: 25,
      runs: 693,
      wickets: 0,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Occasional off spin"
    },
    {
      name: "Mayank Agarwal",
      image: "https://staticg.sportskeeda.com/editor/2022/12/0d147-16699819050105-1920.jpg",
      country: "India",
      age: 33,
      strength: "Batting",
      role: "Top-order Batter",
      matches: 123,
      runs: 2600,
      wickets: 1,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm offbreak"
    },
    {
      name: "Rajat Patidar",
      image: "https://th.bing.com/th/id/OIP.9GEM_NNKonUqJTZQ5tbYogHaEG?rs=1&pid=ImgDetMain",
      country: "India",
      age: 30,
      strength: "Middle-order Bat",
      role: "Batter (Captain)",
      matches: 18,
      runs: 565,
      wickets: 0,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm offbreak"
    },
    {
      name: "Jitesh Sharma",
      image: "https://documents.iplt20.com/ipl/IPLHeadshot2025/1000.png",
      country: "India",
      age: 30,
      strength: "Wicketkeeper",
      role: "Keeper-Batter",
      matches: 40,
      runs: 820,
      wickets: 0,
      battingStyle: "Right-hand bat",
      bowlingStyle: "-"
    },
    {
      name: "Liam Livingstone",
      image: "https://th.bing.com/th/id/OIP.rUdMHXNtdztUP4rv8EeLFAHaJQ?w=136&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      country: "England",
      age: 31,
      strength: "Power Hitting",
      role: "All-Rounder",
      matches: 35,
      runs: 800,
      wickets: 25,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm leg spin"
    },
    {
      name: "Romario Shepherd",
      image: "https://th.bing.com/th/id/OIP.GzmzwquhTCZSKcbW8BCnuwHaFi?rs=1&pid=ImgDetMain",
      country: "West Indies",
      age: 30,
      strength: "All-Rounder",
      role: "Bowling All-Rounder",
      matches: 20,
      runs: 250,
      wickets: 30,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm fast-medium"
    },
    {
      name: "Krunal Pandya",
      image: "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1743154099652_Krunal%20Pandya%20IPL%20Price.jpg?type=mq",
      country: "India",
      age: 33,
      strength: "Spin & Batting",
      role: "All-Rounder",
      matches: 98,
      runs: 1322,
      wickets: 70,
      battingStyle: "Left-hand bat",
      bowlingStyle: "Slow left-arm orthodox"
    },
    {
      name: "Bhuvneshwar Kumar",
      image: "https://th.bing.com/th/id/OIP.IvkneLsxrYv3B0mC1hTBKwHaEK?rs=1&pid=ImgDetMain",
      country: "India",
      age: 34,
      strength: "Swing Bowling",
      role: "Bowler",
      matches: 150,
      runs: 240,
      wickets: 170,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Right-arm medium"
    },
    {
      name: "Josh Hazlewood",
      image: "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/338200/338216.jpg",
      country: "Australia",
      age: 33,
      strength: "Fast Bowling",
      role: "Bowler",
      matches: 27,
      runs: 50,
      wickets: 36,
      battingStyle: "Left-hand bat",
      bowlingStyle: "Right-arm fast-medium"
    },
    {
      name: "Yash Dayal",
      image: "https://th.bing.com/th/id/OIF.2lp5039j150QCGJEOHLE2Q?w=315&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      country: "India",
      age: 25,
      strength: "Left-arm Fast",
      role: "Bowler",
      matches: 10,
      runs: 5,
      wickets: 14,
      battingStyle: "Right-hand bat",
      bowlingStyle: "Left-arm fast"
    }
  ];

  const tbody = document.getElementById("playerTableBody");

  function populateTable(data) {
    tbody.innerHTML = "";
    data.forEach(player => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><a href="#" onclick="showPlayerDetails('${player.name}')">${player.name}</a></td>
        <td>${player.country}</td>
        <td>${player.age}</td>
        <td>${player.strength}</td>
        <td>${player.role}</td>
        <td>${player.matches}</td>
        <td>${player.runs}</td>
        <td>${player.wickets}</td>
      `;
      tbody.appendChild(row);
    });
  }

  function showPlayerDetails(name) {
    const player = players.find(p => p.name === name);
    if (!player) return;
    document.getElementById("playerImg").src = player.image;
    document.getElementById("playerName").textContent = player.name;
    document.getElementById("playerCountry").textContent = `Country: ${player.country}`;
    document.getElementById("playerAge").textContent = `Age: ${player.age}`;
    document.getElementById("playerStrength").textContent = `Strength: ${player.strength}`;
    document.getElementById("playerRole").textContent = `Role: ${player.role}`;
    document.getElementById("playerMatches").textContent = `Matches: ${player.matches}`;
    document.getElementById("playerRuns").textContent = `Runs: ${player.runs}`;
    document.getElementById("playerWickets").textContent = `Wickets: ${player.wickets}`;
    document.getElementById("playerBatting").textContent = `Batting Style: ${player.battingStyle}`;
    document.getElementById("playerBowling").textContent = `Bowling Style: ${player.bowlingStyle}`;
    new bootstrap.Modal(document.getElementById("playerModal")).show();
  }

  document.getElementById("searchInput").addEventListener("input", function () {
    const val = this.value.toLowerCase();
    const filtered = players.filter(player => player.name.toLowerCase().includes(val));
    populateTable(filtered);
  });

  populateTable(players);

  
