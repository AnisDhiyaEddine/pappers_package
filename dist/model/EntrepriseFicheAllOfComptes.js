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
 * The EntrepriseFicheAllOfComptes model module.
 * @module model/EntrepriseFicheAllOfComptes
 * @version 2.3.0
 */
var EntrepriseFicheAllOfComptes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfComptes</code>.
   * @alias module:model/EntrepriseFicheAllOfComptes
   */
  function EntrepriseFicheAllOfComptes() {
    _classCallCheck(this, EntrepriseFicheAllOfComptes);

    EntrepriseFicheAllOfComptes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfComptes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfComptes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfComptes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfComptes} The populated <code>EntrepriseFicheAllOfComptes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfComptes();

        if (data.hasOwnProperty('date_depot')) {
          obj['date_depot'] = _ApiClient["default"].convertToType(data['date_depot'], 'Date');
        }

        if (data.hasOwnProperty('date_depot_formate')) {
          obj['date_depot_formate'] = _ApiClient["default"].convertToType(data['date_depot_formate'], 'String');
        }

        if (data.hasOwnProperty('date_cloture')) {
          obj['date_cloture'] = _ApiClient["default"].convertToType(data['date_cloture'], 'Date');
        }

        if (data.hasOwnProperty('annee_cloture')) {
          obj['annee_cloture'] = _ApiClient["default"].convertToType(data['annee_cloture'], 'Number');
        }

        if (data.hasOwnProperty('confidentialite')) {
          obj['confidentialite'] = _ApiClient["default"].convertToType(data['confidentialite'], 'Boolean');
        }

        if (data.hasOwnProperty('confidentialite_compte_de_resultat')) {
          obj['confidentialite_compte_de_resultat'] = _ApiClient["default"].convertToType(data['confidentialite_compte_de_resultat'], 'Boolean');
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

        if (data.hasOwnProperty('disponible_xlsx')) {
          obj['disponible_xlsx'] = _ApiClient["default"].convertToType(data['disponible_xlsx'], 'Boolean');
        }

        if (data.hasOwnProperty('nom_fichier_xlsx')) {
          obj['nom_fichier_xlsx'] = _ApiClient["default"].convertToType(data['nom_fichier_xlsx'], 'String');
        }

        if (data.hasOwnProperty('token_xlsx')) {
          obj['token_xlsx'] = _ApiClient["default"].convertToType(data['token_xlsx'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfComptes;
}();
/**
 * Date de dépôt des comptes.
 * @member {Date} date_depot
 */


EntrepriseFicheAllOfComptes.prototype['date_depot'] = undefined;
/**
 * Date de dépôt formatée des comptes.
 * @member {String} date_depot_formate
 */

EntrepriseFicheAllOfComptes.prototype['date_depot_formate'] = undefined;
/**
 * Date de clôture des comptes, au format AAAA-MM-JJ.
 * @member {Date} date_cloture
 */

EntrepriseFicheAllOfComptes.prototype['date_cloture'] = undefined;
/**
 * Année de clôture des comptes.
 * @member {Number} annee_cloture
 */

EntrepriseFicheAllOfComptes.prototype['annee_cloture'] = undefined;
/**
 * Confidentialité totale des comptes.
 * @member {Boolean} confidentialite
 */

EntrepriseFicheAllOfComptes.prototype['confidentialite'] = undefined;
/**
 * Confidentialité partielle des comptes (seul le compte de résultat est confidentiel, le reste des comptes sont disponibles).
 * @member {Boolean} confidentialite_compte_de_resultat
 */

EntrepriseFicheAllOfComptes.prototype['confidentialite_compte_de_resultat'] = undefined;
/**
 * Disponibilité des comptes au format PDF.
 * @member {Boolean} disponible
 */

EntrepriseFicheAllOfComptes.prototype['disponible'] = undefined;
/**
 * Nom du fichier PDF des comptes.
 * @member {String} nom_fichier_pdf
 */

EntrepriseFicheAllOfComptes.prototype['nom_fichier_pdf'] = undefined;
/**
 * Token des comptes.
 * @member {String} token
 */

EntrepriseFicheAllOfComptes.prototype['token'] = undefined;
/**
 * Disponibilité des comptes au format XLSX.
 * @member {Boolean} disponible_xlsx
 */

EntrepriseFicheAllOfComptes.prototype['disponible_xlsx'] = undefined;
/**
 * Nom du fichier XLSX des comptes.
 * @member {String} nom_fichier_xlsx
 */

EntrepriseFicheAllOfComptes.prototype['nom_fichier_xlsx'] = undefined;
/**
 * Token des comptes XLSX.
 * @member {String} token_xlsx
 */

EntrepriseFicheAllOfComptes.prototype['token_xlsx'] = undefined;
var _default = EntrepriseFicheAllOfComptes;
exports["default"] = _default;