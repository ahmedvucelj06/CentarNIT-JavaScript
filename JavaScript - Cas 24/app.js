// Napraviti funkciju isPalnidrom koja kao argument prihvata string. Proveriti da li je taj string palindrom.

str = '121';
isPalindrom = false;

for (i = 0; i<=str.length/2; i++ ){
    if(str[i].toLowerCase !== str[str.length -1 -i].toLowerCase){
        isPalindrom = false;
        break;
    }
}
if (isPalindrom){
    console.log("String je Palindrom");
}else {
    console.log("String nije Palindrom")
}

// Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujici), tako da:

// ako je broj deljiv sa 3, potrebno je ispisati 'Fizz'
// ako je broj deljiv sa 5, potrebno je ispisati 'Buzz'
// ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati 'FizzBuzz'

for (i=1;i<=100; i++){
    if ( i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if ( i % 3 == 0){
        console.log("Fizz");
    }else if ( i % 3 == 0){
        console.log("Buzz");
    }  else{
        console.log(i);
    }
}

// Kreiranje objekta sa nekim svojstvima i njihovim vrednostima.

// 1. Procitajte vrednosti iz objekta i ispisite
// 2. Izmenite vrednosti svojstva u objektu.
// 3. Izbrisite neko svojstvo iz objekta

const auto = {
    marka: 'Mercedes',
    model: 'C220',
    godiste: '2018',
    boja: 'Crna',
};

console.log(auto);
console.log(Object.keys(auto));
console.log(Object.values(auto));

auto.tablice = " NP 001 NP"
delete auto.boja;
console.log(auto);