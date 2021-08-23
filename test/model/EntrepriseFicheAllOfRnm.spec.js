/**
 * Pappers API
 * L'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d'API dans les requêtes, en utilisant le paramètre `api_token`.  L'URL d'accès à l'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L'historique des modifications (changelog) est accessible à l'url suivante : https://www.pappers.fr/api/changelog 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: support@pappers.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PappersApi);
  }
}(this, function(expect, PappersApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PappersApi.EntrepriseFicheAllOfRnm();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EntrepriseFicheAllOfRnm', function() {
    it('should create an instance of EntrepriseFicheAllOfRnm', function() {
      // uncomment below and update the code to test EntrepriseFicheAllOfRnm
      //var instane = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be.a(PappersApi.EntrepriseFicheAllOfRnm);
    });

    it('should have the property dateImmatriculation (base name: "date_immatriculation")', function() {
      // uncomment below and update the code to test the property dateImmatriculation
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

    it('should have the property dateRadiation (base name: "date_radiation")', function() {
      // uncomment below and update the code to test the property dateRadiation
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

    it('should have the property dateDebutActivite (base name: "date_debut_activite")', function() {
      // uncomment below and update the code to test the property dateDebutActivite
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

    it('should have the property dateCessationActivite (base name: "date_cessation_activite")', function() {
      // uncomment below and update the code to test the property dateCessationActivite
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

    it('should have the property chambreDesMetiers (base name: "chambre_des_metiers")', function() {
      // uncomment below and update the code to test the property chambreDesMetiers
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

    it('should have the property qualification (base name: "qualification")', function() {
      // uncomment below and update the code to test the property qualification
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

    it('should have the property derniereMiseAJour (base name: "derniere_mise_a_jour")', function() {
      // uncomment below and update the code to test the property derniereMiseAJour
      //var instance = new PappersApi.EntrepriseFicheAllOfRnm();
      //expect(instance).to.be();
    });

  });

}));