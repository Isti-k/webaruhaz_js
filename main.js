import { gepLISTA } from "./adat.js";
import { tablakRendezNevek, tablazatRendezArnov, tablazatRendezArcs, tablazatRendezKategoria, szuresNevSz } from "./adatkezelo.js";
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
    //KategoriaSzEsemeny();
}

export function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev")
    const szuroGomb = $("#szures");
    szuroGomb.on("click", function(){
        let szuroSZoveg = szuroELEM.val()
        const Lista=szuresNevSz(gepLISTA, szuroSZoveg);
        init(Lista)
    });
    
}

