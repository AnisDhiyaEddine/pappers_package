"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes"));

var _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFicheAllOfDetailsPartsVocationTitulaire model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsVocationTitulaire
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDetailsPartsVocationTitulaire = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaire</code>.
   * Détails des parts dont le bénéficiaire effectif a vocation à devenir titulaire.
   * @alias module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaire
   */
  function EntrepriseFicheAllOfDetailsPartsVocationTitulaire() {
    _classCallCheck(this, EntrepriseFicheAllOfDetailsPartsVocationTitulaire);

    EntrepriseFicheAllOfDetailsPartsVocationTitulaire.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDetailsPartsVocationTitulaire, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaire</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaire} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaire} The populated <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaire</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDetailsPartsVocationTitulaire();

        if (data.hasOwnProperty('pourcentage_directes')) {
          obj['pourcentage_directes'] = _ApiClient["default"].convertToType(data['pourcentage_directes'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_indirectes')) {
          obj['pourcentage_indirectes'] = _ApiClient["default"].convertToType(data['pourcentage_indirectes'], 'Number');
        }

        if (data.hasOwnProperty('details_directes')) {
          obj['details_directes'] = _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes["default"].constructFromObject(data['details_directes']);
        }

        if (data.hasOwnProperty('details_indirectes')) {
          obj['details_indirectes'] = _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes["default"].constructFromObject(data['details_indirectes']);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDetailsPartsVocationTitulaire;
}();
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon directe, en pourcentage des parts totales.
 * @member {Number} pourcentage_directes
 */


EntrepriseFicheAllOfDetailsPartsVocationTitulaire.prototype['pourcentage_directes'] = undefined;
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte, en pourcentage des parts totales.
 * @member {Number} pourcentage_indirectes
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaire.prototype['pourcentage_indirectes'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes} details_directes
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaire.prototype['details_directes'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes} details_indirectes
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaire.prototype['details_indirectes'] = undefined;
var _default = EntrepriseFicheAllOfDetailsPartsVocationTitulaire;
exports["default"] = _default;