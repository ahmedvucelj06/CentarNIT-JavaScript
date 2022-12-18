// n = Number(prompt("Unesite trocifreni broj: "));

// if ( n < 100 || n > 999){
//     console.log("Niste uneli trocifreni broj");
// } else if ( n % 10 > 5){
//     n -= 5;
// }else {
//     n += 2;
// }
// console.log(n);

// niz = [10, 15, 20, 30]
// console.log(niz[0]);
// console.log(niz[3]);

// humanYears = Number(prompt("Unesite koliko dete ima godina: "));

// if ( humanYears == 1){
//      console.log([1, 15, 15]);
// }else if ( humanYears == 2){
//      console.log([2, 15+9, 15+9]);
// }else{
//      console.log([ humanYears, 15+9 + (humanYears - 2) * 4, 15+9 +(humanYears - 2) * 5]);
// }

// str = 'AnAvolimilovana';
// isPalindrom = true;

// for (i = 0; i<=str.length/2; i++ ){
//     if(str[i].toLowerCase !== str[str.length -1 -i].toLowerCase){
//         isPalindrom = false;
//         break;
//     }
// }
// if (isPalindrom){
//     console.log("String je Palindrom");
// }else {
//     console.log("String nije Palindrom")
// }

// broj = 371; 

// jedinica = broj % 10;
// desetica = Math.floor(broj / 10) % 10;
// stotina = Math.floor(broj / 100);

// amstrongNumber = stotina**3 + desetica **3 + jedinica**3;

// if ( amstrongNumber ===  broj){
//     console.log("Ovo je amstrongov broj");
// }else {
//     console.log("Ovo nije amstrongov broj");
// }



// for ( i = 100; i <= 999; i++){
//     jedinica = i % 10;
//     desetica = Math.floor(i / 10) % 10;
//     stotina = Math.floor(i / 100);
//     if ( (stotina + desetica ) < jedinica){
//         continue;
//     }
//     console.log(i);
// }

// x = 20;
// for ( i = 100; i <= 999; i++){
//     jedinica = i % 10;
//     desetica = Math.floor(i / 10) % 10;
//     stotina = Math.floor(i / 100);
//     if ( jedinica + desetica + stotina == x){
//         console.log(i);
//     }
// }
