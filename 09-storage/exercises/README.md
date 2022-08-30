# Feladatok

1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár!

   
2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott süti nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF
 
3. Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.  
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, 
és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.   
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.
