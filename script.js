document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('.start');

  startBtn.addEventListener('click', function() {
    const player1NameInput = document.getElementById('player1name');
    const player2NameInput = document.getElementById('player2name');
    const player1Name = player1NameInput.value.trim() || 'X';
    const player2Name = player2NameInput.value.trim() || 'O';
    const player1Color = document.getElementById('player1color').value;
    const player2Color = document.getElementById('player2color').value;

    localStorage.setItem('player1name', player1Name);
    localStorage.setItem('player2name', player2Name);
    localStorage.setItem('player1color', player1Color);
    localStorage.setItem('player2color', player2Color);

    localStorage.setItem('player1symbol', player1Name);
    localStorage.setItem('player2symbol', player2Name);

    window.location.href = 'game.html';
  });
});