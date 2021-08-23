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
 * The BodaccProcedureCollectiveAllOf model module.
 * @module model/BodaccProcedureCollectiveAllOf
 * @version 2.3.0
 */
var BodaccProcedureCollectiveAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccProcedureCollectiveAllOf</code>.
   * @alias module:model/BodaccProcedureCollectiveAllOf
   */
  function BodaccProcedureCollectiveAllOf() {
    _classCallCheck(this, BodaccProcedureCollectiveAllOf);

    BodaccProcedureCollectiveAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccProcedureCollectiveAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccProcedureCollectiveAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccProcedureCollectiveAllOf} obj Optional instance to populate.
     * @return {module:model/BodaccProcedureCollectiveAllOf} The populated <code>BodaccProcedureCollectiveAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccProcedureCollectiveAllOf();

        if (data.hasOwnProperty('famille')) {
          obj['famille'] = _ApiClient["default"].convertToType(data['famille'], 'String');
        }

        if (data.hasOwnProperty('nature')) {
          obj['nature'] = _ApiClient["default"].convertToType(data['nature'], 'String');
        }

        if (data.hasOwnProperty('complement_jugement')) {
          obj['complement_jugement'] = _ApiClient["default"].convertToType(data['complement_jugement'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BodaccProcedureCollectiveAllOf;
}();
/**
 * Famille de la procédure collective
 * @member {String} famille
 */


BodaccProcedureCollectiveAllOf.prototype['famille'] = undefined;
/**
 * Nature de la procédure collective
 * @member {String} nature
 */

BodaccProcedureCollectiveAllOf.prototype['nature'] = undefined;
/**
 * Complément sur le jugement de procédure collective
 * @member {String} complement_jugement
 */

BodaccProcedureCollectiveAllOf.prototype['complement_jugement'] = undefined;
var _default = BodaccProcedureCollectiveAllOf;
exports["default"] = _default;