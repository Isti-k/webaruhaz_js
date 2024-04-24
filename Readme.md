# webéruház


## Specifikáció

1. A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta alapján!
2. Figyelj a reszponzitvitásra!
3. Az oldalon legyen szűrés.
4. Rendezési lehetőség!
5. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. Táblázatban!
6. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
7. ++ Lehet, hogy szükséged lesz a localStorage használatára. 
8. ++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is. Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
9. A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Alkalmazott függvény

**kartyaMegjelenito(lista)->(txt)**;
Megjeleníti a kártyákat

**kartyaOsszaallítja(lista)->(txt)**;
Összeállítja a kártyákat

**tablázatMegjelenito(lista)->(txt)**;
Megjeleníti a táblázatot. pl: kosarat

**tablázatOsszeallit(lista)->(txt)**;
Összeállítja a táblázatot

**nevRendezesiSorrend(lista)->rendezesiLista**;
A-Z vagy fordítva rendezi a listát névszerint

**nevSzuro(lista)->szuresilista**;
Névszerint szűri a listát

**sorTorles(kosarLista, termekIndex)**;
kitörli az adott sort a kosárból, ha a kosárban lévő kuka ikonra rákattint

**kosar(lista)->kosarLista**;
beleteszi a kosárba az adott terméket (kosarlistaba)

**urlapAdat()->urlapAdat**;
Szállítási adatok éS a hozzáad gombra kattintva összegyűjtjük a valid ürlap adatokat, és kiírjuk a konzolra





