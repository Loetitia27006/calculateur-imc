
function IMC(){
    var poids = document.getElementById("poids").value;
    var taille = document.getElementById("taille").value;
    var imc = poids / (taille * taille);
    imc = imc.toFixed(2);

if(imc < 16){
    document.getElementById("result2").innerHTML = "risque  famine";
}
else if(imc < 18.5){
    document.getElementById("result2").innerHTML = "vous êtes en maigreur";
}
else if(imc < 25){
    document.getElementById("result2").innerHTML = "vous êtes en corpulence normale";
}
else if(imc < 30){
    document.getElementById("result2").innerHTML = "vous êtes en surpoids";
}
else if(imc < 35){
    document.getElementById("result2").innerHTML = "vous êtes en obésité modérée";
}
else if(imc < 40){
    document.getElementById("result2").innerHTML = "vous êtes en obésité sévère";
}
else{
    document.getElementById("result2").innerHTML = "vous êtes en obésité morbide";
}
document.getElementById("result").innerHTML = "votre imc est de " + imc;
    

}

