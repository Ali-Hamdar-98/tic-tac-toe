document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('.start');
  
    startBtn.addEventListener('click', function() {
      const player1Name = document.getElementById('player1name').value;
      const player2Name = document.getElementById('player2name').value;
      const player1Color = document.getElementById('player1color').value;
      const player2Color = document.getElementById('player2color').value;
  
      if (!player1Name || !player2Name) {
        alert('Please enter both player names.');
        return;
      }
  
      localStorage.setItem('player1name', player1Name);
      localStorage.setItem('player2name', player2Name);
      localStorage.setItem('player1color', player1Color);
      localStorage.setItem('player2color', player2Color);
  
      window.location.href = 'game.html';
    });
  });
  
  