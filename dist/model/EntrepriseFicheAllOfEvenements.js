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
 * The EntrepriseFicheAllOfEvenements model module.
 * @module model/EntrepriseFicheAllOfEvenements
 * @version 2.3.0
 */
var EntrepriseFicheAllOfEvenements = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfEvenements</code>.
   * @alias module:model/EntrepriseFicheAllOfEvenements
   */
  function EntrepriseFicheAllOfEvenements() {
    _classCallCheck(this, EntrepriseFicheAllOfEvenements);

    EntrepriseFicheAllOfEvenements.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfEvenements, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfEvenements</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfEvenements} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfEvenements} The populated <code>EntrepriseFicheAllOfEvenements</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfEvenements();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('identifiant_evenement')) {
          obj['identifiant_evenement'] = _ApiClient["default"].convertToType(data['identifiant_evenement'], 'String');
        }

        if (data.hasOwnProperty('reference')) {
          obj['reference'] = _ApiClient["default"].convertToType(data['reference'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('numero_bopi')) {
          obj['numero_bopi'] = _ApiClient["default"].convertToType(data['numero_bopi'], 'String');
        }

        if (data.hasOwnProperty('date_bopi')) {
          obj['date_bopi'] = _ApiClient["default"].convertToType(data['date_bopi'], 'String');
        }

        if (data.hasOwnProperty('beneficiaire')) {
          obj['beneficiaire'] = _ApiClient["default"].convertToType(data['beneficiaire'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfEvenements;
}();
/**
 * Type d'événement.
 * @member {String} type
 */


EntrepriseFicheAllOfEvenements.prototype['type'] = undefined;
/**
 * Identifiant de l'événement.
 * @member {String} identifiant_evenement
 */

EntrepriseFicheAllOfEvenements.prototype['identifiant_evenement'] = undefined;
/**
 * Référence de l'événement.
 * @member {String} reference
 */

EntrepriseFicheAllOfEvenements.prototype['reference'] = undefined;
/**
 * Date de l'événement, au format AAAA-MM-JJ.
 * @member {String} date
 */

EntrepriseFicheAllOfEvenements.prototype['date'] = undefined;
/**
 * Numéro du BOPI dans lequel l'événement a été publié.
 * @member {String} numero_bopi
 */

EntrepriseFicheAllOfEvenements.prototype['numero_bopi'] = undefined;
/**
 * Date de publication du BOPI au format AAAA-MM-JJ.
 * @member {String} date_bopi
 */

EntrepriseFicheAllOfEvenements.prototype['date_bopi'] = undefined;
/**
 * Bénéficiaire associé à l'événement.
 * @member {String} beneficiaire
 */

EntrepriseFicheAllOfEvenements.prototype['beneficiaire'] = undefined;
var _default = EntrepriseFicheAllOfEvenements;
exports["default"] = _default;