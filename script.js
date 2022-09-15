function IMC() {
  var poids = parseInt(document.getElementById("poids").value);
  var taille = parseInt(document.getElementById("taille").value);
  var imc = (poids / ((taille * taille) / 10000)).toFixed(2);

  if (imc < 16) {
    document.getElementById("result2").innerHTML =
      "vous etes en dessous du seuil de maigreur";
  } else if (imc < 18.5) {
    document.getElementById("result2").innerHTML = "vous êtes  maigre";
  } else if (imc < 25) {
    document.getElementById("result2").innerHTML =
      "vous êtes en corpulence normale";
  } else if (imc < 30) {
    document.getElementById("result2").innerHTML = "vous êtes en surpoids";
  } else if (imc < 35) {
    document.getElementById("result2").innerHTML =
      "vous êtes en obésité modérée";
  } else if (imc < 40) {
    document.getElementById("result2").innerHTML =
      "vous êtes en obésité sévère";
  } else {
    document.getElementById("result2").innerHTML =
      "vous êtes en obésité morbide";
  }
  document.getElementById("result").innerHTML = "votre imc est de " + imc;
}
