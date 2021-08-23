"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFicheAllOfActes = _interopRequireDefault(require("./EntrepriseFicheAllOfActes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFicheAllOfDepotsActes model module.
 * @module model/EntrepriseFicheAllOfDepotsActes
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDepotsActes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDepotsActes</code>.
   * @alias module:model/EntrepriseFicheAllOfDepotsActes
   */
  function EntrepriseFicheAllOfDepotsActes() {
    _classCallCheck(this, EntrepriseFicheAllOfDepotsActes);

    EntrepriseFicheAllOfDepotsActes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDepotsActes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDepotsActes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDepotsActes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDepotsActes} The populated <code>EntrepriseFicheAllOfDepotsActes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDepotsActes();

        if (data.hasOwnProperty('date_depot')) {
          obj['date_depot'] = _ApiClient["default"].convertToType(data['date_depot'], 'Date');
        }

        if (data.hasOwnProperty('date_depot_formate')) {
          obj['date_depot_formate'] = _ApiClient["default"].convertToType(data['date_depot_formate'], 'String');
        }

        if (data.hasOwnProperty('disponible')) {
          obj['disponible'] = _ApiClient["default"].convertToType(data['disponible'], 'Boolean');
        }

        if (data.hasOwnProperty('nom_fichier_pdf')) {
          obj['nom_fichier_pdf'] = _ApiClient["default"].convertToType(data['nom_fichier_pdf'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('actes')) {
          obj['actes'] = _ApiClient["default"].convertToType(data['actes'], [_EntrepriseFicheAllOfActes["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDepotsActes;
}();
/**
 * Date de dépôt de l'acte, au format AAAA-MM-JJ.
 * @member {Date} date_depot
 */


EntrepriseFicheAllOfDepotsActes.prototype['date_depot'] = undefined;
/**
 * Date de dépôt formatée de l'acte, au format JJ/MM/AAAA.
 * @member {String} date_depot_formate
 */

EntrepriseFicheAllOfDepotsActes.prototype['date_depot_formate'] = undefined;
/**
 * Disponibilité de l'acte. Un acte peut être indisponible car il a été publié avant le 1er janvier 1993 ou bien car il est confidentiel.
 * @member {Boolean} disponible
 */

EntrepriseFicheAllOfDepotsActes.prototype['disponible'] = undefined;
/**
 * Nom du fichier pdf de l'acte.
 * @member {String} nom_fichier_pdf
 */

EntrepriseFicheAllOfDepotsActes.prototype['nom_fichier_pdf'] = undefined;
/**
 * Token de l'acte.
 * @member {String} token
 */

EntrepriseFicheAllOfDepotsActes.prototype['token'] = undefined;
/**
 * Détails de l'acte.
 * @member {Array.<module:model/EntrepriseFicheAllOfActes>} actes
 */

EntrepriseFicheAllOfDepotsActes.prototype['actes'] = undefined;
var _default = EntrepriseFicheAllOfDepotsActes;
exports["default"] = _default;