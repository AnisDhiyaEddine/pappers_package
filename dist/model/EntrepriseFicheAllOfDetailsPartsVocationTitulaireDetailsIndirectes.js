"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision"));

var _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes model module.
 * @module model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes</code>.
   * Détails des parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte.
   * @alias module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes
   */
  function EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes() {
    _classCallCheck(this, EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes);

    EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes} The populated <code>EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes();

        if (data.hasOwnProperty('pourcentage_en_indivision')) {
          obj['pourcentage_en_indivision'] = _ApiClient["default"].convertToType(data['pourcentage_en_indivision'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_en_personne_morale')) {
          obj['pourcentage_en_personne_morale'] = _ApiClient["default"].convertToType(data['pourcentage_en_personne_morale'], 'Number');
        }

        if (data.hasOwnProperty('details_en_indivision')) {
          obj['details_en_indivision'] = _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision["default"].constructFromObject(data['details_en_indivision']);
        }

        if (data.hasOwnProperty('details_en_personne_morale')) {
          obj['details_en_personne_morale'] = _EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale["default"].constructFromObject(data['details_en_personne_morale']);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes;
}();
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte par le biais d'une indivision, en pourcentage des parts totales.
 * @member {Number} pourcentage_en_indivision
 */


EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['pourcentage_en_indivision'] = undefined;
/**
 * Parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte par le biais d'une personne morale, en pourcentage des parts totales.
 * @member {Number} pourcentage_en_personne_morale
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['pourcentage_en_personne_morale'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision} details_en_indivision
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['details_en_indivision'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale} details_en_personne_morale
 */

EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.prototype['details_en_personne_morale'] = undefined;
var _default = EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes;
exports["default"] = _default;