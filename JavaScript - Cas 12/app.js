brojac = 0;
str = 'Mama ima Momu';
for ( i = 0; i < str.length; i++){
    if ( str[i] === 'm' || str[i] === 'M'){
    brojac++;
    }
}
console.log(brojac);


rec = prompt("Unesite rec koju zelite: ");
recbrojac = 0;
for ( i = 0; i < rec.length; i++){
    if ( rec[i] == rec[i].toLowerCase()){
        recbrojac++;
    }
}
console.log(recbrojac);

rec2 = prompt("Unesite rec koju zelite: ");
recbrojac2 = 0;
recbrojac3 = 0;
for ( i = 0; i < rec2.length; i++){
    if ( rec2[i] == rec2[i].toLowerCase() && rec2 != ' '){
        recbrojac2++;
    }
    if ( rec2[i] == rec2[i].toUpperCase() && rec2 != ' '){
        recbrojac3++;
    }
}
if ( recbrojac2 > recbrojac3){
    console.log('Ima vise malih slova');
} if ( recbrojac2 < recbrojac3) {
    console.log('Ima vise velikih slova');
}else {
    console.log('Jednaki su');
}

// JavaScript Variables 

//Using var - vidljivo je u sklopu celog programa
//Using const - konstantna vrednost koja se ne moze promeniti
//Using let - vidljivo je u sklopu {} zagrada
//Using nothing


// num = 5;
// const arraysDays = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak", "Subota", "Nedelja"]
// console.log(arraysDays[num - 1]);

// JavaScript Switch

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

switch(num){
    case 1:
        console.log('Ponedeljak');
        break;
    case 2:
        console.log('Utorak');
        break;
    case 3:
        console.log('Sreda');  
        break;
    case 4:
        console.log('Cetvrtak');
        break;
    case 5:
        console.log('Petak');
        break;
    case 6:
        console.log('Subota');
        break;
    case 7:
        console.log('Nedelja');
        break;
    default:
        console.log('Greska');
}


nizBrojeva = [1, 2, 3, 4, 1, 2, 3, 5, 6, 6, 7]
noviBrojevi = []

for ( let i = 0; i<nizBrojeva.length; i++){
    isInside = false;
    for( let j = i+1; j<noviBrojevi.length; j++){
        if ( nizBrojeva[i] === nizBrojeva[j] ){
            isInside = true;
            break;
        }
    }

    if ( isInside ){
        continue;
    }else {
        noviBrojevi.push(nizBrojeva[i]);
    }
}

console.log(noviBrojevi);

//Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A I B, tako sto se kombinuju prvi sa prvim, drugi sa 
//drugim, treci sa trecim znakom. Ako je jedan string duzi od drugog, na kraju samo dodati znakove viska. Npr. za stringove
//Pera i sladoled dobija se PsElRaAdoled

a = 'PERA';
b = 'sladoled';

