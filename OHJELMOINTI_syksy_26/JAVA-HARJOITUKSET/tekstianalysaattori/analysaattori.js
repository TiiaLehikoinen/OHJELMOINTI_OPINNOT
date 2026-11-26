// Muuttujat
const analysoitavaTeksti = document.querySelector("#analysoitava-teksti");
const analyysiNappi = document.querySelector("#analyysi-nappi");

const merkkienMaara = document.querySelector("#merkkien-maara");
const sanojenMaara = document.querySelector("#sanojen-maara");
const loytyykoSana = document.querySelector("#loytyyko-sana");
const upperCased = document.querySelector("#upper-case");
const lowerCased = document.querySelector("#lower-case");
const ensimmaisetMerkit = document.querySelector("#ensimmaiset-merkit");

//ANALYYSI
analyysiNappi.addEventListener('click', () => { /*'click' määrittelee tapahtumatyypin jota kuunnellaan. Muita vaihtoehtojo on: 'dblclick' (Elementtiä kaksoisklikataan), 'mouseenter' (Hiiren osoitin siirtyy elementin päälle), 'mouseleave' (Hiiren osoitin poistuu elementin päältä), 'keydown' (Näppäimistön näppäintä painetaan), 'input' (Käyttäjä muuttaa syötekentän sisältöä) & 'submit' (Lomake lähetetään)*/
    
    const teksti = analysoitavaTeksti.value;
    
    if (teksti.trim().length === 0) { //Jos analysoitava teksti on tyhjä, niin näytetään alert-viesti
        alert('Syötä analysoitava teksti!');
        return; 
    }
    else {
        console.log('Analyysi aloitettu!');
    }

    //Jatketaan koodin suoritusta...

    //trimmaus ja siivous
    const trimmattuTeksti = teksti.trim(); 
    merkkienMaara.textContent = trimmattuTeksti.length;
    console.log(`Siivottu teksti (aka. merkkien määrä): ${trimmattuTeksti}`);

    const replacedTeksti = teksti.replace(/[.,!?;:]/g, '').trim(); //.replace(haettava, korvaava); Metodien ketjuttaminen

    
    //lower ja upper case
    const lowerCasing = trimmattuTeksti.toLowerCase();
    console.log(`Syöte pienillä kirjaimilla: ${lowerCasing}`);
    lowerCased.textContent = lowerCasing;

    const upperCasing = trimmattuTeksti.toUpperCase();
    console.log(`Syöte isoilla kirjaimilla: ${upperCasing}`);
    upperCased.textContent = upperCasing;


    //taulukoksi
    const taulukkoSanoista = replacedTeksti.split(/\s+/); // säännöllinen lauseke (Regular Expression)
    sanojenMaara.textContent = taulukkoSanoista.length 
    console.log(`Taulukko sanoista (aka. sanojen määrä): ${taulukkoSanoista}`); 

    const taulukkoSanoistaLowerCase = taulukkoSanoista.map(sana => sana.toLowerCase());
    const taulukkoSanoistaUpperCase = taulukkoSanoista.map(sana => sana.toUpperCase());


    //includes
    const haettavatSanat = ['onnellinen', 'surullinen', 'tyytyväinen', 'ärtynyt', 'neutraali'];

    function etsi () {
        for (const sana of taulukkoSanoista) {
            if (haettavatSanat.includes(sana.toLowerCase())) {
                loytyykoSana.textContent = sana;
                console.log('löytyy maininta mielialasta');
                return;
            }
        }
        loytyykoSana.textContent = '-';
        console.log('ei löydy mainintaa mielialasta.');
    }
    etsi();

    //ensimmäiset 20 merkkiä...
    const merkit = trimmattuTeksti.slice(0, 20);
    ensimmaisetMerkit.textContent = `${merkit}...`;
    console.log(`ensimmäiset 20 merkkiä ovat: ${merkit}`);
});