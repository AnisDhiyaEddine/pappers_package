"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseBaseConventionsCollectives = _interopRequireDefault(require("./EntrepriseBaseConventionsCollectives"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseBase model module.
 * @module model/EntrepriseBase
 * @version 2.3.0
 */
var EntrepriseBase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseBase</code>.
   * @alias module:model/EntrepriseBase
   */
  function EntrepriseBase() {
    _classCallCheck(this, EntrepriseBase);

    EntrepriseBase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseBase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseBase} obj Optional instance to populate.
     * @return {module:model/EntrepriseBase} The populated <code>EntrepriseBase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseBase();

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
      }

      return obj;
    }
  }]);

  return EntrepriseBase;
}();
/**
 * Le numéro SIREN de l'entreprise au format xxxxxxxxx.
 * @member {String} siren
 */


EntrepriseBase.prototype['siren'] = undefined;
/**
 * Le numéro SIREN de l'entreprise au format xxx xxx xxx.
 * @member {String} siren_formate
 */

EntrepriseBase.prototype['siren_formate'] = undefined;
/**
 * Le nom de l'entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique.
 * @member {String} nom_entreprise
 */

EntrepriseBase.prototype['nom_entreprise'] = undefined;
/**
 * Vrai en cas de personne morale, faux en cas de personne physique.
 * @member {Boolean} personne_morale
 */

EntrepriseBase.prototype['personne_morale'] = undefined;
/**
 * Dénomination de l'entreprise si personne morale.
 * @member {String} denomination
 */

EntrepriseBase.prototype['denomination'] = undefined;
/**
 * Nom si personne physique.
 * @member {String} nom
 */

EntrepriseBase.prototype['nom'] = undefined;
/**
 * Prénom si personne physique.
 * @member {String} prenom
 */

EntrepriseBase.prototype['prenom'] = undefined;
/**
 * Sexe si personne physique. F pour féminin, M pour masculin.
 * @member {String} sexe
 */

EntrepriseBase.prototype['sexe'] = undefined;
/**
 * Code NAF de l'entreprise.
 * @member {String} code_naf
 */

EntrepriseBase.prototype['code_naf'] = undefined;
/**
 * Libellé du code NAF de l'entreprise.
 * @member {String} libelle_code_naf
 */

EntrepriseBase.prototype['libelle_code_naf'] = undefined;
/**
 * Domaine d'activité de l'entreprise.
 * @member {String} domaine_activite
 */

EntrepriseBase.prototype['domaine_activite'] = undefined;
/**
 * Liste des conventions collectives de l'entreprise.
 * @member {Array.<module:model/EntrepriseBaseConventionsCollectives>} conventions_collectives
 */

EntrepriseBase.prototype['conventions_collectives'] = undefined;
/**
 * Date de création de l'entreprise au format AAAA-MM-JJ.
 * @member {Date} date_creation
 */

EntrepriseBase.prototype['date_creation'] = undefined;
/**
 * Date de création de l'entreprise au format JJ/MM/AAAA.
 * @member {String} date_creation_formate
 */

EntrepriseBase.prototype['date_creation_formate'] = undefined;
/**
 * Si vrai, l'entreprise n'est plus en activité. Sinon, elle est toujours en activité.
 * @member {Boolean} entreprise_cessee
 */

EntrepriseBase.prototype['entreprise_cessee'] = undefined;
/**
 * Date de cessation de l'entreprise au format AAAA-MM-JJ.
 * @member {String} date_cessation
 */

EntrepriseBase.prototype['date_cessation'] = undefined;
/**
 * Si vrai, l'entreprise a au moins un employé.
 * @member {Boolean} entreprise_employeuse
 */

EntrepriseBase.prototype['entreprise_employeuse'] = undefined;
/**
 * Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).
 * @member {String} categorie_juridique
 */

EntrepriseBase.prototype['categorie_juridique'] = undefined;
/**
 * Forme juridique de l'entreprise.
 * @member {String} forme_juridique
 */

EntrepriseBase.prototype['forme_juridique'] = undefined;
/**
 * Tranche d'effectif de l'entreprise.
 * @member {String} effectif
 */

EntrepriseBase.prototype['effectif'] = undefined;
/**
 * Effectif minimal de l'entreprise.
 * @member {Number} effectif_min
 */

EntrepriseBase.prototype['effectif_min'] = undefined;
/**
 * Effectif maximal de l'entreprise.
 * @member {Number} effectif_max
 */

EntrepriseBase.prototype['effectif_max'] = undefined;
/**
 * Tranche d'effectif de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */

EntrepriseBase.prototype['tranche_effectif'] = undefined;
/**
 * Année de validité des variables effectif, effectif_min et effectif_max.
 * @member {Number} annee_effectif
 */

EntrepriseBase.prototype['annee_effectif'] = undefined;
/**
 * Capital de l'entreprise.
 * @member {Number} capital
 */

EntrepriseBase.prototype['capital'] = undefined;
/**
 * Statut de l'entreprise au RCS
 * @member {String} statut_rcs
 */

EntrepriseBase.prototype['statut_rcs'] = undefined;
var _default = EntrepriseBase;
exports["default"] = _default;