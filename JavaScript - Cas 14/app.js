// niz = [1, 3, 5, 6, 8, 10, 13]
// a = Number(prompt("Unesite koji element hocete da vratite: "));


// for ( i = 0; i <= niz.length; i++){
//     if ( niz[i] === a){
//         console.log(i);
//         break;
//     }
// }

// const niz = [1, 2, 3, 4]
// brojac = 0;
// noviniz = []

// for ( let i = 1; i <= niz.length; i++){
//     if ( i % 2 == 0){
//         noviniz.push(niz[i])
//     }
//     if ( i % 2 == 1){
//         niz[i] *= 2;
//         noviniz.push(niz[i])
//     }
// }
// console.log(niz);

// str = prompt("Unesite string koji zelite: ")
// strbrojac = 0;
// strbrojac2 = 0;
// novistr = '';

// for ( i = 0; i <= str.length; i++){
//     if ( str[i] == str[i].toUpperCase() && str != ' '){
//         strbrojac++;
//     }  if ( str[i] == str[i].toLowerCase() && str != ' '){
//         strbrojac2++;
//     }

//     if ( strbrojac > strbrojac2){
//         console.log('Ima vise velikih');
//     }
//     else {
//         console.log('Ima vise manjih');
//     }
// }

// const strarray = ["Oci", "Naocare", "Teleskopi", "Ferid", "Zaba"]
// let c;

// for ( i = 0; i <= strarray.length; i++){
//     for ( j = i + 1; j <= strarray.length; j++){
//         if ( strarray[i].length > strarray[j].length){
//             c = strarray[i];
//             strarray[i] = strarray[j];
//             strarray[j] = c;
//         }

//     }
// }
// console.log(strarray);

// const array = [3, 4, 5, 7, 8, 19, 20, 2]
// min = 0;
// najmanjiarray = 0;
// indexnajmanji = 0;
// a = prompt("Unesite [1]value ili [2]index: ");
// if ( a == 2 ){
//     for ( i = 0; i <= array.length; i++){
//         if ( array[i] < min){
//             min = array[i]
//             najmanjiarray = i;
//         }
//     }

// }

// if ( a === 1){
//     console.log(min);
// }else {
//     console.log(najmanjiarray);
// }

