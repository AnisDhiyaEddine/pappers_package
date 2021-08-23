var PappersApi = require('pappers_api');


var api = new PappersApi.ComptesAnnuelsApi()
var apiToken = votre_clé_ici; // {String} Clé d'utilisation de l'API
var opts = {
  'siren': 443061841, // {String} SIREN de l'entreprise
  'annee': "2016,2017,2018" // {String} Année de cloture des comptes souhaités. Il est possible d'indiquer plusieurs années en les séparant par des virgules. Si le paramètre n'est pas fourni, toutes les années disponibles seront retournées.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};

api.comptesAnnuels(apiToken, opts, callback);