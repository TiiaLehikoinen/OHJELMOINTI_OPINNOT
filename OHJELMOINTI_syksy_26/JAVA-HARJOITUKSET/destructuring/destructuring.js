const asetukset = {
    id: 1,
    teema: 'dark',
    kieli: 'fi'
};

const { teema, kieli } = asetukset;

console.log(teema); 
console.log(kieli); 

const { fonttikoko = 16 } = asetukset;

console.log(fonttikoko); 

const asetukset2 = { fonttikoko: 20 };
const asetukset3 = { fonttikoko: null };

const { fonttikoko: koko2 = 16 } = asetukset2;
const { fonttikoko: koko3 = 16 } = asetukset3;

console.log(koko2); 
console.log(koko3); 

const { id, ...loputAsetukset } = asetukset;

console.log(id);
console.log(loputAsetukset);
