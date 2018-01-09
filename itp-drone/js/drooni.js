////////////////////////
// AR DRONE INTERFACE //
////////////////////////
var fs = require('fs');

var arDrone = require('ar-drone');
var drone = arDrone.createClient();
{
 drone.assign = function(n, v) { this[n] = v; };
 // metodit, joilla ei ole parametreja
 const methods0 = {
  nousta_ilmaan: drone.takeoff,
  laskeutua: drone.land,
  pysähtyä: function() { this.up(0); this.front(0); }
 };
 for (const method in methods0) {
  drone[method+"_A__N"] = methods0[method];
  drone[method+"_A_Kuluttua_N"] = function(t) { this.after(t, methods0[method]); };
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
  drone[method+"_A_Uo_N"] = methods1[method];
  drone[method+"_A_KuluttuaUo_N"] = function(t, n) { this.after(t, function() { methods1[method].call(this, n); }); };
 }
 drone.suorittaa_A_GSo_N = function(o,u) { this.animate(o, u); };
 drone.suorittaa_A_KuluttuaGSo_N = function(t,o,u) { this.after(t, function() { this.animate(o, u); }); };
 drone.tehdä_A_KuluttuaG_N = function(t, a) { this.after(t, a); };
 var i = 0;
 drone.getPngStream()
   .on('error', console.log)
   .on('data', function(pngBuffer) {
    i++;
    if (i%20==0 && drone.lukea_A_P_N) {
     fs.writeFile("testi.png", pngBuffer,  "binary",function(err) { });
     var img = new ImageParser(pngBuffer);
     img.parse(err => {
      if (err) console.log(err);
      else drone.lukea_A_P_N(img);
     });
    }
  });
}
