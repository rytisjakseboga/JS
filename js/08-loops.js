/*
LOOP: for, while, for-in, for-of, foreach, ...
OBJECT-LOOP:
*/

const pazymiai = [10, 5, 4, 8, 9,];
let suma = 0;

for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymys = pazymiai[i1];
    suma += pazymys;
    
    console.log(`${i1}) pazymys ${pazymys} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);


console.log('------------');

for (let i = -80; i < -60; i++) {
    console.log(i);
}

//WHILE

let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile += pazymys;
    
    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;
}

//FOR-OF
console.log('--------------')
let sumaForOf = 0;
let i3 = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOf}]`);
}

//FOREACH
console.log('----------');
let sumeForEach = 0;
pazymiai.forEach((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForOf}]`);
});