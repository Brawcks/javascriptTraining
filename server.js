var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
	int = req.params.etagenum;
	if (isNaN(int) == false) {
		res.render('chambre.ejs', {etage: req.params.etagenum});	
	}else {
		res.end('L\'URL n\'est pas bonne !');
	}
});

app.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send("page introuvable !!!");
});

app.listen(8080);