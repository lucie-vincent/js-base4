const container     = document.querySelector("#container");
const logos         = document.querySelectorAll(".logo");
const brandNames    = document.querySelectorAll(".brand-name");


for (let logo of logos) {
    logo/addEventListener("click", () => {
        logo.classList.toggle("logo-clicked");
        for (brandName of brandNames) {
            brandName.style.display = "block";
        }
    })
}