const container     = document.querySelector("#container");
const logos         = document.querySelectorAll(".logo");
const brandNames    = document.querySelectorAll(".brand-name");

// on itère pour chaque logo parmis tous les logos
for (let logo of logos) {
    // on ajoute l'écouteur d'événement sur le clic + une function
    logo.addEventListener("click", () => {
        // pour le logo ciblé à ce moment dans l'itération
        // on alterne entre la classe logo et la classe logo-clicked
        logo.classList.toggle("logo-clicked");
        // au backgroundColor du container, on attribut, pour le logo ciblé, la couleur mise en data-
        // grace au dataset
        container.style.backgroundColor = logo.dataset.color // dataset : récupére le data- dans le html
    })
}