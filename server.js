/*
Imports
*/
  // NodeJS
  require('dotenv').config(); // Variable d'environnement
  const express = require('express'); // Configuration du serveur
  const ejs = require('ejs'); // Moteur du template
  const path = require('path'); // Gestion du dossier client

    // Inner
    const { mainRouter } = require('./routes/main.router');
//


/*
Configuration
*/
  // Création d'une variable pour le serveur
  const server = express();
  // Définition du port
  const port = process.env.PORT;
  // Configurer le dossier www
  server.set( 'views', __dirname + '/www' );
  server.use( express.static(path.join(__dirname, 'www')) );
  // Configurer le moteur de rendu
  server.set( 'view engine', 'ejs' );
  // Ajouter le router dans le serveur
  server.use(`/`, mainRouter );

//

/*
Lancer le serveur
*/
  server.listen( port, () => {
    console.log(`Server listening on port ${port}.`)
  });
//