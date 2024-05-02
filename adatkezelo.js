

export function sorRendezNev(lista,irany){
    rendezNev=$("#katrgoria1");
    rendezNev.on("click", function(lista){
        lista.sort(function (a,b) {
            return a.nev.toUpperCase()>b.nevtoUpperCase() ? 1*irany : -1*irany;
        });
    })
    
}