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
    instance = new PappersApi.BodaccVente();
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

  describe('BodaccVente', function() {
    it('should create an instance of BodaccVente', function() {
      // uncomment below and update the code to test BodaccVente
      //var instane = new PappersApi.BodaccVente();
      //expect(instance).to.be.a(PappersApi.BodaccVente);
    });

    it('should have the property rcs (base name: "rcs")', function() {
      // uncomment below and update the code to test the property rcs
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property nomEntreprise (base name: "nom_entreprise")', function() {
      // uncomment below and update the code to test the property nomEntreprise
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property personneMorale (base name: "personne_morale")', function() {
      // uncomment below and update the code to test the property personneMorale
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property denomination (base name: "denomination")', function() {
      // uncomment below and update the code to test the property denomination
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property nom (base name: "nom")', function() {
      // uncomment below and update the code to test the property nom
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property prenom (base name: "prenom")', function() {
      // uncomment below and update the code to test the property prenom
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property administration (base name: "administration")', function() {
      // uncomment below and update the code to test the property administration
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property adresse (base name: "adresse")', function() {
      // uncomment below and update the code to test the property adresse
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property commentaires (base name: "commentaires")', function() {
      // uncomment below and update the code to test the property commentaires
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property oppositions (base name: "oppositions")', function() {
      // uncomment below and update the code to test the property oppositions
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property declarationCreance (base name: "declaration_creance")', function() {
      // uncomment below and update the code to test the property declarationCreance
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

    it('should have the property publicationLegale (base name: "publication_legale")', function() {
      // uncomment below and update the code to test the property publicationLegale
      //var instance = new PappersApi.BodaccVente();
      //expect(instance).to.be();
    });

  });

}));
