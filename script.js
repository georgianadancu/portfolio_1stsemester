var coll = document.getElementById("btn");
var i;


let btn = document.querySelector("#btn")
let contact = document.querySelector(".contact")
let formSection = document.querySelector(".form-section")

btn.addEventListener("click", function () {
    contact.classList.add("show")
    btn.classList.add("hide")
    formSection.style.height = "auto"
});
