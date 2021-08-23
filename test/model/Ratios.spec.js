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
    instance = new PappersApi.Ratios();
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

  describe('Ratios', function() {
    it('should create an instance of Ratios', function() {
      // uncomment below and update the code to test Ratios
      //var instane = new PappersApi.Ratios();
      //expect(instance).to.be.a(PappersApi.Ratios);
    });

    it('should have the property chiffreAffaires (base name: "chiffre_affaires")', function() {
      // uncomment below and update the code to test the property chiffreAffaires
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property resultat (base name: "resultat")', function() {
      // uncomment below and update the code to test the property resultat
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property effectif (base name: "effectif")', function() {
      // uncomment below and update the code to test the property effectif
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property margeBrute (base name: "marge_brute")', function() {
      // uncomment below and update the code to test the property margeBrute
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property excedentBrutExploitation (base name: "excedent_brut_exploitation")', function() {
      // uncomment below and update the code to test the property excedentBrutExploitation
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property resultatExploitation (base name: "resultat_exploitation")', function() {
      // uncomment below and update the code to test the property resultatExploitation
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property tauxCroissanceChiffreAffaires (base name: "taux_croissance_chiffre_affaires")', function() {
      // uncomment below and update the code to test the property tauxCroissanceChiffreAffaires
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property tauxMargeBrute (base name: "taux_marge_brute")', function() {
      // uncomment below and update the code to test the property tauxMargeBrute
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property tauxMargeEBITDA (base name: "taux_marge_EBITDA")', function() {
      // uncomment below and update the code to test the property tauxMargeEBITDA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property tauxMargeOperationnelle (base name: "taux_marge_operationnelle")', function() {
      // uncomment below and update the code to test the property tauxMargeOperationnelle
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property BFR (base name: "BFR")', function() {
      // uncomment below and update the code to test the property BFR
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property bFRExploitation (base name: "BFR_exploitation")', function() {
      // uncomment below and update the code to test the property bFRExploitation
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property bFRHorsExploitation (base name: "BFR_hors_exploitation")', function() {
      // uncomment below and update the code to test the property bFRHorsExploitation
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property bFRJoursCA (base name: "BFR_jours_CA")', function() {
      // uncomment below and update the code to test the property bFRJoursCA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property bFRExploitationJoursCA (base name: "BFR_exploitation_jours_CA")', function() {
      // uncomment below and update the code to test the property bFRExploitationJoursCA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property bFRHorsExploitationJoursCA (base name: "BFR_hors_exploitation_jours_CA")', function() {
      // uncomment below and update the code to test the property bFRHorsExploitationJoursCA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property delaiPaiementClientsJours (base name: "delai_paiement_clients_jours")', function() {
      // uncomment below and update the code to test the property delaiPaiementClientsJours
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property delaiPaiementFournisseursJours (base name: "delai_paiement_fournisseurs_jours")', function() {
      // uncomment below and update the code to test the property delaiPaiementFournisseursJours
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property ratioStockCAJours (base name: "ratio_stock_CA_jours")', function() {
      // uncomment below and update the code to test the property ratioStockCAJours
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property capaciteAutofinancement (base name: "capacite_autofinancement")', function() {
      // uncomment below and update the code to test the property capaciteAutofinancement
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property capaciteAutofinancementCA (base name: "capacite_autofinancement_CA")', function() {
      // uncomment below and update the code to test the property capaciteAutofinancementCA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property fondsRoulementNetGlobal (base name: "fonds_roulement_net_global")', function() {
      // uncomment below and update the code to test the property fondsRoulementNetGlobal
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property couvertureBFR (base name: "couverture_BFR")', function() {
      // uncomment below and update the code to test the property couvertureBFR
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property tresorerie (base name: "tresorerie")', function() {
      // uncomment below and update the code to test the property tresorerie
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property dettesFinancieres (base name: "dettes_financieres")', function() {
      // uncomment below and update the code to test the property dettesFinancieres
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property capaciteRemboursement (base name: "capacite_remboursement")', function() {
      // uncomment below and update the code to test the property capaciteRemboursement
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property ratioEndettement (base name: "ratio_endettement")', function() {
      // uncomment below and update the code to test the property ratioEndettement
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property autonomieFinanciere (base name: "autonomie_financiere")', function() {
      // uncomment below and update the code to test the property autonomieFinanciere
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property tauxLevier (base name: "taux_levier")', function() {
      // uncomment below and update the code to test the property tauxLevier
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property etatDettes1AnAuPlus (base name: "etat_dettes_1_an_au_plus")', function() {
      // uncomment below and update the code to test the property etatDettes1AnAuPlus
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property liquiditeGenerale (base name: "liquidite_generale")', function() {
      // uncomment below and update the code to test the property liquiditeGenerale
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property couvertureDettes (base name: "couverture_dettes")', function() {
      // uncomment below and update the code to test the property couvertureDettes
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property margeNette (base name: "marge_nette")', function() {
      // uncomment below and update the code to test the property margeNette
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property rentabiliteFondsPropres (base name: "rentabilite_fonds_propres")', function() {
      // uncomment below and update the code to test the property rentabiliteFondsPropres
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property rentabiliteEconomique (base name: "rentabilite_economique")', function() {
      // uncomment below and update the code to test the property rentabiliteEconomique
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property valeurAjoutee (base name: "valeur_ajoutee")', function() {
      // uncomment below and update the code to test the property valeurAjoutee
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property valeurAjouteeCA (base name: "valeur_ajoutee_CA")', function() {
      // uncomment below and update the code to test the property valeurAjouteeCA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property salairesChargesSociales (base name: "salaires_charges_sociales")', function() {
      // uncomment below and update the code to test the property salairesChargesSociales
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property salairesCA (base name: "salaires_CA")', function() {
      // uncomment below and update the code to test the property salairesCA
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

    it('should have the property impotsTaxes (base name: "impots_taxes")', function() {
      // uncomment below and update the code to test the property impotsTaxes
      //var instance = new PappersApi.Ratios();
      //expect(instance).to.be();
    });

  });

}));
