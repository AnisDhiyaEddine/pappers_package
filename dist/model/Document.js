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
 * The Document model module.
 * @module model/Document
 * @version 2.3.0
 */
var Document = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Document</code>.
   * @alias module:model/Document
   */
  function Document() {
    _classCallCheck(this, Document);

    Document.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Document, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Document} obj Optional instance to populate.
     * @return {module:model/Document} The populated <code>Document</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Document();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('date_depot')) {
          obj['date_depot'] = _ApiClient["default"].convertToType(data['date_depot'], 'Date');
        }

        if (data.hasOwnProperty('mentions')) {
          obj['mentions'] = _ApiClient["default"].convertToType(data['mentions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Document;
}();
/**
 * Type de document
 * @member {module:model/Document.TypeEnum} type
 */


Document.prototype['type'] = undefined;
/**
 * Date de dépôt du document
 * @member {Date} date_depot
 */

Document.prototype['date_depot'] = undefined;
/**
 * Mentions de la recherche dans le document.
 * @member {Array.<String>} mentions
 */

Document.prototype['mentions'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

Document['TypeEnum'] = {
  /**
   * value: "acte"
   * @const
   */
  "acte": "acte",

  /**
   * value: "comptes"
   * @const
   */
  "comptes": "comptes"
};
var _default = Document;
exports["default"] = _default;