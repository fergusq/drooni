////////////////////////
// AR DRONE INTERFACE //
////////////////////////
var fs = require('fs');

var arDrone = require('ar-drone');
var ohjattava_lennokki = arDrone.createClient();
{
 ohjattava_lennokki.assign = function(n, v) { this[n] = v; };
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
  perääntyä: function(n) { this.back(n/100); },
  kääntyä_myötäpäivään: function(n) { this.clockwise(n/100); },
  kääntyä_vastapäivään: function(n) { this.counterClockwise(n/100); }
 };
 for (const method in methods1) {
  ohjattava_lennokki[method+"_A_Uo_N"] = methods1[method];
  ohjattava_lennokki[method+"_A_KuluttuaUo_N"] = function(t, n) { this.after(t, function() { methods1[method].call(this, n); }); };
 }
 ohjattava_lennokki.suorittaa_A_GSo_N = function(o,u) { this.animate(o, u); };
 ohjattava_lennokki.suorittaa_A_KuluttuaGSo_N = function(t,o,u) { this.after(t, function() { this.animate(o, u); }); };
 ohjattava_lennokki.tehdä_A_KuluttuaG_N = function(t, a) { this.after(t, a); };
 var i = 0;
 ohjattava_lennokki.getPngStream()
   .on('error', console.log)
   .on('data', function(pngBuffer) {
    i++;
    if (i%20==0 && ohjattava_lennokki.lukea_A_P_N) {
     fs.writeFile("testi.png", pngBuffer,  "binary",function(err) { });
     var img = new ImageParser(pngBuffer);
     img.parse(err => {
      if (err) console.log(err);
      else ohjattava_lennokki.lukea_A_P_N(img);
     });
    }
  });
}
