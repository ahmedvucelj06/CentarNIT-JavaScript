async function getAllUsers(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users")

    let response = data.json();
    return response;
}
let podaciKorisnika;
getAllUsers().then((d) => {
    podaciKorisnika = d;

    console.log(podaciKorisnika);
});

let cont=document.querySelector(".conteiner");

console.log(cont);
cont.style.color="red";

cont.innerText="nesto";

let dugme = document.querySelector("button");

dugme.addEventListener("click",()=>{
    cont.style.color="yellow";
})

let card = document.querySelector(".nesto");

let par = document.createElement('p');
par.innerText="Ovo je novi";
card.appendChild(par)

let promenaBoje = document.querySelector("button");

promenaBoje.addEventListener("click", ()=>{
    cont.style.color="blue";
})