// // Napisati program koji proverava da li broj prost
brojac = 0;
a = Number(prompt("Unesite neki broj\n"));
for (i = 1; i <= a; i ++ ){
    if ( a % i === 0){
        brojac ++;   
    }
}
if( brojac > 2){
    console.log("Nije prost");
}else {
    console.log("Broj je prost");
}



suma = 0;
a = Number(prompt("Unesite neki broj\n"));
for ( i = 1; i <= a / 2; i++){
    if ( a % i == 0){
        suma +=i;
    }
}
if ( a == suma ){
    console.log("Broj je savrsen");
}else{
    console.log("Nije");
}

text = "Hello World";

// H  e  l  l  o (space)  W  o  r  l  d
// 0  1  2  3  4    5     6  7  8  8  9

// console.log(text);

// noviText = text + ' Ferid';
// console.log(noviText);

// console.log(text.length);
// console.log(noviText.length);

// for (i = 0; i <text.length; i ++){
//     console.log(text[i]);   

// }
// novitext = '';
// for ( i  =  text.length-1 +1 -1 +1 -1 + (-1) +1 ; i  >=  0; i--){
//     if (text[i] === " "){
//         continue;
//     }
//     console.log(text[i]);
// }

// novitext = '';
// for ( i  =  text.length-1 +1 -1 +1 -1 + (-1) +1 ; i  >=  0; i--){
//     if (text[i] === " "){
//         continue;
//     }
//     novitext += text[i];
// }
// console.log(novitext);

string1 = "Cao";
string2 = "Brate";

if ( string1 === string2){
    console.log("Jednaki su");
}else {
    console.log("Nisu");
}
