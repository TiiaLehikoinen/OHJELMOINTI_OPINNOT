const nimet = ['Sara','Aino','Mika'];

console.log('Alkuperäiset nimet: ' + nimet);
console.log(nimet.push('Oskari'));
console.log('Yksi nimi lisätty: ' + nimet);

console.log(nimet.includes('Aino'));
    if (nimet.includes('Aino')) {
        console.log('Aino löytyy listasta');
    }
    else {
        console.log('Ainoa ei löydy listasta');
    }

console.log(nimet.includes('Leevi'));
    if (nimet.includes('Leevi')) {
        console.log('Leevi löytyy listasta');
    }
    else {
        console.log ('Leevi ei löydy listasta');
    }

console.log (nimet.indexOf('Aino')!== -1
? 'Aino löytyy listasta komennolla indexOf' 
: 'Aino ei löydy listasta(indexOf)');

console.log (nimet.indexOf('Leevi')!== -1
? 'Leevi löytyy listasta komennolla indexOf' 
: 'Leevi ei löydy listasta(indexOf)');