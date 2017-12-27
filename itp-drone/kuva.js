////////////////////////////
// IMAGE PARSER INTERFACE //
////////////////////////////

var ImageParser = require('image-parser');
var kuva = ImageParser;

kuva.prototype.f_korkeus = ImageParser.prototype.height;
kuva.prototype.f_leveys = ImageParser.prototype.width;
kuva.prototype.f_pikseli = function() {
 if (this.pikselit === undefined) this.pikselit = createPixelList(this);
 return this.pikselit;
};
kuva.prototype.f_sarake = function() {
 if (this.sarakkeet === undefined) this.sarakkeet = createPixelMatrix(this, true);
 return this.sarakkeet;
};
kuva.prototype.f_rivi = function() {
 if (this.rivit === undefined) this.rivit = createPixelMatrix(this, false);
 return this.rivit;
};

function createPixelList(img) {
 var list = [];
 var xl = img.width();
 var yl = img.height();
 for (var x = 0; x < xl; x++) {
  for (var y = 0; y < yl; y++) {
   var pixel = img.getPixel(x, y);
   pixel.x = x;
   pixel.y = y;
   list.push(pixel);
  }
 }
 return list;
}

function createPixelMatrix(img, column) {
 var list = [];
 var xl = column ? img.width() : img.height();
 var yl = column ? img.height() : img.width();
 for (var x = 0; x < xl; x++) {
  var pl = new pikselilista({indeksi: x});
  for (var y = 0; y < yl; y++) {
   var pixel = column ? img.getPixel(x, y) : img.getPixel(y, x);
   pixel.x = column ? x : y;
   pixel.y = column ? y : x;
   pl.pikseli.push(pixel);
  }
  list.push(pl);
 }
 return list;
}

function pikselilista(args) {
 this.pikseli = args["pikseli"] || [];
 this.indeksi = args["indeksi"] || 0;
}
pikselilista.prototype.f_pikseli = function() { return this.pikseli; };
pikselilista.prototype.f_indeksi = function() { return this.indeksi; };
pikselilista.prototype.f_häntä = function() { return new pikselilista({pikseli: this.pikseli.slice(1), indeksi: this.indeksi}); };

function kuvajäsentäjä(args) {
 this.kuva = new ImageParser(args["sisääntulo"]);
}
kuvajäsentäjä.prototype.assign = function(n, v) { this[n] = v; };
kuvajäsentäjä.prototype.f_kuva = function() { return this.kuva; };
kuvajäsentäjä.prototype.jäsentää_kuvansa_A__N = function() { return new Promise((ret, fail) => this.kuva.parse(err => err ? fail(err) : ret(this.kuva))); };

var pikseli = require('pixel-class');

pikseli.prototype.f_punaisuus = function() { return this.r; };
pikseli.prototype.f_vihreys = function() { return this.g; };
pikseli.prototype.f_sinisyys = function() { return this.b; };
pikseli.prototype.f_läpinäkyvyys = function() { return this.a; };
pikseli.prototype.f_x_koordinaatti = function() { return this.x; };
pikseli.prototype.f_y_koordinaatti = function() { return this.y; };
