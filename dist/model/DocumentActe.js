"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Document = _interopRequireDefault(require("./Document"));

var _DocumentActeAllOf = _interopRequireDefault(require("./DocumentActeAllOf"));

var _DocumentActeAllOfTitres = _interopRequireDefault(require("./DocumentActeAllOfTitres"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DocumentActe model module.
 * @module model/DocumentActe
 * @version 2.3.0
 */
var DocumentActe = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentActe</code>.
   * @alias module:model/DocumentActe
   * @extends module:model/Document
   * @implements module:model/Document
   * @implements module:model/DocumentActeAllOf
   */
  function DocumentActe() {
    _classCallCheck(this, DocumentActe);

    _Document["default"].initialize(this);

    _DocumentActeAllOf["default"].initialize(this);

    DocumentActe.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentActe, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentActe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentActe} obj Optional instance to populate.
     * @return {module:model/DocumentActe} The populated <code>DocumentActe</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentActe();

        _Document["default"].constructFromObject(data, obj);

        _Document["default"].constructFromObject(data, obj);

        _DocumentActeAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('titres')) {
          obj['titres'] = _ApiClient["default"].convertToType(data['titres'], [_DocumentActeAllOfTitres["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DocumentActe;
}();
/**
 * Titres des actes associés au document
 * @member {Array.<module:model/DocumentActeAllOfTitres>} titres
 */


DocumentActe.prototype['titres'] = undefined; // Implement Document interface:

/**
 * Type de document
 * @member {module:model/Document.TypeEnum} type
 */

_Document["default"].prototype['type'] = undefined;
/**
 * Date de dépôt du document
 * @member {Date} date_depot
 */

_Document["default"].prototype['date_depot'] = undefined;
/**
 * Mentions de la recherche dans le document.
 * @member {Array.<String>} mentions
 */

_Document["default"].prototype['mentions'] = undefined; // Implement DocumentActeAllOf interface:

/**
 * Titres des actes associés au document
 * @member {Array.<module:model/DocumentActeAllOfTitres>} titres
 */

_DocumentActeAllOf["default"].prototype['titres'] = undefined;
var _default = DocumentActe;
exports["default"] = _default;