
//variables
const btn = document.querySelector("#btn_share");
const iconSocial = document.querySelector("div.social-media");

function toogleShare(){

document.querySelector("div.author-share-container").classList.toggle("share-article");
}

btn.addEventListener("click", toogleShare);

//hover sharing link 
iconSocial.addEventListener("click", (e)=>{
if (e.target.classList.contains("social-media-icon")){
  toogleShare();
}
})
