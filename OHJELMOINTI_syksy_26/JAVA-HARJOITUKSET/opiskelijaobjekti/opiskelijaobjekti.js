const opiskelija = [{
    nimi: 'Aino',
    ika: 20,
    koulutusala: 'Ohjelmistokehitys',
    aktiivinen: true,

    esittele: function() {
        console.log(`Hei! Olen ${this.nimi}, ${this.ika}-vuotias ja opiskelen alalla ${this.koulutusala}.`);
    }
}];

console.log(opiskelija);

opiskelija[0].ika = 21;
opiskelija[0].pisteet = 82;

console.log(opiskelija);

opiskelija[0].esittele();

opiskelija[0].yhteystiedot = {
    sahkoposti: 'aino@example.com',
    puhelin: '0401234567'
};

console.log(opiskelija[0].yhteystiedot?.sahkoposti);
