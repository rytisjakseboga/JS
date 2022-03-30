/*
STRING

kabutes: 
    -viengubos(')
    -dvigubos(")
    -backtickas(`)

    Teksto simboliu kiekis: .lenght
*/

const name = 'Petras';
console.log(name);

const lastname = "Petraitis";
console.log(lastname);

const viengubaKabute = "viengubos(') ";
console.log(viengubaKabute);

const dvigubaKabute = 'dvigubos(") ';
console.log(dvigubaKabute);

const viengubaKabutes12 = 'Cia yra vienguba (\') ir dviguba (") kabutes.';
console.log(viengubaKabutes12);

const dvigubaKabute12 = "Cia yra vienguba (') ir dviguba (\") kabutes.";
console.log(dvigubaKabute12);

const kabute12 = "Cia yra vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute12);

const clientName = 'Rugile';
const clientAge = 29;
// Client Rugile is 29 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
// 7 + 5 = 12
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const abc = 'abcdef';
const abcDydis = abc.length;
console.log(`Abecele "${abc}" dydis yra ${abcDydis} simboliu."`);