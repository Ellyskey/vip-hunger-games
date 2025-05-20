let names = [];
let eventLog = [];

document.getElementById('startButton').addEventListener('click', () => {
  const input = document.getElementById('inputNames').value.trim();
  names = input.split('\n').map(n => n.trim()).filter(n => n);
  eventLog = [];
  document.getElementById('eventLog').innerHTML = '';
  document.getElementById('winnerContainer').innerText = '';

  if (names.length < 2) {
    alert('Inserisci almeno 2 nomi per iniziare.');
    return;
  }

  simulateHungerGames(names);
});

function simulateHungerGames(players) {
  while (players.length > 1) {
    const eliminatedIndex = Math.floor(Math.random() * players.length);
    const eliminated = players.splice(eliminatedIndex, 1)[0];

    const killer = players[Math.floor(Math.random() * players.length)];
    const message = `${eliminated} è stato eliminato da ${killer}.`;
    eventLog.push(message);
  }

  // Log degli eventi
  const logList = document.getElementById('eventLog');
  eventLog.forEach(ev => {
    const li = document.createElement('li');
    li.innerText = ev;
    logList.appendChild(li);
  });

  // Vincitore
  document.getElementById('winnerContainer').innerText = `🏆 Vincitore: ${players[0]} 🏆`;
}
