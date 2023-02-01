// Napraviti funkciju grow koja kao argument prihvata niz brojeva
// Pomnoziti sve brojeve i vratiti proizvod

const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function grow(arr){
    return arr.reduce((prethodna, trenutna) => prethodna * trenutna)
}

console.log(grow(niz));

// Napraviti funkciju addLength koja kao argument uzima string
// Npr. "apple ban"
// "apple ban" -> [ "apple5" "ban3" ]

function addLength(str){
    return str.split(" ").map((x) => x + x.length)
}

string = "apple ban"

console.log(addLength(string));

// zaposleni = true;
// odmor = false;

// function setAlarm(){
//     if ( zaposleni === true && odmor === true){
//         console.log('False');
//     }  if ( zaposleni === false && odmor === true){
//         console.log('False');
//     }  if ( zaposleni === false && odmor === false){
//         console.log('False');
//     }  if ( zaposleni === true && odmor === false){
//         console.log('True');
//     }
// }

// console.log(setAlarm);


recenica = "recenica"

function reverseRecenica(str){
    str = str.split("");
    if ( str.length > 4){
        return str.reverse().join("");
    }
    else{
        console.log(recenica);
    }
    
}

console.log(reverseRecenica(recenica));

var geese = ["African"]
realGeese = ["African", "Serbia"]

function removeAfrican(arr){
    return arr.filter((x) => x != geese)
}
console.log(removeAfrican(realGeese));