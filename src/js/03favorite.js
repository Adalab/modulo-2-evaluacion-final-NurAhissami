function addListenersToCards() {
  const allSeries = document.querySelectorAll(".js-favorite");
  for (const serie of allSeries) {
    serie.addEventListener("click", updateFavoriteList);
  }
}

addListenersToCards();
//Creamos un array para favoritos

let favoritesShow = [];

if (savedSeries) {
  favoritesShow = savedSeries;
}

printFavoriteList(favoritesShow);

function updateFavoriteList(elementlist) {
  debugger;
  const updateFavoriteEvent = elementlist.target;
  let favoriteElementID = "";
  let isImage = false;
  if (updateFavoriteEvent.id == "") {
    favoriteElementID = updateFavoriteEvent.parentElement.id;
    isImage = true;
  } else {
    favoriteElementID = updateFavoriteEvent.id;
    isImage = false;
  }
  const showFavorites = favoritesShow.find(
    (element) => element.id === parseInt(favoriteElementID)
  );
  if (showFavorites == null) {
    const selectedElement = globalData.find(
      (element) => element.id === parseInt(favoriteElementID)
    );
    favoritesShow.push(selectedElement);
    if (isImage) {
      updateFavoriteEvent.parentElement.classList.add("showfavCard");
      updateFavoriteEvent.parentElement.classList.remove("showCard");
    } else {
      updateFavoriteEvent.classList.add("showfavCard");
      updateFavoriteEvent.classList.remove("showCard");
    }
  } else {
    let i = favoritesShow.indexOf(showFavorites);
    favoritesShow.splice(i, 1);
    if (isImage) {
      updateFavoriteEvent.parentElement.classList.add("showCard");
      updateFavoriteEvent.parentElement.classList.remove("showfavCard");
    } else {
      updateFavoriteEvent.classList.add("showCard");
      updateFavoriteEvent.classList.remove("showfavCard");
    }
  }
  localStorage.setItem("favoritesSeries", JSON.stringify(favoritesShow));

  printFavoriteList(favoritesShow);
}

function printFavoriteList(event) {
  let list = "";

  event.forEach((element) => {
    let image = "";
    if (element.image == null) {
      image = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    } else {
      image = element.image.medium;
    }
    list += `<li class="favoriteCard "><img src="${image}" alt="${element.name}"></img>${element.name} </li>`;
  });
  listFavoriteSeries.innerHTML = list;
}
