const tuotteet = [
    { id: 1, nimi: 'Näyttö', hinta: 499.99, saldo: 5 },
    { id: 2, nimi: 'Hiiri', hinta: 25.99, saldo: 10 },
    { id: 3, nimi: 'Näppäimistö', hinta: 49.99, saldo: 0 },
    { id: 4, nimi: 'Kuulokkeet', hinta: 99.99, saldo: 3 }
];

const tuotePieni = tuotteet.find(tuote => tuote.id === 2);
    if (tuote === undefined) {
        console.log(`Tuotetta ei löytynyt.`);
    } else {
        console.log(tuotePieni);
};

const tuoteSuuri = tuotteet.find(tuote => tuote.id === 99);
    if (tuote === undefined) {
        console.log(`Tuotetta ei löytynyt.`);
    } else {
        console.log(tuoteSuuri);
};

const uusiHinta = tuotteet.map(tuote => {
    if (tuote.id === 2) {
        return { ...tuote, hinta: 19.90 };
    }

    return { ...tuote };
});

console.log(uusiHinta);

