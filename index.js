//----------***BURGER-MENU----------

function burgerMenu() {
  var burgerMenuSec = document.getElementById("burger-menu-sec");

  if (burgerMenuSec.style.display === "block") {
    burgerMenuSec.style.display = "none";
  } else {
    burgerMenuSec.style.display = "block";
  }
}

//----------BURGER-MENU***----------

//----------***BMI-CALCULATING----------

function calculateBMI() {
  var calculateForm = document.getElementById("calculate-form"),
    kg = document.getElementById("kg").value,
    cm = document.getElementById("cm").value,
    result = document.getElementById("result"),
    numberCM = parseInt(cm),
    numberKG = parseInt(kg);

  if (cm === null || kg === "") {
    result.innerHTML = "please enter number!";

    setTimeout(() => {
      result.textContent = "";
    }, 5000);
    return;
  }
  var calculateCM = numberCM / 100;
  var bmi = Math.round(numberKG / (calculateCM * calculateCM));

  console.log(numberKG, " + ", numberCM, calculateCM);
  console.log(numberKG / (calculateCM * calculateCM));

  if (bmi < 18.5) {
    result.innerHTML = "You are skinny!";
  } else if (bmi <= 25 && bmi >= 18.5) {
    result.innerHTML = "You are healthy!";
  } else {
    result.innerHTML = "You are overweighted!";
  }
}

//----------BMI-CALCULATING***----------
