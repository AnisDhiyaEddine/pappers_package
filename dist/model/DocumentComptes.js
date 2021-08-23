"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Document = _interopRequireDefault(require("./Document"));

var _DocumentComptesAllOf = _interopRequireDefault(require("./DocumentComptesAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DocumentComptes model module.
 * @module model/DocumentComptes
 * @version 2.3.0
 */
var DocumentComptes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DocumentComptes</code>.
   * @alias module:model/DocumentComptes
   * @extends module:model/Document
   * @implements module:model/Document
   * @implements module:model/DocumentComptesAllOf
   */
  function DocumentComptes() {
    _classCallCheck(this, DocumentComptes);

    _Document["default"].initialize(this);

    _DocumentComptesAllOf["default"].initialize(this);

    DocumentComptes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DocumentComptes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DocumentComptes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentComptes} obj Optional instance to populate.
     * @return {module:model/DocumentComptes} The populated <code>DocumentComptes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DocumentComptes();

        _Document["default"].constructFromObject(data, obj);

        _Document["default"].constructFromObject(data, obj);

        _DocumentComptesAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('date_cloture')) {
          obj['date_cloture'] = _ApiClient["default"].convertToType(data['date_cloture'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DocumentComptes;
}();
/**
 * Date de clôture des comptes, au format AAAA-MM-JJ.
 * @member {Date} date_cloture
 */


DocumentComptes.prototype['date_cloture'] = undefined; // Implement Document interface:

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

_Document["default"].prototype['mentions'] = undefined; // Implement DocumentComptesAllOf interface:

/**
 * Date de clôture des comptes, au format AAAA-MM-JJ.
 * @member {Date} date_cloture
 */

_DocumentComptesAllOf["default"].prototype['date_cloture'] = undefined;
var _default = DocumentComptes;
exports["default"] = _default;