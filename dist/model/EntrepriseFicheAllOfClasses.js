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
 * The EntrepriseFicheAllOfClasses model module.
 * @module model/EntrepriseFicheAllOfClasses
 * @version 2.3.0
 */
var EntrepriseFicheAllOfClasses = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfClasses</code>.
   * @alias module:model/EntrepriseFicheAllOfClasses
   */
  function EntrepriseFicheAllOfClasses() {
    _classCallCheck(this, EntrepriseFicheAllOfClasses);

    EntrepriseFicheAllOfClasses.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfClasses, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfClasses</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfClasses} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfClasses} The populated <code>EntrepriseFicheAllOfClasses</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfClasses();

        if (data.hasOwnProperty('code')) {
          obj['code'] = _ApiClient["default"].convertToType(data['code'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfClasses;
}();
/**
 * Code de la classe.
 * @member {String} code
 */


EntrepriseFicheAllOfClasses.prototype['code'] = undefined;
/**
 * Description de la classe.
 * @member {String} description
 */

EntrepriseFicheAllOfClasses.prototype['description'] = undefined;
var _default = EntrepriseFicheAllOfClasses;
exports["default"] = _default;