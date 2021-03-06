"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("../model/InlineResponse2001"));

var _InlineResponse3 = _interopRequireDefault(require("../model/InlineResponse2002"));

var _InlineResponse4 = _interopRequireDefault(require("../model/InlineResponse2003"));

var _InlineResponse5 = _interopRequireDefault(require("../model/InlineResponse2004"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Recherche service.
* @module api/RechercheApi
* @version 2.3.0
*/
var RechercheApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RechercheApi. 
  * @alias module:api/RechercheApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RechercheApi(apiClient) {
    _classCallCheck(this, RechercheApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the recherche operation.
   * @callback module:api/RechercheApi~rechercheCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Recherche les entreprises qui correspondent ?? des crit??res.
   * Tous les param??tres sont optionnels et servent ?? filtrer la recherche. Les diff??rentes entreprises seront renvoy??es dans un tableau `resultats`, et le nombre total de r??sultats sera renvoy?? dans le champ `total`.  Pour parcourir l'ensemble des r??sultats, deux solutions sont possibles :  - La pagination (param??tres `page` et `par_page`), limit??e aux 400 premiers r??sultats ; - Les curseurs (param??tres `curseur` et `par_curseur`).  Cette route permet ??galement le t??l??chargement d'un export des r??sultats de recherche au format xlsx, csv ou json. Il faut pour cela utiliser le param??tre `export`. 
   * @param {String} apiToken Cl?? d'utilisation de l'API
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page Page de r??sultats. Valeur par d??faut : `1`.
   * @param {Number} opts.parPage Nombre de r??sultats affich??s sur une page. Valeur par d??faut : `10`.
   * @param {String} opts.curseur Curseur servant ?? parcourir l'ensemble des r??sultats (alternativement ?? la pagination qui est limit??e ?? 400 r??sultats maximum). Doit valoir `*` pour la premi??re requ??te, et doit pour les requ??tes suivantes reprendre la valeur `curseurSuivant` retourn??e par la derni??re r??ponse.
   * @param {Number} opts.parCurseur Nombre de r??sultats affich??s par curseur. Valeur par d??faut : `50`. Valeur minimale: `1`. Valeur maximale : `1000`.
   * @param {module:model/String} opts.bases Bases de donn??es dans lesquelles rechercher. Il est possible d'indiquer plusieurs bases en les s??parant par des virgules. Valeur par d??faut : `\"entreprises\"`.
   * @param {module:model/String} opts.precision Niveau de pr??cision de la recherche. Valeur par d??faut : `\"standard\"`.
   * @param {module:model/String} opts._export Si ce champ est renseign??, la requ??te renverra directement un export de l'ensemble des r??sultats de la recherche.
   * @param {String} opts.q Texte ?? rechercher. D??nomination pour une personne morale, nom et pr??nom pour une personne physique. Si vous recherchez dans plusieurs bases, ce param??tre sera utilis?? pour rechercher dans toutes les bases.
   * @param {String} opts.siege D??fini si la requ??te se base sur le si??ge
   * @param {String} opts.codeNaf Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les s??parant par des virgules.
   * @param {String} opts.departement Num??ro de d??partement de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs d??partements en les s??parant par des virgules.
   * @param {String} opts.region Code de la r??gion de l'un des ??tablissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes r??gions en les s??parant par des virgules.
   * @param {String} opts.codePostal Code postal de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les s??parant par des virgules.
   * @param {String} opts.conventionCollective Convention collective de l'entreprise.
   * @param {String} opts.categorieJuridique Cat??gorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
   * @param {Boolean} opts.entrepriseCessee Activit?? de l'entreprise cess??e ou non.
   * @param {module:model/String} opts.statutRcs Statut au RCS
   * @param {String} opts.objetSocial Objet social de l'entreprise d??clar?? au RCS.
   * @param {String} opts.dateRadiationRcsMin Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
   * @param {String} opts.dateRadiationRcsMax Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
   * @param {String} opts.capitalMin Capital minimum de l'entreprise.
   * @param {String} opts.capitalMax Capital maximum de l'entreprise.
   * @param {String} opts.chiffreAffairesMin Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
   * @param {String} opts.chiffreAffairesMax Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
   * @param {String} opts.resultatMin R??sultat minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
   * @param {String} opts.resultatMax R??sultat maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
   * @param {String} opts.dateCreationMin Date de cr??ation minimale de l'entreprise, au format JJ-MM-AAAA.
   * @param {String} opts.dateCreationMax Date de cr??ation maximale de l'entreprise, au format JJ-MM-AAAA.
   * @param {String} opts.trancheEffectifMin Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
   * @param {String} opts.trancheEffectifMax Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
   * @param {Number} opts.ageDirigeantMin ??ge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
   * @param {Number} opts.ageDirigeantMax ??ge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
   * @param {Date} opts.dateDeNaissanceDirigeantMin Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
   * @param {Date} opts.dateDeNaissanceDirigeantMax Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
   * @param {Number} opts.ageBeneficiaireMin ??ge minimal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
   * @param {Number} opts.ageBeneficiaireMax ??ge maximal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
   * @param {Date} opts.dateDeNaissanceBeneficiaireMin Date de naissance minimale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
   * @param {Date} opts.dateDeNaissanceBeneficiaireMax Date de naissance maximale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
   * @param {Date} opts.dateDepotDocumentMin Date de d??p??t minimale du document, au format JJ-MM-AAAA.
   * @param {Date} opts.dateDepotDocumentMax Date de d??p??t maximale du document, au format JJ-MM-AAAA.
   * @param {module:model/String} opts.typePublication Type de publication
   * @param {Date} opts.datePublicationMin Date publication minimale de la publication, au format JJ-MM-AAAA.
   * @param {Date} opts.datePublicationMax Date de publication maximale de la publication, au format JJ-MM-AAAA.
   * @param {module:api/RechercheApi~rechercheCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/InlineResponse200}
   */


  _createClass(RechercheApi, [{
    key: "recherche",
    value: function recherche(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling recherche");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'page': opts['page'],
        'par_page': opts['parPage'],
        'curseur': opts['curseur'],
        'par_curseur': opts['parCurseur'],
        'bases': opts['bases'],
        'precision': opts['precision'],
        'export': opts['_export'],
        'q': opts['q'],
        'siege': opts['siege'],
        'code_naf': opts['codeNaf'],
        'departement': opts['departement'],
        'region': opts['region'],
        'code_postal': opts['codePostal'],
        'convention_collective': opts['conventionCollective'],
        'categorie_juridique': opts['categorieJuridique'],
        'entreprise_cessee': opts['entrepriseCessee'],
        'statut_rcs': opts['statutRcs'],
        'objet_social': opts['objetSocial'],
        'date_radiation_rcs_min': opts['dateRadiationRcsMin'],
        'date_radiation_rcs_max': opts['dateRadiationRcsMax'],
        'capital_min': opts['capitalMin'],
        'capital_max': opts['capitalMax'],
        'chiffre_affaires_min': opts['chiffreAffairesMin'],
        'chiffre_affaires_max': opts['chiffreAffairesMax'],
        'resultat_min': opts['resultatMin'],
        'resultat_max': opts['resultatMax'],
        'date_creation_min': opts['dateCreationMin'],
        'date_creation_max': opts['dateCreationMax'],
        'tranche_effectif_min': opts['trancheEffectifMin'],
        'tranche_effectif_max': opts['trancheEffectifMax'],
        'age_dirigeant_min': opts['ageDirigeantMin'],
        'age_dirigeant_max': opts['ageDirigeantMax'],
        'date_de_naissance_dirigeant_min': opts['dateDeNaissanceDirigeantMin'],
        'date_de_naissance_dirigeant_max': opts['dateDeNaissanceDirigeantMax'],
        'age_beneficiaire_min': opts['ageBeneficiaireMin'],
        'age_beneficiaire_max': opts['ageBeneficiaireMax'],
        'date_de_naissance_beneficiaire_min': opts['dateDeNaissanceBeneficiaireMin'],
        'date_de_naissance_beneficiaire_max': opts['dateDeNaissanceBeneficiaireMax'],
        'date_depot_document_min': opts['dateDepotDocumentMin'],
        'date_depot_document_max': opts['dateDepotDocumentMax'],
        'type_publication': opts['typePublication'],
        'date_publication_min': opts['datePublicationMin'],
        'date_publication_max': opts['datePublicationMax']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/recherche', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rechercheBeneficiaires operation.
     * @callback module:api/RechercheApi~rechercheBeneficiairesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recherche les b??n??ficiaires effectifs qui correspondent ?? des crit??res.
     * Tous les param??tres sont optionnels et servent ?? filtrer la recherche. Les diff??rents b??n??ficiaires effectifs seront renvoy??es dans un tableau `resultats`.
     * @param {String} apiToken Cl?? d'utilisation de l'API
     * @param {Object} opts Optional parameters
     * @param {Number} opts.parPage Nombre de r??sultats affich??s sur une page. Valeur par d??faut : `10`.
     * @param {Number} opts.page Page de r??sultats. Valeur par d??faut : `1`.
     * @param {module:model/String} opts.precision Niveau de pr??cision de la recherche. Valeur par d??faut : `\"standard\"`.
     * @param {String} opts.q Nom et/ou pr??nom du b??n??ficiaire effectif.
     * @param {Number} opts.ageBeneficiaireMin ??ge minimal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageBeneficiaireMax ??ge maximal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceBeneficiaireMin Date de naissance minimale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceBeneficiaireMax Date de naissance maximale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.codeNaf Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les s??parant par des virgules.
     * @param {String} opts.departement Num??ro de d??partement de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs d??partements en les s??parant par des virgules.
     * @param {String} opts.region Code de la r??gion de l'un des ??tablissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes r??gions en les s??parant par des virgules.
     * @param {String} opts.codePostal Code postal de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les s??parant par des virgules.
     * @param {String} opts.conventionCollective Convention collective de l'entreprise.
     * @param {String} opts.categorieJuridique Cat??gorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
     * @param {Boolean} opts.entrepriseCessee Activit?? de l'entreprise cess??e ou non.
     * @param {module:model/String} opts.statutRcs Statut au RCS
     * @param {String} opts.objetSocial Objet social de l'entreprise d??clar?? au RCS.
     * @param {String} opts.dateRadiationRcsMin Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateRadiationRcsMax Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.capitalMin Capital minimum de l'entreprise.
     * @param {String} opts.capitalMax Capital maximum de l'entreprise.
     * @param {String} opts.chiffreAffairesMin Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.chiffreAffairesMax Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMin R??sultat minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMax R??sultat maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.dateCreationMin Date de cr??ation minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateCreationMax Date de cr??ation maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.trancheEffectifMin Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {String} opts.trancheEffectifMax Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {Number} opts.ageDirigeantMin ??ge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageDirigeantMax ??ge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceDirigeantMin Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceDirigeantMax Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMin Date de d??p??t minimale du document, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMax Date de d??p??t maximale du document, au format JJ-MM-AAAA.
     * @param {module:model/String} opts.typePublication Type de publication
     * @param {Date} opts.datePublicationMin Date publication minimale de la publication, au format JJ-MM-AAAA.
     * @param {Date} opts.datePublicationMax Date de publication maximale de la publication, au format JJ-MM-AAAA.
     * @param {module:api/RechercheApi~rechercheBeneficiairesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */

  }, {
    key: "rechercheBeneficiaires",
    value: function rechercheBeneficiaires(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling rechercheBeneficiaires");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'par_page': opts['parPage'],
        'page': opts['page'],
        'precision': opts['precision'],
        'q': opts['q'],
        'age_beneficiaire_min': opts['ageBeneficiaireMin'],
        'age_beneficiaire_max': opts['ageBeneficiaireMax'],
        'date_de_naissance_beneficiaire_min': opts['dateDeNaissanceBeneficiaireMin'],
        'date_de_naissance_beneficiaire_max': opts['dateDeNaissanceBeneficiaireMax'],
        'code_naf': opts['codeNaf'],
        'departement': opts['departement'],
        'region': opts['region'],
        'code_postal': opts['codePostal'],
        'convention_collective': opts['conventionCollective'],
        'categorie_juridique': opts['categorieJuridique'],
        'entreprise_cessee': opts['entrepriseCessee'],
        'statut_rcs': opts['statutRcs'],
        'objet_social': opts['objetSocial'],
        'date_radiation_rcs_min': opts['dateRadiationRcsMin'],
        'date_radiation_rcs_max': opts['dateRadiationRcsMax'],
        'capital_min': opts['capitalMin'],
        'capital_max': opts['capitalMax'],
        'chiffre_affaires_min': opts['chiffreAffairesMin'],
        'chiffre_affaires_max': opts['chiffreAffairesMax'],
        'resultat_min': opts['resultatMin'],
        'resultat_max': opts['resultatMax'],
        'date_creation_min': opts['dateCreationMin'],
        'date_creation_max': opts['dateCreationMax'],
        'tranche_effectif_min': opts['trancheEffectifMin'],
        'tranche_effectif_max': opts['trancheEffectifMax'],
        'age_dirigeant_min': opts['ageDirigeantMin'],
        'age_dirigeant_max': opts['ageDirigeantMax'],
        'date_de_naissance_dirigeant_min': opts['dateDeNaissanceDirigeantMin'],
        'date_de_naissance_dirigeant_max': opts['dateDeNaissanceDirigeantMax'],
        'date_depot_document_min': opts['dateDepotDocumentMin'],
        'date_depot_document_max': opts['dateDepotDocumentMax'],
        'type_publication': opts['typePublication'],
        'date_publication_min': opts['datePublicationMin'],
        'date_publication_max': opts['datePublicationMax']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse3["default"];
      return this.apiClient.callApi('/recherche-beneficiaires', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rechercheDirigeants operation.
     * @callback module:api/RechercheApi~rechercheDirigeantsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recherche les dirigeants qui correspondent ?? des crit??res.
     * Tous les param??tres sont optionnels et servent ?? filtrer la recherche. Les diff??rents dirigeants seront renvoy??es dans un tableau `resultats`.
     * @param {String} apiToken Cl?? d'utilisation de l'API
     * @param {Object} opts Optional parameters
     * @param {Number} opts.parPage Nombre de r??sultats affich??s sur une page. Valeur par d??faut : `10`.
     * @param {Number} opts.page Page de r??sultats. Valeur par d??faut : `1`.
     * @param {module:model/String} opts.precision Niveau de pr??cision de la recherche. Valeur par d??faut : `\"standard\"`.
     * @param {String} opts.q Texte ?? rechercher. Nom et pr??nom du dirigeant pour une personne physique, d??nomination pour une personne morale.
     * @param {Number} opts.ageDirigeantMin ??ge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageDirigeantMax ??ge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceDirigeantMin Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceDirigeantMax Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.codeNaf Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les s??parant par des virgules.
     * @param {String} opts.departement Num??ro de d??partement de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs d??partements en les s??parant par des virgules.
     * @param {String} opts.region Code de la r??gion de l'un des ??tablissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes r??gions en les s??parant par des virgules.
     * @param {String} opts.codePostal Code postal de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les s??parant par des virgules.
     * @param {String} opts.conventionCollective Convention collective de l'entreprise.
     * @param {String} opts.categorieJuridique Cat??gorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
     * @param {Boolean} opts.entrepriseCessee Activit?? de l'entreprise cess??e ou non.
     * @param {module:model/String} opts.statutRcs Statut au RCS
     * @param {String} opts.objetSocial Objet social de l'entreprise d??clar?? au RCS.
     * @param {String} opts.dateRadiationRcsMin Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateRadiationRcsMax Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.capitalMin Capital minimum de l'entreprise.
     * @param {String} opts.capitalMax Capital maximum de l'entreprise.
     * @param {String} opts.chiffreAffairesMin Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.chiffreAffairesMax Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMin R??sultat minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMax R??sultat maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.dateCreationMin Date de cr??ation minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateCreationMax Date de cr??ation maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.trancheEffectifMin Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {String} opts.trancheEffectifMax Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {Number} opts.ageBeneficiaireMin ??ge minimal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageBeneficiaireMax ??ge maximal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceBeneficiaireMin Date de naissance minimale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceBeneficiaireMax Date de naissance maximale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMin Date de d??p??t minimale du document, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMax Date de d??p??t maximale du document, au format JJ-MM-AAAA.
     * @param {module:model/String} opts.typePublication Type de publication
     * @param {Date} opts.datePublicationMin Date publication minimale de la publication, au format JJ-MM-AAAA.
     * @param {Date} opts.datePublicationMax Date de publication maximale de la publication, au format JJ-MM-AAAA.
     * @param {module:api/RechercheApi~rechercheDirigeantsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */

  }, {
    key: "rechercheDirigeants",
    value: function rechercheDirigeants(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling rechercheDirigeants");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'par_page': opts['parPage'],
        'page': opts['page'],
        'precision': opts['precision'],
        'q': opts['q'],
        'age_dirigeant_min': opts['ageDirigeantMin'],
        'age_dirigeant_max': opts['ageDirigeantMax'],
        'date_de_naissance_dirigeant_min': opts['dateDeNaissanceDirigeantMin'],
        'date_de_naissance_dirigeant_max': opts['dateDeNaissanceDirigeantMax'],
        'code_naf': opts['codeNaf'],
        'departement': opts['departement'],
        'region': opts['region'],
        'code_postal': opts['codePostal'],
        'convention_collective': opts['conventionCollective'],
        'categorie_juridique': opts['categorieJuridique'],
        'entreprise_cessee': opts['entrepriseCessee'],
        'statut_rcs': opts['statutRcs'],
        'objet_social': opts['objetSocial'],
        'date_radiation_rcs_min': opts['dateRadiationRcsMin'],
        'date_radiation_rcs_max': opts['dateRadiationRcsMax'],
        'capital_min': opts['capitalMin'],
        'capital_max': opts['capitalMax'],
        'chiffre_affaires_min': opts['chiffreAffairesMin'],
        'chiffre_affaires_max': opts['chiffreAffairesMax'],
        'resultat_min': opts['resultatMin'],
        'resultat_max': opts['resultatMax'],
        'date_creation_min': opts['dateCreationMin'],
        'date_creation_max': opts['dateCreationMax'],
        'tranche_effectif_min': opts['trancheEffectifMin'],
        'tranche_effectif_max': opts['trancheEffectifMax'],
        'age_beneficiaire_min': opts['ageBeneficiaireMin'],
        'age_beneficiaire_max': opts['ageBeneficiaireMax'],
        'date_de_naissance_beneficiaire_min': opts['dateDeNaissanceBeneficiaireMin'],
        'date_de_naissance_beneficiaire_max': opts['dateDeNaissanceBeneficiaireMax'],
        'date_depot_document_min': opts['dateDepotDocumentMin'],
        'date_depot_document_max': opts['dateDepotDocumentMax'],
        'type_publication': opts['typePublication'],
        'date_publication_min': opts['datePublicationMin'],
        'date_publication_max': opts['datePublicationMax']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2["default"];
      return this.apiClient.callApi('/recherche-dirigeants', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rechercheDocuments operation.
     * @callback module:api/RechercheApi~rechercheDocumentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recherche les documents qui correspondent ?? des crit??res.
     * Tous les param??tres sont optionnels et servent ?? filtrer la recherche. Les diff??rents documents seront renvoy??es dans un tableau `resultats`.
     * @param {String} apiToken Cl?? d'utilisation de l'API
     * @param {Object} opts Optional parameters
     * @param {Number} opts.parPage Nombre de r??sultats affich??s sur une page. Valeur par d??faut : `10`.
     * @param {Number} opts.page Page de r??sultats. Valeur par d??faut : `1`.
     * @param {module:model/String} opts.precision Niveau de pr??cision de la recherche. Valeur par d??faut : `\"standard\"`.
     * @param {String} opts.q Mot-cl?? ?? rechercher dans le contenu du document.
     * @param {Date} opts.dateDepotDocumentMin Date de d??p??t minimale du document, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMax Date de d??p??t maximale du document, au format JJ-MM-AAAA.
     * @param {String} opts.codeNaf Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les s??parant par des virgules.
     * @param {String} opts.departement Num??ro de d??partement de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs d??partements en les s??parant par des virgules.
     * @param {String} opts.region Code de la r??gion de l'un des ??tablissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes r??gions en les s??parant par des virgules.
     * @param {String} opts.codePostal Code postal de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les s??parant par des virgules.
     * @param {String} opts.conventionCollective Convention collective de l'entreprise.
     * @param {String} opts.categorieJuridique Cat??gorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
     * @param {Boolean} opts.entrepriseCessee Activit?? de l'entreprise cess??e ou non.
     * @param {module:model/String} opts.statutRcs Statut au RCS
     * @param {String} opts.objetSocial Objet social de l'entreprise d??clar?? au RCS.
     * @param {String} opts.dateRadiationRcsMin Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateRadiationRcsMax Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.capitalMin Capital minimum de l'entreprise.
     * @param {String} opts.capitalMax Capital maximum de l'entreprise.
     * @param {String} opts.chiffreAffairesMin Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.chiffreAffairesMax Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMin R??sultat minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMax R??sultat maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.dateCreationMin Date de cr??ation minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateCreationMax Date de cr??ation maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.trancheEffectifMin Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {String} opts.trancheEffectifMax Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {Number} opts.ageDirigeantMin ??ge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageDirigeantMax ??ge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceDirigeantMin Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceDirigeantMax Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {Number} opts.ageBeneficiaireMin ??ge minimal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageBeneficiaireMax ??ge maximal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceBeneficiaireMin Date de naissance minimale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceBeneficiaireMax Date de naissance maximale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {module:model/String} opts.typePublication Type de publication
     * @param {Date} opts.datePublicationMin Date publication minimale de la publication, au format JJ-MM-AAAA.
     * @param {Date} opts.datePublicationMax Date de publication maximale de la publication, au format JJ-MM-AAAA.
     * @param {module:api/RechercheApi~rechercheDocumentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */

  }, {
    key: "rechercheDocuments",
    value: function rechercheDocuments(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling rechercheDocuments");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'par_page': opts['parPage'],
        'page': opts['page'],
        'precision': opts['precision'],
        'q': opts['q'],
        'date_depot_document_min': opts['dateDepotDocumentMin'],
        'date_depot_document_max': opts['dateDepotDocumentMax'],
        'code_naf': opts['codeNaf'],
        'departement': opts['departement'],
        'region': opts['region'],
        'code_postal': opts['codePostal'],
        'convention_collective': opts['conventionCollective'],
        'categorie_juridique': opts['categorieJuridique'],
        'entreprise_cessee': opts['entrepriseCessee'],
        'statut_rcs': opts['statutRcs'],
        'objet_social': opts['objetSocial'],
        'date_radiation_rcs_min': opts['dateRadiationRcsMin'],
        'date_radiation_rcs_max': opts['dateRadiationRcsMax'],
        'capital_min': opts['capitalMin'],
        'capital_max': opts['capitalMax'],
        'chiffre_affaires_min': opts['chiffreAffairesMin'],
        'chiffre_affaires_max': opts['chiffreAffairesMax'],
        'resultat_min': opts['resultatMin'],
        'resultat_max': opts['resultatMax'],
        'date_creation_min': opts['dateCreationMin'],
        'date_creation_max': opts['dateCreationMax'],
        'tranche_effectif_min': opts['trancheEffectifMin'],
        'tranche_effectif_max': opts['trancheEffectifMax'],
        'age_dirigeant_min': opts['ageDirigeantMin'],
        'age_dirigeant_max': opts['ageDirigeantMax'],
        'date_de_naissance_dirigeant_min': opts['dateDeNaissanceDirigeantMin'],
        'date_de_naissance_dirigeant_max': opts['dateDeNaissanceDirigeantMax'],
        'age_beneficiaire_min': opts['ageBeneficiaireMin'],
        'age_beneficiaire_max': opts['ageBeneficiaireMax'],
        'date_de_naissance_beneficiaire_min': opts['dateDeNaissanceBeneficiaireMin'],
        'date_de_naissance_beneficiaire_max': opts['dateDeNaissanceBeneficiaireMax'],
        'type_publication': opts['typePublication'],
        'date_publication_min': opts['datePublicationMin'],
        'date_publication_max': opts['datePublicationMax']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse4["default"];
      return this.apiClient.callApi('/recherche-documents', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the recherchePublications operation.
     * @callback module:api/RechercheApi~recherchePublicationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recherche les publications BODACC qui correspondent ?? des crit??res.
     * Tous les param??tres sont optionnels et servent ?? filtrer la recherche. Les diff??rentes publications seront renvoy??es dans un tableau `resultats`.
     * @param {String} apiToken Cl?? d'utilisation de l'API
     * @param {Object} opts Optional parameters
     * @param {Number} opts.parPage Nombre de r??sultats affich??s sur une page. Valeur par d??faut : `10`.
     * @param {Number} opts.page Page de r??sultats. Valeur par d??faut : `1`.
     * @param {module:model/String} opts.precision Niveau de pr??cision de la recherche. Valeur par d??faut : `\"standard\"`.
     * @param {String} opts.q Mot-cl?? ?? rechercher dans le contenu de la publication.
     * @param {String} opts.codeNaf Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les s??parant par des virgules.
     * @param {String} opts.departement Num??ro de d??partement de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs d??partements en les s??parant par des virgules.
     * @param {String} opts.region Code de la r??gion de l'un des ??tablissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes r??gions en les s??parant par des virgules.
     * @param {String} opts.codePostal Code postal de l'un des ??tablissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les s??parant par des virgules.
     * @param {String} opts.conventionCollective Convention collective de l'entreprise.
     * @param {String} opts.categorieJuridique Cat??gorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
     * @param {Boolean} opts.entrepriseCessee Activit?? de l'entreprise cess??e ou non.
     * @param {module:model/String} opts.statutRcs Statut au RCS
     * @param {String} opts.objetSocial Objet social de l'entreprise d??clar?? au RCS.
     * @param {String} opts.dateRadiationRcsMin Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateRadiationRcsMax Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.capitalMin Capital minimum de l'entreprise.
     * @param {String} opts.capitalMax Capital maximum de l'entreprise.
     * @param {String} opts.chiffreAffairesMin Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.chiffreAffairesMax Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMin R??sultat minimum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.resultatMax R??sultat maximum de l'entreprise.  **Note** : Filtrer sur ce crit??re restreint ??norm??ment les entreprises retourn??es car cela ??limine d'office toutes les entreprises dont les comptes ne sont pas publi??s.
     * @param {String} opts.dateCreationMin Date de cr??ation minimale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.dateCreationMax Date de cr??ation maximale de l'entreprise, au format JJ-MM-AAAA.
     * @param {String} opts.trancheEffectifMin Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {String} opts.trancheEffectifMax Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
     * @param {Number} opts.ageDirigeantMin ??ge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageDirigeantMax ??ge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceDirigeantMin Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceDirigeantMax Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {Number} opts.ageBeneficiaireMin ??ge minimal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Number} opts.ageBeneficiaireMax ??ge maximal du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises).
     * @param {Date} opts.dateDeNaissanceBeneficiaireMin Date de naissance minimale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
     * @param {Date} opts.dateDeNaissanceBeneficiaireMax Date de naissance maximale du b??n??ficiaire effectif (ou de l'un des b??n??ficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMin Date de d??p??t minimale du document, au format JJ-MM-AAAA.
     * @param {Date} opts.dateDepotDocumentMax Date de d??p??t maximale du document, au format JJ-MM-AAAA.
     * @param {module:model/String} opts.typePublication Type de publication
     * @param {Date} opts.datePublicationMin Date publication minimale de la publication, au format JJ-MM-AAAA.
     * @param {Date} opts.datePublicationMax Date de publication maximale de la publication, au format JJ-MM-AAAA.
     * @param {module:api/RechercheApi~recherchePublicationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */

  }, {
    key: "recherchePublications",
    value: function recherchePublications(apiToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'apiToken' is set

      if (apiToken === undefined || apiToken === null) {
        throw new Error("Missing the required parameter 'apiToken' when calling recherchePublications");
      }

      var pathParams = {};
      var queryParams = {
        'api_token': apiToken,
        'par_page': opts['parPage'],
        'page': opts['page'],
        'precision': opts['precision'],
        'q': opts['q'],
        'code_naf': opts['codeNaf'],
        'departement': opts['departement'],
        'region': opts['region'],
        'code_postal': opts['codePostal'],
        'convention_collective': opts['conventionCollective'],
        'categorie_juridique': opts['categorieJuridique'],
        'entreprise_cessee': opts['entrepriseCessee'],
        'statut_rcs': opts['statutRcs'],
        'objet_social': opts['objetSocial'],
        'date_radiation_rcs_min': opts['dateRadiationRcsMin'],
        'date_radiation_rcs_max': opts['dateRadiationRcsMax'],
        'capital_min': opts['capitalMin'],
        'capital_max': opts['capitalMax'],
        'chiffre_affaires_min': opts['chiffreAffairesMin'],
        'chiffre_affaires_max': opts['chiffreAffairesMax'],
        'resultat_min': opts['resultatMin'],
        'resultat_max': opts['resultatMax'],
        'date_creation_min': opts['dateCreationMin'],
        'date_creation_max': opts['dateCreationMax'],
        'tranche_effectif_min': opts['trancheEffectifMin'],
        'tranche_effectif_max': opts['trancheEffectifMax'],
        'age_dirigeant_min': opts['ageDirigeantMin'],
        'age_dirigeant_max': opts['ageDirigeantMax'],
        'date_de_naissance_dirigeant_min': opts['dateDeNaissanceDirigeantMin'],
        'date_de_naissance_dirigeant_max': opts['dateDeNaissanceDirigeantMax'],
        'age_beneficiaire_min': opts['ageBeneficiaireMin'],
        'age_beneficiaire_max': opts['ageBeneficiaireMax'],
        'date_de_naissance_beneficiaire_min': opts['dateDeNaissanceBeneficiaireMin'],
        'date_de_naissance_beneficiaire_max': opts['dateDeNaissanceBeneficiaireMax'],
        'date_depot_document_min': opts['dateDepotDocumentMin'],
        'date_depot_document_max': opts['dateDepotDocumentMax'],
        'type_publication': opts['typePublication'],
        'date_publication_min': opts['datePublicationMin'],
        'date_publication_max': opts['datePublicationMax']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse5["default"];
      return this.apiClient.callApi('/recherche-publications', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RechercheApi;
}();

exports["default"] = RechercheApi;