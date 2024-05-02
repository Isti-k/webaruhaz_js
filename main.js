import { gepLISTA } from "./adat.js";
import { kartyaMegjelenito, kartyaOsszeallit } from "./fuggveny.js";


kartyaMegjelenito(kartyaOsszeallit(gepLISTA));

export function nevSzuresEsemeny(){
    const szuroELEM = $("#szNev")
    szuroELEM.on("keyup", function(){
        let szuroSZoveg = szuroELEM.val()
        const LISTA=szuresNevSzerint(emberekLISTA, szuroSZoveg);
        init(LISTA)
    });
}