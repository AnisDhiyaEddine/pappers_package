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
 * The BodaccDepotDesComptesAllOf model module.
 * @module model/BodaccDepotDesComptesAllOf
 * @version 2.3.0
 */
var BodaccDepotDesComptesAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccDepotDesComptesAllOf</code>.
   * @alias module:model/BodaccDepotDesComptesAllOf
   */
  function BodaccDepotDesComptesAllOf() {
    _classCallCheck(this, BodaccDepotDesComptesAllOf);

    BodaccDepotDesComptesAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccDepotDesComptesAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccDepotDesComptesAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccDepotDesComptesAllOf} obj Optional instance to populate.
     * @return {module:model/BodaccDepotDesComptesAllOf} The populated <code>BodaccDepotDesComptesAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccDepotDesComptesAllOf();

        if (data.hasOwnProperty('date_cloture')) {
          obj['date_cloture'] = _ApiClient["default"].convertToType(data['date_cloture'], 'String');
        }

        if (data.hasOwnProperty('type_depot')) {
          obj['type_depot'] = _ApiClient["default"].convertToType(data['type_depot'], 'String');
        }

        if (data.hasOwnProperty('descriptif')) {
          obj['descriptif'] = _ApiClient["default"].convertToType(data['descriptif'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BodaccDepotDesComptesAllOf;
}();
/**
 * Date de clôture des comptes, au format AAAA-MM-JJ.
 * @member {String} date_cloture
 */


BodaccDepotDesComptesAllOf.prototype['date_cloture'] = undefined;
/**
 * Type de dépôt de comptes.
 * @member {String} type_depot
 */

BodaccDepotDesComptesAllOf.prototype['type_depot'] = undefined;
/**
 * Descriptif du dépôt de comptes.
 * @member {String} descriptif
 */

BodaccDepotDesComptesAllOf.prototype['descriptif'] = undefined;
var _default = BodaccDepotDesComptesAllOf;
exports["default"] = _default;