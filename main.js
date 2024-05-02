import { gepLISTA } from "./adat.js";
import { tablazatRendez, szuresNevSzerint } from "./adatkezelo.js";
import { kartyaMegjelenito, kartyaOsszeallit } from "./fuggveny.js";

kartyaMegjelenito(kartyaOsszeallit(gepLISTA));

export function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev")
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val()
        const LISTA=szuresNevSzerint(gepLISTA, szuroSZoveg);
        init(LISTA)
    });
}