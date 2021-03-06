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
    instance = new PappersApi.EntrepriseFicheAllOfComptes();
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

  describe('EntrepriseFicheAllOfComptes', function() {
    it('should create an instance of EntrepriseFicheAllOfComptes', function() {
      // uncomment below and update the code to test EntrepriseFicheAllOfComptes
      //var instane = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be.a(PappersApi.EntrepriseFicheAllOfComptes);
    });

    it('should have the property dateDepot (base name: "date_depot")', function() {
      // uncomment below and update the code to test the property dateDepot
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property dateDepotFormate (base name: "date_depot_formate")', function() {
      // uncomment below and update the code to test the property dateDepotFormate
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property dateCloture (base name: "date_cloture")', function() {
      // uncomment below and update the code to test the property dateCloture
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property anneeCloture (base name: "annee_cloture")', function() {
      // uncomment below and update the code to test the property anneeCloture
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property confidentialite (base name: "confidentialite")', function() {
      // uncomment below and update the code to test the property confidentialite
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property confidentialiteCompteDeResultat (base name: "confidentialite_compte_de_resultat")', function() {
      // uncomment below and update the code to test the property confidentialiteCompteDeResultat
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property disponible (base name: "disponible")', function() {
      // uncomment below and update the code to test the property disponible
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property nomFichierPdf (base name: "nom_fichier_pdf")', function() {
      // uncomment below and update the code to test the property nomFichierPdf
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property disponibleXlsx (base name: "disponible_xlsx")', function() {
      // uncomment below and update the code to test the property disponibleXlsx
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property nomFichierXlsx (base name: "nom_fichier_xlsx")', function() {
      // uncomment below and update the code to test the property nomFichierXlsx
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

    it('should have the property tokenXlsx (base name: "token_xlsx")', function() {
      // uncomment below and update the code to test the property tokenXlsx
      //var instance = new PappersApi.EntrepriseFicheAllOfComptes();
      //expect(instance).to.be();
    });

  });

}));
