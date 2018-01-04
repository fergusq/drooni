===========
 ITP-DRONE
===========

Hakemistorakenne
----------------

::

    build.sh               Käännösskripti
    build-main.sh          Skripti, joka kääntää main.itp-tiedoston main.js-tiedostoksi
    src/                   Varsinaisen ohjelman lähdekoodi
      main.itp               Pääohjelma
      kuva-analysoija.itp    Kuva-analysointikirjasto
    js/                    JavaScript/ITP-yhteensopivuuskirjasto
      drooni.js              ar-dronen kirjasto
      kuva.js                Kuvajäsentimen kirjasto
    testit/                Testiohjelmia
      kuva-analysoija2.itp   Kuva-analysoijan testiohjelma

Riippuvuudet
------------

* `Tampio-kääntäjä <http://github.com/fergusq/tampio>`_
* node.js-tulkki
* image-parser (npm:stä) (huom. huono, mieti korvaamista)
* ar-drone (npm:stä)

Kääntäminen
-----------

Varmista ennen kääntämistä, että ``$TAMPIO_HOME``-ympäristömuuttuja on asetettu.

Ohjelma käännetään ``build.sh``-komennolla::

    ./build.sh <ulostulotiedosto> <sisääntulotiedostot>

Kuva-analysoijan testiohjelman kääntäminen::

    ./build.sh ka.js js/kuva.js src/kuva-analysoija.js testit/kuva-analysoija2.js

Komento luo tiedoston ``ka.js`` annetuista tiedostoista.

Varsinaisen ohjelman kääntäminen::

    ./build-main.sh

Käyttäminen
-----------

Kuva-analysoijan testiohjelman käyttäminen::

    node ka.js <kuvatiedosto> <kuvatiedoston polku suhteessa svg-tiedoston polkuun> > <svg-tiedosto>

Esim::

    node ka.js testit/lähellä.jpg lähellä.jpg >testit/lähellä.svg

Varsinaisen ohjelman käyttäminen::

    node main.js
