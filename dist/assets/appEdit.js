// add Hover effect on reeltea

let reelteaImage = document.querySelector('img[src="dist/assets/images/reeltea.png"]')
reelteaImage.addEventListener("mouseenter", () => {
  reelteaImage.src = 'dist/assets/images/reeltea-screenshot.png'; 
});

reelteaImage.addEventListener("mouseleave", () => {
  reelteaImage.src = 'dist/assets/images/reeltea.png'; 
});

// add Hover effect on Corona Game

let CoronaImage = document.querySelector('img[src="dist/assets/images/feature.png"]')
CoronaImage.addEventListener("mouseenter", () => {
  CoronaImage.src = 'dist/assets/images/gameplay.gif';
});

CoronaImage.addEventListener("mouseleave", () => {
  CoronaImage.src = 'dist/assets/images/feature.png'; 
});