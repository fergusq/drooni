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
 for (var method in methods0) {
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
 for (var method in methods1) {
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

///////////////////////
// CONSOLE INTERFACE //
///////////////////////

function tulostaa_N(t) {
 console.log(t);
}
