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
 * The DocumentComptesAllOf model module.
 * @module model/DocumentComptesAllOf
 * @version 2.3.0
 */
var DocumentComptesAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentComptesAllOf</code>.
   * @alias module:model/DocumentComptesAllOf
   */
  function DocumentComptesAllOf() {
    _classCallCheck(this, DocumentComptesAllOf);

    DocumentComptesAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentComptesAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentComptesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentComptesAllOf} obj Optional instance to populate.
     * @return {module:model/DocumentComptesAllOf} The populated <code>DocumentComptesAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentComptesAllOf();

        if (data.hasOwnProperty('date_cloture')) {
          obj['date_cloture'] = _ApiClient["default"].convertToType(data['date_cloture'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DocumentComptesAllOf;
}();
/**
 * Date de clôture des comptes, au format AAAA-MM-JJ.
 * @member {Date} date_cloture
 */


DocumentComptesAllOf.prototype['date_cloture'] = undefined;
var _default = DocumentComptesAllOf;
exports["default"] = _default;