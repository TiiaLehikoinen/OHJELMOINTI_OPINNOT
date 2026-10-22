//Simple hello and calc
console.log("Hello, I am Tiia Lehikoinen");
console.log("JavaScript works!");
console.log(2+3/2*10);

document.getElementById("output").textContent =
    "Hello, I am Tiia Lehikoinen\n";

document.getElementById("second-output").textContent =
    "JavaScript works!\n";

document.getElementById("calc").textContent =
    (2+3/2*10);

//Price of a product
const product = "Trip to Mars";
const price = "3999";
let amount = 2;
let totalPrice = Number(price);
totalPrice *= 2;
console.log(`Product: ${product}\ntotal: ${totalPrice} €`);

document.getElementById("trip-to-mars").textContent =
    "Trip to Mars\n";

document.getElementById("price").textContent = 
    "3999\n";

document.getElementById("chosen-amount").textContent =
    "2\n" + "x";

document.getElementById("total-price").textContent =
    totalPrice + " €\n";

//LASKUT
console.log("Aletaan laskea!");

//Ohjelma, joka laskee kaksi lukua yhteen ja tulostaa summan
lukuA = 1;
lukuB = 9;
summa = lukuA + lukuB;
console.log("Lukujen " + lukuA + " ja " + lukuB + " summa = " + summa);

//Ohjelma, joka laskee kahden luvun erotuksen ja tulostaa sen
lukuX = 4;
lukuY = 2;
erotus = lukuX - lukuY; 
console.log("Lukujen " + lukuX + " ja " + lukuY + " erotus = " + erotus);

//Ohjelma, joka laskee kahden luvun tulon ja tulostaa sen
lukuC = 2;
lukuD = 10;
tulo = lukuC * lukuD;
console.log("Lukujen " + lukuC + " ja " + lukuD + " tulo = " + tulo);

//Ohjelma, joka laskee kahden luvun osamäärän ja tulostaa sen
lukuE = 20;
lukuF = 4;
osamaara = lukuE / lukuF;
console.log("Lukujen " + lukuE + " ja " + lukuF + " osamäärä = " + osamaara);

//Ohjelma, joka muuntaa Celsius-asteet Fahrenheiteiksi
LukuCelsius = 20;
farenheit = (LukuCelsius * 1.8 + 32);
console.log(LukuCelsius + " Celsiusta = " + farenheit + "F");

//Ohjelma, joka muuntaa Fahrenheit-asteet Celsiuksiksi
LukuFarenheit = 20;
celcius = ((LukuFarenheit - 32) / 1.8);
console.log(LukuFarenheit + " Farenheittia = " + celcius + "C");

//Ohjelma, joka muuntaa mailit kilometreiksi
LukuMaili = 100;
kilometri = (LukuMaili * 1.609344);
console.log(LukuMaili + " mailia = " + kilometri + " kilometriä");

//Ohjelma, joka muuntaa kilometrit maileiksi
LukuKilometri = 100;
maili = (LukuKilometri / 1.609344);
console.log(LukuKilometri + " kilometriä = " + maili + " mailia");

//Ohjelma, joka muuntaa tuumat senteiksi
LukuTuuma = 100;
senttimetri = (LukuTuuma * 2.54);
console.log(LukuTuuma + " tuumaa = " + senttimetri + " senttimetriä");

//Ohjelma, joka muuntaa sentit tuumiksi
LukuSenttimetri = 160;
tuuma = (LukuSenttimetri / 2.54);
console.log(LukuSenttimetri + " senttimetriä = " + tuuma + " tuumaa");

//Ohjelma, joka muuntaa yardit metreiksi
LukuYard = 10;
metri = (LukuYard * 0.9144);
console.log(LukuYard + " yaardia = " + metri + " metriä");

//Ohjelma, joka muuntaa metrit yardeiksi
LukuMetri = 10;
yard = (LukuMetri / 0.9144);
console.log(LukuMetri + " metriä = " + yard + " yaardia");

//FUNKTIOT
//summafunktio
function summafunktio(a, b) {
    console.log("Lukujen " + a + " ja " + b + " summa on " + (a+b));
}
summafunktio(99, 1);

//Ympyrän pinta-ala
pii = 3.1415;
function ympyranAla(sade) {
    console.log("Ympyrän pinta-ala on " + (sade * sade * pii) + " kun säde on: " + sade);
}
ympyranAla(2);

//MUUNNOS
function muunnaVuosiksi(paivat) {
    let vuodet = parseInt(paivat /365);
    let kuukaudet = parseInt((paivat % 365) / (365 / 12));
    let pvt = parseInt((paivat % 365) - kuukaudet * (365 / 12));
    console.log(paivat + " päivää on " + vuodet + " vuotta " + kuukaudet + " kuukautta ja " + pvt + " päivää.");
}
muunnaVuosiksi(30000);

//IF ELSE
//Ohjelma, joka etsii kahdesta luvusta suuremman
function suurempi(x, y) {
    if (x > y) {
        console.log("Suurempi luku on " + x);
    }
    else if (y > x) {
        console.log("Suurempi luku on " + y);
    }
    else {
        console.log("Luvut ovat yhtäsuuret");
    }
}
suurempi(10, 10);
//1. tarkistaa if kohdan 2. tarkistaa else if kohdan 3. tarkistaa else kohdan.