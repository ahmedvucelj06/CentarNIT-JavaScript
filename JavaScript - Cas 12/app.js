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
