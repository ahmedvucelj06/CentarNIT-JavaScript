// (function () {
// console.log(1);

// setTimeout(function () {
//     console.log(2);
// }, 1000);

// setTimeout(function (){
//     console.log(3);
// }, 0);

// console.log(4);
// })()


// JSON.stringify;
// JSON.parse;

const nesto = {
    ime: 'Lejla',
    prezime: 'Mujezinovic',
}

let str = JSON.stringify(nesto);
console.log(str);
console.log(typeof str );

const josn = '{"ime": "Ivan", "prezime": "Horvat", "godine": 30}'
const objekt = JSON.parse(josn);
console.log(objekt);

// Sta su ustvari PROMISI?, sama rec nam kaze to su neak obecanja....

const promis = new Promise((resolve,rejects)=> {
    console.log('Ispisi nesto');
}) 

// promis.then(data)

let p = new Promise ((resolve, rejects) => {
    let godine = 19;

    if ( godine > 18){
        resolve("Punoletana");
    } else {
        rejects("Maloletana");
    }
});

p.then ((message) => {
    console.log('Ova osoba je ' + message);
})
.catch((message) => {
    console.log('Ova osoba je ' + message);;
})

function wait(){
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve("Proslo je 2 cele sekunde");
        }, 2000)
    });
}

wait().then((value) => {
    console.log('Koliko je proslo?' + value);
});