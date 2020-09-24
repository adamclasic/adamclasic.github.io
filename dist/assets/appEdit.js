let reelteaImage = document.querySelector('img[src="dist/assets/images/reeltea.png"]')
reelteaImage.addEventListener("mouseenter", () => {
  reelteaImage.src = 'dist/assets/images/banner.png'; 
});

reelteaImage.addEventListener("mouseleave", () => {
  reelteaImage.src = 'dist/assets/images/banner.png'; 
});