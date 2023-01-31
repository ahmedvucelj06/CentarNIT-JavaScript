// // Napraviti funkciju koja vraca string gde ime menja prezime


// let imePrezime = 'Ahmed Vucelj';

// function reverseName(str){
//     return str.split(" ").reverse().join(" ");
// }

// console.log(reverseName(imePrezime));

// function findMissingLetter(arr){
//     let abeceda= "abcdefghijkelmnopqrstuvwxyz"
//     // let abec = arr[0] === arr[0].toUpperCase()
//     // abeceda.toUpperCase();
//     // abeceda.toLowerCase();

//     for ( let i = 0; i < arr.length; i++){
//         if(abeceda[findFirst + i] !== arr[i]){
//             return abeceda[findFirst + i]
//         }
//     }

//     let findFirst = abec.indexOf(arr[0]);
//     return findFirst;

// }

// console.log(findMissingLetter(["c", "e"]));

const input = "Every developer likes to mix kobnesto and javascript"

// Koristiti split(), map(), join()

function changes(str){
    return str.split(" ").map((x) => x[0] + ( x.length - 2 ) + x[x.length-1]).join(" ");
}

console.log(changes(input));


const ages = [
    {
        name: "Jhon",
        age: 13,
    },
    {
        name: "Ammar",
        age: 16,
    },
    {
        name: "Deda",
        age: 67,
    },
]

function findAges(obj){
    let max = 0;
    let min = obj[0].age;
    for ( let i = 0; i < obj.length; i++){
        if ( obj[i].age > max){
            max = obj[i].age;
        }
        if ( obj[i].age < min){
            min = obj[i].age;
        }
    }
    console.log("Najmladji je: ", min, ",a najstariji je: ", max);
}

findAges(ages);