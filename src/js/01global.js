"use strict";

console.log(">> Ready :)");

const savedSeries = JSON.parse(localStorage.getItem("favoritesSeries"));

//Variables

const inputForm = document.querySelector(".js-input");
const btn = document.querySelector(".js-button");

const containerSeries = document.querySelector(".js-containList");

const listSeries = document.querySelector(".js-series-list");
const listFavoriteSeries = document.querySelector(".js-favorite-list");

const inputSeries = document.querySelector(".js-input-name");
