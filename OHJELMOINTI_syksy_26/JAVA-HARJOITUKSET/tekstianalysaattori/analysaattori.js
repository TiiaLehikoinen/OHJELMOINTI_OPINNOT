// Muuttujat
const analysoitavaTeksti = document.querySelector("#analysoitava-teksti");
const analyysiNappi = document.querySelector("#analyysi-nappi");

const merkkienMaara = document.querySelector("#merkkien-maara");
const sanojenMaara = document.querySelector("#sanojen-maara");
const loytyykoSana = document.querySelector("#loytyyko-sana");
const upperCased = document.querySelector("#upper-case");
const lowerCased = document.querySelector("#lower-case");
const ensimmaisetMerkit = document.querySelector("#ensimmaiset-merkit");

 //URL slug
const urlOtsikko = 'Tämä on yksinkertainen tekstianalysaatio harjoitus';
const slug = urlOtsikko.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, "-");
console.log(`URL slug: ${slug}`);

//Kuuntelijat:
analyysiNappi.disabled = true;
let kayttajaHavaittu = false;

analysoitavaTeksti.addEventListener('input', () => {
    kayttajaHavaittu = true;
    analyysiNappi.disabled = false; 
    console.log('Käyttäjä havaittu testikentässä!');
}); 
analyysiNappi.addEventListener('click', () => {
    if(kayttajaHavaittu === true) { 
        const tulos = siivottuTeksti();
    
            if(tulos === undefined) {
                return;
            }

        const tekstiVersioYksi = tulos.ilmanValilyonteja;
        const tekstiVersioKaksi = tulos.ilmanMerkkeja;

        //Käyttäjälle
        merkkienMaara.textContent = tekstiVersioYksi.length;
        lowerCased.textContent = tekstiVersioYksi.toLowerCase();
        upperCased.textContent = tekstiVersioYksi.toUpperCase();
    }
});


//Syötteen haku
function haetaanSyote () {
    const teksti = analysoitavaTeksti.value;

    if(teksti.trim().length === 0) { 
        alert('Syötä analysoitava teksti!');
        return; 
    }
    else { 
        console.log('Analyysi aloitettu!');
        return teksti;
    }
};

    
//Syötteen siivous
const siivottuTeksti =
    function siivotaan () {
        const syote = haetaanSyote();

            if(syote === undefined) {
                return;
            }

            const siivottuTekstiValilyonnit = function poistetaanValilyonnit () {
                const valilyonnitTasattu = syote.trim().replace(/\s+/g, " ");
                console.log(`Syötteestä poistettu välilyönnit alusta ja lopusta sekä jokainen yli yhden välilyönnin kohta korvataan vain yhdellä välilyönnillä. TULOS: ${valilyonnitTasattu}`);  
                return valilyonnitTasattu;
            };
            const siivottuTekstiMerkit = function poistetaanMerkit () {
                const tekstiIlmanValilyontejaTaiMerkkeja = syote.replace(/[.,!?;:]/g, '').trim(); //.replace(haettava, korvaava); Metodien ketjuttaminen
                console.log(`Syötteestä poistettu [.;!?;:] merkit ja poistettu alusta ja lopusta välilyönnit. TULOS: ${tekstiIlmanValilyontejaTaiMerkkeja}`);
                return tekstiIlmanValilyontejaTaiMerkkeja;
            };
    return {
        ilmanValilyonteja: siivottuTekstiValilyonnit(), 
        ilmanMerkkeja: siivottuTekstiMerkit()
    }
};
    

/*

    //taulukoksi
    const taulukkoSanoista = tekstiIlmanValilyontejaTaiMerkkeja.split(/\s+/); // säännöllinen lauseke (Regular Expression)
    sanojenMaara.textContent = taulukkoSanoista.length 
    console.log(`Taulukko sanoista (aka. sanojen määrä): ${taulukkoSanoista}`); 

    const taulukkoSanoistaLowerCase = taulukkoSanoista.map(sana => sana.toLowerCase());
    const taulukkoSanoistaUpperCase = taulukkoSanoista.map(sana => sana.toUpperCase());


    //includes
    const haettavatSanat = ['onnellinen', 'surullinen', 'tyytyväinen', 'ärtynyt', 'neutraali'];

    function etsi () {
        for (const sana of taulukkoSanoista) {
            if (haettavatSanat.includes(sana.toLowerCase())) { // Huomaamaton haku kun includes:in tarkkuus kirjainkoossa ohitetaan .toLowerCase tai .toUpperCase
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
    const merkit = siivottuTeksti.slice(0, 20);
    ensimmaisetMerkit.textContent = `${merkit}...`;
    console.log(`ensimmäiset 20 merkkiä ovat: ${merkit}`);

   

    //SANOJEN ESIINTYMINEN
    const sana = 'Onnellinen';
    const loytyneetSanat = [];

    for(const haettavaSana of taulukkoSanoista) {
        if(haettavaSana.toLowerCase() === sana.toLowerCase()) {
            loytyneetSanat.push(haettavaSana);
        }
    };
    if(loytyneetSanat.length === 0) {
        console.log(`Etsittävää sanaa: ${sana} ei löytynyt`);
    } 
    else(console.log(`${sana} on haettu ja löytynyt!`));
    
    let summa = 0;
    for(let i = 0; i <= loytyneetSanat.length -1; i = i + 1) {
        summa += 1;
    };
    console.log(`Onnelisuus mainittiin: ${summa} kertaa!`);
    */





