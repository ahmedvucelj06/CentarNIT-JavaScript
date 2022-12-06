// // a = Number(prompt("Unesite neki broj\n"));
// brojac = 1;

// for (i = 1; i <= 5; i++){
//     string = "";
//     for( j = 1; j <= i; j ++){
//         string += brojac;
//     }
//     console.log(string);
//     brojac ++;  
// }

// Ako je broj deljiv sa 5 ispisati Buzz
// Ako je broj deljiv sa 3 ispisati Fizz
// Ako je broj deljiv sa 3 i sa 5 ispisati FizzBuzz


// for (i=1;i<=100; i++){
//     if ( i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }else if ( i % 3 == 0){
//         console.log("Fizz");
//     }else if ( i % 3 == 0){
//         console.log("Buzz");
//     }  else{
//         console.log(i);
//     }
// }

// 1-10

// for (i = 1; i <= 10; i++){
//     if (i == 5){
//         console.log("//");
//     }else {
//         console.log(i);
//     }
// }

// suma = 0;
// for (i = 1; i <= 100; i++){
//     if (i % 2 == 0){
//         suma += i;
//         continue;
//     }
//     else{
//         console.log("Neparni")
//     }
// }
// console.log(suma);

// suma = 0; 
// for (i = 0; i<=100; i+=2){
//     suma +=i;
// }
// console.log(suma)


broj = 1;`1`
for (i = 1; i <= 5; i++){
    broj *= i;
}
console.log(broj);