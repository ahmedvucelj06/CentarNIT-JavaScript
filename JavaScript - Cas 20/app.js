const auto = {
    marka: 'Mercedes',
    model: 'C220',
    godiste: '2018',
    boja: 'Crna',
};

console.log(auto);
console.log(Object.keys(auto).join(", "));

function lengthObj(auto){
    let a = Object.keys(auto)
    return a.length;
}
console.log(lengthObj(auto));

// Naci sumu svih pozitivnih brojeva

let niz = [1, 5, -10, -9, 4, 5, 6, -2, -4, 10]

function sumaPozitivnihBrojeva(arr){
    return arr.filter((el) => el > 0).reduce((pre, curr) => pre + curr, 0);
}

console.log(sumaPozitivnihBrojeva(niz));

// Uneti String kao puno ime i prezime, treba uzeti inicijale i prikazati

// imeIprezime = "Ahmed Vucelj";
// console.log(imeIprezime.split(""));
// console.log(imeIprezime.substring(0, 1));   <--- 0IQ nacin
// console.log(imeIprezime.substring(6, 7));

// let arr = str

let licna = "Amil Kahrovic";

function inicijali(str){
    return str.split(" ").map((el) => el[0]).join("");
}

console.log(inicijali(licna));

//Svako pocetno slovo niza napisati velikim slovom

let imena = ['amil', 'lejla', 'ahmed', 'ammar', 'talib', 'ferid', 'zaba']

function velikaSlova(arr){
    return arr.map((el) => el[0].toUpperCase() + el.slice(1, el.length).toLowerCase())
}

console.log(velikaSlova(imena));


// Ako je status citanja 'true', prikazati tekst "Vec procitano" i naziv knjige i autora samo knjige
// u suprotnom prikazati tekst 'Morate Citati'

var library = [
    {
        author: "Bill Gates",
        tittle: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        tittle: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        tittle: "Mockingjay: The Final Book of The Hungar Games",
        readingStatus: false,
    },
];

function readingStatusTrue(obj){
    for ( let i = 0; i < obj.length; i++){
        if ( library[i].readingStatus){
            console.log("Vec procitano", library[i].author,',' ,library[i].tittle);
        }
        else{
            console.log('Morate citati');
        }
    }
}

console.log(readingStatusTrue(library));

// Nacini na koje mozemo pisati for petlje

let nizB = [10, 15, 45, 65];

for (let element in nizB){  // Ispisce se index od niza
    console.log(element);
}

for ( let element of nizB){   // Ispisace se elementi od niza
    console.log(element);
}

