let facebook    = document.querySelector(".facebook");
let twitter     = document.querySelector(".twitter");
let insta       = document.querySelector(".insta");



function animerLogo(social) {
    let nomLogo = document.querySelectorAll(".nom-logo");
    nomLogo.style.visibility = "visible";
}



facebook.addEventListener('click', function() {
    animerLogo();
});