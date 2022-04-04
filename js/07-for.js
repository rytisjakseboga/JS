/*
LOOP: for, while, for-in, for-of, foreach, ...
*/

const pazymiai = [10, 5, 4, 8, 9,];
let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;
    
    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);


console.log('------------');

for (let i = -80; i < -60; i++) {
    console.log(i);
}