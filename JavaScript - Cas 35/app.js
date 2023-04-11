let glavni = document.querySelector(".container");
console.log(glavni);
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

getAllUsers().then((d) => {
    podaciKorisnika = d;

    podaciKorisnika.forEach(element => {
        createCard(element.name, element.username, element.email);
    });
    console.log(podaciKorisnika);
})

function createCard(name, username,email){
    let card = document.createElement("div");
    card.className = "card";

    let ime = document.createElement("a");
    ime.innerText = "Ime:  " + name;

    let user = document.createElement("p");
    user.innerText = "Username:  " + username;
    
    let mail = document.createElement("p");
    mail.innerText = "Email:  " + email;

    card.addEventListener("click", () => {
        window.location.href = `index1.html?id=${id}`;
    });
    
    card.appendChild(ime);
    card.appendChild(user);
    card.appendChild(mail);
    glavni.appendChild(card)
}