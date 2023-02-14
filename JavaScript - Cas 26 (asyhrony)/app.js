// // callback
// // promise
// // asymc / await

// // JavaScript Visualizer 9000


// // function prva(){
// //     console.log('prva');
// // }

// // function druga(){
// //     console.log('druga');
// // }

// // function saberi(a){
// //     return a + 2;
// // }

// // function ammar(array,callback){
// //     let neyArray = [];
// //     for( let i = 0; i < array.length; i++){

// //     }
// // }

// // ! Call Back
// // ? Call Stack

// function mnozenje(a,b){
//     return a * b;
// }
// function vracanje(callback){
//     return callback(5, 51)
// }

// console.log(vracanje(mnozenje));

function proveraParnosti(a){
    return a % 2 === 0 ? true : false;
}

function parniElementi(array, callback){
    let neyArray = [];
    for ( let i = 0; i < array.length; i++){
        if ( callback(array[i])){
            neyArray.push(array[i]);
        }
        continue;
    }
    return neyArray;
}
niz = [ 1, 2, 3, 4]

const rezultat = parniElementi(niz, proveraParnosti);
console.log(rezultat);