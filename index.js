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

// vienuoliktas div
var pirmas = 7;
var antras = 5;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
               <p>${pirmas} - ${antras} = ${pirmas - antras}</p>
               <p>${pirmas} * ${antras} = ${pirmas * antras}</p>
               <p>${pirmas} / ${antras} = ${pirmas / antras}</p>`;

document.getElementById('vienuolikto-turinys').innerHTML = isvedimui;

// dvyliktas div
function keistiSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva;
}

function keistiDydi(elementas, dydis) {
    document.getElementById(elementas).style.fontSize = dydis + 'px';
}


// tryliktas div
let divKeitimui = document.getElementById('div-keitimui');

let plocioSlider = document.getElementById('plocio-slider');
plocioSlider.oninput = function () {
    divKeitimui.style.width = this.value + 'px';
}

let auksioSlider = document.getElementById('auksio-slider');
auksioSlider.oninput = function () {
    divKeitimui.style.height = this.value + 'px';
}
let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas');
spalvosPasirinkimas.oninput = function () {
    divKeitimui.style.backgroundColor = this.value;
}
let tekstasDivui = document.getElementById('tekstas-divui');
tekstasDivui.oninput = function () {
    divKeitimui.innerHTML = this.value;
}

// keturioliktas div
let tekstasDivui = document.getElementById('tekstas-divui'); // This variable is reused from the previous div. It should be unique or passed. Let's define it locally or ensure the ID is unique.
// Correction: `tekstasDivui` was used for the input, `zodziu-inputas` is the textarea here.

function pridetiZodi(elementas, zodis) {
    document.getElementById(elementas).value += zodis + " "; // Use .value for textarea
}