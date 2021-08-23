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
 * The EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes</code>.
   * Détails des parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon directe.
   * @alias module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes
   */
  function EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes() {
    _classCallCheck(this, EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes);

    EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes} The populated <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes();

        if (data.hasOwnProperty('pourcentage_pleine_propriete')) {
          obj['pourcentage_pleine_propriete'] = _ApiClient["default"].convertToType(data['pourcentage_pleine_propriete'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_nue_propriete')) {
          obj['pourcentage_nue_propriete'] = _ApiClient["default"].convertToType(data['pourcentage_nue_propriete'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes;
}();
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon directe en pleine propriété, en pourcentage des parts totales.
 * @member {Number} pourcentage_pleine_propriete
 */


EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes.prototype['pourcentage_pleine_propriete'] = undefined;
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon directe en nue propriété, en pourcentage des parts totales.
 * @member {Number} pourcentage_nue_propriete
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes.prototype['pourcentage_nue_propriete'] = undefined;
var _default = EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes;
exports["default"] = _default;