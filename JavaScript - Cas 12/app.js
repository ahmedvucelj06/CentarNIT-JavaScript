// brojac = 0;
// str = 'Mama ima Momu';
// for ( i = 0; i < str.length; i++){
//     if ( str[i] === 'm' || str[i] === 'M'){
//     brojac++;
//     }
// }
// console.log(brojac);


// rec = prompt("Unesite rec koju zelite: ");
// recbrojac = 0;
// for ( i = 0; i < rec.length; i++){
//     if ( rec[i] == rec[i].toLowerCase()){
//         recbrojac++;
//     }
// }
// console.log(recbrojac);

// rec2 = prompt("Unesite rec koju zelite: ");
// recbrojac2 = 0;
// recbrojac3 = 0;
// for ( i = 0; i < rec2.length; i++){
//     if ( rec2[i] == rec2[i].toLowerCase() && rec2 != ' '){
//         recbrojac2++;
//     }
//     if ( rec2[i] == rec2[i].toUpperCase() && rec2 != ' '){
//         recbrojac3++;
//     }
// }
// if ( recbrojac2 > recbrojac3){
//     console.log('Ima vise malih slova');
// } if ( recbrojac2 < recbrojac3) {
//     console.log('Ima vise velikih slova');
// }else {
//     console.log('Jednaki su');
// }

// JavaScript Variables 

//Using var - vidljivo je u sklopu celog programa
//Using const - konstantna vrednost koja se ne moze promeniti
//Using let - vidljivo je u sklopu {} zagrada
//Using nothing


num = 5;
const arraysDays = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"]
console.log(arraysDays[num - 1]);

// JavaScript Switch

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

switch(num){
    case 1:
        console.log('Ponedeljak');
        break;
    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Sreda');  
        break;
    case 4:
        console.log('Cetvrtak');
        break;
    case 5:
        console.log('Petak');
        break;
    case 6:
        console.log('Subota');
        break;
    case 7:
        console.log('Nedelja');
        break;
    default:
        console.log('Greska');
}