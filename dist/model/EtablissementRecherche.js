"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EtablissementRecherche model module.
 * @module model/EtablissementRecherche
 * @version 2.3.0
 */
var EtablissementRecherche = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EtablissementRecherche</code>.
   * @alias module:model/EtablissementRecherche
   */
  function EtablissementRecherche() {
    _classCallCheck(this, EtablissementRecherche);

    EtablissementRecherche.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EtablissementRecherche, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EtablissementRecherche</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EtablissementRecherche} obj Optional instance to populate.
     * @return {module:model/EtablissementRecherche} The populated <code>EtablissementRecherche</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EtablissementRecherche();

        if (data.hasOwnProperty('siret')) {
          obj['siret'] = _ApiClient["default"].convertToType(data['siret'], 'String');
        }

        if (data.hasOwnProperty('siret_formate')) {
          obj['siret_formate'] = _ApiClient["default"].convertToType(data['siret_formate'], 'String');
        }

        if (data.hasOwnProperty('nic')) {
          obj['nic'] = _ApiClient["default"].convertToType(data['nic'], 'String');
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

        if (data.hasOwnProperty('code_postal')) {
          obj['code_postal'] = _ApiClient["default"].convertToType(data['code_postal'], 'String');
        }

        if (data.hasOwnProperty('ville')) {
          obj['ville'] = _ApiClient["default"].convertToType(data['ville'], 'String');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EtablissementRecherche;
}();
/**
 * Num??ro siret de l'??tablissement au format xxxxxxxxxxxxxx.
 * @member {String} siret
 */


EtablissementRecherche.prototype['siret'] = undefined;
/**
 * Num??ro siret de l'??tablissement au format xxx xxx xxx xxxxx.
 * @member {String} siret_formate
 */

EtablissementRecherche.prototype['siret_formate'] = undefined;
/**
 * Num??ro NIC de l'??tablissement.
 * @member {String} nic
 */

EtablissementRecherche.prototype['nic'] = undefined;
/**
 * Num??ro de voie de l'??tablissement.
 * @member {Number} numero_voie
 */

EtablissementRecherche.prototype['numero_voie'] = undefined;
/**
 * Indice de r??p??tition de l'??tablissement.
 * @member {String} indice_repetition
 */

EtablissementRecherche.prototype['indice_repetition'] = undefined;
/**
 * Type de voie de l'??tablissement.
 * @member {String} type_voie
 */

EtablissementRecherche.prototype['type_voie'] = undefined;
/**
 * Libell?? de la voie de l'??tablissement.
 * @member {String} libelle_voie
 */

EtablissementRecherche.prototype['libelle_voie'] = undefined;
/**
 * Compl??ment d'adresse de l'??tablissement.
 * @member {String} complement_adresse
 */

EtablissementRecherche.prototype['complement_adresse'] = undefined;
/**
 * Premi??re ligne de l'adresse de l'??tablissement. Correspond ?? l'ensemble des donn??es numero_voie, indice_repetition, type_voie et libelle_voie.
 * @member {String} adresse_ligne_1
 */

EtablissementRecherche.prototype['adresse_ligne_1'] = undefined;
/**
 * Seconde ligne de l'adresse de l'??tablissement. Est ??gal ?? complement_adresse
 * @member {String} adresse_ligne_2
 */

EtablissementRecherche.prototype['adresse_ligne_2'] = undefined;
/**
 * Code postal de l'??tablissement.
 * @member {String} code_postal
 */

EtablissementRecherche.prototype['code_postal'] = undefined;
/**
 * Ville de l'??tablissement.
 * @member {String} ville
 */

EtablissementRecherche.prototype['ville'] = undefined;
/**
 * Latitude de l'??tablissement.
 * @member {Number} latitude
 */

EtablissementRecherche.prototype['latitude'] = undefined;
/**
 * Longitude de l'??tablissement.
 * @member {Number} longitude
 */

EtablissementRecherche.prototype['longitude'] = undefined;
var _default = EtablissementRecherche;
exports["default"] = _default;