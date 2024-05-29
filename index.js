const zitKnop = document.querySelector("#zitten")
const ligKnop = document.querySelector("#liggen")
const loopKnop = document.querySelector("#lopen")
const staanKnop = document.querySelector("#stilstaan")

const afbeeldingHond = document.querySelector(".afbeelding")

let aantalBrokjesElement = document.querySelector("figcaption")
let aantalBrokjes = 5 // houd aantal brokjes bij //
aantalBrokjesElement.textContent = aantalBrokjes // veranderd aantal brokjes op scherm //

function hondjeZit() {
    afbeeldingHond.src = "img/hond1.gif";
    beloning()
}
function hondjeLiggen() {
    afbeeldingHond.src = "img/hond3.gif";
    beloning()
}
function hondjeLopen() {
    afbeeldingHond.src = "img/hond4.gif";
    beloning()
}
function hondjeStilstaan() {
    afbeeldingHond.src = "img/hond2.gif";
    beloning()
}

function disableButton(button) {
    button.disabled = true;
    button.style.backgroundColor = "gray";
}

function beloning() {
    if (aantalBrokjes > 0) {
        aantalBrokjes--
        aantalBrokjesElement.textContent = aantalBrokjes
    }
    else {
        disableButton(zitKnop);
        disableButton(ligKnop);
        disableButton(loopKnop);
        disableButton(staanKnop);
    }
}

zitKnop.addEventListener("click", hondjeZit)
ligKnop.addEventListener("click", hondjeLiggen)
loopKnop.addEventListener("click", hondjeLopen)
staanKnop.addEventListener("click", hondjeStilstaan)





