btn.addEventListener("click", findSeries);

// Array de la API
let globalData = [];

//Se crea una función que llame a la api a partir de un input

function findSeries() {
  const inputValue = inputSeries.value;
  globalData = [];

  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((seriesResponse) => seriesResponse.json())
    .then((seriesData) => {
      //recorremos el array para guardarlo en globalData
      seriesData.forEach((element) => {
        globalData.push(element.show);
      });
      if (globalData.length > 0) {
        printShowCards(globalData);
      } else {
        const paragrhapError = document.createElement("p");
        const paragrhaptextContent = document.createTextNode(
          "no se ha encontrado ninguna pelicula"
        );

        paragrhapError.appendChild(paragrhaptextContent);
        containerSeries.appendChild(paragrhapError);
      }
    });
}

//Creamos una función que pinta las series en una lista.

function printShowCards(show) {
  let showList = "";

  show.forEach((element) => {
    let image = "";
    if (element.image == null) {
      image = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      image = element.image.medium;
    }
    showList += `<li id="${element.id}" class="showCard js-favorite"><img src="${image}" alt="${element.name}"></img>${element.name} </li>`;
  });

  listSeries.innerHTML = showList;
  addListenersToCards();
}