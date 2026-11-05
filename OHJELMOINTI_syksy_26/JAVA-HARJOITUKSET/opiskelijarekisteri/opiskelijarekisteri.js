const opiskelijat = [
    {id: 1,nimi: 'Aino', pisteet: 82, status: 'aktiivinen'},
    {id: 2, nimi: 'Mika', pisteet: 64, status: 'ei aktiivinen'},
    {id: 3, nimi: 'Sara', pisteet: 78, status: 'aktiivinen'},
    {id: 4, nimi: 'Tiia', pisteet: 99, status: 'aktiivinen'},
    {id: 5, nimi: 'Emma', pisteet: 52, status: 'ei aktiivinen'}
];

const aktiivisetOpiskelijat = opiskelijat
    .filter(opiskelija => opiskelija.status === 'aktiivinen')
    .map(opiskelija => opiskelija.nimi);

console.log(aktiivisetOpiskelijat);

const aktiivistenPisteet = opiskelijat
    .filter(opiskelija => opiskelija.status === 'aktiivinen')
    .map(opiskelija => opiskelija.pisteet);

console.log(aktiivistenPisteet);

const aktiivistenYhteispisteet = aktiivistenPisteet
    .reduce((kertynyt, arvo) => kertynyt + arvo, 0);

console.log('Yhteispisteet aktiivisilla opiskelijoilla: ' + aktiivistenYhteispisteet);

const aktiivistenKeskiarvo = aktiivistenYhteispisteet / aktiivistenPisteet.length;
    if (aktiivistenPisteet.length > 0) {
        console.log('Keskiarvo: ' + aktiivistenKeskiarvo)
    }
    else {
        console.log('Ei aktiivisia opiskelijoita');
    };

const tunnus = opiskelijat
    .filter(opiskelijat => opiskelijat.id === 4)
    .map(opiskelijat => opiskelijat.nimi);

console.log(tunnus);

const suuriTunnus = opiskelijat
    .filter(opiskelijat => opiskelijat.id >= 10)
    .map(opiskelijat => opiskelijat.nimi);
        if (suuriTunnus.length > 0) {
            console.log(suuriTunnus)
        }
        else {
            console.log('Ei opiskelijoita, joilla on tunnus on yhtä suuri tai suurempi kuin 10.')
        };

const tunnukset = opiskelijat
    .filter(opiskelijat => opiskelijat.id >= 0 && opiskelijat.id <= 10)
    .map(opiskelijat => opiskelijat.nimi + ': ' + opiskelijat.id);

console.log(tunnukset);

const findPisteet = opiskelijat
    .find(opiskelijat => opiskelijat.pisteet >= 90);

console.log(findPisteet);


