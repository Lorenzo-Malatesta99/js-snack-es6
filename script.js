// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

let storageBike = [
    { nome: "Turbo Grip 2001", peso: 8 },
    { nome: "Sprint Master", peso: 5.6 },
    { nome: "RoadKing Pro", peso: 7.2 },
    { nome: "Mountain Crusher", peso: 9.1 },
    { nome: "Speedster 3000", peso: 6.8 },
];

let biciclettaPiuPesante = storageBike[0];
let biciclettaPiuLeggera = storageBike[0];
const risultatoUno = document.getElementById("risultatoEsUno");

for (let i = 1; i < storageBike.length; i++) {
    if (storageBike[i].peso > biciclettaPiuPesante.peso) {
        biciclettaPiuPesante = storageBike[i];
    }
    if (storageBike[i].peso < biciclettaPiuLeggera.peso) {
        biciclettaPiuLeggera = storageBike[i];
    }
}

console.log(
    `La bicicletta più pesante è ${biciclettaPiuPesante.nome} con un peso di ${biciclettaPiuPesante.peso} kg.`
);
console.log(
    `La bicicletta più leggera è ${biciclettaPiuLeggera.nome} con un peso di ${biciclettaPiuLeggera.peso} kg.`
);

risultatoUno.innerText = `La bicicletta più pesante è ${biciclettaPiuPesante.nome} con un peso di ${biciclettaPiuPesante.peso} kg.`;

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let squadreDiCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Torino", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Genoa", puntiFatti: 0, falliSubiti: 0 },
];

console.log(squadreDiCalcio); // debug

for (let i = 0; i < squadreDiCalcio.length; i++){
    let numeroCasualeUno = Math.floor(Math.random() * 50) + 1;
    let numeroCasualeDue = Math.floor(Math.random() * 50) + 1;
    squadreDiCalcio[i].puntiFatti = numeroCasualeUno
    squadreDiCalcio[i].falliSubiti = numeroCasualeDue
}

let listaFalli = squadreDiCalcio.map((squadra) => ({
  nome: squadra.nome,
  falliSubiti: squadra.falliSubiti
}));

console.log(listaFalli)
