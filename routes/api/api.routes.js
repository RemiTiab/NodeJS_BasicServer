/* 
Imports
*/
  const express = require('express');
  const apiRouter = express.Router();

//

/* 
Configuration
*/
  class ApiRouterClass{
    constructor(){};

    routes() {
      // Configurer la Homepage
      apiRouter.get( `/`, (req, res) => {
        // Renvoyer des données en JSON
        res.json( { msg: `Hello API`, data: ['NodeJs', `API`] } );
      });
    };

    init() {
      // Lancer la méthode routes
      this.routes();
      // Renvoyer le router
      return apiRouter;
    };
  }
//

/* 
Exports
*/
  module.exports = { ApiRouterClass };
//