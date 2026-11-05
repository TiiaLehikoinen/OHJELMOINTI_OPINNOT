const tuotteet = [
    {nimi: 'Näyttö', hinta: 199.99, saldo: 0},
    {nimi: 'Hiiri', hinta: 29.99, saldo: 10},
    {nimi: 'Näppäimistö', hinta: 49.99, saldo: 5},
];

const saatavillaOlevatTuotteet = tuotteet
    .filter(tuote => tuote.saldo > 0)
    .map(tuote => tuote.nimi);

console.log(saatavillaOlevatTuotteet);

//const verollinenHinta = saatavillaOlevatTuotteet
    //.map(tuote => (tuote.hinta * 1.255));
    