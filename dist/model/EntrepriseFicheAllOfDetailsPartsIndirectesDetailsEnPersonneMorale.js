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
 * The EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale</code>.
   * Détails des parts détenues de façon indirecte par le biais d&#39;une personne morale par le bénéficiaire effectif.
   * @alias module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale
   */
  function EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale() {
    _classCallCheck(this, EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale);

    EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale} The populated <code>EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale();

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

  return EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale;
}();
/**
 * Parts détenues de façon indirecte par le biais d'une personne morale en pleine propriété par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_pleine_propriete
 */


EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale.prototype['pourcentage_pleine_propriete'] = undefined;
/**
 * Parts détenues de façon indirecte par le biais d'une personne morale en nue propriété par le bénéficiaire effectif, en pourcentage des parts totales.
 * @member {Number} pourcentage_nue_propriete
 */

EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale.prototype['pourcentage_nue_propriete'] = undefined;
var _default = EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale;
exports["default"] = _default;