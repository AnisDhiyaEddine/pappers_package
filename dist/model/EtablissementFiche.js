"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EtablissementFicheDomiciliation = _interopRequireDefault(require("./EtablissementFicheDomiciliation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EtablissementFiche model module.
 * @module model/EtablissementFiche
 * @version 2.3.0
 */
var EtablissementFiche = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EtablissementFiche</code>.
   * @alias module:model/EtablissementFiche
   */
  function EtablissementFiche() {
    _classCallCheck(this, EtablissementFiche);

    EtablissementFiche.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EtablissementFiche, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EtablissementFiche</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EtablissementFiche} obj Optional instance to populate.
     * @return {module:model/EtablissementFiche} The populated <code>EtablissementFiche</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EtablissementFiche();

        if (data.hasOwnProperty('siret')) {
          obj['siret'] = _ApiClient["default"].convertToType(data['siret'], 'String');
        }

        if (data.hasOwnProperty('siret_formate')) {
          obj['siret_formate'] = _ApiClient["default"].convertToType(data['siret_formate'], 'String');
        }

        if (data.hasOwnProperty('nic')) {
          obj['nic'] = _ApiClient["default"].convertToType(data['nic'], 'String');
        }

        if (data.hasOwnProperty('code_postal')) {
          obj['code_postal'] = _ApiClient["default"].convertToType(data['code_postal'], 'String');
        }

        if (data.hasOwnProperty('ville')) {
          obj['ville'] = _ApiClient["default"].convertToType(data['ville'], 'String');
        }

        if (data.hasOwnProperty('pays')) {
          obj['pays'] = _ApiClient["default"].convertToType(data['pays'], 'String');
        }

        if (data.hasOwnProperty('code_pays')) {
          obj['code_pays'] = _ApiClient["default"].convertToType(data['code_pays'], 'String');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }

        if (data.hasOwnProperty('etablissement_cesse')) {
          obj['etablissement_cesse'] = _ApiClient["default"].convertToType(data['etablissement_cesse'], 'Boolean');
        }

        if (data.hasOwnProperty('siege')) {
          obj['siege'] = _ApiClient["default"].convertToType(data['siege'], 'Boolean');
        }

        if (data.hasOwnProperty('etablissement_employeur')) {
          obj['etablissement_employeur'] = _ApiClient["default"].convertToType(data['etablissement_employeur'], 'Boolean');
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

        if (data.hasOwnProperty('code_naf')) {
          obj['code_naf'] = _ApiClient["default"].convertToType(data['code_naf'], 'String');
        }

        if (data.hasOwnProperty('libelle_code_naf')) {
          obj['libelle_code_naf'] = _ApiClient["default"].convertToType(data['libelle_code_naf'], 'String');
        }

        if (data.hasOwnProperty('date_de_creation')) {
          obj['date_de_creation'] = _ApiClient["default"].convertToType(data['date_de_creation'], 'String');
        }

        if (data.hasOwnProperty('numero_voie')) {
          obj['numero_voie'] = _ApiClient["default"].convertToType(data['numero_voie'], 'Number');
        }

        if (data.hasOwnProperty('indice_repetition')) {
          obj['indice_repetition'] = _ApiClient["default"].convertToType(data['indice_repetition'], 'String');
        }

        if (data.hasOwnProperty('type_voie')) {
          obj['type_voie'] = _ApiClient["default"].convertToType(data['type_voie'], 'String');
        }

        if (data.hasOwnProperty('libelle_voie')) {
          obj['libelle_voie'] = _ApiClient["default"].convertToType(data['libelle_voie'], 'String');
        }

        if (data.hasOwnProperty('complement_adresse')) {
          obj['complement_adresse'] = _ApiClient["default"].convertToType(data['complement_adresse'], 'String');
        }

        if (data.hasOwnProperty('adresse_ligne_1')) {
          obj['adresse_ligne_1'] = _ApiClient["default"].convertToType(data['adresse_ligne_1'], 'String');
        }

        if (data.hasOwnProperty('adresse_ligne_2')) {
          obj['adresse_ligne_2'] = _ApiClient["default"].convertToType(data['adresse_ligne_2'], 'String');
        }

        if (data.hasOwnProperty('date_cessation')) {
          obj['date_cessation'] = _ApiClient["default"].convertToType(data['date_cessation'], 'String');
        }

        if (data.hasOwnProperty('domiciliation')) {
          obj['domiciliation'] = _EtablissementFicheDomiciliation["default"].constructFromObject(data['domiciliation']);
        }
      }

      return obj;
    }
  }]);

  return EtablissementFiche;
}();
/**
 * Numéro siret de l'établissement au format xxxxxxxxxxxxxx.
 * @member {String} siret
 */


EtablissementFiche.prototype['siret'] = undefined;
/**
 * Numéro siret de l'établissement au format xxx xxx xxx xxxxx.
 * @member {String} siret_formate
 */

EtablissementFiche.prototype['siret_formate'] = undefined;
/**
 * Numéro NIC de l'établissement.
 * @member {String} nic
 */

EtablissementFiche.prototype['nic'] = undefined;
/**
 * Code postal de l'établissement.
 * @member {String} code_postal
 */

EtablissementFiche.prototype['code_postal'] = undefined;
/**
 * Ville de l'établissement.
 * @member {String} ville
 */

EtablissementFiche.prototype['ville'] = undefined;
/**
 * Pays de l'établissement
 * @member {String} pays
 */

EtablissementFiche.prototype['pays'] = undefined;
/**
 * Code du pays de l'établissement
 * @member {String} code_pays
 */

EtablissementFiche.prototype['code_pays'] = undefined;
/**
 * Latitude de l'établissement.
 * @member {Number} latitude
 */

EtablissementFiche.prototype['latitude'] = undefined;
/**
 * Longitude de l'établissement.
 * @member {Number} longitude
 */

EtablissementFiche.prototype['longitude'] = undefined;
/**
 * Vrai si l'établissement est cessé, faux si il est en activité.
 * @member {Boolean} etablissement_cesse
 */

EtablissementFiche.prototype['etablissement_cesse'] = undefined;
/**
 * Vrai si l'établissement est siège, faux s'il ne l'est pas.
 * @member {Boolean} siege
 */

EtablissementFiche.prototype['siege'] = undefined;
/**
 * Si vrai, l'établissement a au moins un employé.
 * @member {Boolean} etablissement_employeur
 */

EtablissementFiche.prototype['etablissement_employeur'] = undefined;
/**
 * Tranche d'effectif de l'établissement.
 * @member {String} effectif
 */

EtablissementFiche.prototype['effectif'] = undefined;
/**
 * Effectif minimal de l'établissement.
 * @member {Number} effectif_min
 */

EtablissementFiche.prototype['effectif_min'] = undefined;
/**
 * Effectif maximal de l'établissement.
 * @member {Number} effectif_max
 */

EtablissementFiche.prototype['effectif_max'] = undefined;
/**
 * Tranche d'effectif de l'établissement, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l'entreprise.).
 * @member {String} tranche_effectif
 */

EtablissementFiche.prototype['tranche_effectif'] = undefined;
/**
 * Année correspondante à la tranche d'effectif de l'établissement.
 * @member {Number} annee_effectif
 */

EtablissementFiche.prototype['annee_effectif'] = undefined;
/**
 * Code NAF de l'établissement.
 * @member {String} code_naf
 */

EtablissementFiche.prototype['code_naf'] = undefined;
/**
 * Libellé du code NAF de l'établissement.
 * @member {String} libelle_code_naf
 */

EtablissementFiche.prototype['libelle_code_naf'] = undefined;
/**
 * @member {String} date_de_creation
 */

EtablissementFiche.prototype['date_de_creation'] = undefined;
/**
 * Numéro de voie de l'établissement.
 * @member {Number} numero_voie
 */

EtablissementFiche.prototype['numero_voie'] = undefined;
/**
 * Indice de répétition de l'établissement.
 * @member {String} indice_repetition
 */

EtablissementFiche.prototype['indice_repetition'] = undefined;
/**
 * Type de voie de l'établissement.
 * @member {String} type_voie
 */

EtablissementFiche.prototype['type_voie'] = undefined;
/**
 * Libellé de la voie de l'établissement.
 * @member {String} libelle_voie
 */

EtablissementFiche.prototype['libelle_voie'] = undefined;
/**
 * Complément d'adresse de l'établissement.
 * @member {String} complement_adresse
 */

EtablissementFiche.prototype['complement_adresse'] = undefined;
/**
 * Première ligne de l'adresse de l'établissement. Correspond à l'ensemble des données numero_voie, indice_repetition, type_voie et libelle_voie.
 * @member {String} adresse_ligne_1
 */

EtablissementFiche.prototype['adresse_ligne_1'] = undefined;
/**
 * Seconde ligne de l'adresse de l'établissement. Est égal à complement_adresse
 * @member {String} adresse_ligne_2
 */

EtablissementFiche.prototype['adresse_ligne_2'] = undefined;
/**
 * Date de fermeture de l'établissement
 * @member {String} date_cessation
 */

EtablissementFiche.prototype['date_cessation'] = undefined;
/**
 * @member {module:model/EtablissementFicheDomiciliation} domiciliation
 */

EtablissementFiche.prototype['domiciliation'] = undefined;
var _default = EtablissementFiche;
exports["default"] = _default;