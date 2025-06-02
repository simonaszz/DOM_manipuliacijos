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
plocioSlider.oninput = function () {
    divKeitimui.style.width = this.value + 'px';
}

let auksioSlider = document.getElementById('aukscio-slider');
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
// tryliktas div (continued)
let tekstoSpalvosPasirinkimas = document.getElementById('teksto-spalvos-pasirinkimas');
tekstoSpalvosPasirinkimas.oninput = function () {
    divKeitimui.style.color = this.value; // Change text color
}

// keturioliktas div
function pridetiZodi(elementas, zodis) {
    document.getElementById(elementas).value += zodis + ' ';
}

// penkioliktas div
function trumpiausiasZodis() {
    let tekstas = document.getElementById('penkiolikto-tekstas').value;
    let zodziai = tekstas.trim().split(' ').filter(word => word.length > 0);

    if (zodziai.length === 0) {
        document.getElementById('penkiolikto-atsakymai').innerHTML += `<p>Nėra žodžių.</p>`;
        return;
    }

    let trumpiausias = zodziai[0]; // Start with the first word

    for (let i = 1; i < zodziai.length; i++) {
        if (zodziai[i].length < trumpiausias.length) {
            trumpiausias = zodziai[i];
        }
    }
    document.getElementById('penkiolikto-atsakymai').innerHTML += `<p>Trumpiausias žodis: ${trumpiausias}</p>
    <p>Jo ilgis: ${trumpiausias.length} simbolių.</p>`;
}
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

// sesioliktas div
let pirmoSkirtukoTurinysElem = document.getElementById('pirmas-skirtukas');
let antroSkirtukoTurinysElem = document.getElementById('antras-skirtukas');

function pirmoSkirtukoTurinys() {
    pirmoSkirtukoTurinysElem.style.display = 'block';
    antroSkirtukoTurinysElem.style.display = 'none';
}

function antroSkirtukoTurinys() {
    antroSkirtukoTurinysElem.style.display = 'block';
    pirmoSkirtukoTurinysElem.style.display = 'none';
}

// septynioliktas div
let perjungtiMygtukas = document.getElementById('perjungti-mygtukas');
let perjungtiTekstas = document.getElementById('perjungti-tekstas');

perjungtiMygtukas.onclick = function () {
    if (this.innerHTML === "Rodyti") {
        this.innerHTML = "Nerodyti";
        perjungtiTekstas.style.display = "block";
    } else {
        this.innerHTML = "Rodyti";
        perjungtiTekstas.style.display = "none";
    }
}

// astuonioliktas div
let kitasPerjungtiMygtukas = document.getElementById('kitas-perjungti-mygtukas');
let kitasPerjungtiTekstas = document.getElementById('kitas-perjungti-tekstas');

kitasPerjungtiMygtukas.onclick = function () {
    if (this.innerHTML === "Rodyti") {
        this.innerHTML = "Nerodyti";
        kitasPerjungtiTekstas.style.display = 'block';
    } else {
        this.innerHTML = "Rodyti";
        kitasPerjungtiTekstas.style.display = 'none';
    }
}

// devynioliktas div
let devynioliktoTekstas = document.getElementById('devyniolikto-tekstas');
devynioliktoTekstas.onclick = function () {
    this.style.display = 'none';
}



// Papildoma užduotis 3
function styleLongParagraphs() {
    let textBlocks = document.getElementsByClassName('text-block');
    for (let i = 0; i < textBlocks.length; i++) {
        if (textBlocks[i].innerText.length > 100) {
            textBlocks[i].classList.add('highlight-long');
        } else {
            textBlocks[i].classList.remove('highlight-long'); // Remove if it was highlighted before
        }
    }
}


// Papildoma užduotis 4
function atliktiSkaiciavimus() {
    let skaicius1 = parseFloat(document.getElementById('skaicius1').value);
    let skaicius2 = parseFloat(document.getElementById('skaicius2').value);
    let rezultataiDiv = document.getElementById('skaiciavimu-rezultatai');

    if (isNaN(skaicius1) || isNaN(skaicius2)) {
        rezultataiDiv.innerHTML = '<p style="color: red;">Prašome įvesti galiojančius skaičius.</p>';
        return;
    }

    let suma = skaicius1 + skaicius2;
    let skirtumas = skaicius1 - skaicius2;
    let sandauga = skaicius1 * skaicius2;
    let dalmuo = skaicius2 !== 0 ? skaicius1 / skaicius2 : 'Dalyba iš nulio negalima';

    rezultataiDiv.innerHTML = `
        <p>Suma: ${skaicius1} + ${skaicius2} = ${suma}</p>
        <p>Skirtumas: ${skaicius1} - ${skaicius2} = ${skirtumas}</p>
        <p>Sandauga: ${skaicius1} * ${skaicius2} = ${sandauga}</p>
        <p>Dalmuo: ${skaicius1} / ${skaicius2} = ${dalmuo}</p>
    `;
}

// Papildoma užduotis 5
function toggleModal() {
    let modal = document.getElementById('myModal');
    if (modal.style.display === "flex") { // Check current display state
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
    }
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}