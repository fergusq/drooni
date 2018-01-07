===================
 Testausdokumentti
===================

Kuva-analysointialgoritmi
=========================

"Kuivatestaus"
--------------

``kuva-analysoija2.itp`` on skripti, jonka avulla voi käyttää kuva-analysointialgoritmia ilman droonia.
Annan valmiiksi otettuja kuvia algoritmille ja tutkin lopputulosta.
Käyttämiäni kuvia on testit-kansiossa.

Tulokset ovat olleet hyviä. Algoritmi tunnistaa punaiset alueet kuvassa.

Maatestaus
----------

Ohjelmoin droonin tulostamaan konsoliin tietoa näkymästään
ja testaan laittamalla sen eteen erilaisia esineitä, kun se on maassa.

Tulokset ovat kohtalaisia.
Robotti osaa tunnistaa usein toivotun punaisen esineen sijainnin,
mutta hämääntyy usein antamaan vääriä tuloksia.

Toimivuus pimeässä huonoa.
Vika ei ole täysin kuvantunnistusalgoritmissa, vaan robotin kamera on huono
ja saattaa antaa hyvin kelvotonta dataa, vaikka sitä valaisisi suoraan taskulampulla.

Ilmatestaus
-----------

Ohjelmoin droonin lentämään ja liikkumaan nähdessään raja-arvon ylittävää punaisuutta.

Tähän mennessä tulokset ovat olleet huonoja, sillä olen päässyt testaamaan robottia vain illalla pimeässä.
Se osaa huomata punaisen värin, jos sitä valaisee taskulampulla ja pitää aivan robotin edessä (< 30 cm),
mutta ei juuri muulloin.

Drooni ei osaa pysyä paikallaan, mikä vaikeuttaa testaamista.