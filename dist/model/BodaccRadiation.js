"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Bodacc = _interopRequireDefault(require("./Bodacc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BodaccRadiation model module.
 * @module model/BodaccRadiation
 * @version 2.3.0
 */
var BodaccRadiation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BodaccRadiation</code>.
   * @alias module:model/BodaccRadiation
   * @extends module:model/Bodacc
   * @implements module:model/Bodacc
   */
  function BodaccRadiation() {
    _classCallCheck(this, BodaccRadiation);

    _Bodacc["default"].initialize(this);

    BodaccRadiation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BodaccRadiation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BodaccRadiation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BodaccRadiation} obj Optional instance to populate.
     * @return {module:model/BodaccRadiation} The populated <code>BodaccRadiation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BodaccRadiation();

        _Bodacc["default"].constructFromObject(data, obj);

        _Bodacc["default"].constructFromObject(data, obj);
      }

      return obj;
    }
  }]);

  return BodaccRadiation;
}(); // Implement Bodacc interface:

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

_Bodacc["default"].prototype['type'] = undefined;
var _default = BodaccRadiation;
exports["default"] = _default;