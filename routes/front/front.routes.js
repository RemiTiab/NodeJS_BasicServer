/* 
Imports
*/
  const express = require('express');
  const frontRouter = express.Router();

//

/* 
Configuration
*/
  class FrontRouterClass{
    constructor(){}
    routes() {
      // Configurer la Homepage
      frontRouter.get( `/`, (req, res) => {
        // Rendre le fichier index
        res.render(`index`);
      });

      // Configurer les informations utilisateur
      frontRouter.get( `/me`, (req, res) => {
        // Rendre le fichier me
        res.render(`me`);
      });
    };

    init() {
      // Lancer la méthode routes
      this.routes();
      // Renvoyer le router
      return frontRouter;
    };
  }
//

/* 
Exports
*/
  module.exports = { FrontRouterClass };
//