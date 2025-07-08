function startSimulation() {
  document.querySelector(".landing").classList.add("hidden");
  document.querySelector(".travel").classList.remove("hidden");

  setTimeout(() => {
    generateBoardingPass();
    document.querySelector(".world").classList.remove("hidden");
    generateDreamWorld();

    setTimeout(() => {
      document.querySelector(".dashboard").classList.remove("hidden");
      generateLifeDashboard();
    }, 3000);
  }, 2000);
}

function generateBoardingPass() {
  const locations = ["Nebula IX", "ChronoZone", "Aether Prime", "Glitch Realm"];
  const destination = locations[Math.floor(Math.random() * locations.length)];
  document.getElementById("boardingPass").innerHTML = `
    <h3>🚀 Destination:</h3>
    <p>${destination}</p>
    <p>Departure: Earth</p>
    <p>Status: Quantum Jump Initialized</p>
  `;
}

function generateDreamWorld() {
  const creatures = ["Glow Wolves", "Sky Leviathans", "Echo Spirits"];
  const laws = ["Thought=Reality", "No Gravity", "Eternal Night"];
  const currency = ["Soul Shards", "Dream Coins", "Light Bits"];

  const realm = `You have landed in the world of <b>${generateName()}</b>, where 
  <i>${randomItem(creatures)}</i> roam free, and the law of the land is: 
  <b>${randomItem(laws)}</b>. Currency: <b>${randomItem(currency)}</b>.`;

  document.getElementById("worldDetails").innerHTML = realm;
}

function generateLifeDashboard() {
  const classes = ["Time Hacker", "Dream Shaper", "Galactic Monk", "Techno Nomad"];
  const skills = ["Chrono Dash", "Mind Cloak", "Reality Bender"];
  const mood = ["🔥 Fierce", "🌙 Calm", "⚡ Chaotic", "💡 Enlightened"];

  const dashboard = `
    <p>Class: <b>${randomItem(classes)}</b></p>
    <p>Skill Unlocked: <b>${randomItem(skills)}</b></p>
    <p>Current Mood: <b>${randomItem(mood)}</b></p>
    <p>XP: <b>${Math.floor(Math.random() * 10000)}</b></p>
    <p>Mission: <i>Hack the Sun to light the lost sector</i></p>
  `;

  document.getElementById("lifeStats").innerHTML = dashboard;
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateName() {
  const parts1 = ["Zy", "Ae", "Lum", "Vor", "Xen"];
  const parts2 = ["rion", "lith", "nara", "thos", "dria"];
  return parts1[Math.floor(Math.random() * parts1.length)] +
         parts2[Math.floor(Math.random() * parts2.length)];
}
