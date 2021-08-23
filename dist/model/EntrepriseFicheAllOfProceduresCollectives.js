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
 * The EntrepriseFicheAllOfProceduresCollectives model module.
 * @module model/EntrepriseFicheAllOfProceduresCollectives
 * @version 2.3.0
 */
var EntrepriseFicheAllOfProceduresCollectives = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntrepriseFicheAllOfProceduresCollectives</code>.
   * @alias module:model/EntrepriseFicheAllOfProceduresCollectives
   */
  function EntrepriseFicheAllOfProceduresCollectives() {
    _classCallCheck(this, EntrepriseFicheAllOfProceduresCollectives);

    EntrepriseFicheAllOfProceduresCollectives.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EntrepriseFicheAllOfProceduresCollectives, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EntrepriseFicheAllOfProceduresCollectives</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntrepriseFicheAllOfProceduresCollectives} obj Optional instance to populate.
     * @return {module:model/EntrepriseFicheAllOfProceduresCollectives} The populated <code>EntrepriseFicheAllOfProceduresCollectives</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntrepriseFicheAllOfProceduresCollectives();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('date_debut')) {
          obj['date_debut'] = _ApiClient["default"].convertToType(data['date_debut'], 'String');
        }

        if (data.hasOwnProperty('date_fin')) {
          obj['date_fin'] = _ApiClient["default"].convertToType(data['date_fin'], 'String');
        }

        if (data.hasOwnProperty('publications_bodacc')) {
          obj['publications_bodacc'] = _ApiClient["default"].convertToType(data['publications_bodacc'], [_Bodacc["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EntrepriseFicheAllOfProceduresCollectives;
}();
/**
 * Type de la procédure collective.
 * @member {module:model/EntrepriseFicheAllOfProceduresCollectives.TypeEnum} type
 */


EntrepriseFicheAllOfProceduresCollectives.prototype['type'] = undefined;
/**
 * Date de début de la procédure collective, au format AAAA-MM-JJ.
 * @member {String} date_debut
 */

EntrepriseFicheAllOfProceduresCollectives.prototype['date_debut'] = undefined;
/**
 * Date de fin de la procédure collective, au format AAAA-MM-JJ.
 * @member {String} date_fin
 */

EntrepriseFicheAllOfProceduresCollectives.prototype['date_fin'] = undefined;
/**
 * Liste des publications relatives à la procédure collective.
 * @member {Array.<module:model/Bodacc>} publications_bodacc
 */

EntrepriseFicheAllOfProceduresCollectives.prototype['publications_bodacc'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

EntrepriseFicheAllOfProceduresCollectives['TypeEnum'] = {
  /**
   * value: "Redressement judiciaire"
   * @const
   */
  "Redressement judiciaire": "Redressement judiciaire",

  /**
   * value: "Liquidation judiciaire ou Procédure de sauvegarde"
   * @const
   */
  "Liquidation judiciaire ou Procédure de sauvegarde": "Liquidation judiciaire ou Procédure de sauvegarde"
};
var _default = EntrepriseFicheAllOfProceduresCollectives;
exports["default"] = _default;