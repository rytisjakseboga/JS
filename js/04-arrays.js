/*
ARRAY
- pozicijos prasideda nuliu
- pozicijos tik sveikieji skaiciai
- ilgis / irasu kiekis -> .lenght
*/



const balai = [10, 5, 8, 6, 9];
console.log('Balai:', balai);

// pazymiu vidurkis
// pazymiu kiekis
// koks maziausias
// koks didziausias
// mediana
// koks pirmas
// koks paskutinis

console.log('Pirmas:', balai[0]);
console.log('Antras:', balai[1]);
console.log('Pirmas:', balai[2]);
console.log('Pirmas:', balai[3]);

//masyvas -> ilgis -> paskutinio pozicija
//[1] -> 1 -> 0
//[1, 2] -> 2 -> 1
//[1, 2, -6] -> 3 -> 2

const baluKiekis = balai.length;
const paskutinioPozicija = baluKiekis -1;
console.log('Paskutinis:', balai[paskutinioPozicija]);
console.log('Paskutinis', balai[balai.length - 1]);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

let index = 0;
console.log(`Cia yra: ${studentai[index++]}.`);