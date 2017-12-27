// Object
Object.prototype.prepend = function(x) { return [this].concat(x); };

// Array
Array.prototype.lisätä_P_N_T = function(kiva_arvo) { this.push(kiva_arvo); };
Array.prototype.f_määrä = function() { return this.length; };
Array.prototype.f_summa = function() { return this.reduce((a,b) => a+b); }
Array.prototype.nth_last = function(n) { return this[this.length-n]; };

// Lista
function lista(vals) {
 this.alkio = ("alkio" in vals) ? vals["alkio"] : [];
};
lista.prototype.assign = function(n, v) { this[n] = v; };
lista.prototype.f_alkio = function() { return this.alkio; };
lista.prototype.f_koko = function() { return this.alkio.length; };
lista.prototype.f_häntä = function() { return new lista({"alkio": this.alkio.slice(1)}); };
lista.prototype.etsiä_indeksin_A_Ut_N = function(item) { return this.alkio.indexOf(item); };
lista.prototype.lisätä_P_N_St = function(item) { this.alkio.push(item); }
lista.prototype.p_tyhjä = function() { return this.f_alkio().f_määrä() === 0; };
const tyhjä_lista = new lista({});

// Function
Function.prototype.suorittaa_P__N = function() { this(); }

// Number/luku
const power_handler = {get: (a, b) => Math.pow(a, Number.parseInt(b)+1)};
Number.prototype.f_potenssi = function() { return new Proxy(this, power_handler); };
Number.prototype.f_neliöjuuri = function() { return Math.sqrt(this); };
Number.prototype.f_kuutiojuuri = function() { return Math.cbrt(this); };
Number.prototype.f_sini = function() { return Math.sin(this); };
Number.prototype.f_kosini = function() { return Math.cos(this); };
Number.prototype.f_tangentti = function() { return Math.tan(this); };
Number.prototype.f_logaritmi = function() { return Math.log(this); };
Number.prototype.f_vastalogaritmi = function() { return Math.exp(this); };
Number.prototype.f_merkki = function() { return Math.sign(this); };
Number.prototype.f_itseisarvo = function() { return Math.abs(this); };
Number.prototype.f_vastaluku = function() { return -this; };
Number.prototype.f_käänteisluku = function() { return 1/this; };
Number.prototype.f_seuraaja = function() { return this+1; };
Number.prototype.f_edeltäjä = function() { return this-1; };
Number.prototype.f_tekijä = function() { var l=[]; for (var i=1; i<=this; i++) if (this%i===0) l.push(i); return l; }
Number.prototype.f_alkutekijä = function() { var l=[]; for (var i=2; i<this; i++) if (this%i===0&&!l.some(j=>i%j===0)) l.push(i); return l; }
Number.prototype.f_pyöristetty_E = Math.round;
Number.prototype.f_pyöristetty_E_St = function(e) { e = Math.pow(10, e); return Math.round(this*e)/e; };
Number.prototype.f_kokonaisluku_E
Number.prototype.f_merkkijono_E = Number.prototype.toString;

// String/merkkijono
String.prototype.f_pituus = function() { return this.length; };
String.prototype.f_merkki = function() { return Array.from(this); };
String.prototype.f_sana = function() { return this.split(/\s+/); };
String.prototype.f_kenttä = function() { return this.split(/,/); };
String.prototype.f_siistitty_E = String.prototype.trim;
String.prototype.näyttää_käyttäjälle_P__N = function() { alert(this); };
String.prototype.merkitä_lokiin_P__N = function() { console.log(this); };
String.prototype.jakaa_P_SeT_N = function(sep, list) { for (var s of this.split(sep)) list.push(s); };

// HTMLDocument/sivu
if (typeof HTMLDocument !== 'undefined') {
 HTMLDocument.prototype.näyttää_A_G_N = HTMLDocument.prototype.write;
 HTMLDocument.prototype.etsiä_elementin_A_StUo_N = function(muuttuja, id) {
  muuttuja.arvo = this.getElementById(id);
 };
 HTMLDocument.prototype.etsiä_elementin_A_Uo_N = HTMLDocument.prototype.getElementById;
}

// HTMLElement/elementti
if (typeof HTMLElement !== 'undefined') {
 HTMLElement.prototype.assign = function(n, v) {
  switch (n) {
   case "painaa_P__P":
    this.addEventListener("click", v);
    break;
  }
  this[n] = v;
 };
 HTMLElement.prototype.kirjoittaa_P_N_Ut = function(text) { this.innerHTML += text; };
 HTMLElement.prototype.kirjoittaa_P_N_St = function(text) { this.innerHTML += text; };
 HTMLElement.prototype.pyyhkiä_P__N = function() { this.innerHTML = ""; };
}

// Date/aika
Date.prototype.f_päivämäärämerkkijono_E = function() { return this.getLocaleDateString(); };
Date.prototype.f_kellonaikamerkkijono_E = function() { return this.getLocaleTimeString(); };
Date.prototype.f_merkkijono_E = function() { return this.getLocaleString(); };
Date.prototype.f_millisekunti_E = function() { return this.getTime(); };
Date.prototype.f_vuosi = function() { return this.getFullYear(); };
Date.prototype.f_kuukausi = function() { return this.getMonth(); };
Date.prototype.f_päivä = function() { return this.getDay(); };
Date.prototype.f_tunti = function() { return this.getHours(); };
Date.prototype.f_minuutti = function() { return this.getMinutes(); };
Date.prototype.f_sekunti = function() { return this.getSeconds(); };
var nykyinen_aika = new Date();

// muuttuja
function muuttuja(vals) {
 this.arvo = ("arvo" in vals) ? vals["arvo"] : undefined;
};
muuttuja.prototype.assign = function(n, v) { this[n] = v; };
muuttuja.prototype.f_arvo = function() { return this.arvo; };
muuttuja.prototype.lukea_luku_P__St = function() { this.arvo = Number.parseInt(prompt("Syötä luku")); };
muuttuja.prototype.lukea_luku_P_Uo_St = function(p) { this.arvo = Number.parseInt(prompt(p)); };

// toistetaan
function toistaa_KertaaN(n, tehokas_toiminto) { for (var i = 0; i < n; i++) tehokas_toiminto(); };

// console
function tulostaa_N(t) { console.log(t); }
////////////////////////////
// IMAGE PARSER INTERFACE //
////////////////////////////

var ImageParser = require('image-parser');

ImageParser.prototype.f_pikseli = function() {
 if (this.pikselit === undefined) this.pikselit = this.pixels();
 return this.pikselit;
};

var PixelClass = require('pixel-class');

PixelClass.prototype.f_punaisuus = function() { return this.r; };
PixelClass.prototype.f_vihreys = function() { return this.g; };
PixelClass.prototype.f_sinisyys = function() { return this.b; };
PixelClass.prototype.f_läpinäkyvyys = function() { return this.a; };
////////////////////////
// AR DRONE INTERFACE //
////////////////////////

var arDrone = require('ar-drone');
lennokki = {};
lennokki.prototype = arDrone.Client.prototype;
var ohjattava_lennokki = arDrone.createClient();
{
 // metodit, joilla ei ole parametreja
 const methods0 = {
  nousta_ilmaan: ohjattava_lennokki.takeoff,
  laskeutua: ohjattava_lennokki.land,
  pysähtyä: function() { this.up(0); this.front(0); }
 };
 for (const method in methods0) {
  ohjattava_lennokki[method+"_A__N"] = methods0[method];
  ohjattava_lennokki[method+"_A_Kuluttua_N"] = function(t) { this.after(t, methods0[method]); };
 }
 // metodit, joilla on yksi parametri
 const methods1 = {
  nostaa_korkeutta: function(n) { this.up(n/100); },
  laskea_korkeutta: function(n) { this.down(n/100); },
  edetä: function(n) { this.front(n/100); },
  perääntyä: function(n) { this.back(n/100); }
 };
 for (const method in methods1) {
  ohjattava_lennokki[method+"_A_Uo_N"] = methods1[method];
  ohjattava_lennokki[method+"_A_KuluttuaUo_N"] = function(t, n) { this.after(t, function() { methods1[method].call(this, n); }); };
 }
 ohjattava_lennokki.suorittaa_A_GSo_N = function(o,u) { this.animate(o, u); };
 ohjattava_lennokki.suorittaa_A_KuluttuaGSo_N = function(t,o,u) { this.after(t, function() { this.animate(o, u); }); };
 ohjattava_lennokki.tehdä_A_KuluttuaG_N = function(t, a) { this.after(t, a); };
 ohjattava_lennokki.getPngStream()
   .on('error', console.log)
   .on('data', function(pngBuffer) {
    if (ohjattava_lennokki.käsittellä_kuva_A__N) {
     ohjattava_lennokki.käsittellä_kuva_A__N(new ImageParser(pngBuffer));
    }
  });
}
function aloittaa_() {
 ohjattava_lennokki.suorittaa_ohjelman_A__N();
};
lennokki.prototype.suorittaa_ohjelman_A__N = function() {
 var ohjattava_lennokki = this;
 this.nousta_ilmaan_A__N();
 this.edetä_A_KuluttuaUo_N((2000), (20));
 this.perääntyä_A_KuluttuaUo_N((3000), (20));
 this.pysähtyä_A_Kuluttua_N((1000));
 this.laskeutua_A_Kuluttua_N((1000));
};
aloittaa_();
