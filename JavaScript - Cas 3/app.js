console.log("---Zadatak #1---")

a = 15;
if (a > 0) {
  console.log("Broj je pozitivan\n");
} else if (a === 0) {
  console.log("Broj je jednak 0 (nuli)\n");
}else {
  console.log("Broj je negativan\n");
}

console.log("---Zadatak #2---")

a = prompt("Unesite broj a: ");
b = prompt("Unesite broj b: ");
if (a === b) {
  console.log("Brojevi su jednaki\n");
} else {
  console.log("Brojevi nisu jednaki\n");
}

console.log("---Zadatak #3---")


console.log(typeof a);
a = Number(prompt("Unesite neki broj od 1-7\n"));

if(a==1){
  console.log("Trenutno je ponedeljak");
} else if (a==2){
  console.log("Trenutno je utorak");
}else if (a==3){
  console.log("Trenutno je sreda");
}else if (a==4){
  console.log("Trenutno je cetvrtak");
}else if (a==5){
  console.log("Trenutno je petak");
}else if (a==6){
  console.log("Trenutno je subota");
}else if (a==2){
  console.log("Trenutno je nedelja");
}else if (a<1){
  console.log("Niste uneli dobar broj");
}else if (a>7){
  console.log("Niste uneli dobar broj");
}

console.log("---Zadatak #4---")

console.log("---Zadatak #5---")

a = Number(prompt("Unesite neki broj\n"));

if(a % 2 == 0){
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

m = Number(prompt("Unesite neki broj\n"));

if( m>0){
  n =1;
  console.log(n);
} else if(m==0){
  n=0;
  console.log(n);
}else if (m<0){
  n= -1;
  console.log(n);
}


z = Number(prompt("Unesite neki broj\n"));
y = Number(prompt("Unesite neki broj\n"));
x = Number(prompt("Unesite neki broj\n"));

if (z > y && z > x){
  console.log("Z je najveci broj");
} else if ( y > z && y> x){
  console.log("Y je najveci broj");
}else if ( x > z && x > y){
  console.log("x je najveci broj");
}