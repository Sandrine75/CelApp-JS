

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////CECI EST UNE VERSION DE TESTING///////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// 1- CMD intaller express : npm install express --save
const express = require('express');
const app = express();

//Installer EJS dans le front end : npm install ejs --save
app.set('view engine', 'ejs');
app.use(express.static('public'));

// ecoute du server
const port = (process.env.PORT || 3031);

// 2- CMD installer base de donnée : npm install mongodb
        //var mongoose= require('mongoose');
        //var querystring = require("querystring");

// 3- Installer les routes avec l'ejs HTML
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/home', function (req, res) {
  res.render('home');
});
/*app.get('/formulaire', function (req, res) {
    res.render('formulaire');
});*/
/*
app.get('/single', function (req, res) {
  res.render('single');
});
app.get('/review', function (req, res) {
  res.render('review');
});
app.get('/contact', function (req, res) {
  res.render('contact');
});*/


/*app.listen("3030", function () {
  console.log("Server listening on port 3030");
});
*/

app.listen(port, () => {
  console.log("Server listening on port 3031");
});

// fichier "views" inscrire 
/*
<html>
	<head>
    </head>
    <body>
        <div>
        </div>
    </body> 
</html> */

// fichier "public" inscrire :
/* style.css */ 

