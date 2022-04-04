/*
Visi mokiniai turi TIK 4 pazymius ir reikia suskaiciuoti vidurki.
*/

const Petras = [10, 5, 6, 8];
const Jonas = [9, 4, 6, 9];
const Rugile = [10, 9, 7, 8];
const Joana = [8, 6, 6, 7];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(Petras);
console.log('Petras:', petroVidurkis);

const jonoVidurkis = vidurkis(Jonas);
console.log('Jonas:', jonoVidurkis);

const rugilesVidurkis = vidurkis(Rugile);
console.log('Rugile:', rugilesVidurkis);

const joanosVidurkis = vidurkis(Joana);
console.log('Joana:', joanosVidurkis);

/*
Funcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [v] ir vardas sudarytas is [5] raidziu." 
*/

function vardoAnalize(name) {
    return `Vardo "${name} pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const aloyzoVardas = vardoAnalize('Aloyzas');
console.log(aloyzoVardas);

/*
Funkcija gauna du skaicius ir turi grazinti lygti su sprendimu, pvz.:
2 + 2 = 4
*/

function suma(a, b) {
    return `${a} + ${b} = ${a + b} `
}

const s1 = suma(2, 3);
console.log(s1);

const s2 = suma(0.1, 0.2);
console.log(s2);

const s3 = suma(-88, -15);
console.log(s3);

/*

desimtainis dvejetainis
0           00   
1           001
2           010 
3           011
4           100
5           101
6           110
7           111

0.5         5*10^-1         [sveika, desimtaine, laipsnis]

0.07        7*10^-2         

0.0714      7,14*10^-2      [7, 14, -2]
*/


