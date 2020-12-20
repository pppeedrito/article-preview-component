/* *****variables***** */
const btnShare = document.querySelector("div.btn-share-container");
const socialMediaOptions = document.querySelector("div.social-media");

/* *****functions***** */
function toggleShareOptions() {
  // add class 'share-article' to the div with class 'author-share'
  document
    .querySelector("div.author-share-container")
    .classList.toggle("share-article");
}

/* *****event listeners***** */
// display share options
btnShare.addEventListener("click", toggleShareOptions);

//simulate sharing link
socialMediaOptions.addEventListener("click", (e) => {
  if (e.target.classList.contains("social-media-icon")) {
    toggleShareOptions();
  }
});
