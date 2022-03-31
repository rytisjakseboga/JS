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
Funcija 