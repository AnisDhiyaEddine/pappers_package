"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseBase = _interopRequireDefault(require("./EntrepriseBase"));

var _EntrepriseBaseConventionsCollectives = _interopRequireDefault(require("./EntrepriseBaseConventionsCollectives"));

var _EntrepriseRechercheAllOf = _interopRequireDefault(require("./EntrepriseRechercheAllOf"));

var _EtablissementRecherche = _interopRequireDefault(require("./EtablissementRecherche"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseRecherche model module.
 * @module model/EntrepriseRecherche
 * @version 2.3.0
 */
var EntrepriseRecherche = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseRecherche</code>.
   * @alias module:model/EntrepriseRecherche
   * @implements module:model/EntrepriseBase
   * @implements module:model/EntrepriseRechercheAllOf
   */
  function EntrepriseRecherche() {
    _classCallCheck(this, EntrepriseRecherche);

    _EntrepriseBase["default"].initialize(this);

    _EntrepriseRechercheAllOf["default"].initialize(this);

    EntrepriseRecherche.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseRecherche, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseRecherche</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseRecherche} obj Optional instance to populate.
     * @return {module:model/EntrepriseRecherche} The populated <code>EntrepriseRecherche</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseRecherche();

        _EntrepriseBase["default"].constructFromObject(data, obj);

        _EntrepriseRechercheAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('siren')) {
          obj['siren'] = _ApiClient["default"].convertToType(data['siren'], 'String');
        }

        if (data.hasOwnProperty('siren_formate')) {
          obj['siren_formate'] = _ApiClient["default"].convertToType(data['siren_formate'], 'String');
        }

        if (data.hasOwnProperty('nom_entreprise')) {
          obj['nom_entreprise'] = _ApiClient["default"].convertToType(data['nom_entreprise'], 'String');
        }

        if (data.hasOwnProperty('personne_morale')) {
          obj['personne_morale'] = _ApiClient["default"].convertToType(data['personne_morale'], 'Boolean');
        }

        if (data.hasOwnProperty('denomination')) {
          obj['denomination'] = _ApiClient["default"].convertToType(data['denomination'], 'String');
        }

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('prenom')) {
          obj['prenom'] = _ApiClient["default"].convertToType(data['prenom'], 'String');
        }

        if (data.hasOwnProperty('sexe')) {
          obj['sexe'] = _ApiClient["default"].convertToType(data['sexe'], 'String');
        }

        if (data.hasOwnProperty('code_naf')) {
          obj['code_naf'] = _ApiClient["default"].convertToType(data['code_naf'], 'String');
        }

        if (data.hasOwnProperty('libelle_code_naf')) {
          obj['libelle_code_naf'] = _ApiClient["default"].convertToType(data['libelle_code_naf'], 'String');
        }

        if (data.hasOwnProperty('domaine_activite')) {
          obj['domaine_activite'] = _ApiClient["default"].convertToType(data['domaine_activite'], 'String');
        }

        if (data.hasOwnProperty('conventions_collectives')) {
          obj['conventions_collectives'] = _ApiClient["default"].convertToType(data['conventions_collectives'], [_EntrepriseBaseConventionsCollectives["default"]]);
        }

        if (data.hasOwnProperty('date_creation')) {
          obj['date_creation'] = _ApiClient["default"].convertToType(data['date_creation'], 'Date');
        }

        if (data.hasOwnProperty('date_creation_formate')) {
          obj['date_creation_formate'] = _ApiClient["default"].convertToType(data['date_creation_formate'], 'String');
        }

        if (data.hasOwnProperty('entreprise_cessee')) {
          obj['entreprise_cessee'] = _ApiClient["default"].convertToType(data['entreprise_cessee'], 'Boolean');
        }

        if (data.hasOwnProperty('date_cessation')) {
          obj['date_cessation'] = _ApiClient["default"].convertToType(data['date_cessation'], 'String');
        }

        if (data.hasOwnProperty('entreprise_employeuse')) {
          obj['entreprise_employeuse'] = _ApiClient["default"].convertToType(data['entreprise_employeuse'], 'Boolean');
        }

        if (data.hasOwnProperty('categorie_juridique')) {
          obj['categorie_juridique'] = _ApiClient["default"].convertToType(data['categorie_juridique'], 'String');
        }

        if (data.hasOwnProperty('forme_juridique')) {
          obj['forme_juridique'] = _ApiClient["default"].convertToType(data['forme_juridique'], 'String');
        }

        if (data.hasOwnProperty('effectif')) {
          obj['effectif'] = _ApiClient["default"].convertToType(data['effectif'], 'String');
        }

        if (data.hasOwnProperty('effectif_min')) {
          obj['effectif_min'] = _ApiClient["default"].convertToType(data['effectif_min'], 'Number');
        }

        if (data.hasOwnProperty('effectif_max')) {
          obj['effectif_max'] = _ApiClient["default"].convertToType(data['effectif_max'], 'Number');
        }

        if (data.hasOwnProperty('tranche_effectif')) {
          obj['tranche_effectif'] = _ApiClient["default"].convertToType(data['tranche_effectif'], 'String');
        }

        if (data.hasOwnProperty('annee_effectif')) {
          obj['annee_effectif'] = _ApiClient["default"].convertToType(data['annee_effectif'], 'Number');
        }

        if (data.hasOwnProperty('capital')) {
          obj['capital'] = _ApiClient["default"].convertToType(data['capital'], 'Number');
        }

        if (data.hasOwnProperty('statut_rcs')) {
          obj['statut_rcs'] = _ApiClient["default"].convertToType(data['statut_rcs'], 'String');
        }

        if (data.hasOwnProperty('siege')) {
          obj['siege'] = _EtablissementRecherche["default"].constructFromObject(data['siege']);
        }

        if (data.hasOwnProperty('villes')) {
          obj['villes'] = _ApiClient["default"].convertToType(data['villes'], ['String']);
        }

        if (data.hasOwnProperty('chiffre_affaires')) {
          obj['chiffre_affaires'] = _ApiClient["default"].convertToType(data['chiffre_affaires'], 'Number');
        }

        if (data.hasOwnProperty('resultat')) {
          obj['resultat'] = _ApiClient["default"].convertToType(data['resultat'], 'Number');
        }

        if (data.hasOwnProperty('effectifs_finances')) {
          obj['effectifs_finances'] = _ApiClient["default"].convertToType(data['effectifs_finances'], 'Number');
        }

        if (data.hasOwnProperty('annee_finances')) {
          obj['annee_finances'] = _ApiClient["default"].convertToType(data['annee_finances'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseRecherche;
}();
/**
 * Le numéro SIREN de l'entreprise au format xxxxxxxxx.
 * @member {String} siren
 */


EntrepriseRecherche.prototype['siren'] = undefined;
/**
 * Le numéro SIREN de l'entreprise au format xxx xxx xxx.
 * @member {String} siren_formate
 */

EntrepriseRecherche.prototype['siren_formate'] = undefined;
/**
 * Le nom de l'entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique.
 * @member {String} nom_entreprise
 */

EntrepriseRecherche.prototype['nom_entreprise'] = undefined;
/**
 * Vrai en cas de personne morale, faux en cas de personne physique.
 * @member {Boolean} personne_morale
 */

EntrepriseRecherche.prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise si personne morale.
 * @member {String} denomination
 */

EntrepriseRecherche.prototype['denomination'] = undefined;
/**
 * Nom si personne physique.
 * @member {String} nom
 */

EntrepriseRecherche.prototype['nom'] = undefined;
/**
 * Prénom si personne physique.
 * @member {String} prenom
 */

EntrepriseRecherche.prototype['prenom'] = undefined;
/**
 * Sexe si personne physique. F pour féminin, M pour masculin.
 * @member {String} sexe
 */

EntrepriseRecherche.prototype['sexe'] = undefined;
/**
 * Code NAF de l'entreprise.
 * @member {String} code_naf
 */

EntrepriseRecherche.prototype['code_naf'] = undefined;
/**
 * Libellé du code NAF de l'entreprise.
 * @member {String} libelle_code_naf
 */

EntrepriseRecherche.prototype['libelle_code_naf'] = undefined;
/**
 * Domaine d'activité de l'entreprise.
 * @member {String} domaine_activite
 */

EntrepriseRecherche.prototype['domaine_activite'] = undefined;
/**
 * Liste des conventions collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseBaseConventionsCollectives>} conventions_collectives
 */

EntrepriseRecherche.prototype['conventions_collectives'] = undefined;
/**
 * Date de création de l'entreprise au format AAAA-MM-JJ.
 * @member {Date} date_creation
 */

EntrepriseRecherche.prototype['date_creation'] = undefined;
/**
 * Date de création de l'entreprise au format JJ/MM/AAAA.
 * @member {String} date_creation_formate
 */

EntrepriseRecherche.prototype['date_creation_formate'] = undefined;
/**
 * Si vrai, l'entreprise n'est plus en activité. Sinon, elle est toujours en activité.
 * @member {Boolean} entreprise_cessee
 */

EntrepriseRecherche.prototype['entreprise_cessee'] = undefined;
/**
 * Date de cessation de l'entreprise au format AAAA-MM-JJ.
 * @member {String} date_cessation
 */

EntrepriseRecherche.prototype['date_cessation'] = undefined;
/**
 * Si vrai, l'entreprise a au moins un employé.
 * @member {Boolean} entreprise_employeuse
 */

EntrepriseRecherche.prototype['entreprise_employeuse'] = undefined;
/**
 * Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
 * @member {String} categorie_juridique
 */

EntrepriseRecherche.prototype['categorie_juridique'] = undefined;
/**
 * Forme juridique de l'entreprise.
 * @member {String} forme_juridique
 */

EntrepriseRecherche.prototype['forme_juridique'] = undefined;
/**
 * Tranche d'effectif de l'entreprise.
 * @member {String} effectif
 */

EntrepriseRecherche.prototype['effectif'] = undefined;
/**
 * Effectif minimal de l'entreprise.
 * @member {Number} effectif_min
 */

EntrepriseRecherche.prototype['effectif_min'] = undefined;
/**
 * Effectif maximal de l'entreprise.
 * @member {Number} effectif_max
 */

EntrepriseRecherche.prototype['effectif_max'] = undefined;
/**
 * Tranche d'effectif de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */

EntrepriseRecherche.prototype['tranche_effectif'] = undefined;
/**
 * Année de validité des variables effectif, effectif_min et effectif_max.
 * @member {Number} annee_effectif
 */

EntrepriseRecherche.prototype['annee_effectif'] = undefined;
/**
 * Capital de l'entreprise.
 * @member {Number} capital
 */

EntrepriseRecherche.prototype['capital'] = undefined;
/**
 * Statut de l'entreprise au RCS
 * @member {String} statut_rcs
 */

EntrepriseRecherche.prototype['statut_rcs'] = undefined;
/**
 * @member {module:model/EtablissementRecherche} siege
 */

EntrepriseRecherche.prototype['siege'] = undefined;
/**
 * Liste des villes où l'entreprise a au moins un établissement.
 * @member {Array.<String>} villes
 */

EntrepriseRecherche.prototype['villes'] = undefined;
/**
 * Chiffre d'affaires de l'entreprise.
 * @member {Number} chiffre_affaires
 */

EntrepriseRecherche.prototype['chiffre_affaires'] = undefined;
/**
 * Résultat de l'entreprise.
 * @member {Number} resultat
 */

EntrepriseRecherche.prototype['resultat'] = undefined;
/**
 * Effectif de l'entreprise.
 * @member {Number} effectifs_finances
 */

EntrepriseRecherche.prototype['effectifs_finances'] = undefined;
/**
 * Année de correspondance des variables financières (chiffre_affaires, resultat, effectifs_finances).
 * @member {String} annee_finances
 */

EntrepriseRecherche.prototype['annee_finances'] = undefined; // Implement EntrepriseBase interface:

/**
 * Le numéro SIREN de l'entreprise au format xxxxxxxxx.
 * @member {String} siren
 */

_EntrepriseBase["default"].prototype['siren'] = undefined;
/**
 * Le numéro SIREN de l'entreprise au format xxx xxx xxx.
 * @member {String} siren_formate
 */

_EntrepriseBase["default"].prototype['siren_formate'] = undefined;
/**
 * Le nom de l'entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique.
 * @member {String} nom_entreprise
 */

_EntrepriseBase["default"].prototype['nom_entreprise'] = undefined;
/**
 * Vrai en cas de personne morale, faux en cas de personne physique.
 * @member {Boolean} personne_morale
 */

_EntrepriseBase["default"].prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise si personne morale.
 * @member {String} denomination
 */

_EntrepriseBase["default"].prototype['denomination'] = undefined;
/**
 * Nom si personne physique.
 * @member {String} nom
 */

_EntrepriseBase["default"].prototype['nom'] = undefined;
/**
 * Prénom si personne physique.
 * @member {String} prenom
 */

_EntrepriseBase["default"].prototype['prenom'] = undefined;
/**
 * Sexe si personne physique. F pour féminin, M pour masculin.
 * @member {String} sexe
 */

_EntrepriseBase["default"].prototype['sexe'] = undefined;
/**
 * Code NAF de l'entreprise.
 * @member {String} code_naf
 */

_EntrepriseBase["default"].prototype['code_naf'] = undefined;
/**
 * Libellé du code NAF de l'entreprise.
 * @member {String} libelle_code_naf
 */

_EntrepriseBase["default"].prototype['libelle_code_naf'] = undefined;
/**
 * Domaine d'activité de l'entreprise.
 * @member {String} domaine_activite
 */

_EntrepriseBase["default"].prototype['domaine_activite'] = undefined;
/**
 * Liste des conventions collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseBaseConventionsCollectives>} conventions_collectives
 */

_EntrepriseBase["default"].prototype['conventions_collectives'] = undefined;
/**
 * Date de création de l'entreprise au format AAAA-MM-JJ.
 * @member {Date} date_creation
 */

_EntrepriseBase["default"].prototype['date_creation'] = undefined;
/**
 * Date de création de l'entreprise au format JJ/MM/AAAA.
 * @member {String} date_creation_formate
 */

_EntrepriseBase["default"].prototype['date_creation_formate'] = undefined;
/**
 * Si vrai, l'entreprise n'est plus en activité. Sinon, elle est toujours en activité.
 * @member {Boolean} entreprise_cessee
 */

_EntrepriseBase["default"].prototype['entreprise_cessee'] = undefined;
/**
 * Date de cessation de l'entreprise au format AAAA-MM-JJ.
 * @member {String} date_cessation
 */

_EntrepriseBase["default"].prototype['date_cessation'] = undefined;
/**
 * Si vrai, l'entreprise a au moins un employé.
 * @member {Boolean} entreprise_employeuse
 */

_EntrepriseBase["default"].prototype['entreprise_employeuse'] = undefined;
/**
 * Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
 * @member {String} categorie_juridique
 */

_EntrepriseBase["default"].prototype['categorie_juridique'] = undefined;
/**
 * Forme juridique de l'entreprise.
 * @member {String} forme_juridique
 */

_EntrepriseBase["default"].prototype['forme_juridique'] = undefined;
/**
 * Tranche d'effectif de l'entreprise.
 * @member {String} effectif
 */

_EntrepriseBase["default"].prototype['effectif'] = undefined;
/**
 * Effectif minimal de l'entreprise.
 * @member {Number} effectif_min
 */

_EntrepriseBase["default"].prototype['effectif_min'] = undefined;
/**
 * Effectif maximal de l'entreprise.
 * @member {Number} effectif_max
 */

_EntrepriseBase["default"].prototype['effectif_max'] = undefined;
/**
 * Tranche d'effectif de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */

_EntrepriseBase["default"].prototype['tranche_effectif'] = undefined;
/**
 * Année de validité des variables effectif, effectif_min et effectif_max.
 * @member {Number} annee_effectif
 */

_EntrepriseBase["default"].prototype['annee_effectif'] = undefined;
/**
 * Capital de l'entreprise.
 * @member {Number} capital
 */

_EntrepriseBase["default"].prototype['capital'] = undefined;
/**
 * Statut de l'entreprise au RCS
 * @member {String} statut_rcs
 */

_EntrepriseBase["default"].prototype['statut_rcs'] = undefined; // Implement EntrepriseRechercheAllOf interface:

/**
 * @member {module:model/EtablissementRecherche} siege
 */

_EntrepriseRechercheAllOf["default"].prototype['siege'] = undefined;
/**
 * Liste des villes où l'entreprise a au moins un établissement.
 * @member {Array.<String>} villes
 */

_EntrepriseRechercheAllOf["default"].prototype['villes'] = undefined;
/**
 * Chiffre d'affaires de l'entreprise.
 * @member {Number} chiffre_affaires
 */

_EntrepriseRechercheAllOf["default"].prototype['chiffre_affaires'] = undefined;
/**
 * Résultat de l'entreprise.
 * @member {Number} resultat
 */

_EntrepriseRechercheAllOf["default"].prototype['resultat'] = undefined;
/**
 * Effectif de l'entreprise.
 * @member {Number} effectifs_finances
 */

_EntrepriseRechercheAllOf["default"].prototype['effectifs_finances'] = undefined;
/**
 * Année de correspondance des variables financières (chiffre_affaires, resultat, effectifs_finances).
 * @member {String} annee_finances
 */

_EntrepriseRechercheAllOf["default"].prototype['annee_finances'] = undefined;
var _default = EntrepriseRecherche;
exports["default"] = _default;