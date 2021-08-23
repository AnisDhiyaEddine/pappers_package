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
 * The DocumentActeAllOfTitres model module.
 * @module model/DocumentActeAllOfTitres
 * @version 2.3.0
 */
var DocumentActeAllOfTitres = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentActeAllOfTitres</code>.
   * @alias module:model/DocumentActeAllOfTitres
   */
  function DocumentActeAllOfTitres() {
    _classCallCheck(this, DocumentActeAllOfTitres);

    DocumentActeAllOfTitres.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentActeAllOfTitres, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentActeAllOfTitres</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentActeAllOfTitres} obj Optional instance to populate.
     * @return {module:model/DocumentActeAllOfTitres} The populated <code>DocumentActeAllOfTitres</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentActeAllOfTitres();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('decision')) {
          obj['decision'] = _ApiClient["default"].convertToType(data['decision'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DocumentActeAllOfTitres;
}();
/**
 * Type de l'acte
 * @member {String} type
 */


DocumentActeAllOfTitres.prototype['type'] = undefined;
/**
 * Décision de l'acte
 * @member {String} decision
 */

DocumentActeAllOfTitres.prototype['decision'] = undefined;
var _default = DocumentActeAllOfTitres;
exports["default"] = _default;