====================
 Toteutusdokumentti
====================

Yleistä
=======

Ohjelma on kirjoitettu `Tampio-ohjelmointikielellä <Tampio_>`_ (tästedes ITP) ja se kääntyy JavaScriptiksi.
Ohjelma on tarkoitettu suoritettavaksi Node.js-tulkilla ja se riippuu useista NPM-paketeista.

.. _Tampio: https://github.com/fergusq/tampio

Tässä repositoryssä on kolme erillistä osaa, jotka muodostavat yhdessä kokonaisuuden:

* Varsinainen droonia ohjaava ohjelma (sisältäen pääohjelman ja kuva-analysoijan)
* JavaScript/ITP-yhteensopivuuskirjasto
* Testiohjelma kuva-analysoijan testaamiseksi

Riippuvuudet
============

ITP-kääntäjän ja Node.js-tulkin lisäksi ohjelma tarvitsee kahta NPM-pakettia:

* image-parser
* ar-drone

Näistä ar-dronea käytetään droonin kanssa kommunikointiin.
Image-parser on kuvanjäsennyskirjasto ja sillä on poikkeuksellisen paljon riippuvuuksia, minkä vuoksi kannatan sen korvaamista jollakin toisella.

Varsinainen ohjelma
===================

Varsinainen ohjelma koostuu pääohjelmasta ja kuva-analysoijaohjelmasta, jotka kumpikin on toteutettu ITP-tiedostoina.
Ne löytyvät ``src``-kansiosta.
Varsinaisen ohjelman ainoa riippuvuus on JavaScript/ITP-yhteensopivuuskirjasto.

Kuva-analysoijaohjelmaa käytetään punaisten esineiden tunnistamiseen kuvasta.

JavaScript/ITP-yhteensopivuuskirjasto
=====================================

Jotta ITP-tiedostoissa voi viitata JavaScript-funktioihin ja -muuttujiin, on ne lisättävä yhteensopivuuskirjastoon.
Kirjasto koostuu kahdesta osasta: ITP-kirjastosta, joka sisältää muuttujien ja tyyppien määrittelyt sekä JavaScript-kirjastoon,
jossa luodaan aliakset funktioille siten, että niiden nimet noudattavat ITP:n sallimaa nimeämiskäytäntöä ja manglausta.

Sekä image-parserille että ar-dronelle on yhteensopivuuskirjastot, jotka löytyvät ``js``-kansiosta.

Testiohjelmat
=============

Kuva-analysointialgoritmin testaamista varten on kirjoitettu ohjelma, jonka voi suorittaa komentoriviltä halutun kuvan analysoimiseksi.
Testausohjelma tuottaa SVG-tiedoston, johon on merkitty punaiset alueet.
Ohjelma löytyy ``testit``-kansiosta.
