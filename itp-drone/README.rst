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
      drooni.itp             ar-dronen kirjaston ITP-osa
      drooni.js              ar-dronen kirjaston JavaScript-osa
      kuva.itp               Kuvajäsentimen kirjaston ITP-osa
      kuva.js                Kuvajäsentimen kirjaston JavaScript-osa
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

    ./build.sh -o <ulostulotiedosto> <sisääntulotiedosto>

Kuva-analysoijan testiohjelman kääntäminen::

    ./build.sh -o ka.js testit/kuva-analysoija2.js

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
