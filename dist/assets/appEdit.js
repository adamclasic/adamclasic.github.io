let reelteaImage = document.querySelector('img[src="dist/assets/images/reeltea.png"]')
reelteaImage.addEventListener("mouseenter", () => {
  reelteaImage.src = 'dist/assets/images/reeltea-screenshot.png'; 
});

reelteaImage.addEventListener("mouseleave", () => {
  reelteaImage.src = 'dist/assets/images/reeltea.png'; 
});

let CoronaImage = document.querySelector('img[src="dist/assets/images/feature.png"]')
reelteaImage.addEventListener("mouseenter", () => {
  reelteaImage.src = 'dist/assets/images/gameplay.png'; 
});

reelteaImage.addEventListener("mouseleave", () => {
  reelteaImage.src = 'dist/assets/images/feature.png'; 
});