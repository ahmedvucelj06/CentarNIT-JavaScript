const { Body } = require("node-fetch");

async function mojaF() {
    return "Hello World";
}

mojaF().then((val) => {
    console.log(val);
})

function nesto() {
    return new Promise((resolve, reject) => {
        resolve("Hello");
    });
}

setTimeout(() => {
    console.log('Nesto');
}, 2000);

async function myDisplay() {
    let myPromise = new Promise ((resolve, reject) => {
        resolve("Ispisi mi nesto");
    })

    await myPromise.then((v) => {
        console.log(v);
    })
}

myDisplay();

// ! FETCH GET FETCH GET FETCH GET FETCH GET FETCH GET FETCH GET FETCH GET FETCH GET

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// ? FETCH POST FETCH POST FETCH POST FETCH POST FETCH POST FETCH POST FETCH POST

const data = {
    title: "Nova Obaveza",
    completed: false,
};

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Countet-Type": "applications/json",
    },
})
.then((response) => response.json())
.then((data) => console.log(data));



const dataPUT = {
    id: 1,
    title: "Izmenjena obaveza",
    completed: true,
}

fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "PUT",
    body: JSON.stringify(dataPUT),
    headers: {
        "Content-Type": "application/json",
    },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
  
fetch("https://run.mocky.io/v3/24732c2e-fc32-4e67-b477-7d82fe58c155")
    .then((response) => response.json())
    .then((data) => console.log(data));