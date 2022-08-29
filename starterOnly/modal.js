function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalbtn = document.getElementById("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalbtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Fonction pour valider le formulaire
function validate() {
  /*if (document.reserve.first.value != "") {
    return true;
  } else {
    alert("Saisissez un prénom valide : 2 caractère minimum");
    return false;
  }*/
  let first = document.forms["reserve"]["first"];
  if (first.value == "") {
    document.getElementById("errorfirst").innerHTML =
      "Veuillez entrez un nom valide";
    first.focus();
    return false;
  } else {
    document.getElementById("errorfirst").innerHTML = "";
  }
}
