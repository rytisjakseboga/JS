const pirmas = 7;
const antras = 5;

// iprasta funkcija
function suma(a, b) {
    return a + b;
}

const r1 = suma(pirmas, antras);
console.log(r1);

//kintamajam priskirta anonimine funkcija
const atimtis = function(pirmas, antras) {
    return a - b;
}

const r2 = atimtis(pirmas, antras);
console.log(r2);


//arrow funkcija
const dalyba = (pirmas, antras) => {
    return a / b;
}

const r3 = dalyba(pirmas, antras);
console.log(r3);


//jei logikos bloke {} yra tik 1 procedura, tai galime nerasyti {} ir return
const daugyba = (pirmas, antras) => a * b;
const r4 = daugyba(pirmas, antras);
console.log(r4);

//kvadratu
//jei parametru bloke () yra tik 1 parametras, tai galime nerasyti ()
const kvadratu = (pirmas) => a * a;
const r5 = kvadratu(pirmas);
console.log(r5);