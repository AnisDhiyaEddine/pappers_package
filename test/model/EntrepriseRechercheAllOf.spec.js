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
    instance = new PappersApi.EntrepriseRechercheAllOf();
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

  describe('EntrepriseRechercheAllOf', function() {
    it('should create an instance of EntrepriseRechercheAllOf', function() {
      // uncomment below and update the code to test EntrepriseRechercheAllOf
      //var instane = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be.a(PappersApi.EntrepriseRechercheAllOf);
    });

    it('should have the property siege (base name: "siege")', function() {
      // uncomment below and update the code to test the property siege
      //var instance = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be();
    });

    it('should have the property villes (base name: "villes")', function() {
      // uncomment below and update the code to test the property villes
      //var instance = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be();
    });

    it('should have the property chiffreAffaires (base name: "chiffre_affaires")', function() {
      // uncomment below and update the code to test the property chiffreAffaires
      //var instance = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be();
    });

    it('should have the property resultat (base name: "resultat")', function() {
      // uncomment below and update the code to test the property resultat
      //var instance = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be();
    });

    it('should have the property effectifsFinances (base name: "effectifs_finances")', function() {
      // uncomment below and update the code to test the property effectifsFinances
      //var instance = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be();
    });

    it('should have the property anneeFinances (base name: "annee_finances")', function() {
      // uncomment below and update the code to test the property anneeFinances
      //var instance = new PappersApi.EntrepriseRechercheAllOf();
      //expect(instance).to.be();
    });

  });

}));
