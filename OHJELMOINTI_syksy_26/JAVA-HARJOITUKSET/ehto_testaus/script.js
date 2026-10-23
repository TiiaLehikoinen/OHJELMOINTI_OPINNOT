//Ikäraja
let ika = 27; //Syötetty ikä on 27
    if (ika <= 13) { //Jos ikä on pienempi kuin 13
        console.log("Lapsi");//Palauta "lapsi".
    } 
    else if (ika <= 17) { //Muutoin, jos ikä on pienempi kuin 17
        console.log("Nuori");//Palauta "nuori".
    }
    else { //Muutoin
    console.log("Aikuinen"); //Palauta "aikuinen".
    }


//Kirjautuminen
let kirjautunut = true; //Boolean arvo, voi muuttaa
let opettaja = true; //Boolean arvo, voi muuttaa
let admin = false; //Boolean arvo, voi muuttaa

let muokkausOikeus = kirjautunut && (admin || opettaja); // Muokkausoikeus on kirjautuneella yhdessä adminin tai opettajan kanssa.

if (!kirjautunut) { //Jos ei kirjautunut
    console.log("Kirjaudu sisään."); //Palauta: "kirjaudu sisään".
} else if (muokkausOikeus) { // Muutoin, jos muokkausoikeus toteutuu
    console.log("Muokkaus sallittu."); //Palauta "muokkaus sallittu".
} else { // Muutoin
    console.log("Ei muokkausoikeutta."); //Palauta "ei muokkausoikeutta".
}