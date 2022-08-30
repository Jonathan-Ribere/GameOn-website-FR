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

// Ecouter la soumission du Formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validName(form.first) && validName(form.last) && validMail(form.email)) {
    form.submit();
  }
});

//************ Validation Nom & Prenom ************/
const validName = function (inputName) {
  // Création de la reg exp validation du nom & prénom
  let nameRegExp = new RegExp(/^[a-zA-Z\-]+$/);
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
    small.classList.add("text-success");
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
    small.classList.add("text-success");
    return false;
  }
};
