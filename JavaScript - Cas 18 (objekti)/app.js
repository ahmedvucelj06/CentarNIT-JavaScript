const osoba = {
    ime: 'Ahmed',
    prezime: 'Vucelj',
    // imeIprezime: function(){
    //     return this.ime + '  ' +this.prezime;
    // },
};
  

console.log(osoba.prezime);
console.log(osoba['ime']);
console.log(osoba);

osoba.ime = 'Lejla';
osoba["ime"] = 'Nejla';
console.log(osoba);

// delete osoba.ime;
console.log(osoba);
// console.log(imeIprezime);

console.log(Object.keys(osoba));
console.log(Object.values(osoba ));


const auto = {
    marka: 'Mercedes',
    model: 'C220',
    godiste: '2018',
    boja: 'Crna',
};

console.log(auto);
console.log(Object.keys(auto));
console.log(Object.values(auto));

auto.tablice = 'NP 001 NP';
console.log(auto);