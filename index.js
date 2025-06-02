// first div
document.getElementById('first-title').innerHTML = 'New first title text';
document.getElementById('first-paragraph').innerHTML = 'New changed first paragraph text';

// second div
console.log('SECOND DIV');
let textFromParagraph = document.getElementById('paragraph-text').innerHTML;
console.log('taken with innerHTML text:', textFromParagraph);
let textFromParagraph2 = document.getElementById('paragraph-text').innerText;
console.log('taken with innerText text:', textFromParagraph2);

// third div
console.log('THIRD DIV');
console.log('innerHTML content:', document.getElementById('third').innerHTML);
console.log('innerText content:', document.getElementById('third').innerText);

// seventh div
function changeText() {
    document.getElementById('seventh-text').innerHTML = "new text";
}
// eighth div
function changeText2(element, text) {
    document.getElementById(element).innerHTML = text;
}

// ninth div
function changeColor(element, color) {
    document.getElementById(element).style.color = color;
}
// tenth div
var first = 8;
var second = 9;

var sum = first + second;
var difference = first - second;
var product = first * second;
var quotient = first / second;

document.getElementById("sum").innerHTML = first + " + " + second + " = " + sum;
document.getElementById("difference").innerHTML = first + " - " + second + " = " + difference;
document.getElementById("product").innerHTML = first + " * " + second + " = " + product;
document.getElementById("quotient").innerHTML = first + " / " + second + " = " + quotient;

// eleventh div
var first = 7;
var second = 5;

let output = `<p>${first} + ${second} = ${first + second}</p>
               <p>${first} - ${second} = ${first - second}</p>
               <p>${first} * ${second} = ${first * second}</p>
               <p>${first} / ${second} = ${first / second}</p>`;

document.getElementById('eleventh-content').innerHTML = output;

// twelfth div
function setColor(element, color) {
    document.getElementById(element).style.color = color;
}

function setFontSize(element, size) {
    document.getElementById(element).style.fontSize = size + 'px';
}


// thirteenth div
let divToChange = document.getElementById('div-to-change');

let widthSlider = document.getElementById('width-slider');
widthSlider.oninput = function () {
    divToChange.style.width = this.value + 'px';
}

let heightSlider = document.getElementById('height-slider');
heightSlider.oninput = function () {
    divToChange.style.height = this.value + 'px';
}
let colorPicker = document.getElementById('color-picker');
colorPicker.oninput = function () {
    divToChange.style.backgroundColor = this.value;
}
let textForDiv = document.getElementById('text-for-div');
textForDiv.oninput = function () {
    divToChange.innerHTML = this.value;
}

// fourteenth div
// Correction: `textForDiv` was used for the input, `words-input` is the textarea here.

function addWord(element, word) {
    document.getElementById(element).value += word + " "; // Use .value for textarea
}
// fifteenth div
function wordCount() {
    let text = document.getElementById('fifteenth-text').value;
    let words = text.trim().split(' '); // .trim() to remove leading/trailing spaces, .split() to create array
    let wordCount = words.filter(word => word.length > 0).length; // Filter out empty strings from multiple spaces

    document.getElementById('fifteenth-answers').innerHTML = `<p>Word count: ${wordCount}</p>`;
}
function longestWord() {
    let text = document.getElementById('fifteenth-text').value;
    let words = text.trim().split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    document.getElementById('fifteenth-answers').innerHTML += `<p>Longest word: ${longest}</p>
    <p>Its length: ${longest.length} characters.</p>`;
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