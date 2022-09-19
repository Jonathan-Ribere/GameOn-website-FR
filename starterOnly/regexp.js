let form = document.querySelector("#formulaire");

// Ecouter la modification de Nom & Prénom
form.first.addEventListener("change", function () {
  validName(this);
});
form.last.addEventListener("change", function () {
  validName(this);
});

// Ecouter la modification de l'Email
form.email.addEventListener("change", function () {
  validMail(this);
});

// Ecouter la modification du nombre de tournoi
form.quantity.addEventListener("change", function () {
  validTournoi(this);
});

//************ Validation Nom & Prenom ************/
const validName = function (inputName) {
  // Création de la reg exp validation du nom & prénom
  let nameRegExp = new RegExp(/^[a-zA-Z\-]{2,}$/);
  let msg;

  // Recuperation de la balise Small
  let small = inputName.nextElementSibling;

  // Test des expression reguliere
  if (nameRegExp.test(inputName.value)) {
    small.innerHTML = "Valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Invalide - minimum de 2 caractères / n'est pas vide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

//************ Validation Tournoi ************/
const validTournoi = function (inputTournoi) {
  // Création de la reg exp validation Tournoi
  let tournoiRegExp = new RegExp(/^(0|[1-9][0-9]?|100)$/);

  // Recuperation de la balise Small
  let small = inputTournoi.nextElementSibling;

  if (tournoiRegExp.test(inputTournoi.value)) {
    small.innerHTML = "Réponse Valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Merci de choisir une réponse entre 0 et 99";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

//************ Validation Email ************/
const validMail = function (inputEmail) {
  // Création de la reg exp validation du nom & prénom
  let emailRegExp = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );

  // Recuperation de la balise Small
  let small = inputEmail.nextElementSibling;

  // Test des expression reguliere
  if (emailRegExp.test(inputEmail.value)) {
    small.innerHTML = "Adresse Email Valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Adresse Email Invalide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// Ecouter la soumission du Formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nom = document.getElementById("last").value;
  let prenom = document.getElementById("first").value;
  let merci = "Merci " + prenom + " pour votre inscription";
  if (
    validName(form.first) &&
    validName(form.last) &&
    validMail(form.email) &&
    validTournoi(form.quantity) &&
    form.checkbox1.checked
  )
    document.getElementById("formulaire").innerHTML = merci;
});

// Function qui affiche le message de remerciment au submit du form
function merci() {
  let nom = document.getElementById("last").value;
  let prenom = document.getElementById("first").value;
  let merci = "Merci," + nom + prenom;

  document.getElementById("formulaire").innerHTML = merci;
  creatBtn();
  <button>No text</button>;
}

const creatBtn = (text = "no text") => {
  const btn = document.createElement("button");
  btn.innerText = text;
  return btn;
};
