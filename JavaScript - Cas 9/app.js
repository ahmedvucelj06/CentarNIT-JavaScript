// niz = [ 10, 5, 17, 2, 6, 9, 14];

// min = niz[0];
// max = niz[0];
// suma = 0;
// for ( i = 0; i < niz.length; i ++){
//     if ( niz[i] > max){
//         max = niz[i];
//     }

//     if ( niz[i] < min){
//         min = niz[i];
//     }

//     suma += niz[i];
// }
// prosek =  (suma - min - max) / (niz.length - 2);

// console.log("Prosek je: ", prosek);

// niz = [ 10, 5, 6, 7, 8, 9, 12]
// n = prompt("Unesite sa koje pozicije zelite da maknete element: ");
// noviniz = [];
// for ( i = 0; i < niz.length; i++){
//     if ( i === n){
//         continue;
//     }

//     noviniz.push(niz[i]);
// }
// console.log(noviniz);

// niz = [ 10, 5, 6, 7, 8, 9, 12]
// n = 3;
// noviniz = [];
// for ( i = n; i < niz.length; i++){
//     noviniz.push(niz[i]);
// }
// for ( i = 0; i<n; i++){
//     noviniz.push(niz[i]);
// }
// console.log(noviniz);

// n = Number(prompt("Unesite neki mesec 1-12"));

// if ( n == 1 || n == 2 || n == 3 ){
//     console.log("Ovo pripada prvom kvartalu");
// }else if ( n == 4 || n == 5 || n == 6 ){
//     console.log("Ovo pripada drugom kvartalu");
// }else if ( n == 7 || n == 8 || n ==9  ){
//     console.log("Ovo pripada trecem kvartalu");
// }else if ( n == 10 || n == 11 || n == 12 ){
//     console.log("Ovo pripada cetvrtom kvartalu");
// }if( n < 0 || n > 12){
//     console.log("Greska");
// }

// if ( n <= 3){
//     console.log("Prvi kvartal");
// }else if ( n < = 6){
//     console.log("Drugi kvartal");
// }else if ( n <= 9){
//     console.log("Treci kvartal");
// }else if ( n <= 12){
//     console.log("Cetvrti kvartal");
// }else{
//     console.log("Greska");
// }

// niz = [ 10, 4, 2, 3, 5, 6, 7, 15, 6];
// suma = 15;

// for ( i = 0; i < niz.length; i++){

//     for ( j = i+1; j < niz.length; j++){
//         if ( niz[i] === niz[j]){
//             console.log("Isti su");
            
//         }
//         if ( niz[i] + niz[j] == suma){e
//             console.log("Brojevi koji su jednaki su", niz[i], niz[j]);
//         }
//     }

   

// }

niz = [10, 11, 13, 14, 15]
for ( i = 0; niz.length; i++){
    if ( niz[i + 1] - niz[i] === 1){
        continue;

    }else {
    console.log(niz[i + 1]);
    }
}