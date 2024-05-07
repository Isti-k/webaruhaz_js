import { gepLISTA } from "./adat.js";
import { tablakRendezNevek, tablazatRendezArnov, tablazatRendezArcs, tablazatRendezKategoria, szuresNevSz, szuresKategoriaSz } from "./adatkezelo.js";
import { kartyaMegjelenito, kartyaOsszeallit } from "./fuggveny.js";

init(gepLISTA);
szuresek();

export function init(lista){
    const txt = kartyaOsszeallit(lista);
    kartyaMegjelenito(txt);
}

function szuresek(){
    tablakRendezNevek(gepLISTA);
    tablazatRendezArcs(gepLISTA);
    tablazatRendezArnov(gepLISTA);
    tablazatRendezKategoria(gepLISTA);
    nevSzuresEsemeny();
    KategoriaSzEsemeny();
}

export function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev")
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val()
        const Lista=szuresNevSz(gepLISTA, szuroSZoveg);
        init(Lista)
    });
}

function KategoriaSzEsemeny(){
    const szuroELEM = $("#szNev");
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val();
        const Lista = szuresKategoriaSz(gepLISTA, szuroSZoveg);
        init(Lista);
    });
}