const person = {
    firstName : "Ahmed",
    lastName : "Vucelj",
    age : "16",
    fullName : function (){
        return this.firstName + " " + this.lastName;
    }
}
// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person.fullName());

// Object.freeze(person); // Ovo zamrzava objekat i tada ne mozemo da menjamo i da dodajemo nove stvari
// person.firstName = "Ammar" 

// Object.seal(person); //Metoda koja nije striktna kao freeze, ne mozemo da brisemo ili dodajemo ali mozemo da menjamo
// person.firstName = "Ammar";
// console.log(person);

// person.height = 180;
// console.log(person);

// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).
 
const myCar = {
    id: 1,
    marka: "Audi",
    model: "a4",
    boja: "Crvena",
    pogon: "prednji",
    menjac: "automatski",
    kontakt: [0622222, 02033322],
    servis: {
      datum: "04,maj",
      km: 23000,
      serviser: "Pasovic",
    },
    udaran: true,
}

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;

myCar.povecanjeBrzine = function (ubrzanje){
  if ( this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina){
    return "Nije moguce povecati brzinu"
  }else {
    return (this.trenutnaBrzina += ubrzanje)
  }
}

myCar.povecanjeBrzine(200);

console.log(myCar);

myCar.smaanjenjeBrzine = function ( usporavanje ){
    if (this.trenutnaBrzina - usporavanje < 0){
        return "Nije moguce smanjiti brzinu"
    }else {
        return (this.trenutnaBrzina -= usporavanje)
    }
}
myCar.smaanjenjeBrzine(170);
console.log(myCar);

myCar.koci = function (){
     this.trenutnaBrzina = 0;
}
myCar.koci()
console.log(myCar.trenutnaBrzina);

const licna = {
    firstName : "Ahmed",
    lastName : "Vucelj",
    language : "",

    setNickName : function (){
        return this.firstName[0].toUpperCase() + this.firstName[1].toLowerCase() + this.lastName[0].toLowerCase() + this.lastName[1].toLowerCase
    }
}

licna.setLanguage = function ( jezik ){
     this.language = jezik;
}

licna.setLanguage("Serbian")
console.log(licna);
console.log(licna.setNickName());

//w3resource.com - vezbanje zadataka 
