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
    instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
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

  describe('EntrepriseFicheAllOfBeneficiairesEffectifs', function() {
    it('should create an instance of EntrepriseFicheAllOfBeneficiairesEffectifs', function() {
      // uncomment below and update the code to test EntrepriseFicheAllOfBeneficiairesEffectifs
      //var instane = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be.a(PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs);
    });

    it('should have the property dateGreffe (base name: "date_greffe")', function() {
      // uncomment below and update the code to test the property dateGreffe
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property nom (base name: "nom")', function() {
      // uncomment below and update the code to test the property nom
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property nomUsage (base name: "nom_usage")', function() {
      // uncomment below and update the code to test the property nomUsage
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property prenom (base name: "prenom")', function() {
      // uncomment below and update the code to test the property prenom
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pseudonyme (base name: "pseudonyme")', function() {
      // uncomment below and update the code to test the property pseudonyme
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property dateDeNaissanceFormatee (base name: "date_de_naissance_formatee")', function() {
      // uncomment below and update the code to test the property dateDeNaissanceFormatee
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property dateDeNaissanceCompleteFormatee (base name: "date_de_naissance_complete_formatee")', function() {
      // uncomment below and update the code to test the property dateDeNaissanceCompleteFormatee
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property nationalite (base name: "nationalite")', function() {
      // uncomment below and update the code to test the property nationalite
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property codeNationalite (base name: "code_nationalite")', function() {
      // uncomment below and update the code to test the property codeNationalite
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property villeDeNaissance (base name: "ville_de_naissance")', function() {
      // uncomment below and update the code to test the property villeDeNaissance
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property paysDeNaissance (base name: "pays_de_naissance")', function() {
      // uncomment below and update the code to test the property paysDeNaissance
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property codePaysDeNaissance (base name: "code_pays_de_naissance")', function() {
      // uncomment below and update the code to test the property codePaysDeNaissance
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property adresseLigne1 (base name: "adresse_ligne_1")', function() {
      // uncomment below and update the code to test the property adresseLigne1
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property adresseLigne2 (base name: "adresse_ligne_2")', function() {
      // uncomment below and update the code to test the property adresseLigne2
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property adresseLigne3 (base name: "adresse_ligne_3")', function() {
      // uncomment below and update the code to test the property adresseLigne3
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property codePostal (base name: "code_postal")', function() {
      // uncomment below and update the code to test the property codePostal
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property ville (base name: "ville")', function() {
      // uncomment below and update the code to test the property ville
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pays (base name: "pays")', function() {
      // uncomment below and update the code to test the property pays
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property codePays (base name: "code_pays")', function() {
      // uncomment below and update the code to test the property codePays
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentageParts (base name: "pourcentage_parts")', function() {
      // uncomment below and update the code to test the property pourcentageParts
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentagePartsDirectes (base name: "pourcentage_parts_directes")', function() {
      // uncomment below and update the code to test the property pourcentagePartsDirectes
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentagePartsIndirectes (base name: "pourcentage_parts_indirectes")', function() {
      // uncomment below and update the code to test the property pourcentagePartsIndirectes
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentagePartsVocationTitulaire (base name: "pourcentage_parts_vocation_titulaire")', function() {
      // uncomment below and update the code to test the property pourcentagePartsVocationTitulaire
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detailsPartsDirectes (base name: "details_parts_directes")', function() {
      // uncomment below and update the code to test the property detailsPartsDirectes
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detailsPartsIndirectes (base name: "details_parts_indirectes")', function() {
      // uncomment below and update the code to test the property detailsPartsIndirectes
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detailsPartsVocationTitulaire (base name: "details_parts_vocation_titulaire")', function() {
      // uncomment below and update the code to test the property detailsPartsVocationTitulaire
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentageVotes (base name: "pourcentage_votes")', function() {
      // uncomment below and update the code to test the property pourcentageVotes
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentageVotesDirects (base name: "pourcentage_votes_directs")', function() {
      // uncomment below and update the code to test the property pourcentageVotesDirects
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property pourcentageVotesIndirect (base name: "pourcentage_votes_indirect")', function() {
      // uncomment below and update the code to test the property pourcentageVotesIndirect
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detailsVotesDirects (base name: "details_votes_directs")', function() {
      // uncomment below and update the code to test the property detailsVotesDirects
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detailsVotesIndirects (base name: "details_votes_indirects")', function() {
      // uncomment below and update the code to test the property detailsVotesIndirects
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detailsSocieteDeGestion (base name: "details_societe_de_gestion")', function() {
      // uncomment below and update the code to test the property detailsSocieteDeGestion
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detentionPouvoirDecisionAg (base name: "detention_pouvoir_decision_ag")', function() {
      // uncomment below and update the code to test the property detentionPouvoirDecisionAg
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detentionPouvoirNomMembreConseilAdministration (base name: "detention_pouvoir_nom_membre_conseil_administration")', function() {
      // uncomment below and update the code to test the property detentionPouvoirNomMembreConseilAdministration
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property detentionAutresMoyensControle (base name: "detention_autres_moyens_controle")', function() {
      // uncomment below and update the code to test the property detentionAutresMoyensControle
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property beneficiaireRepresentantLegal (base name: "beneficiaire_representant_legal")', function() {
      // uncomment below and update the code to test the property beneficiaireRepresentantLegal
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

    it('should have the property representantLegalPlacementSansGestionDelegation (base name: "representant_legal_placement_sans_gestion_delegation")', function() {
      // uncomment below and update the code to test the property representantLegalPlacementSansGestionDelegation
      //var instance = new PappersApi.EntrepriseFicheAllOfBeneficiairesEffectifs();
      //expect(instance).to.be();
    });

  });

}));