async function getAllCountries() {
    let catjokes = await fetch("https://restcountries.com/v3.1/all");
    let response = catjokes.json();
    return response;
  }
  
  let cont = document.querySelector(".container");
  let countries;
  
  getAllCountries().then((el) => {
    countries = el;
    countries.forEach((countries) => {
      createCategory(countries);
    });
    console.log(countries);
  });
  
  function createCategory(countries) {
    let a = document.createElement("div");
    a.className = "a";

    let zastava = document.createElement("img");
    zastava.src = countries.flags.png;

    let capital = document.createElement("p");
    capital.innerText =  "Capital: " + countries.capital;

    let populacija = document.createElement("p");
    populacija.innerText =  "Population: " + countries.population;

    let category = document.createElement("p");
    category.innerText = countries.name.common;
    
    
    a.appendChild(zastava)
    a.appendChild(category);
    a.appendChild(capital);
    a.appendChild(populacija);
    a.addEventListener("click", function () {
      window.location.href = "index1.html?country=" + countries.name.common;
    });
    cont.appendChild(a);
  }