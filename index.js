// pirmas div
document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos anrastes tekstas';
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas';

// antras div
console.log('ANTRAS DIV');
let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML;
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo);
let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerText;
console.log('paimtas su innerText tekstas:', tekstasIsParagrafo2);

// trecias div
console.log('TRECIAS DIV');
console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

// septintas div
function pakeisti() {
    document.getElementById('septinto-tekstas').innerHTML = "naujas tekstas";
}
// astuntas div
function pakeisti2(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas;
}

// devintas div
function kitaSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva;
}
// desimtas div
var pirmas = 8;
var antras = 9;

var suma = pirmas + antras;
var skirtumas = pirmas - antras;
var sandauga = pirmas * antras;
var dalmuo = pirmas / antras;

document.getElementById("suma").innerHTML = pirmas + " + " + antras + " = " + suma;
document.getElementById("skirtumas").innerHTML = pirmas + " - " + antras + " = " + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas + " * " + antras + " = " + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas + " / " + antras + " = " + dalmuo;