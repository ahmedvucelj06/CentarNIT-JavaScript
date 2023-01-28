let n = 10;

// while(uslov){
//     kod
// }

while ( n > 0 ){
    console.log(n);
    n--;
}

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

console.log("------------");

let m = 1;

while ( m < 11 ){
    console.log(m);
    m++;
}

console.log("-------------");

a = 1;
do{
    console.log(a);
    a++;
} while( a < 10 )

// abcd => ab|cd
// abcde => ab|de

console.log("-------------");

string = "abcde"

function parNepar(str){
    if ( string.length % 2 === 0){
        return string.slice(0, string.length/2)+ "|" + string.slice(string.length/2, string.length)
    }
    else{
        return string.slice(0, string.length/2 )+ "|" + string.slice(string.length/2 + 1, string.length)
    }
}

console.log(parNepar(string));


console.log("-------------");

recenica = "My name is John";

function separator(sep){
    console.log(recenica.split("").join("."))
}

console.log(separator(recenica));

console.log("-------------");

proizvod = 1;
s = 5; 

while ( s >= 1 ){
   proizvod *= s;
   s--;
}
console.log(proizvod);

console.log("-------------");

suma = 0; 
z= 1;

while ( z <= 20 ){
    if ( z % 2 === 0 ){
        suma = z + suma;
    }
    z++;
}
console.log(suma);

console.log("-------------");

let niz = [1, 2, 3, 4, 5, 6];

let spojiniz = niz.reduce((prethodna, trenutna) => prethodna + trenutna, "")
console.log(spojiniz);


// koristiti funkciju findMissingletter koja je argument nja nja nja
// abeceda = 'abcdefg' ----- HINT

var animal = 
    {
        name : 'dog',
        legs : 4,
        color : "white",
    }


function animalFinder(Obj){
    console.log('This', Obj.color , Obj.name , "has", Obj.legs , "legs ");
}

console.log(animalFinder(animal));