

export function tablazatRendez(lista,irany){
    lista.sort(function (a,b) {
        return a.nev.toUpperCase()>b.nevtoUpperCase() ? 1*irany : -1*irany;
    });
    return lista;
}

export function szuresNevSzerint(lista, szurtSzoveg){
    const szurtLista=lista.filter(function(elem){
        return elem.nev.includes(szurtSzoveg);
    });
    console.log(szurtLista);
    return szurtLista;
}