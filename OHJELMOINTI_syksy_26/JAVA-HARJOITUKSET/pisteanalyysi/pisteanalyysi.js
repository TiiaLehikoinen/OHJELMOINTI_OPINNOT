const pisteet = [60, 80, 95, 70, 85, 90];

const summa = pisteet.reduce(
    (kertynyt, arvo) => kertynyt + arvo, 0);

console.log('Summa: '+ summa);

const keskiarvo = summa / pisteet.length;
    if (pisteet.length > 0) {
        console.log('Keskiarvo: '+ keskiarvo);
    }
    else {
        console.log('Ei pisteitä, keskiarvoa ei voida laskea.');
    };

const korkeaTulos = pisteet.some(
    p => p >= 95);

console.log('Vähintään tai yli 95 pistettä: '+ korkeaTulos);

const sallitutPisteet = pisteet.every(
    p => p >= 0 && p <= 100);

console.log('Sallitut pisteet: '+ sallitutPisteet);

const Yli70Pistetta = pisteet.filter(
    p => p >= 70);

console.log('Vähintään tai yli 70 pistettä: '+ Yli70Pistetta);
