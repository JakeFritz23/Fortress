function showPaidWall() {
  const paidWall = document.createElement('div');
  paidWall.style.position = 'fixed';
  paidWall.style.top = '0';
  paidWall.style.left = '0';
  paidWall.style.width = '100%';
  paidWall.style.height = '100%';
  paidWall.style.background = 'rgba(0,0,0,0.9)';
  paidWall.style.display = 'flex';
  paidWall.style.flexDirection = 'column';
  paidWall.style.alignItems = 'center';
  paidWall.style.justifyContent = 'center';
  paidWall.style.zIndex = '9999';
  paidWall.innerHTML = `
    <h2>This Message is Protected by FortressMail</h2>
    <p>Unlock this email for $0.25</p>
    <button onclick="unlockPaidContent()">Unlock Email</button>
    <button onclick="closePaidWall()">Cancel</button>
  `;
  document.body.appendChild(paidWall);
}

function unlockPaidContent() {
  alert("Payment successful! (Simulation Mode)");
  closePaidWall();
}

function closePaidWall() {
  const walls = document.querySelectorAll('div');
  walls.forEach(wall => {
    if (wall.innerText.includes('This Message is Protected by FortressMail')) {
      wall.remove();
    }
  });
}
