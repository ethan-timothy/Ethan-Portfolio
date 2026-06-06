const body = document.querySelector("body");
const colorBtn = document.getElementById("bgcolor");

let isBgColourDarkGrey = true;

function toggleBgColour () {
    body.style.backgroundColor = isBgColourDarkGrey ? "darkgrey" : "white";
    isBgColourDarkGrey = !isBgColourDarkGrey;
}

colorBtn.addEventListener ("click", toggleBgColour);