// const str = "Ja idem u skolu";
// let poslednji = 0;

// for ( let i = 0; i < str.length; i++){
//     if ( str[i] === " "){
//         poslednji = i;
//     }
// }

// console.log(str.length - poslednji - 1);

// const niz = str.split(" ");
// console.log(niz);
// console.log(niz[niz.length - 1].length);

// const newArray =  ["ja", "idem", "na", "kurs", "programiranja"]
// const newStr = newArray.join(" - ");

// console.log(newStr);

// visina = Number(prompt("Unesite visinu: "));
// tezina = Number(prompt("Unesite tezinu: "));

// bmi = tezina / visina**2;

// if ( bmi <= 18.5){
//     console.log('Mala Tezina');
// } else if ( bmi <= 25.0){
//     console.log('Normalno');
// }else if ( bmi <= 30){
//     console.log('Prekoerna tezina');
// } else if ( bmi > 30){
//     console.log('Gojazni');
// }

// godine = [0, 45, 1, 50, 20, 25, 18, 65, 30]

// let najveci = godine[0];
// let najveci2 = godine[0];

// for ( let i = 0; i < godine.length; i++){
//     if ( godine[i] > najveci){
//         najveci2 = najveci;
//         najveci = godine[i];
       
//     }
// }
// console.log(najveci, najveci2);

// const porodica = [5, 6, 10, 15, 29, 42, 54, 67]
// const novaPorodica = []

// let najmladji = porodica[0];
// let najstariji = porodica[0];
// let razlika = 0;

// for ( let i = 0; i < porodica.length; i++){
//     if ( porodica[i] > najstariji){
//         najstariji = porodica[i]
//     }
//     if ( porodica[i] < najmladji){
//         najmladji = porodica[i]
//     }
// }

// razlika = najstariji - najmladji;

// novaPorodica.push(najmladji);
// novaPorodica.push(najstariji);
// novaPorodica.push(razlika);

// console.log(novaPorodica);

let str = "";
let razmak = "";

for ( let i = 1; i < 5; i++){
    razmak = "";
    for ( let j = 1; j < 5 - 1; j++){
        razmak += " ";
    }
    str += "* ";
    console.log(razmak + str);
}