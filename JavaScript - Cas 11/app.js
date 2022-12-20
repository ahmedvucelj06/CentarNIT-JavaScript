// jedinica = i % 10;
// desetica = Math.floor(i / 10) % 10;
// stotina = Math.floor(i / 100);

// a = 'programiranje'
// m = a.toLowerCase()
// isIsogram = true
// for ( i = 0; i<m.length; i++){
//     k = m[i];
//     for( j = i+1; j<m.length; j++){
//         n = m[j];
//         if ( n===k ){
//             isIsogram = false;
//             break
//         }
//     }
// }
// if (isIsogram){
//     console.log("Isogram");
// }else{
//     console.log("Nije");
// }

// niz = [10, 50, 60, 15, 60, 99]
// gvr = 100;

// for ( i = 0; i <= niz.length; i++){
//     if ( niz[i] > gvr){
//         console.log('Niz nije unutar granicne vrednosti');
//         break;
//     }else{
//         console.log('Niz je unutar granicne vrednosti');
//     }
// }

// word = 'localization';

// if ( word.length>10){
//     console.log(word[0], word.length-2, word.length-1);
// } else (word.length<10)
// {
//     console.log(word);
// }

// m = 0;
// niz = [10, 15, -5, -6, -4, 10, 45, 30, -20]
// noviniz = []

// for ( i = 0; i <= niz.length; i++){
//     if (niz[i] == ""){
//         console.log('Prazan Niz');
//     }
//     if ( niz[i] < 0){
//         noviniz += niz;
//     }
//     if ( niz[i] > 0){
//         m++;
//     }
// }
// noviniz.push(niz[i]);
// noviniz.push(niz);
// console.log(noviniz);

a = 'nesto';
b = 'programiranje';

if ( a.length < b.length){
    console.log(a, b, a);
}else{
    console.log(b, a, b);
}