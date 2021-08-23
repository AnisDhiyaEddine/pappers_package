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
 * The Bodacc model module.
 * @module model/Bodacc
 * @version 2.3.0
 */
var Bodacc = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Bodacc</code>.
   * @alias module:model/Bodacc
   */
  function Bodacc() {
    _classCallCheck(this, Bodacc);

    Bodacc.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Bodacc, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Bodacc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Bodacc} obj Optional instance to populate.
     * @return {module:model/Bodacc} The populated <code>Bodacc</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Bodacc();

        if (data.hasOwnProperty('numero_parution')) {
          obj['numero_parution'] = _ApiClient["default"].convertToType(data['numero_parution'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('numero_annonce')) {
          obj['numero_annonce'] = _ApiClient["default"].convertToType(data['numero_annonce'], 'String');
        }

        if (data.hasOwnProperty('bodacc')) {
          obj['bodacc'] = _ApiClient["default"].convertToType(data['bodacc'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Bodacc;
}();
/**
 * Numéro de parution de la publication.
 * @member {String} numero_parution
 */


Bodacc.prototype['numero_parution'] = undefined;
/**
 * Date de la publication, au format AAAA-MM-JJ.
 * @member {String} date
 */

Bodacc.prototype['date'] = undefined;
/**
 * Numéro d'annonce de la publication.
 * @member {String} numero_annonce
 */

Bodacc.prototype['numero_annonce'] = undefined;
/**
 * Bodacc de la publication (A, B ou C).
 * @member {String} bodacc
 */

Bodacc.prototype['bodacc'] = undefined;
/**
 * Type de la publication parmi la liste suivante : Création, Immatriculation, Modification, Vente, Radiation, Procédure collective, Dépôt des comptes.
 * @member {String} type
 */

Bodacc.prototype['type'] = undefined;
var _default = Bodacc;
exports["default"] = _default;