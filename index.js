// Pirmas div
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
let pirmas1 = 8;
let antras2 = 9;

let suma = pirmas1 + antras2;
let skirtumas = pirmas1 - antras2;
let sandauga = pirmas1 * antras2;
let dalmuo = pirmas1 / antras2;

document.getElementById("suma").innerHTML = pirmas1 + " + " + antras2 + " = " + suma;
document.getElementById("skirtumas").innerHTML = pirmas1 + " - " + antras2 + " = " + skirtumas;
document.getElementById("sandauga").innerHTML = pirmas1 + " * " + antras2 + " = " + sandauga;
document.getElementById("dalmuo").innerHTML = pirmas1 + " / " + antras2 + " = " + dalmuo;

// vienuoliktas div
let pirmas = 7;
let antras = 5;

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
plocioSlider.oninput = function() {
    divKeitimui.style.width = this.value + 'px';
}

let auksioSlider = document.getElementById('aukscio-slider');
auksioSlider.oninput = function() {
    divKeitimui.style.height = this.value + 'px';
}

let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas');
spalvosPasirinkimas.oninput = function() {
    divKeitimui.style.backgroundColor = this.value;
}

let tekstasDivui = document.getElementById('tekstas-divui');
tekstasDivui.oninput = function() {
    divKeitimui.innerHTML = this.value;
}

// keturioliktas div
function pridetiZodi(elementas, zodis) {
    document.getElementById(elementas).value += zodis + ' ';
}

// penkioliktas div
function zodziuKiekis() {
    let tekstas = document.getElementById('penkiolikto-tekstas').value;
    let zodziai = tekstas.trim().split(' '); // .trim() to remove leading/trailing spaces, .split() to create array
    let zodziuKiekis = zodziai.filter(word => word.length > 0).length; // Filter out empty strings from multiple spaces

    document.getElementById('penkiolikto-atsakymai').innerHTML = `<p>Žodžių kiekis: ${zodziuKiekis}</p>`;
}
function ilgiausiasZodis() {
    let tekstas = document.getElementById('penkiolikto-tekstas').value;
    let zodziai = tekstas.trim().split(' ');
    let ilgiausias = '';

    for (let zodis of zodziai) {
        if (zodis.length > ilgiausias.length) {
            ilgiausias = zodis;
        }
    }
    document.getElementById('penkiolikto-atsakymai').innerHTML += `<p>Ilgiausias žodis: ${ilgiausias}</p>
    <p>Jo ilgis: ${ilgiausias.length} simbolių.</p>`;
}