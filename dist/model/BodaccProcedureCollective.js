"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Bodacc = _interopRequireDefault(require("./Bodacc"));

var _BodaccProcedureCollectiveAllOf = _interopRequireDefault(require("./BodaccProcedureCollectiveAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BodaccProcedureCollective model module.
 * @module model/BodaccProcedureCollective
 * @version 2.3.0
 */
var BodaccProcedureCollective = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccProcedureCollective</code>.
   * @alias module:model/BodaccProcedureCollective
   * @extends module:model/Bodacc
   * @implements module:model/Bodacc
   * @implements module:model/BodaccProcedureCollectiveAllOf
   */
  function BodaccProcedureCollective() {
    _classCallCheck(this, BodaccProcedureCollective);

    _Bodacc["default"].initialize(this);

    _BodaccProcedureCollectiveAllOf["default"].initialize(this);

    BodaccProcedureCollective.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccProcedureCollective, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccProcedureCollective</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccProcedureCollective} obj Optional instance to populate.
     * @return {module:model/BodaccProcedureCollective} The populated <code>BodaccProcedureCollective</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccProcedureCollective();

        _Bodacc["default"].constructFromObject(data, obj);

        _Bodacc["default"].constructFromObject(data, obj);

        _BodaccProcedureCollectiveAllOf["default"].constructFromObject(data, obj);

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

  return BodaccProcedureCollective;
}();
/**
 * Famille de la procédure collective
 * @member {String} famille
 */


BodaccProcedureCollective.prototype['famille'] = undefined;
/**
 * Nature de la procédure collective
 * @member {String} nature
 */

BodaccProcedureCollective.prototype['nature'] = undefined;
/**
 * Complément sur le jugement de procédure collective
 * @member {String} complement_jugement
 */

BodaccProcedureCollective.prototype['complement_jugement'] = undefined; // Implement Bodacc interface:

/**
 * Numéro de parution de la publication.
 * @member {String} numero_parution
 */

_Bodacc["default"].prototype['numero_parution'] = undefined;
/**
 * Date de la publication, au format AAAA-MM-JJ.
 * @member {String} date
 */

_Bodacc["default"].prototype['date'] = undefined;
/**
 * Numéro d'annonce de la publication.
 * @member {String} numero_annonce
 */

_Bodacc["default"].prototype['numero_annonce'] = undefined;
/**
 * Bodacc de la publication (A, B ou C).
 * @member {String} bodacc
 */

_Bodacc["default"].prototype['bodacc'] = undefined;
/**
 * Type de la publication parmi la liste suivante : Création, Immatriculation, Modification, Vente, Radiation, Procédure collective, Dépôt des comptes.
 * @member {String} type
 */

_Bodacc["default"].prototype['type'] = undefined; // Implement BodaccProcedureCollectiveAllOf interface:

/**
 * Famille de la procédure collective
 * @member {String} famille
 */

_BodaccProcedureCollectiveAllOf["default"].prototype['famille'] = undefined;
/**
 * Nature de la procédure collective
 * @member {String} nature
 */

_BodaccProcedureCollectiveAllOf["default"].prototype['nature'] = undefined;
/**
 * Complément sur le jugement de procédure collective
 * @member {String} complement_jugement
 */

_BodaccProcedureCollectiveAllOf["default"].prototype['complement_jugement'] = undefined;
var _default = BodaccProcedureCollective;
exports["default"] = _default;