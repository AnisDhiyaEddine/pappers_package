"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision"));

var _EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale = _interopRequireDefault(require("./EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EntrepriseFicheAllOfDetailsVotesIndirects model module.
 * @module model/EntrepriseFicheAllOfDetailsVotesIndirects
 * @version 2.3.0
 */
var EntrepriseFicheAllOfDetailsVotesIndirects = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfDetailsVotesIndirects</code>.
   * Détails des droits de vote détenus de façon indirecte par le bénéficiaire effectif.
   * @alias module:model/EntrepriseFicheAllOfDetailsVotesIndirects
   */
  function EntrepriseFicheAllOfDetailsVotesIndirects() {
    _classCallCheck(this, EntrepriseFicheAllOfDetailsVotesIndirects);

    EntrepriseFicheAllOfDetailsVotesIndirects.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfDetailsVotesIndirects, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfDetailsVotesIndirects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfDetailsVotesIndirects} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfDetailsVotesIndirects} The populated <code>EntrepriseFicheAllOfDetailsVotesIndirects</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfDetailsVotesIndirects();

        if (data.hasOwnProperty('pourcentage_en_indivision')) {
          obj['pourcentage_en_indivision'] = _ApiClient["default"].convertToType(data['pourcentage_en_indivision'], 'Number');
        }

        if (data.hasOwnProperty('pourcentage_en_personne_morale')) {
          obj['pourcentage_en_personne_morale'] = _ApiClient["default"].convertToType(data['pourcentage_en_personne_morale'], 'Number');
        }

        if (data.hasOwnProperty('details_en_indivision')) {
          obj['details_en_indivision'] = _EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision["default"].constructFromObject(data['details_en_indivision']);
        }

        if (data.hasOwnProperty('details_en_personne_morale')) {
          obj['details_en_personne_morale'] = _EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale["default"].constructFromObject(data['details_en_personne_morale']);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfDetailsVotesIndirects;
}();
/**
 * Droits de vote détenus de façon indirecte par le biais d'une indivision par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_en_indivision
 */


EntrepriseFicheAllOfDetailsVotesIndirects.prototype['pourcentage_en_indivision'] = undefined;
/**
 * Droits de vote détenus de façon indirecte par le biais d'une personne morale par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
 * @member {Number} pourcentage_en_personne_morale
 */

EntrepriseFicheAllOfDetailsVotesIndirects.prototype['pourcentage_en_personne_morale'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision} details_en_indivision
 */

EntrepriseFicheAllOfDetailsVotesIndirects.prototype['details_en_indivision'] = undefined;
/**
 * @member {module:model/EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale} details_en_personne_morale
 */

EntrepriseFicheAllOfDetailsVotesIndirects.prototype['details_en_personne_morale'] = undefined;
var _default = EntrepriseFicheAllOfDetailsVotesIndirects;
exports["default"] = _default;