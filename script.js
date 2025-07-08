// Auto-hide portal after 6 seconds if not clicked
window.addEventListener("load", () => {
  setTimeout(() => {
    const portal = document.querySelector('.portal-wrapper');
    if (portal) {
      portal.style.display = 'none';
    }
  }, 6000);
});

// Scroll to dashboard and hide portal immediately if button is clicked
function startJourney() {
  document.querySelector('.portal-wrapper').style.display = 'none';
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}
