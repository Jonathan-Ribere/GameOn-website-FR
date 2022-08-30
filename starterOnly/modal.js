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

//////////////////////////////////////////////////////////////////////////
// Fonction pour valider le formulaire

function errorMessage() {
  e.preventDefault();
  let error = document.getElementById("error");
  if (isNaN(document.getElementById("first").value)) {
    error.innerHTML = "<span style='color: red;'>" + "Nom invalide</span>";
  } else {
    error.innerHTML = "";
  }
}

/*
let contactForm = document.getElementById("formContact");
 

contactForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    fields.forEach((field) => {
      resetField(field);
    });
    let valid = true;

    fields.forEach((field) => {
      if (!validateField(field)) {
        valid = false;
      }
    });
    if (valid) {
      e.target.submit();
    }
  },
  false
);

function validateField(field) {
  if (field.checkValidity()) {
    return true;
  } else {
    field.classList.add("invalid");
    field.previousElementSibling.insertAdjacentHTML(
      "beforeend",
      `<span class="msg">${field.validationMessage}</span>`
    );
    return false;
  }
}

function resetField(field) {
  let fieldLabel = field.previousElementSibling;
  field.classList.remove("invalid");
  while (fieldLabel.firstElementChild) {
    fieldLabel.removeChild(fieldLabel.firstElementChild);
  }
  field.valid = true;
}
*/
