let niz = [10, 15, 45, 65, 5];

// reduce = 
// reduce((prethodno,trenutno)=>prethodno+trenutno,initialValue)
let suma = niz.reduce(
    (prethodno,trenutno) => prethodno + (trenutno * 2)
    ,0);

    // prethodno = 0 , trenutno 10, suma 10
    // prethodno = 10, trenutno 15, suma 25
    // prethodno = 25, trenutno 45, suma 70
    // prethodno = 70, trenutno 65, suma 135
    // prethodno = 135, trenutno 5, suma 140  - kraj

console.log(suma);

// function saberi(prethodno, trenutno){
//     return prethodno + trenutno;
// }

//Napraviti funkciju koja za argument uzima neki niz i vraca nam poziciju na kojoj se nalazi
// ime Lejla dok ako lejla nije prisutna "Sad ce doci Lejla"

let imena = ['Ammar','Ammar', 'Ammar', 'Ferid', 'Talib', 'Marija', 'Nejla']

// function nadjiLejlu(imena){
//     console.log(imena.indexOf('Lejla'));
// }

function nadjiLejlu(arr){
    if ( arr.indexOf('Lejla') === -1){
        return "Sad ce Lejla doci";
    }

    return arr.indexOf("Lejla");
}

console.log(nadjiLejlu(imena));

const noviNiz = new Set(imena)
console.log(noviNiz);