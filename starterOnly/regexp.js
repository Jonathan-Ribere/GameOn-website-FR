let form = document.querySelector("#formulaire");

// Ecouter la modification de Nom & Prénom
form.first.addEventListener("change", function () {
  validName(this);
});

const validName = function (inputName) {
  // Création de la reg exp validation du nom & prénom
  let nameRegExp = new RegExp(/^[a-zA-Z\-]+$/);

  // Test des expression reguliere
  let testName = nameRegExp.test(inputName.value);
  let small = inputName.nextElementSibling;

  if (testName) {
    small.innerHTML = "Valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHTML = "Invalide";
    small.classList.remove("text-success");
    small.classList.add("text-success");
  }

  console.log(testName);
};
