import { kartyaMegjelenito, kartyaOsszeallit } from "./fuggveny.js";

export function tablakRendezNevek(lista){
    const nevRendez = $("#rendezes");
    nevRendez.on("change", function(){
        if(nevRendez.val() === "nev"){
            szuresNev(lista);
            kartyaMegjelenito(kartyaOsszeallit(lista));
        }
    });
}

export function szuresNev(lista){
    lista.sort(function(a,b){
        return a.nev.toUpperCase() > b.nev.toUpperCase() ? 1 : -1;
    });
    return lista;
}

export function tablazatRendezArnov(lista){
    const arSzerint = $("#rendezes");
    arSzerint.on("change", function(){
        if(arSzerint.val() === "arn"){
            szuresArn(lista);
            kartyaMegjelenito(kartyaOsszeallit(lista));
        }
    });
   
}

function szuresArn(lista){
    lista.sort(function(a,b){
        return a.ar - b.ar;
    });
    return lista;
}

export function tablazatRendezArcs(lista){
    const arSzerint = $("#rendezes");
    arSzerint.on("change", function(){
        if(arSzerint.val() === "arcs"){
            szuresArcs(lista);
            kartyaMegjelenito(kartyaOsszeallit(lista));
        }
    });
   
}

function szuresArcs(lista){
    lista.sort(function(a,b){
        return b.ar - a.ar;
    });
    return lista;
}

export function tablazatRendezKategoria(lista){
    const kategoriaSzerint = $("#rendezes");
    kategoriaSzerint.on("change", function(){
        if(kategoriaSzerint.val() === "kategoria"){
            szuresKategoria(lista);
            kartyaMegjelenito(kartyaOsszeallit(lista));
        }
    });
}

function szuresKategoria(lista){
    lista.sort(function(a,b){
        return a.kategoria.toUpperCase() > b.kategoria.toUpperCase() ? 1 : -1;
    });
    return lista;
}

export function szuresNevSz(lista, szurtSzoveg){
    const szurtLISTA = lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    return szurtLISTA;
}