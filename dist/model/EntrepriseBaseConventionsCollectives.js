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
 * The EntrepriseBaseConventionsCollectives model module.
 * @module model/EntrepriseBaseConventionsCollectives
 * @version 2.3.0
 */
var EntrepriseBaseConventionsCollectives = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseBaseConventionsCollectives</code>.
   * @alias module:model/EntrepriseBaseConventionsCollectives
   */
  function EntrepriseBaseConventionsCollectives() {
    _classCallCheck(this, EntrepriseBaseConventionsCollectives);

    EntrepriseBaseConventionsCollectives.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseBaseConventionsCollectives, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseBaseConventionsCollectives</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseBaseConventionsCollectives} obj Optional instance to populate.
     * @return {module:model/EntrepriseBaseConventionsCollectives} The populated <code>EntrepriseBaseConventionsCollectives</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseBaseConventionsCollectives();

        if (data.hasOwnProperty('nom')) {
          obj['nom'] = _ApiClient["default"].convertToType(data['nom'], 'String');
        }

        if (data.hasOwnProperty('idcc')) {
          obj['idcc'] = _ApiClient["default"].convertToType(data['idcc'], 'Number');
        }

        if (data.hasOwnProperty('confirmee')) {
          obj['confirmee'] = _ApiClient["default"].convertToType(data['confirmee'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseBaseConventionsCollectives;
}();
/**
 * Nom de la convention collective.
 * @member {String} nom
 */


EntrepriseBaseConventionsCollectives.prototype['nom'] = undefined;
/**
 * Code IDCC de l'entreprise.
 * @member {Number} idcc
 */

EntrepriseBaseConventionsCollectives.prototype['idcc'] = undefined;
/**
 * Si confirmée, l'information est issue de la DSN de l'entreprise et fournie par le ministère du Travail. Si non confirmée, ce n'est qu'une estimation à partir du code NAF de l'entreprise.
 * @member {Boolean} confirmee
 */

EntrepriseBaseConventionsCollectives.prototype['confirmee'] = undefined;
var _default = EntrepriseBaseConventionsCollectives;
exports["default"] = _default;