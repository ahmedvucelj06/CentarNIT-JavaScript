a = Number(prompt("Unesite neki broj\n"));
b = Number(prompt("Unesite neki broj\n"));

console.log("---Zadatak #1---\n")

if ( a > b){
    c = a - b;
    console.log(c);
}else if (a < b ){
    c = b - a;
    console.log(c);
}

console.log("---Zadatak #2---\n")

a = Number(prompt("Unesite neki broj\n"));
b = Number(prompt("Unesite neki broj\n"));
c = Number(prompt("Unesite neki broj\n"));



if ( a > b && a > c){
    console.log(a);

    if ( b > c){
        console.log(b);
        console.log(c);
    } else{
        console.log(c);
        console.log(b);
    }
} else if ( b > a && b > c){
    console.log(b);

    if ( a > c){
        console.log(a);
        console.log(c);
    } else{
        console.log(c);
        console.log(a);
    }
} else if ( c > a && c > b){
    console.log(c);

    if ( b > a){
        console.log(b);
        console.log(a);
    } else{
        console.log(a);
        console.log(b);
    }
}

console.log("---Zadatak #3---\n")

a = Number(prompt("Unesite neki broj\n"));

if ( a < 0){
    console.log("Smrzavanje");
} else if (a >= 1 && a <= 10){
    console.log("Veoma Hladno");
}else if (a > 10 && a <= 20){
    console.log("Hladno vreme");
}else if (a > 20 && a <= 30){
    console.log("Normalna temperatura");
}else if (a > 30 && a <= 40){
    console.log("Vruce");
}else if (a > 40){
    console.log("Veoma vruce");
}else {
    console.log("Greska");
}

console.log("---Zadatak #4---\n")

a = Number(prompt("Unesite neki broj\n"));
c = Number(prompt("Unesite neki broj\n"));
b = Number(prompt("Unesite neki broj\n"));

if ( a == b && a == c && c == b){
    console.log("Jednakostranican");
} else if ( a == b || a == c || c == b){
    console.log("Jednakostranican");
} else {
    console.log("Raznostranican");
}

a = Number(prompt("Unesite neki broj\n"));

if(a==1){
    console.log("Trenutno je januar - 31");
  } else if (a==2){
    console.log("Trenutno je februar - 28");
  }else if (a==3){
    console.log("Trenutno je mart - 31");
  }else if (a==4){
    console.log("Trenutno je april - 30");
  }else if (a==5){
    console.log("Trenutno je maj - 31");
  }else if (a==6){
    console.log("Trenutno je jun - 30");
  }else if (a==7){
    console.log("Trenutno je jul - 31");
  }else if (a==8){
    console.log("Trenutno je avgust - 31");
  }else if (a==9){
    console.log("Trenutno je septembar - 30");
  }else if (a==10){
    console.log("Trenutno je oktobar - 31");
  }else if (a==11){
    console.log("Trenutno je novembar - 30");
  }else if (a==12){
    console.log("Trenutno je decembar - 31");
  }else {
    console.log("Uneli ste pogresan broj");
  }