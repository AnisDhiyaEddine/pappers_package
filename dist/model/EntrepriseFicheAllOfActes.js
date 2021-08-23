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
 * The EntrepriseFicheAllOfActes model module.
 * @module model/EntrepriseFicheAllOfActes
 * @version 2.3.0
 */
var EntrepriseFicheAllOfActes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfActes</code>.
   * @alias module:model/EntrepriseFicheAllOfActes
   */
  function EntrepriseFicheAllOfActes() {
    _classCallCheck(this, EntrepriseFicheAllOfActes);

    EntrepriseFicheAllOfActes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfActes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfActes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfActes} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfActes} The populated <code>EntrepriseFicheAllOfActes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfActes();

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

  return EntrepriseFicheAllOfActes;
}();
/**
 * Type de l'acte.
 * @member {String} type
 */


EntrepriseFicheAllOfActes.prototype['type'] = undefined;
/**
 * Décision de l'acte.
 * @member {String} decision
 */

EntrepriseFicheAllOfActes.prototype['decision'] = undefined;
/**
 * Date de l'acte, au format AAAA-MM-JJ.
 * @member {Date} date_acte
 */

EntrepriseFicheAllOfActes.prototype['date_acte'] = undefined;
/**
 * Date formatée de l'acte, au format JJ/MM/AAAA.
 * @member {String} date_acte_formate
 */

EntrepriseFicheAllOfActes.prototype['date_acte_formate'] = undefined;
var _default = EntrepriseFicheAllOfActes;
exports["default"] = _default;