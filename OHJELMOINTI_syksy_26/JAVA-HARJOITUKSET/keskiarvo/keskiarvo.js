const pisteet = [60,80,95,70,85,90];

let summa = 0; //Luo muuttuja nimeltä summa ja aseta sen alkuarvoksi nolla.

for (let i = 0; i < pisteet.length; i++) { 
    summa += pisteet [i]; //summa = summa + pisteet[i]; Ota summan nykyinen arvo, lisää siihen taulukon nykyisessä indeksissä oleva pistemäärä ja tallenna tulos takaisin summa-muuttujaan.
}
//for on toistorakenne eli silmukka. Se antaa tietokoneelle ohjeen suorittaa samaa koodia toistuvasti tiettyjen sääntöjen mukaisesti.
//Rakenne: for (alustus; ehto; päivitys)
//alustus: luo muuttuja i ja aseta sen alkuarvoksi nolla
//Jatka silmukan suorittamista niin kauan kuin i on pienempi kuin taulukon pisteet alkioiden lukumäärä. Length on 6. i < 6 = Silmukka jatkuu arvoilla 0, 1, 2, 3, 4 ja 5. Kun i saavuttaa arvon 6, ehto ei enää toteudu. Silloin silmukka päättyy.
//päivitys: lisää i:n arvoa yhdellä jokaisen silmukan suorituksen jälkeen. Vastaa: i = i + 1;

if (pisteet.length > 0) {
    const keskiarvo = summa / pisteet.length;
    console.log('summa on: ' + summa);
    console.log('keskiarvo on: ' + keskiarvo);
}
else {
    console.log('Ei pisteitä, keskiarvoa ei voida laskea.');
}