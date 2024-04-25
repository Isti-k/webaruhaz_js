import { gepLISTA } from "./adat.js";


export function kartyaOsszeallit(lista){
    let txt = "";
    txt += `<div class="row m-1">`;
    lista.forEach((element, i) => {
        txt += `<div class="card" style="width:300px">`;
        txt += `<img class="card-img-top" src="${element.kep}" alt="Card image">`;
        txt += `<div class="card-body">`;
        txt += `<h4 class="card-title">${element.nev}</h4>`;
        txt += `<p class="card-text">${element.ar}FT</p>`;
        txt += `<p class="card-text">Kategória: ${element.kategoria}</p>`;
        txt += `<a href="kosar.html"  style="background-color: lightseagreen; border-color: gray;" class="btn btn-primary">Kosár</a>`;
        txt += `</div>`;
        txt += `</div>`;
    });
    txt += "</div>";
    return txt;
}

export function kartyaMegjelenito(txt){
    const adatokELEM = $("#kartya");
    adatokELEM.html(txt);
}