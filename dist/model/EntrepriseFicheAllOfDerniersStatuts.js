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
 * The EntrepriseFicheAllOfDerniersStatuts model module.
 * @module model/EntrepriseFicheAllOfDerniersStatuts
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDerniersStatuts = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDerniersStatuts</code>.
   * Liste des statuts de l&#39;entreprise.
   * @alias module:model/EntrepriseFicheAllOfDerniersStatuts
   */
  function EntrepriseFicheAllOfDerniersStatuts() {
    _classCallCheck(this, EntrepriseFicheAllOfDerniersStatuts);

    EntrepriseFicheAllOfDerniersStatuts.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDerniersStatuts, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDerniersStatuts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDerniersStatuts} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDerniersStatuts} The populated <code>EntrepriseFicheAllOfDerniersStatuts</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDerniersStatuts();

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

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('decision')) {
          obj['decision'] = _ApiClient["default"].convertToType(data['decision'], 'String');
        }

        if (data.hasOwnProperty('date_acte')) {
          obj['date_acte'] = _ApiClient["default"].convertToType(data['date_acte'], 'Date');
        }

        if (data.hasOwnProperty('date_acte_formate')) {
          obj['date_acte_formate'] = _ApiClient["default"].convertToType(data['date_acte_formate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDerniersStatuts;
}();
/**
 * Date de dépôt des statuts, au format AAAA-MM-JJ.
 * @member {Date} date_depot
 */


EntrepriseFicheAllOfDerniersStatuts.prototype['date_depot'] = undefined;
/**
 * Date de dépôt formaté des statuts, au format JJ/MM/AAAA.
 * @member {String} date_depot_formate
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['date_depot_formate'] = undefined;
/**
 * Disponibilité des statuts.
 * @member {Boolean} disponible
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['disponible'] = undefined;
/**
 * Nom du fichier pdf des statuts.
 * @member {String} nom_fichier_pdf
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['nom_fichier_pdf'] = undefined;
/**
 * Token des statuts.
 * @member {String} token
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['token'] = undefined;
/**
 * Champ \"type\" du document contenant les statuts.
 * @member {String} type
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['type'] = undefined;
/**
 * Champ \"decision\" du document contenant les statuts.
 * @member {String} decision
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['decision'] = undefined;
/**
 * Date de publication des statuts, au format AAAA-MM-JJ.
 * @member {Date} date_acte
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['date_acte'] = undefined;
/**
 * Date de publication des statuts, au format JJ/MM/AAAA.
 * @member {String} date_acte_formate
 */

EntrepriseFicheAllOfDerniersStatuts.prototype['date_acte_formate'] = undefined;
var _default = EntrepriseFicheAllOfDerniersStatuts;
exports["default"] = _default;