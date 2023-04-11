const BASE_API = `https://api.github.com/users/`;

const btn = document.querySelector('.btn');
const search = document.querySelector('#search')
const main = document.querySelector('.main')
async function getData(username){
        const data = await fetch(BASE_API + username)
        const response = await data.json();
        return response;
}

function showCard(data){
    let a = document.createElement("div");
    a.className = "a";

    let slika = document.createElement("img");
    slika.src = data.avatar_url;
    a.appendChild(slika)

    let ime = document.createElement("p");
    ime.innerText = data.name;
    a.appendChild(ime);

    let status = document.createElement("p");
    status.innerText = data.bio;
    a.appendChild(status)

    let followeri = document.createElement("p");
    followeri.innerText = data.followers + " Followers";
    a.appendChild(followeri)

    let pratim = document.createElement("p");
    pratim.innerText = data.following + " Following";
    a.appendChild(pratim);

    let repos = document.createElement("p");
    repos.innerText = data.public_repos + " Repos";
    a.appendChild(repos);

    console.log(data);
    main.appendChild(a);
}

btn.addEventListener('click',()=>{
    const user = search.value;

    getData(user).then((data)=>{
        showCard(data);
    })
})

